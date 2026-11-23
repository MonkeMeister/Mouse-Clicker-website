import type { ToolContent } from "../../types";

export const pollingRateTest: ToolContent = {
  slug: "polling-rate-test",
  name: "Test de frecuencia de sondeo",
  h1: "Test de frecuencia de sondeo",
  metaTitle:
    "Test de frecuencia de sondeo — Mide la tasa de sondeo de tu ratón en Hz",
  metaDescription:
    "Mide la frecuencia de sondeo de tu ratón en el navegador usando eventos de puntero sin procesar. Consulta los Hz medios, los Hz máximos y la estabilidad, y averigua qué método de muestreo usó tu navegador.",
  category: "Herramientas de ratón",
  intro: [
    "La frecuencia de sondeo indica cada cuánto tiempo tu ratón informa de su posición al ordenador, y se mide en hercios. Un ratón de 1000 Hz informa de su posición mil veces por segundo; uno de 125 Hz, ciento veinticinco veces. La prueba mide la frecuencia que tu navegador recibe de verdad y muestra tanto la media como el máximo.",
    "La medición se toma de los eventos de puntero sin procesar, que recuperan las muestras que el navegador agrupa en un único fotograma. Eso importa: sin muestreo en bruto, un ratón de 1000 Hz se lee como 60 o 120 Hz en un monitor de 60 o 120 Hz, que es el error más habitual en los tests de frecuencia de sondeo hechos en el navegador.",
  ],
  steps: [
    {
      title: "Pon el cursor sobre el área de prueba",
      body: "El área necesita recibir movimiento continuo del puntero. Dejar el ratón en el centro de una alfombrilla grande y moverlo en círculos amplios y lentos da la lectura más limpia.",
    },
    {
      title: "Mueve el ratón de forma continua durante diez segundos",
      body: "No dejes de moverlo. Una lectura tomada con el ratón quieto no significa nada, porque la mayoría de los ratones dejan de informar cuando nada cambia.",
    },
    {
      title: "Comprueba el método de muestreo que se muestra",
      body: "El panel indica si estaban disponibles los eventos agrupados sin procesar o si la lectura recurrió al muestreo a nivel de fotograma. El muestreo en bruto es lo que quieres; un recurso al nivel de fotograma limita la lectura alcanzable a la frecuencia de refresco de tu monitor.",
    },
    {
      title: "Mira la cifra de estabilidad",
      body: "Un ratón que sondea a una frecuencia estable muestra una agrupación compacta alrededor de su valor nominal. Una variación grande suele indicar un problema de conexión y no una frecuencia distinta.",
    },
  ],
  sections: [
    {
      heading: "Cómo funciona la medición",
      paragraphs: [
        "Los navegadores muestrean el movimiento del puntero una vez por fotograma para el renderizado, pero el hardware subyacente informa muchas más veces. Un ratón de 1000 Hz genera una actualización de posición cada milisegundo y, en un fotograma de 16,7 milisegundos a 60 Hz, llegan aproximadamente dieciséis de esas actualizaciones durante el fotograma. El navegador descarta todas menos la última para el renderizado.",
        "La API de eventos agrupados recupera las muestras descartadas. Cada evento de puntero lleva la lista completa de posiciones que se fusionaron en él, cada una con su propia marca de tiempo de alta resolución. Dividir el número de muestras entre el tiempo transcurrido da la frecuencia real de informes del dispositivo en lugar de la del monitor.",
        "Cuando esa API no está disponible, la herramienta recurre a contar eventos de puntero individuales, lo que solo puede informar a la frecuencia de refresco del monitor. El panel etiqueta qué método produjo el número, así que una lectura de 60 Hz en un ratón de 1000 Hz se identifica de inmediato como un recurso y no como un ratón lento.",
      ],
    },
    {
      heading: "Frecuencias de sondeo habituales y para qué sirven",
      paragraphs: [
        "125 Hz fue el valor predeterminado durante años en los ratones de oficina y sigue siendo habitual en hardware barato. 250 Hz y 500 Hz aparecen en ratones para juegos de gama media. 1000 Hz es el estándar competitivo generalista. 2000 Hz, 4000 Hz y 8000 Hz aparecen en ratones para entusiastas y requieren tanto un ratón capaz como un navegador que exponga los eventos de puntero en bruto.",
        "La ventaja práctica de pasar de 125 Hz a 1000 Hz es real pero moderada: entre uno y dos milisegundos menos de latencia de entrada, lo que importa en los juegos de disparos competitivos y es imperceptible en el trabajo normal. El salto de 1000 Hz a 8000 Hz es mucho menor todavía, bastante por debajo de un milisegundo de beneficio adicional, y se nota sobre todo como mayor uso de CPU y más consumo.",
        "Las frecuencias altas también interactúan con la tasa de fotogramas. En un monitor de 240 Hz, un ratón de 1000 Hz se muestrea unas cuatro veces por fotograma, y la diferencia visible entre 1000 Hz y 4000 Hz es mínima porque el monitor no puede mostrarla.",
      ],
    },
    {
      heading: "Por qué una lectura puede no coincidir con la caja",
      paragraphs: [
        "La frecuencia de informes es una propiedad del ratón, pero lo que mides es la frecuencia a la que tu equipo recibe los informes. Entre ambas cosas están la conexión y el sistema operativo, y las dos pueden reducir la frecuencia efectiva.",
        "Un ratón inalámbrico de 2,4 GHz a poca distancia suele ser estable. A distancia o con interferencias, el receptor pierde informes y la lectura baja y fluctúa. Lo mismo ocurre con la batería baja, cuando el ratón reduce deliberadamente su frecuencia de informes para ahorrar energía.",
        "También importan los ajustes de sondeo USB. Un controlador configurado para 125 Hz no entregará informes de 1000 Hz por mucho que el ratón sea capaz de hacerlo. En Windows, las propiedades avanzadas de un USB Root Hub exponen el intervalo de sondeo del dispositivo.",
        "Por último, la gestión de energía puede interferir. En Windows, desactivar la suspensión selectiva de USB del controlador correspondiente es una solución habitual para los ratones que pierden informes durante los periodos de inactividad.",
      ],
    },
    {
      heading: "Frecuencias altas y tu tasa de fotogramas",
      paragraphs: [
        "Hay un compromiso real. Un ratón que sondea a 8000 Hz genera ocho mil eventos de puntero cada segundo, y cada uno supone trabajo para el navegador y el sistema operativo. En una página con mucha carga, eso puede costar una cantidad apreciable de tiempo de fotograma.",
        "Esta es una de las razones para probar tu frecuencia de sondeo en la página en la que realmente juegas y no de forma aislada. Si tu juego mantiene una tasa de fotogramas estable con el ratón a 8000 Hz, déjalo así. Si los tiempos de fotograma se vuelven irregulares, baja a 4000 Hz y compara. La diferencia de latencia de entrada entre los dos es menor que la diferencia en suavidad.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué frecuencia de sondeo es buena para jugar?",
      answer:
        "1000 Hz es el objetivo razonable para la mayoría del juego competitivo. Es el estándar generalista, la diferencia de latencia frente a 500 Hz es pequeña pero medible y el coste en CPU es asumible. Ir más allá de ahí da rendimientos decrecientes salvo que persigas un juego concreto que se beneficie.",
    },
    {
      question: "¿Por qué el navegador muestra una frecuencia de sondeo menor que la de las especificaciones de mi ratón?",
      answer:
        "Normalmente porque el navegador solo expuso eventos de puntero a nivel de fotograma en lugar de eventos agrupados sin procesar, lo que limita la lectura a la frecuencia de refresco de tu monitor. El panel del test indica qué método se usó. Si informa de un recurso, la frecuencia real es mayor que la que se muestra.",
    },
    {
      question: "¿8000 Hz es realmente mejor que 1000 Hz?",
      answer:
        "Marginalmente, y sobre todo en el tiempo de fotograma. La mejora de latencia es una fracción de milisegundo, que pocos jugadores perciben. El coste es ocho veces más eventos de puntero por segundo para que el navegador y el sistema operativo gestionen, lo que puede afectar al ritmo de fotogramas en una página con mucha carga.",
    },
    {
      question: "¿Cómo pruebo la frecuencia de sondeo de mi ratón?",
      answer:
        "Mantén el cursor en movimiento continuo sobre el área de prueba durante unos diez segundos. Dejar el ratón quieto no da lectura, porque la mayoría de los ratones dejan de informar cuando nada se mueve. Los círculos amplios y lentos dan el resultado más limpio.",
    },
    {
      question: "¿Por qué fluctúa mi frecuencia de sondeo durante la prueba?",
      answer:
        "La fluctuación suele significar que se están perdiendo informes entre el ratón y el ordenador. Las causas comunes son una conexión inalámbrica débil o con interferencias, la batería baja que hace que el ratón reduzca su frecuencia y la gestión de energía USB que suspende el puerto. Una conexión con cable y un cable corto es la referencia con la que comparar.",
    },
    {
      question: "¿La frecuencia de sondeo afecta a la suavidad del cursor?",
      answer:
        "Afecta a la latencia entre el movimiento de tu mano y la respuesta del juego. La suavidad visible del cursor está limitada por la frecuencia de refresco de tu monitor, y por eso un ratón de 1000 Hz puede verse idéntico a uno de 500 Hz en un monitor de 60 Hz aunque la entrada llegue antes.",
    },
    {
      question: "¿Funciona este test con ratones inalámbricos?",
      answer:
        "Sí, y en el caso inalámbrico es donde la lectura resulta más informativa. Mostrará tanto la frecuencia nominal como su estabilidad a lo largo del tiempo, que es como un problema de conexión se hace visible. Una lectura estable de 1000 Hz significa que el enlace está en buen estado.",
    },
    {
      question: "¿Puedo aumentar la frecuencia de sondeo de mi ratón?",
      answer:
        "A veces. Muchos ratones para juegos incluyen software que permite fijar la frecuencia en 500, 1000 u 8000 Hz, y algunos tienen un interruptor físico en la parte de abajo. La prueba te mostrará la frecuencia con la que el ratón está configurado ahora mismo.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "keyboard-test"],
};
