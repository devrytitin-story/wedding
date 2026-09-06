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
   WEDDING INVITATION STYLES — JAVANESE JOGLO & GEBYOK EDITION
   ═══════════════════════════════════════════════════════════════ */
:root {
  --vermilion: #e0231c;
  --gold: #C9A84C;
  --gold-light: #E8C97A;
  --gold-pale: #F5E9C8;
  --dark: #080808;
  --cream: #F0E8D5;
  --teak: #3D2B1F;
}

.font-cormorant { font-family: 'Cormorant Garamond', Georgia, serif !important; }
.font-cinzel { font-family: 'Cinzel', serif !important; }

/* ═══════════════════════════════════════════════════════════════
   SCROLL LOCK ON COVER (LOCKED UNTIL BUKA UNDANGAN IS CLICKED)
   ═══════════════════════════════════════════════════════════════ */
html.is-locked, body.is-locked {
  overflow: hidden !important;
  height: 100vh !important;
  max-height: 100vh !important;
  position: fixed !important;
  width: 100% !important;
  touch-action: none !important;
  -webkit-overflow-scrolling: auto !important;
}
body.is-locked .sec, 
body.is-locked .foot, 
body.is-locked .rail, 
body.is-locked .nav-links,
body.is-locked .hero-foot,
body.is-locked .peek,
body.is-locked .hero-side {
  pointer-events: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}
body.is-locked .hero {
  height: 100vh !important;
  min-height: 100vh !important;
  max-height: 100vh !important;
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px !important;
}
body.is-locked .hero-top {
  max-width: 600px !important;
  padding-top: 0 !important;
  margin: 0 auto !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
body.is-locked .hero-spacer {
  display: none !important;
}

/* Hide broken foreground 2D cutouts so 3D scene & typography are clean and unobscured */
.fg, #fg-sky, .fg-el {
  display: none !important;
}

/* Glass Card Background for Content Sections to guarantee maximum readability */
.sec-glass-card {
  background: rgba(14, 11, 10, 0.84);
  border: 1px solid rgba(201, 168, 76, 0.35);
  border-radius: 24px;
  padding: clamp(24px, 4vw, 48px);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.65);
  max-width: 1040px;
  margin: 0 auto;
}

/* 3 Main Story Cards & Peek Image Overrides */
.card:nth-child(1) .card-fr {
  background:
    linear-gradient(180deg, rgba(3,6,9,.08) 25%, rgba(3,6,9,.75) 100%),
    url('love.png') center center / contain no-repeat !important;
  background-color: #0d0a08 !important;
}
.card:nth-child(2) .card-fr {
  background:
    linear-gradient(180deg, rgba(3,6,9,.08) 25%, rgba(3,6,9,.75) 100%),
    url('Love2.png') center top / cover no-repeat !important;
  background-color: #0d0a08 !important;
}
.card:nth-child(3) .card-fr {
  background:
    linear-gradient(180deg, rgba(3,6,9,.08) 25%, rgba(3,6,9,.75) 100%),
    url('love3.png') center top / cover no-repeat !important;
  background-color: #0d0a08 !important;
}
.peek-fr {
  background: linear-gradient(180deg, rgba(3,6,9,.04) 24%, rgba(3,6,9,.48) 100%),
    url('Love2.png') center top / cover no-repeat !important;
}

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
  background: linear-gradient(135deg, rgba(201, 168, 76, 0.92), rgba(139, 69, 19, 0.96));
  border: 1px solid rgba(255, 215, 0, 0.55);
  border-radius: 999px;
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 10px 30px rgba(201, 168, 76, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4);
}
.btn-open-sanctuary:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 14px 42px rgba(201, 168, 76, 0.55);
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
  background: rgba(18, 15, 14, 0.76);
  border: 1px solid rgba(201, 168, 76, 0.32);
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
  border-color: rgba(201, 168, 76, 0.7);
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
  background: rgba(20, 16, 14, 0.82);
  border: 1px solid rgba(201, 168, 76, 0.35);
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
  background: rgba(22, 18, 16, 0.78);
  border: 1px solid rgba(201, 168, 76, 0.32);
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

/* ═══════════════════════════════════════════════════════════════
   TANDA KASIH (WEDDING GIFT & AMPLOP DIGITAL) STYLES
   ═══════════════════════════════════════════════════════════════ */
