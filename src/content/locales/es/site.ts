import type {
  AboutContent,
  ContactContent,
  HomeContent,
  PrivacyContent,
  ToolsIndexContent,
} from "../../types";

export const home: HomeContent = {
  metaTitle:
    "MouseLab — Diagnósticos gratuitos en el navegador para tu ratón, tu teclado y tu hardware de puntero.",
  metaDescription:
    "Prueba todos los botones, la rueda, las teclas y la velocidad de clic directamente en tu navegador. Gratis, sin registro y sin instalar nada. Tus mediciones nunca salen del navegador.",
  badge: "Funciona íntegramente en tu navegador",
  heroTitleBefore: "Descubre qué están haciendo realmente tu",
  heroTitleHighlight: "ratón y teclado",
  heroTitleAfter: "de verdad.",
  heroSubtitle:
    "Cinco diagnósticos gratuitos que leen los eventos que tu equipo recibe de verdad: todos los botones, todas las direcciones de la rueda, todas las teclas y la velocidad real de tu puntero. Sin descargas, sin registro y con todas las mediciones dentro de tu navegador.",
  ctaPrimary: "Prueba tu ratón ahora",
  ctaSecondary: "Ver todas las herramientas",
  stats: [
    { term: "Sin instalar nada", detail: "Se ejecuta en cualquier navegador moderno" },
    { term: "Sin rastreo", detail: "Los contadores se quedan en tu pestaña" },
    { term: "Instantáneo", detail: "Resultados mientras pulsas" },
  ],
  tester: {
    heading: "Test de botones del ratón",
    description:
      "Pulsa cada botón de tu ratón dentro del panel de abajo y mira cómo se mueven los contadores. El clic derecho queda capturado para que no se abra ningún menú, y cualquier botón que no se registre aparece de inmediato.",
    linkLabel: "Guía completa y preguntas frecuentes →",
  },
  allTools: {
    heading: "Todas las herramientas",
    description:
      "Cada una mide una parte distinta de tu hardware de entrada y, cuando terminas, te explica qué significan sus números.",
    blurbs: {
      "mouse-test":
        "Comprueba los cinco botones, la rueda de scroll y el comportamiento del doble clic, y detecta el chatter del switch.",
      "scroll-test":
        "Detecta saltos invertidos, muescas saltadas y pasos irregulares antes de que te cuesten un clic perdido.",
      "keyboard-test":
        "Encuentra teclas muertas, teclas atascadas y el número exacto de pulsaciones simultáneas que tu teclado puede manejar.",
      "cps-test":
        "Mide tus clics por segundo entre 1 y 60 segundos y comprueba si tu marca se mantiene.",
      "polling-rate-test":
        "Descubre la frecuencia de sondeo real de tu ratón en Hz con eventos de puntero sin procesar, no con estimaciones de fotogramas por segundo.",
    },
  },
  why: {
    heading: "Por qué hacer las pruebas en el navegador",
    description:
      "La mayoría de los problemas de hardware se manifiestan como eventos que nunca llegan, o que llegan dos veces. El navegador ve exactamente esos eventos, lo que lo convierte en un diagnosticador inusualmente bueno para los fallos que la gente se encuentra de verdad.",
    items: [
      {
        title: "Prueba toda la cadena",
        body: "Una pulsación física tiene que atravesar el switch, el controlador, el driver y el sistema operativo antes de que tu aplicación la vea. Esta prueba falla en el punto exacto donde se rompe esa cadena, y por eso puede decirte que un ratón que funciona en otro equipo está apuntando al software y no al hardware.",
      },
      {
        title: "No te pide nada",
        body: "No hay instalador, ni driver, ni cuenta, ni permisos de administrador. La página funciona en el portátil de trabajo bloqueado, que es justo donde suelen aparecer los problemas de hardware y donde no puedes instalar ninguna utilidad.",
      },
      {
        title: "No puede mentirte",
        body: "Un contador en cero para un botón que pulsaste con toda seguridad no es una opinión. Es la ausencia de un evento, y es lo más útil que puede decirte un diagnosticador.",
      },
    ],
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿Funcionan estas pruebas sin instalar nada?",
        answer:
          "Sí. Todas las herramientas de aquí usan eventos estándar del navegador (ratón, rueda, teclado y puntero), así que se ejecutan en la página que ya tienes abierta. No hay descargas, ni extensiones, ni cuentas, ni software que configurar.",
      },
      {
        question: "¿Se recoge o se sube alguno de mis datos?",
        answer:
          "No. Los clics, las pulsaciones de teclas y los eventos de scroll se cuentan dentro de la página y se descartan en cuanto cierras o recargas la pestaña. No se transmite nada a un servidor, no se crea ningún perfil y no se guarda información del dispositivo.",
      },
      {
        question: "¿Qué puede detectar realmente una prueba en el navegador?",
        answer:
          "Todo lo que el navegador recibe: qué botones se registran, si la rueda informa en las dos direcciones, si un clic llega dos veces, con qué rapidez tu puntero informa de su posición y si tu teclado pierde pulsaciones en combinaciones. No puede ver el interior de tu hardware, así que no medirá la latencia del switch, ni leerá los DPI del sensor, ni te dirá el recorrido físico de una muesca de la rueda.",
      },
      {
        question:
          "Mi ratón se salta páginas. ¿Qué prueba tengo que hacer primero?",
        answer:
          "Empieza por el test de rueda de scroll, desplazándote despacio en una sola dirección. Un encoder sucio o gastado produce inversiones de dirección y pasos desiguales a velocidades bajas. Si la rueda se comporta bien pero las páginas siguen saltando, haz después el test de botones del ratón para descartar un switch que falla y comprueba si la aceleración del puntero está activada en tu sistema operativo.",
      },
      {
        question: "¿Funciona con un portátil que tiene touchpad?",
        answer:
          "Sí, con una salvedad. Un touchpad no informa de muescas físicas, así que el test de scroll mide su velocidad y consistencia en lugar de contar muescas. El test de teclado, el de CPS y el de frecuencia de sondeo funcionan con normalidad sobre un touchpad, aunque un ratón físico te dará una marca de velocidad de clic mucho más representativa.",
      },
      {
        question: "¿Es realmente gratis?",
        answer:
          "Sí. No hay registro, ni límite de uso, ni nada que comprar. El sitio se financia con publicidad, y la publicidad se mantiene debajo de la herramienta para que nunca estorbe aquello que viniste a hacer.",
      },
    ],
  },
};

