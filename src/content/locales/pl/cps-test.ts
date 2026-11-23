import type { ToolContent } from "../../types";

export const cpsTest: ToolContent = {
  slug: "cps-test",
  name: "Test CPS",
  h1: "Test CPS (kliknięć na sekundę)",
  metaTitle: "Test CPS — zmierz kliknięcia na sekundę w przeglądarce",
  metaDescription:
    "Zmierz liczbę kliknięć na sekundę testem CPS o długości 1, 5, 10, 15, 30 lub 60 sekund. Sprawdź bieżące CPS, najlepszy wynik i szczegółowy rozbiór na sekundy. Bezpłatnie, bez rejestracji.",
  category: "Narzędzia myszy",
  intro: [
    "Test CPS zlicza, ile razy klika się w ustalonym czasie, i dzieli tę liczbę przez faktycznie upływiony czas, dając wynik w kliknięciach na sekundę. Większość osób mieści się między sześcioma a ośmioma. Regularne ćwiczenia i dobra mysz potrafią wywindować zapalonego gracza ponad jedenaście, a najlepsi na świecie osiągają wyniki w okolicach trzynastu.",
    "Czas trwania należy wybrać przed startem. Dziesięć sekund to standard przyjęty wśród graczy, bo jest wystarczająco długo, żeby wejść w rytm, i wystarczająco krótko, żeby zły początek nie zepsuł całego przebiegu.",
  ],
  steps: [
    {
      title: "Wybierz czas trwania testu",
      body: "Jedna sekunda mierzy czystą prędkość serii. Pięć sekund to dobry kompromis. Dziesięć sekund to standardowy benchmark, a trzydzieści lub sześćdziesiąt sekund mierzy utrzymany rytm, a nie sprint.",
    },
    {
      title: "Naciśnij przycisk rozpoczęcia i zaczekaj na sygnał",
      body: "Odliczanie zaczyna się, gdy tylko ruszy licznik, więc nie da się uzyskać przewagi przez kliknięcie przed startem. Kursor należy najpierw ustawić nad panelem.",
    },
    {
      title: "Klikaj tak szybko, jak to możliwe",
      body: "Warto utrzymać wygodny rytm. Najszybszy wynik, który da się powtarzać, jest zwykle szybszy niż gorączkowe pierwsze dwie sekundy, bo nierównomierne klikanie powoduje rozjazd licznika i ruchu myszy.",
    },
    {
      title: "Porównaj przebiegi",
      body: "Test zapamiętuje najlepszy wynik i pokazuje podział na pierwszą i drugą połowę. Duży spadek oznacza, że start był zbyt szybki i rytm się skończył.",
    },
  ],
  sections: [
    {
      heading: "Co tak naprawdę mierzy CPS, a czego nie mierzy",
      paragraphs: [
        "Przeglądarka liczy zdarzenia myszy. Kiedy naciskany jest fizyczny przycisk, styk się zamyka, kontroler to rejestruje, a przeglądarka otrzymuje zdarzenie kliknięcia. Ten test mierzy, ile takich zdarzeń komputer otrzymał w czasie pomiaru.",
        "Nie mierzy natomiast opóźnienia aktywacji styku — mikroskopijnej zwłoki między fizycznym zamknięciem styku a dotarciem zdarzenia. Ta zwłoka to zwykle milisekunda lub dwie, co brzmi jak nic, dopóki nie pomnoży się jej przez liczbę kliknięć w szybkiej serii, gdzie staje się różnicą między trafieniem pierwszego kliknięcia a całkowitym jego pominięciem.",
        "Nie mierzy też dokładności klikania w rozumieniu strzelanek, gdzie cel musi naprawdę znajdować się pod celownikiem. CPS to wyłącznie częstotliwość. Dwóch graczy z tym samym CPS może mieć zupełnie różne wyniki w grze, jeśli jeden z nich trafia w to, w co celuje.",
      ],
    },
    {
      heading: "Jak wygląda dobry wynik CPS",
      paragraphs: [
        "Dla większości osób sześć do ośmiu kliknięć na sekundę to realistyczny zakres na co dzień. Ktoś, kto regularnie gra w konkurencyjne strzelanki, często mieści się między dziewięcioma a jedenastoma. Prawdziwie elitańscy gracze, ci z rekordami w tabelach wyników, osiągają trzynaście do czternastu, a sam szczyt to ułamek kliknięcia na sekundę.",
        "Te liczby warto traktować z pewnym dystansem. Publikowane tabele CPS są zwykle mierzone na urządzeniu z surowym wejściem i minimalnym opóźnieniem, a często oznaczone jako niesprawdzone. Test w przeglądarce zawsze pokaże wynik nieco niższy niż dedykowane narzędzie benchmarkowe, głównie z powodu narzutu związanego z dostarczaniem zdarzeń.",
        "Wynik jest mniej ważny niż jego trend. Jeśli między tygodniami spada o dwa lub trzy kliknięcia na sekundę, coś się zmieniło — zużyty styk, obciążony proces w tle albo mysz, która stała się cięższa w ruchu.",
      ],
    },
    {
      heading: "Techniki, które naprawdę podnoszą wynik",
      paragraphs: [
        "Należy rozluźnić chwyt. Napięcie przedramienia przenosi się na mysz i utrudnia szybkie naciskanie przycisku. Większość szybkich klikaczy używa lekkiego, rytmicznego ruchu wywieranego przedramieniem, a nie palcem.",
        "Warto używać lekkiej myszy o małym tarciu. Cięższa mysz o większym tarciu powierzchni utrudnia utrzymanie ręki w pozycji między kliknięciami, a każde przesunięcie kosztuje czas.",
        "Nadgarstek powinien być lekko uniesiony. Oparcie pięty dłoni o biurko wprowadza tarcie i drobne mikro-ruchy, które zaburzają rytm.",
        "Warto znaleźć stałe tempo i utrzymać je. Klikanie seriami wydaje się szybsze, ale daje gorszy wynik. To powtarzalność w całym oknie czasowym odróżnia dziewięć od dwunastu.",
        "Trenować trzeba na konkretnej grze. CPS da się wytrenować, ale wzorzec ruchowy, który przenosi się do gry, to ten ćwiczony właśnie tam, a nie w teście.",
      ],
    },
    {
      heading: "Dlaczego wynik spada w trakcie przebiegu",
      paragraphs: [
        "Prawie wszyscy uprzedzają kliknięcia. Pierwsze dwie sekundy są szybkie, bo ręka jest świeża, a adrenalina dodaje kropli, potem przychodzi zmęczenie i częstotliwość spada. Przebieg, który zaczyna się od czternastu, a kończy przy siedmiu, ma dobrą średnią, ale jest gorszy niż przebieg utrzymujący równe jedenaście.",
        "Zmęczenie ręki jest realne. Mięśnie zginacze obsługujące przycisk się męczą, a kliknięcia zwalniają. Lekka mysz, rozluźniony chwyt i krótkie sesje treningowe wszystko to ograniczają.",
        "Jeśli wynik spada gwałtownie, a nie stopniowo, przyczyną jest zwykle mechanika: zużyty styk, który zaczyna drgać, albo mysz, która zaczęła stawiać opór na używanej powierzchni.",
      ],
    },
  ],
  faqs: [
    {
      question: "Jaki wynik CPS jest dobry?",
      answer:
        "Dla większości osób sześć do ośmiu kliknięć na sekundę to norma. Regularni gracze konkurencyjni osiągają dziewięć do jedenastu, a czołówka tabel wyników trzyma się trzynastu do czternastu. Liczby te mierzone są na dedykowanych stanowiskach o niskim opóźnieniu, więc odczyt z przeglądarki zwykle wypadnie nieco niżej.",
    },
    {
      question: "Jak uzyskać wyższy wynik CPS?",
      answer:
        "Należy rozluźnić chwyt i prowadzić kliknięcie przedramieniem, a nie palcem, używać lekkiej myszy na powierzchni o małym tarciu i utrzymać stałe tempo zamiast klikać seriami. Powtarzalność w całym oknie czasowym daje lepszy wynik niż szybki start i załamanie.",
    },
    {
      question: "Jaki czas trwania testu CPS jest najdokładniejszy?",
      answer:
        "Dziesięć sekund to standard przyjęty wśród graczy, bo jest wystarczająco długo, żeby wejść w rytm, i wystarczająco krótko, żeby wolny start nie zdominował wyniku. Jedna sekunda mierzy wyłącznie prędkość serii, a sześćdziesiąt sekund mierzy utrzymany rytm, co jest zupełnie inną umiejętnością.",
    },
    {
      question: "Czy zamiast myszy mogę używać spacji?",
      answer:
        "Tak. Test klawiatury i test CPS reagują na spację, a klikanie spacją zwykle daje nieco wyższy wynik, bo wymaga mniejszego ruchu. Warto przetestować oba warianty i używać tego, który daje się powtarzać bardziej równomiernie.",
    },
    {
      question: "Dlaczego mój CPS w przeglądarce jest niższy niż w tabeli wyników?",
      answer:
        "Dostarczanie zdarzeń w przeglądarce dodaje niewielki narzut, którego nie ma dedykowane narzędzie korzystające z surowego wejścia, a wyniki w tabelach bywają niesprawdzone. Liczby z przeglądarki warto traktować jako spójny, względny miernik własnych postępów, a nie porównanie bezwzględne.",
    },
    {
      question: "Czy test CPS działa na trackpadzie?",
      answer:
        "Działa, ale stukanie w trackpad jest wolniejsze niż kliknięcie myszą, więc wyniki będą niższe. Niektóre trackpady rejestrują też fizyczne kliknięcie tylko przy mocniejszym naciśnięciu, co wyraźnie zmienia wrażenia. Jeśli nie ma pewności, czy trackpad poprawnie rejestruje kliknięcia, warto skorzystać z testu przycisków myszy.",
    },
    {
      question: "Mój CPS spadł w porównaniu z zeszłym miesiącem. Co sprawdzić?",
      answer:
        "Należy przejść po kolei: zużyty lub drgający styk, zmiana ustawień przyspieszania wskaźnika, obciążony proces w tle zabierający czas klatek, a na końcu zmęczenie albo zmiana wagi myszy. Spadek o dwa lub trzy kliknięcia na sekundę w ciągu kilku tygodni zwykle ma przyczynę mechaniczną.",
    },
    {
      question: "Czy test CPS jest bezpłatny i czy potrzebuję konta?",
      answer:
        "Tak. Nie ma rejestracji, pobierania ani limitu liczby uruchomień. Liczniki kliknięć żyją wyłącznie w otwartej karcie i są odrzucane po zamknięciu albo odświeżeniu strony.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "keyboard-test", "scroll-test"],
};
