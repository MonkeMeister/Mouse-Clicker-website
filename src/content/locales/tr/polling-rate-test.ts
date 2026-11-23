import type { ToolContent } from "../../types";

export const pollingRateTest: ToolContent = {
  slug: "polling-rate-test",
  name: "Polling Hızı Testi",
  h1: "Polling Hızı Testi",
  metaTitle: "Polling Hızı Testi — Fare Polling Hızınızı Hz Cinsinden Ölçün",
  metaDescription:
    "Ham, birleştirilmiş işaretçi olaylarını kullanarak tarayıcıda fare polling hızınızı ölçün. Ortalama Hz, en yüksek Hz ve kararlılık değerlerini görün, tarayıcınızın hangi örnekleme yöntemini kullandığını öğrenin.",
  category: "Fare Araçları",
  intro: [
    "Polling hızı, farenin konumunu bilgisayara ne sıklıkla bildirdiğidir ve hertz cinsinden ölçülür. 1000 Hz'lik bir fare konumunu saniyede bin kez bildirir; 125 Hz'lik bir fare ise yüz yirmi beş kez. Test, tarayıcınızın gerçekte aldığı hızı ölçer ve hem ortalamayı hem en yüksek değeri gösterir.",
    "Ölçüm ham işaretçi olaylarından alınır; bunlar, tarayıcının tek bir kareye birleştirdiği örnekleri geri kazanır. Bu önemlidir: ham örnekleme olmadan, 1000 Hz'lik bir fare 60 ya da 120 Hz'lik bir ekranda 60 ya da 120 Hz olarak okunur; tarayıcı tabanlı polling hızı testlerinde en sık yapılan hata budur.",
  ],
  steps: [
    {
      title: "İmlecinizi test alanının üzerine getirin",
      body: "Alanın sürekli işaretçi hareketi alması gerekir. Faresi geniş bir alanın ortasına bırakıp yavaş, geniş daireler çizerek hareket ettirmek en temiz okumayı verir.",
    },
    {
      title: "Fareyi on saniye boyunca kesintisiz hareket ettirin",
      body: "Hareket etmeyi sürdürün. Fare duruyorken alınan bir okuma anlamsızdır; çünkü çoğu fare hiçbir şey değişmediğinde bildirimi durdurur.",
    },
    {
      title: "Gösterilen örnekleme yöntemini kontrol edin",
      body: "Panel, ham birleştirilmiş olayların mevcut olup olmadığını ya da okumanın kare düzeyinde örneklemeye geri düşüp düşmediğini bildirir. Ham örnekleme istediğiniz şeydir; kare düzeyine geri düşüş, ulaşılabilir okumayı ekranınızın yenileme hızıyla sınırlar.",
    },
    {
      title: "Kararlılık değerini okuyun",
      body: "Sabit bir hızda polling yapan bir fare, nominal değerinin çevresinde sıkı bir küme gösterir. Büyük değişim genellikle farklı bir hız değil, bir bağlantı sorunu anlamına gelir.",
    },
  ],
  sections: [
    {
      heading: "Ölçüm nasıl çalışıyor",
      paragraphs: [
        "Tarayıcılar işaretçi hareketini çizim için kare başına bir kez örnekler, ama alttaki donanım bundan çok daha sık bildirim yapar. 1000 Hz'lik bir fare her milisaniyede bir konum güncellemesi üretir; 60 Hz'de 16,7 milisaniyelik bir karede bu güncellemelerden yaklaşık on altısı kare içinde gelir. Tarayıcı çizim amacıyla bunlardan yalnızca sonuncuyu saklar.",
        "Birleştirilmiş olaylar API'si atılan örnekleri geri kazanır. Her işaretçi olayı, içine katlanan tüm konumların listesini kendi yüksek çözünürlüklü zaman damgalarıyla birlikte taşır. Örnek sayısını geçen süreye bölmek, ekranın hızını değil, cihazın gerçek bildirim hızını verir.",
        "Bu API'nin bulunmadığı durumlarda araç, bireysel işaretçi olaylarını saymaya geri döner; bu yöntem yalnızca ekranın yenileme hızında bildirim verebilir. Panel sayının hangi yöntemle üretildiğini etiketler; böylece 1000 Hz'lik bir farede görülen 60 Hz'lik okuma, yavaş bir fare değil, bir geri düşüş olduğu anında anlaşılır.",
      ],
    },
    {
      heading: "Yaygın polling hızları ve neye değer",
      paragraphs: [
        "125 Hz, ofis farelerinin uzun süredir varsayılanıydı ve bütçe donanımda hâlâ yaygın. 250 Hz ve 500 Hz orta segment oyun farelerinde bulunur. 1000 Hz, ana akış rekabet standardıdır. 2000 Hz, 4000 Hz ve 8000 Hz ise tutkulu oyuncuların seçtikleri donanımlarda yer alır ve hem yetenekli bir fare hem de ham işaretçi olaylarını sunan bir tarayıcı gerektirir.",
        "125 Hz'den 1000 Hz'ye geçmenin pratik faydası gerçek ama mütevazıdır: bir ila iki milisaniye daha az girdi gecikmesi. Bu rekabetçi nişancı oyunlarında önemlidir, sıradan işte ise fark edilmez. 1000 Hz'den 8000 Hz'ye sıçrama ise çok daha küçüktür — ek fayda bir milisaniyenin epey altındadır — ve esas olarak daha yüksek CPU kullanımı ile daha fazla güç tüketimi olarak ortaya çıkar.",
        "Yüksek polling hızları kare hızıyla da etkileşime girer. 240 Hz'lik bir ekranda 1000 Hz'lik bir fare kare başına yaklaşık dört kez örneklenir ve 1000 Hz ile 4000 Hz arasındaki görünür fark en küçüktür, çünkü ekran onu gösteremez.",
      ],
    },
    {
      heading: "Neden bir okuma kutuyla uyuşmayabilir",
      paragraphs: [
        "Bildirim hızı farenin bir özelliğidir, ama ölçtüğünüz şey bilgisayarınızın bildirimleri aldığı hızdır. Aralarında bağlantı ve işletim sistemi bulunur ve ikisi de etkin hızı düşürebilir.",
        "Kısa mesafede 2.4 GHz kablosuz bir fare genellikle stabildir. Menzile çıkıldığında ya da parazit olduğunda alıcı bazı bildirimleri kaçırır ve okuma düşüp dalgalanır. Düşük pille de aynı şey olur; bu durumda fare pilini korumak için bildirim hızını bilinçli olarak düşürür.",
        "USB polling ayarları da önemlidir. 125 Hz için yapılandırılmış bir denetleyici, farenin ne yapabildiğinden bağımsız olarak 1000 Hz'lik bildirimleri iletmez. Windows'ta bir USB Root Hub'ın gelişmiş özellikleri, cihazın polling aralığını gösterir.",
        "Son olarak güç yönetimi müdahale edebilir. Windows'ta ilgili denetleyici için USB seçici askıya alma özelliğini kapatmak, boştaki dönemlerde bildirim kaybeden fareler için sık kullanılan bir çözümdür.",
      ],
    },
    {
      heading: "Yüksek polling hızları ve kare hızınız",
      paragraphs: [
        "Burada gerçek bir denge var. 8000 Hz'de polling yapan bir fare saniyede sekiz bin işaretçi olayı üretir ve her biri tarayıcı ile işletim sistemi için iş yükü taşır. Yoğun bir sayfada bu, anlamlı miktarda kare süresine mal olabilir.",
        "Bu yüzden polling hızınızı yalıtılmış halde değil, gerçekten oynadığınız sayfada test etmenizin nedenlerinden biridir. Oyununuz fare 8000 Hz'de kararlı bir kare hızı tutturuyorsa, o ayarda kalın. Kare süreleri düzensizleşirse 4000 Hz'e düşüp karşılaştırın. İkisi arasındaki girdi gecikmesi farkı, pürüzlülük farkından küçüktür.",
      ],
    },
  ],
  faqs: [
    {
      question: "Oyun için iyi bir polling hızı nedir?",
      answer:
        "Çoğu rekabetçi oyun için 1000 Hz mantıklı bir hedeftir. Ana akış standarttır, 500 Hz'ye göre gecikme farkı küçük ama ölçülebilirdir ve CPU maliyeti yönetilebilir. Bunun ötesine geçmek, belirli bir oyunun fayda sağladığı hedefliyorsanız azalan getiriler üretir.",
    },
    {
      question: "Tarayıcı neden faremin teknik özelliklerindekinden daha düşük bir polling hızı gösteriyor?",
      answer:
        "Genellikle çünkü tarayıcı, ham birleştirilmiş olaylar yerine yalnızca kare düzeyinde işaretçi olayları sunmuştur; bu da okumayı ekranınızın yenileme hızıyla sınırlar. Test paneli hangi yöntemin kullanıldığını belirtir. Geri düşüş bildiriliyorsa gerçek hız gösterilen sayıdan daha yüksektir.",
    },
    {
      question: "8000 Hz, 1000 Hz'den gerçekten daha mı iyi?",
      answer:
        "Marjinal biçimde, ve esas olarak kare süresi açısından. Gecikmedeki kazanç bir milisaniyenin bir kesri, ki bunu az sayıda oyuncu algılayabilir. Bedeli ise tarayıcının ve işletim sisteminin işleyeceği sekiz kat işaretçi olayıdır; bu, yoğun bir sayfada kare ritmini etkileyebilir.",
    },
    {
      question: "Fare polling hızımı nasıl test ederim?",
      answer:
        "İmlecinizi test alanının üzerinde yaklaşık on saniye boyunca kesintisiz hareket ettirin. Fareyi durdurmak hiçbir okuma vermez, çünkü çoğu fare hiçbir şey hareket etmediğinde bildirimi durdurur. Geniş ve yavaş daireler en temiz sonucu üretir.",
    },
    {
      question: "Polling hızım test sırasında neden dalgalanıyor?",
      answer:
        "Dalgalanma genellikle fare ile bilgisayar arasında bildirimlerin kaybolduğu anlamına gelir. Yaygın nedenler zayıf bir kablosuz bağlantı ya da parazit, farenin hızını düşürmesine yol açan düşük pil ve bağlantı noktasını askıya alan USB güç yönetimidir. Kısa kablolu bağlantı, karşılaştırma için temel ölçüttür.",
    },
    {
      question: "Polling hızı imlecimin pürüzlülüğünü etkiler mi?",
      answer:
        "Elinizin hareketiyle oyunun tepki vermesi arasındaki gecikmeyi etkiler. İmlecin görünür pürüzlülüğü ise ekranınızın yenileme hızıyla sınırlıdır; bu yüzden 60 Hz'lik bir ekranda 1000 Hz'lik bir fare 500 Hz'lik bir fareyle aynı görünebilir, oysa girdi daha erken gelmektedir.",
    },
    {
      question: "Bu test kablosuz farelerde çalışıyor mu?",
      answer:
        "Evet, hatta okumanın en anlamlı olduğu yer kablosuz farelerdir. Hem nominal hızı hem de bu hızın zaman içinde ne kadar kararlı olduğunu gösterir; bir bağlantı sorununun görünür hâle gelmesi böyle olur. Kararlı bir 1000 Hz okuması, bağlantının sağlıklı olduğu anlamına gelir.",
    },
    {
      question: "Faremin polling hızını artırabilir miyim?",
      answer:
        "Bazen. Çoğu oyun faresi, hızı 500, 1000 ya da 8000 Hz olarak ayarlamana izin veren yazılımla gelir ve bazılarında bunun için alt tarafta fiziksel bir düğme bulunur. Test, farenin şu anda hangi hıza ayarlandığını size gösterir.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "keyboard-test"],
};
