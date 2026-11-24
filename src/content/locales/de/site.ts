import type {
  AboutContent,
  ContactContent,
  HomeContent,
  PrivacyContent,
  ToolsIndexContent,
} from "../../types";

export const home: HomeContent = {
  metaTitle:
    "MouseLab — Kostenlose Browser-Diagnosen für Maus, Tastatur und Zeigergerät.",
  metaDescription:
    "Testen Sie jede Taste, jedes Scrollrad, jede Tastaturtaste und Ihre Klickrate direkt im Browser. Kostenlos, ohne Anmeldung, ohne Download. Ihre Messungen verlassen den Browser nie.",
  badge: "Läuft vollständig in Ihrem Browser",
  heroTitleBefore: "Finden Sie heraus, was Ihre",
  heroTitleHighlight: "Maus und Tastatur",
  heroTitleAfter: "tatsächlich tun.",
  heroSubtitle:
    "Fünf kostenlose Diagnosen, die die Events auslesen, die Ihr Computer tatsächlich empfängt — jede Maustaste, jede Richtung des Scrollrads, jede Tastaturtaste und die echte Geschwindigkeit Ihres Zeigers. Ohne Download, ohne Anmeldung, und jede Messung bleibt in Ihrem Browser.",
  ctaPrimary: "Maus jetzt testen",
  ctaSecondary: "Alle Tools ansehen",
  stats: [
    { term: "Ohne Installation", detail: "Läuft in jedem modernen Browser" },
    { term: "Kein Tracking", detail: "Zähler bleiben in Ihrem Tab" },
    { term: "Sofort", detail: "Ergebnisse während des Tastens" },
  ],
  tester: {
    heading: "Mausknopf-Test",
    description:
      "Drücken Sie im Bereich unten jede Taste Ihrer Maus und beobachten Sie, wie die Zähler hochgehen. Rechtsklicks werden abgefangen, damit sich kein Menü öffnet, und jede Taste, die nicht registriert wird, fällt sofort auf.",
    linkLabel: "Vollständige Anleitung und FAQ →",
  },
  allTools: {
    heading: "Alle Tools",
    description:
      "Jedes Tool misst einen anderen Teil Ihrer Eingabegeräte, und jedes erklärt Ihnen, was seine Zahlen bedeuten, wenn Sie fertig sind.",
    blurbs: {
      "mouse-test":
        "Prüfen Sie alle fünf Tasten, das Scrollrad und das Doppelklickverhalten und erkennen Sie Kontaktprellen.",
      "scroll-test":
        "Erkennen Sie übersprungene Rastungen, Rückwärtsscrollen und ungleichmäßige Schritte, bevor sie Sie einen Fehlklick kosten.",
      "keyboard-test":
        "Finden Sie tote Tasten, klemmende Tasten und die genaue Anzahl gleichzeitiger Tastendrücke, die Ihre Tastatur verarbeitet.",
      "cps-test":
        "Messen Sie Ihre Klicks pro Sekunde über 1 bis 60 Sekunden und sehen Sie, ob Ihr Wert Bestand hat.",
      "polling-rate-test":
        "Ermitteln Sie die echte Abtastrate Ihrer Maus in Hz anhand roher Zeiger-Events — nicht anhand von Schätzungen der Bildrate.",
    },
  },
  why: {
    heading: "Warum im Browser testen",
    description:
      "Die meisten Hardwareprobleme zeigen sich als Events, die nie ankommen — oder doppelt ankommen. Der Browser sieht genau diese Events, was ihn zu einem ungewöhnlich guten Diagnosewerkzeug für die Fehler macht, die Menschen tatsächlich treffen.",
    items: [
      {
        title: "Er testet die gesamte Kette",
        body: "Ein physischer Druck muss durch Schalter, Controller, Treiber und Betriebssystem, bevor Ihre App ihn überhaupt sieht. Dieser Test fällt genau dort durch, wo die Kette reißt. Deshalb kann er Ihnen sagen, dass eine funktionierende Maus an einem zweiten Rechner auf Software und nicht auf Hardware hindeutet.",
      },
      {
        title: "Er verlangt nichts von Ihnen",
        body: "Es gibt keinen Installer, keinen Treiber, kein Konto und keine Administratorrechte. Die Seite funktioniert auch auf einem gesperrten Dienst-Laptop — genau dort treten Hardwareprobleme häufig auf und wo Sie kein Hilfsprogramm installieren können.",
      },
      {
        title: "Er kann Sie nicht belügen",
        body: "Ein Zählerstand von null für eine Taste, die Sie definitiv gedrückt haben, ist keine Meinung. Es ist das Fehlen eines Events — und das Nützlichste, was eine Diagnose Ihnen sagen kann.",
      },
    ],
  },
  faq: {
    heading: "Häufige Fragen",
    items: [
      {
        question: "Funktionieren diese Tests ohne Installation?",
        answer:
          "Ja. Jedes Tool hier nutzt standardmäßige Browser-Events — Maus, Scrollrad, Tastatur und Zeiger — und läuft daher direkt auf der Seite, die Sie gerade ansehen. Es gibt keinen Download, keine Browser-Erweiterung, kein Konto und keine Software, die Sie einrichten müssten.",
      },
      {
        question: "Werden meine Daten erhoben oder hochgeladen?",
        answer:
          "Nein. Klicks, Tastendrücke und Scroll-Events werden auf der Seite gezählt und verworfen, sobald Sie den Tab schließen oder neu laden. Nichts wird an einen Server übertragen, es wird kein Profil angelegt und keine Geräteinformation gespeichert.",
      },
      {
        question: "Was kann ein Browsertest tatsächlich erkennen?",
        answer:
          "Alles, was der Browser empfängt: welche Tasten registriert werden, ob ein Scrollrad beide Richtungen meldet, ob ein Klick doppelt ankommt, wie schnell Ihr Zeiger seine Position meldet und ob Ihre Tastatur bei Tastenkombinationen Eingaben verliert. Er sieht nicht in Ihre Hardware hinein, misst also weder Schaltlatenz noch die DPI des Sensors und sagt Ihnen auch nicht, wie weit eine Rastung des Rads tatsächlich dreht.",
      },
      {
        question:
          "Meine Maus überspringt Seiten. Welchen Test soll ich zuerst ausführen?",
        answer:
          "Beginnen Sie mit dem Scrollrad-Test und scrollen Sie langsam in eine Richtung. Ein verschmutzter oder abgenutzter Encoder erzeugt bei langsamer Geschwindigkeit Richtungswechsel und ungleichmäßige Schritte. Liest sich das Scrollrad sauber, springen die Seiten aber weiter, führen Sie als Nächstes den Mausknopf-Test aus, um einen defekten Schalter auszuschließen, und prüfen Sie, ob im Betriebssystem die Zeigerbeschleunigung aktiviert ist.",
      },
      {
        question: "Funktioniert das auch auf einem Laptop mit Trackpad?",
        answer:
          "Ja, mit einer Einschränkung. Ein Trackpad meldet keine physischen Rastungen, der Scroll-Test misst daher Geschwindigkeit und Beständigkeit, statt Rastungen zu zählen. Tastatur-, CPS- und Polling-Rate-Test funktionieren auf einem Trackpad normal, allerdings liefert eine physische Maus aussagekräftigere Klickwerte.",
      },
      {
        question: "Ist es wirklich kostenlos?",
        answer:
          "Ja. Es gibt keine Anmeldung, kein Nutzungslimit und nichts zu kaufen. Die Seite wird durch Werbung finanziert, und die Werbung steht unter dem Tool, damit sie Ihnen nie in die Quere kommt.",
      },
    ],
  },
};

