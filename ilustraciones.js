/* ============================================================
   ILUSTRACIONES  (dibujadas en SVG: livianas, sin internet y sin derechos de autor)
   ============================================================ */
(function () {
  const T = (x, y, s = 1, r = 0) => `translate(${x} ${y}) rotate(${r}) scale(${s})`;
  const put = (c, x, y, s = 1, r = 0) => `<g transform="${T(x, y, s, r)}">${C[c]}</g>`;
  function rnd(seed) { return () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function esparcir(c, n, cx, cy, rx, ry, s, seed) {
    const r = rnd(seed); let o = "";
    for (let i = 0; i < n; i++) { const a = r() * 6.283, d = Math.sqrt(r()); o += put(c, (cx + Math.cos(a) * rx * d).toFixed(1), (cy + Math.sin(a) * ry * d).toFixed(1), s, Math.round(r() * 360)); }
    return o;
  }
  function anillo(c, n, cx, cy, rad, s, giro = 0, inicio = 0) {
    let o = "";
    for (let i = 0; i < n; i++) { const a = inicio + i / n * 6.283; o += put(c, (cx + Math.cos(a) * rad).toFixed(1), (cy + Math.sin(a) * rad).toFixed(1), s, Math.round(a * 57.3 + giro)); }
    return o;
  }

  /* ---------- Alimentos (cada uno centrado en 0,0) ---------- */
  const C = {
    mangu: `<ellipse cy="2" rx="22" ry="16" fill="#e9c46a"/><ellipse cx="-4" cy="-2" rx="14" ry="9" fill="#f4d98b"/><path d="M-12 2q6-6 12 0t12 0" stroke="#d4a944" stroke-width="1.5" fill="none"/>`,
    huevo: `<path d="M-13-2c0-10 9-13 15-11s12 6 10 13-8 11-14 10-11-5-11-12z" fill="#fff" stroke="#e6e0d6"/><circle cx="1" r="6" fill="#f4a51c"/><circle cx="-1" cy="-2" r="2" fill="#ffd27a"/>`,
    aguacate: `<path d="M0-16c9 0 13 10 13 18S7 16 0 16-13 10-13 2-9-16 0-16z" fill="#4c7a2c"/><path d="M0-13c7 0 10 8 10 15S5 13 0 13-10 9-10 2-7-13 0-13z" fill="#c9e08a"/><circle cy="3" r="6" fill="#7a4b26"/><circle cx="-2" cy="1" r="1.6" fill="#a06a3d"/>`,
    cebolla: `<g fill="none" stroke="#a24d8f" stroke-width="2"><ellipse rx="9" ry="7"/><ellipse rx="5" ry="4"/></g>`,
    fresa: `<path d="M-7-4q7-5 14 0q0 10-7 15q-7-5-7-15z" fill="#e63946"/><path d="M-6-5l3-3 3 2 3-2 3 3-6 1z" fill="#3a8d3a"/><g fill="#ffd166"><circle cx="-2" cy="0" r=".8"/><circle cx="2" cy="2" r=".8"/><circle cy="5" r=".8"/></g>`,
    avena: `<ellipse rx="2.6" ry="1.5" fill="#d2b47c"/>`,
    chia: `<circle r=".9" fill="#3b3b3b"/>`,
    canela: `<circle r=".9" fill="#9c5a2a"/>`,
    pan: `<path d="M-14 12V-4a8 8 0 0 1 4-12h20a8 8 0 0 1 4 12v16z" fill="#b9773b"/><path d="M-11 9V-4a6 6 0 0 1 3-9h16a6 6 0 0 1 3 9V9z" fill="#ecc791"/>`,
    revuelto: `<circle r="6" fill="#f7d154"/><circle cx="2" cy="-2" r="3.5" fill="#fbe58c"/>`,
    espinaca: `<ellipse rx="3" ry="1.8" fill="#3f8f3a"/>`,
    tomatito: `<rect x="-2" y="-2" width="4" height="4" rx="1" fill="#e63946"/>`,
    pollo: `<path d="M-16 4c-2-10 8-16 18-14s14 10 10 16-24 8-28-2z" fill="#b8682f"/><path d="M-10 2c2-6 10-8 16-5" stroke="#8a4a1d" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M-6 6c4-2 10-2 14 0" stroke="#d48a4f" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    arroz: `<ellipse rx="1.8" ry=".9" fill="#f6ecd6"/>`,
    habichuela: `<ellipse rx="3.4" ry="2.2" fill="#8c1c2b"/><ellipse cx="-1" cy="-.8" rx="1.2" ry=".6" fill="#b83a4b"/>`,
    lechuga: `<path d="M-14 0q-2-10 6-12q4-6 10-2q8-2 10 6q6 6 0 12q-4 6-12 4q-8 4-12-2q-6-2-2-6z" fill="#7cc35a"/><path d="M-8 4q8-6 16-8" stroke="#4f9a36" stroke-width="1.5" fill="none"/>`,
    tomate: `<circle r="8" fill="#e63946"/><circle r="5.5" fill="#f8737d"/><g fill="#ffd8a8"><ellipse cx="-2" cy="-2" rx="1" ry="1.6"/><ellipse cx="2.4" cy="-1" rx="1" ry="1.6"/><ellipse cy="2.6" rx="1.6" ry="1"/></g>`,
    pepino: `<circle r="7" fill="#2f7d32"/><circle r="5.6" fill="#cfe9a8"/><g fill="#9cc56f"><circle cx="-1.5" cy="-1" r=".8"/><circle cx="1.5" cy="-1" r=".8"/><circle cy="1.6" r=".8"/></g>`,
    pescado: `<path d="M-22 0q4-10 20-10t22 6q-2 10-20 10t-22-6z" fill="#f2b38a"/><g stroke="#c9774b" stroke-width="2" stroke-linecap="round"><path d="M-12-6l6 10M-2-7l6 11M8-6l5 9"/></g><circle cx="16" cy="-6" r="3" fill="#f6e05e"/>`,
    yuca: `<rect x="-9" y="-6" width="18" height="12" rx="4" fill="#f3ead2" stroke="#d9c79c"/>`,
    brocoli: `<rect x="-2" width="4" height="9" rx="2" fill="#7fb069"/><g fill="#3f8f3a"><circle cx="-5" cy="-2" r="5"/><circle cx="5" cy="-2" r="5"/><circle cy="-6" r="5.5"/></g><g fill="#5aac4d"><circle cx="-2" cy="-6" r="2"/><circle cx="4" cy="-3" r="2"/></g>`,
    zanahoria: `<circle r="5" fill="#f4892b"/><circle r="2.5" fill="#f9b16b"/>`,
    lenteja: `<ellipse rx="1.9" ry="1.4" fill="#6b4220"/>`,
    auyama: `<rect x="-3.5" y="-3.5" width="7" height="7" rx="1.5" fill="#f4a03b"/>`,
    cilantro: `<g fill="#4caf50"><circle cx="-2" r="2"/><circle cx="2" cy="-1" r="2"/><circle cy="2" r="2"/></g>`,
    garbanzo: `<circle r="3.4" fill="#e8c27a"/><circle cx="-1" cy="-1" r="1.1" fill="#f5dca8"/>`,
    tayota: `<rect x="-5" y="-5" width="10" height="10" rx="2.5" fill="#c4e3a4" stroke="#8fbf6c"/>`,
    hebra: `<path d="M-5 0q5-3 10 0" stroke="#c98a4a" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
    tortilla: `<path d="M-24 4a24 20 0 0 1 48 0q-24 7-48 0z" fill="#f6c945"/><path d="M-20 2a20 15 0 0 1 40 0" stroke="#e8b52e" stroke-width="1.5" fill="none"/><g fill="#3f8f3a"><circle cx="-8" cy="-5" r="2.2"/><circle cx="4" cy="-9" r="2.2"/><circle cx="12" cy="-2" r="2"/><circle cx="-2" cy="-1" r="1.8"/><circle cx="-15" cy="0" r="1.8"/></g><g fill="#fff8e1"><circle cx="-12" cy="-6" r="2.2"/><circle cx="8" cy="-4" r="2"/></g>`,
    berenjena: `<rect x="-5" y="-5" width="10" height="10" rx="2.5" fill="#e9dcc0" stroke="#5b2a6e" stroke-width="2"/>`,
    nuez: `<ellipse rx="4.5" ry="3.2" fill="#a0652e"/><path d="M-3 0h6" stroke="#6e4019"/>`,
    palitoZ: `<rect x="-2.5" y="-13" width="5" height="26" rx="2.5" fill="#f4892b"/>`,
    palitoP: `<rect x="-2.5" y="-13" width="5" height="26" rx="2.5" fill="#9cc56f" stroke="#2f7d32"/>`,
    palitoA: `<rect x="-2.5" y="-13" width="5" height="26" rx="2.5" fill="#e63946"/>`,
    hummus: `<circle r="15" fill="#fff" stroke="#ddd"/><circle r="12" fill="#e3c58f"/><path d="M-6 0a6 6 0 1 0 6-6" stroke="#c9a565" stroke-width="1.5" fill="none"/><circle cx="2" cy="2" r="1.5" fill="#c0392b"/><circle cx="-3" cy="-3" r="1" fill="#c0392b"/>`,
    mani: `<circle r="13" fill="#fff" stroke="#ddd"/><circle r="10" fill="#b07a3e"/><path d="M-5-2q5-4 10 0" stroke="#d3a066" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    manzana: `<path d="M-13 3q13 11 26 0q-13 5-26 0z" fill="#d62839"/><path d="M-12 3q12 4 24 0q-12-13-24 0z" fill="#fbeec1"/><circle cx="-2" cy="-1" r=".9" fill="#5a3a1a"/><circle cx="2" cy="-1" r=".9" fill="#5a3a1a"/>`,
  };

  /* ---------- Marco de plato o bol ---------- */
  const FONDO = { Desayuno: "#fdf1d6", Almuerzo: "#e3f2e1", Cena: "#e6e4f5", Merienda: "#fde4e1" };
  const cubiertos = `<g fill="#b8bfc6"><rect x="25" y="14" width="2" height="16" rx="1"/><rect x="29" y="14" width="2" height="16" rx="1"/><rect x="33" y="14" width="2" height="16" rx="1"/><rect x="24" y="28" width="12" height="7" rx="3.5"/><rect x="28" y="33" width="4" height="62" rx="2"/><path d="M168 14q8 5 8 32h-8z"/><rect x="168" y="44" width="5" height="51" rx="2.5"/></g>`;
  function marco(fondo, plato) {
    return `<svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="200" height="110" fill="${fondo}"/>` +
      `<g fill="#fff" opacity=".55">${[[12, 12], [60, 100], [150, 102], [188, 70], [8, 80], [140, 8], [58, 8]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3"/>`).join("")}</g>` +
      cubiertos + `<ellipse cx="102" cy="60" rx="50" ry="50" fill="#000" opacity=".07"/>` + plato + `</svg>`;
  }
  const plato = c => `<circle cx="100" cy="56" r="49" fill="#fff"/><circle cx="100" cy="56" r="39" fill="#f8f8f4" stroke="#ececec"/>` + c;
  const bol = (borde, fondo, c) => `<circle cx="100" cy="56" r="48" fill="${borde}"/><circle cx="100" cy="56" r="41" fill="${fondo}"/><path d="M68 34a40 40 0 0 1 20-14" stroke="#fff" stroke-width="3" opacity=".5" fill="none" stroke-linecap="round"/>` + c;

  const PLATOS = {
    mangu: () => plato(put("mangu", 86, 58, 1.25) + put("huevo", 120, 44, .85, 20) + put("huevo", 122, 70, .8, -30) + put("aguacate", 82, 30, .7, 70) + put("cebolla", 96, 82, .8) + put("cebolla", 108, 84, .65)),
    avena: () => bol("#9ccfd8", "#ecdab4", esparcir("avena", 70, 100, 56, 36, 36, 1, 3) + esparcir("chia", 40, 100, 56, 34, 34, 1, 7) + put("fresa", 92, 46, 1.2, -10) + put("fresa", 112, 58, 1.2, 30) + put("fresa", 96, 70, 1.1, -25) + esparcir("canela", 20, 100, 56, 30, 30, 1, 11)),
    revoltillo: () => plato(esparcir("revuelto", 22, 88, 56, 20, 22, 1, 5) + esparcir("espinaca", 12, 88, 56, 20, 22, 1, 9) + esparcir("tomatito", 8, 88, 56, 18, 20, 1, 13) + put("pan", 122, 56, .95, 12)),
    pollo: () => plato(`<ellipse cx="82" cy="52" rx="20" ry="15" fill="#a57c52"/>` + esparcir("arroz", 40, 82, 52, 17, 12, 1, 2) + esparcir("habichuela", 10, 82, 52, 15, 10, .6, 4) + put("pollo", 114, 46, .85, 10) + put("lechuga", 110, 76, .75) + put("tomate", 126, 72, .65) + put("pepino", 92, 80, .7) + put("pepino", 80, 76, .6)),
    pescado: () => plato(put("pescado", 100, 40, 1.15, -6) + put("yuca", 78, 64, 1, 15) + put("yuca", 88, 76, .9, -20) + put("yuca", 74, 78, .8, 40) + put("brocoli", 116, 72, 1) + put("brocoli", 128, 60, .9) + put("zanahoria", 104, 84, .8) + put("zanahoria", 118, 86, .75)),
    lentejas: () => bol("#d98c5f", "#8a5a2e", esparcir("lenteja", 70, 100, 56, 37, 37, 1, 6) + esparcir("auyama", 8, 100, 56, 28, 28, 1, 8) + esparcir("zanahoria", 5, 100, 56, 26, 26, .6, 10) + esparcir("cilantro", 4, 100, 56, 20, 20, .9, 12)),
    garbanzos: () => plato(esparcir("garbanzo", 26, 100, 56, 20, 20, 1, 14) + anillo("pepino", 6, 100, 56, 30, .75) + anillo("tomate", 6, 100, 56, 30, .7, 0, .52) + esparcir("cilantro", 4, 100, 56, 16, 16, .8, 15)),
    tayota: () => plato(esparcir("tayota", 14, 100, 56, 27, 27, 1, 16) + esparcir("hebra", 16, 100, 56, 26, 26, 1, 17) + esparcir("cilantro", 5, 100, 56, 24, 24, .8, 18)),
    tortilla: () => plato(put("tortilla", 100, 54, 1.3) + put("lechuga", 84, 80, .6, 20) + put("tomate", 116, 80, .6)),
    berenjena: () => plato(esparcir("berenjena", 12, 100, 56, 26, 26, 1, 19) + esparcir("habichuela", 16, 100, 56, 28, 28, 1, 20) + esparcir("cilantro", 4, 100, 56, 22, 22, .8, 21)),
    yogur: () => bol("#f4a7b9", "#fbfaf4", `<path d="M86 50q14-10 28 0t-28 12" stroke="#ece6d6" stroke-width="3" fill="none"/>` + anillo("nuez", 7, 100, 56, 24, 1) + esparcir("canela", 30, 100, 56, 14, 14, 1, 22)),
    hummus: () => plato(put("hummus", 100, 56, 1) + [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => { const a = i / 9 * 6.283, c = ["palitoZ", "palitoP", "palitoA"][i % 3]; return put(c, (100 + Math.cos(a) * 28).toFixed(1), (56 + Math.sin(a) * 28).toFixed(1), .9, Math.round(a * 57.3 + 90)); }).join("")),
    manzana: () => plato(put("mani", 100, 56, 1) + anillo("manzana", 7, 100, 56, 27, .9, 90)),
  };

  /* ---------- Personas (poses con puntos de articulación) ---------- */
  function persona(p, c = {}) {
    const piel = c.piel || "#c68a5e", pielB = c.pielB || "#a87149", camisa = c.camisa || "#2a9d8f", camisaB = "#21867a",
      pant = c.pant || "#264653", pantB = "#1b333f", pelo = c.pelo || "#2b1d14", zapato = "#e76f51";
    const pl = (pts, col, w) => `<polyline points="${pts.map(q => q.join(",")).join(" ")}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
    const zap = f => `<ellipse cx="${f[0] + 2}" cy="${f[1] + 1}" rx="5.5" ry="3" fill="${zapato}"/>`;
    const brazo = (e, h, cam, pi) => pl([p.n, e], cam, 7) + pl([e, h], pi, 5.5);
    return pl([p.p, p.kb, p.fb], pantB, 8) + zap(p.fb) + brazo(p.eb, p.hb, camisaB, pielB) +
      pl([p.p, p.ka, p.fa], pant, 8) + zap(p.fa) + pl([p.n, p.p], camisa, 14) + brazo(p.ea, p.ha, camisa, piel) +
      pl([p.n, [p.h[0], p.h[1] + 6]], piel, 5) +
      `<circle cx="${p.h[0]}" cy="${p.h[1]}" r="8" fill="${piel}"/><path d="M${p.h[0] - 8.5} ${p.h[1] - 1}a8.5 8.5 0 0 1 17 0q-8.5-5-17 0z" fill="${pelo}"/>`;
  }
  const mover = (p, dx, dy = 0) => Object.fromEntries(Object.entries(p).map(([k, v]) => [k, [v[0] + dx, v[1] + dy]]));
  const ANDAR = { h: [100, 22], n: [100, 34], p: [100, 63], ka: [108, 79], fa: [113, 95], kb: [94, 79], fb: [86, 95], ea: [107, 48], ha: [113, 58], eb: [93, 48], hb: [88, 58] };

  function escena(fondo, suelo, contenido) {
    return `<svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="200" height="110" fill="${fondo}"/><rect y="98" width="200" height="12" fill="${suelo}"/>${contenido}</svg>`;
  }
  const silla = (x, y) => `<g fill="#8d6e63"><rect x="${x}" y="${y}" width="28" height="5" rx="2"/><rect x="${x + 1}" y="${y + 4}" width="4" height="${97 - y - 4}"/><rect x="${x + 23}" y="${y + 4}" width="4" height="${97 - y - 4}"/></g>`;
  const arbol = (x, s = 1) => `<g transform="translate(${x} 98) scale(${s})"><rect x="-3" y="-30" width="6" height="30" fill="#8d6e63"/><circle cy="-38" r="16" fill="#52b788"/><circle cx="-10" cy="-30" r="10" fill="#40916c"/><circle cx="10" cy="-32" r="11" fill="#74c69d"/></g>`;

  const EJ = {
    caminar: () => escena("#e0f2f1", "#b7dfb9", `<circle cx="164" cy="22" r="11" fill="#ffd166"/>` + arbol(36) + arbol(178, .7) + `<path d="M0 104q100-8 200 0" stroke="#e9dcc0" stroke-width="5" fill="none"/>` + persona(ANDAR)),
    paseo: () => escena("#fff4e0", "#f1d9b5", `<g transform="translate(52 50)"><circle r="20" fill="#fff" stroke="#e76f51" stroke-width="3"/><path d="M0-12V0l8 6" stroke="#264653" stroke-width="3" fill="none" stroke-linecap="round"/></g><text x="52" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#e76f51">15 min</text>` + persona(mover(ANDAR, 34))),
    sentadilla: () => escena("#ede7f6", "#d1c4e9", silla(106, 74) + `<rect x="129" y="38" width="4" height="40" fill="#8d6e63"/>` +
      persona({ h: [88, 40], n: [94, 50], p: [112, 71], ka: [92, 74], fa: [94, 95], kb: [96, 75], fb: [99, 95], ea: [80, 55], ha: [66, 54], eb: [83, 58], hb: [69, 58] }) +
      `<path d="M150 50v24m-5-5 5 5 5-5M150 74" stroke="#7e57c2" stroke-width="2.5" fill="none" stroke-linecap="round"/>`),
    pared: () => escena("#e3f2fd", "#bbdefb", `<rect x="150" width="50" height="98" fill="#eadfcf"/><g stroke="#d6c6ae" stroke-width="1.5">${[16, 32, 48, 64, 80].map(y => `<path d="M150 ${y}h50"/>`).join("")}${[0, 16, 32, 48, 64, 80].map((y, i) => `<path d="M${i % 2 ? 175 : 162} ${y}v16"/>`).join("")}</g>` +
      persona({ h: [137, 32], n: [130, 42], p: [110, 66], ka: [99, 81], fa: [88, 95], kb: [102, 81], fb: [93, 95], ea: [141, 54], ha: [149, 43], eb: [140, 57], hb: [149, 47] })),
    talones: () => escena("#fce4ec", "#f8bbd0", silla(64, 76) + `<rect x="87" y="52" width="4" height="28" fill="#8d6e63"/>` +
      persona({ h: [112, 20], n: [112, 32], p: [112, 60], ka: [110, 76], fa: [110, 91], kb: [115, 76], fb: [115, 91], ea: [102, 45], ha: [91, 53], eb: [121, 46], hb: [123, 60] }) +
      `<path d="M138 96V78m-5 5 5-5 5 5" stroke="#d81b60" stroke-width="2.5" fill="none" stroke-linecap="round"/>`),
    remo: () => escena("#e8f5e9", "#c8e6c9", `<rect x="50" y="94" width="100" height="5" rx="2.5" fill="#80cbc4"/>` +
      `<path d="M91 74Q114 80 136 90M92 77Q114 84 136 92" stroke="#e63946" stroke-width="2.2" fill="none"/>` +
      persona({ h: [86, 48], n: [84, 60], p: [80, 90], ka: [104, 89], fa: [132, 90], kb: [104, 90], fb: [132, 92], ea: [70, 72], ha: [90, 74], eb: [72, 75], hb: [92, 77] })),
    baile: () => escena("#fff3e0", "#ffe0b2", `<g font-family="serif" font-size="20" fill="#e76f51"><text x="40" y="40">♪</text><text x="150" y="34">♫</text><text x="160" y="76" font-size="14">♪</text><text x="54" y="80" font-size="14">♫</text></g>` +
      persona({ h: [100, 22], n: [100, 34], p: [102, 62], ka: [96, 79], fa: [95, 95], kb: [114, 74], fb: [126, 84], ea: [89, 27], ha: [82, 13], eb: [111, 27], hb: [119, 14] }, { camisa: "#f4a261" })),
    estirar: () => escena("#e0f7fa", "#b2ebf2", `<rect x="58" y="94" width="84" height="5" rx="2.5" fill="#a78bfa"/>` +
      persona({ h: [107, 25], n: [103, 36], p: [100, 63], ka: [94, 79], fa: [89, 94], kb: [106, 79], fb: [111, 94], ea: [100, 21], ha: [114, 9], eb: [110, 24], hb: [120, 12] }, { camisa: "#7e57c2" })),
  };

  /* ---------- Portada ---------- */
  function portada() {
    return `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8f0e8"/><stop offset="1" stop-color="#eefaf6"/></linearGradient></defs>
      <rect width="360" height="150" fill="url(#cielo)"/>
      <circle cx="300" cy="30" r="16" fill="#ffd166"/><circle cx="300" cy="30" r="24" fill="#ffd166" opacity=".25"/>
      <path d="M0 110q60-34 130-10t120-6 110 4v52H0z" fill="#95d5b2"/>
      <path d="M0 126q90-22 180-4t180-6v34H0z" fill="#74c69d"/>
      <path d="M40 150q30-30 60-34" stroke="#e9dcc0" stroke-width="7" fill="none" stroke-linecap="round"/>
      <g transform="translate(-20 18) scale(.92)">${persona(ANDAR)}</g>
      ${arbol(30, .9).replace("translate(30 98)", "translate(30 120)")}
      <g transform="translate(160 -2) scale(.95)">${plato(put("lechuga", 88, 48, 1) + put("pollo", 114, 50, .8, 10) + put("tomate", 98, 74, .7) + put("pepino", 82, 70, .7) + put("aguacate", 118, 74, .55, 60) + put("brocoli", 78, 46, .8))}</g>
      <path d="M318 96c-6-8-18-4-14 6 2 5 14 12 14 12s12-7 14-12c4-10-8-14-14-6z" fill="#e76f51"/>
    </svg>`;
  }

  /* ---------- Iconos de categorías de consejos ---------- */
  const ICONOS = {
    "Alimentación": [`#e3f2e1`, `<circle cx="18" cy="21" r="9" fill="#e63946"/><path d="M18 12q2-5 6-6" stroke="#6d4c41" stroke-width="2" fill="none"/><ellipse cx="22" cy="10" rx="4" ry="2" fill="#52b788" transform="rotate(-30 22 10)"/>`],
    "Glucosa": [`#e0f2f1`, `<path d="M18 7q9 11 9 16a9 9 0 0 1-18 0q0-5 9-16z" fill="#0f766e"/><circle cx="15" cy="22" r="2.5" fill="#fff" opacity=".6"/>`],
    "Medicación": [`#ede7f6`, `<g transform="rotate(-40 18 18)"><rect x="8" y="13" width="20" height="10" rx="5" fill="#fff" stroke="#7e57c2" stroke-width="1.5"/><path d="M18 13h5a5 5 0 0 1 0 10h-5z" fill="#7e57c2"/></g>`],
    "Cuidado del cuerpo": [`#fde4e1`, `<path d="M18 28s-10-6-10-13a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 7-10 13-10 13z" fill="#e76f51"/>`],
    "Bienestar": [`#e3f2fd`, `<path d="M22 8a10 10 0 1 0 6 16 8 8 0 0 1-6-16z" fill="#5c6bc0"/><circle cx="25" cy="11" r="1.5" fill="#ffd166"/><circle cx="29" cy="17" r="1" fill="#ffd166"/>`],
  };
  function icono(cat) {
    const [f, c] = ICONOS[cat] || ICONOS["Glucosa"];
    return `<svg viewBox="0 0 36 36" width="36" height="36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="18" cy="18" r="18" fill="${f}"/>${c}</svg>`;
  }

  window.ILUS = {
    receta: r => marco(FONDO[r.momento] || "#eef5f2", (PLATOS[r.img] || (() => plato(put("lechuga", 100, 56, 1.4))))()),
    ejercicio: e => (EJ[e.img] || EJ.caminar)(),
    portada, icono,
  };
})();
