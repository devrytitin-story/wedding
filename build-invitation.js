const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Project Web/undangan-kage/kage.original.html';
const distPath = 'C:/Project Web/undangan-kage/index.html';

let content = fs.readFileSync(srcPath, 'utf8');

// 1. Update Title & Meta
content = content.replace(/<title>.*?<\/title>/s, '<title>The Wedding & Syukuran of Titin & Devry</title>');

// Add Google Fonts Cormorant Garamond & Cinzel in <head>
const fontLinks = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap" rel="stylesheet">
`;
content = content.replace('</head>', fontLinks + '</head>');

// 2. Add Custom Wedding CSS right before </style>
const weddingCSS = `
/* ═══════════════════════════════════════════════════════════════
   WEDDING INVITATION STYLES (TITIN & DEVRY)
   ═══════════════════════════════════════════════════════════════ */
:root {
  --vermilion: #e0231c;
  --gold: #C9A84C;
  --gold-light: #E8C97A;
  --gold-pale: #F5E9C8;
  --dark: #080808;
  --cream: #F0E8D5;
}

.font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif !important; }
.font-cinzel { font-family: 'Cinzel', serif !important; }

/* Floating Music Button */
.music-float-btn {
  position: fixed;
  top: 22px;
  right: 74px;
  z-index: 1001;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: rgba(18, 16, 15, 0.85);
  border: 1px solid rgba(201, 168, 76, 0.4);
  border-radius: 999px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: var(--gold-light);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 2px;
}
.music-float-btn:hover {
  border-color: var(--gold-light);
  transform: scale(1.05);
  background: rgba(28, 22, 19, 0.95);
}
.music-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 14px;
}
.music-bars span {
  width: 2.5px;
  background: var(--gold);
  border-radius: 2px;
  height: 100%;
  transform-origin: bottom;
  animation: barWave 0.8s ease-in-out infinite alternate;
}
.music-bars span:nth-child(1) { height: 6px; animation-delay: 0s; }
.music-bars span:nth-child(2) { height: 14px; animation-delay: 0.2s; }
.music-bars span:nth-child(3) { height: 9px; animation-delay: 0.4s; }
.music-bars span:nth-child(4) { height: 13px; animation-delay: 0.15s; }
.music-bars span:nth-child(5) { height: 7px; animation-delay: 0.35s; }
.music-paused .music-bars span {
  animation-play-state: paused;
  opacity: 0.35;
}
@keyframes barWave {
  0% { transform: scaleY(0.25); }
  100% { transform: scaleY(1); }
}

/* Guest Box */
.guest-box {
  margin: 22px 0 28px;
  padding: 16px 28px;
  border-radius: 14px;
  background: rgba(22, 18, 16, 0.72);
  border: 1px solid rgba(201, 168, 76, 0.32);
  display: inline-block;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  text-align: center;
  max-width: 480px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
}
.guest-box .to-label {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 3px;
  color: var(--gold-pale);
  opacity: 0.85;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}
.guest-box .guest-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-style: italic;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
}

/* Open Sanctuary CTA */
.btn-open-sanctuary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: linear-gradient(135deg, rgba(224, 35, 28, 0.92), rgba(160, 20, 18, 0.96));
  border: 1px solid rgba(255, 215, 0, 0.45);
  border-radius: 999px;
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 10px 30px rgba(224, 35, 28, 0.42), inset 0 1px 1px rgba(255, 255, 255, 0.4);
}
.btn-open-sanctuary:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 14px 42px rgba(224, 35, 28, 0.65);
}

/* Couple Cards */
.couple-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 36px;
}
@media (max-width: 768px) {
  .couple-container { grid-template-columns: 1fr; }
}
.couple-card {
  background: rgba(18, 15, 14, 0.72);
  border: 1px solid rgba(201, 168, 76, 0.28);
  border-radius: 22px;
  padding: 36px 24px;
  text-align: center;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}
.couple-card:hover {
  border-color: rgba(201, 168, 76, 0.6);
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(0,0,0,0.5);
}
.couple-avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  padding: 5px;
  margin: 0 auto 22px;
  box-shadow: 0 8px 24px rgba(201, 168, 76, 0.25);
}
.couple-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.couple-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 32px;
  font-style: italic;
  color: #fff;
  margin-bottom: 8px;
}
.couple-parents {
  font-family: 'Onest', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.6;
}

