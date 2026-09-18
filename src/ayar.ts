// Site geneli tek doğruluk kaynağı. Boş bırakılan alanlar (ör. iletişim e-postası)
// hiçbir yerde uydurulmaz; ilgili bileşen o alanı basitçe render etmez.

export const ayar = {
  marka: 'HTS Analiz Programı',
  domain: 'htsveri.com',
  siteUrl: 'https://htsveri.com',
  ozet:
    'HTS kayıtlarını kendi bilgisayarınızda analiz eden, baz istasyonu, IMEI ve CGNAT sorgularını hazır sunan, harita ve ilişki grafiği ile sonucu görselleştiren ücretsiz masaüstü programı.',

  indirmeAdresi: 'https://indir.kovanyazilim.com/Kovan.Desktop.application',

  nav: [
    { etiket: 'Özellikler', href: '#ozellikler' },
    { etiket: 'Nasıl Çalışır', href: '#nasil-calisir' },
    { etiket: 'Veri Güvenliği', href: '#veri-guvenligi' },
    { etiket: 'SSS', href: '#sss' },
  ],

  // Boşsa footer'da hiçbir satır render edilmez.
  iletisim: {
    eposta: '',
  },
} as const;
