const fs = require('fs');

const generatorHTML = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin & Generator Undangan — Titin & Devry</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Onest:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0A0807;
      --card-bg: rgba(22, 17, 15, 0.85);
      --gold: #C9A84C;
      --gold-light: #E8C97A;
      --gold-pale: #F5E9C8;
      --border: rgba(201, 168, 76, 0.3);
      --text: #F0E8D5;
      --text-dim: rgba(240, 232, 213, 0.7);
      --whatsapp: #25D366;
      --danger: #e0231c;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Onest', sans-serif;
      min-height: 100vh;
      padding: 30px 20px 60px;
      background-image: radial-gradient(circle at 50% 0%, rgba(201, 168, 76, 0.12), transparent 60%);
    }
    .font-cinzel { font-family: 'Cinzel', serif; }
    .font-cormorant { font-family: 'Cormorant Garamond', serif; }

    .container {
      max-width: 1140px;
      margin: 0 auto;
    }
    header {
      text-align: center;
      margin-bottom: 36px;
    }
    header h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(32px, 4vw, 44px);
      color: #fff;
      margin-bottom: 6px;
    }
    header p {
      font-size: 13px;
      color: var(--gold-light);
      letter-spacing: 2px;
      text-transform: uppercase;
      font-family: 'Cinzel', serif;
    }
    .nav-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 28px;
    }
    .tab-btn {
      padding: 10px 22px;
      border-radius: 999px;
      background: rgba(30, 24, 21, 0.8);
      border: 1px solid var(--border);
      color: var(--text-dim);
      font-family: 'Cinzel', serif;
      font-size: 12px;
      letter-spacing: 1.5px;
      cursor: pointer;
      transition: all 0.3s;
    }
    .tab-btn.active, .tab-btn:hover {
      background: var(--gold);
      color: #080605;
      border-color: var(--gold);
      font-weight: 700;
      box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3);
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 30px;
    }
    @media (max-width: 860px) {
      .grid { grid-template-columns: 1fr; }
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 28px;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      box-shadow: 0 12px 36px rgba(0,0,0,0.5);
    }
    .card h2 {
      font-family: 'Cinzel', serif;
      font-size: 15px;
      letter-spacing: 2px;
      color: var(--gold-light);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      text-transform: uppercase;
    }
    .form-group {
      margin-bottom: 16px;
    }
    label {
      display: block;
      font-size: 11px;
      letter-spacing: 1.5px;
      color: var(--gold-pale);
      margin-bottom: 6px;
      text-transform: uppercase;
      font-family: 'Cinzel', serif;
    }
    input, select, textarea {
      width: 100%;
      padding: 12px 16px;
      background: rgba(10, 8, 7, 0.85);
      border: 1px solid var(--border);
      border-radius: 10px;
      color: #fff;
      font-size: 14px;
      outline: none;
      transition: border-color 0.3s;
      font-family: inherit;
    }
    input:focus, select:focus, textarea:focus {
      border-color: var(--gold-light);
      box-shadow: 0 0 10px rgba(201, 168, 76, 0.2);
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 22px;
      border-radius: 10px;
      font-family: 'Cinzel', serif;
      font-size: 12px;
      letter-spacing: 1.5px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: all 0.3s;
      text-decoration: none;
    }
    .btn-gold {
      background: linear-gradient(135deg, #C9A84C, #9E7D2E);
      color: #080605;
      box-shadow: 0 4px 15px rgba(201, 168, 76, 0.3);
    }
    .btn-gold:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(201, 168, 76, 0.5);
    }
    .btn-wa {
      background: linear-gradient(135deg, #25D366, #128C7E);
      color: #fff;
    }
    .btn-wa:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
    }
    .btn-danger {
      background: rgba(224, 35, 28, 0.2);
      border: 1px solid var(--danger);
      color: #ff8a85;
    }
    .btn-danger:hover {
      background: var(--danger);
      color: #fff;
    }
    .btn-outline {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text);
    }
    .btn-outline:hover {
      background: rgba(201, 168, 76, 0.15);
      border-color: var(--gold);
    }
    .result-box {
      margin-top: 20px;
      background: rgba(10, 8, 7, 0.9);
      border: 1px solid var(--gold);
      border-radius: 12px;
      padding: 18px;
    }
    .result-url {
      font-family: monospace;
      font-size: 13px;
      color: var(--gold-light);
      word-break: break-all;
      background: rgba(0,0,0,0.4);
      padding: 10px;
      border-radius: 6px;
      margin: 10px 0 14px;
    }
    .table-wrap {
      overflow-x: auto;
      margin-top: 16px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    th, td {
      padding: 12px 14px;
      text-align: left;
      border-bottom: 1px solid rgba(201, 168, 76, 0.15);
    }
    th {
      font-family: 'Cinzel', serif;
      font-size: 11px;
      letter-spacing: 1.5px;
      color: var(--gold-pale);
      background: rgba(20, 16, 14, 0.9);
    }
    tr:hover td {
      background: rgba(201, 168, 76, 0.05);
    }
    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 10px;
      font-family: 'Cinzel', serif;
      letter-spacing: 1px;
      border: 1px solid var(--border);
      background: rgba(201, 168, 76, 0.15);
      color: var(--gold-light);
    }
    .badge-hadir {
      background: rgba(37, 211, 102, 0.18);
      border-color: #25D366;
      color: #8bf0b2;
    }
    .badge-tidak {
      background: rgba(224, 35, 28, 0.18);
      border-color: #e0231c;
      color: #ff9b97;
    }
    .badge-ragu {
      background: rgba(232, 201, 122, 0.18);
      border-color: #E8C97A;
      color: #F5E9C8;
    }
    .actions-cell {
      display: flex;
      gap: 6px;
    }
    .btn-mini {
      padding: 6px 12px;
      font-size: 10px;
      border-radius: 6px;
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
      margin-bottom: 24px;
    }
    @media (max-width: 860px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
    }
    .stat-card {
      background: rgba(14, 11, 10, 0.85);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px 12px;
      text-align: center;
    }
    .stat-val {
      font-family: 'Cinzel', serif;
      font-size: 26px;
      font-weight: 700;
      color: var(--gold-light);
    }
    .stat-lbl {
      font-size: 10px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text-dim);
      margin-top: 4px;
      font-family: 'Cinzel', serif;
    }

    /* Modal Overlay */
    .modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.85);
      z-index: 9999;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    .modal-overlay.active { display: flex; }
    .modal-card {
      background: #14100E;
      border: 1px solid var(--gold);
      border-radius: 18px;
      padding: 28px;
      width: 100%;
      max-width: 520px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.8);
      position: relative;
    }
    .modal-close {
      position: absolute;
      top: 18px;
      right: 20px;
      color: #fff;
      font-size: 24px;
      cursor: pointer;
    }
  </style>