/* Countdown Widget */
.countdown-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  max-width: 560px;
  margin: 32px auto 26px;
  text-align: center;
}
.countdown-item {
  background: rgba(20, 16, 14, 0.8);
  border: 1px solid rgba(201, 168, 76, 0.32);
  border-radius: 14px;
  padding: 16px 8px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.countdown-val {
  font-family: 'Cinzel', serif;
  font-size: 36px;
  font-weight: 700;
  color: var(--gold-light);
  line-height: 1;
}
.countdown-lbl {
  font-family: 'Cinzel', serif;
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 8px;
  display: block;
}

/* Event Grid */
.event-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 36px;
}
@media (max-width: 768px) {
  .event-grid { grid-template-columns: 1fr; }
}
.event-box {
  background: rgba(22, 18, 16, 0.76);
  border: 1px solid rgba(201, 168, 76, 0.28);
  border-radius: 18px;
  padding: 32px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: relative;
  transition: all 0.3s ease;
}
.event-box:hover {
  border-color: var(--gold);
  transform: translateY(-2px);
}
.event-badge {
  font-family: 'Cinzel', serif;
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--gold-pale);
  background: rgba(201, 168, 76, 0.16);
  padding: 6px 14px;
  border-radius: 999px;
  display: inline-block;
  margin-bottom: 14px;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 32px;
}
@media (max-width: 768px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}
.gallery-item {
  aspect-ratio: 4/5;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 76, 0.28);
  cursor: pointer;
  position: relative;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.gallery-item:hover {
  transform: scale(1.03);
  border-color: var(--gold);
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.gallery-item:hover img {
  transform: scale(1.08);
}

/* Lightbox Modal */
.lightbox-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9999;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.lightbox-overlay.active {
  display: flex;
}
.lightbox-img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 12px;
  border: 2px solid var(--gold);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
}
.lightbox-close {
  position: absolute;
  top: 24px;
  right: 32px;
  color: #fff;
  font-size: 38px;
  cursor: pointer;
  transition: color 0.2s;
}
.lightbox-close:hover {
  color: var(--gold-light);
}

/* RSVP Form */
.rsvp-container {
  max-width: 620px;
  margin: 0 auto;
  background: rgba(20, 16, 15, 0.85);
  border: 1px solid rgba(201, 168, 76, 0.35);
  border-radius: 22px;
  padding: 38px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
}
.form-group {
  margin-bottom: 20px;
  text-align: left;
}
.form-label {
  display: block;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--gold-pale);
  margin-bottom: 8px;
  text-transform: uppercase;
}
.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 14px 18px;
  background: rgba(10, 8, 7, 0.72);
  border: 1px solid rgba(201, 168, 76, 0.28);
  border-radius: 10px;
  color: #fff;
  font-family: 'Onest', sans-serif;
  font-size: 14px;
  transition: border-color 0.3s;
  outline: none;
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--gold);
}
.btn-submit-rsvp {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.25);
}
.btn-submit-rsvp:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.45);
}
`;

content = content.replace('</style>', weddingCSS + '</style>');

// 3. Update Preloader Text & Kanji -> Wedding Branding
content = content.replace('Raising the mountain temple', 'Mempersiapkan Undangan Pernikahan');
content = content.replace('<div class="pre-jp jp">影の道</div>', '<div class="pre-jp font-cinzel" style="font-size:12px; letter-spacing:4px; color:var(--gold-light);">THE WEDDING · 2026</div>');

// 4. Build Replacement Body Content between <header class="nav" id="nav"> and <div class="rail" id="rail"></div>
const navStartIndex = content.indexOf('<header class="nav" id="nav">');
const railStartIndex = content.indexOf('<div class="rail" id="rail"></div>');

const weddingBody = `
<!-- ============================================================ floating music button -->
<button id="music-btn" class="music-float-btn music-paused" aria-label="Putar Musik" data-cursor>
  <div class="music-bars">
    <span></span><span></span><span></span><span></span><span></span>
  </div>
  <span class="music-label">Musik</span>
</button>
<audio id="bg-music" loop preload="auto">
  <source src="lagu.mpeg" type="audio/mpeg">
</audio>

<!-- ============================================================ nav -->
<header class="nav" id="nav">
  <a class="brand" href="#top" data-cursor>
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <circle cx="22" cy="25" r="8.6" fill="#e0231c" fill-opacity=".9"/>
      <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" stroke-width="1.5"/>
      <path d="M14 35.5h16" stroke="#dfe7e0" stroke-width="1.2" stroke-opacity=".6"/>
    </svg>
    <span class="brand-tx"><b>TITIN &amp; DEVRY</b><i>THE WEDDING &amp; SYUKURAN</i></span>
  </a>
  <nav class="nav-links" id="navlinks">
    <a class="nav-link" href="#gate" data-cursor><span>Ayat Suci</span><span class="alt">QUR'AN</span></a>
    <a class="nav-link" href="#pathways" data-cursor><span>Mempelai</span><span class="alt">COUPLE</span></a>
    <a class="nav-link" href="#lessons" data-cursor><span>Acara</span><span class="alt">EVENT</span></a>
    <a class="nav-link" href="#eternity" data-cursor><span>Lokasi &amp; Galeri</span><span class="alt">VENUE</span></a>
    <a class="nav-link" href="#rsvp" data-cursor><span>Doa &amp; RSVP</span><span class="alt">RSVP</span></a>
  </nav>
  <button class="nav-burger" aria-label="Menu" data-cursor><i></i><i></i></button>
