import type {
  AboutContent,
  ContactContent,
  HomeContent,
  PrivacyContent,
  ToolsIndexContent,
} from "../../types";

export const home: HomeContent = {
  metaTitle:
    "MouseLab — bezpłatna diagnostyka myszy, klawiatury i wskaźnika w przeglądarce.",
  metaDescription:
    "Sprawdź bezpośrednio w przeglądarce każdy przycisk, kółko, klawisz i częstotliwość kliknięć. Za darmo, bez rejestracji, bez pobierania i bez wysyłania danych z urządzenia.",
  badge: "Działa w całości w przeglądarce",
  heroTitleBefore: "Dowiedz się, co naprawdę dzieje się z",
  heroTitleHighlight: "myszą i klawiaturą",
  heroTitleAfter: ".",
  heroSubtitle:
    "Pięć bezpłatnych narzędzi diagnostycznych, które odczytują zdarzenia faktycznie docierające do komputera — każdy przycisk, każdy kierunek kółka, każdy klawisz i realną szybkość wskaźnika. Bez pobierania, bez rejestracji i bez wysyłania czegokolwiek z urządzenia.",
  ctaPrimary: "Przetestuj myszkę już teraz",
  ctaSecondary: "Zobacz wszystkie narzędzia",
  stats: [
    { term: "Bez instalacji", detail: "Działa w każdej nowoczesnej przeglądarce" },
    { term: "Bez śledzenia", detail: "Liczniki zostają w karcie" },
    { term: "Natychmiast", detail: "Wyniki na bieżąco" },
  ],
  tester: {
    heading: "Test przycisków myszy",
    description:
      "Należy nacisnąć każdy przycisk myszy w panelu poniżej i obserwować, jak zmieniają się liczniki. Kliknięcie prawym przyciskiem jest przechwytywane, więc menu się nie otworzy, a każdy przycisk, który się nie zarejestruje, ujawni natychmiast.",
    linkLabel: "Pełny opis i FAQ →",
  },
  allTools: {
    heading: "Wszystkie narzędzia",
    description:
      "Każde z nich mierzy inną część sprzętu wejściowego, a po zakończeniu wyjaśnia, co oznaczają uzyskane liczby.",
    blurbs: {
      "mouse-test":
        "Sprawdź wszystkie pięć przycisków, kółko przewijania i zachowanie podwójnego kliknięcia, a także wychwyć drganie styków.",
      "scroll-test":
        "Wychwyć przeskakiwane ząbki, przewijanie wstecz i nierówny krok, zanim kosztują one w kliknięciu w złym miejscu.",
      "keyboard-test":
        "Znajdź martwe i zaciśnięte klawisze oraz dokładną liczbę jednoczesnych naciśnięć, którą obsługuje klawiatura.",
      "cps-test":
        "Zmierz liczbę kliknięć na sekundę w czasie od 1 do 60 sekund i sprawdź, czy wynik wciąż się utrzymuje.",
      "polling-rate-test":
        "Sprawdź rzeczywistą częstotliwość raportowania myszy w Hz na podstawie surowych zdarzeń wskaźnika, a nie zgadywania po częstotliwości klatek.",
    },
  },
  why: {
    heading: "Dlaczego testować w przeglądarce",
    description:
      "Większość problemów ze sprzętem objawia się zdarzeniami, które nigdy nie dochodzą albo dochodzą dwa razy. Przeglądarka widzi dokładnie te zdarzenia, co czyni ją wyjątkowo dobrym narzędziem diagnostycznym dla usterek, z którymi ludzie faktycznie się mierzą.",
    items: [
      {
        title: "Testuje cały łańcuch",
        body: "Fizyczne naciśnięcie musi przejść przez styk, kontroler, sterownik i system operacyjny, zanim zobaczy je aplikacja. Ten test zawodzi wszędzie tam, gdzie łańcuch się przerywa, dlatego potrafi wskazać, że sprawna mysz podłączona do innego komputera sugeruje problem z oprogramowaniem, a nie ze sprzętem.",
      },
      {
        title: "Nie wymaga niczego od użytkownika",
        body: "Nie ma instalatora, sterownika, konta ani uprawnień administratora. Strona działa nawet na zamkniętym służbowym laptopie — a to właśnie tam problemy ze sprzętem ujawniają się najczęściej i gdzie nie można zainstalować żadnego narzędzia.",
      },
      {
        title: "Nie może kłamać",
        body: "Licznik zerowy dla przycisku, który na pewno został naciśnięty, to nie opinia. To brak zdarzenia, a zarazem najbardziej przydatna rzecz, jaką może przekazać diagnostyka.",
      },
    ],
  },
  faq: {
    heading: "Najczęściej zadawane pytania",
    items: [
      {
        question: "Czy te testy działają bez instalowania czegokolwiek?",
        answer:
          "Tak. Każde narzędzie korzysta ze standardowych zdarzeń przeglądarki — myszy, kółka, klawiatury i wskaźnika — więc działa na stronie, którą właśnie widać. Nie ma pobierania, rozszerzenia przeglądarki, konta ani oprogramowania do konfiguracji.",
      },
      {
        question: "Czy jakiekolwiek dane są zbierane lub wysyłane?",
        answer:
          "Nie. Kliknięcia, naciśnięcia klawiszy i zdarzenia przewijania są liczone na stronie i odrzucane w chwili zamknięcia albo odświeżenia karty. Nic nie jest przesyłane na serwer, nie powstaje profil użytkownika i nie są przechowywane żadne informacje o urządzeniu.",
      },
      {
        question: "Co tak naprawdę potrafi wykryć test w przeglądarce?",
        answer:
          "Wszystko, co przeglądarka otrzymuje: które przyciski się rejestrują, czy kółko zgłasza oba kierunki, czy kliknięcie dochodzi dwa razy, jak szybko wskaźnik raportuje swoją pozycję oraz czy klawiatura gubi naciśnięcia w kombinacjach. Test nie zajrzy do wnętrza sprzętu, więc nie zmierzy opóźnienia styków, nie odczyta DPI sensora i nie poda fizycznej drogi, o jaką obraca się ząbek kółka.",
      },
      {
        question:
          "Mysz przeskakuje strony. Od którego testu zacząć?",
        answer:
          "Najpierw od testu kółka myszy, przewijając powoli w jedną stronę. Brudny lub zużyty enkoder daje przy wolnym przewijaniu odwrócenia kierunku i nierówne kroki. Jeśli kółko czyta się czysto, a strony nadal przeskakują, kolejnym krokiem jest test przycisków myszy, który wykluczy uszkodzony styk, a także sprawdzenie, czy w systemie operacyjnym jest włączone przyspieszanie wskaźnika.",
      },
      {
        question: "Czy działa to na laptopie z trackpadem?",
        answer:
          "Tak, z jednym zastrzeżeniem. Trackpad nie zgłasza fizycznych ząbków, więc test przewijania mierzy jego prędkość i płynność zamiast liczyć ząbki. Testy klawiatury, CPS i częstotliwości raportowania działają na trackpadzie normalnie, choć fizyczna mysz da bardziej wymowalny wynik prędkości klikania.",
      },
      {
        question: "Czy to naprawdę jest bezpłatne?",
        answer:
          "Tak. Nie ma rejestracji, limitu użyć ani niczego do kupienia. Serwis utrzymywany jest przez reklamy, a same reklamy umieszczane są poniżej narzędzia, więc nigdy nie zasłaniają tego, po co przybyło się na stronę.",
      },
    ],
  },
};

