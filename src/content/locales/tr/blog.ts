import type { BlogContent } from "../../types";

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
      metaTitle: "Bir tarayıcı farenizi gerçekte nasıl görür",
      metaDescription:
        "Fareyi hareket ettirdiğinizde tarayıcının gerçekte aldığı şey: olay akışı, bildirdiği koordinatlar, polling hızının ve işaretçi hızlandırmasının bunu nasıl değiştirdiği ve bir tarayıcı testinin size neyi söyleyebilip neyi söyleyemeyeceği.",
      excerpt:
        "İmleciniz bir nesne değildir. Konum örneklerinden oluşan bir akıştır ve bu akışın nereden geldiğini anlamak, önünüze çıkacak neredeyse bütün donanım arızalarını açıklar.",
      readTime: "8 dk okuma",
      dateLabel: "23 Kasım 2026",
      lead: "İmleciniz tarayıcının sahip olduğu bir nesne değildir. Tarayıcının hiç görmediği donanımın ürettiği, sayfanın yapılandıramadığı bir işletim sisteminin süzgecinden geçirdiği konum örneklerinden oluşan bir akıştır. Bu hattı anlamak, aynı farenin farklı makinelerde neden farklı hissettirdiğini ve hiçbir web sayfasının farenizin tam olarak ne yaptığını size neden söyleyemediğini açıklar.",
      sections: [
        {
          heading: "İmleç bir nesne değil, bir olay akışıdır",
          paragraphs: [
            "Geliştirici araçlarını açın ve konsola document yazın. İçeride bir imleç yoktur. Fare işaretçisini temsil eden bir nesne yoktur, konumunu okuyacağınız bir özellik yoktur ve sayfaya işaretçinin şu anda nerede olduğunu sorabileceğiniz bir yol yoktur. Tarayıcı bir imleç saklamaz; zaten olmuş hareketlerin kaydını tutar.",
            "Sayfanın aldığı şey bir dizi pointermove olayıdır; yani Pointer Events akışının ta kendisi. Her olay, işaretçinin geçmişteki bir anına ait anlık görüntüyü taşır: nerede olduğu, hangi tuşun basılı olduğu, sensörün bildirdiği basınç ve tarayıcının bir önceki olaydan bu yana ne kadar süre geçtiğini sandığı. Bu olaylar arasında hiçbir bilgi yoktur. İşaretçinin konumu, tarayıcının bildiği bir şey değildir; her olayda bir kez söylenip hemen bırakılan bir şeydir.",
            "Tek başına bu gerçek, insanların fark ettiği tuhaf davranışların çoğunu açıklar. Bir betik, fare şu anda nerede diye soramaz; yalnızca bilgilendirilebilir. Son bilinen konumu okuyan bir uygulama, tam olarak bir olay kadar geridedir. Arka plandaki bir sekme ise olay almayı tamamen durdurur; dolayısıyla geri döndüğünüzde elinizdeki akış bir konum değil, bir boşluktur.",
          ],
          bullets: [
            "pointermove hareket için tetiklenir; pointerdown ve pointerup tuşlar için tetiklenir.",
            "Her olay, belgenin zaman kökeninden itibaren milisaniye cinsinden ve double türünde ölçülmüş bir timeStamp taşır.",
            "Olaylar birleşir: birkaç hareket, yalnızca son konumu bildiren tek bir olaya dönüşebilir.",
          ],
        },
        {
          heading: "Akış gerçekte nereden geliyor",
          paragraphs: [
            "Fare, siz hareket ettirdiğinizde konumunu göndermez. Konumunu bir takvime göre gönderir, hareket edip etmediğinizden bağımsız olarak; her rapor da yalnızca bir öncekinden bu yana olan değişikliği içerir. 1000 Hz bir fare saniyede 1000 USB raporu üretir. 125 Hz bir ofis faresi 125 tane. İşte bu polling hızıdır; bu sitedeki polling hızı testi tam olarak onu ölçer.",
            "Cihaz ile tarayıcı arasında, sayfadan hiç görünmeyen iki süzgeç bulunur. İşletim sistemi işaretçi hızlandırması uygular; yani aynı fiziksel hareket, ne kadar hızlı hareket ettiğinize bağlı olarak farklı sayıda ekran pikseli üretir. Üstüne yumuşatma da uygulama ihtimali vardır ve bu da gecikme ekler. Sonra tarayıcı devreye girer: bir sayfaya olayları ne sıklıkla teslim etmeye ve bunların hangilerini birleştireceğine dair kendi kurallarını koyar.",
            "Dolayısıyla sayfanın aldığı akış üç şeyin çarpımıdır: cihazın polling hızı, işletim sisteminin ayarları ve tarayıcının iç bütçesi. Bir sayfa işaretçinin 400 piksel taşındığını söylediğinde, bu, sayfaya ne söylendiğinin doğrusudur. Elinizin ne kadar uzun yol aldığının doğrusu değildir.",
          ],
        },
        {
          heading: "Üç koordinat sistemi ve aralarındaki uyuşmazlık",
          paragraphs: [
            "Tek bir hareket olayı, aynı fiziksel hareketi üç koordinat sisteminde bildirir ve bu sistemler tasarım gereği birbiriyle uyuşmaz.",
            "Birim CSS pikselidir, fiziksel piksel değil. Örneğin device pixel ratio 2 olan bir ekranda bir CSS piksel, yatayda iki fiziksel piksele denk gelir; bu çarpanı tarayıcının devicePixelRatio değeri olarak bildirir. getBoundingClientRect() ile bir öğeyi ölçen bir betik CSS pikselleriyle çalışır; ekran görüntüsüyle karşılaştıran bir betik ise farklı bir birimle çalışır ve ikisini hizalamak için orana bölmek zorundadır.",
            "Pratik sonucu şudur: bir olayın koordinatları, olayın gönderildiği andaki belgeyi tanımlar ve o zamandan bu yana sayfa kaymış olabilir. pageX değerini saklayıp sonra taze bir getBoundingClientRect() sonucuyla karşılaştıran kod, aslında iki farklı kareyi karşılaştırıyordur.",
          ],
          bullets: [
            "screenX ve screenY, tarayıcı penceresinin kendi konumu da dahil olmak üzere, ekrandaki konumu cihaz pikselleri cinsinden verir.",
            "clientX ve clientY, görüntü alanı içindeki konumu CSS pikselleri cinsinden verir. Sayfa kodunun çoğu bu çifti kullanır.",
            "pageX ve pageY, belgenin tamamı içindeki konumu verir; bu yüzden sayfa kaydıkça değerleri değişir.",
          ],
        },
        {
          heading: "Olayları gerçekte ne sıklıkla alırsınız",
          paragraphs: [
            "Tarayıcı, her rapor için bir olay teslim etmekle yükümlü değildir. Bir sayfa saniyede 120 kare hızında yerleşim yapmakla meşgulse ve fare 1000 Hz ile rapor veriyorsa, o raporların çoğu bir kare çizilmeden önce gereksiz hâle gelir ve tarayıcı onları birleştirir.",
            "Bir pointermove üzerinde getCoalescedEvents() çağırmak, o olaya katlanmış konumların listesini, her biri kendi timeStamp değeriyle birlikte döndürür. Bu, bir web sayfasının görebileceği ham akışa en yakın şeydir. Chromium ve Firefox bunu uygular; Safari uygulamaz ve orada sayfa yalnızca birleştirilmiş uç noktayı görür.",
            "pointerrawupdate, birleştirme gerçekleşmeden önce bireysel hareket örnekleri için tetiklenen ayrı bir olaydır; bu da onu bir sayfaya açık olan en yüksek doğruluklu sinyale dönüştürür. Yalnızca birincil işaretçi için gönderilir ve her yerde uygulanmadığı için ona bağımlı kodun yine de bir yedek yola ihtiyacı vardır.",
          ],
          bullets: [
            "Tek bir pointermove birçok fiziksel hareketi temsil edebilir. Onları ayrı ayrı görmek için getCoalescedEvents() isteyin.",
            "requestAnimationFrame, tarayıcı bir kareyi bitirdikten sonra çalışır. Bir konumu okumak için doğru yerdir; her hareket için bir olay bekleyeceğiniz yer değildir.",
            "Arka plandaki bir sekme hiçbir hareket olayı almaz, bu yüzden işaretçiye dair görüşü yeni bir olay gelene kadar bayat kalır.",
          ],
        },
        {
          heading: "Hızlandırma, ham girdi ve bir sayfanın sınırları",
          paragraphs: [
            "İşaretçi hızlandırması, küçük hareketlerin hassas kalabilmesi, büyük hareketlerin de hızlı kalabilmesi için vardır. Bedeli, fiziksel harekeden piksele eşlemenin sabit olmaması ve her makinede aynı olmamasıdır. movementX okuyan bir betik, tarayıcının uygulamayı seçtiği farkı alır; o fark zaten bu eğriyi içerir.",
            "Pointer Lock API, bir web sayfasının hızlandırılmamış girdi isteyebileceği tek yoldur. İşaretçi kilitliyken movementX ve movementY, ardışık örnekler arasındaki ham farkı bildirir. Bunun yanı sıra ekranı tamamen devralan, imleci gizleyen ve bir kullanıcı hareketi gerektiren bir işlemdir; bu yüzden bir tanılama aracı onu kendiliğinden açamaz.",
            "Yani bir sayfa size işaretçinin kaç piksel yol aldığını ve kabaca ne kadar hızlı olduğunu söyleyebilir; ama elinizin gerçekte ne kadar uzun yol aldığını, sensörün kendi doğal çözünürlüğünün ne olduğunu ya da farenin işletim sistemi hiç görmeden önce kendi başına yumuşatma uygulayıp uygulamadığını söyleyemez.",
          ],
        },
        {
          heading: "Bir fareyi test ederken bunun ne anlama geldiği",
          paragraphs: [
            "Buradaki araçların kendilerini, farenizin ne yaptığını değil, bilgisayarınızın ne aldığını ölçen araçlar olarak tanımlamasının nedeni budur. Fare tuşu testi, sayfaya ulaşan tıklamaları sayar. Polling hızı testi ise tarayıcının teslim ettiği hareket olaylarının aralıklarını ölçer. İkisi de bir anahtarı, bir kodlayıcıyı ya da bir sensörü içeriden inceleyemez.",
            "Bu iki ifadenin arasındaki boşluk, kafa karıştıran destek kayıtlarının çoğunun durduğu yerdir. Sol anahtarı arızalı bir fare, tek bir fiziksel basış için iki basış olayı gönderir ve tarayıcı ikisini de bildirir. Sensörü aşınmış bir fare ise ince biçimde yanlış konumlardan oluşan kusursuz düzenli bir akış bildirebilir. Sayfanın içinden bakıldığında ikisi de donanım arızası gibi görünür; sürücünün içinden bakıldığında ise ikisi de tarayıcı hatası gibi görünür.",
            "Hangi tarafta olduğunuzu bilmek saatler kazandırır. Sayfaya ulaşan olaylar yanlışsa arıza donanımdadır ya da sürücüdedir ve hiçbir tarayıcı ayarı onu düzeltmez. Olaylar doğruysa ve uygulama yine de tuhaf davranıyorsa arıza uygulamadadır.",
          ],
        },
      ],
      faqs: [
        {
          question: "Tarayıcı, imlecimin gerçek konumunu biliyor mu?",
          answer:
            "Hayır. Yalnızca kendisine söylenen konumları, üstelik sadece bir olay gönderdiği anlarda bilir. Olaylar arasında işaretçiyi hiç izlemez ve arka plandaki bir sekmeye, yeni bir olay ulaşana kadar hiçbir hareket bildirilmez.",
        },
        {
          question: "İşaretçim, olay hızının ima ettiğinden neden daha akıcı geliyor?",
          answer:
            "Çünkü ekran kendi takvimine göre yenilenir. Fare saniyede 1000 kez rapor verirken ekran saniyede 144 kare yenileyebilir. Tarayıcı kareler arasında gelen hareket olaylarını birleştirir; böylece sayfa cihazın ürettiğinden daha az olay görürken ekran yine de pürüzsüz bir yol gösterir.",
        },
        {
          question: "Bir web sayfası, fare rapor vermekten daha hızlı okuyabilir mi?",
          answer:
            "Hayır, ama buna ihtiyacı da yok. Verinin kaynağı cihazdır; dolayısıyla polling hızı kesin bir üst sınırdır. Bir sayfa getCoalescedEvents() ile birleştirilmiş bir olayın arkasındaki bireysel örnekleri isteyebilir, ama cihazın hiç göndermediği örnekleri uyduramaz.",
        },
        {
          question: "İşaretçi hızlandırması nedir ve test için kapatabilir miyim?",
          answer:
            "İşaretçi hızlandırması, işletim sisteminin fiziksel hareketi ekran piksellerine yeniden eşlemesidir; bu yüzden hızlı bir sıçrama, yavaş bir hareketten daha fazla mesafe kat eder. Hızlandırılmamış hareketi bir sayfaya açan tek şey Pointer Lock API'dir ve o da ekranı devralır. Diğer her yerde sayfanın okuduğu sayılar zaten hızlandırma eğrisini içerir.",
        },
        {
          question: "Bir tarayıcı testi, fareminin doğru çalıştığını kanıtlar mı?",
          answer:
            "Hayır. Yalnızca sayfaya neyin ulaştığını kanıtlar. Sensörü aşınmış bir fare kusursuz düzenli bir konum akışı bildirebilir; donanım sapasağlam iken tarayıcı olaylarını kusursuz teslim edebilir. Yazılım tarafını eleyip elemek için tarayıcı testini, donanım tarafını doğrulamak için de üreticinin kendi tanılama araçlarını kullanın.",
        },
      ],
      toolSlug: "mouse-test",
    },
    {
      slug: "double-click-chatter-explained",
      title: "Çift tıklama zıplaması, doğru şekilde anlatıldı",
      metaTitle: "Çift tıklama zıplaması, doğru şekilde anlatıldı",
      metaDescription:
        "Neden aşınmış bir fare anahtarı tek bir basış için iki tıklama gönderir, bu nasıl gerçek bir çift tıklamadan ayrılır, zamanlama imzası nasıl görünür ve anahtar temas zıplaması kalıcı olarak nasıl düzeltilir.",
      excerpt:
        "Aşınmış bir fare anahtarı neden tek bir basış için iki tıklama gönderir, bu gerçek bir çift tıklamadan nasıl farklıdır ve zamanlama imzası nasıl görünür.",
      readTime: "6 dk okuma",
      dateLabel: "23 Kasım 2026",
      lead: "Bir fare kendi kendine çift tıklamaya başladığında teşhis genellikle anahtar temas zıplamasıdır: tek bir fiziksel basış iki elektrik teması üretir. Yazılımda tam olarak bir çift tıklamaya benzer ve tam da bu yüzden sık sık yanlış teşhis edilir. Fark zamanlamadadır; zamanlama ise hikâyenin tamamıdır.",
      sections: [
        {
          heading: "Bir fare anahtarı aslında ne yapar",
          paragraphs: [
            "Fare tuşu, bastığınızda bir devreyi kapatan yaylı metal bir kontaktır. Sağlam bir anahtarda kontakt bir kez, temiz biçimde kapanır ve siz bırakana kadar kapalı kalır.",
            "Aşınmış bir anahtarda kontakt hafifçe çukurlaşmış ya da paslanmış olabilir; ya da yay zayıflamış ve artık yeterince sert bastıramıyor olabilir. Sonuç şu: bastığınızda devre kapanır, kontakt sekerken bir milisaniyenin çok küçük bir bölümü için yeniden açılır ve bir kez daha kapanır. Farenin denetleyicisi iki basış görür. Siz ise yalnızca bir tane yaptınız.",
            "İki temas arasındaki fark genellikle birkaç milisaniyedir ve neredeyse her zaman elliyi çoktan aşmaz. Bunun bir çift tıklamaya benzemesinin nedeni, çok sayıda programın çift tıklamayı bir sinyal olarak ele almasıdır; oysa çift tıklama, birbirine yakın iki basıştan ibarettir. Fare, neyi algıladığını doğru söylüyordur; yalnızca sizin hiç yapmadığınız bir basışı algılamıştır.",
          ],
        },
        {
          heading: "İşletim sistemi buna neden çift tıklama diyor",
          paragraphs: [
            "Neredeyse her masaüstü sistemde, iki tıklamanın çift tıklama sayılabilmesi için ne kadar yakın olması gerektiğini belirleyen bir ayar vardır. Windows'ta bu ayar çift tıklama hızıdır ve varsayılan değeri 500 milisaniyedir. macOS, eşdeğerini dokunmatik panel ve fare ayarlarında tutar. Sistem açısından bu eşiğin altındaki her şey bir çift tıklamadır, zıplama ise eşiğin çok altında kalır.",
            "Yani zıplama yalnızca çift tıklamaya benzemez; sistemin kendi tanımına göre zaten bir çift tıklamadır. Fare 6 milisaniye arayla iki basış olayı gönderdi; sistem eşiğinin içinde iki basış gördü ve makinedeki her uygulamaya bir çift tıklama bildirdi.",
            "Arızanın sık sık Windows'tan, tarayıcıdan ya da o sırada açık olan oyundan suçlanmasının nedeni de budur. Sistem, kendisine söyleneni tıpatıp yerine getiriyordu; kullandığı kanıt ise farenin raporuydu.",
          ],
        },
        {
          heading: "Onları ayıran zamanlama imzası",
          paragraphs: [
            "Gerçek bir çift tıklama ile bir zıplama olayı birbirinden ayırt edilebilir, çünkü ikisi farklı şeylerden oluşur. Gerçek bir çift tıklama iki eksiksiz bas-bırak döngüsüdür: bas, bırak, bas, bırak. Zıplama ise içine fazladan bir temas katılmış tek bir bas-bırak döngüsüdür: bas, bırak, bas, bırak; burada ikinci basış ilk bırakmadan yalnızca mikrosaniyeler sonra gelir ve arada hiçbir insan parmağı kıpırdamamıştır.",
            "İpucu olan şey aradaki farktır. Gerçek bir çift tıklamada ilk bırakma ile ikinci basış arasındaki fark, bir insanın parmağını hareket ettirip yeniden basması için geçen süredir; normalde 80 ila 300 milisaniye arasındadır. Zıplamada ise bu fark metal bir kontaktın sekme süresidir ve 1 ila 30 milisaniye arasındadır. Bu iki küme örtüşmez: biri bir insan, diğeri bir yay.",
            "Aynı imza tıklama hızında da görünür. Eliyle olabileceği en hızlı biçimde tıklayan bir kişi, saniyede 10 ila 12 tıklama civarında kalır. Zıplama yapan bir anahtar ise bundan çok daha fazlasını üretebilir, çünkü donanım olayları herhangi bir parmağın yetebileceğinden daha hızlı üretiyordur.",
          ],
          bullets: [
            "Gerçek bir çift tıklama, hareket etmiş bir parmaktan gelen ve genellikle 80 ila 300 milisaniye arayla yer alan iki tam bas-bırak döngüsüdür.",
            "Zıplama, içinde fazladan bir temas bulunan tek bir bas-bırak döngüsüdür; iki temas genellikle 1 ila 30 milisaniye arayladır.",
            "Elle hızlı tıklama saniyede 10 ila 12 tıklama civarında tavan yapar; zıplama ise tek başına bunu aşabilir.",
          ],
        },
        {
          heading: "Tarayıcı bunu neden zor görünür kılıyor",
          paragraphs: [
            "Tarayıcı kendisine söyleni sadık biçimde bildirir, ama çift tıklama konusunda kendi fikri de vardır ve bunun için işletim sisteminin eşiğini kullanır. dblclick olayını dinleyen bir sayfa tam olarak sistemin gördüğünü görür; dolayısıyla bu olay üzerinden zıplama ile gerçek bir çift tıklamayı ayırt etmek mümkün değildir. Tuzak budur: dblclick, hangisinin gerçekleştiğini asla size söylemeyecek tek olaydır.",
            "pointerdown ve pointerup olayları bakmak için daha uygun bir yerdir, çünkü fiziksel temas başına gönderilirler ve her biri alt milisaniye çözünürlüklü bir timeStamp taşır. Her basışın zaman damgasını kendisi alan bir sayfa, 6 milisaniye arayla gelen iki basış arasındaki farkı ölçebilir; teşhis bu sayıdır.",
            "Zaman damgalarıyla ilgili bir incelik var. Her olayın timeStamp değeri, belgenin zaman kökenine göreli bir değerdir ve tarayıcılar bunun donanımın hareketi örneklediği an olduğunu garanti etmez. Bu, olayın gönderildiği andır. Sistem yük altındayken bu gönderim anı fiziksel zamandan kayabilir; bu yüzden bir sayfa her zaman aynı saatten alınan iki zaman damgası arasındaki farkı hesaplamalı, tek bir zaman damgasını Date.now ile karşılaştırmamalıdır.",
          ],
        },
        {
          heading: "Sonucu nasıl okumalı",
          paragraphs: [
            "Bu sitedeki fare tuşu testi her basışın zaman damgasını kaydeder, birbirine 50 milisaniye içinde gelen basışları gruplar ve aradaki farkı raporlar. Birkaç milisaniyelik bir fark zıplamadır. Çift tıklama aralığındaki bir fark ise çift tıklamadır ve çift tıklama sayacı yalnızca fark bu aralığın içine düştüğünde artar.",
            "50 milisaniyelik eşik bilinçli olarak geniş tutulmuştur. İnsan çift tıklamaları esasen 80 milisaniyenin altına neredeyse hiç inmez, anahtar sekmesi ise esasen 30 milisaniyeyi neredeyse hiç aşmaz; dolayısıyla iki küme örtüşmez ve sınır, ikisinin arasındaki boşluğa rahatça yerleştirilebilir.",
            "Test ayrıca oturum boyunca görülen en küçük farkı da gösterir. Genellikle tek başına bu sayı, hiçbir yoruma gerek kalmadan meseleyi kapatır: en küçük fark tek haneli milisaniye ise bu zıplamadır; yüzlerce milisaniye ise çift tıklamalarınız gerçektir.",
          ],
        },
        {
          heading: "Peki bu konuda gerçekten ne yapmalı",
          paragraphs: [
            "Zıplama hafifse çözüm genellikle temizliktir. Sıkıştırılmış hava ya da yumuşak bir fırça tozu temizler; elektrik temaslarını temizlemek için satılan türden bir temas temizleyici ise aşınmış kontaktın sekmesine yol açan oksidi çözer. Temasların bakımı ucuzdur ve aşınmış bir anahtar bu yolla çoğu zaman eski hâline döndürülebilir.",
            "Anahtar mekanik olarak hasarlıysa değiştirilmesi gerekir. Anahtarları değiştirilebilen fareler — onarılabilir fareler arasında yaygın — bir havya ile beş dakikalık bir iştir. Kapalı anahtarlı bir fare ise farklı bir konudur; asıl soru orada farenin onarılmaya değip değmediğidir.",
            "İnsanları kafadan karıştıran bir yazılım geçici çözümü var: işletim sisteminin çift tıklama eşiğini düşürmek. En küçük değere ayarlayınca sistem, 6 milisaniyelik bir sekmeyi artık çift tıklama saymaz. İşe yarar ve gerçekten yanlış çözümdür, çünkü aynı zamanda gerçek çift tıklamaları da yapmayı zorlaştırır. Yanlış davranan program değil, kullandığınız her uygulama artık daha dar bir çift tıklama penceresine sahip olur. Bunu bir çözüm olarak değil, teşhisi sınama yolu olarak değerlendirin.",
          ],
        },
      ],
      faqs: [
        {
          question: "Anahtar temas zıplamasını gerçek bir çift tıklamadan nasıl ayırt ederim?",
          answer:
            "İki basış arasındaki farka bakarak. Gerçek bir çift tıklama iki tam bas-bırak döngüsüdür ve genellikle 80 ila 300 milisaniye arayla gelir. Zıplama, içinde fazladan bir temas olan tek bir basıştır ve genellikle 1 ila 30 milisaniye arayla gelir. Fare tuşu testi bu farkı ölçer ve raporlar.",
        },
        {
          question: "Gerçek bir çift tıklama hiçbir zaman zıplama gibi görünecek kadar hızlı olabilir mi?",
          answer:
            "Hayır. Amaçlı en hızlı çift tıklama bile yaklaşık 80 milisaniyelik bir fark bırakır, çünkü parmak yeniden basmadan önce bırakmak ve yol almak zorundadır. Zıplama ise tek haneli milisaniyelerde olur; bu da bir anahtarın fiziksel olarak hareket edebileceğinden daha hızlıdır. İkisi hiçbir zaman örtüşmez.",
        },
        {
          question: "Farem yalnızca tek bir programda çift tıklıyor. Yine de fare mi?",
          answer:
            "Neredeyse kesinlikle evet. Program genellikle çift tıklamayı anlamlı bir eylem sayan tek programdır, bu yüzden arızayı görünür kılan da odur. Fareyi sade bir metin düzenleyicide ve tarayıcıda deneyin: zıplama orada da görünüyorsa sorun donanımdadır, programda değil.",
        },
        {
          question: "İşletim sisteminin çift tıklama hızı ayarı önemli mi?",
          answer:
            "Ne sayılacağını o belirler ve bu eşik, zıplamanın neden bir çift tıklama olarak bildirildiğinin nedenidir. Ayarı düşürmek zıplamanın tetiklenmesini zorlaştırır ama gerçek çift tıklamaları da yapmayı zorlaştırır; bu yüzden bir düzeltme değil, teşhisi sınama yoludur.",
        },
        {
          question: "Zıplama yapan bir fare yangın riski taşır mı ya da kullanmaya devam etmek tehlikeli mi?",
          answer:
            "Hayır. Zıplama, düşük gerilimli ve amperin çok küçük bir kesrini taşıyan bir devre içinde seken bir elektrik temasıdır. Fareye zarar vermez ve yangın riski oluşturmaz. Bedeli, yanlış yönlendirilen tıklamalar ve kaybedilen iştir; donanımın kendisi değil.",
        },
      ],
      toolSlug: "mouse-test",
    },
  ],
};