</header>

<div class="page" id="top">

<!-- ============================================================ hero -->
<section class="hero" id="hero" data-cam="0">
  <div class="hero-top">
    <div class="eyebrow" data-rv="fade"><span class="dot"></span> ﷽ · The Wedding of</div>
    <h1 class="display h-hero font-cormorant">
      <span class="mask-line"><span>Titin Rahma Lestari</span></span>
      <span class="mask-line"><span style="font-size: 0.72em; color: var(--gold);">&amp; Devry Rizkie H</span></span>
    </h1>
    <p class="hero-sub body" data-rv="up">
      Minggu, 27 September 2026 · Walimatul 'Ursy
    </p>

    <!-- Guest Box -->
    <div class="guest-box" data-rv="up">
      <span class="to-label">Kepada Yth. Bapak/Ibu/Saudara/i:</span>
      <h3 class="guest-name" id="guest-name">Tamu Undangan</h3>
      <p style="font-size: 11px; opacity: 0.6; margin-top: 6px; font-family: 'Onest', sans-serif;">
        Mohon maaf bila ada kesalahan penulisan nama / gelar
      </p>
    </div>

    <!-- CTA Button -->
    <div style="margin-top: 18px;" data-rv="up">
      <button class="btn-open-sanctuary" id="btn-open-invitation" data-cursor>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        <span>Buka Undangan</span>
      </button>
    </div>
  </div>

  <div class="hero-spacer"></div>

  <div class="hero-foot">
    <div class="hero-cue" data-rv="fade"><span>Gulir untuk menjelajah</span><span class="track"><i></i></span></div>
    <div class="chapters" id="chips">
      <div class="chip" data-chip="0" data-rv="up" data-cursor><span class="num">01</span>
        <span class="tx"><b>Ayat Suci</b><p>QS. Ar-Rum ayat 21.</p></span></div>
      <div class="chip" data-chip="1" data-rv="up" data-cursor><span class="num">02</span>
        <span class="tx"><b>Dua Jiwa</b><p>Profil kedua mempelai.</p></span></div>
      <div class="chip" data-chip="2" data-rv="up" data-cursor><span class="num">03</span>
        <span class="tx"><b>Rangkaian Acara</b><p>Akad nikah &amp; syukuran.</p></span></div>
      <div class="chip" data-chip="3" data-rv="up" data-cursor><span class="num">04</span>
        <span class="tx"><b>Tempat &amp; Galeri</b><p>Lokasi dan kenangan.</p></span></div>
    </div>
  </div>

  <a class="peek" href="#pathways" data-view="3" data-rv="fade" data-cursor aria-label="Lihat Gerbang Janji Suci">
    <span class="peek-fr" data-frame></span>
    <span class="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#dfe7e0"/></svg></span>
    <span class="peek-cap"><b class="font-cinzel" style="font-size:16px; color:var(--gold-light); letter-spacing:2px;">2026</b><i>Gerbang Janji Suci</i></span>
  </a>

  <div class="word-fb font-cormorant" aria-hidden="true">TITIN &amp; DEVRY</div>
  <div class="hero-side" data-rv="up">
    <span class="v font-cinzel" style="letter-spacing:4px; font-size:11px; color:var(--gold-pale);">27 · 09 · 2026</span>
  </div>
</section>

<!-- ============================================================ chapter I (Ayat Suci) -->
<section class="sec" id="gate" data-cam="1">
  <div class="fg" data-fg="gate" aria-hidden="true">
    <span class="fg-el fg-wall" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-pine" data-fg-in="right">
      <img src="secret-pathways-assets/foreground/png/pine-tree.webp" alt="" width="1024" height="1438" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>01</b> — Ayat Suci</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">AR-RUM 21</span>
  </div>
  <div class="gate-grid">
    <h2 class="display h-sec font-cormorant" data-rv="up">Dan di antara tanda-tanda kekuasaan-Nya...</h2>
    <div class="gate-copy">
      <p class="lead" data-rv="up" style="font-style: italic; color: var(--gold-pale);">
        "Dia menciptakan untukmu pasangan hidup dari jenismu sendiri supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
      </p>
      <p class="body" data-rv="up">
        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.
        <br><b style="color: var(--gold);">— QS. Ar-Rum : 21</b>
      </p>
      <a class="arrowlink" href="#pathways" data-rv="fade" data-cursor>
        <span>Mengenal Kedua Mempelai</span>
        <span class="ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
      </a>
    </div>
  </div>
  <div class="gate-stats" data-rv="up">
    <div><b>27</b><span>September</span></div>
    <div><b>2026</b><span>Tahun Masehi</span></div>
    <div><b>08:00</b><span>Waktu Mulai</span></div>
    <div><b>∞</b><span>Doa &amp; Berkah</span></div>
  </div>
