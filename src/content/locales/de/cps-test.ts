import type { ToolContent } from "../../types";

export const cpsTest: ToolContent = {
  slug: "cps-test",
  name: "CPS-Test",
  h1: "CPS-Test",
  metaTitle: "CPS-Test — Klicks pro Sekunde online messen",
  metaDescription:
    "Messen Sie Ihre Klicks pro Sekunde mit einem CPS-Test über 1, 5, 10, 15, 30 oder 60 Sekunden. Erhalten Sie Live-CPS, Ihren Bestwert und eine Aufschlüsselung pro Sekunde. Kostenlos, ohne Anmeldung.",
  category: "Maus-Tools",
  intro: [
    "Der CPS-Test zählt, wie oft Sie in einem festen Zeitfenster klicken, und teilt das durch die tatsächlich verstrichene Zeit — so erhalten Sie einen Klicks-pro-Sekunde-Wert. Die meisten Menschen liegen zwischen sechs und acht. Konsequentes Training und eine gute Maus bringen ambitionierte Spieler über elf, und die weltweit besten Spieler erreichen dreizehn bis fünfzehn.",
    "Wählen Sie vor dem Start Ihre Dauer. Zehn Sekunden sind der Community-Standard, weil sie lang genug sind, um in einen Rhythmus zu finden, und kurz genug, dass ein schlechter Start den Durchlauf nicht verdirbt.",
  ],
  steps: [
    {
      title: "Wählen Sie eine Testdauer",
      body: "Eine Sekunde misst die reine Schnelligkeit eines kurzen Ausbruchs. Fünf Sekunden sind ein guter Kompromiss. Zehn Sekunden sind der Standard-Benchmark, und dreißig oder sechzig Sekunden messen das anhaltende Tempo statt eines Sprints.",
    },
    {
      title: "Drücken Sie auf Start und warten Sie auf das Signal",
      body: "Der Countdown startet, sobald der Timer beginnt, Sie können sich also keinen Vorsprung verschaffen, indem Sie zu früh klicken. Bringen Sie zuerst den Zeiger über den Bereich.",
    },
    {
      title: "Klicken Sie so schnell wie möglich",
      body: "Halten Sie einen bequemen Rhythmus ein. Der schnellste dauerhafte Wert ist fast immer höher als die hektischen ersten zwei Sekunden, weil ungleichmäßiges Klicken Timer und Maus aus dem Takt geraten lässt.",
    },
    {
      title: "Vergleichen Sie die Durchläufe",
      body: "Der Test behält Ihren Bestwert und zeigt die Differenz zwischen der ersten und der zweiten Hälfte. Ein deutlicher Einbruch bedeutet, dass Sie zu schnell gestartet sind und den Rhythmus verloren haben.",
    },
  ],
  sections: [
    {
      heading: "Was CPS tatsächlich misst — und was nicht",
      paragraphs: [
        "Ein Browser zählt Maus-Events. Wenn Sie die physische Taste drücken, schließt sich der Schalter, der Controller registriert dies, und der Browser empfängt ein Klick-Event. Dieser Test misst, wie viele solcher Events Ihr Computer während des Zeitfensters empfangen hat.",
        "Er misst nicht die Schaltlatenz — die winzige Verzögerung zwischen dem physischen Schließen des Schalters und dem Eintreffen des Events. Diese Verzögerung liegt meist bei ein oder zwei Millisekunden, was vernachlässigbar klingt, bis man sie mit der Anzahl der Klicks in einer schnellen Folge multipliziert: Dann entscheidet sie darüber, ob ein Klick sitzt oder völlig verschwindet.",
        "Ebenso wenig misst er die Treffergenauigkeit im Sinne eines Schießspiels, in dem das Ziel tatsächlich unter dem Fadenkreuz liegen muss. CPS ist rein eine Rate. Zwei Spieler mit demselben CPS-Wert können in einem Spiel völlig unterschiedliche Ergebnisse erzielen, wenn nur einer von ihnen trifft, worauf er zielt.",
      ],
    },
    {
      heading: "Wie ein guter CPS-Wert aussieht",
      paragraphs: [
        "Für die meisten Menschen sind sechs bis acht Klicks pro Sekunde ein realistischer Alltagsbereich. Wer regelmäßig Wettkampf-Shooter spielt, liegt oft zwischen neun und elf. Echte Spitzenspieler, also diejenigen, die Rekorde in den Bestenlisten halten, erreichen dreizehn bis vierzehn Klicks, und ganz oben ist das noch mal ein Bruchteil eines Klicks pro Sekunde.",
        "Diese Zahlen sollte man mit einem Korn Salz nehmen. Öffentliche CPS-Bestenlisten werden meist auf einem Gerät mit Rohdaten-Eingabe und minimaler Latenz gemessen und sind häufig als ungeprüft gekennzeichnet. Ein Browsertest wird immer etwas niedriger ausfallen als eine dedizierte Benchmark-Software, vor allem wegen des Overheads bei der Event-Zustellung.",
        "Die Zahl ist weniger wichtig als der Trend. Sinkt Ihr Wert zwischen zwei Wochen um zwei oder drei Klicks pro Sekunde, hat sich etwas geändert — ein verschlissener Schalter, ein ausgelasteter Hintergrundprozess oder eine Maus, die schwerer geworden ist.",
      ],
    },
    {
      heading: "Techniken, die den Wert tatsächlich verbessern",
      paragraphs: [
        "Lockern Sie den Griff. Anspannung im Unterarm überträgt sich auf die Maus und macht die Taste schwerer schnell auslösbar. Die meisten schnellen Klicker nutzen eine leichte, rhythmische Bewegung aus dem Unterarm statt aus dem Finger.",
        "Verwenden Sie eine leichte Maus mit geringer Reibung. Eine schwerere Maus mit mehr Oberflächenreibung macht es schwerer, die Hand zwischen den Klicks in Position zu halten, und das Nachjustieren kostet Zeit.",
        "Halten Sie das Handgelenk leicht angehoben. Liegt der Handballen auf dem Tisch, entstehen Reibung und Mikro-Bewegungen, die den Rhythmus stören.",
        "Finden Sie ein gleichmäßiges Tempo und halten Sie es. Klicken in Salven fühlt sich schneller an, ergibt aber einen niedrigeren Wert. Beständigkeit über das gesamte Zeitfenster unterscheidet eine Neun von einer Zwölf.",
        "Üben Sie im echten Spiel. CPS ist trainierbar, aber das motorische Muster, das sich in einem Spiel überträgt, ist das, was Sie dort einüben — nicht das, was Sie in einem Test üben.",
      ],
    },
    {
      heading: "Warum Ihr Wert während des Durchlaufs abfällt",
      paragraphs: [
        "Fast alle klicken am Anfang. Die ersten zwei Sekunden sind schnell, weil Sie frisch und leicht adrenalingeflutet sind; dann setzt die Ermüdung ein und die Rate sinkt. Ein Durchlauf, der mit vierzehn startet und mit sieben endet, hat einen guten Durchschnitt, ist aber schlechter als einer, der konsequent elf hält.",
        "Ermüdung in der Hand ist real. Die Beugemuskeln, die die Klicktaste betätigen, ermüden, und der Klick wird langsamer. Eine leichte Maus, ein lockerer Griff und kurze Übungseinheiten verringern das.",
        "Fällt Ihr Wert scharf ab, statt allmählich nachzulassen, liegt die Ursache meist in der Mechanik: ein verschlissener Schalter, der zu prellen beginnt, oder eine Maus, die auf Ihrer Unterlage inzwischen zieht.",
      ],
    },
  ],
  faqs: [
    {
      question: "Was ist ein guter CPS-Wert?",
      answer:
        "Für die meisten Menschen sind sechs bis acht Klicks pro Sekunde normal. Regelmäßige Wettkampfspieler erreichen neun bis elf, an der Spitze der Bestenlisten liegen die Werte bei dreizehn bis vierzehn. Gemessen wird auf dedizierten Setups mit niedriger Latenz, ein Browserwert fällt daher meist etwas niedriger aus.",
    },
    {
      question: "Wie bekomme ich einen höheren CPS-Wert?",
      answer:
        "Lockern Sie den Griff und stoßen Sie den Klick aus dem Unterarm statt aus dem Finger an, nutzen Sie eine leichte Maus auf einer reibungsarmen Unterlage, und halten Sie ein gleichmäßiges Tempo statt in Salven zu klicken. Beständigkeit über das gesamte Zeitfenster bringt mehr Punkte als ein schneller Start mit anschließendem Einbruch.",
    },
    {
      question: "Welche CPS-Testdauer ist am genauesten?",
      answer:
        "Zehn Sekunden sind der Community-Standard, weil sie lang genug sind, um in einen Rhythmus zu finden, und kurz genug, dass ein langsamer Start das Ergebnis nicht dominiert. Eine Sekunde misst nur die Schnelligkeit eines kurzen Ausbruchs, sechzig Sekunden messen das anhaltende Tempo — eine andere Fähigkeit.",
    },
    {
      question: "Kann ich statt der Maus die Leertaste verwenden?",
      answer:
        "Ja. Der Tastaturtest und der CPS-Test reagieren beide auf die Leertaste, und Klicks mit der Leertaste bringen meist etwas mehr, weil die Bewegung geringer ausfällt. Es lohnt sich, beides zu testen und die Variante zu nutzen, die Sie gleichmäßiger schaffen.",
    },
    {
      question: "Warum ist mein CPS im Browser niedriger als in einer Bestenliste?",
      answer:
        "Die Event-Zustellung im Browser bringt einen kleinen Overhead mit, den ein dediziertes Werkzeug für Rohdaten-Eingaben nicht hat, und Bestenlistenwerte sind häufig ungeprüft. Betrachten Sie Browsernummern als beständiges relatives Maß für Ihren eigenen Fortschritt, nicht als absoluten Vergleich.",
    },
    {
      question: "Funktioniert der CPS-Test auf einem Trackpad?",
      answer:
        "Er funktioniert, aber Tippen auf einem Trackpad ist langsamer als ein Mausklick, die Werte fallen also niedriger aus. Manche Trackpads registrieren außerdem einen physischen Klick nur bei kräftigem Druck, was das Gefühl deutlich verändert. Nutzen Sie den Mausknopf-Test, wenn Sie unsicher sind, ob Ihr Trackpad Klicks sauber registriert.",
    },
    {
      question: "Mein CPS ist gegenüber dem Vormonat gesunken. Was sollte ich prüfen?",
      answer:
        "Gehen Sie die Punkte der Reihe nach durch: einen verschlissenen oder prellenden Schalter, veränderte Einstellungen für die Zeigerbeschleunigung, einen ausgelasteten Hintergrundprozess, der Frame-Zeit kostet, und schließlich Ermüdung oder ein verändertes Mausgewicht. Ein Rückgang um zwei oder drei Klicks pro Sekunde über mehrere Wochen ist meist mechanisch bedingt.",
    },
    {
      question: "Ist der CPS-Test kostenlos und brauche ich ein Konto?",
      answer:
        "Ja. Es gibt keine Anmeldung, keinen Download und keine Begrenzung, wie oft Sie ihn ausführen können. Die Klickzahlen existieren nur im offenen Tab und werden verworfen, wenn Sie die Seite schließen oder neu laden.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "keyboard-test", "scroll-test"],
};