export const toolsIndex: ToolsIndexContent = {
  metaTitle: "Todas las herramientas",
  metaDescription:
    "Todos los diagnósticos gratuitos en el navegador de MouseLab: botones del ratón, rueda de scroll, teclado, velocidad de clic y frecuencia de sondeo.",
  heading: "Todas las herramientas",
  intro:
    "Cinco diagnósticos gratuitos que leen los eventos que tu equipo recibe. Todos se ejecutan en el navegador, no requieren instalación y, cuando terminas, te explican qué significan sus números.",
  blurbs: {
    "mouse-test":
      "Pulsa todos los botones y mira los contadores. Detecta botones muertos, pulsaciones perdidas y el chatter de doble clic de un micro-switch gastado.",
    "scroll-test":
      "Desplázate de forma constante en una sola dirección y la prueba marca los eventos invertidos, las muescas saltadas y el tamaño de paso irregular, y te dice si estás con una rueda de muescas o con un touchpad.",
    "keyboard-test":
      "Verifica cada tecla, detecta teclas atascadas y ejecuta una prueba de rollover que encuentra el número exacto de pulsaciones simultáneas que tu teclado puede manejar.",
    "cps-test":
      "Un test de clics por segundo de uno a sesenta segundos con los CPS en vivo, tu mejor marca y el desglose segundo a segundo.",
    "polling-rate-test":
      "Mide la frecuencia de sondeo real de tu ratón en hercios usando eventos de puntero sin procesar, para que veas la tasa del dispositivo y no la frecuencia de refresco de tu monitor.",
  },
};