</section>

<!-- ============================================================ chapter II (Mempelai) -->
<section class="sec" id="pathways" data-cam="2">
  <div class="fg" data-fg="pathways" aria-hidden="true">
    <span class="fg-el fg-sakura fg-el--sway" data-fg-in="left">
      <img src="secret-pathways-assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-leaves fg-el--sway" data-fg-in="right">
      <img src="secret-pathways-assets/foreground/png/maple-leaves.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-lantern" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/stone-lantern.webp" alt="" width="1024" height="1499" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-bush" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>02</b> — Dua Jiwa, Satu Takdir</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">COUPLE</span>
  </div>
  <div style="text-align: center; margin-bottom: 24px;">
    <h2 class="display h-sec font-cormorant" data-rv="up">Dua Jiwa, Satu Takdir</h2>
    <p class="body-lg" data-rv="up" style="max-width: 620px; margin: 12px auto 0;">
      Dengan memohon rahmat dan ridho Allah SWT, kami menyatukan dua hati dan komitmen dalam ikatan suci pernikahan:
    </p>
  </div>

  <div class="couple-container" data-rv="up">
    <!-- Mempelai Wanita -->
    <div class="couple-card">
      <div class="couple-avatar">
        <img src="foto-titin.jpg" alt="Titin Rahma Lestari">
      </div>
      <h3 class="couple-name">Titin Rahma Lestari</h3>
      <p class="couple-parents">
        <b>Putri Pertama dari</b><br>
        Alm. Bapak Jajang<br>&amp; Ibu Kurniati
      </p>
    </div>

    <!-- Mempelai Pria -->
    <div class="couple-card">
      <div class="couple-avatar">
        <img src="foto-devry.jpg" alt="Devry Rizkie H">
      </div>
      <h3 class="couple-name">Devry Rizkie H</h3>
      <p class="couple-parents">
        <b>Putra Pertama dari</b><br>
        Bapak Maman Darmana<br>&amp; Ibu Irah M
      </p>
    </div>
  </div>

  <div style="margin-top: 50px;" class="sec-head" data-rv="fade">
    <span class="k"><b>Taman Doa</b> — Sudut Ketenangan</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">PRAYERS</span>
  </div>
  <div class="cards" id="cards">
    <article class="card" data-rv="up" data-view="0" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:34.2%; --gy:71.4%; --gr:18%; --gt:6.2s; --gt2:8.9s; --gc1:rgba(255,108,74,.58); --gc2:rgba(196,44,28,.22)"></i>
        <div class="card-lab"><b>Janji Suci</b><span class="font-cinzel" style="font-size:11px; color:var(--gold-pale);">AKAD</span></div>
      </div>
      <div class="card-meta"><span>Langkah Awal</span><span>01 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="1" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow glow--flame" style="--gx:70.5%; --gy:47.2%; --gr:14%; --gt:3.7s; --gt2:5.3s; --gc1:rgba(255,198,124,.62); --gc2:rgba(226,118,40,.30)"></i>
        <div class="card-lab"><b>Lentera Berkah</b><span class="font-cinzel" style="font-size:11px; color:var(--gold-pale);">DOA</span></div>
      </div>
      <div class="card-meta"><span>Cahaya Doa</span><span>02 / 03</span></div>
    </article>
    <article class="card" data-rv="up" data-view="2" data-cursor>
      <div class="card-fr" data-frame>
        <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
        <i class="glow" style="--gx:48.0%; --gy:16.8%; --gr:20%; --gt:7.3s; --gt2:11.2s; --gc1:rgba(255,138,104,.52); --gc2:rgba(208,54,36,.24)"></i>
        <div class="card-lab"><b>Sakinah</b><span class="font-cinzel" style="font-size:11px; color:var(--gold-pale);">CINTA</span></div>
      </div>
      <div class="card-meta"><span>Kedamaian Hati</span><span>03 / 03</span></div>
    </article>
  </div>
</section>