export const toolsIndex: ToolsIndexContent = {
  metaTitle: "Alle Tools",
  metaDescription:
    "Jede kostenlose Browser-Diagnose auf MouseLab: Mausknöpfe, Scrollrad, Tastatur, Klickgeschwindigkeit und Polling-Rate.",
  heading: "Alle Tools",
  intro:
    "Fünf kostenlose Diagnosen, die die Events auslesen, die Ihr Computer empfängt. Jedes läuft im Browser, braucht keine Installation und erklärt Ihnen, was seine Zahlen bedeuten, wenn Sie fertig sind.",
  blurbs: {
    "mouse-test":
      "Drücken Sie jede Taste und beobachten Sie die Zähler. Erkennt tote Tasten, verlorene Klicks und Doppelklick-Prellen eines verschlissenen Mikroschalters.",
    "scroll-test":
      "Scrollen Sie gleichmäßig in eine Richtung — der Test meldet Rückwärts-Events, übersprungene Rastungen und ungleichmäßige Schrittweiten und sagt Ihnen, ob Sie ein Rastungsrad oder ein Trackpad nutzen.",
    "keyboard-test":
      "Prüfen Sie jede Taste, erkennen Sie klemmende Tasten und führen Sie einen Rollover-Test durch, der die genaue Anzahl gleichzeitiger Tastendrücke ermittelt.",
    "cps-test":
      "Ein Klicks-pro-Sekunde-Benchmark von einer bis sechzig Sekunden mit Live-CPS, Ihrem Bestwert und einer Aufschlüsselung pro Sekunde.",
    "polling-rate-test":
      "Misst die echte Abtastrate Ihrer Maus in Hertz anhand roher, zusammengefasster Zeiger-Events — Sie sehen die Geräterate und nicht die Bildrate Ihres Monitors.",
  },
};