.gift-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 28px;
}
@media (max-width: 860px) {
  .gift-grid { grid-template-columns: 1fr; }
}
.gift-card {
  background: rgba(20, 16, 14, 0.78);
  border: 1px solid rgba(201, 168, 76, 0.32);
  border-radius: 18px;
  padding: 24px 20px;
  text-align: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.gift-card:hover {
  border-color: var(--gold);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(201, 168, 76, 0.2);
}
.gift-bank-badge {
  font-family: 'Cinzel', serif;
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--gold-pale);
  background: rgba(201, 168, 76, 0.15);
  padding: 4px 12px;
  border-radius: 999px;
  display: inline-block;
  margin: 0 auto 12px;
}
.gift-bank-name {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 4px;
}
.gift-holder {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
}
.gift-number-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(10, 8, 7, 0.8);
  border: 1px dashed rgba(201, 168, 76, 0.4);
  border-radius: 10px;
  padding: 8px 14px;
  gap: 10px;
}
.gift-number {
  font-family: monospace;
  font-size: 15px;
  font-weight: 600;
  color: var(--gold-light);
  letter-spacing: 1.5px;
}
.gift-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: linear-gradient(135deg, rgba(201, 168, 76, 0.85), rgba(160, 110, 40, 0.95));
  border: 1px solid rgba(255, 215, 0, 0.4);
  border-radius: 8px;
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}
.gift-copy-btn:hover {
  transform: scale(1.05);
  background: var(--gold);
}
.btn-qris-modal {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: rgba(201, 168, 76, 0.18);
  border: 1px solid var(--gold);
  border-radius: 999px;
  color: var(--gold-light);
  font-family: 'Cinzel', serif;
  font-size: 12px;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-qris-modal:hover {
  background: var(--gold);
  color: #080605;
}
.gift-address-box {
  margin-top: 28px;
  background: rgba(20, 16, 14, 0.72);
  border: 1px solid rgba(201, 168, 76, 0.28);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}
.qris-box {
  background: rgba(18, 14, 12, 0.96);
  border: 2px solid var(--gold);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  max-width: 360px;
  width: 90%;
  position: relative;
  box-shadow: 0 16px 50px rgba(0,0,0,0.8);
}
.qris-img-wrap {
  background: #fff;
  padding: 14px;
  border-radius: 12px;
  display: inline-block;
}
.qris-img-wrap img {
  width: 220px;
  height: 220px;
  object-fit: contain;
  display: block;
}
.gift-toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  background: rgba(24, 20, 18, 0.95);
  border: 1px solid var(--gold-light);
  color: var(--gold-pale);
  padding: 12px 28px;
  border-radius: 999px;
  font-family: 'Cinzel', serif;
  font-size: 12px;
  letter-spacing: 1.5px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.7);
  z-index: 10000;
  pointer-events: none;
  opacity: 0;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.gift-toast.show {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

/* Closing Card & Footer Styles */
.closing-card {
  max-width: 680px;
  margin: 54px auto 28px;
  padding: 44px 32px;
  background: rgba(18, 14, 12, 0.85);
  border: 1px solid rgba(201, 168, 76, 0.38);
  border-radius: 24px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  text-align: center;
  box-shadow: 0 16px 48px rgba(0,0,0,0.65);
}
.closing-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1.5px solid var(--gold);
  color: var(--gold-light);
  background: rgba(201, 168, 76, 0.14);
  margin-bottom: 22px;
}
.closing-quote {
  font-size: clamp(19px, 2.2vw, 24px);
  font-style: italic;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.6;
  margin-bottom: 24px;
}
.closing-signature {
  font-size: clamp(28px, 4.5vw, 40px);
  font-style: italic;
  font-weight: 600;
  color: var(--gold-light);
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}
.closing-date {
  font-size: 11px;
  letter-spacing: 3.5px;
  color: var(--gold-pale);
  text-transform: uppercase;
  opacity: 0.85;
}
.site-footer {
  text-align: center;
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid rgba(201, 168, 76, 0.15);
}
.footer-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 1.5px;
  color: var(--gold-pale);
  margin-bottom: 12px;
}
.footer-nav a {
  transition: color 0.2s;
}
.footer-nav a:hover {
  color: #fff;
}
.footer-nav span {
  opacity: 0.4;
}
.footer-copy {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.5px;
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

/* ═══════════════════════════════════════════════════════════════
   MOBILE RESPONSIVE ENHANCEMENTS (max-width: 768px)
   ═══════════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  :root {
    --pad: 18px;
    --nav-h: 64px;
  }
  
  /* Music Float Button on Mobile */
  .music-float-btn {
    top: 14px;
    right: 14px;
    padding: 6px 12px;
    font-size: 10px;
    letter-spacing: 1px;
    gap: 6px;
  }
  
  /* Hero Typography & Elements */
  .hero-top h1.display {
    font-size: clamp(28px, 8vw, 44px) !important;
    line-height: 1.15;
    margin-bottom: 12px;
  }
  .hero-sub {
    font-size: 14px;
    max-width: 100%;
  }
  .guest-box {
    margin: 16px auto 20px;
    padding: 12px 18px;
    width: 100%;
    max-width: 360px;
  }
  .guest-box .guest-name {
    font-size: 22px;
  }
  .btn-open-sanctuary {
    padding: 14px 28px;
    font-size: 11px;
    letter-spacing: 2.5px;
    width: 100%;
    max-width: 260px;
    justify-content: center;
  }
  
  /* Sections & Cards */
  .sec {
    padding: clamp(48px, 8vh, 80px) var(--pad) !important;
  }
  .sec-glass-card {
    padding: 24px 16px;
    border-radius: 18px;
  }
  .sec-head {
    margin-bottom: 24px;
  }
  .display.h-sec {
    font-size: clamp(26px, 7vw, 36px) !important;
    line-height: 1.25;
  }
  
  /* Couple section */
  .couple-container {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 24px;
  }
  .couple-card {
    padding: 24px 16px;
  }
  .couple-avatar {
    width: 120px;
    height: 120px;
    margin-bottom: 16px;
  }
  .couple-name {
    font-size: 26px;
  }
  
  /* Countdown */
  .countdown-wrap {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin: 20px auto 20px;
  }
  .countdown-item {
    padding: 10px 4px;
  }
  .countdown-val {
    font-size: 22px;
  }
  .countdown-lbl {
    font-size: 8px;
    letter-spacing: 1px;
  }
  
  /* Events */
  .event-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 24px;
  }
  .event-box {
    padding: 20px 16px;
  }
  
  /* Gallery */
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
  }
  
  /* Story Cards on mobile */
  .card:nth-child(1) .card-fr {
    aspect-ratio: 16 / 11 !important;
  }
  .card:nth-child(2) .card-fr, .card:nth-child(3) .card-fr {
    aspect-ratio: 4 / 5 !important;
  }
  
  /* RSVP Form */
  .rsvp-container {
    padding: 24px 16px;
    border-radius: 18px;
  }
}
`;

content = content.replace('</style>', weddingCSS + '</style>');

// 3. Update Preloader Text & Branding
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
      <circle cx="22" cy="25" r="8.6" fill="#C9A84C" fill-opacity=".9"/>
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
    <a class="nav-link" href="#gift" data-cursor><span>Tanda Kasih</span><span class="alt">GIFT</span></a>
    <a class="nav-link" href="#rsvp" data-cursor><span>Doa &amp; RSVP</span><span class="alt">RSVP</span></a>
  </nav>
  <button class="nav-burger" aria-label="Menu" data-cursor><i></i><i></i></button>
</header>

<div class="page" id="top">

<!-- ============================================================ hero -->
<section class="hero" id="hero" data-cam="0">
  <div class="hero-top">
    <div class="eyebrow" data-rv="fade"><span class="dot" style="background:var(--gold);"></span> ﷽ · The Wedding of</div>
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
    <div class="hero-cue" data-rv="fade"><span>Gulir untuk menjelajah</span><span class="track"><i style="background:var(--gold);"></i></span></div>
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

  <a class="peek" href="#pathways" data-view="3" data-rv="fade" data-cursor aria-label="Lihat Kisah Kasih">
    <span class="peek-fr" data-frame></span>
    <span class="peek-play"><svg viewBox="0 0 22 22" fill="none"><path d="M8 5.6 16.4 11 8 16.4z" fill="#dfe7e0"/></svg></span>
    <span class="peek-cap"><b class="font-cinzel" style="font-size:16px; color:var(--gold-light); letter-spacing:2px;">2026</b><i>Kisah Kasih</i></span>
  </a>

  <div class="word-fb font-cormorant" aria-hidden="true">TITIN &amp; DEVRY</div>
  <div class="hero-side" data-rv="up">
    <span class="v font-cinzel" style="letter-spacing:4px; font-size:11px; color:var(--gold-pale);">27 · 09 · 2026</span>
  </div>
</section>

<!-- ============================================================ chapter I (Ayat Suci) -->
<section class="sec" id="gate" data-cam="1">
  <div class="sec-glass-card">
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
      <div><b>13.00</b><span>Waktu Mulai</span></div>
      <div><b>∞</b><span>Doa &amp; Berkah</span></div>
    </div>
  </div>
</section>

<!-- ============================================================ chapter II (Mempelai) -->
<section class="sec" id="pathways" data-cam="2">
  <div class="sec-glass-card">
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
      <span class="k"><b>Momen Bahagia</b> — Jejak Kebersamaan</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">MEMORIES</span>
    </div>
    <div class="cards" id="cards">
      <article class="card" data-rv="up" data-view="0" data-cursor onclick="openLightbox('love.png')">
        <div class="card-fr" data-frame>
          <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
          <i class="glow" style="--gx:34.2%; --gy:71.4%; --gr:18%; --gt:6.2s; --gt2:8.9s; --gc1:rgba(255,198,124,.62); --gc2:rgba(201,168,76,.30)"></i>
          <div class="card-lab"><b>Kisah Kasih</b><span class="font-cinzel" style="font-size:11px; color:var(--gold-pale);">LOVE</span></div>
        </div>
        <div class="card-meta"><span>Awal Cerita</span><span>01 / 03</span></div>
      </article>
      <article class="card" data-rv="up" data-view="1" data-cursor onclick="openLightbox('Love2.png')">
        <div class="card-fr" data-frame>
          <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
          <i class="glow glow--flame" style="--gx:70.5%; --gy:47.2%; --gr:14%; --gt:3.7s; --gt2:5.3s; --gc1:rgba(255,198,124,.62); --gc2:rgba(226,118,40,.30)"></i>
          <div class="card-lab"><b>Tawa &amp; Bahagia</b><span class="font-cinzel" style="font-size:11px; color:var(--gold-pale);">JOY</span></div>
        </div>
        <div class="card-meta"><span>Senyum Bersama</span><span>02 / 03</span></div>
      </article>
      <article class="card" data-rv="up" data-view="2" data-cursor onclick="openLightbox('love3.png')">
        <div class="card-fr" data-frame>
          <span class="card-ar"><svg viewBox="0 0 14 14" fill="none"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg></span>
          <i class="glow" style="--gx:48.0%; --gy:16.8%; --gr:20%; --gt:7.3s; --gt2:11.2s; --gc1:rgba(255,198,124,.52); --gc2:rgba(201,168,76,.24)"></i>
          <div class="card-lab"><b>Janji Abadi</b><span class="font-cinzel" style="font-size:11px; color:var(--gold-pale);">ETERNAL</span></div>
        </div>
        <div class="card-meta"><span>Menuju Halal</span><span>03 / 03</span></div>
      </article>
    </div>
  </div>
</section>

<!-- ============================================================ chapter III (Acara & Countdown) -->
<section class="sec" id="lessons" data-cam="3">
  <div class="sec-glass-card">
    <div class="sec-head" data-rv="fade">
      <span class="k"><b>03</b> — Rangkaian Acara</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">SCHEDULE</span>
    </div>
    <div style="text-align: center; margin-bottom: 24px;">
      <h2 class="display h-sec font-cormorant" data-rv="up" style="font-size: clamp(34px, 4.5vw, 52px);">Ijab, Qabul &amp; Walimatul 'Ursy</h2>
      <p class="body-lg" data-rv="up" style="max-width: 640px; margin: 12px auto 0;">
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
      <a class="arrowlink" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Titin+%26+Devry&dates=20260927T060000Z/20260927T100000Z&details=Syukuran+Pernikahan+Titin+Rahma+Lestari+%26+Devry+Rizkie+H&location=Jl.+Abah+Rimun+No+133+Rt+008,+RW+006,+Jatiwarna,+Pondok+Melati,+Bekasi" target="_blank" rel="noopener" data-cursor style="display:inline-flex;">
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
          SENIN, 20 APRIL 2026
        </p>
        <p class="body" style="color: rgba(255,255,255,0.85); line-height: 1.6;">
          <b>Pukul:</b> 19.00 WIB s/d Selesai<br>
          <b>Acara:</b> Ijab &amp; Qabul<br>
          <b>Tempat:</b> HCU Rumah Sakit Bhayangkara TK.I Pusdokkes Polri
        </p>
      </div>

      <div class="event-box">
        <span class="event-badge" style="background: rgba(201, 168, 76, 0.25); color: var(--gold-light);">Perayaan Syukur</span>
        <h3 class="font-cormorant" style="font-size: 28px; font-style: italic; color: #fff; margin-bottom: 8px;">Walimatul 'Ursy</h3>
        <p style="color: var(--gold-light); font-family: 'Cinzel', serif; font-size: 13px; letter-spacing: 2px; margin-bottom: 12px;">
          MINGGU, 27 SEPTEMBER 2026
        </p>
        <p class="body" style="color: rgba(255,255,255,0.85); line-height: 1.6;">
          <b>Pukul:</b> 13.00 s/d 17.00 WIB<br>
          <b>Acara:</b> Ramah Tamah &amp; Doa Restu<br>
          <b>Tempat:</b> Rumah Mempelai Wanita
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ chapter IV (Lokasi & Galeri) -->
<section class="sec" id="eternity" data-cam="4">
  <div class="sec-glass-card" style="text-align: center;">
    <div class="eyebrow" data-rv="fade" style="justify-content: center;"><span class="dot" style="background:var(--gold);"></span> Pelataran &amp; Lokasi Acara</div>
    <h2 class="display font-cormorant" data-rv="up" style="font-size: clamp(34px, 4.5vw, 52px);">Rumah Mempelai Wanita</h2>
    <p class="body-lg" data-rv="up" style="max-width: 600px; margin: 12px auto 28px;">
      Jl. Abah Rimun No 133 Rt 008, RW 006, Jatiwarna, Pondok Melati, Bekasi.
    </p>

    <a class="cta" href="https://maps.app.goo.gl/THmR9UrzEBHPHEq5A" target="_blank" rel="noopener" data-rv="fade" data-cursor style="margin: 0 auto; display: inline-flex;">
      <i></i><span>Buka Petunjuk di Google Maps</span>
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>
    </a>

    <!-- Gallery Section -->
    <div style="margin-top: 60px;">
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
  </div>
</section>

<!-- ============================================================ chapter V (Tanda Kasih / Wedding Gift) -->
<section class="sec" id="gift" data-cam="4">
  <div class="sec-glass-card" style="text-align: center;">
    <div class="eyebrow" data-rv="fade" style="justify-content: center;"><span class="dot" style="background:var(--gold);"></span> Ungkapan Kasih &amp; Hadiah</div>
    <h2 class="display font-cormorant" data-rv="up" style="font-size: clamp(34px, 4.5vw, 52px);">Tanda Kasih</h2>
    <p class="body-lg" data-rv="up" style="max-width: 640px; margin: 12px auto 28px; font-style: italic;">
      "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan kasih Anda, kami menyediakan amplop digital di bawah ini untuk memudahkan Anda:"
    </p>

    <div class="gift-grid" data-rv="up">
      <!-- Rekening Bank BCA -->
      <div class="gift-card">
        <div>
          <span class="gift-bank-badge">BANK TRANSFER</span>
          <div class="gift-bank-name font-cinzel">BCA</div>
          <p class="gift-holder">a.n. <b>Titin Rahma Lestari</b></p>
        </div>
        <div class="gift-number-box">
          <span class="gift-number" id="acc-bca">6871807903</span>
          <button class="gift-copy-btn" onclick="copyGiftText('acc-bca', 'Nomor rekening BCA')" title="Salin No. Rekening">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Salin</span>
          </button>
        </div>
      </div>

      <!-- Rekening Bank Mandiri -->
      <div class="gift-card">
        <div>
          <span class="gift-bank-badge">BANK TRANSFER</span>
          <div class="gift-bank-name font-cinzel">MANDIRI</div>
          <p class="gift-holder">a.n. <b>Titin Rahma Lestari</b></p>
        </div>
        <div class="gift-number-box">
          <span class="gift-number" id="acc-mandiri">1670010630977</span>
          <button class="gift-copy-btn" onclick="copyGiftText('acc-mandiri', 'Nomor rekening Mandiri')" title="Salin No. Rekening">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Salin</span>
          </button>
        </div>
      </div>

      <!-- QRIS / E-Wallet -->
      <div class="gift-card">
        <div>
          <span class="gift-bank-badge" style="background: rgba(232, 201, 122, 0.2); color: var(--gold-light);">ALL PAYMENT / EWALLET</span>
          <div class="gift-bank-name font-cinzel">QRIS CODE</div>
          <p class="gift-holder" style="font-size: 12px; margin-bottom: 12px;">Scan via BCA Mobile, GoPay, OVO, ShopeePay, Dana, dll.</p>
        </div>
        <div style="margin: 6px auto;">
          <button class="btn-qris-modal" onclick="openQrisModal()">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <span>Buka QR Code QRIS</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Kirim Kado Fisik -->
    <div class="gift-address-box" data-rv="up">
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--gold-light)" stroke-width="2"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
        <h4 class="font-cinzel" style="font-size: 14px; letter-spacing: 2px; color: var(--gold-light); text-transform: uppercase;">Kirim Kado Fisik</h4>
      </div>
      <p style="font-size: 14px; color: rgba(255,255,255,0.85); line-height: 1.6; max-width: 600px; margin: 0 auto 12px;" id="gift-address-text">
        <b>Penerima: Titin Rahma Lestari / Devry Rizkie H</b><br>
        Jl. Melati Raya GG Mawar 1 no 3c, RT 008/ RW 006 , Jatiwarna, Pondok Melati, Bekasi.
      </p>
      <button class="gift-copy-btn" style="margin: 0 auto; display: inline-flex;" onclick="copyGiftText('gift-address-text', 'Alamat pengiriman kado')">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        <span>Salin Alamat Lengkap</span>
      </button>
    </div>
  </div>
</section>

<!-- ============================================================ footer (RSVP & Doa) -->
<footer class="foot" id="rsvp" data-cam="5">
  <div class="sec-head" data-rv="fade">
    <span class="k"><b>06</b> — Konfirmasi Kehadiran</span><span class="rule"></span><span class="k font-cinzel" style="font-size:11px; letter-spacing:2px; color:var(--gold-pale);">WISHES</span>
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
            <option value="3 Orang">3 Orang</option>
            <option value="4 Orang">4 Orang</option>
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
        Doa &amp; Ucapan Terkirim (<span id="wishes-count">3</span>)
      </h4>
      <div id="wishes-list" style="display: flex; flex-direction: column; gap: 12px; max-height: 280px; overflow-y: auto; text-align: left;">
        <!-- Dynamically populated by loadWishes() -->
      </div>
    </div>
  </div>

  <!-- Dedicated Closing Card (With Love) -->
  <div class="closing-card" data-rv="up">
    <div class="closing-icon">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </div>
    <p class="closing-quote font-cormorant">
      "Tiada yang lebih indah selain cinta yang bermuara pada ridho-Nya. Terima kasih atas segala doa, restu, dan kehadiran Anda dalam mengiringi langkah awal kami."
    </p>
    <div class="closing-signature font-cormorant">
      Titin Rahma Lestari &amp; Devry Rizkie H
    </div>
    <p class="closing-date font-cinzel">
      With Love · 27 September 2026
    </p>
  </div>

  <!-- Clean Centered Footer Bar -->
  <div class="site-footer" data-rv="fade">
    <div class="footer-nav">
      <a href="#hero" data-cursor>Beranda</a>
      <span>·</span>
      <a href="#gate" data-cursor>Ayat Suci</a>
      <span>·</span>
      <a href="#pathways" data-cursor>Mempelai</a>
      <span>·</span>
      <a href="#lessons" data-cursor>Rangkaian Acara</a>
      <span>·</span>
      <a href="#eternity" data-cursor>Lokasi &amp; Galeri</a>
      <span>·</span>
      <a href="#gift" data-cursor>Tanda Kasih</a>
      <span>·</span>
      <a href="#rsvp" data-cursor>Konfirmasi Kehadiran</a>
    </div>
    <p class="footer-copy">
      © 2026 Titin Rahma Lestari &amp; Devry Rizkie H · All Rights Reserved
    </p>
  </div>
</footer>

</div>

<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox-overlay" onclick="closeLightbox(event)">
  <span class="lightbox-close" onclick="closeLightbox(event)">&times;</span>
  <img id="lightbox-img" class="lightbox-img" src="" alt="Enlarged photo">
</div>

<!-- QRIS Modal -->
<div id="qris-modal" class="lightbox-overlay" onclick="closeQrisModal(event)">
  <div class="qris-box" onclick="event.stopPropagation()">
    <span class="lightbox-close" onclick="closeQrisModal(event)">&times;</span>
    <h3 class="font-cinzel" style="color: var(--gold-light); font-size: 16px; letter-spacing: 2px; margin-bottom: 6px;">QRIS TANDA KASIH</h3>
    <p style="font-size: 12px; color: rgba(255,255,255,0.7); margin-bottom: 16px;">Titin Rahma Lestari &amp; Devry Rizkie H</p>
    <div class="qris-img-wrap">
      <img id="qris-img" src="qris.png" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=Titin%20%26%20Devry%20Wedding%20Gift'" alt="QRIS Code">
    </div>
    <p style="font-size: 11px; color: var(--gold-pale); margin-top: 14px;">Dapat di-scan dengan seluruh aplikasi Mobile Banking &amp; E-Wallet</p>
  </div>
</div>

<!-- Toast Notification -->
<div id="gift-toast" class="gift-toast">Teks berhasil disalin!</div>
`;

