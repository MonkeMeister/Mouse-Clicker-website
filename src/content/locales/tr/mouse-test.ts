import type { ToolContent } from "../../types";

export const mouseTest: ToolContent = {
  slug: "mouse-test",
  name: "Fare Tuşu Testi",
  h1: "Fare Tuşu Testi",
  metaTitle: "Fare Tuşu Testi — Faresindeki Tüm Tuşları Online Olarak Test Edin",
  metaDescription:
    "Fareniz kendiliğinden çift tıklıyor mu? Beş fare tuşunu, kaydırma tekerleğini ve çift tıklama davranışını tarayıcınızda test edin. Çalışmayan tuşları, çift tıklama zıplamasını ve düşen tıklamaları tespit eder. Ücretsiz ve anında.",
  category: "Fare Araçları",
  intro: [
    "Bu fare tuşu testi, tarayıcınızın gerçekte aldığı her tıklamayı, tekerlek olayını ve tuş basışını kaydeder, sonra size sayıların tutarlı olup olmadığını gösterir. Fareniz kendiliğinden çift tıklıyor mu? Bu test bunu yaklaşık on saniyede yanıtlar — bir tuşa bir kez basın; tek bir basış iki tıklama ekliyorsa anahtar zıplıyor demektir ve panel arızanın adını tam zamanlamasıyla birlikte gösterir. Gerçek farenizin her tuşunu test alanının içinde basın ve sayaçların gerçek zamanlı olarak hareket ettiğini izleyin. Bir tuş hiç kaydedilmiyorsa, tek bir tıklama iki olarak geliyorsa ya da hızlı tıklarken basışlar düşüyorsa, sayaçlar size bunu anlatır.",
    "Her şey standart fare olayları kullanılarak tarayıcınızda yerel olarak çalışır. İndirme yok, eklenti yok, hesap yok ve tıklamalarınız ya da donanımınızla ilgili hiçbir bilgi hiçbir yere yüklenmez.",
  ],
  steps: [
    {
      title: "Test alanını açın ve imlecinizi içine taşıyın",
      body: "Gri panelin içinde herhangi bir yere tıklayın. Panel fareyi yakalar; böylece sağ tık açılır menü açmaz ve sayfanın başka yerlerindeki bağlantılar yanlışlıkla tetiklenmez.",
    },
    {
      title: "Her tuşu teker teker birer kez basın",
      body: "Sol, sağ, orta ve farenizde varsa iki başparmak tuşu. Sayaçların temiz ayrıldığını görebilmeniz için her birini birkaç kez basın. Soldaki şemada ilgili bölgenin aydınlandığını izleyin.",
    },
    {
      title: "Tekerleği yukarı, sonra aşağı kaydırın",
      body: "Tekerleği yavaşça bir yöne, sonra diğer yöne kaydırın. Yukarı ve aşağı sayaçları her yönü ayrı ayrı izler; tekerleğin yalnızca tek yönü kaydettiği böylece hemen anlaşılır.",
    },
    {
      title: "Zıplama olup olmadığını görmek için hızlı çift tıklama yapın",
      body: "Aynı tuşa hızlıca on ile yirmi kez çift tıklayın. Aşınmış bir mikro anahtar, tek bir fiziksel tıklama için iki ayrı basış gönderir ve test bunu tam zamanlamasıyla birlikte çift tıklama arızası olarak işaretler.",
    },
  ],
  sections: [
    {
      heading: "Farenizin çift tıklayıp çift tıklamadığını nasıl anlarsınız",
      paragraphs: [
        "Fare, tek bir fiziksel basış iki ayrı tıklama olayı ürettiğinde çift tıklıyor demektir. Bunu en hızlı öğrenme yolu bir tuşa bir kez basıp iki sayıyı izlemektir. Toplam sayacı tam olarak bir artmalıdır. İki artıyorsa tuş, hiç yapmadığınız bir basış gönderiyor demektir ve panel, iki basış arasındaki farkı milisaniye cinsinden de göstererek \"Çift tıklama zıplaması tespit edildi\" uyarısı verir. İşte bu fark, donanım arızasını normal davranıştan ayıran şeydir: anahtar zıplaması 40 milisaniyenin altında kalır, sizin bilinçli yaptığınız çift tıklama ise 200 milisaniye ya da daha uzun olur.",
        "Çift sayaç da artabilir; çünkü işletim sistemi iki gerçek tuş basışı olayı görür ve bunları çift tıklama olarak sayar. Zıplayan bir farenin neden tek bir dosyayı seçip hemen yeniden adlandırmaya başladığı da tam olarak bu yüzdendir: siz iki kez bile basmamışsınız.",
        "Emin olmak için testi dört tur halinde yapın. Bir kez tıklayıp durun. Normal biçimde çift tıklayın ve Çift sayacının tam olarak bir arttığını doğrulayın. Sonra anahtarı zorlamak için aynı tuşa olabildiğince hızlı, on beş ile yirmi kez çift tıklayın — aşınmış bir anahtar saniyeler içinde zıplama algılayıcısını tetikler. Son olarak testi ikinci bir fareyle ya da ikinci bir bilgisayarda tekrarlayın: arıza fareyi izliyorsa donanımdadır, bilgisayarı izliyorsa sürücü ya da ayar sorunudur.",
        "İki basış arasındaki fark, işletim sisteminizin çift tıklama saydığı kadar uzunsa farenin suçlu değildir; çözüm onarım değil, ayar değişikliğidir. Windows: Fare Özellikleri'ni açıp çift tıklama hızı kaydırıcısını hızlı uca doğru kaydırın. macOS: Fare ayarlarındaki \"Çift tıklama hızı\" değerini değiştirin. Linux: masaüstü ayarlarınızdaki çift tıklama aralığını değiştirin. Yalnızca 40 milisaniyelik süre içinde gelen basışlar gerçek donanım zıplamasıdır ve bunlar temizlik ya da anahtar değişimi gerektirir.",
      ],
      bullets: [
        "Tek tıklama turu — bir kez basın, bir saniye bekleyin ve yeniden basın. Tek bir fiziksel basış Toplam sayacına tam olarak bir eklemeli",
        "Çift tıklama turu — normal biçimde çift tıklayın. Çift sayacı bir, Toplam sayacı iki artmalı",
        "Zorlama turu — aynı tuşa olabildiğince hızlı 15 ila 20 kez çift tıklayın. Aşınmış bir anahtardaki zıplama, milisaniye farkıyla birlikte anında ortaya çıkar",
        "Çapraz kontrol turu — ikinci bir fareyle ya da ikinci bir bilgisayarda tekrarlayarak donanım arızasını yazılım arızasından ayırın",
      ],
    },
    {
      heading: "Her sayacın ne anlama geldiği",
      paragraphs: [
        "Fare, tuş durumunu küçük bir numaralanmış tuş kümesiyle bildirir. Tarayıcınız sol tuş için 0, orta tuş için 1, sağ tuş için 2 ve çoğu oyun ve ergonomik farede bulunan iki başparmak tuşu için 3 ve 4 değerini bildirir. Test bunların her birini kendi sayacına ayırır; böylece kırık bir yan tuşu olan fare toplamın içinde saklanmak yerine açıkça ortaya çıkar.",
        "Toplam tıklama sayısı, bütün tuş basışlarının toplamıdır. Toplam ile bireysel sayaçlar, hatırladığınız basış sayısından daha fazla bir fark gösteriyorsa, bir yerde basışlar düşüyor ya da çoğalıyor demektir.",
        "Çift tıklama sayısı, tarayıcının kendi çift tıklama tanımasından hesaplanır ve işletim sisteminin zamanlama eşiğini kullanır — genellikle 400 ile 500 milisaniye arasında bir yerde. Çift tıklama sayınız, yaptığınız çift tıklamalardan daha azsa, sorun büyük olasılıkla farenizde değil, işletim sisteminizin çift tıklama hızı ayarının çok yavaş olmasındadır. Zıplayan bir anahtar da bu sayacı yukarı çıkarabilir; çünkü siz yalnızca bir kez bassanız da işletim sistemi iki gerçek tuş basışı olayını çift tıklama sayar.",
      ],
      bullets: [
        "Sol Tıklama — birincil tuş, nişan aldığınız tuş",
        "Sağ Tıklama — bağlamsal tuş; bu sıfırda kalıyorsa işletim sistemi tuşu yeniden eşlemiş olabilir",
        "Orta Tıklama — tekerleğe basma, bağlantıyı yeni sekmede açmak için de kullanılır",
        "Yan Tuş (İleri) ve Yan Tuş (Geri) — başparmak tuşları",
        "Yukarı Kaydırma / Aşağı Kaydırma — tekerlek olayları, yön başına ayrı izlenir",
      ],
    },
    {
      heading: "Bu testin gerçekten yakaladığı üç arıza",
      paragraphs: [
        "Çalışmayan tuş. En basit arıza ve fark edilmesi en zor olanı, çünkü insanlar farkında olmadan ona uyum sağlar. Sağ tuşa on kez basıyorsanız sayaç sıfırda kalıyor ve sol tuş anında tepki veriyorsa, alttaki anahtar ölmüş demektir. Kablo ve USB bağlantı noktası sağlamdır, çünkü aynı kablo diğer bütün sinyalleri de taşıyor.",
        "Çift tıklama zıplaması. Rekabetçi oyunlarda hızlı tıklamayı bozan arıza budur. Mikro anahtar, yaylı küçük bir metal temas düzeneğidir. Aşındıkça temas yüzeyinde pürüzlü bir nokta oluşur ve anlık olarak seker — birkaç milisaniye içinde kapanır, açılır ve yeniden kapanır. Fare bunun sonucunda tek bir fiziksel basış için iki tıklama bildirir. İşletim sistemi bunu kazara gerçekleşen bir çift tıklama sayar ve sizin istemediğiniz bir eylemi tetikler: tek bir dosyayı seçmek ya da tek atış istediğinizde iki atış yapmak gibi.",
        "Aralıklı arıza. Daha seyrek görülür ama birlikte yaşaması daha zordur, çünkü tuş çoğu zaman çalışır. Hızlı tıklarken temas ara sıra düzgün kapanmayı başaramıyor ve basış tamamen düşüyor. Oyun içinde bu his, farenin rastgele kaydedememesi gibi oluyor. Test, kaydettiği basış sayısını yaptığınız tıklama sayısıyla karşılaştırarak bunu ortaya çıkarır.",
      ],
    },
    {
      heading: "Anahtar zıplaması mı, sadece hızlı çift tıklama mı?",
      paragraphs: [
        "Her çift tıklama arızası farenin sucu değildir. Test iki basış arasında 40 milisaniyeden az bir fark gösteriyorsa bu anahtar zıplamasıdır — iki basış arasında sinyal hiç bırakılmış duruma gelmemiştir, yani bunları donanım üretmiştir. İki basış arasındaki fark 200 milisaniye ya da daha uzunsa ve işletim sistemi bunları çift tıklama olarak kaydettiyse, bu yalnızca hızlı bir çift tıklama demektir ve tamamen normaldir.",
        "Bu ayrım önemlidir, çünkü çözümleri farklıdır. Zıplama, temizlik ya da anahtar değişimiyle çözülen bir donanım sorunudur. Yavaş bir çift tıklama eşiği ise işletim sisteminizin fare kontrol panelinde çözeceğiniz bir ayar sorunudur. Panel de aynı 40 milisaniyelik eşiği kullanır; dolayısıyla zıplama olarak işaretlediği her şey donanımın suçudur ve başka bir şey değil.",
      ],
    },
    {
      heading: "Bu testin bulduğu sorunlar nasıl çözülür",
      paragraphs: [
        "Çalışmayan tuşta en basit nedenden başlayın: kötü oturmuş ya da eğilmiş bir konnektör. USB fişini çıkarıp yeniden takın, çoklu bağlantı noktası yerine doğrudan bilgisayardaki başka bir bağlantı noktasını deneyin ve fareyi başka bir makinede test edin. Tuş ikinci bir bilgisayarda da ölüyse anahtar arızalanmıştır ve fare onarım ya da değiştirme gerektirir.",
        "Çift tıklama zıplamasında anahtar çoğu zaman kurtarılabilir. Farenin içini açıp ilgili anahtarın üzerine doğrudan az miktarda kontak temizleyici ya da anahtar yağlayıcı uygulayın, sonra tuşu tekrar tekrar çalıştırarak yağın yayılmasını sağlayın. Bu, anahtarın ömrünü uzatır ama aşınmayı geri almaz. Günlük olarak kullandığınız bir farede, temizlemekten daha güvenilir bir çözüm anahtarı yedek parçayla değiştirmektir.",
        "Yalnızca tek yönü kaydeden ya da tırtıkları atlayan bir kaydırma tekerleğinde sorun genellikle anahtar değil, kodlayıcı tekerleğidir. Fareyi kapatın, pilleri çıkarın ve kodlayıcıyı %90 izopropil alkolü bez üzerine uygulayarak temizleyin, sonra tekerleği on ya da daha fazla kez tam hareket aralığında çevirerek alkolün temas noktasına ulaşmasını sağlayın. Sadece basınçlı hava genellikle tozu daha da deriye itmekten başka işe yaramaz.",
        "Hızlı girdi sırasında ara sıra düşen tıklamalarda işletim sisteminin işaretçi hızlandırması uyguluyor olup olmadığını kontrol edin. Windows'ta Fare Özellikleri'ndeki \"İşaretçi hassasiyetini artır\" seçeneğini kapatın. macOS'ta Erişilebilirlik ayarlarındaki işaretçi hızlandırmasını kapatın. Linux'ta libinput hızlandırma profilini kontrol edin. Hızlandırmasız, ham girdi, donanım arızasıyla karıştırılması kolay düzensiz zamanlamanın bir kaynağını ortadan kaldırır.",
      ],
    },
    {
      heading: "Bu test size ne söyleyemez",
      paragraphs: [
        "Bu bir tarayıcı testidir; bu yüzden anahtarın elektriksel durumunu değil, tarayıcının aldığı olayları gözlemler. Anahtar tetikleme gecikmesini ölçemez, sensörün ham DPI değerini okuyamaz ya da polling hızının gerçekten 1000 Hz olup olmadığını söyleyemez. Aynı belirtiyi üreten aşınmış bir sensörle aşınmış bir anahtarı da birbirinden ayırt edemez.",
        "Ancak pratikte en çok önemli olan şeyi size söyleyebilir: fare ile bilgisayar birbiriyle anlaşıyor mu. Fiziksel bir basış her seferinde tam olarak tek bir olay ürettiğinde, kullandığınız diğer yazılımların dayandığı sözleşme yerindedir.",
      ],
    },
  ],
  faqs: [
    {
      question: "Fare tuşlarımı nasıl online test ederim?",
      answer:
        "İmlecinizi test alanının içine taşıyın ve her tuşu sırayla basın — sol, sağ, orta ve varsa iki başparmak tuşu. Her basış kendi sayacını artırır ve fare şemasındaki eşleşen bölgeyi aydınlatır. Ardından iki kaydırma yönünü ayrı ayrı denetlemek için tekerleği yukarı ve aşağı kaydırın.",
    },
    {
      question: "Bu test aracı hangi fare tuşlarını kontrol edebilir?",
      answer:
        "Beş standart tuşun tamamı: sol, sağ, orta ve çoğu oyun ile ergonomik farede bulunan ileri ve geri başparmak tuşları. Bu beşin ötesindeki tuşlar tarayıcı tarafından tanımlanamayan basışlar olarak bildirilir; bu yüzden belirli bir bölgeye atfedilemeseler de toplamda yine sayılırlar.",
    },
    {
      question: "Fare tuşu testi çalıştırmak için bir şey kurmam gerekiyor mu?",
      answer:
        "Hayır. Test standart tarayıcı fare olaylarını kullanır ve tamamen baktığınız sayfada çalışır. İndirme, eklenti, tarayıcı uzantısı ya da oluşturulacak hesap yoktur.",
    },
    {
      question: "Farem çift tıklıyor mu nasıl test ederim?",
      answer:
        "Test alanının içinde bir kez tıklayın ve Toplam sayacını izleyin. Tek bir fiziksel basış iki tıklama ekliyorsa anahtar zıplıyor demektir ve panel, iki basış arasındaki tam farkla birlikte \"Çift tıklama zıplaması tespit edildi\" bildirimini gösterir. Aşınmış bir anahtarın kendini göstermesi için aynı tuşa arka arkaya on ile yirmi kez basın — sağlıklı bir anahtar 40 milisaniyenin içinde asla iki basış üretmez.",
    },
    {
      question: "Farem kendiliğinden çift tıklıyor mu? Bunun sebebi ne?",
      answer:
        "Bu, tuşun altındaki anahtarın sektiği anlamına gelir: metal temas birkaç milisaniye içinde kapanır, açılır ve yeniden kapanır, böylece fare tek bir fiziksel tıklama için iki basış bildirir. Genel nedenler aşınmış mikro anahtarlar, farenin içindeki toz ve kir ve tekrar tekrar sert tıklama kaynaklı hasardır. İki basış arasında 200 milisaniyeden fazla zaman varsa bu zıplama değildir; işletim sisteminizin çift tıklama hızı ayarıdır ve Fare Özellikleri'nden yükseltebilirsiniz.",
    },
    {
      question: "Çift tıklama arızası ne anlama gelir?",
      answer:
        "Farenin tek bir fiziksel tıklama için iki ayrı basış bildirdiği anlamına gelir. Genellikle bu, metal temas birkaç milisaniye boyunca sektikten sonra yerine oturan aşınmış mikro anahtar temas zıplamasıdır. İşletim sistemi bunu kazara gerçekleşen bir çift tıklama sayar; bu yüzden arıza hızlı tempolu oyunlarda en çok sinir bozucudur.",
    },
    {
      question: "Sağ tıklama sayacım sıfırda kalıyor. Farem bozuk mu?",
      answer:
        "Mutlaka değil. Bazı işletim sistemleri ve uygulamalar sağ tuşu yeniden eşler; ayrıca bir orta tıklamanın bağlantıyı yeni sekmede açması, tarayıcının test alanı içinde bağlamsal menüyü bastırmasına yol açabilir. Donanımın arızalandığını varsaymadan önce fareyi ikinci bir bilgisayarda deneyin ve işletim sisteminizdeki fare tuşu yapılandırmasını kontrol edin.",
    },
    {
      question: "Test kişisel bilgilerimle ilgili bir şey kaydedecek mi?",
      answer:
        "Hayır. Tıklamalar sekme açıkken sayfanın kendi belleğinde sayılır ve sekmeyi kapattığınız ya da yeniden yüklediğiniz anda atılır. Sunucuya hiçbir şey iletilmez ve hiçbir profil oluşturulmaz.",
    },
    {
      question: "Test kablolu ve kablosuz farelerde çalışıyor mu?",
      answer:
        "Evet. Tarayıcı her iki durumda da aynı olayları aldığı için test kablolu, Bluetooth ve 2.4 GHz kablosuz alıcılarda aynı biçimde davranır. Yine de kablosuz fareleri daha sık test etmekte fayda var; çünkü biten pil, donanım arızalarıyla aynı görünen düşen ve geciken olaylar üretebilir.",
    },
    {
      question: "Bu test fare DPI'sini ya da gecikmesini ölçebilir mi?",
      answer:
        "Hayır. DPI optik sensörden, gecikme ise anahtardan ve polling döngüsünden gelir; ikisi de tarayıcıya açık değildir. Polling hızı testi ise tarayıcının işaretçi güncellemelerini ne sıklıkla aldığını ölçer; bu ilişkili ama farklı bir sayıdır.",
    },
    {
      question: "Farem sorunsuz tıklıyor ama test düşen tıklamalar gösteriyor. Neyi kontrol etmeliyim?",
      answer:
        "Sırayla üç şeyi kontrol edin. Birincisi işletim sisteminizdeki işaretçi hızlandırması, düzensiz zamanlama yaratabilir — Windows'ta \"İşaretçi hassasiyetini artır\" seçeneğini kapatın. İkincisi, düşük pil ya da zayıf kablosuz bağlantı. Üçüncüsü, sensör üzerindeki kir ya da aşınmış anahtar. Tıklamalar yalnızca fareyi aynı anda hareket ettirirken düşüyorsa, sorun anahtardan çok sensörde ya da bağlantıdadır.",
    },
  ],
  related: ["scroll-test", "cps-test", "keyboard-test", "polling-rate-test"],
};
