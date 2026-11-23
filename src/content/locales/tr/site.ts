import type {
  AboutContent,
  BlogContent,
  ContactContent,
  HomeContent,
  PrivacyContent,
  ToolsIndexContent,
} from "../../types";

export const home: HomeContent = {
  metaTitle:
    "MouseLab — Fare, klavye ve işaretçi donanımınız için ücretsiz tarayıcı tabanlı tanılama araçları.",
  metaDescription:
    "Her tuşu, tekerleği, klavye tuşunu ve tıklama hızını doğrudan tarayıcınızda test edin. Ücretsiz, üyelik gerekmez, hiçbir şey indirilmez ve verileriniz cihazınızdan çıkmaz.",
  badge: "Tamamen tarayıcınızda çalışır",
  heroTitleBefore: "Farenizin ve klavyenizin",
  heroTitleHighlight: "gerçekte ne yaptığını",
  heroTitleAfter: "tam olarak öğrenin.",
  heroSubtitle:
    "Bilgisayarınızın gerçekte aldığı olayları okuyan beş ücretsiz tanılama aracı — her tuş, her tekerlek yönü, her klavye tuşu ve işaretçinizin gerçek hızı. İndirme yok, üyelik yok, cihazınızdan hiçbir şey çıkmaz.",
  ctaPrimary: "Farenizi şimdi test edin",
  ctaSecondary: "Tüm araçlara göz atın",
  stats: [
    { term: "Kurulum yok", detail: "Her modern tarayıcıda çalışır" },
    { term: "Takip yok", detail: "Sayaçlar sekmenizde kalır" },
    { term: "Anında", detail: "Bastıkça sonuçlar gelir" },
  ],
  tester: {
    heading: "Fare tuşu testi",
    description:
      "Aşağıdaki panelin içinde farenizin her tuşuna basın ve sayaçların nasıl hareket ettiğini izleyin. Sağ tık yakalanır, böylece açılır menü çıkmaz; kaydedilmeyen her tuş anında ortaya çıkar.",
    linkLabel: "Tam rehber ve SSS →",
  },
  allTools: {
    heading: "Tüm araçlar",
    description:
      "Her biri giriş donanımınızın farklı bir kısmını ölçer ve işiniz bittiğinde sayıların ne anlama geldiğini açıklar.",
    blurbs: {
      "mouse-test":
        "Beş tuşun tamamını, kaydırma tekerleğini ve çift tıklama davranışını kontrol edin, anahtar zıplamasını yakalayın.",
      "scroll-test":
        "Atlanan tırtıkları, ters kaydırmayı ve düzensiz adımları, yanlış tıklamaya yol açmadan fark edin.",
      "keyboard-test":
        "Çalışmayan tuşları, takılı kalan tuşları ve klavyenizin kaç eşzamanlı basışı kaldırabildiğini bulun.",
      "cps-test":
        "Saniyedeki tıklama sayınızı 1 ila 60 saniye boyunca ölçün ve puanınızın ne durumda olduğunu görün.",
      "polling-rate-test":
        "Kare hızı tahminleriyle değil, ham işaretçi olaylarıyla fareninizin gerçek bildirim hızını Hz cinsinden bulun.",
    },
  },
  why: {
    heading: "Neden tarayıcıda test edelim",
    description:
      "Donanım sorunlarının çoğu, hiç gelmeyen ya da iki kez gelen olaylar olarak ortaya çıkar. Tarayıcı tam olarak bu olayları görür; bu yüzden insanların gerçekten karşılaştığı arızaları tespit etmek için alışılmadık derecede uygun bir tanılama yöntemidir.",
    items: [
      {
        title: "Zincirin tamamını test eder",
        body: "Fiziksel bir basış, uygulamanızın görmesinden önce anahtardan, denetleyiciden, sürücüden ve işletim sisteminden geçmek zorundadır. Bu test, zincir nerede kırılırsa orada başarısız olur; bu yüzden başka bir bilgisayarda sorunsuz çalışan farenin sorunun donanımda değil yazılımda olduğunu söyleyebilir.",
      },
      {
        title: "Sizden hiçbir şey istemez",
        body: "Kurulum yok, sürücü yok, hesap yok ve yönetici hakkı yok. Sayfa, kısıtlanmış bir iş bilgisayarında da çalışır; donanım sorunlarının en sık ortaya çıktığı ve bir yardımcı program kuramadığınız yer tam olarak burasıdır.",
      },
      {
        title: "Size yalan söylemez",
        body: "Kesinlikle bastığınız bir tuşun sıfır sayacı bir yorum değildir. Bu, bir olayın yokluğudur ve bir tanılama aracının size verebileceği en faydalı bilgidir.",
      },
    ],
  },
  faq: {
    heading: "Sıkça sorulan sorular",
    items: [
      {
        question: "Bu testler hiçbir şey kurmadan çalışıyor mu?",
        answer:
          "Evet. Buradaki her araç standart tarayıcı olaylarını kullanır — fare, tekerlek, klavye ve işaretçi — bu yüzden zaten baktığınız sayfada çalışırlar. İndirme, tarayıcı eklentisi, hesap veya yapılandırılacak yazılım yok.",
      },
      {
        question: "Verilerimin herhangi biri toplanıyor ya da yükleniyor mu?",
        answer:
          "Hayır. Tıklamalar, tuş basışları ve kaydırma olayları sayfa içinde sayılır ve sekmeyi kapattığınız ya da yeniden yüklediğiniz anda atılır. Sunucuya hiçbir şey iletilmez, hiçbir profil oluşturulmaz ve cihaz bilgisi saklanmaz.",
      },
      {
        question: "Bir tarayıcı testi gerçekte neyi tespit edebilir?",
        answer:
          "Tarayıcının aldığı her şeyi: hangi tuşların kaydedildiğini, tekerleğin iki yönü de bildirip bildirmediğini, bir tıklamanın iki kez gelip gelmediğini, işaretçinizin konumunu bildirme hızını ve klavyenizin tuş bileşimlerinde basışları kaybedip kaybetmediğini. Donanımınızın içini göremez; bu yüzden anahtar gecikmesini ölçemez, sensörün DPI değerini okuyamaz veya bir tekerlek tırtığının fiziksel olarak ne kadar döndüğünü söyleyemez.",
      },
      {
        question:
          "Farem sayfaları atlıyor. Hangi testi önce çalıştırmalıyım?",
        answer:
          "Kaydırma tekerleği testiyle başlayın ve tek yöne yavaşça kaydırın. Kirli veya aşınmış bir kodlayıcı, yavaş hızlarda ters yön değişimleri ve düzensiz adımlar üretir. Tekerlek temiz görünüyor ama sayfalar yine de atlıyorsa, sıradaki adımda fare tuşu testini çalıştırarak bozuk bir anahtarı eleyin ve işletim sisteminizde işaretçi hızlandırmasının açık olup olmadığını kontrol edin.",
      },
      {
        question: "Bu, dokunmatik paneli olan bir dizüstünde de çalışıyor mu?",
        answer:
          "Evet, tek bir koşulla. Dokunmatik panel fiziksel tırtıkları bildirmediği için kaydırma testi tırtık saymak yerine hızını ve tutarlılığını ölçer. Klavye, CPS ve polling hızı testleri dokunmatik panelde de normal şekilde çalışır; ancak fiziksel bir fareyle daha anlamlı bir tıklama hızı puanı elde edersiniz.",
      },
      {
        question: "Gerçekten ücretsiz mi?",
        answer:
          "Evet. Üyelik, kullanım sınırı ya da satın alınacak bir şey yok. Site reklamlarla destekleniyor ve reklamlar aracın altında tutuluyor, böylece buraya gelmek istediğiniz işin önüne geçmiyor.",
      },
    ],
  },
};

