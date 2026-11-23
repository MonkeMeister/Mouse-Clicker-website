import type { ToolContent } from "../../types";

export const keyboardTest: ToolContent = {
  slug: "keyboard-test",
  name: "Klavye Testi",
  h1: "Klavye Testi",
  metaTitle: "Online Klavye Testi — Her Tuşu Kontrol Edin ve Hayalet Tuşları Bulun",
  metaDescription:
    "Klavyenizin her tuşunu tarayıcıda test edin. Tepki vermeyen tuşları, takılı kalan tuşları ve rollover hayalet tuşlarını belirler ve bastığınız her şeyin canlı tuş kodunu gösterir. Ücretsiz, kurulum gerektirmez.",
  category: "Klavye Araçları",
  intro: [
    "Klavye testi, yazarken klavyenizi dinler ve tarayıcının aldığı her tuşu, fiziksel tuş koduyla birlikte raporlar. Her tuşu tek tek doğrulamak için ayrı ayrı basın, ardından hızlı tuş basışlarının girdileri düşürmesine yol açan donanım sınırı olan rollover hayalet tuşlarını denetlemek için kombinasyonları basılı tutun.",
    "Yazdığınız hiçbir şey kaydedilmez ya da iletilmez. Tuşlar, sayfa içindeki canlı bir yerleşim haritasıyla eşleştirilir ve ardından atılır.",
  ],
  steps: [
    {
      title: "Tuş paneline tıklayarak odağını verin",
      body: "Panel, tuş olaylarını alabilmek için önce odak almalıdır. Bir kez tıklayın ve yazmaya başlayın. Panel odaktayken tarayıcınız normal yazmayı engellemez, bu yüzden yanlışlıkla bir forma yazmamaya dikkat edin.",
    },
    {
      title: "Tuşları tek tek basın",
      body: "Klavyede alfabetik sırayla değil, fiziksel olarak ilerleyin. Her tuşa basın, panelin aydınlandığını doğrulayın ve sönük kalan tuşları not edin — işte çalışmayan tuş odur.",
    },
    {
      title: "Takılı kalan tuşları denetleyin",
      body: "Bir tuşa basın ve bırakın. Bıraktıktan sonra panel onu hâlâ basılı gösteriyorsa, tuş mekanik olarak takılmıştır ya da klavye bırakma olayını kaydetmiyordur.",
    },
    {
      title: "Rollover'ı kombinasyonlarla test edin",
      body: "Üç ya da dört tuşu aynı anda basılı tutun ve olmaması gereken bir dördüncü tuşun aydınlanmasına bakın. O fazladan tuş bir hayalettir ve klavyenizin kaç eşzamanlı basışı kaldırabildiğini tam olarak söyler.",
    },
  ],
  sections: [
    {
      heading: "Tuş kodları ne anlama gelir ve neden önemlidir",
      paragraphs: [
        "Her tuş olayı iki tanımlayıcı taşır. Tuş değeri, tuşun aktif yerleşime göre ürettiği şeydir; yani Fransızca AZERTY klavyede Q etiketli tuşa basmak a harfi üretir. Kod ise tuşun klavyedeki fiziksel konumudur; yerleşimden bağımsız olarak aynı fiziksel tuş her zaman aynı kodu bildirir.",
        "Test için önemli olan koddur. Yerleşimler arasında değişmeyen bir değerdir; bu yüzden kırık bir tuş her dilde aynı arızayı bildirir ve aracın, gerçekten kullandığınız klavye yerleşiminin doğru bir şemasını çizmesini sağlar.",
        "Tekrar bayrağını da bilmekte fayda var. Bir tuşu basılı tutmak, bir kez keydown ve ardından tekrar olarak işaretlenen bir dizi keydown olayı ve son olarak tek bir keyup üretir. Hiç keyup göndermeyen bir tuş, testin takılı tuş dediği şeydir ve kullandığınız uygulamada bir harfi sürekli tekrarlar.",
      ],
    },
    {
      heading: "Rollover ve hayalet tuşlar, doğru şekilde anlatıldı",
      paragraphs: [
        "Her klavyenin bir donanım matrisi vardır: birbirine kablolanmış satır ve sütunlardan oluşan bir ızgara ve her kesişim noktasında bir anahtar. Bir tuşa bastığınızda bir satırı bir sütuna bağlar. Denetleyici yalnızca bağlı satır ve sütunları algılayabilir ve aynı anda okuyabileceği bağlantı sayısı sınırlıdır.",
        "Doğru bir denetleyiciye sahip tam boy mekanik bir klavye tipik olarak altı ya da daha fazla eşzamanlı tuşu kaldırır, hatta çoğu zaman daha fazlasını. Daha ucuz bir klavye, dizüstü klavyesi ya da membran klavye yalnızca üç tanesini kaldırabilir. Dördüncü bir tuşa bastığınızda denetleyici ikinci, istenmemiş bir satır-sütun çiftini bağlı olarak okur — hiç basmadığınız bir hayalet tuş böylece doğar.",
        "Test bunu doğrudan gösterir: hızlı bir oyun hareketi kombinasyonunda kullanacağınız tuşları basılı tutun ve hangi fazladan tuşun ortaya çıktığını görün. Üç tuşta bir hayalet çıkıyorsa, klavyenizin gerçek rollover sınırı budur ve hiçbir yazılım ayarı bunu yükseltmez.",
      ],
    },
    {
      heading: "Yaygın klavye arızaları ve nedenleri",
      paragraphs: [
        "Tek bir tepki vermeyen tuş neredeyse her zaman arızalanmış bir anahtardır. Tuş anahtarları milyonlarca tetikleme ömrüyle belgelenir ve sık kullanılan bir tuş — çoğu zaman oyun sırasında parmağınızı dinlendirdiğiniz tuş — klavyenin geri kalanından çok daha önce aşınır. Tuş hiçbir olay üretmiyorsa ve bunu yeniden başlatmalardan sonra da tutarlı biçimde yapıyorsa, anahtar arızalanmıştır. Yedek anahtarlar çok ucuzdur ve açma konusunda rahat hissediyorsanız çoğu dizüstü klavyesi servise edilebilir durumdadır.",
        "Tek basış için iki kez ateşleyen tuş, zıplamadır; fare anahtarının sıçramasının klavye karşılığıdır. Aynı aşınma mekanizmasından kaynaklanır ve oyunlarda kazara tekrarlara yol açar.",
        "Basılı kalan ama bırakma olayını gönderen tuş genellikle kirden kaynaklanır: bir kırıntı, bir içecek ya da mekanizma içine sıkışmış toz. Tuşu birkaç kez tekrarlamak ve ardından tuş başlığının altını temizlemek çoğu zaman hiçbir sökme işlemi olmadan onarır.",
        "Aynı anda birçok tuşu, özellikle bir satırın ya da sütunun tamamını etkileyen zıplama, tek tek anahtarlardan çok bir denetleyici ya da yazılım sorununa işaret eder. Bu genellikle bir sürücü güncellemesi, bir sıfırlama ya da tüm klavyenin değiştirilmesi anlamına gelir.",
      ],
    },
    {
      heading: "Donanımı suçlamadan önce kontrol edilecek şeyler",
      paragraphs: [
        "Yapışkan tuşlar ve filtre tuşları, Windows'ta varsayılan olarak etkin olan erişilebilirlik özellikleridir ve Shift tuşuna beş kez basarak yanlışlıkla açılabilirler. Yapışkan tuşlar etkinken, tek tuş basışı tuşu basılı tutmuş gibi davranır ve tuş tekrar ediyormuş gibi görünür. Bunu klavye ayarlarından kapatmak sorunu anında çözer.",
        "macOS'ta yavaş tuşlar ve tuş tekrar ayarları, gecikme uzun ayarlanmışsa tuşların tepkisiz hissetmesine yol açabilir. İkisi de Klavye ayarları altında değiştirilebilir.",
        "Uygulama düzeyinde yeniden eşleme de yaygın bir nedendir. Fare ve klavye yeniden eşleme yardımcı programları, yayın kaplamaları ve bazı erişilebilirlik araçları, tuşları uygulama görmeden önce yakalar. Bir tuş başka her yerde çalışıyor ama yalnızca belirli bir programda başarısız oluyorsa, sorun o programdır.",
      ],
    },
  ],
  faqs: [
    {
      question: "Klavyemdeki her tuşu nasıl test ederim?",
      answer:
        "Tuş paneline tıklayıp odağa sahip olmasını sağlayın, sonra klavyenin üzerinden fiziksel olarak tuşlara basın. Her basış, şemadaki eşleşen tuşu aydınlatır ve tuş kodunu gösterir. Bir tuşu atlama riskiniz azalsın diye alfabetik sırayla değil, yerleşim boyunca ilerleyin.",
    },
    {
      question: "Klavye hayalet tuşları nedir ve nasıl test edilir?",
      answer:
        "Hayalet tuşlar, donanım matrisi bastığınız tüm tuşları aynı anda okuyamadığı için klavyenin basmadığınız bir tuşu bildirmesidir. Test panelinde üç ya da dört tuşu birlikte basılı tutun; aydınlanan her fazladan tuş bir hayalettir.",
    },
    {
      question: "Oyun için iyi bir rollover sayısı kaçtır?",
      answer:
        "Çoğu rekabetçi oyun için altı ya da daha fazla eşzamanlı tuş rahattır ve iyi bir denetleyiciye sahip tam boy mekanik klavyeler bunu çoğu zaman aşar. Üç mutlak sınırdır ve hızlı kombinasyonlarda hayalet tuşlar burada ortaya çıkmaya başlar.",
    },
    {
      question: "Tuşlarımdan biri neden çalışmıyor?",
      answer:
        "Tuş hiçbir olay üretmiyorsa büyük olasılıkla anahtar arızalanmıştır — bireysel anahtarlar aşınır ve sık kullanılanlar önce aşınır. Tuş fiziksel olarak takılı kaldıysa ya da keydown olmadan keyup gönderiyorsa, tuş başlığının altındaki kir genellikle nedenidir.",
    },
    {
      question: "Klavye testi dizüstü bilgisayarlarda çalışıyor mu?",
      answer:
        "Evet, ancak dizüstü klavyelerinin rollover sınırı genellikle masaüstü mekanik klavyelerden daha düşüktür, bu yüzden hayalet tuş gösterme olasılıkları daha yüksektir. Bazı dizüstü tuşları da üretici tarafından çoğaltılmış ya da devre dışı bırakılmıştır; bu, arıza olmadığı hâlde arıza gibi görünebilir.",
    },
    {
      question: "Tuş verilerim herhangi bir yerde saklanıyor mu?",
      answer:
        "Hayır. Tuşlar geldikleri anda sayfadaki yerleşimle eşleştirilir ve hemen atılır. Sayfa yazdığınız şeyi asla sunucuya göndermez ve sekmeyi kapattığınızda hiçbir şey saklanmaz.",
    },
    {
      question: "Tuş kodu ile tuş değeri arasındaki fark nedir?",
      answer:
        "Tuş kodu tuşun fiziksel konumunu belirtir ve yerleşime göre değişmez. Tuş değeri ise tuşun ürettiği karakterdir; AZERTY'de Q etiketli tuş a harfini üretir. Test ikisini de gösterir ve hangi fiziksel tuşa bastığınızı anlamak için kodu kullanır.",
    },
    {
      question: "Tuşları basılı tuttuğumda tekrar ediyorlar. Bu normal mi?",
      answer:
        "Evet, bu normal tuş tekrarıdır ve test bu fazladan olayları yeni basışlar olarak değil, tekrarlar olarak işaretler. Bir tuş bıraktıktan sonra hâlâ tekrarlıyorsa bu takılı bir tuştur ve araştırılmaya değer — genellikle kir ya da arızalanmış bir anahtardır.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "polling-rate-test"],
};