content = content.substring(0, navStartIndex) + weddingBody + content.substring(railStartIndex);

// 5. Transform 3D background WebGL:
// A. Floating 3D text
content = content.replace("const word = 'KAGE', gl = [];", "const word = 'TITIN & DEVRY', gl = [];");
content = content.replace("const SZ = 320, TRACK = .40, PAD = 26;", "const SZ = 220, TRACK = .18, PAD = 26;");

// B. Remove red Japanese Torii Gate
content = content.replace(/function buildTorii\s*\(\)\s*\{[\s\S]*?scene\.add\(g\);\s*WORLD\.torii\s*=\s*g;\s*\}/, "function buildTorii() { /* Torii gate removed for royal wedding theme */ }");

// C. Transform Blood-Red Moon to Warm Golden Full Moon
content = content.replace("color: hdr(3.6, .64, .61)", "color: hdr(1.7, 1.45, 0.95)");
content = content.replace("texGlow('rgba(255,124,112,.90)', 'rgba(206,52,48,.26)')", "texGlow('rgba(255,220,140,.85)', 'rgba(201,168,76,.24)')");

// D. Transform Red Falling Maple Leaves to Glowing Golden Sparkles / Petals
content = content.replace("color: 0x40080a, roughness: .84, metalness: 0,", "color: 0xc9a84c, roughness: .4, metalness: .3,");
content = content.replace("emissive: 0x780200, emissiveIntensity: .72", "emissive: 0xffd700, emissiveIntensity: .85");