<!-- ============================================================ chapter III (Acara & Countdown) -->
<section class="sec" id="lessons" data-cam="3">
  <div class="fg" data-fg="lessons" aria-hidden="true">
    <span class="fg-el fg-wall fg-el--flip" data-fg-in="right">
      <img src="secret-pathways-assets/foreground/png/temple-wall.webp" alt="" width="1536" height="884" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-stones" data-fg-in="up"><img src="secret-pathways-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async"></span>
    <span class="fg-el fg-grass" data-fg-in="up"><img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async"></span>
  </div>
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>03</b> — Rangkaian Acara</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">SCHEDULE</span>
  </div>
  <div class="cur-head">
    <h2 class="display h-sec font-cormorant" data-rv="up">Ijab, Qabul &amp; Walimatul 'Ursy</h2>
    <p class="body-lg" data-rv="up">
      Rangkaian prosesi akad nikah dan syukuran pernikahan akan diselenggarakan pada:
    </p>
  </div>

  <!-- Countdown Timer -->
  <div class="countdown-wrap" data-rv="up">
    <div class="countdown-item">
      <div class="countdown-val" id="cd-days">00</div>
      <span class="countdown-lbl">Hari</span>
    </div>
    <div class="countdown-item">
      <div class="countdown-val" id="cd-hours">00</div>
      <span class="countdown-lbl">Jam</span>
    </div>
    <div class="countdown-item">
      <div class="countdown-val" id="cd-minutes">00</div>
      <span class="countdown-lbl">Menit</span>
    </div>
    <div class="countdown-item">
      <div class="countdown-val" id="cd-seconds">00</div>
      <span class="countdown-lbl">Detik</span>
    </div>
  </div>

  <!-- Save the Date button -->
  <div style="text-align: center; margin-bottom: 32px;" data-rv="fade">
    <a class="arrowlink" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Titin+%26+Devry&dates=20260927T010000Z/20260927T100000Z&details=Syukuran+Pernikahan+Titin+Rahma+Lestari+%26+Devry+Rizkie+H&location=Jl.+Melati+Raya+Gg+Mawar+1+No+3C+RT+08+RW+06+Jatiwarna,+Pondok+Melati,+Bekasi" target="_blank" rel="noopener" data-cursor style="display:inline-flex;">
      <span>Simpan ke Google Calendar</span>
      <span class="ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
    </a>
  </div>

  <!-- Event Cards -->
  <div class="event-grid" data-rv="up">
    <div class="event-box">
      <span class="event-badge">Prosesi Sakral</span>
      <h3 class="font-cormorant" style="font-size: 28px; font-style: italic; color: #fff; margin-bottom: 8px;">Akad Nikah</h3>
      <p style="color: var(--gold-light); font-family: 'Cinzel', serif; font-size: 13px; letter-spacing: 2px; margin-bottom: 12px;">
        MINGGU, 27 SEPTEMBER 2026
      </p>
      <p class="body" style="color: rgba(255,255,255,0.85); line-height: 1.6;">
        <b>Pukul:</b> 08.00 WIB s/d Selesai<br>
        <b>Acara:</b> Ijab &amp; Qabul<br>
        <b>Tempat:</b> Rumah Mempelai Wanita
      </p>
    </div>

    <div class="event-box">
      <span class="event-badge" style="background: rgba(224, 35, 28, 0.2); color: #ff8580;">Perayaan Syukur</span>
      <h3 class="font-cormorant" style="font-size: 28px; font-style: italic; color: #fff; margin-bottom: 8px;">Walimatul 'Ursy</h3>
      <p style="color: var(--gold-light); font-family: 'Cinzel', serif; font-size: 13px; letter-spacing: 2px; margin-bottom: 12px;">
        MINGGU, 27 SEPTEMBER 2026
      </p>
      <p class="body" style="color: rgba(255,255,255,0.85); line-height: 1.6;">
        <b>Pukul:</b> 11.00 WIB s/d Selesai<br>
        <b>Acara:</b> Ramah Tamah &amp; Doa Restu<br>
        <b>Tempat:</b> Rumah Mempelai Wanita
      </p>
    </div>
  </div>
</section>