export const toolsIndex: ToolsIndexContent = {
  metaTitle: "Wszystkie narzędzia",
  metaDescription:
    "Wszystkie bezpłatne narzędzia diagnostyczne w MouseLab: przyciski myszy, kółko przewijania, klawiatura, prędkość klikania i częstotliwość raportowania.",
  heading: "Wszystkie narzędzia",
  intro:
    "Pięć bezpłatnych narzędzi diagnostycznych, które odczytują zdarzenia docierające do komputera. Każde działa w przeglądarce, nie wymaga instalacji i po zakończeniu wyjaśnia, co oznaczają jego liczby.",
  blurbs: {
    "mouse-test":
      "Należy nacisnąć każdy przycisk i obserwować liczniki. Test wykrywa martwe przyciski, pominięte naciśnięcia oraz drganie styków powodujące podwójne kliknięcia.",
    "scroll-test":
      "Przy równomiernym przewijaniu w jedną stronę test wskaże zdarzenia odwrotne, przeskakiwane ząbki i nierówny krok, a także poinformuje, czy to kółko z ząbkami, czy trackpad.",
    "keyboard-test":
      "Należy sprawdzić każdy klawisz, wychwycić zaciśnięte klawisze i wykonać test jednoczesnych naciśnięć, który znajdzie dokładną liczbę klawiszy, jakie klawiatura obsługuje naraz.",
    "cps-test":
      "Benchmark kliknięć na sekundę od 1 do 60 sekund z bieżącym wynikiem CPS, najlepszym wynikiem i szczegółowym rozbiciem na sekundy.",
    "polling-rate-test":
      "Mierzy rzeczywistą częstotliwość raportowania myszy w hercach na podstawie surowych, scalonych zdarzeń wskaźnika, dzięki czemu widać częstotliwość urządzenia, a nie odświeżania ekranu.",
  },
};

