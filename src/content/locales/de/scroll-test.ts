import type { ToolContent } from "../../types";

export const scrollTest: ToolContent = {
  slug: "scroll-test",
  name: "Scrollrad-Test",
  h1: "Scrollrad-Test",
  metaTitle:
    "Scrollrad-Test — Übersprungenes Scrollen, Rückwärtsscrollen und Wackeln erkennen",
  metaDescription:
    "Testen Sie online Ihr Scrollrad. Erkennt Rückwärtsscrollen, übersprungene Rastungen und ungleichmäßige Schrittweiten und zeigt, ob Ihr Scrollrad, Ihr Browser oder Ihr Betriebssystem die Ursache ist. Kostenlos und sofort.",
  category: "Maus-Tools",
  intro: [
    "Ein verschlissenes Scrollrad hört selten komplett auf zu funktionieren. Es überspringt gelegentlich eine Rastung, scrollt in eine Richtung ein Stück zu weit oder springt auf einer langen Seite plötzlich zurück. Der Scrollrad-Test erfasst jedes Scrollrad-Event, das Ihr Browser empfängt, damit Sie Schritt für Schritt sehen, was passiert.",
    "Führen Sie den Test zuerst langsam und dann schnell aus, denn beide Geschwindigkeiten zeigen ganz unterschiedliche Fehler. Ein verschmutzter Encoder fällt bei langsamer Geschwindigkeit auf. Ein defekter Encoder oder eine schwache Funkverbindung zeigt sich, wenn Sie das Rad schnell durchdrehen.",
  ],
  steps: [
    {
      title: "Wählen Sie eine Testdauer",
      body: "Fünfzehn Sekunden sind ein guter Standard. Nutzen Sie ein längeres Zeitfenster für einen zuverlässigeren Durchschnitt, oder schalten Sie in den Dauermodus, wenn die Grafik während Ihrer Arbeit weiterlaufen soll.",
    },
    {
      title: "Scrollen Sie gleichmäßig in eine Richtung",
      body: "Platzieren Sie den Zeiger über dem Testbereich und scrollen Sie nur nach unten. Der Bereich fängt das Scrollrad ab, damit sich die Seite selbst nicht bewegt. Nur eine Richtung pro Durchgang ist wichtig, weil ein Richtungswechsel mitten im Lauf die Richtungsanalyse bedeutungslos macht.",
    },
    {
      title: "Umkehren und nach oben scrollen",
      body: "Wenn der Durchgang endet, starten Sie einen weiteren und scrollen Sie nur nach oben. Die Summen für hoch und runter bleiben getrennt, sodass ein Scrollrad, das nur in eine Richtung überträgt, sofort deutlich wird.",
    },
    {
      title: "Lesen Sie das Ergebnis",
      body: "Der Bericht prüft auf Rückwärtssprünge, ungleichmäßige Schrittweiten und Wackeln. Verbinden Sie ihn mit dem Mausknopf-Test, wenn sich das Scrollrad selbst gut anfühlt, die Seite aber weiter springt.",
    },
  ],
  sections: [
    {
      heading: "Was der Browser tatsächlich empfängt",
      paragraphs: [
        "Scrollen ist kein einzelnes Event. Jedes Mal, wenn Sie das Rad bewegen, sendet das Betriebssystem dem Browser einen Strom einzelner Aktualisierungen, jeweils mit einem vertikalen Delta, einem horizontalen Delta und einem Einheiten-Flag. Der Test zeichnet diesen Strom genau so auf, wie er eintrifft.",
        "Das Einheiten-Flag ist wichtiger, als die meisten erwarten. Der Pixel-Modus ist der moderne Standard und das Ergebnis der meisten aktuellen Scrollräder und jedes Trackpads. Der Zeilen- und der Seiten-Modus sind ältere Verhaltensweisen, die manche älteren Treiber und Remote-Desktop-Software weiterhin erzeugen. Ein Scrollrad im Zeilen-Modus ist nicht zwangsläufig defekt, fühlt sich aber anders an und kann das Scrollen in manchen Web-Apps stören, die Pixel-Deltas erwarten.",
        "Die Richtung steckt im Vorzeichen. Ein positives vertikales Delta bedeutet, dass sich der Inhalt nach oben bewegt — das passiert beim Scrollen nach unten. Ein negatives Delta bedeutet Scrollen nach oben. Genau nach diesem Vorzeichen sucht der Test, wenn er auf Rückwärtssprünge achtet.",
      ],
    },
    {
      heading: "Rückwärtsscrollen und was es tatsächlich verursacht",
      paragraphs: [
        "Ein Rückwärtssprung ist ein Scrollrad-Event, dessen Vorzeichen der Richtung widerspricht, in der Sie gerade scrollen. Einige davon bei einem schnellen Durchdrehen sind normal — das Betriebssystem glättet die Bewegung leicht und kann das letzte Event einer Geste verschieben. Ein stetiger Strom davon beim langsamen, bewussten Scrollen ist ein echter Fehler.",
        "Die übliche Ursache ist ein verschmutzter oder abgenutzter Encoder. Der Encoder ist ein kleines Zahnrad mit zwei Kontaktflächen, die beim Drehen aneinander vorbeigleiten. Staub, eingetrocknetes Schmiermittel oder ein verbogenes Zahnrad unterbrechen den Kontakt kurzzeitig, und das Gerät meldet für einen Moment die entgegengesetzte Richtung. Eine Reinigung des Encoders behebt den Fehler in der überwiegenden Mehrzahl der Fälle.",
        "Unter macOS sollten Sie prüfen, ob nicht einfach das natürliche Scrollen aktiviert wurde. Beim natürlichen Scrollen bewegt sich der Inhalt beim Scrollen nach unten nach unten, und das Vorzeichen jedes Events ist gegenüber der Testerwartung invertiert. Drehen Sie im Test die Richtung um, wenn die Option aktiviert ist — das Scrollrad arbeitet einwandfrei.",
        "Im Browser verwenden Sie für den gesamten Durchgang eine einzige, konsistente Richtung. Ein Richtungswechsel mitten im Lauf wird gemeldet, weil er exakt dieselbe Signatur wie Encoder-Prellen erzeugt und sonst als Fehler gewertet würde, den es gar nicht gibt.",
      ],
    },
    {
      heading: "Übersprungene Rastungen und ungleichmäßige Schritte",
      paragraphs: [
        "Rastungsräder melden pro Rastung einen einzelnen, diskreten Sprung. Bei einer typischen Windows-Maus sind das je nach Pixel-pro-Zeile-Annahme der Plattform 100 oder 120 Einheiten vertikales Delta. Scrollen Sie langsam zehn Rastungen nach unten und es kommen nur acht Schritte an, verliert der Encoder Kontakte.",
        "Freilaufende Scrollräder und Trackpads verhalten sich anders und sind nicht defekt. Sie erzeugen einen stetigen Strom vieler kleiner Deltas statt diskreter Schritte, weshalb das Zählen von Rastungen bei ihnen bedeutungslos ist. Der Test erkennt, womit Sie es zu tun haben, und kennzeichnet die Messung entsprechend, statt ein gesundes Trackpad als Fehler zu bewerten.",
        "Wackeln ist die Schwankung der Schrittweite innerhalb eines Durchgangs. Ein gewisses Maß ist auch bei einem guten Scrollrad zu erwarten, weil der optische Encoder eine endliche Auflösung hat und die Rastungsgeometrie nicht vollkommen gleichmäßig ausfällt. Bleibende, größere Abweichungen deuten auf einen verbogenen Encoder oder ein mechanisch beschädigtes Scrollrad hin.",
      ],
    },
    {
      heading: "Ein Scrollrad reinigen, das überspringt oder rückwärts springt",
      paragraphs: [
        "Schalten Sie die Maus zuerst vollständig aus. Bei einer kabellosen Maus nehmen Sie die Batterien heraus, statt sie nur auszuschalten, damit der Encoder nicht unter Restspannung steht.",
        "Nehmen Sie das Scrollrad heraus und tragen Sie 90 % Isopropanol auf ein fusselfreies Tuch auf. Lassen Sie die Flüssigkeit in das Encoder-Rad und in den Spalt einziehen, in dem der Encoder gegenüber der Platine sitzt. Drehen Sie das Rad langsam etwa ein Dutzend Mal durch den gesamten Bereich, damit der Alkohol die Kontaktflächen erreicht, und lassen Sie es dann vollständig trocknen, bevor Sie wieder zusammenbauen. Druckluft allein schiebt Schmutz eher tiefer in das Gehäuse.",
        "Springt das Scrollrad nach einer gründlichen Reinigung weiterhin, ist der Encoder selbst verschlissen. Bei einer Maus mit austauschbaren Teilen ist ein neuer Encoder günstig und stellt das Scrollrad vollständig wieder her. Bei einer geschlossenen Maus ist dies der Punkt, an dem ein Austausch realistisch wird.",
        "Prüfen Sie währenddessen auch die Batterie einer kabellosen Maus. Eine zu niedrige Batteriespannung ist eine häufige Ursache für unregelmäßige Scrollrad-Events, die sich erledigen, sobald die Batterie getauscht wird — es lohnt sich, das vor dem Öffnen auszuschließen.",
      ],
    },
  ],
  faqs: [
    {
      question: "Wie teste ich mein Scrollrad?",
      answer:
        "Platzieren Sie den Zeiger über dem Testbereich und scrollen Sie gleichmäßig in eine Richtung, wiederholen Sie das in die andere. Der Bereich fängt das Scrollrad ab, damit die Seite stehen bleibt, während die Events aufgezeichnet werden. Testen Sie langsam, um einen verschmutzten Encoder aufzudecken, und schnell, um einen defekten.",
    },
    {
      question: "Was bedeutet ein Rückwärtssprung?",
      answer:
        "Es ist ein Scrollrad-Event, das die entgegengesetzte Richtung meldet. Einige davon bei einem schnellen Durchdrehen sind normale Glättungsartefakte. Ein stetiger Strom beim langsamen Scrollen bedeutet, dass der Encoder-Kontakt abbricht und wieder schließt — meist Staub oder ein verschlissener Encoder, was sich durch Reinigen beheben lässt.",
    },
    {
      question: "Kann ich mit diesem Tool ein Trackpad oder eine Magic Mouse testen?",
      answer:
        "Ja, und das Tool meldet Ihnen, dass es mit einem stetigen Gerät statt mit einem Rastungsrad arbeitet. Trackpads und freilaufende Scrollräder melden keine physischen Rastungen, weshalb das Zählen von Rastungen bei ihnen bedeutungslos wäre. Der Test misst stattdessen Geschwindigkeit und Beständigkeit, statt sie als fehlerhaft zu bewerten.",
    },
    {
      question: "Mein Scrollrad springt nur am Mac nach hinten. Ist es defekt?",
      answer:
        "Fast sicher nicht. macOS aktiviert das natürliche Scrollen standardmäßig, was die Richtung jedes Scrollrad-Events gegenüber der Testerwartung umkehrt. Schalten Sie das natürliche Scrollen in den Systemeinstellungen aus oder drehen Sie die Richtung im Test um, dann normalisieren sich die Messwerte.",
    },
    {
      question: "Warum springt mein Scrollrad nur beim schnellen Scrollen?",
      answer:
        "Schnelles Scrollen erzeugt lange, rasche Ereignis-Salven und gibt dem Encoder weniger Zeit, sich zwischen den Rastungen zu beruhigen. Ein bereits grenzwertiges Scrollrad — leicht verschmutzt oder mit schwacher Batterie — versagt unter dieser Last. Testen Sie auch langsam: Ist der langsame Durchgang sauber und der schnelle springt, ist der Encoder verschlissen und nicht die Meldung inkonsistent.",
    },
    {
      question: "Ist der Scroll-Test genau genug, um eine Maus zu beurteilen?",
      answer:
        "Er ist genau für alles, was ein Browser beobachten kann: Richtung, Einheitenmodus, Schrittweite, Eventrate und Beständigkeit. Er kann nicht messen, wie weit sich das Rad mechanisch drehen würde, liefert also keine Millimeter je Rastung und sagt Ihnen auch nicht, wie verschlissen die mechanische Raste ist.",
    },
    {
      question: "Funktioniert der Test auf einem Touchscreen?",
      answer:
        "Touch-Scrollen erzeugt Touch-Events und keine Scrollrad-Events, das Scrollrad-Panel bleibt auf einem Touchscreen-Gerät daher leer. Die Tools richten sich an Mäuse, Tastaturen und andere Zeigegeräte.",
    },
    {
      question:
        "Mein Scrollrad springt in Spielen, aber nicht in der normalen Nutzung. Warum?",
      answer:
        "Spiele wenden häufig eine eigene Scroll-Logik an, etwa Glättung und Beschleunigung, und nutzen oft Rohdaten, die einige browserseitige Verarbeitungsschritte umgehen. Ein nur leicht verschlissenes Scrollrad kann bei normalen Lesegeschwindigkeiten in Ordnung sein und unter den schnellen, wiederholten Eingaben eines Spiels versagen. Testen Sie es mit schnellen, wiederholten Bewegungen statt mit einem einzelnen langsamen Scrollen.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "cps-test", "keyboard-test"],
};