export const toolsIndex: ToolsIndexContent = {
  metaTitle: "Tüm araçlar",
  metaDescription:
    "MouseLab'daki tüm ücretsiz tarayıcı tabanlı tanılama araçları: fare tuşları, kaydırma tekerleği, klavye, tıklama hızı ve polling hızı.",
  heading: "Tüm araçlar",
  intro:
    "Bilgisayarınızın aldığı olayları okuyan beş ücretsiz tanılama aracı. Her biri tarayıcıda çalışır, kurulum gerektirmez ve işiniz bittiğinde sayılarının ne anlama geldiğini açıklar.",
  blurbs: {
    "mouse-test":
      "Her tuşa basın ve sayaçları izleyin. Aşınmış bir mikro anahtardan kaynaklanan çalışmayan tuşları, düşen basışları ve çift tıklama zıplamasını yakalar.",
    "scroll-test":
      "Tek yöne sabit hızda kaydırın; test ters olayları, atlanan tırtıkları ve düzensiz adım boyutunu işaretler, ayrıca tırtıklı bir tekerlek mi yoksa dokunmatik panel mi kullandığınızı söyler.",
    "keyboard-test":
      "Her tuşu doğrulayın, takılı kalan tuşları yakalayın ve klavyenizin kaldırabileceği eşzamanlı basış sayısını tam olarak bulmak için rollover testini çalıştırın.",
    "cps-test":
      "Canlı CPS değeri, en iyi puanınız ve saniye bazlı dağılımla birlikte 1 ila 60 saniyelik saniyedeki tıklama sayısı kıyaslaması.",
    "polling-rate-test":
      "Ham, birleştirilmiş işaretçi olaylarını kullanarak fareninizin gerçek bildirim hızını hertz cinsinden ölçer; böylece ekranınızın yenileme hızını değil, cihaz hızını görürsünüz.",
  },
};