// E. Transform Red Lantern Flame to Warm Golden Amber Candlelight
content = content.replace("new THREE.PointLight(0xff5a24, 2.6, 9, 2)", "new THREE.PointLight(0xffa834, 2.6, 9, 2)");
content = content.replace("texGlow('rgba(255,120,60,.9)', 'rgba(255,60,24,.28)')", "texGlow('rgba(255,200,90,.9)', 'rgba(201,168,76,.28)')");

// F. Lock scroll on cover until Buka Undangan is clicked (replace all occurrences)
content = content.replace(/document\.body\.classList\.remove\('is-locked'\);/g, "/* scroll locked until Buka Undangan */");

// G. Smart aspect-ratio handler for clothPlate so wide landscape images (love.png) are not cropped
const oldClothPlate = `function clothPlate(img, w, h) {
  const c = cvs(Math.max(1, w | 0), Math.max(1, h | 0)), x = c.getContext('2d');
  const s = Math.max(c.width / img.width, c.height / img.height);
  const dw = img.width * s, dh = img.height * s;
  x.drawImage(img, (c.width - dw) / 2, (c.height - dh) / 2, dw, dh);
  let g = x.createLinearGradient(0, 0, 0, c.height);
  g.addColorStop(.36, 'rgba(3,6,9,.05)'); g.addColorStop(1, 'rgba(3,6,9,.73)');
  x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
  g = x.createLinearGradient(0, 0, 0, c.height);
  g.addColorStop(.46, 'rgba(4,6,9,0)'); g.addColorStop(1, 'rgba(4,6,9,.80)');
  x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
  return c;
}`;