export const about: AboutContent = {
  metaTitle: "Über uns",
  metaDescription:
    "Wie MouseLab funktioniert, was jeder Test erkennen kann und was nicht, und wie wir mit Ihren Daten umgehen.",
  heading: "Über {brand}",
  lead: "Wir haben eine Reihe browserbasierter Diagnosen entwickelt für Menschen, die vermuten, dass ihre Maus oder Tastatur nicht richtig funktioniert, aber keine Möglichkeit haben, es zu beweisen. Jedes Tool meldet, was Ihr Computer tatsächlich empfangen hat, und jede Seite erklärt in klarer Sprache, was diese Ergebnisse bedeuten.",
  sections: [
    {
      heading: "So funktionieren die Tests",
      paragraphs: [
        "Wenn Sie eine Maustaste drücken, schließt sich der Schalter in der Maus, der Gerätecontroller registriert die Änderung, das Betriebssystem übersetzt sie, und erst dann empfängt der Browser ein Event. Dieselbe Kette läuft für Scrollrad, Tastatur und Zeigersensor ab. Jeder Test hört auf diesen letzten Event-Strom und meldet, was angekommen ist.",
        "Das bedeutet: Ein Test fällt genau dort durch, wo die Kette reißt. Eine Taste, die nichts meldet, deutet auf Schalter, Kabel, Anschluss oder Treiber hin. Eine Taste, die für einen physischen Druck zwei Drücke meldet, deutet auf Kontaktprellen hin. Ein Scrollrad, das die Richtung umkehrt, deutet auf den Encoder hin. Die Messung ist eindeutig — und genau das macht sie nützlich, wenn Sie entscheiden müssen, ob Sie eine Maus reinigen oder ersetzen.",
      ],
    },
    {
      heading: "Was diese Tools nicht können",
      paragraphs: [
        "Wir sagen Ihnen lieber offen, wo die Grenzen liegen, statt Sie einem Problem hinterherlaufen zu lassen, das das Tool nie finden sollte.",
      ],
      bullets: [
        "Sie können die Schaltlatenz eines Schalters nicht messen. Der Browser sieht ein bereits eingetroffenes Event, nicht den Moment, in dem der metallische Kontakt geschlossen hat.",
        "Sie können die DPI des optischen Sensors nicht auslesen. Dafür wäre ein direkter Zugriff auf den Sensor nötig, den die Web-Plattform bewusst nicht preisgibt.",
        "Sie können nicht angeben, wie weit eine Rastung des Rads mechanisch dreht. Browser melden Scroll-Deltas in Pixeln, Zeilen oder Seiten, nicht in Millimetern.",
        "Sie können ein Trackpad nicht als defekt diagnostizieren, wenn es lediglich ein Gerät ohne Rastungen ist. Der Scroll-Test kennzeichnet Trackpads als stetige Geräte, statt sie zu bewerten.",
        "Sie können nicht bestätigen, dass Hardware absolut fehlerfrei ist. Sie bestätigen, dass Ihre Hardware und Ihr Computer übereinstimmen — und genau daran scheitert es im Alltag.",
      ],
    },
    {
      heading: "Wie wir mit Ihren Daten umgehen",
      paragraphs: [
        "Zählerstände, Zeitmessungen und Tasteneingaben verbleiben im Speicher des offenen Tabs und werden verworfen, sobald Sie ihn schließen oder neu laden. Wir speichern nicht, was Sie geklickt oder getippt haben, und keine Kennung, die auf Ihr Gerät verweist. Ein Kontosystem gibt es nicht.",
        "Wir verwenden allerdings übliche, datenschutzfreundliche Website-Statistiken, um zu sehen, welche Seiten nützlich sind und welche nicht. Die vollständigen Details finden Sie in der {privacyPolicy}.",
      ],
    },
    {
      heading: "Wie die Seite finanziert wird",
      paragraphs: [
        "Durch Werbung. Jedes Tool bleibt kostenlos und uneingeschränkt nutzbar, und wir platzieren die Werbung unterhalb des Tools statt darüber — so wird das, wofür Sie gekommen sind, niemals aus dem Blick gedrängt, um Platz für eine Anzeige zu schaffen. Sollte ein Tool jemals eine kostenpflichtige Stufe benötigen, wird es für etwas wirklich Zusätzliches sein, etwa das Speichern von Verläufen oder den Export eines Berichts, nicht für die eigentliche Messung.",
      ],
    },
  ],
  privacyLinkLabel: "Datenschutzerklärung",
};