export const about: AboutContent = {
  metaTitle: "Hakkımızda",
  metaDescription:
    "MouseLab nasıl çalışıyor, her test neleri neleri tespit edebilir ve verilerinizi nasıl işliyoruz.",
  heading: "{brand} hakkında",
  lead: "Faresi ya da klavyesi takılı çalışıyor sanan ama bunu kanıtlayacak bir yolu olmayan insanlar için tarayıcı tabanlı bir tanılama seti oluşturduk. Her araç, bilgisayarınızın gerçekte ne aldığını raporlar ve her sayfa bu sonuçların sade bir dille ne anlama geldiğini açıklar.",
  sections: [
    {
      heading: "Testler nasıl çalışıyor",
      paragraphs: [
        "Fare tuşuna bastığınızda farenin içindeki anahtar kapanır, cihaz denetleyicisi değişikliği kaydeder, işletim sistemi bunu çevirir ve nihayet tarayıcı bir olay alır. Aynı zincir tekerlek, klavye ve işaretçi sensörü için de işler. Her test bu son olay akışını dinler ve neyin geldiğini raporlar.",
        "Yani bir test, zincir nerede kırılırsa orada başarısız olur. Hiçbir şey bildirmeyen bir tuş, anahtarı, kabloyu, bağlantı noktasını ya da sürücüyü işaret eder. Tek fiziksel basış için iki basış bildiren bir tuş, anahtar temas zıplamasına işaret eder. Ters yönde çalışan bir tekerlek, kodlayıcıyı işaret eder. Ölçüm belirsizliğe yer bırakmaz ve bu da bir fareyi temizlemek mi yoksa değiştirmek mi gerektiğine karar vermeye çalışırken işinize yarar.",
      ],
    },
    {
      heading: "Bu araçların yapamadıkları",
      paragraphs: [
        "Sizi, aracın hiçbir zaman bulmak için tasarlanmadığı bir sorunun peşinde koşturmaktansa sınırlarımızı açıkça söylemeyi tercih ederiz.",
      ],
      bullets: [
        "Anahtar tetikleme gecikmesini ölçemezler. Tarayıcı, metal temasın kapandığı anı değil, çoktan gelmiş bir olayı görür.",
        "Optik sensörün DPI değerini okuyamazlar. Bu, sensöre doğrudan erişim gerektirir ve web platformu bu erişimi bilinçli olarak vermez.",
        "Bir tekerlek tırtığının fiziksel olarak ne kadar döndüğünü söyleyemezler. Tarayıcılar kaydırma farklarını piksel, satır veya sayfa olarak bildirir, milimetre olarak değil.",
        "Tırtıksız bir cihaz olan dokunmatik paneli arızalı diye teşhis edemezler. Kaydırma testi dokunmatik panelleri düz cihaz olarak etiketler, onlara puan vermez.",
        "Donanımın mutlak anlamda sağlıklı olduğunu doğrulayamazlar. Donanımınızın ve bilgisayarınızın birbiriyle anlaştığını doğrularlar; günlük hayatta asıl bozulan şey de budur.",
      ],
    },
    {
      heading: "Verilerinizi nasıl işliyoruz",
      paragraphs: [
        "Sayaçlar, zamanlamalar ve tuş okumaları açık sekmenin belleğinde tutulur ve sekmeyi kapattığınızda veya yeniden yüklediğinizde atılır. Neye tıkladığınızı, ne yazdığınızı ya da cihazınıza bağlı bir tanımlayıcıyı saklamıyoruz; oluşturulacak bir hesap sistemi de yok.",
        "Hangi sayfaların faydalı, hangilerinin işe yaramadığını görebilmek için gizliliğe saygılı standart site analitiği kullanıyoruz. Tüm ayrıntılar {privacyPolicy} içinde.",
      ],
    },
    {
      heading: "Site nasıl finanse ediliyor",
      paragraphs: [
        "Reklamlarla. Her araç ücretsiz ve sınırsız kalıyor; reklamları aracın üstüne değil altına yerleştiriyoruz, böylece buraya kullanmaya geldiğiniz şey reklam için yer açmak uğruna görüş alanından çıkmıyor. Bir aracın bir gün ücretli bir katmana ihtiyaç duyması gerekirse bu, geçmiş kaydetme ya da rapor dışa aktarma gibi gerçekten ek bir özellik için olur; temel ölçüm için değil.",
      ],
    },
  ],
  privacyLinkLabel: "gizlilik politikası",
};