const newClothPlate = `function clothPlate(img, w, h) {
  const c = cvs(Math.max(1, w | 0), Math.max(1, h | 0)), x = c.getContext('2d');
  x.fillStyle = '#0a0807';
  x.fillRect(0, 0, c.width, c.height);
  const imgAspect = img.width / img.height;
  let s, dw, dh, dx, dy;
  if (imgAspect > 1.15) {
    s = c.width / img.width;
    dw = c.width;
    dh = img.height * s;
    dx = 0;
    dy = (c.height - dh) / 2;
  } else {
    s = Math.max(c.width / img.width, c.height / img.height);
    dw = img.width * s;
    dh = img.height * s;
    dx = (c.width - dw) / 2;
    dy = Math.max(0, (c.height - dh) * 0.15);
  }
  x.drawImage(img, dx, dy, dw, dh);
  let g = x.createLinearGradient(0, 0, 0, c.height);
  g.addColorStop(.36, 'rgba(3,6,9,.05)'); g.addColorStop(1, 'rgba(3,6,9,.73)');
  x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
  g = x.createLinearGradient(0, 0, 0, c.height);
  g.addColorStop(.46, 'rgba(4,6,9,0)'); g.addColorStop(1, 'rgba(4,6,9,.80)');
  x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
  return c;
}`;
content = content.replace(oldClothPlate, newClothPlate);

