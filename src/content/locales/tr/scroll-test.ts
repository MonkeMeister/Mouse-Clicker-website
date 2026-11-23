import type { ToolContent } from "../../types";

export const scrollTest: ToolContent = {
  slug: "scroll-test",
  name: "Kaydırma Tekerleği Testi",
  h1: "Kaydırma Tekerleği Testi",
  metaTitle: "Kaydırma Tekerleği Testi — Atlamayı, Ters Kaydırmayı ve Titremeyi Kontrol Edin",
  metaDescription:
    "Fare tekerleğinizi online olarak test edin. Ters kaydırmayı, atlanan tırtıkları ve tutarsız adım boyutunu yakalar; sorunun tekerlekte mi, tarayıcıda mı yoksa işletim sisteminde mi olduğunu gösterir. Ücretsiz ve anında.",
  category: "Fare Araçları",
  intro: [
    "Aşınmış bir kaydırma tekerleği nadiren tamamen çalışmaz olur. Zaman zaman bir tırtağı atlar, bir yönde bir tık fazla kayar ya da uzun bir sayfanın ortasında geriye zıplar. Kaydırma tekerleği testi, tarayıcınızın aldığı her tekerlek olayını yakalar; böylece olayları tek tek inceleyerek tam olarak ne olduğunu görebilirsiniz.",
    "Testi önce yavaş, sonra hızlı çalıştırın; çünkü bu iki hız tamamen farklı arızaları ortaya çıkarır. Kirli bir kodlayıcı yavaş hızlarda ortaya çıkar. Arızalanmış bir kodlayıcı ya da pili zayıf bir kablosuz bağlantı ise tekerleği çevirdiğinizde belirir.",
  ],
  steps: [
    {
      title: "Bir test süresi seçin",
      body: "On beş saniye iyi bir varsayılandır. Daha güvenilir bir ortalama için daha uzun bir pencere kullanın ya da grafiği çalışır durumda tutmak istiyorsanız süresiz moda geçin.",
    },
    {
      title: "Tek yöne sabit hızda kaydırın",
      body: "İmlecinizi test panelinin üzerine getirin ve yalnızca aşağı kaydırın. Panel tekerleği yakalar, böylece sayfa kendisi hareket etmez. Tek seferde tek yönde kalmak önemlidir; çünkü koşu ortasında yön değiştirmek, yön analizini anlamsız kılar.",
    },
    {
      title: "Yönü değiştirip yukarı kaydırın",
      body: "Koşu bittiğinde yeni bir tane başlatın ve yalnızca yukarı kaydırın. Yukarı ve aşağı toplamları ayrı tutulur; böylece yalnızca tek yönde iletim yapan bir tekerlek apaçık ortaya çıkar.",
    },
    {
      title: "Sonucu okuyun",
      body: "Rapor ters sıçramaları, düzensiz adım boyutunu ve titremeyi denetler. Tekerlek size iyi geliyor ama sayfa yine de zıplıyorsa, fare tuşu testiyle birlikte değerlendirin.",
    },
  ],
  sections: [
    {
      heading: "Tarayıcı gerçekte ne alıyor",
      paragraphs: [
        "Kaydırmak tek bir olay değildir. Tekerleği her çevirdiğinizde işletim sistemi tarayıcıya, her biri dikey fark, yatay fark ve bir birim bayrağı taşıyan ayrı güncellemelerden oluşan bir akış gönderir. Test bu akışı olduğu gibi kaydeder.",
        "Birim bayrağı çoğu insanın beklediğinden daha önemlidir. Piksel modu modern varsayılandır ve çoğu modern tekerlekten, hatta her dokunmatik panelden bu şekilde gelir. Satır modu ve sayfa modu eski davranışlardır; bazı eski sürücüler ve uzak masaüstü yazılımları hâlâ bunları üretir. Satır modunda bildirim yapan bir tekerlek bozuk olmak zorunda değildir, ama kullanımı farklı gelir ve piksel farkı varsayan bazı web uygulamalarında kaydırmayı bozabilir.",
        "Yön, işaret olarak kodlanır. Pozitif dikey fark, içeriğin yukarı hareket etmesi demektir; aşağı kaydırmanın yaptığı da budur. Negatif fark ise yukarı kaydırma anlamına gelir. Test ters sıçramaları ararken tam olarak bu işarete bakar.",
      ],
    },
    {
      heading: "Ters kaydırma ve gerçekte nedeni ne",
      paragraphs: [
        "Ters sıçrama, işareti kaydırmaya devam ettiğiniz yönün tersini bildiren bir tekerlek olayıdır. Hızlı bir çeviri sırasında birkaç tane görülmesi normaldir — işletim sistemi, hareketin son olayını hafifçe itebilen küçük bir eylemsizlik yumuşatma uygular. Yavaş ve bilinçli kaydırma sırasında sürekli akan bir ters sıçrama akışı ise gerçek bir arızadır.",
        "Genel neden, kirli ya da aşınmış bir kodlayıcıdır. Kodlayıcı, tekerlek döndükçe birbirinin üzerinden geçen iki temas yüzeyi olan küçük dişli bir tekerlektir. Toz, kurumuş yağ veya eğilmiş bir diş temasta kısa bir kopuş yaratır ve cihaz kısa süreliğine ters yönü bildirir. Kodlayıcıyı temizlemek, vakaların büyük çoğunluğunda arızayı giderir.",
        "macOS'ta doğal kaydırmanın sadece açık olmadığını kontrol edin. Doğal kaydırmada aşağı kaydırmak içeriği aşağı taşır ve her olayın işareti testin beklediği yönün tersine döner. Bu özellik açıksa testte yönü ters çevirin; çünkü tekerlek kusursuz çalışıyor.",
        "Tarayıcıda koşunun tamamı boyunca tek ve tutarlı bir yön kullanın. Koşu ortasında yön değiştirmek işaretlenir, çünkü bu tam olarak kodlayıcı zıplamasıyla aynı imzayı üretir ve aksi hâlde var olmayan bir arıza olarak raporlanırdı.",
      ],
    },
    {
      heading: "Atlanan tırtıklar ve düzensiz adımlar",
      paragraphs: [
        "Tırtıklı tekerlekler her tutamak için ayrık bir sıçrama bildirir. Tipik bir Windows faresinde bu, platformun piksel satır varsayımına bağlı olarak tırtık başına 100 ya da 120 dikey fark birimidir. Aşağıda on tırtağı yavaşça kaydırıp yalnızca sekiz artış geldiyse, kodlayıcı temasları düşürüyor demektir.",
        "Serbest dönen tekerlekler ve dokunmatik paneller farklı davranır ve bozuk değildir. Bunlar ayrık adımlar yerine çok sayıda küçük farktan oluşan düzgün bir akış üretir; dolayısıyla onlarda tırtık saymak anlamsızdır. Test hangisiyle uğraştığınızı algılar ve okumayı buna göre etiketler; sağlıklı bir dokunmatik paneli arıza olarak puanlamaz.",
        "Titreme, bir koşu içinde adım boyutundaki değişimdir. İyi bir tekerlekte bile küçük bir miktar beklenir, çünkü optik kodlayıcının çözünürlüğü sınırlıdır ve tutamak geometrisi kusursuz düzgün değildir. Düzenli olarak tekrarlanan büyük değişim, eğilmiş ya da fiziksel olarak hasar görmüş bir kodlayıcıya işaret eder.",
      ],
    },
    {
      heading: "Atlayan ya da ters kaydıran tekerleği temizlemek",
      paragraphs: [
        "Önce fareyi tamamen kapatın. Kablosuz bir farede yalnızca kapatmak yerine pilleri çıkarın; böylece kodlayıcı artık kalan güç altında yüklenmez.",
        "Fare tekerleğini çıkarın ve %90 izopropil alkolü tüysüz bir bez üzerine uygulayın. Alkolün kodlayıcı tekerleğine ve kodlayıcının devre kartına değdiği aralığa sızmasını bekleyin. Tekerleği yaklaşık on iki kez tam hareket aralığında yavaşça çevirin ki alkol temas yüzeylerine ulaşsın, sonra yeniden monte etmeden önce tamamen kurumasını sağlayın. Sadece basınçlı hava genellikle kalıntıları muhafazaya daha da içeri iter.",
        "Tekerlek düzgün bir temizlikten sonra hâlâ atlıyorsa, kodlayıcının kendisi aşınmış demektir. Yedek parçası değiştirilebilen bir farede yeni bir kodlayıcı ucuzdur ve tekerleği tam olarak eski haline getirir. Kapalı bir farede ise değiştirme artık gerçekçi seçenektir.",
        "Bu arada kablosuz farenin pilini de kontrol edin. Düşük pil voltajı, pil değiştirilince kendiliğinden ortadan kalkan düzensiz tekerlek olaylarının yaygın bir nedenidir — bir şeyi açmadan önce bunu eleyebilmek gerekir.",
      ],
    },
  ],
  faqs: [
    {
      question: "Kaydırma tekerleğimi nasıl test ederim?",
      answer:
        "İmlecinizi test panelinin üzerine getirin ve tek yöne sabit hızda kaydırın, sonra diğer yöne tekrarlayın. Panel tekerleği yakalar; böylece olaylar kaydedilirken sayfa yerinde durur. Kirli bir kodlayıcıyı ortaya çıkarmak için yavaş, arızalanmış bir kodlayıcıyı ortaya çıkarmak için hızlı kaydırın.",
    },
    {
      question: "Ters sıçrama ne anlama gelir?",
      answer:
        "Kaydırdığınız yönün tersini bildiren bir tekerlek olayıdır. Hızlı bir çeviri sırasında görülen birkaç tane normal yumuşatma artefaktıdır. Yavaş kaydırma sırasında sürekli akan bir akış ise kodlayıcı temasının kopup yeniden kurulduğu anlamına gelir; bu genellikle toz ya da aşınmış kodlayıcıdır ve temizlikle çözülebilir.",
    },
    {
      question: "Bu araçla dokunmatik paneli ya da Magic Mouse'u test edebilir miyim?",
      answer:
        "Evet, araç bunun tırtıklı bir tekerlek yerine düz bir cihazı işlediğini size söyler. Dokunmatik paneller ve serbest dönen tekerlekler fiziksel tutamak bildirmediği için onlarda tırtık saymak anlamsız olurdu. Test onları arızalı saymak yerine hızlarını ve tutarlılıklarını ölçer.",
    },
    {
      question: "Kaydırma tekerleğim yalnızca Mac'te geriye zıplıyor. Bozuk mu?",
      answer:
        "Büyük olasılıkla değil. macOS doğal kaydırmayı varsayılan olarak açar ve bu, her tekerlek olayının yönünü testin beklediğinin tersine döndürür. Sistem Ayarları'ndan doğal kaydırmayı kapatın ya da testin içinden yönü ters çevirin; okumalar normale döner.",
    },
    {
      question: "Tekerleğim neden sadece hızlı kaydırınca atlıyor?",
      answer:
        "Hızlı kaydırma, uzun ve hızlı olay patlamaları üretir ve kodlayıcıya tırtıklar arasında yerleşmek için daha az zaman verir. Zaten sınırda olan bir tekerlek — hafif kirli ya da zayıf pille çalışan — bu yük altında başarısız olma eğilimindedir. Yavaş da test edin: yavaş koşu temiz, hızlı koşu atlamalıysa sorun kodlayıcının aşınmış olmasıdır, bildirimin tutarsızlığı değil.",
    },
    {
      question: "Kaydırma testi bir fare hakkında karar vermek için yeterince güvenilir mi?",
      answer:
        "Tarayıcının gözlemleyebileceği konular için güvenilirdir: yön, birim modu, adım boyutu, olay hızı ve tutarlılık. Bir tekerleğin fiziksel olarak ne kadar döneceğini ölçemez; dolayısıyla tırtık başına milimetre hareket vermez ya da mekanik tutamağın ne kadar aşınmış olduğunu söylemez.",
    },
    {
      question: "Test dokunmatik ekranda çalışıyor mu?",
      answer:
        "Dokunmatik kaydırma tekerlek olayları değil, dokunma olayları üretir; bu yüzden dokunmatik ekranlı bir cihazda tekerlek paneli boş kalır. Telefon girdisi için araçlar fare, klavye ve diğer işaretçi cihazlarını hedefler.",
    },
    {
      question: "Tekerleğim oyunlarda atlıyor ama normal kullanımda atmıyor. Neden?",
      answer:
        "Oyunlar sıklıkla kendi kaydırma işlemlerini, yumuşatma ve hızlandırma dahil, uygular ve çoğu zaman tarayıcı düzeyindeki işlemenin bir kısmını atlayan ham girdi kullanır. Yalnızca hafif aşınmış bir tekerlek normal okuma hızlarında sorunsuzken, bir oyunun ürettiği hızlı ve tekrarlı girdilerde başarısız olabilir. Tek bir yavaş kaydırma yerine hızlı, tekrarlı çevirmelerle test edin.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "cps-test", "keyboard-test"],
};
