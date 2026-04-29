/* =====================================================
   ISLA AGUADA — AUTHENTIC MAYAN GLYPH LIBRARY
   SVG glyphs modelled on real Maya cartouche style:
   chunky rounded-square frames, thick outlines,
   spiral scrollwork, profile faces, calendar wheel.
   All paths on 100×100 viewBox.
   ===================================================== */

const MAYAN_GLYPHS = {

  /* ── GLYPH 1: Face Cartouche — profile face in rounded square ── */
  face_cartouche: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer chunky rounded-square frame -->
    <rect x="4" y="4" width="92" height="92" rx="18" ry="18" fill="currentColor"/>
    <rect x="9" y="9" width="82" height="82" rx="14" ry="14" fill="none" stroke="currentColor" stroke-width="0"/>
    <!-- Inner white cutout -->
    <rect x="11" y="11" width="78" height="78" rx="12" ry="12" fill="white" opacity="0.85"/>
    <!-- Top bead row -->
    <circle cx="30" cy="17" r="4" fill="currentColor"/>
    <circle cx="42" cy="15" r="4" fill="currentColor"/>
    <circle cx="54" cy="15" r="4" fill="currentColor"/>
    <circle cx="66" cy="17" r="4" fill="currentColor"/>
    <!-- Profile face facing right -->
    <path d="M38,30 Q30,30 27,38 Q24,48 28,58 Q32,66 40,68 Q50,70 54,64 Q58,58 56,50 Q54,42 48,36 Q44,31 38,30 Z" fill="currentColor"/>
    <!-- Eye -->
    <ellipse cx="35" cy="44" rx="5" ry="4" fill="white"/>
    <circle cx="36" cy="44" r="2" fill="currentColor"/>
    <!-- Nose -->
    <path d="M32,50 Q28,52 30,56 Q33,58 36,56" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Mouth -->
    <path d="M33,62 Q38,65 44,62" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Headdress / hair detail -->
    <path d="M38,30 Q44,22 54,20 Q62,20 66,26 Q70,30 68,36 Q72,34 74,28 Q76,20 68,14 Q58,10 46,14 Q38,18 36,28 Z" fill="currentColor"/>
    <!-- Right side scroll ornament -->
    <path d="M60,45 Q70,40 72,50 Q74,60 64,62 Q60,63 58,58" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <circle cx="62" cy="50" r="4" fill="currentColor"/>
    <!-- Bottom scroll feet -->
    <path d="M25,82 Q20,88 26,90 Q32,92 32,86" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M48,83 Q46,90 52,91 Q58,90 56,83" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M68,82 Q66,88 72,90 Q78,88 76,82" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  /* ── GLYPH 2: Scroll Eye — eye with spiral surrounds ── */
  scroll_eye: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer frame -->
    <rect x="4" y="4" width="92" height="92" rx="18" ry="18" fill="currentColor"/>
    <rect x="11" y="11" width="78" height="78" rx="12" ry="12" fill="white" opacity="0.85"/>
    <!-- Central eye/oval -->
    <ellipse cx="50" cy="50" rx="22" ry="16" fill="currentColor"/>
    <ellipse cx="50" cy="50" rx="16" ry="10" fill="white" opacity="0.85"/>
    <circle cx="50" cy="50" r="7" fill="currentColor"/>
    <circle cx="47" cy="47" r="2.5" fill="white" opacity="0.85"/>
    <!-- Left spiral scroll -->
    <path d="M28,50 Q22,44 24,36 Q26,28 34,28 Q40,28 42,36 Q44,42 38,46 Q32,50 28,54 Q24,60 28,66 Q32,70 38,68" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <!-- Right spiral scroll -->
    <path d="M72,50 Q78,44 76,36 Q74,28 66,28 Q60,28 58,36 Q56,42 62,46 Q68,50 72,54 Q76,60 72,66 Q68,70 62,68" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <!-- Top bead bar -->
    <rect x="30" y="14" width="40" height="7" rx="3.5" fill="currentColor"/>
    <!-- Bottom scroll feet -->
    <path d="M28,82 Q24,90 30,92 Q36,92 36,85" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M50,84 Q48,92 54,92 Q60,90 58,84" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M72,82 Q70,90 76,92 Q82,90 80,82" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  /* ── GLYPH 3: Serpent Head — coiled serpent in cartouche ── */
  serpent_head: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer frame -->
    <rect x="4" y="4" width="92" height="92" rx="18" ry="18" fill="currentColor"/>
    <rect x="11" y="11" width="78" height="78" rx="12" ry="12" fill="white" opacity="0.85"/>
    <!-- Serpent coil body -->
    <path d="M50,20 Q68,20 72,34 Q76,48 64,54 Q52,60 44,52 Q36,44 40,34 Q44,24 56,26 Q66,28 66,38 Q66,48 56,50 Q46,52 44,44" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    <!-- Serpent head -->
    <ellipse cx="50" cy="20" rx="10" ry="7" fill="currentColor"/>
    <!-- Forked tongue -->
    <path d="M46,15 L42,10 M46,15 L44,9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Eye -->
    <circle cx="54" cy="18" r="3" fill="white" opacity="0.85"/>
    <circle cx="55" cy="18" r="1.5" fill="currentColor"/>
    <!-- Scale marks -->
    <path d="M58,30 Q60,28 62,30" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M62,36 Q64,34 66,36" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M64,44 Q66,42 68,44" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <!-- Corner spiral TL -->
    <path d="M16,16 Q14,22 18,26 Q22,28 24,24 Q26,20 22,18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <!-- Corner spiral TR -->
    <path d="M84,16 Q86,22 82,26 Q78,28 76,24 Q74,20 78,18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
    <!-- Bottom beads -->
    <circle cx="30" cy="86" r="4" fill="currentColor"/>
    <circle cx="42" cy="88" r="4" fill="currentColor"/>
    <circle cx="54" cy="88" r="4" fill="currentColor"/>
    <circle cx="66" cy="88" r="4" fill="currentColor"/>
    <circle cx="78" cy="86" r="4" fill="currentColor"/>
  </svg>`,

  /* ── GLYPH 4: Sun Wheel Cartouche — calendar-style sun face ── */
  sun_face: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer double ring (calendar wheel style) -->
    <circle cx="50" cy="50" r="46" fill="currentColor"/>
    <circle cx="50" cy="50" r="40" fill="white" opacity="0.85"/>
    <circle cx="50" cy="50" r="34" fill="currentColor"/>
    <circle cx="50" cy="50" r="28" fill="white" opacity="0.85"/>
    <!-- Ray spokes -->
    ${[0,18,36,54,72,90,108,126,144,162,180,198,216,234,252,270,288,306,324,342].map(a => {
      const r1 = Math.PI * a / 180;
      const x1 = (50 + 34*Math.cos(r1)).toFixed(1);
      const y1 = (50 + 34*Math.sin(r1)).toFixed(1);
      const x2 = (50 + 40*Math.cos(r1)).toFixed(1);
      const y2 = (50 + 40*Math.sin(r1)).toFixed(1);
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="3"/>`;
    }).join('')}
    <!-- Central deity face -->
    <!-- Head shape -->
    <circle cx="50" cy="50" r="18" fill="currentColor"/>
    <circle cx="50" cy="50" r="14" fill="white" opacity="0.85"/>
    <!-- Eyes -->
    <ellipse cx="44" cy="47" rx="4" ry="3.5" fill="currentColor"/>
    <ellipse cx="56" cy="47" rx="4" ry="3.5" fill="currentColor"/>
    <circle cx="43" cy="46" r="1.5" fill="white" opacity="0.85"/>
    <circle cx="55" cy="46" r="1.5" fill="white" opacity="0.85"/>
    <!-- Nose -->
    <path d="M48,50 L46,54 L50,55 L54,54 L52,50" fill="currentColor"/>
    <!-- Mouth with tongue -->
    <path d="M42,58 Q50,63 58,58" fill="currentColor"/>
    <ellipse cx="50" cy="60" rx="4" ry="3" fill="currentColor"/>
    <!-- Brow bands -->
    <path d="M38,44 Q44,40 50,42 Q56,40 62,44" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Cheek marks -->
    <circle cx="38" cy="52" r="3" fill="currentColor"/>
    <circle cx="62" cy="52" r="3" fill="currentColor"/>
    <!-- Triangular crown -->
    <polygon points="50,28 44,36 56,36" fill="currentColor"/>
    <circle cx="50" cy="31" r="2" fill="white" opacity="0.85"/>
    <!-- Dots ring -->
    ${[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
      const r1 = Math.PI * a / 180;
      const x1 = (50 + 22*Math.cos(r1)).toFixed(1);
      const y1 = (50 + 22*Math.sin(r1)).toFixed(1);
      return `<circle cx="${x1}" cy="${y1}" r="1.8" fill="currentColor"/>`;
    }).join('')}
  </svg>`,

  /* ── GLYPH 5: Zigzag Cross — X mark in circular disk ── */
  cross_disk: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer frame - tall narrow cartouche -->
    <rect x="8" y="4" width="84" height="92" rx="16" ry="16" fill="currentColor"/>
    <rect x="14" y="10" width="72" height="80" rx="12" ry="12" fill="white" opacity="0.85"/>
    <!-- Left double column bars -->
    <rect x="14" y="18" width="9" height="64" rx="4" fill="currentColor"/>
    <rect x="25" y="22" width="6" height="56" rx="3" fill="currentColor"/>
    <!-- Central disk with X -->
    <circle cx="58" cy="52" r="22" fill="currentColor"/>
    <circle cx="58" cy="52" r="17" fill="white" opacity="0.85"/>
    <!-- Bold X inside disk -->
    <line x1="46" y1="40" x2="70" y2="64" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
    <line x1="70" y1="40" x2="46" y2="64" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
    <!-- Top half-circle cap -->
    <path d="M38,28 Q58,18 78,28" fill="currentColor"/>
    <!-- Bottom scroll -->
    <path d="M48,82 Q44,90 50,92 Q56,92 54,84" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M66,82 Q64,90 70,92 Q76,90 72,82" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  /* ── GLYPH 6: Monster Mask — ceremonial mask glyph ── */
  mask_glyph: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer frame -->
    <rect x="4" y="6" width="92" height="88" rx="18" ry="18" fill="currentColor"/>
    <rect x="11" y="13" width="78" height="74" rx="13" ry="13" fill="white" opacity="0.85"/>
    <!-- Top nested arch bands -->
    <path d="M18,32 Q50,14 82,32" fill="currentColor"/>
    <path d="M22,34 Q50,18 78,34" fill="none" stroke="white" stroke-width="3" opacity="0.85"/>
    <!-- Left bar grille -->
    <rect x="13" y="40" width="7" height="36" rx="3" fill="currentColor"/>
    <rect x="22" y="44" width="5" height="28" rx="2.5" fill="currentColor"/>
    <!-- Central brow & eye motif -->
    <ellipse cx="58" cy="38" rx="16" ry="8" fill="currentColor"/>
    <ellipse cx="58" cy="38" rx="10" ry="5" fill="white" opacity="0.85"/>
    <circle cx="58" cy="38" r="4" fill="currentColor"/>
    <circle cx="56" cy="37" r="1.5" fill="white" opacity="0.85"/>
    <!-- Cheek right -->
    <ellipse cx="68" cy="56" rx="9" ry="12" fill="currentColor"/>
    <path d="M62,50 Q68,48 74,52 Q76,58 72,64 Q68,68 62,64" fill="none" stroke="white" stroke-width="2.5" opacity="0.85"/>
    <!-- Jagged teeth / mouth -->
    <path d="M30,62 L36,70 L42,62 L48,70 L54,62 L60,70 L66,62 L72,70 L78,62" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <!-- Bottom disk -->
    <circle cx="36" cy="82" r="7" fill="currentColor"/>
    <circle cx="36" cy="82" r="4" fill="white" opacity="0.85"/>
    <!-- Bottom scrolls -->
    <path d="M56,78 Q54,86 60,88 Q66,88 64,80" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M72,78 Q70,86 76,88 Q82,86 80,78" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  /* ── GLYPH 7: Pyramid Steps — classic Mayan pyramid silhouette ── */
  pyramid_stone: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer frame -->
    <rect x="4" y="4" width="92" height="92" rx="16" ry="16" fill="currentColor"/>
    <rect x="11" y="11" width="78" height="78" rx="11" ry="11" fill="white" opacity="0.85"/>
    <!-- Pyramid steps - from base to top -->
    <rect x="14" y="78" width="72" height="9"  rx="2" fill="currentColor"/>
    <rect x="20" y="68" width="60" height="9"  rx="2" fill="currentColor"/>
    <rect x="26" y="58" width="48" height="9"  rx="2" fill="currentColor"/>
    <rect x="32" y="48" width="36" height="9"  rx="2" fill="currentColor"/>
    <rect x="38" y="38" width="24" height="9"  rx="2" fill="currentColor"/>
    <rect x="44" y="28" width="12" height="9"  rx="2" fill="currentColor"/>
    <!-- Temple at top -->
    <rect x="43" y="16" width="14" height="11" rx="2" fill="currentColor"/>
    <rect x="45" y="18" width="10" height="7"  rx="1" fill="white" opacity="0.85"/>
    <!-- Corner spiral TL -->
    <path d="M16,16 Q13,21 17,24 Q21,25 22,21 Q21,17 17,17" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Corner spiral TR -->
    <path d="M84,16 Q87,21 83,24 Q79,25 78,21 Q79,17 83,17" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  </svg>`,

  /* ── GLYPH 8: Rain Scroll — water/rain glyph with scrollwork ── */
  rain_scroll: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer frame -->
    <rect x="4" y="4" width="92" height="92" rx="18" ry="18" fill="currentColor"/>
    <rect x="11" y="11" width="78" height="78" rx="12" ry="12" fill="white" opacity="0.85"/>
    <!-- Top triple beads -->
    <circle cx="34" cy="18" r="5" fill="currentColor"/>
    <circle cx="50" cy="16" r="5" fill="currentColor"/>
    <circle cx="66" cy="18" r="5" fill="currentColor"/>
    <!-- Horizontal headband bar -->
    <rect x="18" y="26" width="64" height="8" rx="4" fill="currentColor"/>
    <!-- Central zigzag lightning mark -->
    <polyline points="36,44 44,38 50,50 58,38 64,50 70,44" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Inner oval border -->
    <ellipse cx="50" cy="50" rx="26" ry="20" fill="none" stroke="currentColor" stroke-width="3"/>
    <!-- Bottom three scroll feet -->
    <path d="M26,78 Q22,86 28,88 Q34,88 32,80" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M48,80 Q46,88 52,89 Q58,88 56,80" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M68,78 Q66,86 72,88 Q78,86 76,78" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  /* ── GLYPH 9: Feathered Spiral — Quetzal / wind glyph ── */
  feather_spiral: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer frame -->
    <rect x="4" y="4" width="92" height="92" rx="18" ry="18" fill="currentColor"/>
    <rect x="11" y="11" width="78" height="78" rx="12" ry="12" fill="white" opacity="0.85"/>
    <!-- Large spiral centre -->
    <path d="M50,50 C50,42 56,36 62,38 C70,40 72,52 66,58 C60,66 48,66 40,58 C30,48 30,32 40,24 C52,14 70,16 76,28 C84,44 78,64 64,72 C48,82 26,76 18,60" fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round"/>
    <!-- Centre dot -->
    <circle cx="50" cy="50" r="6" fill="currentColor"/>
    <circle cx="50" cy="50" r="3" fill="white" opacity="0.85"/>
    <!-- Feather barbs left -->
    <path d="M26,36 Q20,28 28,24 Q34,22 34,30" fill="currentColor"/>
    <path d="M20,48 Q12,42 18,36 Q24,32 26,40" fill="currentColor"/>
    <!-- Top bar ornament -->
    <rect x="28" y="14" width="44" height="6" rx="3" fill="currentColor"/>
    <!-- Bottom scrolls -->
    <path d="M28,82 Q24,90 30,92 Q36,90 34,82" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M66,82 Q64,90 70,92 Q76,90 72,82" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  /* ── BORDER: Serpent Wave — horizontal border strip ── */
  serpent_border: `<svg viewBox="0 0 200 28" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0,14 C10,4 20,4 30,14 C40,24 50,24 60,14 C70,4 80,4 90,14 C100,24 110,24 120,14 C130,4 140,4 150,14 C160,24 170,24 180,14 C190,4 200,4 200,14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <path d="M0,14 C10,6 20,6 30,14 C40,22 50,22 60,14 C70,6 80,6 90,14 C100,22 110,22 120,14 C130,6 140,6 150,14 C160,22 170,22 180,14 C190,6 200,6 200,14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    <!-- End dots -->
    <circle cx="4" cy="14" r="4" fill="currentColor"/>
    <circle cx="196" cy="14" r="4" fill="currentColor"/>
    <!-- Mid cartouche marks -->
    <rect x="46" y="9" width="8" height="10" rx="2" fill="currentColor"/>
    <rect x="96" y="9" width="8" height="10" rx="2" fill="currentColor"/>
    <rect x="146" y="9" width="8" height="10" rx="2" fill="currentColor"/>
  </svg>`,

  /* ── BORDER: Step Frieze — repeating stepped pyramid border ── */
  step_frieze: `<svg viewBox="0 0 200 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <polyline points="0,28 0,20 8,20 8,14 16,14 16,8 24,8 24,14 32,14 32,20 40,20 40,28 40,28 40,20 48,20 48,14 56,14 56,8 64,8 64,14 72,14 72,20 80,20 80,28 80,28 80,20 88,20 88,14 96,14 96,8 104,8 104,14 112,14 112,20 120,20 120,28 120,28 120,20 128,20 128,14 136,14 136,8 144,8 144,14 152,14 152,20 160,20 160,28 160,28 160,20 168,20 168,14 176,14 176,8 184,8 184,14 192,14 192,20 200,20 200,28"
          fill="currentColor" stroke="none"/>
  </svg>`,

  /* ── BORDER: Bead Row — jade bead ornament strip ── */
  bead_row: `<svg viewBox="0 0 200 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    ${[10,30,50,70,90,110,130,150,170,190].map(x =>
      `<circle cx="${x}" cy="12" r="7" fill="currentColor"/>
       <circle cx="${x}" cy="12" r="4" fill="white" opacity="0.6"/>
       <circle cx="${x}" cy="12" r="1.5" fill="currentColor"/>`
    ).join('')}
    <!-- Connecting bar -->
    <rect x="10" y="10" width="180" height="4" rx="2" fill="currentColor" opacity="0.3"/>
  </svg>`,

  /* ── BORDER: Cartouche Strip — repeating mini cartouches ── */
  cartouche_strip: `<svg viewBox="0 0 200 36" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    ${[12,52,92,132,172].map(x =>
      `<rect x="${x-14}" y="4" width="28" height="28" rx="6" ry="6" fill="currentColor"/>
       <rect x="${x-10}" y="8" width="20" height="20" rx="4" ry="4" fill="white" opacity="0.75"/>
       <circle cx="${x}" cy="18" r="5" fill="currentColor"/>
       <circle cx="${x}" cy="18" r="2.5" fill="white" opacity="0.75"/>`
    ).join('')}
    <!-- Connecting line -->
    <line x1="0" y1="18" x2="200" y2="18" stroke="currentColor" stroke-width="2" opacity="0.35"/>
  </svg>`,

  /* ── DIVIDER: Diamond Glyphs — center divider ornament ── */
  diamond_divider: `<svg viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg">
    <!-- Central large glyph block -->
    <rect x="46" y="2" width="28" height="20" rx="5" fill="currentColor"/>
    <rect x="50" y="5" width="20" height="14" rx="3" fill="white" opacity="0.7"/>
    <polygon points="60,7 65,12 60,17 55,12" fill="currentColor"/>
    <!-- Left mini blocks -->
    <rect x="20" y="6" width="18" height="12" rx="3" fill="currentColor"/>
    <rect x="23" y="9" width="12" height="6" rx="2" fill="white" opacity="0.7"/>
    <line x1="26" y1="12" x2="32" y2="12" stroke="currentColor" stroke-width="2"/>
    <!-- Right mini blocks -->
    <rect x="82" y="6" width="18" height="12" rx="3" fill="currentColor"/>
    <rect x="85" y="9" width="12" height="6" rx="2" fill="white" opacity="0.7"/>
    <line x1="88" y1="12" x2="94" y2="12" stroke="currentColor" stroke-width="2"/>
    <!-- Lines extending outward -->
    <line x1="0" y1="12" x2="18" y2="12" stroke="currentColor" stroke-width="2.5" opacity="0.6"/>
    <line x1="102" y1="12" x2="120" y2="12" stroke="currentColor" stroke-width="2.5" opacity="0.6"/>
    <!-- Dots at ends -->
    <circle cx="4" cy="12" r="3" fill="currentColor" opacity="0.6"/>
    <circle cx="116" cy="12" r="3" fill="currentColor" opacity="0.6"/>
  </svg>`,

};

/* ── Render all .mayan-glyph[data-glyph] elements ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-glyph]').forEach(el => {
    const key = el.getAttribute('data-glyph');
    if (MAYAN_GLYPHS[key]) {
      el.innerHTML = MAYAN_GLYPHS[key];
      el.querySelectorAll('svg').forEach(svg => {
        svg.style.color = 'inherit';
      });
    }
  });

  /* ── Render border strips ── */
  document.querySelectorAll('[data-glyph-repeat]').forEach(el => {
    const key   = el.getAttribute('data-glyph-repeat');
    const count = parseInt(el.getAttribute('data-repeat-count') || '6', 10);
    if (MAYAN_GLYPHS[key]) {
      el.innerHTML = Array(count).fill(
        `<span class="mayan-glyph mayan-glyph--sm mayan-glyph--gold" style="display:inline-block;">${MAYAN_GLYPHS[key]}</span>`
      ).join('');
    }
  });
});
