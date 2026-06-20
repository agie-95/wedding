# Wedding Invitation

Undangan pernikahan statis dengan RSVP, countdown, musik, galeri, maps, dan opsi sinkronisasi RSVP ke Google Sheets.

## RSVP ke Google Sheets

1. Buka `https://sheets.new`, buat spreadsheet baru.
2. Buka `Extensions > Apps Script`.
3. Paste isi file `rsvp-gsheets.gs` ke editor Apps Script.
4. Klik `Deploy > New deployment > Web app`.
5. Set:
   - `Execute as`: `Me`
   - `Who has access`: `Anyone`
6. Klik `Deploy`, lalu copy URL Web App.
7. Buka `script.js`, isi:

```js
gsheetsUrl: "PASTE_URL_WEB_APP_DI_SINI",
```

Setelah itu form RSVP akan `POST` ke Google Sheets dan daftar konfirmasi di halaman akan `GET` dari sheet yang sama. Kalau URL kosong atau Google Sheets gagal diakses, aplikasi fallback ke `localStorage` browser.

## Catatan Testing Apps Script

Jangan klik Run pada fungsi doPost langsung karena Apps Script tidak mengirim objek request e.postData saat dijalankan manual. Kalau mau test dari editor Apps Script, pilih fungsi doPostTest lalu klik Run. Untuk test real, deploy Web App dan submit dari form undangan.
