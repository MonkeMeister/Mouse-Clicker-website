import type { ToolContent } from "../../types";

export const pollingRateTest: ToolContent = {
  slug: "polling-rate-test",
  name: "Test częstotliwości odpytywania",
  h1: "Test częstotliwości odpytywania myszy (polling rate)",
  metaTitle: "Test polling rate — zmierz częstotliwość odpytywania myszy w Hz",
  metaDescription:
    "Zmierz częstotliwość odpytywania (polling rate) swojej myszy w przeglądarce na podstawie surowych, scalonych zdarzeń wskaźnika. Sprawdź średnie Hz, szczytowe Hz i stabilność oraz dowiedz się, jaką metodę próbkowania zastosował przeglądarka.",
  category: "Narzędzia myszy",
  intro: [
    "Częstotliwość odpytywania mówi, jak często mysz raportuje swoją pozycję do komputera, i jest wyrażana w hercach. Mysz 1000 Hz raportuje pozycję tysiąc razy na sekundę, a mysz 125 Hz — sto dwadzieścia pięć razy. Test mierzy częstotliwość, którą przeglądarka faktycznie otrzymuje, i pokazuje zarówno średnią, jak i szczytową.",
    "Pomiar pochodzi z surowych zdarzeń wskaźnika, które odzyskują próbki scalane przez przeglądarkę w jedną klatkę. To ma znaczenie: bez próbkowania surowego mysz 1000 Hz na wyświetlaczu 60 lub 120 Hz odczytuje się jako 60 lub 120 Hz, a to najczęstszy błąd w przeglądarkowych testach częstotliwości odpytywania.",
  ],
  steps: [
    {
      title: "Ustaw kursor nad obszarem testowym",
      body: "Obszar musi otrzymywać ciągły ruch wskaźnika. Najczytelniejszy odczyt daje mysz spoczywająca na środku dużej podkładki i poruszana powolnymi, szerokimi ruchami po okręgu.",
    },
    {
      title: "Poruszaj myszą ciągle przez dziesięć sekund",
      body: "Nie należy przerywać ruchu. Odczyt wykonany przy nieruchomej myszy jest bez znaczenia, bo większość myszy przestaje raportować, gdy nic się nie zmienia.",
    },
    {
      title: "Sprawdź pokazaną metodę próbkowania",
      body: "Panel informuje, czy surowe, scalone zdarzenia były dostępne, czy odczyt został wykonany metodą poziomu klatek. Próbkowanie surowe jest tym, czego potrzeba, a powrót do poziomu klatek ogranicza maksymalny odczyt do częstotliwości odświeżania ekranu.",
    },
    {
      title: "Odczytaj wartość stabilności",
      body: "Mysz raportująca ze stabilną częstotliwością tworzy ciasną grupę wyników wokół wartości nominalnej. Duże wahania zwykle oznaczają problem z połączeniem, a nie inną częstotliwość.",
    },
  ],
  sections: [
    {
      heading: "Jak działa pomiar",
      paragraphs: [
        "Przeglądarki próbkują ruch wskaźnika raz na klatkę na potrzeby renderowania, ale sprzęt pod spodem raportuje znacznie częściej. Mysz 1000 Hz generuje aktualizację pozycji co milisekundę, więc w klatce 16,7 milisekundy przy 60 Hz dociera w przybliżeniu szesnaście takich aktualizacji. Przeglądarka odrzuca wszystkie oprócz ostatniej, bo są potrzebne do renderowania.",
        "API scalonych zdarzeń odzyskuje odrzucone próbki. Każde zdarzenie wskaźnika zawiera pełną listę pozycji, które zostały w nie scalone, każda z własnym znacznikiem czasu o wysokiej rozdzielczości. Podzielenie liczby próbek przez upływły czas daje rzeczywistą częstotliwość raportowania urządzenia, a nie częstotliwość ekranu.",
        "Tam, gdzie to API jest niedostępne, narzędzie przechodzi na zliczanie pojedynczych zdarzeń wskaźnika, które zawsze mogą raportować najwyżej z częstotliwością odświeżania ekranu. Panel oznacza, którą metodą powstała liczba, więc odczyt 60 Hz przy myszy 1000 Hz jest od razu rozpoznawalny jako powrót do metody klatkowej, a nie jako wolna mysz.",
      ],
    },
    {
      heading: "Typowe częstotliwości odpytywania i co są warte",
      paragraphs: [
        "125 Hz przez lata było domyślną wartością dla myszy biurowych i wciąż jest częste w tanim sprzęcie. 250 Hz i 500 Hz spotyka się na gamingowych myszach ze średniej półki. 1000 Hz to powszechny standard rywalizacyjny. 2000 Hz, 4000 Hz i 8000 Hz pojawiają się na deskach dla pasjonatów i wymagają zarówno odpowiedniej myszy, jak i przeglądarki udostępniającej surowe zdarzenia wskaźnika.",
        "Praktyczna korzyść z przejścia z 125 Hz na 1000 Hz jest realna, choć niewielka: o milisekundę lub dwie mniejsze opóźnienie wejścia, co ma znaczenie w konkurencyjnych strzelankach i jest niezauważalne w zwykłej pracy. Skok z 1000 Hz na 8000 Hz jest jeszcze mniejszy — dodatkowa korzyść to znacznie mniej niż milisekunda — i objawia się głównie wyższym zużyciem procesora i większym poborem prądu.",
        "Wyższe częstotliwości odpytywania wchodzą też w interakcje z częstotliwością klatek. Na ekranie 240 Hz mysz 1000 Hz jest próbkowana mniej więcej cztery razy na klatkę, a widoczna różnica między 1000 Hz a 4000 Hz jest minimalna, bo ekran nie jest w stanie jej pokazać.",
      ],
    },
    {
      heading: "Dlaczego odczyt może nie zgadzać się z opakowaniem",
      paragraphs: [
        "Częstotliwość raportowania jest własnością myszy, ale to, co się mierzy, to częstotliwość, z jaką komputer otrzymuje raporty. Pomiędzy nimi stoją połączenie i system operacyjny, a oba mogą obniżyć efektywną częstotliwość.",
        "Mysz bezprzewodowa 2.4 GHz w niewielkiej odległości jest zwykle stabilna. W większej odległości albo przy zakłóceniach odbiornik gubi raporty, a odczyt spada i zaczyna się wahać. Tak samo działa rozładowana bateria: mysz wtedy celowo obniża częstotliwość raportowania, by oszczędzać energię.",
        "Znaczenie mają też ustawienia odpytywania USB. Kontroler skonfigurowany na 125 Hz nie dostarczy raportów z częstotliwością 1000 Hz, niezależnie od możliwości myszy. W Windows zaawansowane właściwości głównego koncentratora USB pokazują interwał odpytywania urządzenia.",
        "Wreszcie przeszkadzać może zarządzanie energią. W Windows wyłączenie selektywnego wstrzymywania portu USB dla odpowiedniego kontrolera to częsty sposób na myszy, które gubią raporty w czasie bezczynności.",
      ],
    },
    {
      heading: "Wysokie częstotliwości odpytywania a częstotliwość klatek",
      paragraphs: [
        "Tutaj istnieje realny kompromis. Mysz raportująca z częstotliwością 8000 Hz generuje osiem tysięcy zdarzeń wskaźnika na sekundę, a każde z nich oznacza pracę dla przeglądarki i systemu operacyjnego. Na obciążonej stronie może to kosztować odczuwalną część czasu klatki.",
        "To jeden z powodów, by testować częstotliwość odpytywania na stronie, na której naprawdę się gra, a nie w odosobnieniu. Jeśli gra utrzymuje stabilną częstotliwość klatek przy myszy ustawionej na 8000 Hz, nie ma powodu jej zmieniać. Jeśli czasy klatek stają się nierówne, warto zejść do 4000 Hz i porównać. Różnica w opóźnieniu wejścia między tymi ustawieniami jest mniejsza niż różnica w płynności.",
      ],
    },
  ],
  faqs: [
    {
      question: "Jaka częstotliwość odpytywania jest dobra do gier?",
      answer:
        "1000 Hz to rozsądny cel dla większości rozgrywek konkurencyjnych. To powszechny standard, różnica w opóźnieniu względem 500 Hz jest niewielka, ale wyczuwalna, a koszt procesora pozostaje do udźwignięcia. Wyjście poza tę wartość daje malejące zyski, chyba że celuje się w konkretną grę, która z tego korzysta.",
    },
    {
      question: "Dlaczego przeglądarka pokazuje niższą częstotliwość odpytywania niż specyfikacja myszy?",
      answer:
        "Zwykle dlatego, że przeglądarka udostępniła zdarzenia wskaźnika tylko na poziomie klatek, a nie surowe i scalone, co ogranicza odczyt do częstotliwości odświeżania ekranu. Panel testowy wskazuje, której metody użyto. Jeśli zgłasza powrót do metody klatkowej, rzeczywista częstotliwość jest wyższa niż pokazana liczba.",
    },
    {
      question: "Czy 8000 Hz jest naprawdę lepsze niż 1000 Hz?",
      answer:
        "Nieznacznie, i głównie pod względem czasu klatek. Poprawa opóźnienia to ułamek milisekundy, którego niewielu graczy potrafi dostrzec. Kosztem jest osiem razy więcej zdarzeń wskaźnika na sekundę do obsłużenia przez przeglądarkę i system operacyjny, co na obciążonej stronie może wpłynąć na równomierność klatek.",
    },
    {
      question: "Jak przetestować częstotliwość odpytywania myszy?",
      answer:
        "Kursor należy ciągle poruszać nad obszarem testowym przez około dziesięć sekund. Nieruchoma mysz nie daje odczytu, bo większość myszy przestaje raportować, gdy nic się nie rusza. Szerokie, powolne ruchy po okręgu dają najczystszy wynik.",
    },
    {
      question: "Dlaczego moja częstotliwość odpytywania waha się podczas testu?",
      answer:
        "Wahania zwykle oznaczają, że raporty giną między myszą a komputerem. Najczęstsze przyczyny to słabe połączenie bezprzewodowe albo zakłócenia, rozładowana bateria powodująca obniżenie częstotliwości oraz zarządzanie energią USB wstrzymujące port. Punktem odniesienia powinno być połączenie przewodowe na krótkim kablu.",
    },
    {
      question: "Czy częstotliwość odpytywania wpływa na płynność kursora?",
      answer:
        "Wpływa na opóźnienie między ruchem ręki a reakcją gry. Widoczna płynność kursora jest ograniczona przez częstotliwość odświeżania ekranu, dlatego mysz 1000 Hz może wyglądać identycznie jak 500 Hz na ekranie 60 Hz, mimo że wejście dociera wcześniej.",
    },
    {
      question: "Czy ten test działa z myszami bezprzewodowymi?",
      answer:
        "Tak, a właśnie przy myszach bezprzewodowych odczyt jest najbardziej informacyjny. Pokaże zarówno częstotliwość nominalną, jak i to, jak stabilna ona pozostaje w czasie, dzięki czemu problem z połączeniem staje się widoczny. Stabilny odczyt 1000 Hz oznacza, że łącze działa prawidłowo.",
    },
    {
      question: "Czy mogę zwiększyć częstotliwość odpytywania myszy?",
      answer:
        "Czasami tak. Wiele gamingowych myszy ma w zestawie oprogramowanie pozwalające ustawić częstotliwość na 500, 1000 lub 8000 Hz, a niektóre mają do tego fizyczny przełącznik na spodzie. Test pokaże częstotliwość, na którą mysz jest obecnie skonfigurowana.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "keyboard-test"],
};
