import type { ToolContent } from "../../types";

export const mouseTest: ToolContent = {
  slug: "mouse-test",
  name: "Mausknopf-Test",
  h1: "Mausknopf-Test",
  metaTitle: "Mausknopf-Test — Alle Tasten Ihrer Maus online prüfen",
  metaDescription:
    "Doppelklickt Ihre Maus? Testen Sie alle fünf Maustasten, das Scrollrad und das Doppelklickverhalten direkt im Browser. Erkennt tote Tasten, Doppelklick-Prellen und verlorene Klicks. Kostenlos, sofort.",
  category: "Maus-Tools",
  intro: [
    "Dieser Mausknopf-Test erfasst jeden Klick, jedes Scrollrad-Event und jeden Tastendruck, den Ihr Browser tatsächlich empfängt, und zeigt Ihnen dann, ob die Zahlen zusammenpassen. Doppelklickt Ihre Maus von selbst? Dieser Test gibt Ihnen in etwa zehn Sekunden Antwort — drücken Sie eine Taste einmal, und wenn ein Druck zwei Klicks zählt, prellt der Schalter; das Panel benennt den Fehler samt exaktem Timing. Drücken Sie im Testbereich jede Taste Ihrer echten Maus und beobachten Sie, wie die Zähler in Echtzeit hochgehen. Registriert eine Taste nichts, kommt ein Klick doppelt an oder gehen bei schnellem Klicken Drücke verloren, sagen Ihnen die Zähler das.",
    "Alles läuft lokal in Ihrem Browser und nutzt dabei standardmäßige Maus-Events. Es wird nichts heruntergeladen, keine Erweiterung installiert, kein Konto benötigt, und nichts über Ihre Klicks oder Ihre Hardware wird irgendwohin übertragen.",
  ],
  steps: [
    {
      title: "Öffnen Sie den Testbereich und bewegen Sie den Zeiger hinein",
      body: "Klicken Sie irgendwo in den grauen Bereich. Der Bereich fängt die Maus ein, sodass ein Rechtsklick kein Kontextmenü öffnet und verirrte Klicks keine Links an anderer Stelle der Seite auslösen.",
    },
    {
      title: "Drücken Sie jede Taste einzeln",
      body: "Links, rechts, Mitte und anschließend beide Daumentasten, falls Ihre Maus welche hat. Drücken Sie jede ein paar Mal, damit Sie die Zähler sauber auseinandergehen sehen. Beobachten Sie, wie die Abbildung links die passende Zone aufleuchtet.",
    },
    {
      title: "Rollen Sie das Scrollrad nach oben und danach nach unten",
      body: "Scrollen Sie das Rad langsam in eine Richtung und dann in die andere. Die Zähler für hoch und runter werden getrennt geführt — so wird ein Scrollrad, das nur eine Richtung registriert, sofort deutlich.",
    },
    {
      title: "Testen Sie einen schnellen Doppelklick auf Prellen",
      body: "Doppelklicken Sie dieselbe Taste zehn- bis zwanzigmal schnell hintereinander. Ein verschlissener Mikroschalter sendet für einen physischen Klick zwei getrennte Drücke, und der Test meldet das als Doppelklick-Fehler mit exaktem Timing.",
    },
  ],
  sections: [
    {
      heading: "So prüfen Sie, ob Ihre Maus doppelklickt",
      paragraphs: [
        "Eine Maus doppelklickt, wenn ein einziger physischer Druck zwei separate Klick-Events erzeugt. Am schnellsten finden Sie das heraus, indem Sie eine Taste einmal drücken und auf zwei Zahlen achten. Der Zähler „Gesamt“ sollte sich um genau eins erhöhen. Erhöht er sich um zwei, sendet die Taste einen Druck, den Sie nie ausgeführt haben, und das Panel schlägt eine Warnung „Doppelklick-Prellen erkannt“ an, die den Abstand zwischen den beiden Drücken in Millisekunden enthält. Dieser Abstand trennt Hardwarefehler vom Normalfall: Kontaktprellen liegt unter 40 Millisekunden, ein absichtlicher Doppelklick dagegen bei 200 Millisekunden oder mehr.",
        "Auch der Zähler „Doppel“ kann hochgehen, weil das Betriebssystem zwei echte Button-Down-Events sieht und sie als Doppelklick wertet. Genau deshalb wählt eine prellende Maus eine einzelne Datei aus und benennt sie sofort, ohne dass Sie irgendetwas zweimal angefasst haben.",
        "Führen Sie den Test in vier Durchgängen durch, um sicherzugehen. Einmal klicken und pausieren. Normal doppelklicken und prüfen, ob der Zähler „Doppel“ um genau eins steigt. Dann den Schalter strapazieren, indem Sie dieselbe Taste fünfzehn- bis zwanzigmal so schnell wie möglich doppelklicken — ein verschlissener Schalter löst den Prell-Detektor innerhalb von Sekunden aus. Zum Schluss den Test mit einer zweiten Maus oder an einem zweiten Rechner wiederholen: Folgt der Fehler der Maus, ist es Hardware; folgt er dem Rechner, ist es ein Treiber- oder Einstellungsproblem.",
        "Liegen die beiden Drücke weit genug auseinander, dass Ihr Betriebssystem sie als Doppelklick gewertet hat, liegt die Maus nicht im Argen, und die Lösung ist eine Einstellungsänderung statt einer Reparatur. Windows: Öffnen Sie die Mauseigenschaften und schieben Sie den Regler für die Doppelklickgeschwindigkeit in Richtung schneller. macOS: Passen Sie „Doppelklick-Geschwindigkeit“ in den Mauseinstellungen an. Linux: Ändern Sie das Doppelklick-Intervall in Ihren Desktop-Einstellungen. Nur Drücke, die innerhalb des 40-Millisekunden-Fensters eintreffen, sind echtes Hardware-Prellen — und diese brauchen eine Reinigung oder einen Austausch des Schalters.",
      ],
      bullets: [
        "Einzelklick-Durchgang — einmal drücken, eine Sekunde pausieren, dann erneut drücken. Ein physischer Druck muss den Zähler „Gesamt“ um genau eins erhöhen",
        "Doppelklick-Durchgang — normal doppelklicken. Der Zähler „Doppel“ sollte um eins und der Zähler „Gesamt“ um zwei steigen",
        "Belastungs-Durchgang — dieselbe Taste 15- bis 20-mal so schnell wie möglich doppelklicken. Prellen eines verschlissenen Schalters zeigt sich sofort, mit exaktem Millisekundenabstand",
        "Gegenprüfung — mit einer zweiten Maus oder an einem zweiten Rechner wiederholen, um Hardware- von Softwarefehler zu trennen",
      ],
    },
    {
      heading: "Was jeder Zähler bedeutet",
      paragraphs: [
        "Eine Maus meldet ihren Tastenzustand über eine kleine Reihe nummerierter Tasten. Ihr Browser meldet 0 für die linke Taste, 1 für die mittlere Taste, 2 für die rechte Taste und 3 und 4 für die beiden Daumentasten, die die meisten Gaming- und Ergonomie-Mäuse haben. Der Test führt jede davon in einem eigenen Zähler, sodass eine Maus mit defekter Seitentaste sofort auffällt, statt in der Gesamtsumme zu verschwinden.",
        "Die Klickzahl gesamt ist die Summe aller Tastendrücke. Weichen die Gesamtsumme und die einzelnen Zähler um mehr voneinander ab, als es der Anzahl Ihrer erinnerten Drücke entspricht, wird irgendwo etwas verworfen oder doppelt gezählt.",
        "Doppelklicks werden aus der eigenen Doppelklick-Erkennung des Browsers gezählt, die den zeitlichen Schwellwert des Betriebssystems nutzt — üblicherweise irgendwo zwischen 400 und 500 Millisekunden. Liegt Ihr Doppelklick-Zähler unter der Anzahl der ausgeführten Doppelklicks, ist vermutlich die Doppelklick-Geschwindigkeit Ihres Betriebssystems zu langsam eingestellt und nicht Ihre Maus defekt. Ein prellender Schalter kann diesen Zähler ebenfalls hochzählen, weil das Betriebssystem zwei echte Button-Down-Events als Doppelklick wertet, obwohl Sie nur einmal gedrückt haben.",
      ],
      bullets: [
        "Linksklick — die primäre Taste, mit der Sie zielen",
        "Rechtsklick — die kontextabhängige Taste; bleibt sie auf null, hat Ihr Betriebssystem sie eventuell neu belegt",
        "Mittelklick — der Druck aufs Scrollrad, öffnet in manchen Programmen auch Links in einem neuen Tab",
        "Seitentaste (Vor) und Seitentaste (Zurück) — die Daumentasten",
        "Hoch / Runter — Scrollrad-Events, je Richtung getrennt erfasst",
      ],
    },
    {
      heading: "Die drei Fehler, die dieser Test tatsächlich erkennt",
      paragraphs: [
        "Tote Taste. Der einfachste Fehler und der am leichtesten zu übersehende, weil Menschen sich einfach arrangieren, ohne es zu bemerken. Drücken Sie die rechte Taste zehnmal und der Zähler bleibt auf null, während die linke Taste sofort reagiert, dann ist der Schalter darunter tot. Kabel und USB-Anschluss sind in Ordnung, denn über dasselbe Kabel laufen alle anderen Signale.",
        "Doppelklick-Prellen. Das ist der Fehler, der schnelles Klicken in Wettkampfspielen ruiniert. Ein Mikroschalter ist ein winziger, federbelasteter Metallkontakt. Mit der Zeit bildet sich an ihm eine raue Stelle, die kurzzeitig zurückschlägt — schließt, öffnet und schließt erneut innerhalb weniger Millisekunden. Die Maus meldet dann zwei Klicks für einen physischen Druck. Das Betriebssystem deutet das als versehentlichen Doppelklick und löst eine Aktion aus, die Sie nicht wollten, etwa das Auswählen einer einzelnen Datei oder zwei Schüsse, wo Sie einen wollten.",
        "Intermittierender Ausfall. Seltener, aber schwerer zu ertragen, weil die Taste meistens funktioniert. Beim schnellen Klicken schließt der Kontakt gelegentlich nicht sauber, und der Druck geht vollständig verloren. In einem Spiel fühlt sich das an, als würde die Maus zufällig nicht registrieren. Der Test macht das sichtbar, indem er die Zahl der aufgezeichneten Drücke mit der Zahl Ihrer Klicks vergleicht.",
      ],
    },
    {
      heading: "Ist es Schalterprellen oder einfach ein schneller Doppelklick?",
      paragraphs: [
        "Nicht jeder Doppelklick-Fehler liegt an der Maus. Zeigt der Test zwei Drücke, die weniger als 40 Millisekunden auseinanderliegen, ist das Kontaktprellen — das Signal erreichte zwischen den beiden Drücken nie einen Auslösungszustand, was bedeutet, dass die Hardware sie erzeugt hat. Liegen die beiden Drücke 200 Millisekunden oder mehr auseinander und das Betriebssystem hat sie als Doppelklick registriert, ist das einfach ein schneller Doppelklick und völlig normal.",
        "Der Unterschied ist wichtig, weil die Behebung unterschiedlich ist. Prellen ist ein Hardwareproblem, das Sie durch Reinigen oder Austauschen des Schalters lösen. Ein zu langsamer Doppelklick-Schwellwert ist ein Einstellungsproblem, das Sie in den Mauseinstellungen Ihres Betriebssystems lösen. Das Panel verwendet denselben 40-Millisekunden-Schwellwert, also ist alles, was es als Prellen meldet, ein Hardwarefehler und nichts sonst.",
      ],
    },
    {
      heading: "So beheben Sie die Probleme, die dieser Test findet",
      paragraphs: [
        "Beginnen Sie bei einer toten Taste mit der einfachsten Ursache: einem schlecht sitzenden oder verbogenen Stecker. Setzen Sie den USB-Stecker neu ein, probieren Sie einen anderen Anschluss direkt am Rechner statt über einen Hub, und testen Sie die Maus an einem anderen Gerät. Ist die Taste an einem zweiten Rechner ebenfalls tot, ist der Schalter ausgefallen und die Maus muss repariert oder ersetzt werden.",
        "Bei Doppelklick-Prellen lässt sich der Schalter oft noch retten. Öffnen Sie die Maus und bringen Sie etwas Kontaktreiniger oder Schalterschmierstoff direkt auf den betroffenen Schalter, und bewegen Sie die Taste dann vielfach, um das Mittel zu verteilen. Das verlängert die Lebensdauer des Schalters, macht den Verschleiß aber nicht rückgängig. Bei einer Maus, die Sie täglich nutzen, ist der Austausch des Schalters gegen ein Ersatzteil die zuverlässigere Lösung als eine Reinigung.",
        "Registriert ein Scrollrad nur eine Richtung oder überspringt Rastungen, liegt das Problem meist am Encoder-Rad und nicht am Schalter. Schalten Sie die Maus aus, nehmen Sie die Batterien heraus und reinigen Sie den Encoder mit 90 % Isopropanol auf einem fusselfreien Tuch. Drehen Sie das Rad danach mindestens ein Dutzend Mal durch den gesamten Bereich, damit die Flüssigkeit an den Kontakt gelangt. Druckluft allein schiebt den Staub meist nur tiefer nach innen.",
        "Bei sporadisch verlorenen Klicks unter schneller Eingabe prüfen Sie, ob das Betriebssystem Zeigerbeschleunigung anwendet. Deaktivieren Sie unter Windows in den Mauseigenschaften „Zeigergenauigkeit verbessern“. Schalten Sie unter macOS die Zeigerbeschleunigung in den Einstellungen für Bedienungshilfen aus. Prüfen Sie unter Linux das Beschleunigungsprofil von libinput. Rohes, unbeschleunigtes Eingaben beseitigt eine Quelle unregelmäßiger Timings, die leicht mit einem Hardwareausfall verwechselt wird.",
      ],
    },
    {
      heading: "Was dieser Test Ihnen nicht sagen kann",
      paragraphs: [
        "Dies ist ein Browsertest, er beobachtet also die Events, die der Browser empfängt, nicht den elektrischen Zustand des Schalters. Er kann weder die Schaltlatenz messen noch die rohe DPI des Sensors auslesen oder feststellen, ob eine Polling-Rate tatsächlich 1000 Hz beträgt. Er kann auch nicht zwischen verschlissener Sensorik und verschlissenem Schalter unterscheiden, wenn beide dasselbe Symptom erzeugen.",
        "Er kann Ihnen aber das sagen, was im Alltag am wichtigsten ist: ob Maus und Computer miteinander übereinstimmen. Wenn ein physischer Druck jedes Mal genau ein Event erzeugt, erfüllt die Hardware die Bedingung, auf die sich der Rest Ihrer Software verlässt.",
      ],
    },
  ],
  faqs: [
    {
      question: "Wie teste ich meine Maustasten online?",
      answer:
        "Bewegen Sie den Zeiger in den Testbereich und drücken Sie nacheinander jede Taste — links, rechts, Mitte und beide Daumentasten, falls vorhanden. Jeder Druck erhöht seinen eigenen Zähler und lässt die passende Zone in der Mausabbildung aufleuchten. Rollen Sie anschließend das Scrollrad nach oben und unten, um beide Scrollrichtungen getrennt zu prüfen.",
    },
    {
      question: "Welche Maustasten kann dieser Tester prüfen?",
      answer:
        "Alle fünf Standardtasten: links, rechts, Mitte sowie die Vor- und Zurück-Tasten, die die meisten Gaming- und Ergonomie-Mäuse haben. Tasten jenseits dieser fünf meldet der Browser als nicht identifizierte Drücke; sie zählen also weiterhin zur Gesamtsumme, lassen sich aber keiner bestimmten Zone zuordnen.",
    },
    {
      question: "Muss ich für einen Mausknopf-Test etwas installieren?",
      answer:
        "Nein. Der Test nutzt standardmäßige Maus-Events des Browsers und läuft vollständig auf der Seite, die Sie gerade ansehen. Es gibt keinen Download, kein Plugin, keine Browser-Erweiterung und kein Konto.",
    },
    {
      question: "Wie prüfe ich, ob meine Maus doppelklickt?",
      answer:
        "Klicken Sie einmal in den Testbereich und beobachten Sie den Zähler „Gesamt“. Erhöht ein physischer Druck die Zahl um zwei Klicks, prellt der Schalter, und das Panel meldet „Doppelklick-Prellen erkannt“ samt exaktem Abstand zwischen den beiden Drücken. Drücken Sie dieselbe Taste zehn- bis zwanzigmal schnell hintereinander, damit sich ein verschlissener Schalter verrät — ein gesunder Schalter erzeugt nie zwei Drücke innerhalb von 40 Millisekunden.",
    },
    {
      question: "Doppelklickt meine Maus von selbst? Woran liegt das?",
      answer:
        "Das bedeutet, dass der Schalter unter der Taste zurückschlägt: Der Metallkontakt schließt, öffnet und schließt erneut innerhalb weniger Millisekunden, sodass die Maus für einen physischen Klick zwei Drücke meldet. Übliche Ursachen sind verschlissene Mikroschalter, Staub oder Fremdkörper in der Maus und Schäden durch wiederholtes kräftiges Klicken. Liegen die beiden Drücke mehr als 200 Millisekunden auseinander, ist das kein Prellen, sondern die Doppelklick-Geschwindigkeit Ihres Betriebssystems, die Sie in den Mauseigenschaften erhöhen können.",
    },
    {
      question: "Was bedeutet ein Doppelklick-Fehler?",
      answer:
        "Er bedeutet, dass die Maus für einen physischen Klick zwei getrennte Drücke meldet. Meist ist das Kontaktprellen eines verschlissenen Mikroschalters, bei dem der Metallkontakt ein paar Millisekunden lang zurückschlägt, bevor er sich beruhigt. Das Betriebssystem wertet das anschließend als versehentlichen Doppelklick, weshalb der Fehler in temporeichen Spielen besonders lästig ist.",
    },
    {
      question: "Mein Rechtsklick-Zähler bleibt auf null. Ist meine Maus defekt?",
      answer:
        "Nicht zwingend. Manche Betriebssysteme und Anwendungen belegen die rechte Taste neu, und ein Mittelklick, der einen Link in einem neuen Tab öffnet, kann den Browser das Kontextmenü im Testbereich unterdrücken lassen. Testen Sie die Maus an einem zweiten Rechner und prüfen Sie Ihre Mausknopf-Konfiguration in den Betriebssystemeinstellungen, bevor Sie einen Hardwareausfall annehmen.",
    },
    {
      question: "Speichert der Test irgendetwas über meine persönlichen Daten?",
      answer:
        "Nein. Klicks werden im Seitenspeicher gezählt, solange der Tab geöffnet ist, und verworfen, sobald Sie ihn schließen oder neu laden. Nichts wird an einen Server übertragen und es wird kein Profil angelegt.",
    },
    {
      question: "Funktioniert der Test mit einer kabelgebundenen und einer kabellosen Maus?",
      answer:
        "Ja. Der Browser empfängt in beiden Fällen dieselben Events, der Test verhält sich also bei kabelgebundenen Mäusen genauso wie bei Bluetooth- oder 2,4-GHz-Empfängern. Kabellose Mäuse lohnen sich aber häufiger zu testen, denn eine schwache Batterie kann Events auslassen und verzögern, was wie ein Hardwarefehler aussieht.",
    },
    {
      question: "Kann dieser Test Maus-DPI oder Latenz messen?",
      answer:
        "Nein. Die DPI stammt aus dem optischen Sensor, die Latenz aus Schalter und Abtastschleife — beides ist dem Browser nicht zugänglich. Der Polling-Rate-Test misst, wie oft der Browser Zeigeraktualisierungen empfängt; das ist eine verwandte, aber andere Größe.",
    },
    {
      question:
        "Meine Maus klickt einwandfrei, aber der Test zeigt verlorene Klicks. Was sollte ich prüfen?",
      answer:
        "Drei Dinge, in dieser Reihenfolge. Erstens die Zeigerbeschleunigung in Ihrem Betriebssystem, die unregelmäßige Timings erzeugen kann — deaktivieren Sie unter Windows „Zeigergenauigkeit verbessern“. Zweitens eine schwache Batterie oder eine schlechte Funkverbindung. Drittens Schmutz auf dem Sensor oder einen verschlissenen Schalter. Werden Klicks nur verloren, während Sie die Maus gleichzeitig bewegen, liegt das Problem eher am Sensor oder an der Verbindung als am Schalter.",
    },
  ],
  related: ["scroll-test", "cps-test", "keyboard-test", "polling-rate-test"],
};
