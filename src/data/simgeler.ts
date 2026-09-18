// Dolgulu/duotone ikon kayıt seti — 24x24, currentColor ile renklendirilir.
// Simge.astro her ikonu iki katman olarak çizer: bulanık bir "glow" katmanı +
// üstte net bir katman. KovanSite'ın 1.5px tek renkli çizgi ikonlarının tersine
// dolgulu ve çok renkli bağlamda kullanılabilir bir stil.

export type SimgeAdi =
  | 'sinyalDalga'
  | 'baglantiAgi'
  | 'konumIsareti'
  | 'telefonIz'
  | 'zamanCizgisi'
  | 'veriKatmani'
  | 'dosyaAktar'
  | 'korumaKalkani'
  | 'yildirimHiz'
  | 'veritabaniBaglan'
  | 'onayRozeti'
  | 'aramaMercek';

// Her değer, <svg viewBox="0 0 24 24"> içine yerleştirilecek ham path/shape işaretlemesidir.
export const simgeler: Record<SimgeAdi, string> = {
  sinyalDalga: `
    <circle cx="6" cy="18" r="2" />
    <path d="M10.2 18a6.2 6.2 0 0 1 6.2-6.2v2.4A3.8 3.8 0 0 0 12.6 18h-2.4Z" />
    <path d="M14.4 18a10.4 10.4 0 0 1 10.4-10.4v2.4A8 8 0 0 0 16.8 18h-2.4Z" />
  `,
  baglantiAgi: `
    <circle cx="6" cy="7" r="3" />
    <circle cx="18" cy="7" r="3" />
    <circle cx="12" cy="19" r="3" />
    <path d="M8.6 8.2 15.4 8.2 M7.6 9.6 10.8 16.6 M16.4 9.6 13.2 16.6" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" opacity="0.85" />
  `,
  konumIsareti: `
    <path d="M12 2c-4 0-7.2 3.1-7.2 7.1 0 5.3 6 11.9 6.7 12.6a.7.7 0 0 0 1 0c.7-.7 6.7-7.3 6.7-12.6C19.2 5.1 16 2 12 2Z" />
    <circle cx="12" cy="9.2" r="2.6" fill="#070b14" />
  `,
  telefonIz: `
    <rect x="7" y="2" width="10" height="17" rx="2.4" />
    <rect x="9.4" y="18.4" width="5.2" height="3.6" rx="1.2" fill="#070b14" />
    <circle cx="12" cy="5.4" r="1" fill="#070b14" />
  `,
  zamanCizgisi: `
    <rect x="2" y="11" width="20" height="2" rx="1" opacity="0.5" />
    <circle cx="5" cy="12" r="2.6" />
    <circle cx="12" cy="12" r="2.6" />
    <circle cx="19" cy="12" r="2.6" />
  `,
  veriKatmani: `
    <path d="M12 2 21 6.6 12 11.2 3 6.6Z" />
    <path d="M3 12 12 16.6 21 12 21 14.4 12 19 3 14.4Z" opacity="0.75" />
  `,
  dosyaAktar: `
    <path d="M6 2h8l4 4v16H6Z" opacity="0.9" />
    <path d="M14 2v4h4" fill="#070b14" opacity="0.5" />
    <path d="M12 10v7m0 0-2.8-2.8M12 17l2.8-2.8" stroke="#070b14" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  `,
  korumaKalkani: `
    <path d="M12 2 20 5.4v6c0 5.4-3.6 9-8 10.6-4.4-1.6-8-5.2-8-10.6v-6Z" />
    <path d="M8.6 12.1 11 14.5 15.6 9.6" stroke="#070b14" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  `,
  yildirimHiz: `
    <path d="M13.4 1.6 5.2 13.8h5.1L9 22.4l9.4-13.2h-5.6Z" />
  `,
  veritabaniBaglan: `
    <ellipse cx="12" cy="5" rx="7" ry="3" />
    <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" opacity="0.85" />
    <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" opacity="0.6" />
  `,
  onayRozeti: `
    <path d="M12 1.6 14.6 4.4 18.3 3.9 18.6 7.6 21.8 9.5 20 12.8 21.8 16.1 18.6 18 18.3 21.7 14.6 21.2 12 24 9.4 21.2 5.7 21.7 5.4 18 2.2 16.1 4 12.8 2.2 9.5 5.4 7.6 5.7 3.9 9.4 4.4Z" />
    <path d="M8.6 12.3 10.8 14.5 15.4 9.5" stroke="#070b14" stroke-width="1.9" fill="none" stroke-linecap="round" stroke-linejoin="round" />
  `,
  aramaMercek: `
    <circle cx="10.5" cy="10.5" r="7.5" />
    <circle cx="10.5" cy="10.5" r="4.2" fill="#070b14" opacity="0.55" />
    <rect x="18.5" y="19.3" width="4.4" height="2.6" rx="1.3" transform="rotate(45 18.5 19.3)" />
  `,
};