export const contact: ContactContent = {
  metaTitle: "İletişim",
  metaDescription:
    "Araçlardan birindeki bir hata, yeni bir tanılama aracı isteği ya da rehberlerimizdeki bir düzeltme için bize ulaşın.",
  heading: "İletişim",
  lead: "Bir hata mı buldunuz, yanlış bir şey mi fark ettiniz, yoksa henüz geliştirmediğimiz bir tanılama aracı mı istiyorsunuz? Bize kısa bir not gönderin, inceleyelim.",
  cards: [
    {
      title: "Hata bildirme",
      body: "Bize hangi aracı kullandığınızı, ne beklediğinizi ve bunun yerine ne olduğunu anlatın. Bir sayacın beklediğiniz gibi ilerlemediği durumlar bize verebileceğiniz en faydalı ayrıntıdır.",
    },
    {
      title: "Araç talebi",
      body: "Neyi isteyebileceğiniz konusunda bir sınırımız yok. Daha önce kimsenin ölçmediği bir şeyi ölçen bir tanılama aracı tam olarak burada bulunması gereken türden şey.",
    },
    {
      title: "Bir rehberi düzeltme",
      body: "Bu sitedeki her açıklama teknik olarak doğru olsun diye yazıldı. Bir paragraf yanlışsa, anlaşılmazsa ya da birini yanlış parça almaya yönlendirebiliyorsa bunu duymak isteriz.",
    },
  ],
  messageHeading: "Bize mesaj gönderin",
  messageBody:
    "{email} adresine e-posta gönderin. Her şeyi okuyoruz ve mesajların çoğuna birkaç iş günü içinde yanıt veriyoruz.",
  messageNote:
    "Lütfen kişisel bilgilerinizi ya da cihaz yapılandırmanıza dair ayrıntıları göndermeyin. Bir aracı tanıklamak için gönderdiğiniz hiçbir şeye ihtiyaç duymuyoruz ve göndermemenizi tercih ederiz.",
};

