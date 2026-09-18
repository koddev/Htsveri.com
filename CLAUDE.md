# HTS Analiz Programı — htsveri.com

Tek sayfalık, statik (Astro + Tailwind v4) bir tanıtım sitesi. Cloudflare Pages'e statik olarak yayınlanır.

## Sabit kurallar

- **Sadece tek sayfa** (`src/pages/index.astro`) + varsayılan `404.astro`. Yeni route eklemeyin (blog, `/kurulum`, `/iletisim` vb. yok) — indirme akışı ana sayfadaki `IndirmeKapisi` modalı üzerinden yürür.
- **Sadece HTS** — MASAK/GİB/finansal suç içeriği eklemeyin.
- **"Kovan" veya "Kovan Yazılım" kelimeleri hiçbir yerde geçmez** — kod, yorum, metin, `alt`, JSON-LD dahil. `npm run kontrol` build sonrası bunu otomatik denetler.
- **İndirme adresi sabittir**: `https://indir.kovanyazilim.com/Kovan.Desktop.application` (bkz. `src/ayar.ts` → `indirmeAdresi`). Değiştirmeyin.
- Marka adı yalnızca **"HTS Analiz Programı"** metnidir — ayrı bir şirket/ürün kimliği uydurmayın.
- Tüm metinler bağımsız yazılmalı; başka bir siteden (özellikle kovanyazilim.com) cümle çevirisi/kopyası yapılmamalı.

## Komutlar

- `npm run dev` — geliştirme sunucusu
- `npm run build` — statik çıktı (`dist/`)
- `npm run kontrol` — build sonrası yasaklı kelime + temel SEO denetimi (build'den sonra çalıştırın)
- `npm run og` — `public/og.png` sosyal paylaşım görselini yeniden üretir
