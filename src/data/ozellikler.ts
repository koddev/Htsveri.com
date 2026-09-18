import type { SimgeAdi } from './simgeler';

export interface Ozellik {
  simge: SimgeAdi;
  renk: 'siyan' | 'mavi' | 'mor' | 'pembe' | 'yesil';
  baslik: string;
  aciklama: string;
}

export const ozellikler: Ozellik[] = [
  {
    simge: 'aramaMercek',
    renk: 'siyan',
    baslik: "50'den Fazla Hazır Sorgu",
    aciklama: 'İrtibat, baz istasyonu, IMEI ve CGNAT analizini tek tıkla çalıştırın; sıfırdan filtre kurmaya gerek yok.',
  },
  {
    simge: 'baglantiAgi',
    renk: 'mor',
    baslik: 'Ortak Baz Analizi',
    aciklama: 'Aynı baz istasyonunu paylaşan hatları saniyeler içinde listeler; tarih, saat ve mesafe kriterleriyle daraltılır.',
  },
  {
    simge: 'telefonIz',
    renk: 'pembe',
    baslik: 'IMEI ve Cihaz Analizi',
    aciklama: 'Hat numarası değişse de cihazı izlemeye devam edin; aynı IMEI üzerinden geçen tüm hatları eşleştirir.',
  },
  {
    simge: 'sinyalDalga',
    renk: 'mavi',
    baslik: 'CGNAT ve GPRS Çözümleme',
    aciklama: 'Paylaşılan bir IP adresinin arkasındaki gerçek kullanıcıyı, port ve zaman bilgisini çaprazlayarak ayrıştırır.',
  },
  {
    simge: 'veriKatmani',
    renk: 'yesil',
    baslik: 'Milyar Satırlık Ölçek',
    aciklama: 'Kurum sunucusu kurmaya gerek yok; sıradan bir bilgisayarda dahi devasa dökümlerle akıcı çalışır.',
  },
  {
    simge: 'konumIsareti',
    renk: 'siyan',
    baslik: 'Harita Üzerinde Görselleştirme',
    aciklama: 'Konum sütunlarını kendiliğinden bulur, yakın noktaları kümeler ve sonuçları zaman eksenine göre süzer.',
  },
  {
    simge: 'baglantiAgi',
    renk: 'mor',
    baslik: 'İlişki Diyagramı',
    aciklama: 'Herhangi bir sorgu sonucunu düzenlenebilir bir bağlantı grafiğine aktarın; düğüm konumları korunur.',
  },
  {
    simge: 'dosyaAktar',
    renk: 'pembe',
    baslik: 'Esnek Excel İçe Aktarım',
    aciklama: 'Operatör dosyalarındaki standart dışı sütun düzenleri bile bir uyarıyla birlikte içeri alınır, veri kaybolmaz.',
  },
  {
    simge: 'veritabaniBaglan',
    renk: 'mavi',
    baslik: 'Kendi SQL Sorgunuzu Yazın',
    aciklama: 'Sonuçları yerel bir MSSQL veya PostgreSQL veritabanına aktarıp kendi sorgunuzla derinleşin.',
  },
];