export const about: AboutContent = {
  metaTitle: "O nas",
  metaDescription:
    "Jak działa MouseLab, co każdy test potrafi i czego nie potrafi wykryć oraz jak traktowane są dane użytkowników.",
  heading: "O {brand}",
  lead: "Powstał zestaw narzędzi diagnostycznych działających w przeglądarce, dla osób, które podejrzewają, że ich mysz lub klawiatura zachowują się nieprawidłowo, ale nie mają sposobu, by to udowodnić. Każde narzędzie pokazuje to, co naprawdę dotarło do komputera, a każda strona wyjaśnia znaczenie tych wyników zwykłym językiem.",
  sections: [
    {
      heading: "Jak działają testy",
      paragraphs: [
        "Po naciśnięciu przycisku myszy styk wewnątrz myszy się zamyka, kontroler urządzenia rejestruje zmianę, system operacyjny ją tłumaczy, a przeglądarka na końcu otrzymuje zdarzenie. Ten sam łańcuch przebiega dla kółka, klawiatury i sensora wskaźnika. Każdy test nasłuchuje tego końcowego strumienia zdarzeń i raportuje to, co dotarło.",
        "To oznacza, że test zawodzi wszędzie tam, gdzie łańcuch się przerywa. Przycisk, o którym nic nie raportuje, wskazuje na styk, kabel, gniazdo lub sterownik. Przycisk, o którym jedno fizyczne naciśnięcie zgłasza dwa naciśnięcia, wskazuje na drganie styków. Kółko, które zmienia kierunek, wskazuje na enkoder. Pomiar jest jednoznaczny, a to właśnie czyni go użytecznym, gdy trzeba zdecydować, czy mysz wyczyścić, czy wymienić.",
      ],
    },
    {
      heading: "Czego te narzędzia nie potrafią",
      paragraphs: [
        "Wolimy powiedzieć wprost o granicach, niż pozwalać na gonienie się za problemem, którego narzędzie nigdy nie miało wykrywać.",
      ],
      bullets: [
        "Nie mierzą opóźnienia aktywacji styku. Przeglądarka widzi zdarzenie, które już dotarło, a nie moment zamknięcia metalowego kontaktu.",
        "Nie odczytują DPI sensora optycznego. Wymaga to bezpośredniego dostępu do sensora, którego platforma internetowa celowo nie udostępnia.",
        "Nie podają fizycznej drogi, o jaką obraca się ząbek kółka. Przeglądarki raportują przewinięcie w pikselach, liniach lub stronach, a nie w milimetrach.",
        "Nie uznają trackpada za uszkodzony, skoro jest po prostu urządzeniem bez ząbków. Test przewijania oznacza trackpady jako urządzenia gładkie, zamiast je punktować.",
        "Nie potwierdzają bezwzględnego stanu zdrowia sprzętu. Potwierdzają, że sprzęt i komputer są ze sobą zgodne, a to właśnie pęka w codziennym użyciu.",
      ],
    },
    {
      heading: "Jak traktowane są dane",
      paragraphs: [
        "Liczniki, czasy i odczyty klawiszy są przechowywane w pamięci otwartej karty i odrzucane przy jej zamknięciu albo odświeżeniu. Nie zapisujemy tego, co kliknięto ani co wpisano, ani żadnego identyfikatora powiązanego z urządzeniem, a systemu kont użytkowników w ogóle nie ma.",
        "Korzystamy jednak ze standardowej, przyjaznej prywatności analityki strony, żeby zobaczyć, które strony są użyteczne, a które nie. Pełne szczegóły znajdują się w {privacyPolicy}.",
      ],
    },
    {
      heading: "Jak finansowana jest strona",
      paragraphs: [
        "Reklamami. Każde narzędzie pozostaje bezpłatne i bez limitu, a reklamy umieszczamy poniżej narzędzia, a nie nad nim, więc to, po co przybyło się na stronę, nigdy nie jest wypychane z pola widzenia na rzecz reklamy. Jeśli któreś narzędzie kiedykolwiek wymagałoby płatnego wariantu, będzie to coś naprawdę dodatkowego, na przykład zapis historii albo eksport raportu, a nie podstawowy pomiar.",
      ],
    },
  ],
  privacyLinkLabel: "polityce prywatności",
};