<!-- ============================================================ chapter IV (Lokasi & Galeri) -->
<section class="sec fin" id="eternity" data-cam="4">
  <div class="fg" data-fg="eternity" aria-hidden="true">
    <span class="fg-el fg-hill" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/hill.webp" alt="" width="1774" height="887" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-ruins" data-fg-in="left"><img src="secret-pathways-assets/foreground/png/shrine-ruins.webp" alt="" width="1536" height="1001" loading="lazy" decoding="async"></span>
    <span class="fg-el fg-grass" data-fg-in="up"><img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async"></span>
    <span class="fg-el fg-sakura" data-fg-in="left"><img src="secret-pathways-assets/foreground/png/sakura-branch.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async"></span>
  </div>
  <div class="eyebrow" data-rv="fade">Lokasi Acara &amp; Kenangan</div>
  <h2 class="display font-cormorant" data-rv="up">Rumah Mempelai Wanita</h2>
  <p class="body-lg" data-rv="up" style="max-width: 600px; margin: 12px auto 28px;">
    Jl. Melati Raya Gg Mawar 1 No 3C RT 08 RW 06 Jatiwarna, Pondok Melati, Bekasi, Jawa Barat.
  </p>

  <a class="cta" href="https://maps.app.goo.gl/WVrpKhhP3yx3MbLj9" target="_blank" rel="noopener" data-rv="fade" data-cursor>
    <i></i><span>Buka Petunjuk di Google Maps</span>
    <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
  </a>

  <!-- Gallery Section -->
  <div style="margin-top: 70px;">
    <div class="sec-head" data-rv="fade">
      <span class="k"><b>Galeri Foto</b> — Kenangan Kami</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">GALLERY</span>
    </div>
    <div class="gallery-grid" data-rv="up">
      <div class="gallery-item" onclick="openLightbox('galeri-1.jpg')"><img src="galeri-1.jpg" alt="Kenangan 1" loading="lazy"></div>
      <div class="gallery-item" onclick="openLightbox('galeri-2.jpg')"><img src="galeri-2.jpg" alt="Kenangan 2" loading="lazy"></div>
      <div class="gallery-item" onclick="openLightbox('galeri-3.jpg')"><img src="galeri-3.jpg" alt="Kenangan 3" loading="lazy"></div>
      <div class="gallery-item" onclick="openLightbox('galeri-4.jpg')"><img src="galeri-4.jpg" alt="Kenangan 4" loading="lazy"></div>
      <div class="gallery-item" onclick="openLightbox('galeri-5.jpg')"><img src="galeri-5.jpg" alt="Kenangan 5" loading="lazy"></div>
      <div class="gallery-item" onclick="openLightbox('galeri-6.jpg')"><img src="galeri-6.jpg" alt="Kenangan 6" loading="lazy"></div>
    </div>
  </div>
</section>

