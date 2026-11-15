# 🏆 REBORN AS A TECH FOUNDER! (16 Sport Personalities Meme Quiz)
**✦ byrattika.sittigool ✦**

เกมวัดจริตสายกีฬา 8 ข้อ สไตล์ **Punchline Comedy + Atompakon** พร้อมเพลง *Fluffing a Duck* และการวิเคราะห์ 16 คาแรกเตอร์ Tech-AI Founders สายมีม (Jensen Huang, Elon Musk, Mark Zuckerberg, Steve Jobs, Bill Gates ฯลฯ)

---

## 🚀 1. วิธีเชื่อมต่อ Google Sheets เพื่อเก็บคำตอบผู้เล่นทุกคนแบบ Real-time (1 นาที)

1. เปิด Google Sheets สร้างไฟล์ใหม่ที่ **[https://sheets.new](https://sheets.new)**
2. ไปที่เมนูด้านบน **Extensions (ส่วนขยาย) → Apps Script**
3. คัดลอกโค้ดทั้งหมดจากไฟล์ [`google-sheets-script.gs`](./google-sheets-script.gs) ไปวางทับใน Apps Script แล้วกด **Save (💾)**
4. กดปุ่มสีน้ำเงินขวาบน **Deploy → New deployment**
   - กดรูปเฟือง เลือกประเภทเป็น **Web app**
   - **Execute as:** เลือก `Me`
   - **Who has access:** เลือก `Anyone` *(สำคัญมาก เพื่อให้คนเล่นส่งคำตอบเข้ามาได้)*
5. กด **Deploy** แล้วคัดลอก **Web app URL** (ที่ลงท้ายด้วย `/exec`)
6. เปิดไฟล์ [`index.html`](./index.html) ค้นหาบรรทัด:
   ```js
   const GOOGLE_SHEET_WEBHOOK_URL = 'วาง_URL_ของคุณตรงนี้';
   ```
   *(ทิปพิเศษ: คุณสามารถเปิดหน้าเว็บแล้วแตะที่ลายเซ็น `✦ byrattika.sittigool ✦` ติดกัน 5 ครั้ง หรือเข้าผ่าน `?admin=1` เพื่อเปิดหน้าต่าง Admin แล้วกดปุ่ม **"🚀 ยิงข้อมูลทดสอบเข้า Sheet"** เพื่อเช็กว่าข้อมูลเข้าตารางเรียบร้อยก่อนแชร์ลิงก์จริงได้เลย!)*

---

## 🌐 2. วิธีเอาขึ้นออนไลน์ด้วย GitHub Repo ของคุณเอง (GitHub Pages / Vercel / Netlify)

โฟลเดอร์ `thai-health-quest` นี้ถูกเตรียมเป็น Git Repository แยกไว้ให้เรียบร้อยแล้ว:

### ขั้นตอน Push ขึ้น GitHub Repo ใหม่ของคุณ:
1. ไปที่ **[https://github.com/new](https://github.com/new)** สร้าง Repository ใหม่ (เช่น `reborn-as-a-tech-founder`)
2. รันคำสั่งใน Terminal จากโฟลเดอร์ `thai-health-quest`:
   ```bash
   cd /Users/accobaii/Documents/global_sustainomy/brandi-gsi-scraper/thai-health-quest
   git remote add origin https://github.com/<ชื่อ-github-ของคุณ>/<ชื่อ-repo-ใหม่>.git
   git branch -M main
   git push -u origin main
   ```

### เลือกช่องทางเปิดเว็บออนไลน์ (ฟรี 100%):
- **ทางเลือก A: GitHub Pages**
  - เข้าไปที่หน้า GitHub Repo ใหม่ของคุณ → แท็บ **Settings** → เมนูซ้ายเลือก **Pages**
  - ตรง **Branch** เลือก `main` และ `/ (root)` → กด **Save** (รอ 1 นาทีจะได้ลิงก์ออนไลน์ทันที!)
- **ทางเลือก B: Vercel (แนะนำ - เร็วมาก)**
  - เข้า [https://vercel.com/new](https://vercel.com/new) → กด Import GitHub Repo ที่เพิ่งสร้าง → กด **Deploy** ได้เลยทันที
- **ทางเลือก C: Netlify Drop (ไม่ต้องใช้คำสั่งแม้แต่บรรทัดเดียว)**
  - เข้า [https://app.netlify.com/drop](https://app.netlify.com/drop) แล้วลากโฟลเดอร์ `thai-health-quest` ทั้งโฟลเดอร์ไปวางบนหน้าเว็บ จะได้ลิงก์ออนไลน์ภายใน 5 วินาที!