</head>
<body>

<div class="container">
  <header>
    <h1>Panel Admin &amp; Generator Undangan</h1>
    <p>Titin Rahma Lestari &amp; Devry Rizkie H</p>
    <div style="margin-top: 14px; display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
      <a href="index.html" target="_blank" class="btn btn-outline btn-mini">👁️ Buka Web Undangan Utama</a>
      <a href="index.html#gift" target="_blank" class="btn btn-outline btn-mini">🎁 Cek Tanda Kasih &amp; QRIS</a>
    </div>
  </header>

  <!-- URL Setting Bar -->
  <div class="card" style="margin-bottom: 24px; padding: 18px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px;">
    <div style="flex: 1; min-width: 280px;">
      <label for="base-url">Domain / URL Dasar Undangan:</label>
      <input type="text" id="base-url" value="https://devrytitin-story.github.io/wedding">
    </div>
    <div style="align-self: flex-end;">
      <button class="btn btn-outline" onclick="setGithubUrl()">Reset ke GitHub Pages URL</button>
    </div>
  </div>

  <div class="nav-tabs">
    <button class="tab-btn active" onclick="switchTab('single', event)">1. 💌 Input Satuan</button>
    <button class="tab-btn" onclick="switchTab('bulk', event)">2. 📋 Input Massal</button>
    <button class="tab-btn" onclick="switchTab('template', event)">3. 💬 Template WhatsApp</button>
    <button class="tab-btn" onclick="switchTab('admin-rsvp', event)">4. 👑 Kelola RSVP &amp; Doa Restu</button>
  </div>

  <!-- TAB 1: SINGLE GUEST -->
  <div id="tab-single">
    <div class="grid">
      <div class="card">
        <h2>💌 Tambah Tamu Undangan</h2>
        <form onsubmit="generateSingleLink(event)">
          <div class="form-group">
            <label for="guest-name">Nama Tamu / Gelar:</label>
            <input type="text" id="guest-name" placeholder="Contoh: Bapak Joko & Keluarga" required>
          </div>
          <div class="form-group">
            <label for="guest-phone">Nomor WhatsApp (Opsional):</label>
            <input type="text" id="guest-phone" placeholder="Contoh: 081234567890 (atau kosongkan)">
          </div>
          <div class="form-group">
            <label for="guest-category">Kategori Tamu:</label>
            <select id="guest-category">
              <option value="Keluarga">Keluarga</option>
              <option value="Sahabat">Sahabat</option>
              <option value="Rekan Kerja">Rekan Kerja</option>
              <option value="VIP">VIP / Tokoh</option>
              <option value="Umum">Umum</option>
            </select>
          </div>
          <button type="submit" class="btn btn-gold" style="width: 100%;">⚡ Generate Link Undangan</button>
        </form>
      </div>

      <div class="card">
        <h2>✨ Hasil Link &amp; Pesan</h2>
        <div id="single-result-placeholder" style="color: var(--text-dim); text-align: center; padding: 40px 0;">
          Silakan isi nama tamu di formulir sebelah kiri untuk membuat link undangan khusus.
        </div>
        <div id="single-result-content" style="display: none;">
          <div class="result-box">
            <label>Link Undangan Khusus:</label>
            <div class="result-url" id="single-link-display"></div>
            <div style="display: flex; gap: 10px; margin-bottom: 16px;">
              <button class="btn btn-gold btn-mini" onclick="copySingleLink()">📋 Salin Link Saja</button>
              <a id="btn-preview-link" href="#" target="_blank" class="btn btn-outline btn-mini">👁️ Uji Buka Link</a>
            </div>

            <label>Preview Pesan WhatsApp:</label>
            <textarea id="single-msg-display" rows="7" style="margin-top: 6px; font-size: 13px;"></textarea>

            <div style="margin-top: 14px; display: flex; gap: 10px;">
              <button class="btn btn-gold" onclick="copySingleMessage()" style="flex: 1;">📋 Salin Pesan Lengkap</button>
              <a id="btn-send-single-wa" href="#" target="_blank" class="btn btn-wa" style="flex: 1;">💬 Buka WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 2: BULK GUEST IMPORT -->
  <div id="tab-bulk" style="display: none;">
    <div class="card" style="margin-bottom: 24px;">
      <h2>📋 Import Daftar Nama Tamu (Banyak Sekaligus)</h2>
      <p style="font-size: 13px; color: var(--text-dim); margin-bottom: 16px;">
        Ketik atau salin-tempel daftar nama tamu di bawah ini. Satu baris untuk satu nama tamu. Format: <code>Nama Tamu</code> atau <code>Nama Tamu, NomorWA, Kategori</code>
      </p>

      <div class="form-group">
        <textarea id="bulk-input" rows="8" placeholder="Contoh:
Bapak Joko Widodo & Ibu Iriana
dr. Hendra Pratama, Sp.A, 081234567890, VIP
Ahmad Fauzi & Rekan, 085678901234, Sahabat
Keluarga Besar Alm. H. Abdullah, , Keluarga"></textarea>
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-gold" onclick="processBulkList()">⚡ Proses &amp; Buat Semua Link</button>
        <button class="btn btn-outline" onclick="loadSampleBulk()">📝 Muat Contoh Tamu</button>
        <button class="btn btn-outline" onclick="clearBulkTable()">🗑️ Bersihkan Tabel</button>
      </div>
    </div>

    <div class="card" id="bulk-result-card" style="display: none;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
        <h2>📊 Daftar Tamu Terbuat (<span id="bulk-count">0</span> Tamu)</h2>
        <button class="btn btn-gold btn-mini" onclick="exportBulkToCSV()">📥 Export ke File CSV / Excel</button>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Tamu</th>
              <th>Kategori</th>
              <th>Nomor WA</th>
              <th>Link Khusus</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody id="bulk-table-body"></tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- TAB 3: MESSAGE TEMPLATE -->
  <div id="tab-template" style="display: none;">
    <div class="card">
      <h2>💬 Kustomisasi Template Pesan WhatsApp</h2>
      <p style="font-size: 13px; color: var(--text-dim); margin-bottom: 18px;">
        Gunakan tag: <code>{NAMA_TAMU}</code> untuk nama tamu dan <code>{LINK_UNDANGAN}</code> untuk link undangan khusus.
      </p>

      <div class="form-group">
        <textarea id="template-text" rows="14" style="font-size: 13px; line-height: 1.6;"></textarea>
      </div>

      <div style="display: flex; gap: 12px;">
        <button class="btn btn-gold" onclick="saveTemplate()">💾 Simpan Template</button>
        <button class="btn btn-outline" onclick="resetTemplate()">🔄 Reset ke Standar</button>
      </div>
    </div>
  </div>

  <!-- TAB 4: ADMIN RSVP & WISHES MANAGEMENT -->
  <div id="tab-admin-rsvp" style="display: none;">
    <!-- Stats Counters -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-val" id="stat-total-wishes">0</div>
        <div class="stat-lbl">Total Ucapan</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" style="color: #8bf0b2;" id="stat-hadir">0</div>
        <div class="stat-lbl">Tamu Hadir</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" style="color: #ff9b97;" id="stat-tidak">0</div>
        <div class="stat-lbl">Tidak Hadir</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" style="color: #F5E9C8;" id="stat-ragu">0</div>
        <div class="stat-lbl">Masih Ragu</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" style="color: var(--gold-light);" id="stat-total-heads">0</div>
        <div class="stat-lbl">Estimasi Tamu</div>
      </div>
    </div>

    <!-- Actions & Filter Bar -->
    <div class="card" style="margin-bottom: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <h2>👑 Papan Doa, Ucapan &amp; Kehadiran</h2>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn-gold btn-mini" onclick="openAddWishModal()">➕ Tambah Ucapan Baru</button>
          <button class="btn btn-outline btn-mini" onclick="exportWishesCSV()">📥 Download CSV / Excel</button>
          <button class="btn btn-outline btn-mini" onclick="exportWishesJSON()">💾 Backup Data</button>
          <label class="btn btn-outline btn-mini" style="margin: 0; cursor: pointer;">
            📤 Import JSON
            <input type="file" id="import-json-file" accept=".json" style="display: none;" onchange="importWishesJSON(event)">
          </label>
        </div>
      </div>

      <div class="table-wrap" style="margin-top: 20px;">
        <table>
          <thead>
            <tr>
              <th style="width: 40px;">No</th>
              <th style="width: 180px;">Nama Pengirim</th>
              <th style="width: 120px;">Status</th>
              <th style="width: 90px;">Jumlah</th>
              <th>Pesan Doa &amp; Ucapan</th>
              <th style="width: 110px;">Aksi</th>
            </tr>
          </thead>
          <tbody id="wishes-table-body"></tbody>
        </table>
      </div>
    </div>

    <!-- Cloud Sync / Google Sheets Guide Card -->
    <div class="card">
      <h2>☁️ Catatan &amp; Perekaman Data Realtime Cloud</h2>
      <div style="font-size: 13px; color: var(--text-dim); line-height: 1.7;">
        <p style="margin-bottom: 10px;">
          ✨ <b>Sistem Rekam Saat Ini:</b>
          Setiap tamu yang mengisi form RSVP di web undangan akan langsung:
        </p>
        <ol style="margin-left: 20px; margin-bottom: 14px;">
          <li>Tersimpan secara lokal di browser &amp; langsung tampil di papan ucapan website.</li>
          <li>Otomatis membuka WhatsApp untuk mengirim konfirmasi langsung ke nomor Anda.</li>
        </ol>
        <p style="margin-bottom: 6px;">
          💡 <b>Ingin Seluruh Data Tamu Otomatis Masuk ke Google Spreadsheet Bersama?</b>
        </p>
        <p>
          Anda dapat menggunakan integrasi gratis <b>Google Forms Webhook</b> atau <b>Supabase</b> (tanpa biaya / gratis). Jika Anda ingin dibuatkan tautan Google Spreadsheet, Anda tinggal membuat 1 Google Form baru dan kirimkan link form-nya ke kami!
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Modal Tambah / Edit Ucapan -->
<div id="wish-modal" class="modal-overlay" onclick="closeWishModal(event)">
  <div class="modal-card" onclick="event.stopPropagation()">
    <span class="modal-close" onclick="closeWishModal()">&times;</span>
    <h2 id="modal-title" style="margin-bottom: 18px; font-family: 'Cinzel', serif; color: var(--gold-light); font-size: 16px;">Tambah Ucapan Baru</h2>
    <form onsubmit="handleSaveWishModal(event)">
      <input type="hidden" id="modal-wish-id">
      <div class="form-group">
        <label for="modal-name">Nama Tamu / Keluarga:</label>
        <input type="text" id="modal-name" required placeholder="Contoh: Keluarga Besar Om Rudi">
      </div>
      <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
          <label for="modal-status">Status Kehadiran:</label>
          <select id="modal-status">
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
            <option value="Masih Ragu">Masih Ragu</option>
          </select>
        </div>
        <div>
          <label for="modal-count">Jumlah Tamu:</label>
          <select id="modal-count">
            <option value="1 Orang">1 Orang</option>
            <option value="2 Orang">2 Orang</option>
            <option value="3 Orang">3 Orang</option>
            <option value="4 Orang">4 Orang</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label for="modal-msg">Pesan Doa Restu &amp; Ucapan:</label>
        <textarea id="modal-msg" rows="4" required placeholder="Tuliskan ucapan dan doa..."></textarea>
      </div>
      <div style="display: flex; gap: 10px; margin-top: 20px;">
        <button type="submit" class="btn btn-gold" style="flex: 1;">💾 Simpan Ucapan</button>
        <button type="button" class="btn btn-outline" onclick="closeWishModal()" style="flex: 1;">Batal</button>
      </div>
    </form>
  </div>