export const contact: ContactContent = {
  metaTitle: "Kontakt",
  metaDescription:
    "Można napisać w sprawie błędu w jednym z narzędzi, prośby o nowe narzędzie diagnostyczne albo poprawki w opisach.",
  heading: "Kontakt",
  lead: "Znaleziono błąd, dostrzeżono nieścisłość albo brakuje narzędzia, którego jeszcze nie ma? Warto napisać — odpowiedź zwykle nie długo się czeka.",
  cards: [
    {
      title: "Zgłaszanie błędu",
      body: "Warto napisać, które narzędzie było w użyciu, czego oczekiwano i co się zamiast tego wydarzyło. Jeśli licznik nie ruszył się mimo oczekiwanego naciśnięcia, to najcenniejsza informacja, jaką można przekazać.",
    },
    {
      title: "Prośba o narzędzie",
      body: "Nie ma limitu tego, o co można poprosić. Diagnostyka mierząca coś, czego nikt wcześniej nie mierzył, jest dokładnie tym, co powinno się znaleźć w tym miejscu.",
    },
    {
      title: "Poprawka w opisie",
      body: "Każde wyjaśnienie w tej witrynie ma być technicznie poprawne. Jeśli fragment jest błędny, niejasny albo może kogoś skłonić do kupienia niewłaściwej części, warto o tym napisać.",
    },
  ],
  messageHeading: "Napisz wiadomość",
  messageBody:
    "Adres e-mail: {email}. Wszystkie wiadomości są czytane, a na większość odpowiadamy w ciągu kilku dni roboczych.",
  messageNote:
    "Prosimy nie przesyłać danych osobowych ani szczegółów konfiguracji urządzenia. Nic z przesłanych informacji nie jest potrzebne do zdiagnozowania narzędzia, a wolelibyśmy ich nie otrzymywać.",
};


export const privacy: PrivacyContent = {
  metaTitle: "Polityka prywatności",
  metaDescription:
    "Co MouseLab zbiera, czego nie zbiera i co dzieje się z danymi pomiarowymi powstającymi podczas testów.",
  heading: "Polityka prywatności",
  lastUpdated: "Ostatnia aktualizacja: 22 listopada 2026",
  sections: [
    {
      heading: "Dane pomiarowe zostają na urządzeniu",
      body: "Podczas testu kliknięcia, naciśnięcia klawiszy, zdarzenia przewijania i próbki wskaźnika są liczone w pamięci otwartej karty przeglądarki. Nie są przesyłane nigdzie. Zamknięcie lub odświeżenie karty trwale je usuwa. Odczytu sprzed wczoraj nie da się odzyskać, bo nigdy nie został zapisany.",
    },
    {
      heading: "Bez kont i identyfikatorów",
      body: "Nie ma rejestracji, logowania ani profilu użytkownika. Nie prosimy o adres e-mail do korzystania z narzędzia ani nie tworzymy trwałego identyfikatora powiązanego z urządzeniem lub przeglądarką na potrzeby pomiarów.",
    },
    {
      heading: "Analityka strony",
      body: "Korzystamy z analityki przyjaznej prywatności, żeby ocenić, które strony i narzędzia są użyteczne, a które wymagają poprawy. Zapisują one zbiorcze odsłonięcia stron, informacje o źródle ruchu oraz przybliżone dane o urządzeniu i kraju. Nie zapisują treści sesji testowych i nie służą do budowania profilu reklamowego.",
    },
    {
      heading: "Reklamy",
      body: "Ta strona finansowana jest reklamami. Partnerzy reklamowi mogą ustawiać pliki cookie lub korzystać z podobnych technologii, aby serwować i mierzyć reklamy. Sposób wykorzystania reklam spersonalizowanych można kontrolować w ustawieniach przeglądarki, a także za pośrednictwem opcji udostępnianych przez Google w ramach Google Ads, na stronie prywatności i warunków Google oraz w serwisie aboutads.info dla podmiotów trzecich biorących udział.",
    },
    {
      heading: "Treści zewnętrzne",
      body: "Skrypty reklamowe wczytują się dopiero po interakcji ze stroną, więc nie działają, zanim użytkownik wykaże jakiekolwiek zainteresowanie. Czcionki są serwowane z własnej domeny, więc otwierając stronę, nie wysyłane są żadne zapytania do dostawcy czcionek.",
    },
    {
      heading: "Kontakt",
      body: "W razie pytań o tę politykę lub prośby o usunięcie danych należy napisać na hello@mouselab.io, a sprawa zostanie załatwiona.",
    },
  ],
  copyright: "© {year} {brand}",
};
