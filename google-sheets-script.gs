/**
 * Google Apps Script สำหรับรับผลคำตอบจากเกม "REBORN AS A TECH FOUNDER!" แบบ Real-time
 *
 * วิธีติดตั้ง (ใช้เวลา 1 นาที):
 * 1. สร้างไฟล์ Google Sheet ใหม่ที่ https://sheets.new
 * 2. ไปที่เมนู Extensions (ส่วนขยาย) -> Apps Script
 * 3. ลบโค้ดเดิมออกทั้งหมด แล้ววางโค้ดนี้ลงไป กด Save (ไอคอนแผ่นดิสก์)
 * 4. กดปุ่มสีน้ำเงินขวาบน "Deploy" (ทำให้ใช้งานได้) -> "New deployment" (การทำให้ใช้งานได้รายการใหม่)
 * 5. กดรูปเฟืองตรง Select type เลือก "Web app" (เว็บแอป)
 *    - Execute as (ดำเนินการในฐานะ):เลือก "Me" (ฉัน)
 *    - Who has access (ผู้ที่มีสิทธิ์เข้าถึง): เลือก "Anyone" (ทุกคน) **สำคัญมาก**
 * 6. กด Deploy -> Authorize access (อนุญาตสิทธิ์) -> คัดลอก "Web app URL" (ที่ลงท้ายด้วย /exec)
 * 7. นำ Web app URL ไปใส่ในบรรทัด `const GOOGLE_SHEET_WEBHOOK_URL = 'วางตรงนี้';` ในไฟล์ index.html
 *    (หรือเปิดเว็บของคุณแล้วแตะที่ลายเซ็น ✦ byrattika.sittigool ✦ 5 ครั้งติดกัน เพื่อวาง URL และกดยิงทดสอบได้เลย!)
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rawBody = e.postData && e.postData.contents ? e.postData.contents : '{}';
    var data = JSON.parse(rawBody);

    if (data.action === 'clear') {
      sheet.clear();
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'cleared' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var headers = [
      'Timestamp (Thai Time)',
      'ISO Timestamp',
      'Session ID',
      'Matched Founder',
      'Sport Personality Type',
      'HP (พลังกาย)',
      'Sanity (พลังสมอง)',
      'Drive Stat',
      'Data Stat',
      'Org Stat',
      'Discipline Stat',
      'Q1: Social Style (Code)',
      'Q2: Motivation (Code)',
      'Q3: Health Concern (Code)',
      'Q4: Lab Numbers (Code)',
      'Q5: Workout Prep (Code)',
      'Q6: Records Storage (Code)',
      'Q7: Routine Adherence (Code)',
      'Q8: Appointment Tracking (Code)',
      'Q1 (คำตอบภาษาไทย)',
      'Q2 (คำตอบภาษาไทย)',
      'Q3 (คำตอบภาษาไทย)',
      'Q4 (คำตอบภาษาไทย)',
      'Q5 (คำตอบภาษาไทย)',
      'Q6 (คำตอบภาษาไทย)',
      'Q7 (คำตอบภาษาไทย)',
      'Q8 (คำตอบภาษาไทย)',
      'Feedback Tags (ฟีเจอร์ที่อยากได้)',
      'Feedback Text (ปัญหาสุขภาพ/ข้อเสนอแนะ)',
      'User Contact (IG/LINE/Email)',
      'Device OS',
      'Browser Environment'
    ];

    // สร้างหัวตารางอัตโนมัติในแถวที่ 1 ถ้าชีตยังว่างอยู่
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#ffd026');
      sheet.setFrozenRows(1);
    }

    var thaiTime = Utilities.formatDate(new Date(), 'Asia/Bangkok', 'yyyy-MM-dd HH:mm:ss');

    var row = [
      thaiTime,
      data.completed_at || new Date().toISOString(),
      data.session_id || '',
      data.founder_name || '',
      data.sport_type || '',
      data.hp_physical || '',
      data.sanity_brain || '',
      data.drive_stat || '',
      data.data_stat || '',
      data.org_stat || '',
      data.disc_stat || '',
      data.running_social_style || '',
      data.running_motivation || '',
      data.health_concern_response || '',
      data.lab_numbers_handling || '',
      data.workout_prep_style || '',
      data.records_storage_style || '',
      data.routine_adherence_habit || '',
      data.appointment_tracking_habit || '',
      data.q1_text || '',
      data.q2_text || '',
      data.q3_text || '',
      data.q4_text || '',
      data.q5_text || '',
      data.q6_text || '',
      data.q7_text || '',
      data.q8_text || '',
      data.feedback_tags || '',
      data.feedback_text || '',
      data.user_contact || '',
      data.device_os || '',
      data.browser_env || ''
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
