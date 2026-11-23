import type { BlogContent } from "../../types";

export const blog: BlogContent = {
  metaTitle: "Blog",
  metaDescription:
    "Praktyczne notatki o sprzęcie wejściowym, interfejsach API zdarzeń przeglądarki i o tym, jak budować lepsze narzędzia diagnostyczne dla myszy, klawiatur i wskaźników.",
  heading: "Blog",
  lead: "Notatki o sprzęcie wejściowym, o API zdarzeń przeglądarki, które go udostępniają, oraz o tym, jak zbudowano narzędzia diagnostyczne w tej witrynie. Napisane dla osób, które chcą zrozumieć, co robi ich sprzęt, zamiast po prostu go wymieniać.",
  posts: [
    {
      slug: "how-a-browser-sees-your-mouse",
      title: "Jak przeglądarka naprawdę widzi mysz",
      metaTitle: "Jak przeglądarka naprawdę widzi mysz",
      metaDescription:
        "Co tak naprawdę dostaje przeglądarka, gdy ruszasz myszą: strumień zdarzeń, raportowane współrzędne, wpływ częstotliwości odpytywania i przyspieszania wskaźnika oraz to, czego test przeglądarkowy jest w stanie powiedzieć, a czego nie.",
      excerpt:
        "Kursor to nie obiekt, tylko strumień próbek pozycji. Zrozumienie, skąd ten strumień pochodzi, wyjaśnia niemal każdą usterkę sprzętową, jaką kiedykolwiek będziesz śledzić.",
      readTime: "8 min czytania",
      dateLabel: "23 listopada 2026",
      lead: "Kursor to nie obiekt, który przeglądarka posiada. To strumień próbek pozycji, wytwarzany przez sprzęt, którego przeglądarka nigdy nie widzi, i filtrowany przez system operacyjny, którego strona nie może skonfigurować. Zrozumienie tego łańcucha wyjaśnia, dlaczego ta sama mysz sprawia wrażenie innej na różnych komputerach i dlaczego żadna strona nie powie ci dokładnie, co dzieje się z twoją myszą.",
      sections: [
        {
          heading: "Kursor to strumień zdarzeń, a nie obiekt",
          paragraphs: [
            "Otwórz narzędzia deweloperskie i wpisz w konsoli document. Kursora w tym obiekcie nie ma. Nie ma żadnego obiektu reprezentującego wskaźnik myszy, nie ma właściwości, z której można odczytać jego pozycję, a strona nie ma jak zapytać, gdzie w tej chwili znajduje się kursor. Przeglądarka nie przechowuje kursora — przechowuje historię ruchów, które już się odbyły.",
            "To, co trafia do strony, to ciąg zdarzeń pointermove. Każde niesie migawkę stanu wskaźnika z chwili, która już minęła: gdzie się znajdował, który przycisk był wciśnięty, jakie ciśnienie zgłosił czujnik i ile, zdaniem przeglądarki, upłynęło od poprzedniego zdarzenia. Między tymi zdarzeniami nie ma żadnej informacji. Pozycji wskaźnika przeglądarka nie zna — przeglądarka została o niej powiadomiona raz na zdarzenie i zaraz ją puściła.",
            "Ten jeden fakt tłumaczy większość dziwnych zachowań, na które ludzie się skarżą. Skrypt nie może zapytać, gdzie mysz jest w tej chwili, może tylko zostać powiadomiony. Aplikacja, która czyta ostatnią znaną pozycję, opóźnia się dokładnie o jedno zdarzenie. A karta w tle w ogóle przestaje otrzymywać zdarzenia, więc strumień, który zastanie po powrocie, to luka, a nie pozycja.",
          ],
          bullets: [
            "pointermove sygnalizuje ruch, a pointerdown i pointerup — naciśnięcie i zwolnienie przycisków.",
            "Każde zdarzenie ma timeStamp mierzony od time origin dokumentu, w milisekundach, jako liczba podwójnej precyzji.",
            "Zdarzenia się scalają: kilka ruchów może zostać połączonych w jedno zdarzenie zgłaszające wyłącznie pozycję końcową.",
          ],
        },
        {
          heading: "Skąd naprawdę bierze się ten strumień",
          paragraphs: [
            "Mysz nie wysyła pozycji wtedy, kiedy ją ruszasz. Wysyła ją według harmonogramu, niezależnie od tego, czy coś się poruszyło, a każdy raport zawiera wyłącznie zmianę od poprzedniego. Mysz 1000 Hz składa 1000 raportów USB w standardzie HID na sekundę. Mysz biurowa 125 Hz — 125. To właśnie tę częstotliwość raportowania mierzy test częstotliwości odpytywania w tej witrynie.",
            "Między urządzeniem a przeglądarką stoją dwa filtry, których strona nie widzi. System operacyjny stosuje przyspieszanie wskaźnika, czyli ten sam fizyczny ruch daje inną liczbę pikseli ekranu zależnie od tego, jak szybko go wykonano, a może też wygładzać ruch, co wprowadza opóźnienie. Potem przeglądarka stosuje własne reguły: jak często chce dostarczać zdarzenia stronie i które z nich łączyć.",
            "Strumień, który widzi strona, jest więc iloczynem trzech rzeczy: częstotliwości raportowania urządzenia, ustawień systemu operacyjnego i wewnętrznego budżetu przeglądarki. Gdy strona mówi, że wskaźnik przesunął się o 400 pikseli, to prawda o tym, co strona dostała. To nie jest prawda o tym, jak daleko poruszyła się ręka.",
          ],
        },
        {
          heading: "Trzy układy współrzędnych, które się nie zgadzają",
          paragraphs: [
            "Jedno zdarzenie ruchu opisuje ten sam fizyczny ruch w trzech układach współrzędnych i robi to celowo niespójnie.",
            "Jednostką jest piksel CSS, a nie piksel fizyczny. Na wyświetlaczu o device pixel ratio 2 jeden piksel CSS ma szerokość dwóch pikseli fizycznych; dokładnie tę samą wartość podaje właściwość devicePixelRatio. Skrypt, który mierzy element przez getBoundingClientRect(), pracuje w pikselach CSS, a skrypt porównujący wynik ze zrzutem ekranu pracuje w innej jednostce i musi podzielić przez ten współczynnik, żeby trafić w ten sam punkt.",
            "Praktyczna konsekwencja jest taka, że współrzędne zdarzenia opisują dokument w chwili, gdy zdarzenie zostało wysłane, a strona mogła się od tego czasu przewinąć. Kod, który zapamiętuje pageX, a potem porównuje je z nowym wynikiem getBoundingClientRect, porównuje dwie różne klatki. Dlatego w kodzie warto mieć w głowie, z którego układu korzysta, i nie przeliczać jednego układu na drugi, licząc na to, że strona zdążyła się nie przewinąć.",
          ],
          bullets: [
            "screenX i screenY podają pozycję na ekranie, w pikselach urządzenia, wraz z przesunięciem okna przeglądarki.",
            "clientX i clientY podają pozycję w obrębie widocznego obszaru, w pikselach CSS. To para, z której korzysta większość kodu na stronach.",
            "pageX i pageY podają pozycję w obrębie całego dokumentu, więc zmieniają się wraz z przewijaniem strony.",
          ],
        },
        {
          heading: "Jak często faktycznie dostajesz zdarzenia",
          paragraphs: [
            "Przeglądarka nie musi dostarczać jednego zdarzenia na każdy raport. Jeśli strona jest zajęta układaniem układu przy częstotliwości 120 klatek na sekundę, a mysz raportuje z 1000 Hz, większość tych raportów jest zbędna w chwili, gdy klatka zostanie wymalowana, więc przeglądarka je scala.",
            "getCoalescedEvents na zdarzeniu pointermove zwraca listę pozycji, które zostały w nim scalone, każdą z własnym timeStamp. To najbliższy odpowiednik surowego strumienia, jaki strona jest w stanie zobaczyć. Implementują go Chromium i Firefox; Safari tego nie robi, a tam strona widzi wyłącznie scalony punkt końcowy.",
            "pointerrawupdate to osobne zdarzenie Pointer Events, wyzwalane dla pojedynczych próbek ruchu jeszcze przed scaleniem, co czyni je sygnałem o najwyższej wierności dostępnym dla strony. Jest dostarczane wyłącznie dla wskaźnika głównego i nie zaimplementowane wszędzie, więc kod, który na nim polega, i tak potrzebuje rozwiązania zapasowego.",
          ],
          bullets: [
            "Jedno zdarzenie pointermove może odpowiadać wielu fizycznym ruchom. Wywołanie getCoalescedEvents() pokazuje je osobno.",
            "requestAnimationFrame wykonuje się po tym, jak przeglądarka domknęła klatkę. To właściwe miejsce na odczyt pozycji, a niewłaściwe miejsce na oczekiwanie jednego zdarzenia na każdy ruch.",
            "Karta w tle nie otrzymuje w ogóle zdarzeń ruchu, więc jej obraz wskaźnika jest nieaktualny, dopóki jakieś zdarzenie nie dotrze.",
          ],
        },
        {
          heading: "Przyspieszanie, surowe dane wejściowe i granice strony",
          paragraphs: [
            "Przyspieszanie wskaźnika istnieje po to, żeby małe ruchy były precyzyjne, a duże szybkie. Cena za to taka, że odwzorowanie ruchu fizycznego na piksele nie jest stałe i nie jest takie samo na każdym komputerze. Skrypt czytający movementX dostaje deltę, którą przeglądarka uznała za właściwą, a ta delta zawiera już tę krzywą.",
            "Pointer Lock API to jedyny sposób, w jaki strona może poprosić o dane bez przyspieszenia. Gdy wskaźnik jest zablokowany, movementX i movementY raportują surową deltę między kolejnymi próbkami. Jest to zarazem przejęcie całego ekranu: chowa kursor i wymaga gestu użytkownika, dlatego narzędzie diagnostyczne nie może po prostu go włączyć.",
            "Strona powie ci zatem, ile pikseli wskaźnik przejechał i mniej więcej jak szybko, ale nie powie, jak daleko poruszyła się ręka, jaka jest natywna rozdzielczość czujnika ani czy mysz zastosowała własne wygładzanie, zanim w ogóle ujrzał to system operacyjny.",
          ],
        },
        {
          heading: "Co to oznacza przy testowaniu myszy",
          paragraphs: [
            "Dlatego narzędzia w tym miejscu opisują się jako mierzące to, co dotarło do komputera, a nie to, co robi twoja mysz. Test przycisków myszy liczy kliknięcia, które dotarły do dokumentu HTML. Test częstotliwości odpytywania mierzy odstępy między zdarzeniami ruchu dostarczonymi przez przeglądarkę. Żaden z nich nie zajrzy do wnętrza styku, enkodera ani czujnika.",
            "Właśnie w tej luce między dwoma zdaniami mieszka większość mylących wątków w pomocy technicznej. Mysz z padającym lewym stykiem wysyła dwa zdarzenia naciśnięcia na jedno fizyczne naciśnięcie, a przeglądarka zgłasza oba. Mysz ze zużytym czujnikiem może raportować idealnie regularny strumień pozycji, które są po trochę błędne. Z perspektywy strony oba przypadki wyglądają jak usterka sprzętu, a z perspektywy sterownika oba wyglądają jak błąd przeglądarki.",
            "Wiedzieć, po której stronie tej granicy się stoisz, oszczędza godziny. Jeśli zdarzenia docierające do strony są błędne, usterka leży w sprzęcie albo w sterowniku i żadne ustawienie przeglądarki jej nie naprawi. Jeśli zdarzenia są poprawne, a aplikacja wciąż zachowuje się źle, wina leży w aplikacji.",
          ],
        },
      ],
      faqs: [
        {
          question: "Czy przeglądarka zna prawdziwe położenie kursora?",
          answer:
            "Nie. Zna pozycje, o których została powiadomiona, i to wyłącznie w chwilach, gdy wysłała zdarzenie. Między zdarzeniami w ogóle nie śledzi wskaźnika, a karta w tle nie dowiaduje się o ruchu, dopóki jakieś zdarzenie do niej nie dotrze.",
        },
        {
          question: "Dlaczego wskaźnik wydaje się płynniejszy, niż sugeruje częstotliwość zdarzeń?",
          answer:
            "Bo ekran odświeża się według własnego harmonogramu. Twoja mysz może raportować 1000 razy na sekundę, a wyświetlacz odświeża się z częstotliwością 144 klatek na sekundę. Przeglądarka scala zdarzenia ruchu wpadające między klatkami, więc strona widzi mniej zdarzeń, niż urządzenie wyprodukowało, a ekran i tak pokazuje gładką ścieżkę.",
        },
        {
          question: "Czy strona może odczytywać mysz szybciej, niż mysz raportuje?",
          answer:
            "Nie i nie musi. Urządzenie jest źródłem danych, więc częstotliwość raportowania stanowi twardy sufit. Strona może poprosić o pojedyncze próbki ukryte za scalonym zdarzeniem przez getCoalescedEvents, ale nie wymyśli próbek, których urządzenie nigdy nie wysłało.",
        },
        {
          question: "Czym jest przyspieszanie wskaźnika i czy da się je wyłączyć na czas testu?",
          answer:
            "Przyspieszanie wskaźnika to przemapowanie ruchu fizycznego na piksele ekranu przez system operacyjny, więc szybki rzut pokonuje większy dystans niż powolny. Tylko Pointer Lock API udostępnia stronie ruch bez przyspieszenia, ale przejmuje ekran. Wszędzie indziej liczby odczytywane przez stronę zawierają już krzywą przyspieszenia.",
        },
        {
          question: "Czy test przeglądarkowy dowodzi, że mysz działa poprawnie?",
          answer:
            "Nie. Dowodzi, co dotarło do strony. Mysz może raportować czysty, idealnie regularny strumień pozycji, mając zużyty czujnik, a przeglądarka może dostarczać zdarzenia bez zarzutu, gdy sprzęt jest w porządku. Test przeglądarkowy służy do wykluczenia strony programowej, a sprzęt trzeba potem potwierdzić narzędziami diagnostycznymi producenta.",
        },
      ],
      toolSlug: "mouse-test",
    },
    {
      slug: "double-click-chatter-explained",
      title: "Drganie styków imitujące podwójne kliknięcie, wyjaśnione porządnie",
      metaTitle: "Drganie styków imitujące podwójne kliknięcie, wyjaśnione porządnie",
      metaDescription:
        "Dlaczego zużyty styk myszy wysyła dwa kliknięcia na jedno naciśnięcie, jak to się różni od prawdziwego podwójnego kliknięcia, jak wygląda sygnatura czasowa takiej usterki i jak raz na zawsze pozbyć się drgania styków.",
      excerpt:
        "Dlaczego zużyty styk myszy wysyła dwa kliknięcia na jedno naciśnięcie, czym to się różni od prawdziwego podwójnego kliknięcia i jak wygląda sygnatura czasowa takiej usterki.",
      readTime: "6 min czytania",
      dateLabel: "23 listopada 2026",
      lead: "Kiedy mysz zaczyna klikać podwójnie sama, diagnozą jest zwykle drganie styków: jedno fizyczne naciśnięcie daje dwa kontakty elektryczne. W programie wygląda to dokładnie jak podwójne kliknięcie i właśnie dlatego tak często jest mylone. Różnica tkwi w czasie, a czas jest w tej historii wszystkim.",
      sections: [
        {
          heading: "Co tak naprawdę robi styk myszy",
          paragraphs: [
            "Przycisk myszy to sprężynowy metalowy styk, który zamyka obwód po naciśnięciu. W dobrym styku kontakt zamyka się raz, czysto, i pozostaje zamknięty, dopóki nie puszcisz przycisku.",
            "W zużytym styku kontakt jest lekko zadrapany albo skorodowany, a sprężyna osłabła i nie dociska już z taką siłą. Efekt jest taki, że po naciśnięciu obwód się zamyka, po chwili znów otwiera, bo kontakt odbija, i zamyka się po raz drugi. Kontroler myszy widzi dwa naciśnięcia. Ty zrobiłeś jedno.",
            "Odstęp między tymi dwoma kontaktami to zwykle kilka milisekund i prawie zawsze znacznie poniżej 50 milisekund. Powód, dla którego wrażenie jest takie jak przy podwójnym kliknięciu, jest prosty: bardzo wiele programów traktuje podwójne kliknięcie jako sygnał, a podwójne kliknięcie to dwa naciśnięcia blisko siebie. Mysz mówi prawdę o tym, co wykryła; po prostu wykryła naciśnięcie, którego nie było.",
          ],
        },
        {
          heading: "Dlaczego system operacyjny nazywa to podwójnym kliknięciem",
          paragraphs: [
            "Prawie każdy system desktopowy ma ustawienie określające, jak blisko siebie muszą leżeć dwa kliknięcia, żeby zostać policzone jako podwójne kliknięcie. W Windows nazywa się ono szybkością podwójnego kliknięcia i domyślnie wynosi 500 milisekund. macOS trzyma odpowiednik w ustawieniach gładzika i myszy. Wszystko poniżej tego progu jest dla systemu podwójnym kliknięciem, a drganie styków ląduje daleko poniżej progu.",
            "Drganie styków nie tylko wygląda jak podwójne kliknięcie — jest podwójnym kliknięciem według własnej definicji systemu. Mysz wysłała dwa zdarzenia naciśnięcia w odstępie 6 milisekund; system zobaczył dwa naciśnięcia w obrębie swojego progu i zgłosił podwójne kliknięcie każdej aplikacji na tym komputerze.",
            "Dlatego też wina tak często spada na Windows, na przeglądarkę albo na akurat uruchomioną grę. System robi dokładnie to, co mu kazano, a dowodem, na którym oprarł decyzję, był raport myszy.",
          ],
        },
        {
          heading: "Sygnatura czasowa, która je rozróżnia",
          paragraphs: [
            "Prawdziwe podwójne kliknięcie i zdarzenie wywołane drganiem styków da się odróżnić, bo zbudowane są z różnych rzeczy. Prawdziwe podwójne kliknięcie to dwa pełne cykle naciśnięcia i zwolnienia: w dół, w górę, w dół, w górę. Drganie to jeden cykl naciśnięcia i zwolnienia z doklejonym kontaktem w środku, a kolejność zdarzeń wygląda tak samo: w dół, w górę, w dół, w górę — tyle że drugie naciśnięcie pojawia się mikrosekundy po pierwszym zwolnieniu, a żaden palec człowieka w tym czasie nie drgnął.",
            "Odstęp zdradza, o co chodzi. W prawdziwym podwójnym kliknięciu odstęp między pierwszym zwolnieniem a drugim naciśnięciem to czas, jaki człowiek potrzebuje na przesunięcie palca i ponowne naciśnięcie, zazwyczaj od 80 do 300 milisekund. W drganiu styków tym odstępem jest czas odbicia metalowego kontaktu, od 1 do 30 milisekund. Obie populacje się nie pokrywają: jedna to człowiek, druga to sprężyna.",
            "Ten sam wzorzec widać w tempie klikania. Człowiek klikający najszybciej, jak potrafi, osiąga mniej więcej 10 do 12 kliknięć na sekundę. Drgający styk potrafi wygenerować znacznie więcej, bo sprzęt tworzy zdarzenia szybciej, niż potrafi naciskać jakikolwiek palec.",
          ],
          bullets: [
            "Prawdziwe podwójne kliknięcie to dwa pełne cykle naciśnięcia i zwolnienia, zwykle 80 do 300 milisekund od siebie, wykonane przez palec, który się poruszył.",
            "Drganie styków to jeden cykl naciśnięcia i zwolnienia z dodatkowym kontaktem w środku, zwykle 1 do 30 milisekund od siebie.",
            "Szybkie klikanie ręką osiąga mniej więcej 10 do 12 kliknięć na sekundę, a drganie styków potrafi tę granicę przekroczyć samodzielnie.",
          ],
        },
        {
          heading: "Dlaczego przeglądarka utrudnia rozpoznanie",
          paragraphs: [
            "Przeglądarka wiernie przekazuje to, czego jej powiedziano, ale ma też własne wyobrażenie o podwójnym kliknięciu i korzysta z progu systemu operacyjnego. Strona nasłuchująca zdarzenia dblclick widzi dokładnie to, co zobaczył system, więc drganie styków i prawdziwe podwójne kliknięcie są przez to zdarzenie nierozróżnialne. To jest właśnie pułapka: dblclick to jedyne zdarzenie, które nigdy nie powie, który z tych dwóch przypadków wystąpił.",
            "Zdarzenia pointerdown i pointerup są lepszym miejscem do obserwacji, bo są dostarczane dla każdego fizycznego kontaktu, a każde niesie timeStamp o rozdzielczości lepszej niż milisekunda. Strona, która sama znakuje czas każdego naciśnięcia, potrafi zmierzyć odstęp między dwoma naciśnięciami, które dotarły w odstępie 6 milisekund, i ta liczba jest już diagnozą.",
            "Jest pewna subtelność z timeStamp. Znacznik czasu każdego zdarzenia liczony jest względem time origin dokumentu, a przeglądarki nie gwarantują, że to moment, w którym sprzęt próbkował ruch. To moment, w którym zdarzenie zostało wysłane. Pod obciążeniem czas wysyłki potrafi rozjechać się z czasem fizycznym, więc strona powinna zawsze liczyć odstęp między dwoma znacznikami z tego samego zegara, zamiast porównywać znacznik z Date.now. Oba znaczniki pochodzą wtedy z jednego punktu odniesienia, a ich różnica jest rzeczywistym odstępem, a nie artefaktem porównania dwóch różnych zegarów.",
          ],
        },
        {
          heading: "Jak odczytać wynik",
          paragraphs: [
            "Test przycisków myszy w tej witrynie zapisuje znacznik czasu każdego naciśnięcia, grupuje naciśnięcia pojawiające się w odstępie do 50 milisekund od siebie i pokazuje ten odstęp. Odstęp rzędu kilku milisekund to drganie styków. Odstęp z zakresu podwójnego kliknięcia to podwójne kliknięcie, a licznik podwójnych kliknięć rośnie wyłącznie wtedy, gdy odstęp mieści się w tym zakresie.",
            "Próg 50 milisekund jest celowo hojny. Ludzkie podwójne kliknięcia praktycznie nigdy nie schodzą niżej niż około 80 milisekund, a odbicie styku praktycznie nigdy nie przekracza około 30 milisekund, więc obie populacje się nie pokrywają, a granica spokojnie mieści się w pustej przestrzeni między nimi.",
            "Test pokazuje też najmniejszy odstęp zmierzony w trakcie sesji. Ta jedna liczba zwykle rozstrzyga sprawę bez żadnej interpretacji: najmniejszy odstęp rzędu pojedynczych milisekund oznacza drganie styków, a odstęp rzędu setek milisekund oznacza, że twoje podwójne kliknięcia są prawdziwe.",
          ],
        },
        {
          heading: "Co z tym faktycznie zrobić",
          paragraphs: [
            "Jeśli drganie jest niewielkie, naprawą bywa zwykle czyszczenie. Sprężone powietrze albo miękka szczoteczka usuwają kurz, a preparat do czyszczenia styków, sprzedawany do kontaktów elektrycznych, rozpuszcza tlenek, który sprawia, że zadrapaniony kontakt odbija. Serwisowanie styków jest tanie, a zużyty styk często da się w ten sposób doprowadzić do działania.",
            "Jeśli styk jest uszkodzony mechanicznie, trzeba go wymienić. Mysz z wymiennymi stykami, co jest częste wśród modeli przeznaczonych do naprawy, to pięciominutowa robota przy lutownicy; sam mikroprzełącznik jest elementem tanim i łatwo dostępnym. Mysz ze stykiem zaplombowanym to inna sprawa, a wtedy właściwym pytaniem jest, czy w ogóle warto ją naprawiać.",
            "Warto też znać obejście programowe, bo ono myli. Obniżenie progu podwójnego kliknięcia w systemie operacyjnym. Ustawienie progu na minimum sprawia, że system przestaje traktować odbicie trwające 6 milisekund jako podwójne kliknięcie. Działa, i to jest naprawdę złe rozwiązanie, bo jednocześnie utrudnia wykonywanie prawdziwych podwójnych kliknięć. Każda aplikacja, nie tylko ta, która zachowywała się nieprawidłowo, dostaje teraz ciaśniejsze okno podwójnego kliknięcia. Traktuj to jako sposób na sprawdzenie diagnozy, a nie jako rozwiązanie.",
          ],
        },
      ],
      faqs: [
        {
          question: "Jak odróżnić drganie styków od prawdziwego podwójnego kliknięcia?",
          answer:
            "Po odstępie między dwoma naciśnięciami. Prawdziwe podwójne kliknięcie to dwa pełne cykle naciśnięcia i zwolnienia, zwykle 80 do 300 milisekund od siebie. Drganie styków to jedno naciśnięcie z dodatkowym kontaktem w środku, zwykle 1 do 30 milisekund od siebie. Test przycisków myszy mierzy ten odstęp i pokazuje go.",
        },
        {
          question: "Czy prawdziwe podwójne kliknięcie bywa na tyle szybkie, żeby wyglądać jak drganie styków?",
          answer:
            "Nie. Nawet najszybsze celowe podwójne kliknięcie zostawia odstęp rzędu 80 milisekund, bo palec musi najpierw puścić przycisk i do niego wrócić. Drganie styków dzieje się w pojedynczych milisekundach, czyli szybciej, niż styk jest w stanie fizycznie się poruszyć. Te dwa przypadki nigdy się nie pokrywają.",
        },
        {
          question: "Moja mysz klika podwójnie tylko w jednym programie. Nadal to mysz?",
          answer:
            "Prawie na pewno. Program jest zwykle jedynym, który traktuje podwójne kliknięcie jako istotną akcję, więc właśnie on ujawnia usterkę. Mysz należy sprawdzić w zwykłym edytorze tekstu i w przeglądarce: jeśli drganie styków pojawi się i tam, problem leży w sprzęcie, a nie w programie.",
        },
        {
          question: "Czy ustawienie szybkości podwójnego kliknięcia w systemie operacyjnym ma znaczenie?",
          answer:
            "To ono decyduje, co liczy się jako podwójne kliknięcie, i właśnie ten próg powoduje, że drganie styków jest zgłaszane jako podwójne kliknięcie. Obniżenie ustawienia sprawia, że drganie trudniej wywołać, ale prawdziwe podwójne kliknięcia też są trudniejsze, więc to sposób na sprawdzenie diagnozy, a nie naprawa.",
        },
        {
          question: "Czy mysz z drgającymi stykami grozi pożarem i czy można jej dalej używać?",
          answer:
            "Nie. Drganie to odbijający się kontakt elektryczny w obwodzie o niskim napięciu, przez który płynie ułamek ampera. Nie uszkadza myszy ani nie stanowi zagrożenia pożarowego. Kosztem są niecelowane kliknięcia i stracona praca, a nie sam sprzęt.",
        },
      ],
      toolSlug: "mouse-test",
    },
  ],
};