</div>

<script>
// Default Template
const DEFAULT_TEMPLATE = \`Kepada Yth.
Bapak/Ibu/Saudara/i: *{NAMA_TAMU}*

_Assalamu’alaikum Warahmatullahi Wabarakatuh_

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada acara Syukuran Pernikahan kami:

*Titin Rahma Lestari*
&
*Devry Rizkie H*

📅 *Hari/Tanggal:* Minggu, 27 September 2026
⏰ *Pukul:* 13.00 s/d 17.00 WIB
📍 *Tempat:* Rumah Mempelai Wanita (Jl. Abah Rimun No 133 Rt 008, RW 006, Jatiwarna, Pondok Melati, Bekasi)

Informasi lengkap mengenai lokasi, waktu, dan konfirmasi kehadiran (RSVP) dapat diakses melalui link undangan berikut:
👉 {LINK_UNDANGAN}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Atas perhatian dan kehadirannya, kami ucapkan terima kasih.

_Wassalamu’alaikum Warahmatullahi Wabarakatuh_

Kami yang berbahagia,
*Titin & Devry*\`;

const DEFAULT_WISHES = [
  { id: '1', name: 'Keluarga Besar Alm. Bapak Jajang', status: 'Hadir', count: '2 Orang', msg: 'Selamat menempuh hidup baru untuk Titin & Devry. Semoga menjadi keluarga yang sakinah, mawaddah, dan warahmah. Aamiin ya Rabbal Alamin!', time: '2026-09-01' },
  { id: '2', name: 'Keluarga Besar Bapak Maman Darmana', status: 'Hadir', count: '2 Orang', msg: "Barakallahu lakuma wa baraka 'alaika wa jama'a bainakuma fii khair. Bahagia selalu dan dilancarkan seluruh acaranya.", time: '2026-09-02' },
  { id: '3', name: 'Sahabat & Rekan', status: 'Hadir', count: '1 Orang', msg: 'Happy wedding Devry & Titin! Semoga cinta kalian selalu bersemi dan penuh keberkahan hingga akhir hayat.', time: '2026-09-03' }
];

let currentTemplate = localStorage.getItem('wedding_template') || DEFAULT_TEMPLATE;
document.getElementById('template-text').value = currentTemplate;

let bulkGuests = [];

function switchTab(tab, e) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (e && e.target) e.target.classList.add('active');

  document.getElementById('tab-single').style.display = tab === 'single' ? 'block' : 'none';
  document.getElementById('tab-bulk').style.display = tab === 'bulk' ? 'block' : 'none';
  document.getElementById('tab-template').style.display = tab === 'template' ? 'block' : 'none';
  document.getElementById('tab-admin-rsvp').style.display = tab === 'admin-rsvp' ? 'block' : 'none';

  if (tab === 'admin-rsvp') {
    renderWishesTable();
  }
}

function setGithubUrl() {
  document.getElementById('base-url').value = 'https://devrytitin-story.github.io/wedding';
}

function getBaseUrl() {
  let url = document.getElementById('base-url').value.trim();
  return url.replace(/\\/+$/, '');
}

function buildGuestUrl(name) {
  const base = getBaseUrl();
  return \`\${base}/?to=\${encodeURIComponent(name)}\`;
}

function buildMessage(name, link) {
  return currentTemplate.replace(/{NAMA_TAMU}/g, name).replace(/{LINK_UNDANGAN}/g, link);
}

// Single Link Generation
function generateSingleLink(e) {
  e.preventDefault();
  const name = document.getElementById('guest-name').value.trim();
  const phone = document.getElementById('guest-phone').value.trim().replace(/[^0-9]/g, '');
  if (!name) return;

  const url = buildGuestUrl(name);
  const msg = buildMessage(name, url);

  document.getElementById('single-link-display').textContent = url;
  document.getElementById('single-msg-display').value = msg;
  document.getElementById('btn-preview-link').href = url;

  let waUrl = '';
  if (phone) {
    let cleanPhone = phone;
    if (cleanPhone.startsWith('0')) cleanPhone = '62' + cleanPhone.slice(1);
    waUrl = \`https://api.whatsapp.com/send?phone=\${cleanPhone}&text=\${encodeURIComponent(msg)}\`;
  } else {
    waUrl = \`https://api.whatsapp.com/send?text=\${encodeURIComponent(msg)}\`;
  }
  document.getElementById('btn-send-single-wa').href = waUrl;

  document.getElementById('single-result-placeholder').style.display = 'none';
  document.getElementById('single-result-content').style.display = 'block';
}

function copySingleLink() {
  const text = document.getElementById('single-link-display').textContent;
  navigator.clipboard.writeText(text).then(() => alert('Link undangan berhasil disalin!'));
}

function copySingleMessage() {
  const text = document.getElementById('single-msg-display').value;
  navigator.clipboard.writeText(text).then(() => alert('Pesan WhatsApp lengkap berhasil disalin!'));
}

// Bulk Processing
function processBulkList() {
  const raw = document.getElementById('bulk-input').value.trim();
  if (!raw) return alert('Silakan masukkan minimal 1 nama tamu.');

  const lines = raw.split('\\n');
  bulkGuests = [];

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;
    const parts = trimmed.split(',').map(p => p.trim());
    const name = parts[0];
    const phone = parts[1] || '';
    const category = parts[2] || 'Umum';

    const url = buildGuestUrl(name);
    const msg = buildMessage(name, url);

    bulkGuests.push({ name, phone, category, url, msg });
  });

  renderBulkTable();
}

function renderBulkTable() {
  const tbody = document.getElementById('bulk-table-body');
  tbody.innerHTML = '';

  bulkGuests.forEach((g, idx) => {
    let cleanPhone = g.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.startsWith('0')) cleanPhone = '62' + cleanPhone.slice(1);
    const waUrl = cleanPhone
      ? \`https://api.whatsapp.com/send?phone=\${cleanPhone}&text=\${encodeURIComponent(g.msg)}\`
      : \`https://api.whatsapp.com/send?text=\${encodeURIComponent(g.msg)}\`;

    const tr = document.createElement('tr');
    tr.innerHTML = \`
      <td>\${idx + 1}</td>
      <td><b>\${escapeHtml(g.name)}</b></td>
      <td><span class="badge">\${escapeHtml(g.category)}</span></td>
      <td>\${g.phone || '-'}</td>
      <td><a href="\${g.url}" target="_blank" style="color:var(--gold-light); font-size:11px; text-decoration:underline;">Lihat Link</a></td>
      <td class="actions-cell">
        <button class="btn btn-gold btn-mini" onclick="copyText('\${escapeHtml(g.url)}', 'Link')">📋 Link</button>
        <button class="btn btn-outline btn-mini" onclick="copyText('\${escapeHtml(g.msg)}', 'Pesan')">📋 Pesan</button>
        <a href="\${waUrl}" target="_blank" class="btn btn-wa btn-mini">💬 WA</a>
      </td>
    \`;
    tbody.appendChild(tr);
  });

  document.getElementById('bulk-count').textContent = bulkGuests.length;
  document.getElementById('bulk-result-card').style.display = 'block';
}

function loadSampleBulk() {
  document.getElementById('bulk-input').value = \`Bapak Joko Widodo & Ibu Iriana, , VIP
dr. Hendra Pratama, Sp.A, 081234567890, VIP
Ahmad Fauzi & Rekan, 085678901234, Sahabat
Keluarga Besar Alm. H. Abdullah, , Keluarga
Rina Melati, S.Kom, 081987654321, Rekan Kerja\`;
}

function clearBulkTable() {
  bulkGuests = [];
  document.getElementById('bulk-input').value = '';
  document.getElementById('bulk-table-body').innerHTML = '';
  document.getElementById('bulk-result-card').style.display = 'none';
}

function exportBulkToCSV() {
  if (!bulkGuests.length) return alert('Tidak ada data tamu untuk diexport.');
  let csv = 'No,Nama Tamu,Kategori,Nomor WA,Link Undangan\\n';
  bulkGuests.forEach((g, i) => {
    csv += \`"\${i+1}","\${g.name.replace(/"/g, '""')}","\${g.category}","\${g.phone}","\${g.url}"\\n\`;
  });
  downloadFile(csv, 'daftar-tamu-titin-devry.csv', 'text/csv;charset=utf-8;');
}

function saveTemplate() {
  currentTemplate = document.getElementById('template-text').value;
  localStorage.setItem('wedding_template', currentTemplate);
  alert('Template pesan WhatsApp berhasil disimpan!');
}

function resetTemplate() {
  if (confirm('Kembalikan template pesan ke teks bawaan?')) {
    currentTemplate = DEFAULT_TEMPLATE;
    document.getElementById('template-text').value = DEFAULT_TEMPLATE;
    localStorage.removeItem('wedding_template');
  }
}

// ═══════════════════════════════════════════════════════════════
// WISHES & RSVP ADMIN FUNCTIONS
// ═══════════════════════════════════════════════════════════════
function getStoredWishes() {
  try {
    const raw = localStorage.getItem('wedding_wishes');
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return [...DEFAULT_WISHES];
}

function saveStoredWishes(list) {
  localStorage.setItem('wedding_wishes', JSON.stringify(list));
}

function renderWishesTable() {
  const wishes = getStoredWishes();
  const tbody = document.getElementById('wishes-table-body');
  tbody.innerHTML = '';

  let totalHadir = 0;
  let totalTidak = 0;
  let totalRagu = 0;
  let totalHeads = 0;

  wishes.forEach((w, idx) => {
    const heads = parseInt(w.count) || 1;
    if (w.status === 'Hadir') {
      totalHadir++;
      totalHeads += heads;
    } else if (w.status === 'Tidak Hadir') {
      totalTidak++;
    } else {
      totalRagu++;
    }

    let badgeClass = 'badge-ragu';
    if (w.status === 'Hadir') badgeClass = 'badge-hadir';
    if (w.status === 'Tidak Hadir') badgeClass = 'badge-tidak';

    const tr = document.createElement('tr');
    tr.innerHTML = \`
      <td>\${idx + 1}</td>
      <td><b>\${escapeHtml(w.name)}</b></td>
      <td><span class="badge \${badgeClass}">\${escapeHtml(w.status)}</span></td>
      <td>\${escapeHtml(w.count || '1 Orang')}</td>
      <td style="line-height:1.5;">\${escapeHtml(w.msg)}</td>
      <td class="actions-cell">
        <button class="btn btn-gold btn-mini" onclick="openEditWishModal('\${w.id}')">✏️ Edit</button>
        <button class="btn btn-danger btn-mini" onclick="deleteWish('\${w.id}')">🗑️</button>
      </td>
    \`;
    tbody.appendChild(tr);
  });

  document.getElementById('stat-total-wishes').textContent = wishes.length;
  document.getElementById('stat-hadir').textContent = totalHadir;
  document.getElementById('stat-tidak').textContent = totalTidak;
  document.getElementById('stat-ragu').textContent = totalRagu;
  document.getElementById('stat-total-heads').textContent = totalHeads + ' Orang';
}

function openAddWishModal() {
  document.getElementById('modal-title').textContent = 'Tambah Ucapan Baru';
  document.getElementById('modal-wish-id').value = '';
  document.getElementById('modal-name').value = '';
  document.getElementById('modal-status').value = 'Hadir';
  document.getElementById('modal-count').value = '2 Orang';
  document.getElementById('modal-msg').value = '';
  document.getElementById('wish-modal').classList.add('active');
}

function openEditWishModal(id) {
  const wishes = getStoredWishes();
  const wish = wishes.find(w => String(w.id) === String(id));
  if (!wish) return;

  document.getElementById('modal-title').textContent = 'Edit Doa & Ucapan';
  document.getElementById('modal-wish-id').value = wish.id;
  document.getElementById('modal-name').value = wish.name;
  document.getElementById('modal-status').value = wish.status;
  document.getElementById('modal-count').value = wish.count || '1 Orang';
  document.getElementById('modal-msg').value = wish.msg;
  document.getElementById('wish-modal').classList.add('active');
}

function closeWishModal() {
  document.getElementById('wish-modal').classList.remove('active');
}

function handleSaveWishModal(e) {
  e.preventDefault();
  const id = document.getElementById('modal-wish-id').value;
  const name = document.getElementById('modal-name').value.trim();
  const status = document.getElementById('modal-status').value;
  const count = document.getElementById('modal-count').value;
  const msg = document.getElementById('modal-msg').value.trim();

  let wishes = getStoredWishes();

  if (id) {
    // Edit existing
    wishes = wishes.map(w => {
      if (String(w.id) === String(id)) {
        return { ...w, name, status, count, msg };
      }
      return w;
    });
  } else {
    // Add new
    wishes.unshift({
      id: Date.now().toString(),
      name,
      status,
      count,
      msg,
      time: new Date().toISOString()
    });
  }

  saveStoredWishes(wishes);
  closeWishModal();
  renderWishesTable();
  alert('Data doa & ucapan berhasil disimpan!');
}

function deleteWish(id) {
  if (confirm('Yakin ingin menghapus ucapan ini?')) {
    let wishes = getStoredWishes();
    wishes = wishes.filter(w => String(w.id) !== String(id));
    saveStoredWishes(wishes);
    renderWishesTable();
  }
}

function exportWishesCSV() {
  const wishes = getStoredWishes();
  if (!wishes.length) return alert('Belum ada ucapan untuk diexport.');
  let csv = 'No,Nama Tamu,Status Kehadiran,Jumlah Tamu,Pesan Doa Restu\\n';
  wishes.forEach((w, i) => {
    csv += \`"\${i+1}","\${(w.name||'').replace(/"/g, '""')}","\${w.status}","\${w.count||'1'}","\${(w.msg||'').replace(/"/g, '""')}"\\n\`;
  });
  downloadFile(csv, 'rsvp-doa-titin-devry.csv', 'text/csv;charset=utf-8;');
}

function exportWishesJSON() {
  const wishes = getStoredWishes();
  downloadFile(JSON.stringify(wishes, null, 2), 'backup-wishes-titin-devry.json', 'application/json');
}

function importWishesJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const data = JSON.parse(evt.target.result);
      if (Array.isArray(data)) {
        saveStoredWishes(data);
        renderWishesTable();
        alert('Data ucapan berhasil diimport!');
      } else {
        alert('Format file JSON tidak valid.');
      }
    } catch(err) {
      alert('Gagal membaca file JSON.');
    }
  };
  reader.readAsText(file);
}

// Helpers
function copyText(str, label) {
  navigator.clipboard.writeText(str).then(() => alert(label + ' berhasil disalin!'));
}

function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}
</script>

</body>
</html>`;

fs.writeFileSync('C:/Project Web/undangan-kage/generator.html', generatorHTML, 'utf8');
console.log('SUCCESS: generator.html created with full Admin RSVP & Wishes Manager!');
