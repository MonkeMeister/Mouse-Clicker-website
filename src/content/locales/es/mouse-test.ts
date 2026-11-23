import type { ToolContent } from "../../types";

export const mouseTest: ToolContent = {
  slug: "mouse-test",
  name: "Test de botones del ratón",
  h1: "Test de botones del ratón",
  metaTitle:
    "Test de botones del ratón — Comprueba todos los botones de tu ratón en línea",
  metaDescription:
    "¿Tu ratón hace doble clic? Testea los cinco botones, la rueda de scroll y el doble clic directamente en tu navegador. Detecta botones muertos, chatter de doble clic y clics perdidos. Gratis e instantáneo.",
  category: "Herramientas de ratón",
  intro: [
    "Este test de botones del ratón (mouse) registra cada clic, evento de rueda y pulsación de botón que tu navegador recibe de verdad y después te muestra si los números cuadran. ¿Tu ratón hace doble clic por su cuenta? Este test te lo responde en unos diez segundos: pulsa un botón una sola vez y, si una única pulsación suma dos clics, el switch está rebotando y el panel te indica el fallo junto con el intervalo exacto. Pulsa cada botón de tu ratón real dentro del área de prueba y mira cómo se mueven los contadores en tiempo real. Si un botón no registra nada, si un clic llega como dos o si las pulsaciones se pierden cuando clicas rápido, los contadores te lo dirán.",
    "Todo se ejecuta localmente en tu navegador usando los eventos estándar del ratón. No hay descargas, ni extensiones, ni cuentas, y nada sobre tus clics o tu hardware se sube a ninguna parte.",
  ],
  steps: [
    {
      title: "Abre el área de prueba y lleva el cursor dentro",
      body: "Haz clic en cualquier punto del panel gris. El panel captura el ratón para que el clic derecho no abra el menú contextual y los clics sueltos no activen enlaces en otras partes de la página.",
    },
    {
      title: "Pulsa cada botón una vez, por separado",
      body: "Izquierdo, derecho, central y después los dos botones del pulgar, si tu ratón los tiene. Pulsa cada uno varias veces para que veas los contadores separarse con claridad. Observa cómo el diagrama de la izquierda se ilumina en la zona correspondiente.",
    },
    {
      title: "Gira la rueda hacia arriba y luego hacia abajo",
      body: "Desplaza la rueda lentamente en una dirección y después en la otra. Los contadores de arriba y de abajo registran cada dirección por separado, y así es como una rueda que solo registra en un sentido se hace evidente.",
    },
    {
      title: "Prueba un doble clic rápido para buscar chatter",
      body: "Haz un doble clic rápido en el mismo botón entre diez y veinte veces. Un micro-switch gastado enviará dos pulsaciones separadas por una sola pulsación física, y el test lo marcará como un fallo de doble clic indicando el intervalo exacto.",
    },
  ],
  sections: [
    {
      heading: "Cómo saber si el ratón hace doble clic",
      paragraphs: [
        "Un ratón hace doble clic cuando una sola pulsación física genera dos eventos de clic separados. La forma más rápida de averiguarlo es pulsar un botón una vez y observar dos números. El contador Total debería subir exactamente en uno. Si sube en dos, el botón está enviando una pulsación que tú nunca hiciste, y el panel lanza el aviso «Chatter de doble clic detectado» con el intervalo entre las dos pulsaciones en milisegundos. Ese intervalo es lo que separa un fallo de hardware del comportamiento normal: el chatter del switch aparece por debajo de 40 milisegundos, mientras que un doble clic hecho a propósito dura 200 milisegundos o más.",
        "El contador Doble también puede subir, porque el sistema operativo ve dos eventos reales de pulsación y los cuenta como un doble clic. Precisamente por eso un ratón con chatter selecciona un archivo y acto seguido empieza a renombrarlo, sin que tú toques nada dos veces.",
        "Haz la prueba en cuatro pasadas para estar seguro. Haz clic una vez y haz una pausa. Haz un doble clic normal y comprueba que el contador Doble sube exactamente en uno. Después somete el switch a presión haciendo doble clic en el mismo botón quince o veinte veces lo más rápido que puedas: un switch gastado activa el detector de chatter en cuestión de segundos. Por último, repite la prueba con un segundo ratón o en otro equipo: si el fallo sigue al ratón, es hardware; y si sigue al equipo, es un problema de drivers o de configuración.",
        "Si las dos pulsaciones están lo bastante separadas como para que tu sistema operativo las contara como un doble clic, el ratón no es el problema y la solución es un cambio de configuración, no una reparación. Windows: abre Propiedades del ratón y mueve el control de velocidad de doble clic hacia el extremo rápido. macOS: ajusta la «Velocidad de doble clic» en los ajustes del ratón. Linux: cambia el intervalo de doble clic en los ajustes de tu escritorio. Solo las pulsaciones que llegan dentro de la ventana de 40 milisegundos son chatter real de hardware, y esas necesitan limpieza o cambiar el switch.",
      ],
      bullets: [
        "Pasada de clic simple: pulsa una vez, espera un segundo y vuelve a pulsar. Una pulsación física debe sumar exactamente uno al contador Total",
        "Pasada de doble clic: haz un doble clic normal. El contador Doble debería subir en uno y el contador Total en dos",
        "Pasada de estrés: haz doble clic en el mismo botón entre 15 y 20 veces lo más rápido posible. El chatter de un switch gastado aparece de inmediato, con el intervalo exacto en milisegundos",
        "Pasada de contraste: repite la prueba con un segundo ratón o en otro equipo para separar un fallo de hardware de uno de software",
      ],
    },
    {
      heading: "Qué significa cada contador",
      paragraphs: [
        "Un ratón informa del estado de los botones mediante un pequeño conjunto de botones numerados. Tu navegador informa 0 para el botón izquierdo, 1 para el central, 2 para el derecho y 3 y 4 para los dos botones del pulgar que llevan la mayoría de los ratones para juegos y ergonómicos. La prueba separa cada uno en su propio contador, así que un ratón con un botón lateral roto se detecta en lugar de quedar escondido dentro del total.",
        "El total de clics es la suma de todas las pulsaciones. Si el total y los contadores individuales difieren en más de lo que son las pulsaciones que recuerdas haber hecho, algo se está perdiendo o duplicando por el camino.",
        "Los clics dobles se cuentan a partir del reconocimiento de doble clic del propio navegador, que usa el umbral de tiempo del sistema operativo, normalmente entre 400 y 500 milisegundos. Si tu recuento de dobles clics es menor que el número de dobles clics que hiciste, lo más probable es que el ajuste de velocidad de doble clic de tu sistema operativo esté demasiado lento y no que el ratón esté averiado. Un switch con chatter también puede inflar este contador, porque el sistema operativo cuenta dos eventos reales de pulsación como un doble clic aunque tú solo pulsaras una vez.",
      ],
      bullets: [
        "Clic izquierdo: botón principal, con el que apuntas",
        "Clic derecho: el botón contextual; si se queda en cero, puede que el sistema operativo lo haya reasignado",
        "Clic central: la pulsación de la rueda, que también se usa para abrir enlaces en una pestaña nueva",
        "Botón lateral (avanzar) y botón lateral (retroceder): los botones del pulgar",
        "Scroll arriba / scroll abajo: eventos de la rueda, contabilizados por dirección",
      ],
    },
    {
      heading: "Los tres fallos que esta prueba detecta de verdad",
      paragraphs: [
        "Botón muerto. El fallo más simple y el más fácil de pasar por alto, porque la gente lo rodea sin darse cuenta. Si pulsas el botón derecho diez veces y el contador sigue en cero mientras el izquierdo responde al instante, el switch que hay debajo está muerto. El cable y el puerto USB están bien, porque el mismo cable transporta todas las demás señales.",
        "Chatter de doble clic. Es el fallo que arruina el clic rápido en juegos competitivos. Un micro-switch es un diminuto contacto metálico con muelle. A medida que se desgasta, el contacto desarrolla un punto áspero y rebota un instante: se cierra, se abre y se vuelve a cerrar en pocos milisegundos. El ratón informa entonces de dos clics por una sola pulsación física. El sistema operativo lo interpreta como un doble clic accidental y ejecuta una acción que no pediste, como seleccionar un solo archivo o disparar dos balas cuando querías una.",
        "Fallo intermitente. Menos habitual, pero más difícil de convivir con él, porque el botón funciona casi siempre. Durante el clic rápido, el contacto ocasionalmente no cierra del todo y la pulsación se pierde por completo. En un juego se nota como un ratón que al azar no registra. La prueba lo saca a la luz comparando el número de pulsaciones que registró con el número de clics que hiciste.",
      ],
    },
    {
      heading: "¿Es chatter del switch o simplemente un doble clic rápido?",
      paragraphs: [
        "No todo fallo de doble clic es culpa del ratón. Si la prueba muestra dos pulsaciones separadas por menos de 40 milisegundos, eso es chatter del switch: la señal nunca llegó a un estado de «soltado» entre las dos pulsaciones, lo que significa que las produjo el hardware. Si las dos pulsaciones están separadas por 200 milisegundos o más y el sistema operativo las registró como un doble clic, es simplemente un doble clic rápido y es totalmente normal.",
        "La distinción importa porque la solución es distinta. El chatter es un problema de hardware que se resuelve limpiando o cambiando el switch. Un umbral de doble clic lento es un problema de configuración que se resuelve en el panel de control del ratón de tu sistema operativo. El panel usa ese mismo umbral de 40 milisegundos, así que todo lo que marque como chatter es culpa del hardware y nada más.",
      ],
    },
    {
      heading: "Cómo arreglar los problemas que encuentra esta prueba",
      paragraphs: [
        "Para un botón muerto, empieza por la causa más simple: un conector mal enchufado o doblado. Vuelve a colocar el conector USB, prueba otro puerto directamente en el equipo en lugar de a través de un concentrador y prueba el ratón en otra máquina. Si el botón sigue muerto en un segundo equipo, el switch ha fallado y el ratón necesita reparación o sustitución.",
        "Para el chatter de doble clic, a menudo el switch se puede salvar. Abre el ratón y aplica una pequeña cantidad de limpiador de contactos o lubricante de switch directamente sobre el switch afectado; después acciona el botón repetidamente para que se reparta. Esto alarga la vida del switch, pero no revierte el desgaste. Para un ratón que usas a diario, cambiar el switch por una pieza de repuesto es una solución más fiable que limpiarlo.",
        "Para una rueda que solo registra en una dirección o se salta muescas, el problema suele ser el encoder y no el switch. Apaga el ratón, retira las pilas y limpia el encoder con alcohol isopropílico al 90 % sobre un paño sin pelusa; después gira la rueda de un extremo a otro una docena de veces o más, para que el alcohol llegue al contacto. El aire comprimido por sí solo suele limitarse a empujar el polvo más hacia dentro.",
        "Para los clics perdidos de forma intermitente cuando introduces las entradas rápidas, comprueba si el sistema operativo está aplicando aceleración al puntero. En Windows, desactiva «Mejorar la precisión del puntero» en Propiedades del ratón. En macOS, desactiva la aceleración del puntero en los ajustes de Accesibilidad. En Linux, revisa el perfil de aceleración de libinput. Una entrada en bruto sin aceleración elimina una fuente de tiempos erráticos que es fácil de confundir con un fallo de hardware.",
      ],
    },
    {
      heading: "Lo que esta prueba no puede decirte",
      paragraphs: [
        "Esto es una prueba de navegador, así que observa los eventos que recibe el navegador, no el estado eléctrico del switch. No puede medir la latencia de actuación del switch, leer los DPI en bruto del sensor ni decirte si una frecuencia de sondeo es realmente de 1000 Hz. Tampoco puede distinguir un sensor gastado de un switch gastado cuando ambos producen el mismo síntoma.",
        "Sí puede, en cambio, decirte lo que más importa en el uso real: si el ratón y el equipo se llevan bien. Cuando una pulsación física produce exactamente un evento, siempre, ese es el contrato del que depende el resto de tu software.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cómo puedo probar los botones de mi ratón online?",
      answer:
        "Lleva el cursor al área de prueba y pulsa cada botón por turnos: izquierdo, derecho, central y los dos botones del pulgar si tu ratón los tiene. Cada pulsación incrementa su propio contador y enciende la zona correspondiente del diagrama del ratón. Después gira la rueda hacia arriba y hacia abajo para comprobar por separado las dos direcciones de scroll.",
    },
    {
      question: "¿Qué botones del ratón puede comprobar este test?",
      answer:
        "Los cinco botones estándar: izquierdo, derecho, central y los botones laterales de avanzar y retroceder que llevan la mayoría de los ratones para juegos y ergonómicos. Los botones que van más allá de esos cinco los informa el navegador como pulsaciones no identificadas, así que también suman en el total, aunque no se puedan atribuir a una zona concreta.",
    },
    {
      question: "¿Necesito instalar algo para hacer un test de botones del ratón?",
      answer:
        "No. La prueba usa los eventos estándar de ratón del navegador y funciona por completo en la página que tienes abierta. No hay descargas, ni plugins, ni extensiones, ni cuentas que crear.",
    },
    {
      question: "¿Cómo sé si el ratón hace doble clic?",
      answer:
        "Haz clic una vez dentro del área de prueba y mira el contador Total. Si una sola pulsación física suma dos clics, el switch está rebotando y el panel informa de «Chatter de doble clic detectado» junto con el intervalo exacto entre las dos pulsaciones. Pulsa el mismo botón entre diez y veinte veces seguidas para que un switch gastado se delate: un switch sano nunca produce dos pulsaciones dentro de 40 milisegundos.",
    },
    {
      question: "¿Mi ratón hace doble clic por su cuenta? ¿Qué lo causa?",
      answer:
        "Significa que el switch que hay bajo el botón está rebotando: el contacto metálico se cierra, se abre y se vuelve a cerrar en pocos milisegundos, así que el ratón informa de dos pulsaciones por una sola pulsación física. Las causas habituales son micro-switches gastados, polvo o restos dentro del ratón y los daños que provoca el clic forzado repetido. Si las dos pulsaciones están separadas por más de 200 milisegundos, no es chatter: es el ajuste de velocidad de doble clic de tu sistema operativo, que puedes aumentar en Propiedades del ratón.",
    },
    {
      question: "¿Qué significa un fallo de doble clic?",
      answer:
        "Que el ratón está informando de dos pulsaciones separadas por una sola pulsación física. Normalmente es chatter de contacto en un micro-switch gastado, donde el contacto metálico rebota unos pocos milisegundos antes de estabilizarse. El sistema operativo lo interpreta entonces como un doble clic accidental, y por eso el fallo molesta especialmente en juegos de ritmo rápido.",
    },
    {
      question: "Mi contador de clic derecho se queda en cero. ¿Está roto el ratón?",
      answer:
        "No necesariamente. Algunos sistemas operativos y aplicaciones reasignan el botón derecho, y un clic central que abre un enlace en una pestaña nueva puede hacer que el navegador suprima el menú contextual dentro del área de prueba. Prueba el ratón en un segundo equipo y revisa la configuración de los botones del ratón en los ajustes del sistema operativo antes de dar el hardware por averiado.",
    },
    {
      question: "¿El test registra algún dato sobre mi información personal?",
      answer:
        "No. Los clics se cuentan en la memoria de la propia página mientras la pestaña está abierta y se descartan en cuanto la cierras o la recargas. No se transmite nada a un servidor y no se crea ningún perfil.",
    },
    {
      question: "¿El test funciona con un ratón con cable y con uno inalámbrico?",
      answer:
        "Sí. El navegador recibe los mismos eventos en ambos casos, así que la prueba se comporta igual con receptores con cable, Bluetooth y inalámbricos de 2,4 GHz. Aun así, los ratones inalámbricos conviene probarlos más a menudo, porque una batería agotada puede generar eventos perdidos o retrasados que son indistinguibles de un fallo de hardware.",
    },
    {
      question: "¿Puede esta prueba medir los DPI o la latencia del ratón?",
      answer:
        "No. Los DPI vienen del sensor óptico y la latencia, del switch y del bucle de sondeo, y el navegador no tiene acceso a ninguno de los dos. El test de frecuencia de sondeo mide con qué frecuencia el navegador recibe actualizaciones del puntero, que es un número relacionado pero distinto.",
    },
    {
      question: "Mi ratón hace clic bien, pero el test muestra clics perdidos. ¿Qué debería revisar?",
      answer:
        "Tres cosas, en este orden. Primero, la aceleración del puntero en tu sistema operativo, que puede introducir tiempos erráticos: desactiva «Mejorar la precisión del puntero» en Windows. Segundo, la batería baja o una conexión inalámbrica débil. Tercero, restos en el sensor o un switch gastado. Si los clics solo se pierden mientras mueves el ratón a la vez, el problema es más probablemente el sensor o la conexión que el switch.",
    },
  ],
  related: ["scroll-test", "cps-test", "keyboard-test", "polling-rate-test"],
};