// Replace footer console log credit
content = content.replace("KAGE — a live Kyoto mountain temple, after dark.", "The Wedding of Titin & Devry — 27 September 2026.");

// 6. Add Custom Wedding Interactivity JS before </script>
const weddingJS = `
/* ═══════════════════════════════════════════════════════════════
   WEDDING INVITATION SCRIPTS (MUSIC, COUNTDOWN, GUEST, RSVP, GIFT)
   ═══════════════════════════════════════════════════════════════ */

// Guard to strictly prevent scrolling on desktop and mobile while locked
function guardScrollLocked(e) {
  if (document.body.classList.contains('is-locked') || document.documentElement.classList.contains('is-locked')) {
    if (e.target && (e.target.closest('#btn-open-invitation') || e.target.closest('#music-btn'))) return;
    if (e.cancelable) e.preventDefault();
  }
}
window.addEventListener('wheel', guardScrollLocked, { passive: false });
window.addEventListener('touchmove', guardScrollLocked, { passive: false });
window.addEventListener('keydown', (e) => {
  if ((document.body.classList.contains('is-locked') || document.documentElement.classList.contains('is-locked')) &&
      ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', 'Home', 'End'].includes(e.code)) {
    if (e.cancelable) e.preventDefault();
  }
});

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

// Button "Buka Undangan" unlocks scrolling, starts music and scrolls to section 1
const btnOpen = document.getElementById('btn-open-invitation');
if (btnOpen) {
  btnOpen.addEventListener('click', () => {
    document.documentElement.classList.remove('is-locked');
    document.body.classList.remove('is-locked');
    if (typeof measure === 'function') measure();
    if (!isPlaying && bgMusic) {
      bgMusic.play().then(() => {
        isPlaying = true;
        if (musicBtn) musicBtn.classList.remove('music-paused');
      }).catch(e => console.log(e));
    }
    const gateSec = document.getElementById('gate');
    if (gateSec) {
      setTimeout(() => {
        window.scrollTo({
          top: gateSec.offsetTop - 20,
          behavior: 'smooth'
        });
      }, 50);
    }
  });
}

// C. Countdown Timer to 27 September 2026 13:00:00 WIB (UTC+7)
(function initCountdown() {
  const targetDate = new Date('2026-09-27T13:00:00+07:00').getTime();

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

// E. Copy Gift Text to Clipboard & Toast
window.copyGiftText = function(elementId, label) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.innerText || el.textContent;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text.trim()).then(() => {
      showGiftToast((label || 'Teks') + ' berhasil disalin!');
    }).catch(() => fallbackCopy(text.trim(), label));
  } else {
    fallbackCopy(text.trim(), label);
  }
};

function fallbackCopy(text, label) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showGiftToast((label || 'Teks') + ' berhasil disalin!');
}

function showGiftToast(msg) {
  const toast = document.getElementById('gift-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// QRIS Modal
window.openQrisModal = function() {
  const modal = document.getElementById('qris-modal');
  if (modal) modal.classList.add('active');
};

window.closeQrisModal = function(e) {
  if (e.target.id === 'qris-modal' || e.target.classList.contains('lightbox-close')) {
    const modal = document.getElementById('qris-modal');
    if (modal) modal.classList.remove('active');
  }
};

// F. Dynamic Wishes & RSVP System with LocalStorage Sync
const DEFAULT_WISHES = [
  { id: '1', name: 'Keluarga Besar Alm. Bapak Jajang', status: 'Hadir', count: '2 Orang', msg: 'Selamat menempuh hidup baru untuk Titin & Devry. Semoga menjadi keluarga yang sakinah, mawaddah, dan warahmah. Aamiin ya Rabbal Alamin!', time: '2026-09-01' },
  { id: '2', name: 'Keluarga Besar Bapak Maman Darmana', status: 'Hadir', count: '2 Orang', msg: "Barakallahu lakuma wa baraka 'alaika wa jama'a bainakuma fii khair. Bahagia selalu dan dilancarkan seluruh acaranya.", time: '2026-09-02' },
  { id: '3', name: 'Sahabat & Rekan', status: 'Hadir', count: '1 Orang', msg: 'Happy wedding Devry & Titin! Semoga cinta kalian selalu bersemi dan penuh keberkahan hingga akhir hayat.', time: '2026-09-03' }
];

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}

function loadWishes() {
  let stored = [];
  try {
    const raw = localStorage.getItem('wedding_wishes');
    if (raw) stored = JSON.parse(raw);
  } catch(e) {}

  const all = [...stored, ...DEFAULT_WISHES];
  const listEl = document.getElementById('wishes-list');
  const cntEl = document.getElementById('wishes-count');
  if (cntEl) cntEl.textContent = all.length;

  if (listEl) {
    listEl.innerHTML = all.map(w => \`
      <div style="background: rgba(10,8,7,0.65); padding: 14px 18px; border-radius: 10px; border-left: 3px solid #C9A84C; animation: fade-in-up 0.4s ease;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <b style="color: #fff; font-size: 14px;">\${escapeHtml(w.name)}</b>
          <span style="font-size: 11px; color: #F5E9C8;">\${escapeHtml(w.status)} (\${escapeHtml(w.count)})</span>
        </div>
        <p style="font-size: 13px; color: rgba(255,255,255,0.85); line-height: 1.5;">\${escapeHtml(w.msg)}</p>
      </div>
    \`).join('');
  }
}

// Initial Wishes Render
loadWishes();

// RSVP Form Submit to WhatsApp & LocalStorage
window.handleRsvpSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('rsvp-name').value.trim();
  const status = document.getElementById('rsvp-status').value;
  const count = document.getElementById('rsvp-count').value;
  const msg = document.getElementById('rsvp-msg').value.trim();

  if (!name || !msg) return;

  const newWish = {
    id: Date.now().toString(),
    name,
    status,
    count,
    msg,
    time: new Date().toISOString()
  };

  try {
    let stored = JSON.parse(localStorage.getItem('wedding_wishes') || '[]');
    stored.unshift(newWish);
    localStorage.setItem('wedding_wishes', JSON.stringify(stored));
  } catch(err) {
    console.error(err);
  }

  loadWishes();

  // Construct WhatsApp link
  const text = \`Halo Devry & Titin, saya *\\x24{name}* ingin mengonfirmasi:\\n\\nStatus: *\\x24{status}* (\\x24{count})\\nDoa & Ucapan: "\\x24{msg}"\\n\\nTerima kasih atas undangannya!\`;
  const waUrl = \`https://api.whatsapp.com/send?text=\${encodeURIComponent(text)}\`;

  window.open(waUrl, '_blank');

  alert('Terima kasih atas doa dan konfirmasi kehadiran Anda!');
  document.getElementById('rsvp-msg').value = '';
};

// Update rail names to Indonesian
setTimeout(() => {
  const railBtns = document.querySelectorAll('#rail button');
  const indonesianNames = ['Beranda', 'Ayat Suci', 'Mempelai', 'Rangkaian Acara', 'Lokasi & Galeri', 'Tanda Kasih', 'Konfirmasi & Doa'];
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
console.log('SUCCESS: index.html fully updated with 13.00 WIB time, Wedding Gift / Tanda Kasih, QRIS, & RSVP LocalStorage Sync!');
