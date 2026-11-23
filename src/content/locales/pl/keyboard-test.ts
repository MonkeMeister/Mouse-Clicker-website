import type { ToolContent } from "../../types";

export const keyboardTest: ToolContent = {
  slug: "keyboard-test",
  name: "Test klawiatury",
  h1: "Test klawiatury",
  metaTitle: "Test klawiatury online — sprawdź każdy klawisz i wykryj ghosting",
  metaDescription:
    "Przetestuj każdy klawisz swojej klawiatury w przeglądarce. Narzędzie wykrywa klawisze niedziałające, zaciśnięte oraz ghosting przy wielu jednoczesnych naciśnięciach, a także pokazuje na żywo kod klawisza. Bezpłatnie, bez instalacji.",
  category: "Narzędzia klawiatury",
  intro: [
    "Test klawiatury nasłuchuje tego, co jest wprowadzane, i raportuje każdy klawisz, który przeglądarka otrzymuje, wraz z jego fizycznym kodem. Klawisze należy naciskać pojedynczo, aby sprawdzić każdy z osobna, a następnie przytrzymywać kombinacje, żeby sprawdzić ghosting przy wielu jednoczesnych naciśnięciach — to sprzętowe ograniczenie, przez które szybkie naciskanie klawiszy w grach gubi wciśnięcia.",
    "Nic z tego, co jest wprowadzane, nie jest zapisywane ani przesyłane. Klawisze są dopasowywane do aktualnej mapy układu klawiatury w obrębie strony, a następnie odrzucane.",
  ],
  steps: [
    {
      title: "Kliknij panel klawiszy, aby nadać mu fokus",
      body: "Panel musi mieć fokus, żeby mógł odbierać zdarzenia klawiszy. Należy kliknąć go raz, a potem zacząć pisać. Przeglądarka nie będzie przechwytywać zwykłego pisania, dopóki panel jest aktywny, więc trzeba uważać, żeby przypadkiem nie pisać w formularzu.",
    },
    {
      title: "Naciskaj klawisze pojedynczo",
      body: "Warto przechodzić po klawiaturze fizycznie, a nie alfabetycznie. Każdy klawisz trzeba nacisnąć, potwierdzić, że panel się podświetlił, i zapamiętać ten, który pozostaje ciemny — to właśnie ten klawisz nie działa.",
    },
    {
      title: "Sprawdź zaciśnięte klawisze",
      body: "Należy nacisnąć klawisz i puścić. Jeśli panel nadal pokazuje go jako wciśnięty, klawisz jest zaciśnięty mechanicznie albo klawiatura nie rejestruje zwolnienia.",
    },
    {
      title: "Przetestuj rollover na kombinacjach",
      body: "Należy przytrzymać naraz trzy lub cztery klawisze i obserwować, czy zapala się jakiś czwarty, który nie powinien. Ten dodatkowy klawisz to duch, a zarazem informacja o tym, ile jednoczesnych naciśnięć klawiatura jest w stanie obsłużyć.",
    },
  ],
  sections: [
    {
      heading: "Co oznaczają kody klawiszy i dlaczego są ważne",
      paragraphs: [
        "Każde zdarzenie klawisza niesie dwa identyfikatory. Wartość klawisza to to, co klawisz generuje zgodnie z aktywnym układem, więc na francuskiej klawiaturze AZERTY naciśnięcie klawisza oznaczonego literą Q daje znak a. Kod to fizyczna pozycja tego klawisza na klawiaturze, niezależnie od układu, więc ten sam klawisz zawsze zgłasza ten sam kod.",
        "W testach najważniejszy jest właśnie kod. Jest stabilny niezależnie od układu, co oznacza, że zepsuty klawisz zgłasza tę samą awarię w każdym języku, a narzędzie może dzięki temu narysować wiarygodny diagram układu, który jest naprawdę używany.",
        "Warto też znać flagę powtórzenia. Przytrzymanie klawisza daje jedno zdarzenie keydown, po którym następuje seria zdarzeń keydown oznaczonych jako powtórzenia, a na końcu pojedynczy keyup. Klawisz, który nigdy nie wysyła keyup, test nazywa zaciśniętym i będzie powtarzał literę w każdej aplikacji, w której jest używany.",
      ],
    },
    {
      heading: "Rollover i ghosting, wreszcie po ludzku",
      paragraphs: [
        "Każda klawiatura ma sprzętową matrycę: siatkę wierszy i kolumn połączonych przewodami, ze stykiem na każdym skrzyżowaniu. Naciśnięcie klawisza łączy jeden wiersz z jedną kolumną. Kontroler może wykrywać tylko te wiersze i kolumny, które są połączone, a liczba połączeń, które potrafi odczytać naraz, jest ograniczona.",
        "Pełnowymiarowa klawiatura mechaniczna z porządnym kontrolerem zwykle obsługuje sześć lub więcej klawiszy jednocześnie, często nawet więcej. Tańsza klawiatura, klawiatura laptopa albo klawiatura membranowa mogą obsłużyć tylko trzy. Po naciśnięciu czwartego klawisza kontroler odczytuje jako podłączoną drugą, niezamierzoną parę wiersz-kolumn — powstaje wtedy klawiczny duch, którego nigdy nie naciśnięto.",
        "Test pokazuje to wprost: wystarczy przytrzymać klawisze używane w szybkiej kombinacji ruchu w grze i sprawdzić, który dodatkowy klawisz się pojawi. Jeśli duch pojawia się przy trzech klawiszach, to efektywna granica rollovera tej klawiatury i żadne ustawienie oprogramowania jej nie podniesie.",
      ],
    },
    {
      heading: "Typowe usterki klawiatury i ich przyczyny",
      paragraphs: [
        "Pojedynczy niedziałający klawisz to niemal zawsze zużyty styk. Trwałość styków klawiszy podaje się w milionach naciśnięć, a klawisz intensywnie używany — często ten, na którym podczas gry opiera się palec — zużywa się znacznie wcześniej niż reszta klawiatury. Jeśli klawisz w ogóle nie generuje zdarzenia i powtarza się to konsekwentnie po ponownych uruchomieniach, styk się zużył. Zapasowe styki kosztują niewiele, a większość klawiatur laptopa można obsłużyć, jeśli komuś nie przeszkadza ich otwarcie.",
        "Klawisz, który odpala się dwa razy przy jednym naciśnięciu, to drganie — klawiaturowy odpowiednik odbijania styku myszy. Powoduje je ten sam mechanizm zużycia i daje przypadkowe powtórzenia w grach.",
        "Klawisz, który zostaje wciśnięty, ale wysyła zdarzenie zwolnienia, to zwykle zanieczyszczenia: okruchy, napar albo kurz wbity w mechanizm. Kilkukrotne naciśnięcie klawisza, a potem czyszczenie pod klawiszem często przywraca działanie bez żadnego rozbierania.",
        "Drganie obejmujące naraz wiele klawiszy, zwłaszcza w obrębie całego wiersza lub kolumny, wskazuje na problem z kontrolerem albo oprogramowaniem sprzętowym, a nie na pojedyncze styki. Zwykle oznacza to aktualizację sterownika, reset albo wymianę całej klawiatury.",
      ],
    },
    {
      heading: "Co warto sprawdzić, zanim winę zwinie się sprzętowi",
      paragraphs: [
        "Sticky keys i filter keys to funkcje ułatwień dostępu, domyślnie włączone w Windows, które można przypadkowo uruchomić, naciskając klawisz Shift pięć razy. Gdy sticky keys jest aktywne, pojedyncze naciśnięcie zachowuje się tak, jakby klawisz był przytrzymany, i litera zaczyna się powtarzać. Wyłączenie tej opcji w ustawieniach klawiatury rozwiązuje sprawę natychmiast.",
        "W systemie macOS ustawienia slow keys i powtarzania klawiszy mogą sprawiać, że klawisze reagują ospale, jeśli opóźnienie ustawiono na długi czas. Obie opcje można zmienić w ustawieniach klawiatury.",
        "Kolejną częstą przyczyną jest przemapowywanie na poziomie aplikacji. Programy takie jak narzędzia do remapowania myszy i klawiatury, nakładki strumieniowe czy niektóre ułatwienia dostępu przechwytują klawisze, zanim zobaczy je aplikacja. Jeśli klawisz działa wszędzie indziej, ale zawodzi w jednym konkretnym programie, problemem jest ten program.",
      ],
    },
  ],
  faqs: [
    {
      question: "Jak przetestować każdy klawisz klawiatury?",
      answer:
        "Należy kliknąć panel klawiszy, aby zyskał fokus, a następnie naciskać klawisze fizycznie wzdłuż całej klawiatury. Każde naciśnięcie podświetla odpowiedni klawisz na diagramie i pokazuje jego kod. Warto przechodzić po układzie, a nie alfabetycznie, aby mniej prawdopodobnie pominąć któryś klawisz.",
    },
    {
      question: "Czym jest ghosting klawiatury i jak go sprawdzić?",
      answer:
        "Ghosting to sytuacja, w której klawiatura zgłasza klawisz, którego nie naciśnięto, ponieważ jej sprzętowa matryca nie potrafi odczytać wszystkich przytrzymanych klawiszy naraz. W panelu testowym należy przytrzymać naraz trzy lub cztery klawisze — każdy dodatkowy, który się podświetli, jest duchem.",
    },
    {
      question: "Jaka liczba jednoczesnych naciśnięć jest dobra do gier?",
      answer:
        "Sześć lub więcej klawiszy jednocześnie to wygodny wynik w większości gier konkurencyjnych, a pełnowymiarowe klawiatury mechaniczne z dobrym kontrolerem często obsługują nawet więcej. Trzy to absolutne minimum i na tym poziomie w szybkich kombinacjach zaczyna się pojawiać ghosting.",
    },
    {
      question: "Dlaczego jeden z moich klawiszy nie działa?",
      answer:
        "Jeśli klawisz w ogóle nie generuje zdarzenia, najprawdopodobniej zużył się styk — pojedyncze styki się zużywają, a najczęściej używane najpierw. Jeśli klawisz jest fizycznie zaciśnięty albo wysyła keyup bez keydown, to winne są zwykle zanieczyszczenia pod klawiszem.",
    },
    {
      question: "Czy test klawiatury działa na laptopach?",
      answer:
        "Tak, ale klawiatury laptopa mają zwykle niższy limit rollovera niż desktopowe klawiatury mechaniczne, więc częściej widać na nich ghosting. Wiele klawiszy laptopa jest też zduplikowanych albo wyłączonych przez producenta, co może wyglądać na usterkę, choć nią nie jest.",
    },
    {
      question: "Czy dane o naciśniętych klawiszach są gdzieś zapisywane?",
      answer:
        "Nie. Klawisze są dopasowywane do układu widocznego na stronie w miarę napływania zdarzeń i natychmiast odrzucane. Strona nigdy nie wysyła wpisywanych znaków na serwer, a po zamknięciu karty nic nie jest zachowywane.",
    },
    {
      question: "Czym różni się kod klawisza od wartości klawisza?",
      answer:
        "Kod klawisza identyfikuje fizyczne położenie klawisza i nie zmienia się wraz z układem. Wartość klawisza to znak, który klawisz generuje, więc w układzie AZERTY klawisz oznaczony literą Q daje znak a. Test pokazuje obie wartości i na podstawie kodu ustala, który klawisz fizycznie został naciśnięty.",
    },
    {
      question: "Moje klawisze powtarzają się po przytrzymaniu. Czy to normalne?",
      answer:
        "Tak, to normalne powtarzanie klawiszy, a test oznacza te dodatkowe zdarzenia jako powtórzenia, a nie nowe naciśnięcia. Jeśli klawisz powtarza się dalej po zwolnieniu, jest zaciśnięty i warto to zbadać — zwykle chodzi o zanieczyszczenia albo zużyty styk.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "polling-rate-test"],
};