export const about: AboutContent = {
  metaTitle: "Acerca de",
  metaDescription:
    "Cómo funciona MouseLab, qué puede y qué no puede detectar cada test, y cómo tratamos tus datos.",
  heading: "Acerca de {brand}",
  lead: "Creamos un conjunto de diagnósticos en el navegador para quienes sospechan que su ratón o su teclado se comportan mal pero no tienen forma de demostrarlo. Cada herramienta informa de lo que tu equipo recibió realmente y cada página explica qué significan esos resultados en un lenguaje sencillo.",
  sections: [
    {
      heading: "Cómo funcionan las pruebas",
      paragraphs: [
        "Cuando pulsas un botón del ratón, el switch que hay dentro se cierra, el controlador del dispositivo registra el cambio, el sistema operativo lo traduce y, por fin, el navegador recibe un evento. La misma cadena ocurre con la rueda, el teclado y el sensor del puntero. Cada prueba escucha ese último flujo de eventos e informa de lo que llegó.",
        "Eso significa que una prueba falla en el punto exacto donde se rompe la cadena. Un botón que no informa nada apunta al switch, al cable, al puerto o al driver. Un botón que informa dos pulsaciones por una pulsación física apunta a un rebote de contacto en el switch. Una rueda que se invierte apunta al encoder. La medición es inequívoca, y eso es justo lo que la hace útil cuando te preguntas si conviene limpiar un ratón o cambiarlo.",
      ],
    },
    {
      heading: "Lo que estas herramientas no pueden hacer",
      paragraphs: [
        "Preferimos ser claros con los límites antes que dejarte persiguiendo un problema para el que la herramienta nunca se diseñó.",
      ],
      bullets: [
        "No pueden medir la latencia de actuación del switch. El navegador ve un evento que ya ha llegado, no el instante en que se cerró el contacto metálico.",
        "No pueden leer los DPI del sensor óptico. Eso exige acceso directo al sensor, algo que la plataforma web omite de forma deliberada.",
        "No pueden decirte el recorrido físico de una muesca de la rueda. Los navegadores informan del scroll en píxeles, líneas o páginas, no en milímetros.",
        "No pueden diagnosticar como averiado un touchpad que simplemente no tiene muescas. El test de scroll etiqueta los touchpads como dispositivos de scroll suave en lugar de puntuarlos.",
        "No pueden confirmar que el hardware esté sano en términos absolutos. Confirman que tu hardware y tu equipo están de acuerdo, que es justamente lo que se rompe en el día a día.",
      ],
    },
    {
      heading: "Cómo tratamos tus datos",
      paragraphs: [
        "Los recuentos, los tiempos y las lecturas de teclas se guardan en la memoria de la pestaña abierta y se descartan cuando la cierras o la recargas. No almacenamos lo que hiciste clic, lo que escribiste ni ningún identificador asociado a tu dispositivo, y no existe ningún sistema de cuentas que crear.",
        "Sí utilizamos analítica web estándar y respetuosa con la privacidad para ver qué páginas son útiles y cuáles no. Todos los detalles están en la {privacyPolicy}.",
      ],
    },
    {
      heading: "Cómo se financia el sitio",
      paragraphs: [
        "Con publicidad. Cada herramienta sigue siendo gratuita e ilimitada, y colocamos la publicidad debajo de la herramienta en lugar de encima, de modo que aquello que viniste a usar nunca se desplaza fuera de la pantalla para dejarle sitio a un anuncio. Si alguna vez hiciera falta un plan de pago, sería para algo realmente adicional, como guardar el historial o exportar un informe, nunca para la medición básica.",
      ],
    },
  ],
  privacyLinkLabel: "política de privacidad",
};

