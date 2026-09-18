// Build sonrası denetim: yasaklı kelime taraması + temel SEO kontrolleri.
// dist/ klasöründeki her .html dosyasını tarar; herhangi bir kontrol başarısız olursa
// process.exit(1) ile çıkar (CI/deploy adımını durdurmak için).
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const KOK = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DIST = path.join(KOK, 'dist');

const YASAKLI_KELIMELER = ['Kovan', 'kovan', 'KOVAN', 'MASAK', 'GİB', 'GIB'];

// Tek istisna: gerçek indirme linki (plan gereği aynı kurulum dosyasına yönlendirilir).
// Denetimden önce içerikten çıkarılır ki geri kalan her "Kovan" geçişi gerçek bir sızıntı sayılsın.
const IZINLI_ISTISNA = 'https://indir.kovanyazilim.com/Kovan.Desktop.application';

async function htmlDosyalariniBul(dizin) {
  const girdiler = await readdir(dizin, { withFileTypes: true });
  const sonuc = [];
  for (const girdi of girdiler) {
    const tamYol = path.join(dizin, girdi.name);
    if (girdi.isDirectory()) {
      sonuc.push(...(await htmlDosyalariniBul(tamYol)));
    } else if (girdi.name.endsWith('.html')) {
      sonuc.push(tamYol);
    }
  }
  return sonuc;
}

let hataVar = false;
function hataBildir(dosya, mesaj) {
  hataVar = true;
  console.error(`✗ ${path.relative(DIST, dosya)}: ${mesaj}`);
}

try {
  const dosyalar = await htmlDosyalariniBul(DIST);
  if (dosyalar.length === 0) {
    console.error('dist/ içinde hiç .html dosyası bulunamadı. Önce `npm run build` çalıştırın.');
    process.exit(1);
  }

  for (const dosya of dosyalar) {
    const icerik = await readFile(dosya, 'utf8');
    const denetimIcerigi = icerik.split(IZINLI_ISTISNA).join('');

    for (const kelime of YASAKLI_KELIMELER) {
      if (denetimIcerigi.includes(kelime)) {
        hataBildir(dosya, `yasaklı kelime bulundu: "${kelime}"`);
      }
    }

    if (dosya.endsWith(path.join('dist', '404.html'))) continue;

    const h1Sayisi = (icerik.match(/<h1[\s>]/g) || []).length;
    if (h1Sayisi !== 1) {
      hataBildir(dosya, `tam olarak 1 adet <h1> bekleniyordu, ${h1Sayisi} bulundu`);
    }

    if (!/<link[^>]+rel=["']canonical["']/.test(icerik)) {
      hataBildir(dosya, 'canonical <link> etiketi bulunamadı');
    }

    if (!/<title>[^<]{10,}<\/title>/.test(icerik)) {
      hataBildir(dosya, '<title> eksik veya çok kısa');
    }

    if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']{20,}["']/.test(icerik)) {
      hataBildir(dosya, 'meta description eksik veya çok kısa');
    }

    if (!/application\/ld\+json/.test(icerik)) {
      hataBildir(dosya, 'JSON-LD (application/ld+json) bulunamadı');
    }

    const imgEtiketleri = icerik.match(/<img[^>]*>/g) || [];
    for (const img of imgEtiketleri) {
      if (!/\salt=["']/.test(img)) {
        hataBildir(dosya, `alt özniteliği olmayan <img> etiketi: ${img.slice(0, 80)}`);
      }
    }
  }

  if (hataVar) {
    console.error('\nKontrol başarısız oldu.');
    process.exit(1);
  }

  console.log(`✓ Kontrol geçti (${dosyalar.length} HTML dosyası tarandı, yasaklı kelime yok, temel SEO alanları mevcut).`);
} catch (err) {
  console.error('Kontrol sırasında beklenmeyen hata:', err);
  process.exit(1);
}
