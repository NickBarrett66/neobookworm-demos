import json
from pathlib import Path

LIMIT = 155


def pass_fail(ok: bool) -> str:
    return "✅ PASS" if ok else "❌ FAIL"


def main() -> None:
    import argparse
    import sys

    ap = argparse.ArgumentParser()
    ap.add_argument("input_json_path")
    args = ap.parse_args()

    # Ensure we can print ✅/❌ on Windows terminals.
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

    # PowerShell Out-File -Encoding utf8 writes a BOM by default.
    data = json.loads(Path(args.input_json_path).read_text(encoding="utf-8-sig"))

    summary: dict[str, dict[str, bool]] = {}
    out: list[str] = []

    for site, site_obj in data.items():
        per = site_obj["per_file"]
        overall = {"canonical": True, "main": True, "meta": True, "images": True, "dims": True}

        out.append(f"### {site}")
        out.append("| Check | File | Status | Detail |")
        out.append("|---|---|---|---|")

        for fname, info in per.items():
            canon = info.get("canonical")
            c_ok = bool(canon) and ("example.com" not in canon)
            if not c_ok:
                overall["canonical"] = False
            c_detail = "-" if c_ok else ("Missing" if not canon else f"Points to {canon}")
            out.append(f"| Canonical | {fname} | {pass_fail(c_ok)} | {c_detail} |")

            has_main = bool(info.get("has_main"))
            if not has_main:
                overall["main"] = False
            out.append(f"| <main> | {fname} | {pass_fail(has_main)} | {'-' if has_main else 'Missing <main>'} |")

            desc = info.get("meta_desc")
            meta_len = info.get("meta_len")
            m_ok = desc is not None and meta_len is not None and int(meta_len) <= LIMIT
            if not m_ok:
                overall["meta"] = False
            if desc is None:
                m_detail = "Missing meta description"
            elif int(meta_len) > LIMIT:
                m_detail = f"{meta_len} chars (limit {LIMIT})"
            else:
                m_detail = "-"
            out.append(f"| Meta desc | {fname} | {pass_fail(m_ok)} | {m_detail} |")

            issues = [x for x in (info.get("img_issues") or []) if not x.get("has_webp")]
            i_ok = len(issues) == 0
            if not i_ok:
                overall["images"] = False
            if i_ok:
                i_detail = "-"
            else:
                parts = []
                for x in issues:
                    sz = x.get("size")
                    szs = f" ({sz} bytes)" if isinstance(sz, int) else ""
                    parts.append(f"{x.get('filename')}{szs} - no webp version")
                i_detail = "; ".join(parts)
            out.append(f"| Images | {fname} | {pass_fail(i_ok)} | {i_detail} |")

            missing = int(info.get("missing_dims_count") or 0)
            d_ok = missing == 0
            if not d_ok:
                overall["dims"] = False
            out.append(
                f"| Img dimensions | {fname} | {pass_fail(d_ok)} | {'-' if d_ok else f'{missing} images missing width/height'} |"
            )

        out.append("")
        summary[site] = overall

    out.append("### Summary")
    out.append("| Site | Canonical | <main> | Meta desc | Images | Img dims |")
    out.append("|---|---|---|---|---|---|")
    for site in sorted(summary.keys()):
        o = summary[site]
        out.append(
            "| "
            + " | ".join(
                [
                    site,
                    "✅" if o["canonical"] else "❌",
                    "✅" if o["main"] else "❌",
                    "✅" if o["meta"] else "❌",
                    "✅" if o["images"] else "❌",
                    "✅" if o["dims"] else "❌",
                ]
            )
            + " |"
        )

    print("\n".join(out))


if __name__ == "__main__":
    main()

