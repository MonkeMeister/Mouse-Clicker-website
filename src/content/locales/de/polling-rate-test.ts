import type { ToolContent } from "../../types";

export const pollingRateTest: ToolContent = {
  slug: "polling-rate-test",
  name: "Polling-Rate-Test",
  h1: "Polling-Rate-Test",
  metaTitle: "Polling-Rate-Test — Polling-Rate Ihrer Maus in Hz messen",
  metaDescription:
    "Messen Sie die Polling-Rate Ihrer Maus im Browser anhand roher, zusammengefasster Zeiger-Events. Sehen Sie durchschnittliche Hz, Spitzwert und Stabilität und erfahren Sie, welche Messmethode Ihr Browser verwendet hat.",
  category: "Maus-Tools",
  intro: [
    "Die Polling-Rate beschreibt, wie oft Ihre Maus ihre Position an den Rechner meldet, gemessen in Hertz. Eine 1000-Hz-Maus meldet ihre Position tausendmal pro Sekunde, eine 125-Hz-Maus hundertfünfundzwanzigmal. Der Test misst die Rate, die Ihr Browser tatsächlich empfängt, und zeigt sowohl den Durchschnitt als auch den Spitzenwert.",
    "Die Messung stammt aus rohen Zeiger-Events, die jene Messwerte zurückgewinnen, die der Browser zu einem einzigen Frame zusammenfasst. Das ist wichtig: Ohne Rohdaten misst man eine 1000-Hz-Maus auf einem 60- oder 120-Hz-Monitor nur mit 60 oder 120 Hz — der häufigste Fehler bei browserbasierten Polling-Rate-Tests.",
  ],
  steps: [
    {
      title: "Bringen Sie den Zeiger über den Testbereich",
      body: "Der Bereich braucht eine fortlaufende Zeigerbewegung. Lassen Sie die Maus in der Mitte einer großen Unterlage ruhen und bewegen Sie sie in langsamen, weiten Kreisen, ergibt das den saubersten Messwert.",
    },
    {
      title: "Bewegen Sie die Maus zehn Sekunden lang ohne Unterbrechung",
      body: "Bewegen Sie sie weiter. Ein Messwert bei stillstehender Maus ist bedeutungslos, weil die meisten Mäuse nicht mehr melden, wenn sich nichts ändert.",
    },
    {
      title: "Prüfen Sie die angezeigte Messmethode",
      body: "Das Panel meldet, ob rohe zusammengefasste Events verfügbar waren oder ob die Messung auf Bildebene zurückgefallen ist. Rohdaten sind das, was Sie wollen; ein Rückfall auf Bildebene begrenzt den erreichbaren Wert auf die Bildrate Ihres Monitors.",
    },
    {
      title: "Lesen Sie den Stabilitätswert ab",
      body: "Eine Maus mit stabiler Rate zeigt einen engen Cluster um ihren Nennwert. Große Schwankungen deuten meist auf ein Verbindungsproblem hin, nicht auf eine andere Rate.",
    },
  ],
  sections: [
    {
      heading: "So funktioniert die Messung",
      paragraphs: [
        "Browser tasten die Zeigerbewegung für das Rendering einmal pro Frame ab, die zugrunde liegende Hardware meldet jedoch weit häufiger. Eine 1000-Hz-Maus erzeugt alle Millisekunde eine Positionsaktualisierung, und in einem 16,7-Millisekunden-Frame bei 60 Hz treffen während dieses Frames ungefähr sechzehn solcher Aktualisierungen ein. Für das Rendering verwirft der Browser alle bis auf die letzte.",
        "Die API für zusammengefasste Events holt die verworfenen Messwerte zurück. Jedes Zeiger-Event enthält die vollständige Liste der Positionen, die in es gefaltet wurden, jede mit eigenem hochpräzisem Zeitstempel. Teilt man die Anzahl der Messwerte durch die verstrichene Zeit, erhält man die tatsächliche Meldungsrate des Geräts statt der Rate des Monitors.",
        "Wo diese API fehlt, weicht das Tool auf das Zählen einzelner Zeiger-Events aus, was grundsätzlich nur die Bildrate des Monitors wiedergeben kann. Das Panel kennzeichnet, welche Methode die Zahl erzeugt hat: Ein 60-Hz-Wert an einer 1000-Hz-Maus ist damit sofort als Rückfall erkennbar und nicht als langsame Maus.",
      ],
    },
    {
      heading: "Gängige Polling-Raten und was sie wert sind",
      paragraphs: [
        "125 Hz waren lange der Standard für Büromäuse und sind auf preiswerter Hardware noch immer verbreitet. 250 Hz und 500 Hz finden sich auf Gaming-Mäusen der Mittelklasse. 1000 Hz ist der Standard im Wettkampfbereich. 2000 Hz, 4000 Hz und 8000 Hz erscheinen auf Enthusiasten-Modellen und setzen sowohl eine entsprechende Maus als auch einen Browser voraus, der rohe Zeiger-Events bereitstellt.",
        "Der praktische Gewinn vom Sprung von 125 Hz auf 1000 Hz ist real, aber bescheiden: ein bis zwei Millisekunden weniger Eingabelatenz, was in Wettkampf-Shootern zählt und bei normaler Arbeit nicht wahrnehmbar ist. Der Sprung von 1000 Hz auf 8000 Hz fällt noch geringer aus — weit unter eine zusätzliche Millisekunde — und zeigt sich vor allem in höherer CPU-Last und größerem Stromverbrauch.",
        "Höhere Polling-Raten wirken zudem auf die Bildrate ein. Auf einem 240-Hz-Monitor wird eine 1000-Hz-Maus etwa viermal pro Frame abgetastet, und der sichtbare Unterschied zwischen 1000 Hz und 4000 Hz ist minimal, weil der Monitor ihn nicht darstellen kann.",
      ],
    },
    {
      heading: "Warum ein Messwert nicht zur Verpackung passt",
      paragraphs: [
        "Die Meldungsrate ist eine Eigenschaft der Maus; gemessen wird aber die Rate, in der Ihr Rechner Meldungen empfängt. Zwischen beidem liegen die Verbindung und das Betriebssystem, und beide können die effektive Rate verringern.",
        "Eine kabellose 2,4-GHz-Maus ist in kurzer Entfernung meist stabil. Auf größerer Distanz oder bei Störungen verliert der Empfänger Meldungen, und der Messwert sinkt und schwankt. Dasselbe passiert bei schwacher Batterie, wenn die Maus ihre Meldungsrate bewusst senkt, um Energie zu sparen.",
        "Auch die USB-Polling-Einstellungen sind wichtig. Ein auf 125 Hz konfigurierter Controller liefert unabhängig von den Fähigkeiten der Maus keine 1000-Hz-Meldungen. Unter Windows sind die erweiterten Eigenschaften eines USB-Root-Hubs der Ort, an dem das Polling-Intervall des Geräts sichtbar ist.",
        "Schließlich kann auch die Energieverwaltung dazwischenfunken. Unter Windows ist das Deaktivieren von USB Selective Suspend für den betreffenden Controller ein gängiger Fix für Mäuse, die in Ruhephasen Meldungen verlieren.",
      ],
    },
    {
      heading: "Hohe Polling-Raten und Ihre Bildrate",
      paragraphs: [
        "Es gibt einen echten Zielkonflikt. Eine Maus mit 8000 Hz erzeugt achtausend Zeiger-Events pro Sekunde, und jedes einzelne kostet Browser und Betriebssystem Arbeit. Auf einer ausgelasteten Seite kann das spürbar Frame-Zeit kosten.",
        "Das ist einer der Gründe, die Polling-Rate auf der Seite zu testen, auf der Sie tatsächlich spielen, statt isoliert. Hält Ihr Spiel mit der Maus auf 8000 Hz eine stabile Bildrate, lassen Sie es dabei. Werden die Frame-Zeiten ungleichmäßig, stellen Sie auf 4000 Hz zurück und vergleichen. Der Unterschied in der Eingabelatenz zwischen beiden ist kleiner als der Unterschied in der Flüssigkeit.",
      ],
    },
  ],
  faqs: [
    {
      question: "Was ist eine gute Polling-Rate fürs Gaming?",
      answer:
        "1000 Hz ist das sinnvolle Ziel für die meisten Wettkampfspiele. Es ist der verbreitete Standard, der Latenzvorteil gegenüber 500 Hz ist klein, aber messbar, und die CPU-Last bleibt im Rahmen. Darüber hinaus sinkt der Zusatznutzen rasch, außer Sie verfolgen ein bestimmtes Spiel, das davon profitiert.",
    },
    {
      question:
        "Warum zeigt der Browser eine niedrigere Polling-Rate als die Herstellerangabe?",
      answer:
        "Meist weil der Browser nur Zeiger-Events auf Bildebene bereitgestellt hat und keine rohen zusammengefassten Events, was den Wert auf die Bildrate Ihres Monitors begrenzt. Das Test-Panel nennt die verwendete Methode. Meldet es einen Rückfall, liegt die echte Rate höher als die angezeigte Zahl.",
    },
    {
      question: "Ist 8000 Hz wirklich besser als 1000 Hz?",
      answer:
        "Nur marginal, und vor allem in der Frame-Zeit. Der Latenzgewinn beträgt den Bruchteil einer Millisekunde, den kaum jemand wahrnimmt. Der Preis sind achtmal so viele Zeiger-Events pro Sekunde, die Browser und Betriebssystem verarbeiten müssen, was auf einer ausgelasteten Seite das Frame-Pacing beeinflussen kann.",
    },
    {
      question: "Wie teste ich die Polling-Rate meiner Maus?",
      answer:
        "Bewegen Sie den Zeiger etwa zehn Sekunden lang ohne Unterbrechung über den Testbereich. Eine ruhende Maus liefert keinen Messwert, weil die meisten Mäuse nicht mehr melden, wenn sich nichts bewegt. Weite, langsame Kreise liefern das sauberste Ergebnis.",
    },
    {
      question: "Warum schwankt meine Polling-Rate während des Tests?",
      answer:
        "Schwankungen bedeuten meist, dass zwischen Maus und Rechner Meldungen verloren gehen. Häufige Ursachen sind eine schwache Funkverbindung oder Störungen, eine schwache Batterie, die die Rate der Maus senkt, und die USB-Energieverwaltung, die den Port aussetzt. Eine kabelgebundene Verbindung mit kurzem Kabel ist die Referenz zum Vergleich.",
    },
    {
      question: "Beeinflusst die Polling-Rate die Flüssigkeit des Zeigers?",
      answer:
        "Sie beeinflusst die Latenz zwischen der Bewegung Ihrer Hand und der Reaktion des Spiels. Die sichtbare Flüssigkeit des Zeigers ist durch die Bildrate Ihres Monitors begrenzt — deshalb kann eine 1000-Hz-Maus auf einem 60-Hz-Monitor identisch aussehen wie eine 500-Hz-Maus, obwohl die Eingaben früher ankommen.",
    },
    {
      question: "Funktioniert dieser Test mit kabellosen Mäusen?",
      answer:
        "Ja, und bei kabellosen Mäusen ist die Messung am aussagekräftigsten. Sie zeigt sowohl die Nennrate als auch deren Stabilität im Zeitverlauf, und so wird ein Verbindungsproblem sichtbar. Eine stabile 1000-Hz-Messung bedeutet, dass die Verbindung in Ordnung ist.",
    },
    {
      question: "Kann ich die Polling-Rate meiner Maus erhöhen?",
      answer:
        "Manchmal. Viele Gaming-Mäuse werden mit Software ausgeliefert, über die Sie die Rate auf 500, 1000 oder 8000 Hz stellen können, manche haben dafür einen Schalter an der Unterseite. Der Test zeigt Ihnen die Rate, auf die die Maus derzeit eingestellt ist.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "keyboard-test"],
};
