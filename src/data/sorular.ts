export interface Soru {
  soru: string;
  cevap: string;
}

// Tek kaynak: hem görünür SSS akordeonunu hem de FAQPage JSON-LD'yi besler.
export const sorular: Soru[] = [
  {
    soru: 'Analiz ettiğim dosyalar nereye kaydediliyor?',
    cevap:
      'Hiçbir yere; yalnızca kendi bilgisayarınızda kalır. Merkezî sunucuya giden tek veri, hesabınıza giriş yapmak için gerekli e-posta ve parola bilgisidir.',
  },
  {
    soru: 'Program gerçekten ücretsiz mi?',
    cevap: 'Evet, deneme sürümü değildir. Tüm sorgular ve modüller dahil tam sürüm olarak ücretsiz kullanılır.',
  },
  {
    soru: 'Hangi dosya biçimlerini içe alabiliyorum?',
    cevap:
      'Operatörlerden gelen BTK biçimindeki .xlsx, .xls ve .xlsb dosyalarını. Sütun düzeni standarttan farklı olsa bile dosya bir uyarıyla birlikte içeri alınır.',
  },
  {
    soru: 'Çok büyük dökümlerle çalışabiliyor mu?',
    cevap: 'Evet, sıradan bir bilgisayarda bile milyar satır ölçeğine kadar akıcı çalışacak şekilde tasarlandı.',
  },
  {
    soru: 'İnternet bağlantısı gerekiyor mu?',
    cevap: 'Yalnızca hesap girişi için. Sorgular, harita ve ilişki diyagramı görüntüleme tamamen çevrimdışı çalışır.',
  },
  {
    soru: 'Hangi işletim sisteminde çalışıyor?',
    cevap: 'Windows 10 veya Windows 11 (64 bit) gerektirir.',
  },
  {
    soru: 'Sonuçları nasıl dışa aktarabilirim?',
    cevap:
      'Excel ve CSV olarak dışa aktarabilir, ya da sonuçları kendi kurduğunuz bir MSSQL veya PostgreSQL veritabanına aktarıp SQL ile ilerleyebilirsiniz.',
  },
];