export const blog: BlogContent = {
  metaTitle: "Blog",
  metaDescription:
    "Giriş donanımı, tarayıcı olay API'leri ve fare, klavye ile işaretçiler için daha iyi tanılama araçları geliştirmek üzerine pratik notlar.",
  heading: "Blog",
  lead: "Giriş donanımı, onu ortaya çıkaran tarayıcı olay API'leri ve bu sitedeki tanılama araçlarının nasıl kurulduğu üzerine notlar. Donanımınızın ne yaptığını anlamak isteyen, sadece değiştirmek isteyenler için yazıldı.",
  posts: [
    {
      slug: "how-a-browser-sees-your-mouse",
      title: "Bir tarayıcı farenizi gerçekte nasıl görür",
      excerpt:
        "İmleciniz bir nesne değildir; bir konum örneği akışıdır. Bu akışın nereden geldiğini anlamak, hayatınız boyunca peşinde koşacağınız neredeyse her donanım arızasını açıklar.",
      readTime: "8 dk okuma",
      dateLabel: "Henüz yayımlanmadı",
    },
    {
      slug: "double-click-chatter-explained",
      title: "Çift tıklama zıplaması, doğru şekilde anlatıldı",
      excerpt:
        "Aşınmış bir fare anahtarının tek basış için neden iki tıklama gönderdiği, bunun gerçek bir çift tıklama ile nasıl farklılaştığı ve zamanlama imzasının neye benzediği.",
      readTime: "6 dk okuma",
      dateLabel: "Henüz yayımlanmadı",
    },
  ],
  noteBefore:
    "İki yazı üretim aşamasında ve kısa süre içinde burada yayımlanacak. Bu arada",
  noteLinkLabel: "hakkımızda sayfası",
  noteAfter:
    "her ölçümün nasıl çalıştığını anlatıyor ve her araç sayfasına tam bir rehber ile SSS eklenmiş durumda.",
};

export const privacy: PrivacyContent = {
  metaTitle: "Gizlilik politikası",
  metaDescription:
    "MouseLab neyi topluyor, neyi toplamıyor ve oluşturduğunuz ölçüm verilerine ne oluyor.",
  heading: "Gizlilik politikası",
  lastUpdated: "Son güncelleme: 22 Kasım 2026",
  sections: [
    {
      heading: "Ölçüm verileri cihazınızda kalır",
      body: "Bir test çalıştırdığınızda tıklamalar, tuş basışları, kaydırma olayları ve işaretçi örnekleri açık tarayıcı sekmesinin belleğinde sayılır. Hiçbir yere iletilmez. Sekmeyi kapatmak veya yeniden yüklemek onları kalıcı olarak siler. Dün aldığınız bir ölçümü kurtaramayız, çünkü hiç saklanmadı.",
    },
    {
      heading: "Hesap yok, tanımlayıcı yok",
      body: "Kayıt olma, giriş yapma ve kullanıcı profili yok. Bir aracı kullanmak için e-posta adresi istemiyoruz ve ölçüm amacıyla cihazınıza veya tarayıcınıza bağlı kalıcı bir tanımlayıcı oluşturmuyoruz.",
    },
    {
      heading: "Site analitiği",
      body: "Hangi sayfaların ve araçların faydalı, hangilerinin üzerinde çalışılması gerektiğini anlamak için gizliliğe saygılı analitik kullanıyoruz. Bunlar toplu sayfa görüntülemelerini, yönlendiren site bilgisini ve kaba cihaz ve ülke bilgisini kaydeder. Test oturumlarınızın içeriğini kaydetmez ve sizin için bir reklam profili oluşturmak için kullanılmaz.",
    },
    {
      heading: "Reklamlar",
      body: "Bu site reklamlarla finanse edilir. Reklam ortakları, reklamları sunmak ve ölçmek için çerez veya benzeri teknolojiler kullanabilir. Kişiselleştirilmiş reklamların nasıl kullanıldığını tarayıcı ayarlarınızdan ve Google'ın Google Advertising, Google'ın Gizlilik ve Şartlar sayfası ile katılımcı üçüncü taraf satıcılar için aboutads.info sayfalarından sunulan seçeneklerle kontrol edebilirsiniz.",
    },
    {
      heading: "Üçüncü taraf içerik",
      body: "Reklam betikleri yalnızca sayfayla etkileşime girdiğinizde yüklenir; böylece herhangi bir ilgi belirtisinden önce çalışmazlar. Yazı tipleri kendi alan adımızdan sunulur, dolayısıyla bir sayfayı açtığınızda yazı tipi sağlayıcısına hiçbir istek gönderilmez.",
    },
    {
      heading: "İletişim",
      body: "Bu politika hakkında bir sorunuz varsa ya da bir şeyin kaldırılmasını istiyorsanız, hello@mouselab.io adresine e-posta gönderin, hemen ilgileniriz.",
    },
  ],
  copyright: "© {year} {brand}",
};
