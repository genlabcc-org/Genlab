import json, base64, os

with open("/Users/ajinth/Downloads/Scene (1).json") as f:
    d = json.load(f)

os.makedirs("scratch/scene_assets_all", exist_ok=True)
for i in range(9):
    a = d["assets"][i]
    p = a.get("p", "")
    header, b64 = p.split(",", 1)
    ext = "png" if "png" in header else "jpg"
    out_path = f"scratch/scene_assets_all/asset_{i}.{ext}"
    with open(out_path, "wb") as f_out:
        f_out.write(base64.b64decode(b64))
    print(f"Saved {out_path} ({a.get('w')}x{a.get('h')})")
