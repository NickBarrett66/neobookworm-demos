param(
  [Parameter(Mandatory = $true)]
  [string]$InputJsonPath
)

$ErrorActionPreference = 'Stop'

$LIMIT = 155

function PassFail([bool]$ok) {
  if ($ok) { return '✅ PASS' }
  return '❌ FAIL'
}

$data = Get-Content -Raw -LiteralPath $InputJsonPath | ConvertFrom-Json

$summary = @{}
$outLines = New-Object System.Collections.Generic.List[string]

foreach ($siteProp in $data.PSObject.Properties) {
  $site = $siteProp.Name
  $siteObj = $siteProp.Value
  $per = $siteObj.per_file

  $overall = [ordered]@{
    canonical = $true
    main = $true
    meta = $true
    images = $true
    dims = $true
  }

  $outLines.Add("### $site")
  $outLines.Add('| Check | File | Status | Detail |')
  $outLines.Add('|---|---|---|---|')

  foreach ($fileProp in $per.PSObject.Properties) {
    $fname = $fileProp.Name
    $info = $fileProp.Value

    # Check 1 — Canonical tag
    $canon = $info.canonical
    $cok = ($null -ne $canon -and $canon -ne '' -and ($canon -notlike '*example.com*'))
    if (-not $cok) { $overall.canonical = $false }
    if ($cok) {
      $cdetail = '-'
    } elseif ($null -eq $canon -or $canon -eq '') {
      $cdetail = 'Missing'
    } else {
      $cdetail = "Points to $canon"
    }
    $outLines.Add("| Canonical | $fname | $(PassFail $cok) | $cdetail |")

    # Check 2 — <main> landmark
    $mok = [bool]$info.has_main
    if (-not $mok) { $overall.main = $false }
    if ($mok) { $mainDetail = '-' } else { $mainDetail = 'Missing <main>' }
    $outLines.Add("| <main> | $fname | $(PassFail $mok) | $mainDetail |")

    # Check 3 — Meta description length
    $desc = $info.meta_desc
    $len = $info.meta_len
    $dok = ($null -ne $desc -and $null -ne $len -and [int]$len -le $LIMIT)
    if (-not $dok) { $overall.meta = $false }
    if ($null -eq $desc) {
      $ddetail = 'Missing meta description'
    } elseif ([int]$len -gt $LIMIT) {
      $ddetail = "$len chars (limit $LIMIT)"
    } else {
      $ddetail = '-'
    }
    $outLines.Add("| Meta desc | $fname | $(PassFail $dok) | $ddetail |")

    # Check 4 — Image formats (.png/.jpg missing .webp in images/)
    $issues = @()
    foreach ($iss in ($info.img_issues | ForEach-Object { $_ })) {
      if (-not [bool]$iss.has_webp) { $issues += $iss }
    }
    $iok = ($issues.Count -eq 0)
    if (-not $iok) { $overall.images = $false }

    if ($iok) {
      $idetail = '-'
    } else {
      $parts = @()
      foreach ($iss in $issues) {
        $sz = $iss.size
        if ($sz) { $szs = " ($sz bytes)" } else { $szs = '' }
        $parts += ("$($iss.filename)$szs - no webp version")
      }
      $idetail = ($parts -join '; ')
    }
    $outLines.Add("| Images | $fname | $(PassFail $iok) | $idetail |")

    # Check 5 — Image dimensions
    $md = [int]$info.missing_dims_count
    $dimOk = ($md -eq 0)
    if (-not $dimOk) { $overall.dims = $false }
    if ($dimOk) { $dimDetail = '-' } else { $dimDetail = "$md images missing width/height" }
    $outLines.Add("| Img dimensions | $fname | $(PassFail $dimOk) | $dimDetail |")
  }

  $outLines.Add('')
  $summary[$site] = $overall
}

$outLines.Add('### Summary')
$outLines.Add('| Site | Canonical | <main> | Meta desc | Images | Img dims |')
$outLines.Add('|---|---|---|---|---|---|')

foreach ($site in ($summary.Keys | Sort-Object)) {
  $o = $summary[$site]
  $outLines.Add("| $site | $((if ($o.canonical) { '✅' } else { '❌' })) | $((if ($o.main) { '✅' } else { '❌' })) | $((if ($o.meta) { '✅' } else { '❌' })) | $((if ($o.images) { '✅' } else { '❌' })) | $((if ($o.dims) { '✅' } else { '❌' })) |")
}

$outLines -join "`n"

