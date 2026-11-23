import type { ToolContent } from "../../types";

export const scrollTest: ToolContent = {
  slug: "scroll-test",
  name: "Test kółka myszy",
  h1: "Test kółka myszy",
  metaTitle: "Test kółka myszy — wykryj przeskakiwanie, przewijanie wstecz i niestabilność",
  metaDescription:
    "Przetestuj kółko swojej myszy w internecie. Test wykrywa przewijanie wstecz, przeskakiwane ząbki i nierówny krok, a także pokazuje, czy problem leży w kółku, w przeglądarce czy w systemie operacyjnym. Bezpłatnie i natychmiast.",
  category: "Narzędzia myszy",
  intro: [
    "Zużyte kółko przewijania rzadko przestaje działać całkowicie. Przeskakuje od czasu pojedynczy ząbek, przewija o odrobinę za daleko w jedną stronę albo skacze do tyłu w połowie długiej strony. Test kółka myszy przechwytuje każde zdarzenie kółka, które otrzymuje przeglądarka, dzięki czemu widać dokładnie, co się dzieje — zdarzenie po zdarzeniu.",
    "Najpierw warto przeprowadzić test wolno, a potem szybko, bo obie prędkości ujawniają zupełnie różne usterki. Brudny enkoder ujawnia się przy wolnym przewijaniu. Uszkodzony enkoder albo słabe połączenie bezprzewodowe na rozładowanej baterii ujawniają się przy energicznym przekręceniu kółka.",
  ],
  steps: [
    {
      title: "Wybierz czas trwania testu",
      body: "Piętnaście sekund to dobry punkt wyjścia. Dłuższy czas daje bardziej wiarygodną średnią, a tryb bez limitu pozwala utrzymać wykres włączony podczas pracy.",
    },
    {
      title: "Przewijaj równomiernie w jedną stronę",
      body: "Kursor należy ustawić nad panelem testowym i przewijać wyłącznie w dół. Panel przechwytuje kółko, więc sama strona się nie przesuwa. Przestrzeganie jednego kierunku ma znaczenie, bo zmiana kierunku w trakcie przebiegu pozbawia analizę kierunku sensu.",
    },
    {
      title: "Zmień kierunek i przewijaj w górę",
      body: "Po zakończeniu przebiegu należy uruchomić kolejny i przewijać wyłącznie w górę. Sumy dla góry i dołu pozostają oddzielne, więc kółko przesyłające sygnał tylko w jedną stronę staje się od razu widoczne.",
    },
    {
      title: "Odczytaj werdykt",
      body: "Raport sprawdza skoki wstecz, nierówny krok i niestabilność. Warto połączyć go z testem przycisków myszy, jeśli samo kółko wydaje się sprawne, a strona nadal skacze.",
    },
  ],
  sections: [
    {
      heading: "Co tak naprawdę otrzymuje przeglądarka",
      paragraphs: [
        "Przewijanie to nie jedno zdarzenie. Za każdym razem, gdy porusza się kółko, system operacyjny wysyła przeglądarce strumień pojedynczych aktualizacji, z których każda niesie deltę pionową, deltę poziomą oraz flagę jednostki. Test zapisuje ten strumień dokładnie tak, jak przychodzi.",
        "Znaczenie flagi jednostki jest większe, niż większość osób zakłada. Tryb pikseli to współczesne ustawienie domyślne i tak raportują większość nowoczesnych kółek oraz każdy trackpad. Tryb linii i tryb strony to zachowania starszego typu, a niektóre starsze sterowniki i oprogramowanie zdalnego pulpitu wciąż je wysyłają. Kółko raportujące w trybie linii nie musi być uszkodzone, ale zachowa się inaczej i może zaburzyć przewijanie w niektórych aplikacjach webowych zakładających delty pikselowe.",
        "Kierunek jest zakodowany znakiem. Dodatnia delta pionowa oznacza, że treść przesuwa się w górę, czyli tak działa przewijanie w dół. Ujemna delta oznacza przewijanie w górę. Właśnie tego znaku test szuka, wykrywając skoki wstecz.",
      ],
    },
    {
      heading: "Przewijanie wstecz i co tak naprawdę je powoduje",
      paragraphs: [
        "Skok wstecz to zdarzenie kółka, którego znak jest sprzeczny z kierunkiem, w którym przewijano. Kilka takich zdarzeń podczas szybkiego przekręcenia kółka jest normalne — system operacyjny stosuje niewielkie wygładzanie inertialne, które może lekko skorygować ostatnie zdarzenie gestu. Stały strumień takich zdarzeń podczas powolnego, celowego przewijania to już prawdziwa usterka.",
        "Najczęstszą przyczyną jest brudny lub zużyty enkoder. Enkoder to małe zębate koło z dwiema powierzchniami stykowymi, które przesuwają się obok siebie podczas obrotu. Kurz, wyschnięty smar albo wygięty ząbek powodują chwilową przerwę w styku, a urządzenie na moment zgłasza kierunek przeciwny. Czyszczenie enkodera usuwa usterkę w zdecydowanej większości przypadków.",
        "W systemie macOS warto sprawdzić, czy przypadkiem nie włączono naturalnego przewijania. Przy naturalnym przewijaniu przewinięcie w dół przesuwa treść w dół, a znak każdego zdarzenia jest odwrócony względem tego, czego oczekuje test. Jeśli ta opcja jest włączona, wystarczy odwrócić kierunek w teście, bo kółko działa idealnie.",
        "W przeglądarce przez cały przebieg należy używać jednego, stałego kierunku. Zmiana kierunku w trakcie jest oznaczana, bo daje dokładnie taki sam obraz jak drganie enkodera i w przeciwnym razie zostałaby zgłoszona jako usterka, której nie ma.",
      ],
    },
    {
      heading: "Przeskakiwane ząbki i nierówne kroki",
      paragraphs: [
        "Kółka z ząbkami raportują jeden wyraźny skok na każdy ząbek. W typowej myszy Windows to 100 lub 120 jednostek delty pionowej na ząbek, zależnie od założenia platformy dotyczącej pikseli na linię. Jeśli przewinie się w dół dziesięć ząbków powoli, a dotrą tylko osiem przyrostów, enkoder gubi kontakty.",
        "Kółka swobodnie obracające się i trackpady zachowują się inaczej i nie są uszkodzone. Generują płynny strumień wielu drobnych delt zamiast wyraźnych kroków, więc liczenie ząbków w ich przypadku nie ma sensu. Test rozpoznaje, z którym z tych dwóch wariantów ma do czynienia, i odpowiednio opisuje odczyt, zamiast punktować zdrowy trackpad jako usterkę.",
        "Niestabilność to zmienność wielkości kroku w obrębie jednego przebiegu. Niewielka jej wartość jest oczekiwana nawet w dobrym kółku, bo enkoder optyczny ma skończoną rozdzielczość, a geometria ząbków nie jest idealnie równa. Stałe, duże wahania wskazują na wygięty enkoder albo fizycznie uszkodzone kółko.",
      ],
    },
    {
      heading: "Czyszczenie kółka, które przeskakuje lub przewija wstecz",
      paragraphs: [
        "Najpierw należy całkowicie wyłączyć mysz. W myszy bezprzewodowej trzeba wyjąć baterie, a nie tylko ją wyłączyć, aby enkoder nie był trzymany pod obciążeniem przez resztkową energię.",
        "Należy zdjąć kółko myszy i nanieść 90-procentowy alkohol izopropylowy na ściereczkę bezpyłłową. Alkohol powinien wsiąknąć w koło enkodera i w szczelinę, w której enkoder styka się z płytką drukowaną. Kółko należy powoli obrócić w całym zakresie około kilkunastu razy, aby alkohol dotarł do powierzchni stykowych, a następnie pozwolić na całkowite wyschnięcie przed złożeniem. Sam sprężony powietrz zwykle wpycha zanieczyszczenia głębiej do obudowy.",
        "Jeśli kółko nadal przeskakuje po dokładnym czyszczeniu, sam enkoder jest zużyty. W myszy z częściami wymiennymi nowy enkoder jest tani i w pełni przywraca działanie kółka. W myszy z uszczelnioną obudową w tym momencie realistyczną opcją jest wymiana.",
        "Przy okazji warto sprawdzić baterię w myszy bezprzewodowej. Niskie napięcie baterii to częsta przyczyna nieregularnych zdarzeń kółka, które ustępują po wymianie baterii — warto to wykluczyć, zanim cokolwiek się otworzy.",
      ],
    },
  ],
  faqs: [
    {
      question: "Jak przetestować kółko myszy?",
      answer:
        "Kursor należy ustawić nad panelem testowym i przewijać równomiernie w jedną stronę, a następnie powtórzyć w drugą. Panel przechwytuje kółko, więc strona pozostaje nieruchoma, a zdarzenia są zapisywane. Wolna prędkość ujawnia brudny enkoder, a szybka — uszkodzony.",
    },
    {
      question: "Co oznacza skok wstecz?",
      answer:
        "To zdarzenie kółka raportujące kierunek przeciwny do przewijanego. Kilka takich zdarzeń podczas szybkiego przekręcenia kółka to normalne artefakty wygładzania. Stały strumień podczas wolnego przewijania oznacza, że styk enkodera się rozłącza i łączy ponownie, co zwykle wynika z kurzu lub zużycia enkodera i da się to naprawić czyszczeniem.",
    },
    {
      question: "Czy tym narzędziem można przetestować trackpad lub Magic Mouse?",
      answer:
        "Tak, a narzędzie pokaże, że obsługuje urządzenie gładkie, a nie kółko z ząbkami. Trackpady i swobodnie obracające się kółka nie raportują fizycznych ząbków, więc liczenie ząbków nie miałoby w nich sensu. Test mierzy ich prędkość i płynność, zamiast punktować je jako uszkodzone.",
    },
    {
      question: "Moje kółko skacze do tyłu tylko na Macu. Czy jest uszkodzone?",
      answer:
        "Prawie na pewno nie. W systemie macOS naturalne przewijanie jest domyślnie włączone i odwraca kierunek każdego zdarzenia kółka względem tego, czego oczekuje test. Wystarczy wyłączyć naturalne przewijanie w Ustawieniach systemu albo odwrócić kierunek w teście, a odczyty się ustabilizują.",
    },
    {
      question: "Dlaczego moje kółko przeskakuje tylko przy szybkim przewijaniu?",
      answer:
        "Szybkie przewijanie generuje długie, gwałtowne serie zdarzeń i daje enkoderowi mniej czasu na ustabilizowanie się między ząbkami. Kółko, które i tak jest na granicy — lekko zabrudzone albo pracujące na słabej baterii — zawodzi w takich warunkach. Warto przetestować je też wolno: jeśli przebieg wolny jest czysty, a szybki przeskakuje, to zużyty jest enkoder, a nie samo raportowanie.",
    },
    {
      question: "Czy test przewijania jest wystarczająco dokładny, by ocenić mysz?",
      answer:
        "Jest dokładny w zakresie tego, co przeglądarka może zaobserwować: kierunku, trybu jednostki, wielkości kroku, częstotliwości zdarzeń i ich powtarzalności. Nie potrafi zmierzyć fizycznej drogi obrotu kółka, więc nie poda milimetrów przewinięcia na ząbek ani stopnia zużycia mechanicznego zaczepu.",
    },
    {
      question: "Czy test działa na ekranie dotykowym?",
      answer:
        "Przewijanie dotykiem generuje zdarzenia dotykowe, a nie zdarzenia kółka, więc panel kółka pozostanie pusty na urządzeniu dotykowym. Narzędzia są przeznaczone do myszy, klawiatur i innych urządzeń wskazujących.",
    },
    {
      question: "Moje kółko przeskakuje w grach, ale nie przy normalnym użyciu. Dlaczego?",
      answer:
        "Gry często stosują własną obsługę przewijania, w tym wygładzanie i przyspieszanie, i często korzystają z surowego wejścia, które omija część przetwarzania na poziomie przeglądarki. Kółko, które jest tylko nieznacznie zużyte, może być w porządku przy normalnych prędkościach czytania, a zawodzi przy szybkich, powtarzanych ruchach typowych dla gier. Warto testować je krótkimi, powtarzanymi przekręceniami, a nie jednym wolnym przewinięciem.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "cps-test", "keyboard-test"],
};
