import type { ToolContent } from "../../types";

export const mouseTest: ToolContent = {
  slug: "mouse-test",
  name: "Test przycisków myszy",
  h1: "Test przycisków myszy",
  metaTitle: "Test przycisków myszy — sprawdź w internecie wszystkie przyciski",
  metaDescription:
    "Mysz klika podwójnie? Test przycisków myszy sprawdza w przeglądarce wszystkie pięć przycisków, kółko przewijania i zachowanie podwójnego kliknięcia. Wykrywa martwe przyciski, drganie styków i pomijane kliknięcia. Bezpłatnie, w kilka sekund.",
  category: "Narzędzia myszy",
  intro: [
    "Ten test przycisków myszy zapisuje każde kliknięcie, zdarzenie kółka i naciśnięcie przycisku, które przeglądarka faktycznie otrzymuje, a następnie pokazuje, czy liczby się zgadzają. Mysz klika podwójnie sama? Ten test odpowiada na to pytanie w około dziesięć sekund — wystarczy nacisnąć jeden przycisk raz, a jeśli jedno naciśnięcie doda dwa kliknięcia, styk drga, a panel wskaże usterkę wraz z dokładnym czasem. Warto nacisnąć każdy przycisk prawdziwej myszy w obszarze testowym i obserwować liczniki na żywo. Jeśli przycisk w ogóle się nie rejestruje, jeśli jedno kliknięcie dociera jako dwa albo jeśli przy szybkim klikaniu naciśnięcia giną, liczniki powiedzą o tym wszystkim.",
    "Wszystko działa lokalnie w przeglądarce, na standardowych zdarzeniach myszy. Nie ma pobierania, rozszerzenia, konta, a nic na temat kliknięć ani sprzętu nie jest nigdzie wysyłane.",
  ],
  steps: [
    {
      title: "Otwórz obszar testowy i przesuń tam kursor",
      body: "Należy kliknąć w dowolnym miejscu szarego panelu. Panel przechwytuje mysz, więc kliknięcie prawym przyciskiem nie otwiera menu kontekstowego, a przypadkowe kliknięcia nie uruchamiają linków w innych miejscach strony.",
    },
    {
      title: "Naciskaj każdy przycisk osobno",
      body: "Lewy, prawy, środkowy, a następnie oba przyciski kciukowe, jeśli mysz je ma. Każdy z nich warto nacisnąć kilka razy, żeby liczniki rozstały się wyraźnie. Na rysunku po lewej podświetla się wtedy odpowiednia strefa.",
    },
    {
      title: "Przewiń kółko w górę, a potem w dół",
      body: "Kółko należy przewijać powoli w jedną stronę, a następnie w drugą. Liczniki góra i dół śledzą każdy kierunek osobno, dzięki czemu kółko rejestrujące tylko jeden kierunek staje się od razu widoczne.",
    },
    {
      title: "Wykonaj szybkie podwójne kliknięcie, szukając drgania",
      body: "Ten sam przycisk należy szybko kliknąć dwukrotnie dziesięć do dwudziestu razy. Zużyty mikroprzełącznik wyśle dwa osobne naciśnięcia przy jednym fizycznym kliknięciu, a test oznaczy to jako usterkę podwójnego kliknięcia wraz z dokładnym czasem.",
    },
  ],
  sections: [
    {
      heading: "Jak sprawdzić, czy mysz klika podwójnie",
      paragraphs: [
        "Mysz klika podwójnie, gdy jedno fizyczne naciśnięcie daje dwa osobne zdarzenia kliknięcia. Najszybszy sposób, by to sprawdzić, to nacisnąć przycisk raz i obserwować dwie liczby. Licznik Razem powinien wzrosnąć dokładnie o jeden. Jeśli wzrośnie o dwa, przycisk wysyła naciśnięcie, którego nie wykonano, a panel zgłasza ostrzeżenie „Wykryto drganie styków imitujące podwójne kliknięcie” wraz z odstępem między oboma naciśnięciami w milisekundach. Ten odstęp odróżnia usterkę sprzętową od normalnego zachowania: drganie styków mieści się poniżej 40 milisekund, natomiast świadome podwójne kliknięcie to 200 milisekund lub więcej.",
        "Licznik Podwójny też może rosnąć, bo system operacyjny widzi dwa rzeczywiste zdarzenia wciśnięcia i traktuje je jako podwójne kliknięcie. Właśnie dlatego mysz z drgającym stykiem zaznacza pojedynczy plik, a potem od razu zaczyna go przemianowywać, mimo że nikt nie klikał dwa razy.",
        "Dla pewności test warto przeprowadzić w czterech przebiegach. Jedno kliknięcie i pauza. Normalne podwójne kliknięcie i sprawdzenie, czy licznik Podwójny wzrósł dokładnie o jeden. Następnie obciążenie styku przez dwukrotne kliknięcie tego samego przycisku piętnaście do dwudziestu razy tak szybko, jak to możliwe — zużyty styk uruchamia wykrywacz drgania w kilka sekund. Na koniec test należy powtórzyć z drugą myszą albo na drugim komputerze: jeśli usterka podąża za myszą, jest to sprzęt, a jeśli za komputerem — problem z sterownikiem lub ustawieniami.",
        "Jeśli oba naciśnięcia są na tyle od siebie odległe, że system operacyjny policzył je jako podwójne kliknięcie, mysz nie jest winna, a rozwiązaniem jest zmiana ustawień, a nie naprawa. Windows: należy otworzyć Właściwości myszy i przesunąć suwak szybkości podwójnego kliknięcia w stronę szybszego końca. macOS: w ustawieniach myszy należy zmienić „Szybkość podwójnego kliknięcia”. Linux: w ustawieniach pulpitu należy zmienić odstęp podwójnego kliknięcia. Tylko naciśnięcia trafiające w oknie 40 milisekund to prawdziwe drganie sprzętowe, które wymaga czyszczenia lub wymiany styku.",
      ],
      bullets: [
        "Przebieg jednokliknięciowy — nacisnąć raz, odczekać sekundę i nacisnąć ponownie. Jedno fizyczne naciśnięcie musi dodać dokładnie jeden do licznika Razem",
        "Przebieg dwukliknięciowy — kliknąć dwukrotnie normalnie. Licznik Podwójny powinien wzrosnąć o jeden, a licznik Razem o dwa",
        "Przebieg obciążeniowy — dwukrotnie kliknąć ten sam przycisk 15 do 20 razy tak szybko, jak to możliwe. Drganie zużytego styku pojawia się natychmiast, wraz z dokładnym odstępem w milisekundach",
        "Przebieg kontrolny — powtórzyć test z drugą myszą lub na drugim komputerze, aby odróżnić usterkę sprzętową od programowej",
      ],
    },
    {
      heading: "Co oznacza każdy licznik",
      paragraphs: [
        "Mysz raportuje stan przycisków przez niewielki zestaw przycisków oznaczonych numerami. Przeglądarka raportuje 0 dla lewego przycisku, 1 dla środkowego, 2 dla prawego oraz 3 i 4 dla dwóch przycisków kciukowych spotykanych w większości myszy gamingowych i ergonomicznych. Test rozdziela każdy z nich na osobny licznik, więc mysz z uszkodzonym przyciskiem bocznym jest od razu widoczna, a nie ukryta w sumie.",
        "Liczba kliknięć łącznie to suma wszystkich naciśnięć. Jeśli suma i liczniki pojedynczych przycisków różnią się o więcej niż liczba naciśnięć, które się pamięta, to gdzieś po drodze coś zostało pominięte albo powielone.",
        "Liczba podwójnych kliknięć liczona jest na podstawie własnego rozpoznawania podwójnych kliknięć przez przeglądarkę, które korzysta z progu czasowego systemu operacyjnego — zwykle gdzieś między 400 a 500 milisekundami. Jeśli liczba podwójnych kliknięć jest mniejsza niż liczba faktycznie wykonanych podwójnych kliknięć, raczej ustawienie szybkości podwójnego kliknięcia w systemie operacyjnym jest zbyt wolne, niż mysz jest uszkodzona. Drgający styk też może zwiększać ten licznik, bo system operacyjny liczy dwa rzeczywiste wciśnięcia jako podwójne kliknięcie, mimo że przycisk naciśnięto tylko raz.",
      ],
      bullets: [
        "Lewy przycisk — główny, ten, którym celuje się w ekran",
        "Prawy przycisk — przycisk kontekstowy; jeśli pozostaje na zerze, system operacyjny może go przemapować",
        "Środkowy przycisk — naciśnięcie kółka, służące też do otwierania linków w nowej karcie",
        "Przycisk boczny (do przodu) i przycisk boczny (do tyłu) — przyciski kciukowe",
        "Przewijanie w górę / w dół — zdarzenia kółka, śledzone osobno dla każdego kierunku",
      ],
    },
    {
      heading: "Trzy usterki, które ten test naprawdę wykrywa",
      paragraphs: [
        "Martwy przycisk. Najprostsza usterka i najłatwiejsza do przeoczenia, bo ludzie po prostu się do niej przyzwyczajają. Jeśli prawy przycisk zostanie naciśnięty dziesięć razy, a licznik pozostanie na zerze, podczas gdy lewy reaguje natychmiast, to styk pod spodem jest martwy. Kabel i gniazdo USB działają, bo tym samym kablem płyną wszystkie pozostałe sygnały.",
        "Drganie styków powodujące podwójne kliknięcia. To usterka, która psuje szybkie klikanie w grach konkurencyjnych. Mikroprzełącznik to maleńki sprężynowy styk metalowy. W miarę zużycia na kontakcie powstaje szarpnięte miejsce i styk na chwilę odbija — zamyka się, otwiera i zamyka ponownie w kilku milisekundach. Mysz zgłasza wtedy dwa kliknięcia przy jednym fizycznym naciśnięciu. System operacyjny interpretuje to jako przypadkowe podwójne kliknięcie i wykonuje akcję, o którą nie proszono, na przykład zaznacza pojedynczy plik albo oddaje dwa strzały zamiast jednego.",
        "Usterka sporadyczna. Rzadsza, ale trudniejsza do zniesienia, bo przycisk działa przez większość czasu. Podczas szybkiego klikania kontakt od czasu do czasu nie zamyka się czysto i naciśnięcie ginie całkowicie. W grze to sprawia wrażenie, jakby mysz losowo przestała rejestrować kliknięcia. Test ujawnia to, porównując liczbę zarejestrowanych naciśnięć z liczbą wykonanych kliknięć.",
      ],
    },
    {
      heading: "Drganie styków czy po prostu szybkie podwójne kliknięcie?",
      paragraphs: [
        "Nie każda usterka podwójnego kliknięcia jest winą myszy. Jeśli test pokazuje dwa naciśnięcia oddzielone mniej niż 40 milisekundami, to drganie styków — sygnał nie osiągnął stanu puszczenia między naciśnięciami, co oznacza, że wytworzył je sprzęt. Jeśli oba naciśnięcia są oddzielone o 200 milisekund lub więcej, a system operacyjny zarejestrował je jako podwójne kliknięcie, to po prostu szybkie podwójne kliknięcie, w pełni normalne.",
        "To rozróżnienie ma znaczenie, bo rozwiązania są różne. Drganie to problem sprzętowy, który usuwa się przez czyszczenie lub wymianę styku. Zbyt wolny próg podwójnego kliknięcia to problem ustawień, rozwiązywany w panelu sterowania myszą systemu operacyjnego. Panel używa tego samego progu 40 milisekund, więc wszystko, co oznaczy jako drganie, jest winą sprzętu i niczego innego.",
      ],
    },
    {
      heading: "Jak naprawić problemy wykryte przez ten test",
      paragraphs: [
        "W przypadku martwego przycisku warto zacząć od najprostszej przyczyny: źle osadzonego lub wygiętego złącza. Należy wyjąć i ponownie włożyć wtyczkę USB, spróbować innego gniazda bezpośrednio w komputerze, zamiast przez koncentrator USB, i sprawdzić mysz na innym urządzeniu. Jeśli przycisk pozostaje martwy na drugim komputerze, styk się zużył i mysz wymaga naprawy albo wymiany.",
        "W przypadku drgania styków styk często da się uratować. Należy otworzyć mysz i nałożyć niewielką ilość środka czyszczącego do styków lub smaru do mikroprzełączników bezpośrednio na uszkodzony styk, a następnie wielokrotnie naciskać przycisk, aby rozprowadzić preparat. Wydłuża to życie styku, ale nie cofa zużycia. W przypadku myszy używanej codziennie wymiana styku na część zamienną jest pewniejszym rozwiązaniem niż czyszczenie.",
        "W przypadku kółka, które rejestruje tylko jeden kierunek lub przeskakuje ząbki, problemem jest zwykle koło enkodera, a nie styk. Należy wyłączyć mysz, wyjąć baterie i wyczyścić enkoder 90-procentowym alkoholem izopropylowym naniesionym na ściereczkę bezpyłłową, a następnie obrócić kółko w całym zakresie kilkanaście razy, aby alkohol dotarł do kontaktu. Sam sprężony powietrz zwykle tylko wpycha kurz głębiej.",
        "W przypadku sporadycznie pomijanych kliknięć przy szybkim klikaniu warto sprawdzić, czy system operacyjny stosuje przyspieszanie wskaźnika. W Windows należy wyłączyć „Zwiększaj dokładność wskaźnika” we Właściwościach myszy. W macOS należy wyłączyć przyspieszanie wskaźnika w ustawieniach Dostępności. W Linuxie należy sprawdzić profil przyspieszenia biblioteki libinput. Surowe, nieprzyspieszane dane wejściowe usuwają źródło chaotycznych odstępów w czasie, które łatwo wziąć za awarię sprzętu.",
      ],
    },
    {
      heading: "Czego ten test nie powie",
      paragraphs: [
        "To test przeglądarkowy, więc obserwuje zdarzenia otrzymane przez przeglądarkę, a nie stan elektryczny styku. Nie zmierzy opóźnienia aktywacji styku, nie odczyta surowego DPI sensora i nie powie, czy częstotliwość odpytywania naprawdę wynosi 1000 Hz. Nie odróżni też zużytego sensora od zużytego styku, gdy oba dają te same objawy.",
        "Może jednak powiedzieć to, co w praktyce najważniejsze: czy mysz i komputer są ze sobą zgodne. Gdy jedno fizyczne naciśnięcie daje za każdym razem dokładnie jedno zdarzenie, to jest właśnie umowa, na której opiera się całe pozostałe oprogramowanie.",
      ],
    },
  ],
  faqs: [
    {
      question: "Jak przetestować przyciski myszy w internecie?",
      answer:
        "Należy przesunąć kursor do obszaru testowego i naciskać kolejno każdy przycisk — lewy, prawy, środkowy oraz oba przyciski kciukowe, jeśli są dostępne. Każde naciśnięcie zwiększa własny licznik i podświetla odpowiednią strefę na rysunku myszy. Następnie należy przewinąć kółko w górę i w dół, aby sprawdzić oba kierunki przewijania osobno.",
    },
    {
      question: "Które przyciski myszy może sprawdzić to narzędzie?",
      answer:
        "Wszystkie pięć standardowych przycisków: lewy, prawy, środkowy oraz do przodu i do tyłu, występujące w większości myszy gamingowych i ergonomicznych. Przyciski ponad tymi pięcioma przeglądarka raportuje jako naciśnięcia niezidentyfikowane, więc nadal są zliczane w sumie, choć nie można przypisać ich do konkretnej strefy.",
    },
    {
      question: "Czy do uruchomienia testu przycisków myszy trzeba coś instalować?",
      answer:
        "Nie. Test korzysta ze standardowych zdarzeń myszy przeglądarki i działa w całości na stronie, którą właśnie widać. Nie ma pobierania, wtyczki, rozszerzenia przeglądarki ani konta do założenia.",
    },
    {
      question: "Jak sprawdzić, czy mysz klika podwójnie?",
      answer:
        "Należy kliknąć raz w obszarze testowym i obserwować licznik Razem. Jeśli jedno fizyczne naciśnięcie dodaje dwa kliknięcia, styk drga, a panel zgłasza „Wykryto drganie styków imitujące podwójne kliknięcie” wraz z dokładnym odstępem między naciśnięciami. Ten sam przycisk warto nacisnąć dziesięć do dwudziestu razy w krótkim odstępie, aby zużyty styk się ujawnił — sprawny styk nigdy nie daje dwóch naciśnięć w ciągu 40 milisekund.",
    },
    {
      question: "Czy moja mysz sama klika podwójnie? Co to powoduje?",
      answer:
        "Oznacza to, że styk pod przyciskiem odbija: kontakt metalowy zamyka się, otwiera i zamyka ponownie w ciągu kilku milisekund, więc mysz raportuje dwa naciśnięcia przy jednym fizycznym kliknięciu. Najczęstsze przyczyny to zużyte mikroprzełączniki, kurz lub zanieczyszczenia wewnątrz myszy oraz szkody od wielokrotnego mocnego klikania. Jeśli oba naciśnięcia są oddzielone o więcej niż 200 milisekund, to nie drganie — to ustawienie szybkości podwójnego kliknięcia w systemie operacyjnym, które można zwiększyć we Właściwościach myszy.",
    },
    {
      question: "Co oznacza usterka podwójnego kliknięcia?",
      answer:
        "Oznacza, że mysz raportuje dwa osobne naciśnięcia przy jednym fizycznym kliknięciu. Najczęściej jest to drganie kontaktu zużytego mikroprzełącznika, gdy styk metalowy odbija przez kilka milisekund, zanim się ustabilizuje. System operacyjny traktuje to wtedy jako przypadkowe podwójne kliknięcie, dlatego usterka jest najbardziej uciążliwa w szybkich grach.",
    },
    {
      question: "Licznik prawego kliknięcia pozostaje na zerze. Czy mysz jest zepsuta?",
      answer:
        "Niekoniecznie. Niektóre systemy operacyjne i aplikacje przemapowują prawy przycisk, a kliknięcie środkowym przyciskiem, które otwiera link w nowej karcie, może sprawić, że przeglądarka zablokuje menu kontekstowe wewnątrz obszaru testowego. Zanim uzna się sprzęt za uszkodzony, warto spróbować myszy na drugim komputerze i sprawdzić konfigurację przycisków w ustawieniach systemu operacyjnego.",
    },
    {
      question: "Czy test zapisuje jakiekolwiek informacje osobiste?",
      answer:
        "Nie. Kliknięcia są liczone w pamięci samej strony, dopóki karta jest otwarta, i odrzucane w chwili jej zamknięcia albo odświeżenia. Nic nie jest przesyłane na serwer i nie powstaje żaden profil.",
    },
    {
      question: "Czy test działa z myszą przewodową i bezprzewodową?",
      answer:
        "Tak. Przeglądarka otrzymuje te same zdarzenia w obu przypadkach, więc test zachowuje się identycznie dla myszy przewodowych, Bluetooth i odbiorników bezprzewodowych 2.4 GHz. Warto jednak częściej testować myszy bezprzewodowe, bo słaba bateria potrafi powodować pomijane i opóźnione zdarzenia wyglądające identycznie jak usterki sprzętowe.",
    },
    {
      question: "Czy ten test zmierzy DPI lub opóźnienie myszy?",
      answer:
        "Nie. DPI pochodzi z sensora optycznego, a opóźnienie ze styku i pętli odpytywania, a żadna z tych wartości nie jest dostępna dla przeglądarki. Test częstotliwości odpytywania mierzy, jak często przeglądarka otrzymuje aktualizacje wskaźnika, co jest liczbą powiązaną, ale inną.",
    },
    {
      question: "Mysz klika normalnie, ale test pokazuje pomijane kliknięcia. Co sprawdzić?",
      answer:
        "Trzy rzeczy, po kolei. Po pierwsze, przyspieszanie wskaźnika w systemie operacyjnym, które może wprowadzać chaotyczne odstępy w czasie — w Windows należy wyłączyć „Zwiększaj dokładność wskaźnika”. Po drugie, słaba bateria albo słabe połączenie bezprzewodowe. Po trzecie, zanieczyszczenia na sensorem lub zużyty styk. Jeśli kliknięcia giną tylko wtedy, gdy mysz jest w ruchu, problemem jest raczej sensor albo połączenie niż styk.",
    },
  ],
  related: ["scroll-test", "cps-test", "keyboard-test", "polling-rate-test"],
};
