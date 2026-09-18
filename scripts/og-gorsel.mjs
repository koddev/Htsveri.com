// Sosyal paylaşım (Open Graph) görselini üretir: koyu lacivert zemin + düğüm/kenar ağı motifi.
// KovanSite'ın krem/kehribar OG tasarımının kasıtlı tersi.
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
    dugumler.push({ x: sayi(0, GENISLIK), y: sayi(0, YUKSEKLIK), r: sayi(1.6, 3.2) });
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
        const opaklik = (1 - mesafe / maxMesafe) * 0.5;
        const renk = Math.random() > 0.82 ? '#8b5cf6' : '#22d3ee';
        parcalar += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" stroke="${renk}" stroke-width="1" stroke-opacity="${opaklik.toFixed(2)}" />`;
      }
    }
  }
  return parcalar;
}

function dugumlerSvg(dugumler) {
  return dugumler
    .map((d) => `<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="${d.r.toFixed(1)}" fill="#67e8f9" fill-opacity="0.9" />`)
    .join('');
}

const dugumler = dugumUret(48);

const svg = `
<svg width="${GENISLIK}" height="${YUKSEKLIK}" viewBox="0 0 ${GENISLIK} ${YUKSEKLIK}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="parlamaMor" cx="72%" cy="18%" r="55%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="parlamaSiyan" cx="18%" cy="85%" r="55%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.28" />
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="baslikGradyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="55%" stop-color="#67e8f9" />
      <stop offset="100%" stop-color="#c4b5fd" />
    </linearGradient>
  </defs>
  <rect width="${GENISLIK}" height="${YUKSEKLIK}" fill="#070b14" />
  <rect width="${GENISLIK}" height="${YUKSEKLIK}" fill="url(#parlamaMor)" />
  <rect width="${GENISLIK}" height="${YUKSEKLIK}" fill="url(#parlamaSiyan)" />
  <g opacity="0.8">${kenarlarSvg(dugumler, 150)}</g>
  <g>${dugumlerSvg(dugumler)}</g>
  <rect x="0" y="0" width="${GENISLIK}" height="${YUKSEKLIK}" fill="#070b14" fill-opacity="0.32" />
  <text x="90" y="270" font-family="Arial, sans-serif" font-size="30" font-weight="600" letter-spacing="4" fill="#22d3ee">HTS KAYIT ANALİZİ</text>
  <text x="88" y="340" font-family="Arial, sans-serif" font-size="72" font-weight="800" fill="url(#baslikGradyan)">HTS Analiz Programı</text>
  <text x="90" y="400" font-family="Arial, sans-serif" font-size="30" fill="#9aa7c2">Verileriniz bilgisayarınızdan çıkmadan, dakikalar içinde bulguya dönüşür.</text>
</svg>
`;

const arabellek = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(HEDEF, arabellek);
console.log(`OG görseli üretildi: ${HEDEF}`);