<!-- ============================================================ footer (RSVP & Doa) -->
<footer class="foot" id="rsvp" data-cam="5">
  <div class="fg" data-fg="foot" aria-hidden="true">
    <span class="fg-el fg-bush" data-fg-in="up">
      <img src="secret-pathways-assets/foreground/png/garden-bush.webp" alt="" width="1717" height="876" loading="lazy" decoding="async">
    </span>
    <span class="fg-el fg-grass" data-fg-in="up"><img src="secret-pathways-assets/foreground/png/tall-grass.webp" alt="" width="1717" height="916" loading="lazy" decoding="async"></span>
    <span class="fg-el fg-stones" data-fg-in="up"><img src="secret-pathways-assets/foreground/png/basalt-stones.webp" alt="" width="1536" height="996" loading="lazy" decoding="async"></span>
  </div>

  <div class="sec-head" data-rv="fade">
    <span class="k"><b>05</b> — Konfirmasi Kehadiran</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">WISHES</span>
  </div>

  <div style="text-align: center; margin-bottom: 32px;" data-rv="up">
    <h2 class="display font-cormorant" style="font-size: clamp(32px, 5vw, 48px); margin-bottom: 12px;">
      Doa Restu &amp; Kehadiran
    </h2>
    <p class="body-lg" style="max-width: 580px; margin: 0 auto;">
      Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami berdua.
    </p>
  </div>

  <!-- RSVP Form -->
  <div class="rsvp-container" data-rv="up">
    <form id="rsvp-form" onsubmit="handleRsvpSubmit(event)">
      <div class="form-group">
        <label class="form-label" for="rsvp-name">Nama Lengkap</label>
        <input type="text" id="rsvp-name" class="form-input" placeholder="Masukkan nama Anda..." required>
      </div>

      <div class="form-group" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <div>
          <label class="form-label" for="rsvp-status">Konfirmasi Kehadiran</label>
          <select id="rsvp-status" class="form-select" required>
            <option value="Hadir">Saya Akan Hadir</option>
            <option value="Tidak Hadir">Maaf, Berhalangan Hadir</option>
            <option value="Masih Ragu">Masih Belum Pasti</option>
          </select>
        </div>
        <div>
          <label class="form-label" for="rsvp-count">Jumlah Tamu</label>
          <select id="rsvp-count" class="form-select">
            <option value="1 Orang">1 Orang</option>
            <option value="2 Orang">2 Orang</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="rsvp-msg">Pesan &amp; Doa Restu</label>
        <textarea id="rsvp-msg" class="form-textarea" rows="3" placeholder="Tuliskan doa atau ucapan selamat..." required></textarea>
      </div>

      <button type="submit" class="btn-submit-rsvp" data-cursor>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/></svg>
        <span>Kirim Konfirmasi via WhatsApp</span>
      </button>
    </form>

    <!-- Wishes List -->
    <div id="wishes-box" style="margin-top: 32px; border-top: 1px solid rgba(201,168,76,0.2); padding-top: 24px;">
      <h4 class="font-cinzel" style="font-size: 13px; letter-spacing: 3px; color: var(--gold-light); margin-bottom: 16px; text-transform: uppercase;">
        Doa &amp; Ucapan Terkirim (<span id="wishes-count">2</span>)
      </h4>
      <div id="wishes-list" style="display: flex; flex-direction: column; gap: 12px; max-height: 240px; overflow-y: auto; text-align: left;">
        <div style="background: rgba(10,8,7,0.6); padding: 14px 18px; border-radius: 10px; border-left: 3px solid var(--gold);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <b style="color: #fff; font-size: 14px;">Keluarga Besar</b>
            <span style="font-size: 11px; color: var(--gold-pale);">Hadir</span>
          </div>
          <p style="font-size: 13px; color: rgba(255,255,255,0.8); line-height: 1.5;">
            Selamat menempuh hidup baru untuk Titin &amp; Devry. Semoga menjadi keluarga yang sakinah, mawaddah, dan warahmah. Aamiin!
          </p>
        </div>
        <div style="background: rgba(10,8,7,0.6); padding: 14px 18px; border-radius: 10px; border-left: 3px solid var(--vermilion);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
            <b style="color: #fff; font-size: 14px;">Sahabat &amp; Rekan</b>
            <span style="font-size: 11px; color: var(--gold-pale);">Hadir</span>
          </div>
          <p style="font-size: 13px; color: rgba(255,255,255,0.8); line-height: 1.5;">
            Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khair. Bahagia selalu dan dilancarkan acaranya!
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Foot Grid / Closing -->
  <div class="foot-grid" style="margin-top: 60px;">
    <div class="foot-brand">
      <svg viewBox="0 0 44 44" fill="none" width="34" height="34" aria-hidden="true">
        <circle cx="22" cy="25" r="8.6" fill="#e0231c" fill-opacity=".9"/>
        <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" stroke-width="1.5"/>
      </svg>
      <p style="font-family: 'Cormorant Garamond', serif; font-size: 22px; font-style: italic; color: #fff;">
        With Love, Devry Rizkie H &amp; Titin Rahma Lestari
      </p>
      <p style="font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 6px;">
        Minggu, 27 September 2026 · #Copyright by Devry&amp;Titin
      </p>
    </div>
    <div>
      <h4>Navigasi</h4>
      <ul>
        <li><a href="#hero" data-cursor>Beranda</a></li>
        <li><a href="#gate" data-cursor>Ayat Suci</a></li>
        <li><a href="#pathways" data-cursor>Mempelai</a></li>
        <li><a href="#lessons" data-cursor>Rangkaian Acara</a></li>
        <li><a href="#eternity" data-cursor>Lokasi &amp; Galeri</a></li>
        <li><a href="#rsvp" data-cursor>Konfirmasi Kehadiran</a></li>
      </ul>
    </div>
    <div>
      <h4>Lokasi</h4>
      <ul>
        <li><a href="https://maps.app.goo.gl/WVrpKhhP3yx3MbLj9" target="_blank" rel="noopener" data-cursor>Google Maps</a></li>
        <li><span>Jatiwarna, Pondok Melati</span></li>
        <li><span>Bekasi, Jawa Barat</span></li>
      </ul>
    </div>
  </div>
</footer>

</div>

<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox-overlay" onclick="closeLightbox(event)">
  <span class="lightbox-close" onclick="closeLightbox(event)">&times;</span>
  <img id="lightbox-img" class="lightbox-img" src="" alt="Enlarged photo">
</div>
`;

content = content.substring(0, navStartIndex) + weddingBody + content.substring(railStartIndex);

// 5. Transform 3D background floating wordmark from 'KAGE' to 'TITIN & DEVRY'
content = content.replace("const word = 'KAGE', gl = [];", "const word = 'TITIN & DEVRY', gl = [];");
content = content.replace("const SZ = 320, TRACK = .40, PAD = 26;", "const SZ = 220, TRACK = .18, PAD = 26;");

// Replace footer console log credit
content = content.replace("KAGE — a live Kyoto mountain temple, after dark.", "The Wedding of Titin & Devry — 27 September 2026.");

// 6. Add Custom Wedding Interactivity JS before </script>
const weddingJS = `
/* ═══════════════════════════════════════════════════════════════
   WEDDING INVITATION SCRIPTS (MUSIC, COUNTDOWN, GUEST, RSVP)
   ═══════════════════════════════════════════════════════════════ */

