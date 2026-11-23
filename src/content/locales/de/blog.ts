import type { BlogContent } from "../../types";

export const blog: BlogContent = {
  metaTitle: "Blog",
  metaDescription:
    "Praktische Notizen zu Eingabegeräten, Browser-Event-APIs und dem Bau besserer Diagnosen für Mäuse, Tastaturen und Zeiger.",
  heading: "Blog",
  lead: "Notizen zu Eingabegeräten, zu den Browser-Event-APIs, die sie zugänglich machen, und dazu, wie die Diagnosen auf dieser Seite zusammengesetzt sind. Geschrieben für Menschen, die verstehen wollen, was ihre Hardware tut, statt sie einfach zu ersetzen.",
  posts: [
    {
      slug: "how-a-browser-sees-your-mouse",
      title: "Wie ein Browser Ihre Maus tatsächlich sieht",
      metaTitle: "Wie ein Browser Ihre Maus tatsächlich sieht",
      metaDescription:
        "Was ein Browser wirklich empfängt, wenn Sie die Maus bewegen: der Ereignisstrom, die gemeldeten Koordinaten, wie Polling-Rate und Zeigerbeschleunigung ihn verändern und was ein Browsertest Ihnen sagen kann — und was nicht.",
      excerpt:
        "Ihr Cursor ist kein Objekt. Er ist ein Strom von Positionsmesswerten, und wer versteht, woher dieser Strom kommt, erklärt damit fast jeden Hardwarefehler, dem Sie irgendwann nachjagen werden.",
      readTime: "8 Min. Lesezeit",
      dateLabel: "23. November 2026",
      lead: "Ihr Cursor ist kein Objekt, das der Browser besitzt. Er ist eine Folge von Positionsmesswerten, erzeugt von Hardware, die der Browser nie zu Gesicht bekommt, und gefiltert von einem Betriebssystem, das die Seite nicht konfigurieren kann. Diese Kette zu verstehen erklärt, warum dieselbe Maus auf unterschiedlichen Rechnern unterschiedlich reagiert — und warum keine Webseite Ihnen genau sagen kann, was Ihre Maus gerade tut.",
      sections: [
        {
          heading: "Der Cursor ist ein Ereignisstrom, kein Objekt",
          paragraphs: [
            "Öffnen Sie die Entwicklerwerkzeuge und tippen Sie in der Konsole auf document. Ein Cursor ist dort nicht vorhanden. Es gibt kein Objekt, das den Mauszeiger darstellt, keine Eigenschaft, aus der sich seine Position auslesen ließe, und keine Möglichkeit, eine Seite zu fragen, wo der Zeiger gerade steht. Der Browser führt überhaupt keinen Cursor. Er führt eine Historie von Bewegungen, die schon stattgefunden haben.",
            "Was eine Seite empfängt, ist eine Folge von pointermove-Events — Pointer Events sind die Schnittstelle, über die der Browser Zeigerbewegungen erst an Seiten weitergibt. Jedes Event trägt einen Schnappschuss des Zeigers aus einem vergangenen Moment: wo er war, welche Taste gedrückt war, welchen Druck der Sensor gemeldet hat und wie lange der Browser glaubt, dass es seit dem vorigen Event vergangen ist. Zwischen diesen Events gibt es überhaupt keine Information. Die Position des Zeigers ist nichts, was der Browser weiß; sie ist etwas, das ihm einmal pro Event mitgeteilt wurde — und dann wieder losgelassen wurde.",
            "Diese eine Tatsache erklärt das meiste von dem, was Menschen als merkwürdig empfinden. Ein Skript kann nicht fragen, wo die Maus gerade ist, es kann nur benachrichtigt werden. Eine Anwendung, die die zuletzt bekannte Position liest, hinkt um genau ein Event hinterher. Und ein Tab im Hintergrund empfängt überhaupt keine Events mehr; der Strom, den er vorhält, wenn Sie zurückkehren, ist eine Lücke und keine Position.",
          ],
          bullets: [
            "pointermove feuert bei Bewegung; pointerdown und pointerup feuern bei den Tasten.",
            "Jedes Event trägt einen timeStamp, gemessen ab dem Zeitursprung des Dokuments, in Millisekunden, als Double-Wert.",
            "Events werden zusammengefasst: Mehrere Bewegungen können in einem einzigen Event landen, das nur die Endposition meldet.",
          ],
        },
        {
          heading: "Woher der Strom tatsächlich kommt",
          paragraphs: [
            "Die Maus sendet ihre Position nicht dann, wenn Sie sie bewegen. Sie sendet sie nach einem festen Takt, ob Sie sich bewegt haben oder nicht, und jeder Bericht enthält nur die Veränderung seit dem letzten Bericht. Eine Maus mit 1000 Hz erzeugt 1000 USB-Berichte pro Sekunde. Eine Büromaus mit 125 Hz erzeugt 125. Diese Berichtsrate ist die Polling-Rate, die der Polling-Rate-Test auf dieser Seite misst.",
            "Zwischen Gerät und Browser liegen zwei Filter, die Sie von der Seite aus nicht sehen können. Das Betriebssystem wendet Zeigerbeschleunigung an, das heißt: Dieselbe physische Bewegung erzeugt je nach Geschwindigkeit eine andere Anzahl Bildschirmpixel, und es kann zusätzlich glätten, was Verzögerung einbringt. Der Browser legt darauf seine eigenen Regeln fest, wie oft er Events ausliefert und welche davon er zusammenfasst.",
            "Der Strom, den eine Seite empfängt, ist also das Produkt aus drei Dingen: der Berichtsrate des Geräts, den Einstellungen des Betriebssystems und dem internen Budget des Browsers. Wenn eine Seite meldet, der Zeiger sei 400 Pixel gewandert, ist das die Wahrheit darüber, was der Seite mitgeteilt wurde. Es ist nicht die Wahrheit darüber, wie weit Ihre Hand gewandert ist.",
          ],
        },
        {
          heading: "Drei Koordinatensysteme, und sie stimmen nicht überein",
          paragraphs: [
            "Ein einzelnes Bewegungsevent meldet dieselbe physische Bewegung in drei Koordinatensystemen, und sie widersprechen einander von Grund auf.",
            "Die Einheit ist das CSS-Pixel, nicht das physische Pixel. Auf einem Display mit einem devicePixelRatio-Wert von 2 entspricht ein CSS-Pixel zwei physischen Pixeln in der Breite. Ein Skript, das ein Element mit getBoundingClientRect() vermisst, arbeitet in CSS-Pixeln, während ein Skript, das gegen einen Bildschirmabdruck vergleicht, in einer anderen Einheit arbeitet und durch das Verhältnis teilen muss, um überhaupt zusammenzupassen.",
            "Praktisch bedeutet das: Die Koordinaten eines Events beschreiben das Dokument im Moment der Zustellung, und die Seite kann seither gescrollt sein. Code, der ein pageX speichert und später mit einem frischen getBoundingClientRect-Ergebnis vergleicht, vergleicht zwei verschiedene Einzelbilder.",
          ],
          bullets: [
            "screenX und screenY liefern die Position auf dem Bildschirm, in Gerätepixeln, einschließlich des eigenen Versatzes des Browserfensters.",
            "clientX und clientY liefern die Position innerhalb des Viewports, in CSS-Pixeln. Dieses Paar nutzen die meisten Seiten.",
            "pageX und pageY liefern die Position innerhalb des gesamten Dokuments, sie verschieben sich also beim Scrollen.",
          ],
        },
        {
          heading: "Wie oft Sie tatsächlich Events bekommen",
          paragraphs: [
            "Der Browser ist nicht verpflichtet, pro Bericht ein Event zu liefern. Ist eine Seite gerade mit dem Layouting beschäftigt — 120 Bilder pro Sekunde — und meldet die Maus mit 1000 Hz, sind die meisten dieser Berichte irrelevant, sobald das Bild gezeichnet wird. Der Browser fasst sie deshalb zusammen.",
            "getCoalescedEvents() gibt bei einem pointermove die Liste der Positionen zurück, die in dieses Event hineingefaltet wurden, jede mit ihrem eigenen timeStamp. Das ist das Nächstliegende am rohen Strom, was eine Webseite sehen kann. Chromium und Firefox implementieren es, Safari nicht — dort sieht die Seite nur den zusammengefassten Endpunkt.",
            "pointerrawupdate ist ein eigenes Event, das für einzelne Bewegungsmesswerte feuert, bevor zusammengefasst wird — das Signal mit der höchsten Auflösung, das einer Seite zur Verfügung steht. Es wird nur für den primären Zeiger geliefert und nicht überall implementiert, Code, der sich darauf verlässt, braucht also weiterhin einen Fallback.",
          ],
          bullets: [
            "Ein pointermove kann viele physische Bewegungen abbilden. Mit getCoalescedEvents() sehen Sie sie einzeln.",
            "requestAnimationFrame läuft, nachdem der Browser ein Bild fertig gezeichnet hat. Der richtige Ort, um eine Position zu lesen, und der falsche Ort, um ein Event pro Bewegung zu erwarten.",
            "Ein Tab im Hintergrund empfängt überhaupt keine Bewegungsevents, sein Blick auf den Zeiger bleibt also veraltet, bis wieder ein Event eintrifft.",
          ],
        },
        {
          heading: "Beschleunigung, Rohdaten und die Grenzen einer Seite",
          paragraphs: [
            "Zeigerbeschleunigung gibt es, damit kleine Bewegungen präzise bleiben, während große Bewegungen schnell sind. Der Preis dafür: Die Abbildung von physischer Bewegung auf Pixel ist nicht fest und nicht auf jedem Rechner dieselbe. Ein Skript, das movementX liest, bekommt die Differenz, die der Browser anzuwenden beschlossen hat — die Kurve steckt also schon drin.",
            "Die Pointer Lock API ist der einzige Weg, auf dem eine Webseite unbeschleunigte Eingaben anfordern kann. Solange der Zeiger gesperrt ist, melden movementX und movementY die rohe Differenz zwischen aufeinanderfolgenden Messwerten. Sie ist zugleich eine Vollbildübernahme: Der Cursor verschwindet, und sie verlangt eine Nutzergeste — deshalb kann ein Diagnosewerkzeug sie nicht einfach einschalten.",
            "Eine Seite kann Ihnen also sagen, wie viele Pixel der Zeiger zurückgelegt hat und ungefähr wie schnell, aber nicht, wie weit Ihre Hand tatsächlich gewandert ist, wie hoch die native Auflösung des Sensors ist oder ob die Maus selbst geglättet hat, bevor das Betriebssystem die Daten überhaupt zu Gesicht bekam.",
          ],
        },
        {
          heading: "Was das beim Testen einer Maus bedeutet",
          paragraphs: [
            "Deshalb beschreiben sich die Werkzeuge hier als das Messen dessen, was Ihr Computer „empfangen hat“, und nicht dessen, was Ihre Maus tut. Der Mausknopf-Test zählt die Klicks, die bei der Seite angekommen sind. Der Polling-Rate-Test misst die Abstände zwischen den Bewegungsevents, die der Browser ausgeliefert hat. Keiner von beiden kann einen Schalter, einen Encoder oder einen Sensor untersuchen.",
            "Genau in der Lücke zwischen diesen beiden Aussagen spielen sich die meisten verwirrenden Support-Fälle ab. Eine Maus mit defekter linker Taste sendet für einen physischen Druck zwei Druckevents, und der Browser meldet beide. Eine Maus mit verschlissenem Sensor kann einen völlig regelmäßigen Strom von minimal falschen Positionen melden. Von innen aus der Seite gesehen sieht beides nach einem Hardwarefehler aus, von innen aus dem Treiber gesehen nach einem Browserfehler.",
            "Zu wissen, auf welcher Seite dieser Linie Sie stehen, spart Stunden. Sind die Events, die bei der Seite ankommen, falsch, liegt der Fehler in der Hardware oder im Treiber, und keine Browsereinstellung behebt das. Sind die Events richtig und die Anwendung verhält sich trotzdem falsch, liegt der Fehler in der Anwendung.",
          ],
        },
      ],
      faqs: [
        {
          question: "Kennt der Browser die tatsächliche Position meines Cursors?",
          answer:
            "Nein. Er kennt die Positionen, die ihm mitgeteilt wurden, und das auch nur in den Momenten, in denen er ein Event ausgeliefert hat. Zwischen zwei Events verfolgt er den Zeiger überhaupt nicht, und ein Tab im Hintergrund erfährt nichts von einer Bewegung, bis wieder ein Event bei ihm eintrifft.",
        },
        {
          question: "Warum fühlt sich mein Zeiger glatter an, als die Eventrate vermuten lässt?",
          answer:
            "Weil sich der Bildschirm nach seinem eigenen Takt aktualisiert. Ihre Maus meldet vielleicht 1000-mal pro Sekunde, während das Display 144-mal pro Sekunde aktualisiert. Der Browser fasst Bewegungsevents zusammen, die zwischen zwei Bildern eintreffen; die Seite sieht also weniger Events als das Gerät erzeugt hat, während der Bildschirm weiterhin einen glatten Pfad zeigt.",
        },
        {
          question: "Kann eine Webseite meine Maus schneller auslesen, als die Maus meldet?",
          answer:
            "Nein, und sie muss es auch nicht. Das Gerät ist die Quelle der Daten, die Berichtsrate ist also eine harte Obergrenze. Eine Seite kann mit getCoalescedEvents() die einzelnen Messwerte hinter einem zusammengefassten Event anfordern, aber sie kann keine Messwerte erfinden, die das Gerät nie gesendet hat.",
        },
        {
          question: "Was ist Zeigerbeschleunigung, und kann ich sie für einen Test abschalten?",
          answer:
            "Zeigerbeschleunigung ist die Umrechnung des Betriebssystems von physischer Bewegung in Bildschirmpixel, sodass ein schneller Schwung mehr Strecke zurücklegt als ein langsamer. Nur die Pointer Lock API legt unbeschleunigte Bewegung einer Seite offen, und sie übernimmt dabei den Bildschirm. Überall sonst enthalten die Zahlen, die eine Seite liest, bereits die Beschleunigungskurve.",
        },
        {
          question: "Beweist ein Browsertest, dass meine Maus einwandfrei arbeitet?",
          answer:
            "Nein. Er belegt, was bei der Seite angekommen ist. Eine Maus kann einen sauberen, völlig regelmäßigen Strom von Positionen liefern, obwohl ihr Sensor verschlissen ist, und ein Browser kann Events einwandfrei ausliefern, obwohl die Hardware in Ordnung ist. Nutzen Sie den Browsertest, um die Softwareseite auszuschließen, und bestätigen Sie die Hardwareseite anschließend mit den Diagnosewerkzeugen des Herstellers.",
        },
      ],
      toolSlug: "mouse-test",
    },
    {
      slug: "double-click-chatter-explained",
      title: "Doppelklick-Prellen, richtig erklärt",
      metaTitle: "Doppelklick-Prellen, richtig erklärt",
      metaDescription:
        "Warum ein verschlissener Mausschalter für einen Druck zwei Klicks sendet, worin sich das von einem echten Doppelklick unterscheidet, wie die zeitliche Signatur aussieht und wie sich Kontaktprellen dauerhaft beheben lässt.",
      excerpt:
        "Warum ein verschlissener Mausschalter für einen Druck zwei Klicks sendet, worin sich das von einem echten Doppelklick unterscheidet und wie die zeitliche Signatur aussieht.",
      readTime: "6 Min. Lesezeit",
      dateLabel: "23. November 2026",
      lead: "Wenn eine Maus von sich aus doppelklickt, lautet die Diagnose in der Regel: Kontaktprellen. Ein einziger physischer Druck erzeugt zwei elektrische Kontakte. In der Software sieht das exakt wie ein Doppelklick aus, und genau deshalb wird es so häufig falsch diagnostiziert. Der Unterschied steckt im Timing, und das Timing ist die ganze Geschichte.",
      sections: [
        {
          heading: "Was ein Mausschalter wirklich tut",
          paragraphs: [
            "Eine Maustaste ist ein federbelasteter Metallkontakt, der beim Drücken einen Stromkreis schließt. Bei einem guten Schalter schließt der Kontakt einmal, sauber, und bleibt geschlossen, bis Sie wieder loslassen.",
            "Bei einem verschlissenen Schalter ist der Kontakt leicht angefressen oder oxidiert, oder die Feder ist nachgeschliffen und drückt nicht mehr fest genug. Die Folge: Beim Drücken schließt der Stromkreis, öffnet sich für den Bruchteil einer Millisekunde wieder, weil der Kontakt zurückschlägt, und schließt erneut. Der Controller der Maus, der die Tasten über HID ausliest, sieht zwei Druckvorgänge. Sie haben einen ausgeführt.",
            "Der Abstand zwischen den beiden Kontakten liegt üblicherweise bei einigen Millisekunden und fast immer deutlich unter fünfzig. Warum es sich wie ein Doppelklick anfühlt? Sehr viele Programme verstehen einen Doppelklick als Signal, und ein Doppelklick ist nun mal zwei dicht aufeinanderfolgende Druckvorgänge. Die Maus sagt die Wahrheit über das, was sie erkannt hat; sie hat nur einen Druck erkannt, den Sie nie ausgeführt haben.",
          ],
        },
        {
          heading: "Warum das Betriebssystem Doppelklick meldet",
          paragraphs: [
            "Fast jedes Desktop-Betriebssystem hat eine Einstellung dafür, wie dicht zwei Klicks aufeinanderfolgen müssen, um als Doppelklick zu gelten. Unter Windows ist das die Doppelklickgeschwindigkeit, standardmäßig 500 Millisekunden. macOS führt die Entsprechung in den Einstellungen für Trackpad und Maus. Alles unterhalb dieser Schwelle zählt für das System als Doppelklick — und Prellen liegt weit darunter.",
            "Das Prellen sieht also nicht bloß wie ein Doppelklick aus, es ist nach der Definition des Systems ein Doppelklick. Die Maus sandte zwei Druckevents mit 6 Millisekunden Abstand; das System sah zwei Druckvorgänge innerhalb seiner Schwelle und meldete jedem Programm auf dem Rechner einen Doppelklick.",
            "Deshalb wird der Fehler so oft Windows, dem Browser oder dem gerade laufenden Spiel angelastet. Das System tut genau das, wozu es angewiesen wurde, und der Beleg, auf den es sich stützte, war die Meldung der Maus.",
          ],
        },
        {
          heading: "Die zeitliche Signatur, die beides unterscheidet",
          paragraphs: [
            "Ein echter Doppelklick und ein Prell-Event lassen sich unterscheiden, weil sie aus unterschiedlichen Dingen bestehen. Ein echter Doppelklick ist zwei vollständige Druck-und-loslassen-Zyklen: runter, hoch, runter, hoch. Prellen ist ein Druck-und-loslassen-Zyklus mit einem zusätzlichen Kontakt darin: runter, hoch, runter, hoch, wobei das zweite Herunterkommen Mikrosekunden nach dem ersten Loslassen eintrifft und sich zwischen beiden kein menschlicher Finger bewegt hat.",
            "Der Abstand verrät alles. Beim echten Doppelklick ist die Lücke zwischen dem ersten Loslassen und dem nächsten Druck die Zeit, die ein Mensch braucht, um einen Finger zu bewegen und erneut zu drücken — normalerweise zwischen 80 und 300 Millisekunden. Beim Prellen ist die Lücke die Nachschwingzeit eines Metallkontakts, irgendwo zwischen 1 und 30 Millisekunden. Die beiden Mengen überschneiden sich nicht: Das eine ist ein Mensch, das andere eine Feder.",
            "Dieselbe Signatur zeigt sich in der Klickrate. Wer so schnell wie möglich klickt, kommt auf ungefähr 10 bis 12 Klicks pro Sekunde. Ein prellender Schalter kann weit mehr liefern, weil die Hardware Events erzeugt, die kein Finger je erreichen würde.",
          ],
          bullets: [
            "Ein echter Doppelklick sind zwei vollständige Druck-und-loslassen-Zyklen, meist 80 bis 300 Millisekunden auseinander, von einem Finger, der sich bewegt hat.",
            "Prellen ist ein Druck-und-loslassen-Zyklus mit einem zusätzlichen Kontakt darin, meist 1 bis 30 Millisekunden auseinander.",
            "Klicken mit der Hand in vollem Tempo bringt etwa 10 bis 12 Klicks pro Sekunde; Prellen überbietet das von sich aus.",
          ],
        },
        {
          heading: "Warum der Browser es schwer macht",
          paragraphs: [
            "Der Browser meldet getreu, was ihm mitgeteilt wurde, aber er hat auch eine eigene Vorstellung von einem Doppelklick, und die bedient sich der Schwelle des Betriebssystems. Eine Seite, die auf das dblclick-Event hört, sieht exakt das, was das System gesehen hat; über dieses Event sind Prellen und echter Doppelklick nicht unterscheidbar. Darin liegt die Falle: dblclick ist das eine Event, das Ihnen niemals verrät, welches der beiden stattgefunden hat.",
            "Die Events pointerdown und pointerup sind ein besserer Ort, denn sie werden pro physischem Kontakt geliefert, und jedes trägt einen timeStamp mit Sub-Millisekunden-Auflösung. Eine Seite, die jeden Druck selbst mit Zeit versieht, kann den Abstand zwischen zwei Drücken messen, die 6 Millisekunden auseinanderlagen — und diese Zahl ist die Diagnose.",
            "Bei den Zeitstempeln gibt es eine Feinheit. Der timeStamp eines Events bezieht sich auf den Zeitursprung des Dokuments, und Browser garantieren nicht, dass er den Moment zeigt, in dem die Hardware die Bewegung abgetastet hat. Es ist der Moment der Zustellung. Unter Last kann die Zustellzeit von der physikalischen Zeit abweichen, weshalb eine Seite den Abstand immer zwischen zwei Zeitstempeln derselben Uhr berechnen sollte, statt einen Zeitstempel mit Date.now zu vergleichen.",
          ],
        },
        {
          heading: "Wie Sie das Ergebnis lesen",
          paragraphs: [
            "Der Mausknopf-Test auf dieser HTML-Seite erfasst den Zeitstempel jedes Drucks, gruppiert Drücke, die innerhalb von 50 Millisekunden aufeinanderfolgen, und gibt den Abstand aus. Ein Abstand von einigen Millisekunden ist Prellen. Ein Abstand im Doppelklick-Bereich ist ein Doppelklick, und der Doppelklick-Zähler steigt nur dann, wenn der Abstand in diesem Bereich liegt.",
            "Die 50 Millisekunden sind bewusst großzügig gewählt. Menschliche Doppelklicks kommen praktisch nie dichter als etwa 80 Millisekunden, und das Nachschwingen eines Schalters überschreitet praktisch nie etwa 30 Millisekunden. Die beiden Mengen überschneiden sich also nicht, und die Grenze kann bequem im leeren Raum dazwischen liegen.",
            "Der Test zeigt außerdem den kleinsten Abstand, der in der Sitzung aufgetreten ist. Diese eine Zahl klärt die Frage meist ohne jede Ermessensspielerei: Ein kleinster Abstand im einstelligen Millisekundenbereich ist Prellen, und das Panel meldet dann „Doppelklick-Prellen erkannt“. Ein kleinster Abstand im dreistelligen Millisekundenbereich bedeutet dagegen, dass Ihre Doppelklicks echt sind.",
          ],
        },
        {
          heading: "Was Sie tatsächlich dagegen tun können",
          paragraphs: [
            "Ist das Prellen leicht, hilft oft Reinigung. Druckluft oder eine weiche Bürste entfernen Staub, und ein Kontaktreiniger, wie er für elektrische Kontakte verkauft wird, löst das Oxid, das einen angefressenen Kontakt zurückschlagen lässt. Kontakte lassen sich günstig instand setzen, und ein verschlissener Schalter ist so oft auf diesem Weg zurückzuholen.",
            "Ist der Schalter mechanisch beschädigt, muss er ausgetauscht werden. Eine Maus mit austauschbaren Schaltern, wie sie bei reparierbaren Mäusen üblich ist, ist mit einem Lötkolben in fünf Minuten erledigt. Eine Maus mit einem verbauten Schalter ist eine andere Frage, und die eigentliche Entscheidung lautet dort, ob sich die Reparatur überhaupt lohnt.",
            "Es gibt einen Software-Workaround, den man kennen sollte, weil er verwirrt. Den Schwellwert des Betriebssystems für Doppelklicks absenken. Stellen Sie ihn auf das Minimum, und das System hält einen Nachschwinger von 6 Millisekunden nicht mehr für einen Doppelklick. Das funktioniert, und es ist tatsächlich die falsche Lösung, denn es macht zugleich echte Doppelklicks schwerer ausführbar. Jede Anwendung, die Sie nutzen, nicht nur die, die sich gerade falsch verhält, bekommt nun ein engeres Doppelklick-Fenster. Behandeln Sie das als Möglichkeit, die Diagnose zu prüfen, nicht als Lösung.",
          ],
        },
      ],
      faqs: [
        {
          question: "Wie unterscheide ich Kontaktprellen von einem echten Doppelklick?",
          answer:
            "Am Abstand zwischen den beiden Drücken. Ein echter Doppelklick ist zwei vollständige Druck-und-loslassen-Zyklen, meist 80 bis 300 Millisekunden auseinander. Prellen ist ein Druck mit einem zusätzlichen Kontakt darin, meist 1 bis 30 Millisekunden auseinander. Der Mausknopf-Test misst diesen Abstand und gibt ihn aus.",
        },
        {
          question: "Kann ein echter Doppelklick je so schnell sein, dass er wie Prellen aussieht?",
          answer:
            "Nein. Selbst der schnellste absichtliche Doppelklick hinterlässt eine Lücke von rund 80 Millisekunden, weil ein Finger loslassen und wandern muss, bevor er erneut drücken kann. Prellen spielt sich im einstelligen Millisekundenbereich ab, also schneller, als sich ein Schalter überhaupt bewegen kann. Die beiden überlappen nie.",
        },
        {
          question: "Meine Maus doppelklickt nur in einem Programm. Ist es trotzdem die Maus?",
          answer:
            "Fast sicher. Das Programm ist meist das einzige, das einen Doppelklick als bedeutsame Aktion behandelt, und macht den Fehler damit sichtbar. Prüfen Sie die Maus in einem reinen Texteditor und im Browser: Taucht das Prellen auch dort auf, ist es die Hardware und nicht das Programm.",
        },
        {
          question: "Spielt die Einstellung für die Doppelklickgeschwindigkeit des Betriebssystems eine Rolle?",
          answer:
            "Sie legt fest, was als Doppelklick gilt, und diese Schwelle ist der Grund, warum Prellen überhaupt als Doppelklick gemeldet wird. Ein Absenken macht Prellen schwerer auslösbar, aber auch echte Doppelklicks schwerer ausführbar — es ist also eine Möglichkeit, die Diagnose zu prüfen, und keine Reparatur.",
        },
        {
          question: "Ist eine prellende Maus ein Brandrisiko oder gefährlich im Dauergebrauch?",
          answer:
            "Nein. Prellen ist ein elektrischer Kontakt, der in einem Niedrigspannungskreis mit einem Bruchteil eines Amperes zurückschlägt. Es beschädigt die Maus nicht und ist kein Brandrisiko. Der Preis sind die falsch ausgelösten Klicks und die verlorene Arbeit, nicht die Hardware.",
        },
      ],
      toolSlug: "mouse-test",
    },
  ],
};
