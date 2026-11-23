import type { ToolContent } from "../../types";

export const scrollTest: ToolContent = {
  slug: "scroll-test",
  name: "Test de rueda de scroll",
  h1: "Test de rueda de scroll",
  metaTitle:
    "Test de rueda de scroll — Detecta saltos, scroll invertido y tirones",
  metaDescription:
    "Testea la rueda de scroll de tu ratón en línea. Detecta el scroll invertido, las muescas saltadas y los pasos irregulares, y te dice si el problema está en la rueda, en el navegador o en el sistema operativo. Gratis e instantáneo.",
  category: "Herramientas de ratón",
  intro: [
    "Una rueda de scroll gastada rara vez deja de funcionar del todo. Se salta alguna muesca de vez en cuando, se desplaza un poco más de la cuenta en una dirección o salta hacia atrás a mitad de una página larga. El test de rueda de scroll captura cada evento de rueda que tu navegador recibe para que veas exactamente qué ocurre, evento a evento.",
    "Haz primero la prueba despacio y después rápido, porque las dos velocidades dejan al descubierto fallos completamente distintos. Un encoder sucio se nota a velocidad lenta. Un encoder que está fallando o una conexión inalámbrica con la batería baja se notan cuando le das un tirón a la rueda.",
  ],
  steps: [
    {
      title: "Elige la duración de la prueba",
      body: "Quince segundos es un buen valor por defecto. Usa una ventana más larga para que la media sea más fiable o cambia al modo infinito si quieres dejar el gráfico en marcha mientras trabajas.",
    },
    {
      title: "Desplázate de forma constante en una dirección",
      body: "Pon el cursor sobre el panel de prueba y desplázate solo hacia abajo. El panel captura la rueda para que la propia página no se mueva. Mantener una sola dirección cada vez importa, porque si inviertes a mitad de la prueba el análisis de la dirección no significa nada.",
    },
    {
      title: "Invierte la dirección y desplázate hacia arriba",
      body: "Cuando termine la prueba, empieza otra y desplázate solo hacia arriba. Los totales de arriba y de abajo se mantienen separados, así que una rueda que solo transmite en una dirección se hace evidente.",
    },
    {
      title: "Lee el diagnóstico",
      body: "El informe busca saltos invertidos, pasos de tamaño irregular y tirones. Combínalo con el test de botones del ratón si la rueda parece estar bien pero la página sigue saltando.",
    },
  ],
  sections: [
    {
      heading: "Lo que el navegador recibe realmente",
      paragraphs: [
        "El scroll no es un único evento. Cada vez que mueves la rueda, el sistema operativo envía al navegador un flujo de actualizaciones individuales, cada una con un delta vertical, un delta horizontal y un indicador de unidad. La prueba registra ese flujo tal y como llega.",
        "El indicador de unidad importa más de lo que la mayoría espera. El modo píxel es el predeterminado moderno y es lo que obtienes de la mayoría de las ruedas actuales y de todos los touchpads. El modo línea y el modo página son comportamientos heredados, y algunos drivers antiguos y programas de escritorio remoto todavía los emiten. Una rueda que informa en modo línea no está necesariamente rota, pero se sentirá distinta y puede romper el scroll dentro de algunas aplicaciones web que asumen deltas en píxeles.",
        "La dirección se codifica con el signo. Un delta vertical positivo significa que el contenido sube, que es lo que hace el scroll hacia abajo. Un delta negativo significa scroll hacia arriba. Ese signo es exactamente lo que la prueba vigila cuando busca saltos invertidos.",
      ],
    },
    {
      heading: "El scroll invertido y qué lo causa de verdad",
      paragraphs: [
        "Un salto invertido es un evento de rueda cuyo signo contradice la dirección en la que te has estado desplazando. Durante un tirón rápido, unos cuantos son normales: el sistema operativo aplica un pequeño suavizado inercial que puede desviar el último evento de un gesto. Un flujo constante de ellos durante un scroll lento y deliberado es una avería real.",
        "La causa habitual es un encoder sucio o gastado. El encoder es una pequeña rueda dentada con dos superficies de contacto que se deslizan entre sí al girar la rueda. El polvo, la grasa seca o un diente doblado provocan un corte momentáneo del contacto y el dispositivo informa brevemente de la dirección contraria. Limpiar el encoder resuelve el fallo en la gran mayoría de los casos.",
        "En macOS, comprueba que el desplazamiento natural no se haya activado sin querer. Con el desplazamiento natural, al bajar el contenido también baja, y el signo de cada evento queda invertido respecto a lo que la prueba espera. Invierte la dirección en el test si lo tienes activado, porque la rueda funciona perfectamente.",
        "En el navegador, usa una única dirección durante toda la prueba. Invertir a mitad de la prueba se marca porque produce exactamente la misma firma que el chatter del encoder y, de lo contrario, se informaría de una avería que no existe.",
      ],
    },
    {
      heading: "Muescas saltadas y pasos desiguales",
      paragraphs: [
        "Las ruedas con muescas informan de un salto discreto por muesca. En un ratón típico de Windows eso son 100 o 120 unidades de delta vertical por muesca, según lo que el sistema suponga de píxeles por línea. Si te desplazas diez muescas hacia abajo despacio y solo llegan ocho incrementos, el encoder está perdiendo contactos.",
        "Las ruedas de giro libre y los touchpads se comportan de otra forma y no están rotos. Emiten un flujo continuo de muchos deltas pequeños en lugar de pasos discretos, así que contar muescas no tiene sentido. La prueba detecta con cuál de los dos te estás encontrado y etiqueta la lectura en consecuencia, en lugar de puntuar como averiado un touchpad perfectamente sano.",
        "El tirón es la variación del tamaño del paso dentro de una misma prueba. Se espera una pequeña cantidad incluso en una buena rueda, porque el encoder óptico tiene una resolución finita y la geometría de las muescas no es perfectamente uniforme. Una variación grande y constante apunta a un encoder doblado o a una rueda que ha sufrido un daño físico.",
      ],
    },
    {
      heading: "Cómo limpiar una rueda que se salta o se invierte",
      paragraphs: [
        "Apaga el ratón por completo antes de nada. En un ratón inalámbrico, retira las pilas en lugar de limitarte a apagarlo, para que el encoder no quede bajo carga por la energía residual.",
        "Retira la rueda del ratón y aplica alcohol isopropílico al 90 % a un paño sin pelusa. Deja que el alcohol penetre en la rueda del encoder y en la ranura donde se apoya contra la placa de circuito. Gira la rueda despacio de un extremo a otro unas doce veces para que el alcohol llegue a las superficies de contacto y, después, deja secar por completo antes de volver a montarlo. El aire comprimido por sí solo tiende a empujar los restos más hacia dentro de la carcasa.",
        "Si la rueda sigue saltando después de una limpieza a fondo, el encoder se ha gastado. En un ratón con piezas reemplazables, un encoder nuevo es barato y devuelve la rueda a su estado original. En un ratón sellado, este es el momento en que la sustitución se vuelve la opción realista.",
        "Ya que estás ahí, comprueba la batería del ratón inalámbrico. Un nivel de batería bajo es una causa frecuente de eventos de rueda irregulares que se resuelven solos al cambiar la pila; merece la pena descartarlo antes de abrir nada.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cómo pruebo mi rueda de scroll?",
      answer:
        "Pon el cursor sobre el panel de prueba y desplázate de forma constante en una dirección; después repite en la contraria. El panel captura la rueda para que la página se quede quieta mientras se registran los eventos. Usa una velocidad lenta para sacar a la luz un encoder sucio y una velocidad alta para sacar a la luz uno que está fallando.",
    },
    {
      question: "¿Qué significa un salto invertido?",
      answer:
        "Que un evento de rueda informa de la dirección contraria a la que te estás desplazando. Unos cuantos durante un tirón rápido son artefactos normales del suavizado. Un flujo constante durante el scroll lento significa que el contacto del encoder se corta y se vuelve a hacer, lo que suele deberse al polvo o a un encoder gastado, y se soluciona limpiando.",
    },
    {
      question: "¿Puedo probar un touchpad o un Magic Mouse con esta herramienta?",
      answer:
        "Sí puedes, y la herramienta te dirá que está trabajando con un dispositivo de scroll suave y no con una rueda de muescas. Los touchpads y las ruedas de giro libre no informan de muescas físicas, así que contar muescas no significaría nada. La prueba mide su velocidad y consistencia en lugar de puntuarlos como averiados.",
    },
    {
      question: "En mi Mac la rueda salta hacia atrás y solo en el Mac. ¿Está rota?",
      answer:
        "Casi seguro que no. macOS activa el desplazamiento natural de forma predeterminada, lo que invierte la dirección de cada evento de rueda respecto a lo que la prueba espera. Desactiva el desplazamiento natural en los ajustes del sistema o invierte la dirección dentro de la prueba y las lecturas se normalizarán.",
    },
    {
      question: "¿Por qué mi rueda solo se salta cuando me desplazo rápido?",
      answer:
        "El scroll rápido genera ráfagas largas y veloces de eventos y deja menos tiempo al encoder para estabilizarse entre muescas. Una rueda que ya está al límite, algo sucia o con la batería débil, tiende a fallar bajo esa carga. Pruébala también despacio: si la pasada lenta sale limpia y la rápida se salta, el encoder está gastado y no se trata de una lectura inconsistente.",
    },
    {
      question: "¿El test de scroll tiene la precisión suficiente para juzgar un ratón?",
      answer:
        "Es preciso en todo lo que un navegador puede observar: la dirección, el modo de unidad, el tamaño del paso, la frecuencia de eventos y la consistencia. No puede medir el recorrido físico que daría la rueda, así que no te dará milímetros de desplazamiento por muesca ni te dirá cuánto está gastado el tope mecánico.",
    },
    {
      question: "¿El test funciona en una pantalla táctil?",
      answer:
        "El scroll táctil produce eventos de toque, no eventos de rueda, así que el panel de la rueda se quedará vacío en un dispositivo táctil. Las herramientas están pensadas para ratones, teclados y otros dispositivos de puntero.",
    },
    {
      question: "En los juegos mi rueda se salta, pero en el uso normal no. ¿Por qué?",
      answer:
        "Los juegos suelen aplicar su propio tratamiento del scroll, con suavizado y aceleración, y a menudo usan datos de entrada en bruto que omite parte del procesamiento del navegador. Una rueda que está apenas gastada puede ir bien a la velocidad normal de lectura y fallar con las entradas rápidas y repetidas que genera un juego. Pruébala con tirones rápidos y repetidos en lugar de un único scroll lento.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "cps-test", "keyboard-test"],
};
