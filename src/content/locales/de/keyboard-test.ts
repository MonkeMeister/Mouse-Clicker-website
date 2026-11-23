import type { ToolContent } from "../../types";

export const keyboardTest: ToolContent = {
  slug: "keyboard-test",
  name: "Tastaturtest",
  h1: "Tastaturtest",
  metaTitle: "Tastaturtest online — Jede Taste prüfen und Ghosting finden",
  metaDescription:
    "Testen Sie jede Taste Ihrer Tastatur im Browser. Erkennt nicht reagierende Tasten, klemmende Tasten und Rollover-Ghosting und zeigt den Live-Tastencode für alles, was Sie drücken. Kostenlos, ohne Installation.",
  category: "Tastatur-Tools",
  intro: [
    "Der Tastaturtest hört beim Tippen auf Ihre Tastatur und meldet jede Taste, die der Browser empfängt, samt ihrem physischen Tastencode. Drücken Sie die Tasten einzeln, um jede zu prüfen, und halten Sie dann Kombinationen, um Rollover-Ghosting zu testen — die Hardwaregrenze, die in Spielen bei schnellen Tastendrücken Eingaben verschluckt.",
    "Nichts, was Sie tippen, wird aufgezeichnet oder übertragen. Die Tasten werden auf der Seite gegen eine aktuelle Layout-Karte abgeglichen und danach verworfen.",
  ],
  steps: [
    {
      title: "Klicken Sie in das Tastenfeld, damit es den Fokus bekommt",
      body: "Das Feld braucht den Fokus, bevor es Tastaturevents empfangen kann. Klicken Sie einmal darauf und tippen Sie dann los. Ihr Browser greift normales Tippen nicht ab, solange das Feld fokussiert ist — passen Sie nur auf, nicht versehentlich in ein Eingabefeld zu schreiben.",
    },
    {
      title: "Drücken Sie die Tasten einzeln",
      body: "Arbeiten Sie sich physisch über die Tastatur, nicht alphabetisch. Drücken Sie jede Taste, prüfen Sie, ob das Feld aufleuchtet, und merken Sie sich jede Taste, die dunkel bleibt — das ist die Taste, die nicht funktioniert.",
    },
    {
      title: "Prüfen Sie auf klemmende Tasten",
      body: "Drücken Sie eine Taste und lassen Sie sie wieder los. Zeigt das Feld sie weiterhin als gedrückt an, ist die Taste mechanisch klemmengeblieben oder die Tastatur registriert das Loslassen nicht.",
    },
    {
      title: "Testen Sie das Rollover mit Kombinationen",
      body: "Halten Sie drei oder vier Tasten gleichzeitig und achten Sie darauf, ob eine vierte Taste aufleuchtet, obwohl Sie sie nicht gedrückt haben. Diese Geistertaste verrät Ihnen exakt, wie viele gleichzeitige Drücke Ihre Tastatur verarbeitet.",
    },
  ],
  sections: [
    {
      heading: "Was Tastencodes bedeuten und warum sie wichtig sind",
      paragraphs: [
        "Jedes Tastaturevent trägt zwei Kennungen. Der Key Value ist das Zeichen, das die Taste je nach aktiver Belegung erzeugt — auf einer französischen AZERTY-Tastatur liefert die mit Q beschriftete Taste ein a. Der Code ist dagegen die physische Position dieser Taste auf der Tastatur, unabhängig von der Belegung: Dieselbe physische Taste meldet immer denselben Code.",
        "Für den Test zählt der Code. Er bleibt über alle Belegungen hinweg stabil, das bedeutet: Eine defekte Taste meldet in jeder Sprache denselben Fehler, und das Tool kann ein genaues Abbild der Tastaturbelegung zeichnen, die Sie tatsächlich verwenden.",
        "Auch das Repeat-Flag ist einen Blick wert. Eine gehaltene Taste erzeugt ein keydown, gefolgt von einer Serie von keydown-Events, die als Wiederholung markiert sind, und schließlich einem einzelnen keyup. Eine Taste, die nie ein keyup sendet, ist das, was der Test als klemmende Taste bezeichnet — sie lässt in jeder Anwendung, in der Sie gerade arbeiten, einen Buchstaben endlos wiederholen.",
      ],
    },
    {
      heading: "Rollover und Ghosting, richtig erklärt",
      paragraphs: [
        "Jede Tastatur besitzt eine Hardware-Matrix: ein Gitter aus Zeilen und Spalten, das miteinander verdrahtet ist, mit einem Schalter an jedem Kreuzungspunkt. Wenn Sie eine Taste drücken, verbindet sie eine Zeile mit einer Spalte. Der Controller kann nur die verbundenen Zeilen und Spalten erkennen, und er kann nur eine begrenzte Anzahl von Verbindungen gleichzeitig auslesen.",
        "Eine vollformatige mechanische Tastatur mit ordentlichem Controller verarbeitet in der Regel sechs oder mehr Tasten gleichzeitig, oft noch mehr. Eine günstigere Tastatur, eine Laptop-Tastatur oder eine Folientastatur schafft oft nur drei. Drücken Sie eine vierte Taste, liest der Controller ein zweites, unbeabsichtigtes Zeilen-Spalten-Paar als verbunden — und erzeugt so eine Geistertaste, die Sie nie gedrückt haben.",
        "Der Test zeigt das direkt: Halten Sie die Tasten, die Sie für eine schnelle Spielbewegung brauchen, und sehen Sie, welche zusätzliche Taste erscheint. Erscheint bei drei Tasten eine Geistertaste, ist das das tatsächliche Rollover-Limit Ihrer Tastatur, und keine Softwareeinstellung hebt es an.",
      ],
    },
    {
      heading: "Häufige Tastaturfehler und ihre Ursachen",
      paragraphs: [
        "Eine einzelne nicht reagierende Taste ist fast immer ein ausgefallener Schalter. Tastenschalter werden auf eine Lebensdauer in Millionen von Betätigungen ausgelegt, und eine stark genutzte Taste — oft eine, auf der während eines Spiels ein Finger ruht — verschleißt weit vor dem Rest der Tastatur. Erzeugt die Taste gar kein Event und tut das über Neustarts hinweg zuverlässig, ist der Schalter ausgefallen. Ersatzschalter kosten kaum etwas, und die meisten Laptop-Tastaturen lassen sich öffnen, wenn Sie dabei nicht zögern.",
        "Eine Taste, die bei einem Druck zweimal auslöst, prellt — das Tastaturäquivalent zum Zurückschlagen eines Mausschalters. Es entsteht durch denselben Verschleißmechanismus und erzeugt in Spielen unbeabsichtigte Wiederholungen.",
        "Eine Taste, die unten hängen bleibt, ihr Loslassen aber meldet, hat meist Schmutz zum Verursacher: eine Krümel, ein Getränk oder Staub, der im Mechanismus festklemmt. Mehrfaches Drücken der Taste und anschließendes Reinigen unter der Tastekappe bringt sie oft ohne jede Demontage wieder in Ordnung.",
        "Prellen, das viele Tasten gleichzeitig betrifft — besonders über eine ganze Zeile oder Spalte — deutet auf ein Problem im Controller oder in der Firmware hin, nicht auf einzelne Schalter. Das bedeutet in der Regel ein Treiberupdate, einen Reset oder den Austausch der gesamten Tastatur.",
      ],
    },
    {
      heading: "Was Sie prüfen sollten, bevor Sie die Hardware beschuldigen",
      paragraphs: [
        "Schnelltasten und Filtertasten sind Bedienungshilfen, die unter Windows standardmäßig aktiviert sind und versehentlich eingeschaltet werden, wenn Sie fünfmal die Umschalt-Taste drücken. Ist die Funktion „Schnelltasten“ aktiv, verhält sich ein einzelner Tastendruck so, als hätten Sie die Taste gehalten, und sie scheint zu wiederholen. Schalten Sie die Option in den Tastatureinstellungen ab, und das Problem ist sofort erledigt.",
        "Unter macOS können die Einstellungen für langsame Tasten und für die Tastenwiederholung dazu führen, dass sich Tasten träge anfühlen, wenn die Verzögerung zu lang eingestellt ist. Beides ist unter Tastatureinstellungen anpassbar.",
        "Eine Neubelegung auf Anwendungsebene ist eine weitere häufige Ursache. Software wie Maus- und Tastatur-Belegungswerkzeuge, Stream-Overlays und manche Bedienungshilfen fangen Tasten ab, bevor die Anwendung sie sieht. Funktioniert eine Taste überall, außer in einem bestimmten Programm, ist das Programm schuld.",
      ],
    },
  ],
  faqs: [
    {
      question: "Wie teste ich jede Taste meiner Tastatur?",
      answer:
        "Klicken Sie in das Tastenfeld, damit es den Fokus bekommt, und drücken Sie die Tasten physisch über die ganze Tastatur. Jeder Druck lässt die passende Taste in der Abbildung aufleuchten und zeigt ihren Tastencode. Arbeiten Sie sich nach dem Layout und nicht alphabetisch vor, damit Sie keine Taste überspringen.",
    },
    {
      question: "Was ist Tastatur-Ghosting und wie teste ich es?",
      answer:
        "Ghosting liegt vor, wenn die Tastatur eine Taste meldet, die Sie nicht gedrückt haben, weil ihre Hardware-Matrix nicht alle gleichzeitig gehaltenen Tasten auslesen kann. Halten Sie im Testfeld drei oder vier Tasten zusammen — jede zusätzlich aufleuchtende Taste ist ein Geist.",
    },
    {
      question: "Wie viele gleichzeitige Tasten sind fürs Gaming gut?",
      answer:
        "Sechs oder mehr gleichzeitige Tasten sind für die meisten Wettkampfspiele angenehm, vollformatige mechanische Tastaturen mit gutem Controller schaffen oft noch mehr. Drei ist das absolute Minimum und der Bereich, in dem bei schnellen Kombinationen das Ghosting beginnt.",
    },
    {
      question: "Warum funktioniert eine meiner Tasten nicht?",
      answer:
        "Erzeugt die Taste gar kein Event, ist höchstwahrscheinlich der Schalter ausgefallen — einzelne Schalter verschleißen, und die stark genutzten zuerst. Ist die Taste mechanisch blockiert oder sendet sie ein keyup ohne keydown, ist meist Schmutz unter der Tastekappe die Ursache.",
    },
    {
      question: "Funktioniert der Tastaturtest auch mit Laptops?",
      answer:
        "Ja, aber Laptop-Tastaturen haben meist ein niedrigeres Rollover-Limit als mechanische Desktop-Tastaturen und zeigen deshalb häufiger Ghosting. Mehrere Laptop-Tasten sind zudem vom Hersteller doppelt belegt oder deaktiviert, was wie ein Fehler aussieht, obwohl keiner vorliegt.",
    },
    {
      question: "Werden meine Tastatureingaben irgendwo gespeichert?",
      answer:
        "Nein. Die Tasten werden beim Eintreffen gegen das Layout auf der Seite abgeglichen und sofort verworfen. Die Seite sendet niemals, was Sie tippen, an einen Server, und beim Schließen des Tabs bleibt nichts erhalten.",
    },
    {
      question: "Was ist der Unterschied zwischen Tastencode und Key Value?",
      answer:
        "Der Tastencode bezeichnet die physische Position der Taste und ändert sich nicht mit der Belegung. Der Key Value ist das Zeichen, das die Taste erzeugt, auf AZERTY liefert die mit Q beschriftete Taste also ein a. Der Test zeigt beides und nutzt den Code, um zu ermitteln, welche physische Taste Sie gedrückt haben.",
    },
    {
      question: "Meine Tasten wiederholen sich beim Gedrückthalten. Ist das normal?",
      answer:
        "Ja, das ist die normale Tastenwiederholung, und der Test markiert diese zusätzlichen Events als Wiederholungen und nicht als neue Tastendrücke. Wiederholt sich eine Taste weiterhin, nachdem Sie sie losgelassen haben, ist das eine klemmende Taste und untersuchenswert — meist Schmutz oder ein ausgefallener Schalter.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "polling-rate-test"],
};