// A. Personalized Guest Name from URL (?to=Nama or ?u=Nama)
(function initGuestName() {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get('to') || params.get('u');
  if (guest) {
    const clean = decodeURIComponent(guest.replace(/\\+/g, ' '));
    const guestEl = document.getElementById('guest-name');
    if (guestEl) guestEl.textContent = clean;
    const rsvpNameEl = document.getElementById('rsvp-name');
    if (rsvpNameEl) rsvpNameEl.value = clean;
  }
})();

// B. Music Player Controls
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;

function toggleMusic() {
  if (!bgMusic) return;
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
    musicBtn.classList.add('music-paused');
  } else {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicBtn.classList.remove('music-paused');
    }).catch(err => {
      console.log('Audio autoplay prevented:', err);
    });
  }
}

if (musicBtn) {
  musicBtn.addEventListener('click', toggleMusic);
}

// Button "Buka Undangan" starts music and scrolls to section 1
const btnOpen = document.getElementById('btn-open-invitation');
if (btnOpen) {
  btnOpen.addEventListener('click', () => {
    if (!isPlaying && bgMusic) {
      bgMusic.play().then(() => {
        isPlaying = true;
        if (musicBtn) musicBtn.classList.remove('music-paused');
      }).catch(e => console.log(e));
    }
    const gateSec = document.getElementById('gate');
    if (gateSec) {
      window.scrollTo({
        top: gateSec.offsetTop - 30,
        behavior: 'smooth'
      });
    }
  });
}

// C. Countdown Timer to 27 September 2026 08:00:00 WIB (UTC+7)
(function initCountdown() {
  const targetDate = new Date('2026-09-27T08:00:00+07:00').getTime();

  function update() {
    const now = new Date().getTime();
    const dist = targetDate - now;

    if (dist <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-minutes').textContent = '00';
      document.getElementById('cd-seconds').textContent = '00';
      return;
    }

    const days = Math.floor(dist / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dist % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-minutes');
    const sEl = document.getElementById('cd-seconds');

    if (dEl) dEl.textContent = pad(days);
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(minutes);
    if (sEl) sEl.textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
})();

// D. Lightbox Modal
window.openLightbox = function(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (lb && img) {
    img.src = src;
    lb.classList.add('active');
  }
};

window.closeLightbox = function(e) {
  if (e.target.id === 'lightbox' || e.target.classList.contains('lightbox-close')) {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('active');
  }
};

// E. RSVP Form Submit to WhatsApp & Live List
window.handleRsvpSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('rsvp-name').value.trim();
  const status = document.getElementById('rsvp-status').value;
  const count = document.getElementById('rsvp-count').value;
  const msg = document.getElementById('rsvp-msg').value.trim();

  // Add to live list
  const list = document.getElementById('wishes-list');
  if (list) {
    const item = document.createElement('div');
    item.style.cssText = 'background: rgba(10,8,7,0.7); padding: 14px 18px; border-radius: 10px; border-left: 3px solid #E8C97A; animation: fade-in-up 0.5s ease;';
    item.innerHTML = \`
      <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
        <b style="color: #fff; font-size: 14px;">\${name}</b>
        <span style="font-size: 11px; color: #F5E9C8;">\${status} (\${count})</span>
      </div>
      <p style="font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.5;">\${msg}</p>
    \`;
    list.prepend(item);
    const cnt = document.getElementById('wishes-count');
    if (cnt) cnt.textContent = parseInt(cnt.textContent || '0') + 1;
  }

  // Construct WhatsApp link
  const text = \`Halo Devry & Titin, saya *\\x24{name}* ingin mengonfirmasi:\\n\\nStatus: *\\x24{status}* (\\x24{count})\\nDoa & Ucapan: "\\x24{msg}"\\n\\nTerima kasih atas undangannya!\`;
  const waUrl = \`https://api.whatsapp.com/send?text=\${encodeURIComponent(text)}\`;

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');

  alert('Terima kasih atas doa dan konfirmasi kehadiran Anda!');
  document.getElementById('rsvp-msg').value = '';
};

// Update rail names to Indonesian
setTimeout(() => {
  const railBtns = document.querySelectorAll('#rail button');
  const indonesianNames = ['Beranda', 'Ayat Suci', 'Mempelai', 'Rangkaian Acara', 'Lokasi & Galeri', 'Konfirmasi & Doa'];
  railBtns.forEach((b, i) => {
    if (indonesianNames[i]) {
      b.title = indonesianNames[i];
      b.setAttribute('aria-label', indonesianNames[i]);
    }
  });
}, 500);
`;

const lastScriptIndex = content.lastIndexOf('</script>');
content = content.substring(0, lastScriptIndex) + weddingJS + content.substring(lastScriptIndex);

fs.writeFileSync(distPath, content, 'utf8');
console.log('SUCCESS: index.html fully rebuilt with 100% wedding theme!');
