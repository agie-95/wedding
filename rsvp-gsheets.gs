/**
 * Google Apps Script - RSVP Web App
 *
 * Cara deploy:
 * 1. Buka sheets.new, buat sheet baru
 * 2. Extensions > Apps Script
 * 3. Paste kode ini, simpan
 * 4. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Salin URL Web App, tempel di invitationData.gsheetsUrl di script.js
 * 6. Kolom sheet otomatis: Name | Status | Count | Message | SubmittedAt
 */

function doPost(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return jsonResponse_({
      success: false,
      message: 'Tidak ada data POST. Jangan jalankan doPost manual; test dari form undangan atau pakai doPostTest().',
    });
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ensureHeaderRow_(sheet);
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.name || '',
    data.status || '',
    Number(data.count) || 1,
    data.message || '',
    data.submittedAt || new Date().toISOString(),
  ]);
  return jsonResponse_({ success: true });
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  ensureHeaderRow_(sheet);
  const rows = sheet.getDataRange().getValues().slice(1);
  const result = rows
    .filter(function (row) {
      return row[0] || row[1] || row[2] || row[3] || row[4];
    })
    .map(function (row) {
      return {
        name: String(row[0] || ''),
        status: String(row[1] || ''),
        count: Number(row[2]) || 1,
        message: String(row[3] || ''),
        submittedAt: String(row[4] || ''),
      };
    });
  return jsonResponse_(result);
}

function doPostTest() {
  return doPost({
    postData: {
      contents: JSON.stringify({
        name: 'Test Tamu',
        status: 'Hadir',
        count: 2,
        message: 'Test dari Apps Script',
        submittedAt: new Date().toISOString(),
      }),
    },
  });
}

function ensureHeaderRow_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }
  sheet.appendRow(['Name', 'Status', 'Count', 'Message', 'SubmittedAt']);
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}