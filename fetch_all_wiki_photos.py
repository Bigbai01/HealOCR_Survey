import urllib.request
import json
import ssl
import os
import time

wiki_pages = {
    "founder_jensen": "Jensen_Huang",
    "founder_jobs": "Steve_Jobs",
    "founder_dorsey": "Jack_Dorsey",
    "founder_luckey": "Palmer_Luckey",
    "founder_elon": "Elon_Musk",
    "founder_zuck": "Mark_Zuckerberg",
    "founder_thiel": "Peter_Thiel",
    "founder_ellison": "Larry_Ellison",
    "founder_altman": "Sam_Altman",
    "founder_bezos": "Jeff_Bezos",
    "founder_gates": "Bill_Gates",
    "founder_benioff": "Marc_Benioff",
    "founder_pichai": "Sundar_Pichai",
    "founder_cook": "Tim_Cook",
    "founder_nadella": "Satya_Nadella",
    "founder_chesky": "Brian_Chesky"
}

ctx = ssl._create_unverified_context()
headers = {"User-Agent": "ThaiHealthQuestApp/1.0 (dev@healthquest.app)"}
os.makedirs("thai-health-quest/assets", exist_ok=True)

for key, page in wiki_pages.items():
    dest = f"thai-health-quest/assets/{key}.jpg"
    if os.path.exists(dest) and os.path.getsize(dest) > 10000:
        print(f"Already exists: {dest} ({os.path.getsize(dest)} bytes)")
        continue
    
    api_url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{page}"
    try:
        req = urllib.request.Request(api_url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=10) as r:
            data = json.loads(r.read())
            img_url = data.get("thumbnail", {}).get("source")
            if not img_url:
                img_url = data.get("originalimage", {}).get("source")
            
            if img_url:
                # Request image with browser headers
                img_req = urllib.request.Request(img_url, headers={"User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(img_req, context=ctx, timeout=10) as img_resp:
                    content = img_resp.read()
                    with open(dest, "wb") as f:
                        f.write(content)
                    print(f"Downloaded {dest}: {len(content)} bytes")
            else:
                print(f"No image found for {page}")
    except Exception as e:
        print(f"Error {page}: {e}")
    
    time.sleep(0.3)
