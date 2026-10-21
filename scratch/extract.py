import json
import base64
import os

with open("/Users/ajinth/Downloads/Scene (1).json") as f:
    data = json.load(f)

os.makedirs("scratch/scene_assets", exist_ok=True)
for i, a in enumerate(data.get("assets", [])):
    p = a.get("p", "")
    if p.startswith("data:image"):
        header, b64 = p.split(",", 1)
        ext = "png" if "png" in header else "jpg"
        aid = a.get("id")
        w = a.get("w")
        h = a.get("h")
        out_path = f"scratch/scene_assets/asset_{i}_{aid}.{ext}"
        with open(out_path, "wb") as img_f:
            img_f.write(base64.b64decode(b64))
        print(f"Saved {out_path} ({w}x{h})")
    if i >= 10:
        break
