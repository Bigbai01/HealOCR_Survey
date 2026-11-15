import urllib.request
import ssl
import os

founders = {
    "founder_jensen.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg",
    "founder_jobs.jpg": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
    "founder_dorsey.jpg": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Jack_Dorsey_2014_%28cropped%29.jpg",
    "founder_luckey.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/87/Palmer_Luckey_Web_Summit_2022_%28cropped%29.jpg",
    "founder_elon.jpg": "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    "founder_zuck.jpg": "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    "founder_thiel.jpg": "https://upload.wikimedia.org/wikipedia/commons/2/23/Peter_Thiel_by_Gage_Skidmore.jpg",
    "founder_ellison.png": "https://upload.wikimedia.org/wikipedia/commons/0/00/Larry_Ellison_picture.png",
    "founder_altman.jpg": "https://upload.wikimedia.org/wikipedia/commons/6/63/Sam_Altman_TechCrunch_Disrupt_2019_%28cropped%29.jpg",
    "founder_bezos.jpg": "https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visiting_LAAFB_SMC_%283908618%29_%28cropped%29.jpg",
    "founder_gates.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg",
    "founder_benioff.jpg": "https://upload.wikimedia.org/wikipedia/commons/2/22/Marc_Benioff_World_Economic_Forum_2013_%28cropped%29.jpg",
    "founder_pichai.png": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Sundar_pichai.png",
    "founder_cook.jpg": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Tim_Cook_2017_%28cropped%29.jpg",
    "founder_nadella.jpg": "https://upload.wikimedia.org/wikipedia/commons/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg",
    "founder_chesky.jpg": "https://upload.wikimedia.org/wikipedia/commons/5/53/Brian_Chesky_2014_%28cropped%29.jpg"
}

ctx = ssl._create_unverified_context()
headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
os.makedirs("thai-health-quest/assets", exist_ok=True)

for filename, url in founders.items():
    dest = os.path.join("thai-health-quest/assets", filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
            content = resp.read()
            with open(dest, "wb") as f:
                f.write(content)
            print(f"Downloaded {filename}: {len(content)} bytes")
    except Exception as e:
        print(f"Failed {filename}: {e}")
