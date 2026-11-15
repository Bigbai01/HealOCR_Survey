/**
 * GOOGLE APPS SCRIPT FOR THAI HEALTH QUEST SURVEY
 * ------------------------------------------------
 * วิธีติดตั้ง (ทำเพียง 1 ครั้งใน 1 นาที):
 * 1. เปิด Google Sheets ใหม่ (https://sheets.new)
 * 2. ไปที่เมนู "Extensions" (ส่วนขยาย) -> "Apps Script"
 * 3. ลบโค้ดเดิมทั้งหมดออก แล้ววางโค้ดด้านล่างนี้ลงไป
 * 4. กดปุ่ม "Deploy" (การทำให้ใช้งานได้) ด้านขวาบน -> "New deployment"
 * 5. เลือกประเภท: "Web app"
 *    - Description: "Thai Health Quest Survey Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (ทุกคน)  <-- สำคัญมาก! เพื่อให้ผู้เล่นส่งคำตอบได้
 * 6. กด "Deploy" แล้ว Copy ลิงก์ "Web app URL" ที่ได้
 * 7. นำ Web app URL มาใส่ใน index.html ตรงตัวแปร window.GOOGLE_SHEETS_URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if headers exist, if not, create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Contact (LINE/Phone/Email)",
        "Persona Title",
        "Running Habit",
        "Lab Numbers Understanding",
        "Hospital Records Management",
        "Pill & Appointment Adherence",
        "Top Feature Wanted",
        "Merit Score",
        "Karma Score",
        "User Notes"
      ]);
      // Format Header Row
      sheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#f3f4f6");
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.completed_at || new Date().toISOString(),
      data.contact || "",
      data.final_persona || "",
      data.running_habit || "",
      data.lab_understanding || "",
      data.records_management || "",
      data.adherence_habit || "",
      data.top_feature_priority || "",
      data.merit_score || 0,
      data.karma_score || 0,
      data.notes || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
