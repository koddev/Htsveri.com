// Sosyal paylaşım (Open Graph) görselini üretir: koyu mürekkep zemin + ince
// düğüm/kenar ağı deseni, tuğla kırmızısı yalnızca seyrek bir ikincil vurgu
// olarak kullanılır. KovanSite'ın krem/kehribar OG tasarımının kasıtlı tersi.
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const KOK = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const HEDEF = path.join(KOK, 'public', 'og.png');

const GENISLIK = 1200;
const YUKSEKLIK = 630;

function sayi(min, max) {
  return min + Math.random() * (max - min);
}

function dugumUret(adet) {
  const dugumler = [];
  for (let i = 0; i < adet; i++) {
    dugumler.push({ x: sayi(0, GENISLIK), y: sayi(0, YUKSEKLIK), r: sayi(1.3, 2.6) });
  }
  return dugumler;
}

function kenarlarSvg(dugumler, maxMesafe) {
  let parcalar = '';
  for (let i = 0; i < dugumler.length; i++) {
    for (let j = i + 1; j < dugumler.length; j++) {
      const a = dugumler[i];
      const b = dugumler[j];
      const mesafe = Math.hypot(a.x - b.x, a.y - b.y);
      if (mesafe < maxMesafe) {
        const opaklik = (1 - mesafe / maxMesafe) * 0.4;
        const renk = Math.random() > 0.86 ? '#b23a2c' : '#3d403a';
        parcalar += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="${renk}" stroke-width="1" stroke-opacity="${opaklik.toFixed(2)}" />`;
      }
    }
  }
  return parcalar;
}

function dugumlerSvg(dugumler) {
  return dugumler
    .map((d) => `<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="${d.r.toFixed(1)}" fill="#9b968b" fill-opacity="0.75" />`)
    .join('');
}

const dugumler = dugumUret(46);

const svg = `
<svg width="${GENISLIK}" height="${YUKSEKLIK}" viewBox="0 0 ${GENISLIK} ${YUKSEKLIK}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${GENISLIK}" height="${YUKSEKLIK}" fill="#0b0c0d" />
  <g opacity="0.75">${kenarlarSvg(dugumler, 150)}</g>
  <g>${dugumlerSvg(dugumler)}</g>
  <rect x="0" y="0" width="${GENISLIK}" height="${YUKSEKLIK}" fill="#0b0c0d" fill-opacity="0.4" />
  <rect x="90" y="222" width="28" height="2" fill="#b23a2c" />
  <text x="90" y="268" font-family="Consolas, 'Courier New', monospace" font-size="24" fill="#9b968b">HTS-2024 / Analiz Konsolu</text>
  <text x="88" y="340" font-family="Georgia, 'Times New Roman', serif" font-size="68" font-weight="700" fill="#ece8df">HTS Analiz Programı</text>
  <text x="90" y="400" font-family="Arial, sans-serif" font-size="28" fill="#9b968b">Verileriniz bilgisayarınızdan çıkmadan, dakikalar içinde bulguya dönüşür.</text>
</svg>
`;

const arabellek = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(HEDEF, arabellek);
console.log(`OG görseli üretildi: ${HEDEF}`);
