param(
  [Parameter(Mandatory = $false)]
  [string]$OutputJsonPath
)

$ErrorActionPreference = 'Stop'

$sites = @(
  'swift-electrical',
  'hartley-plumbing',
  'ridgecoat-decorators',
  'brush-to-brush-decorating-services-ltd',
  'fraynes-lofts-ltd',
  'lee-morgan-heating-and-plumbing-ltd'
)

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$sitesRoot = Join-Path $repoRoot 'sites'

function Get-ImagesIndex([string]$sitePath) {
  $imagesDir = Join-Path $sitePath 'images'
  $idx = @{}
  if (Test-Path -LiteralPath $imagesDir) {
    Get-ChildItem -LiteralPath $imagesDir -File | ForEach-Object {
      $idx[$_.Name.ToLowerInvariant()] = [ordered]@{
        name = $_.Name
        size = $_.Length
      }
    }
  }
  return [ordered]@{
    exists = (Test-Path -LiteralPath $imagesDir)
    dir = $imagesDir
    index = $idx
  }
}

function Get-PageAudit([string]$filePath, [hashtable]$imagesIndex) {
  $txt = Get-Content -Raw -LiteralPath $filePath

  $canonical = $null
  if ($txt -match '(?is)<link[^>]*rel=[''"]canonical[''"][^>]*href=[''"]([^''"]+)[''"]') {
    $canonical = $Matches[1].Trim()
  }

  $hasMain = [regex]::IsMatch($txt, '(?is)<main(\s|>)')

  $metaDesc = $null
  if ($txt -match '(?is)<meta[^>]*name=[''"]description[''"][^>]*content=[''"]([^''"]*)[''"]') {
    $metaDesc = $Matches[1]
  }

  $imgTags = [regex]::Matches($txt, '(?is)<img\b[^>]*>')
  $imgs = New-Object System.Collections.Generic.List[string]
  $missingDims = 0

  foreach ($m in $imgTags) {
    $tag = $m.Value
    if ($tag -notmatch '(?is)\ssrc=[''"]([^''"]+)[''"]') { continue }

    $src = $Matches[1]
    $src = ($src -split '[?#]')[0].Trim()
    $imgs.Add($src)

    $hasW = [regex]::IsMatch($tag, '(?is)\swidth=[''"]')
    $hasH = [regex]::IsMatch($tag, '(?is)\sheight=[''"]')
    if (-not ($hasW -and $hasH)) { $missingDims++ }
  }

  $imgIssues = @()
  foreach ($src in $imgs) {
    $low = $src.ToLowerInvariant()
    if ($low.StartsWith('http:') -or $low.StartsWith('https:') -or $low.StartsWith('data:')) { continue }

    $fileName = [System.IO.Path]::GetFileName($low)
    if ($fileName -match '\.(png|jpe?g)$') {
      $base = [regex]::Replace($fileName, '\.(png|jpe?g)$', '')
      $webp = "$base.webp"
      $hasWebp = $imagesIndex.ContainsKey($webp.ToLowerInvariant())

      $size = $null
      if ($imagesIndex.ContainsKey($fileName.ToLowerInvariant())) {
        $size = $imagesIndex[$fileName.ToLowerInvariant()].size
      }

      $imgIssues += [ordered]@{
        src = $src
        filename = $fileName
        expected_webp = $webp
        has_webp = $hasWebp
        size = $size
      }
    }
  }

  return [ordered]@{
    canonical = $canonical
    has_main = $hasMain
    meta_desc = $metaDesc
    meta_len = if ($null -ne $metaDesc) { $metaDesc.Length } else { $null }
    imgs = $imgs
    missing_dims_count = $missingDims
    img_issues = $imgIssues
  }
}

$out = [ordered]@{}
foreach ($site in $sites) {
  $sitePath = Join-Path $sitesRoot $site
  $htmlFiles = Get-ChildItem -LiteralPath $sitePath -Filter '*.html' -File | Sort-Object Name
  $images = Get-ImagesIndex $sitePath

  $perFile = [ordered]@{}
  $siteImgIssues = @()

  foreach ($f in $htmlFiles) {
    $page = Get-PageAudit -filePath $f.FullName -imagesIndex $images.index
    $perFile[$f.Name] = $page
    $siteImgIssues += ($page.img_issues | ForEach-Object { $_ + [ordered]@{ file = $f.Name } })
  }

  $out[$site] = [ordered]@{
    html_files = $htmlFiles.Name
    images_dir_exists = $images.exists
    images_dir = $images.dir
    images_index = $images.index
    per_file = $perFile
    img_issues = $siteImgIssues
  }
}

$json = $out | ConvertTo-Json -Depth 10 -Compress

if ($OutputJsonPath -and $OutputJsonPath.Trim()) {
  $dir = Split-Path -Parent $OutputJsonPath
  if ($dir -and -not (Test-Path -LiteralPath $dir)) {
    New-Item -ItemType Directory -Path $dir | Out-Null
  }
  $json | Out-File -LiteralPath $OutputJsonPath -Encoding utf8
} else {
  $json
}