export const contact: ContactContent = {
  metaTitle: "Kontakt",
  metaDescription:
    "Melden Sie einen Fehler in einem der Tools, wünschen Sie sich eine neue Diagnose oder benötigen Sie eine Korrektur an einem unserer Leitfäden.",
  heading: "Kontakt",
  lead: "Einen Fehler gefunden, eine Ungenauigkeit bemerkt oder eine Diagnose im Sinn, die wir noch nicht gebaut haben? Schreiben Sie uns kurz — wir sehen uns das an.",
  cards: [
    {
      title: "Fehler melden",
      body: "Sagen Sie uns, welches Tool Sie genutzt haben, was Sie erwartet haben und was stattdessen passiert ist. Wenn ein Zähler nicht hochging, obwohl Sie damit gerechnet hatten, ist das die hilfreichste Angabe, die Sie uns machen können.",
    },
    {
      title: "Tool anregen",
      body: "Es gibt keine Grenze für Ihre Wünsche. Eine Diagnose, die etwas misst, das zuvor noch niemand gemessen hat, gehört genau hierher.",
    },
    {
      title: "Leitfaden korrigieren",
      body: "Jede Erklärung auf dieser Seite soll technisch korrekt sein. Wenn eine Passage falsch oder unklar ist oder jemanden dazu verleiten könnte, das falsche Teil zu kaufen, möchten wir das erfahren.",
    },
  ],
  messageHeading: "Schreiben Sie uns",
  messageBody:
    "E-Mail an {email}. Wir lesen alles und antworten den meisten Nachrichten innerhalb von ein paar Werktagen.",
  messageNote:
    "Bitte senden Sie keine personenbezogenen Daten oder Angaben zu Ihrer Gerätekonfiguration. Für die Diagnose eines Tools brauchen wir nichts davon, und wir hätten lieber, dass Sie es auch nicht senden.",
};


export const privacy: PrivacyContent = {
  metaTitle: "Datenschutzerklärung",
  metaDescription:
    "Was MouseLab erhebt, was es nicht erhebt und was mit den Messdaten geschieht, die Sie erzeugen.",
  heading: "Datenschutzerklärung",
  lastUpdated: "Zuletzt aktualisiert am 22. November 2026",
  sections: [
    {
      heading: "Ihre Messdaten bleiben auf Ihrem Gerät",
      body: "Wenn Sie einen Test ausführen, werden Klicks, Tastendrücke, Scroll-Events und Zeiger-Messwerte im Speicher des offenen Browser-Tabs gezählt. Sie werden nirgendwohin übertragen. Schließen oder laden Sie den Tab neu, sind sie endgültig verworfen. Wir können einen Wert von gestern nicht wiederherstellen, weil er nie gespeichert wurde.",
    },
    {
      heading: "Keine Konten, keine Kennungen",
      body: "Es gibt keine Anmeldung, keinen Login und kein Nutzerprofil. Wir fragen nicht nach einer E-Mail-Adresse, um ein Tool zu nutzen, und wir erstellen keine dauerhafte Kennung, die auf Ihr Gerät oder Ihren Browser verweist.",
    },
    {
      heading: "Website-Statistiken",
      body: "Wir verwenden datenschutzfreundliche Statistiken, um zu verstehen, welche Seiten und Tools nützlich sind und welche Arbeit brauchen. Erfasst werden aggregierte Seitenaufrufe, Verweiser-Angaben sowie grobe Geräte- und Länderinformationen. Nicht erfasst werden die Inhalte Ihrer Testsitzungen, und die Daten dienen nicht dazu, ein Werbeprofil über Sie zu erstellen.",
    },
    {
      heading: "Werbung",
      body: "Diese Seite wird durch Werbung finanziert, und wir setzen dafür Google AdSense ein. Google und seine Partner können Cookies setzen oder ähnliche Technologien verwenden, um Anzeigen auszuliefern und zu messen. Sie können steuern, wie personalisierte Werbung eingesetzt wird: über Ihre Browser-Einstellungen, über Google's Ads Settings sowie über die Optionen, die Google für Google Advertising, für seine Datenschutz- und Nutzungsbedingungen und auf aboutads.info für beteiligte Drittanbieter bereitstellt.",
    },
    {
      heading: "Inhalte von Drittanbietern",
      body: "Werbeskripte werden erst geladen, wenn Sie mit der Seite interagieren. So laufen sie nicht, bevor Sie irgendein Zeichen von Interesse gezeigt haben. Schriften werden von unserer eigenen Domain ausgeliefert, beim Öffnen einer Seite erfolgt also keine Anfrage bei einem Schriftarten-Anbieter.",
    },
    {
      heading: "Kontakt",
      body: "Bei Fragen zu dieser Erklärung oder wenn Sie etwas gelöscht haben möchten, schreiben Sie an hello@mouselab.io — wir kümmern uns darum.",
    },
  ],
  copyright: "© {year} {brand}",
};