export const contact: ContactContent = {
  metaTitle: "Contacto",
  metaDescription:
    "Ponte en contacto para informar de un error en alguna de las herramientas, pedir un nuevo diagnóstico o corregir una de nuestras guías.",
  heading: "Contacto",
  lead: "¿Has encontrado un error, ves algo que hemos hecho mal o quieres un diagnóstico que todavía no hemos creado? Escríbenos y lo revisamos.",
  cards: [
    {
      title: "Informar de un error",
      body: "Cuéntanos qué herramienta estabas usando, qué esperabas y qué ocurrió en su lugar. Si un contador no se movió cuando esperabas que se moviera, ese es el dato más útil que puedes darnos.",
    },
    {
      title: "Pedir una herramienta",
      body: "No hay ningún límite para lo que puedes pedir. Un diagnóstico que mida algo que nadie ha medido antes es exactamente el tipo de cosa que pertenece a este sitio.",
    },
    {
      title: "Corregir una guía",
      body: "Cada explicación de este sitio está escrita para ser técnicamente precisa. Si un fragmento es incorrecto, poco claro o pudiera llevar a alguien a comprar la pieza equivocada, queremos saberlo.",
    },
  ],
  messageHeading: "Envíanos un mensaje",
  messageBody:
    "Escribe a {email}. Leemos todo y respondemos a la mayoría de los mensajes en un par de días laborables.",
  messageNote:
    "Por favor, no envíes información personal ni detalles sobre la configuración de tu dispositivo. Nada de lo que envíes hace falta para diagnosticar una herramienta y preferiríamos que no lo hicieras.",
};


export const privacy: PrivacyContent = {
  metaTitle: "Política de privacidad",
  metaDescription:
    "Qué recoge MouseLab, qué no recoge y qué ocurre con los datos de medición que generas.",
  heading: "Política de privacidad",
  lastUpdated: "Última actualización: 22 de noviembre de 2026",
  sections: [
    {
      heading: "Los datos de medición se quedan en tu dispositivo",
      body: "Cuando ejecutas una prueba, los clics, las pulsaciones de teclas, los eventos de scroll y las muestras del puntero se cuentan en la memoria de la pestaña abierta del navegador. No se transmiten a ninguna parte. Al cerrar o recargar la pestaña se descartan de forma permanente. No podemos recuperar una lectura que hiciste ayer, porque nunca se guardó.",
    },
    {
      heading: "Sin cuentas ni identificadores",
      body: "No hay registro, ni inicio de sesión, ni perfil de usuario. No te pedimos una dirección de correo electrónico para usar una herramienta, y no creamos ningún identificador persistente asociado a tu dispositivo o tu navegador con fines de medición.",
    },
    {
      heading: "Analítica web",
      body: "Utilizamos analítica respetuosa con la privacidad para entender qué páginas y qué herramientas son útiles y cuáles necesitan trabajo. Registran visualizaciones agregadas, información de referencia y datos aproximados de dispositivo y país. No registran el contenido de tus sesiones de prueba ni se utilizan para construir un perfil publicitario tuyo.",
    },
    {
      heading: "Publicidad",
      body: "Este sitio se financia con publicidad, y para mostrarla usamos Google AdSense. Google y sus socios pueden instalar cookies o usar tecnologías similares para servir y medir los anuncios. Puedes controlar cómo se usa la publicidad personalizada desde los ajustes de tu navegador, desde la página «Google's Ads Settings» y desde las opciones que ofrece Google en Google Advertising, en la página de Privacidad y Condiciones de Google y en aboutads.info para los proveedores de terceros que participan.",
    },
    {
      heading: "Contenido de terceros",
      body: "Los scripts publicitarios solo se cargan cuando interactúas con la página, lo que evita que se ejecuten antes de que hayas mostrado ninguna señal de interés. Las fuentes se sirven desde nuestro propio dominio, así que al abrir una página no se hace ninguna petición a un proveedor de fuentes.",
    },
    {
      heading: "Contacto",
      body: "Si tienes alguna duda sobre esta política o quieres que se elimine algo, escribe a hello@mouselab.io y lo gestionamos.",
    },
  ],
  copyright: "© {year} {brand}",
};
