import type { ToolContent } from "../../types";

export const cpsTest: ToolContent = {
  slug: "cps-test",
  name: "Test de clics por segundo",
  h1: "Test de clics por segundo",
  metaTitle:
    "Test de clics por segundo — Mide tus CPS en línea",
  metaDescription:
    "Mide tus clics por segundo con un test de CPS de 1, 5, 10, 15, 30 o 60 segundos. Obtén los CPS en vivo, tu mejor marca y el desglose segundo a segundo. Gratis y sin registro.",
  category: "Herramientas de ratón",
  intro: [
    "El test de CPS cuenta cuántas veces haces clic en una ventana de tiempo fija y lo divide por el tiempo realmente transcurrido, lo que te da una marca de clics por segundo. La mayoría de las personas se mueve entre seis y ocho. Con práctica constante y un buen ratón, un jugador dedicado puede superar los once, y los mejores del mundo rondan los catorce o quince.",
    "Elige la duración antes de empezar. Diez segundos es el estándar de la comunidad porque son suficientes para entrar en el ritmo y lo bastante cortos como para que un mal arranque no arruine la prueba.",
  ],
  steps: [
    {
      title: "Elige la duración de la prueba",
      body: "Un segundo mide la velocidad pura de ráfaga. Cinco segundos es un buen punto medio. Diez segundos es la prueba de referencia, y treinta o sesenta segundos miden el ritmo sostenido en lugar de una arrancada.",
    },
    {
      title: "Pulsa Iniciar y espera la señal",
      body: "La cuenta atrás empieza en cuanto arranca el temporizador, así que no puedes ganar tiempo haciendo clic antes. Coloca antes el cursor sobre el panel.",
    },
    {
      title: "Haz clic lo más rápido que puedas",
      body: "Usa un ritmo cómodo. La marca más rápida sostenible casi siempre es menor que los frenéticos dos primeros segundos, porque un clic irregular desincroniza el temporizador y el ratón.",
    },
    {
      title: "Compara las pruebas",
      body: "La prueba guarda tu mejor marca y muestra la diferencia entre tu primera mitad y tu segunda mitad. Una caída fuerte significa que empezaste demasiado rápido y te quedaste sin ritmo.",
    },
  ],
  sections: [
    {
      heading: "Qué mide realmente el CPS y qué no",
      paragraphs: [
        "Un navegador cuenta eventos de ratón. Cuando pulsas el botón físico, el switch se cierra, el controlador lo registra y el navegador recibe un evento de clic. Esta prueba mide cuántos de esos eventos recibió tu equipo durante la ventana de tiempo.",
        "No mide la latencia de actuación del switch, ese diminuto retardo entre el cierre físico del switch y la llegada del evento. Ese retardo suele ser de uno o dos milisegundos, lo que parece insignificante hasta que lo multiplicas por el número de clics de una secuencia rápida, donde se convierte en la diferencia entre que el primer clic llegue a su objetivo o se pierda por completo.",
        "Tampoco mide la precisión del clic en el sentido en que lo hace un juego de disparos, donde el objetivo tiene que estar realmente bajo la mira. El CPS es solo una tasa. Dos jugadores con el mismo CPS pueden tener resultados completamente distintos en un juego si uno de ellos acierta a lo que apunta.",
      ],
    },
    {
      heading: "Qué aspecto tiene una buena marca de CPS",
      paragraphs: [
        "Para la mayoría de la gente, entre seis y ocho clics por segundo es un rango realista en el día a día. Quien juega de forma regular a juegos de disparos competitivos suele situarse entre nueve y once. Los jugadores de élite de verdad, los que lideran las tablas de récords, llegan a trece o catorce, y la cima de esa lista está a una fracción de clic por segundo.",
        "Estos números conviene leerlos con cierto escepticismo. Las tablas de CPS publicadas suelen medirse en un dispositivo de entrada en bruto con la mínima latencia, y a menudo se marcan como no verificadas. Una prueba en el navegador siempre dará un valor algo más bajo que una utilidad de referencia dedicada, sobre todo por el coste de entrega de los eventos.",
        "El número importa menos que la tendencia. Si tu marca baja dos o tres clics por segundo entre semanas, algo ha cambiado: un switch gastado, un proceso de fondo que consume recursos o un ratón que se ha vuelto más pesado de mover.",
      ],
    },
    {
      heading: "Técnicas que sí mejoran la marca",
      paragraphs: [
        "Relaja el agarre. La tensión del antebrazo se transmite al ratón y hace que el botón sea más difícil de pulsar rápido. La mayoría de los que clic rápido usan un movimiento ligero y rítmico que viene del antebrazo y no del dedo.",
        "Usa un ratón ligero y con poca fricción. Un ratón más pesado y con más rozamiento en la superficie te cuesta más mantener la mano en su sitio entre clic y clic, y reiniciar te cuesta tiempo.",
        "Mantén la muñeca ligeramente elevada. Apoyar el talón de la mano en la mesa introduce fricción y movimientos mínimos que rompen el ritmo.",
        "Busca un tempo constante y mantenlo. Clicar a ráfagas parece más rápido, pero puntúa menos. La constancia durante toda la ventana es lo que separa un nueve de un doce.",
        "Practica con el juego real. El CPS se entrena, pero el patrón motor que se traslada al juego es el que ensayas allí, no el que practicas en un test.",
      ],
    },
    {
      heading: "Por qué tu marca baja durante una prueba",
      paragraphs: [
        "Casi todo el mundo concentra los clics al principio. Los dos primeros segundos son rápidos porque estás fresco y algo adrenalinado, y luego llega la fatiga y baja el ritmo. Una prueba que empieza en catorce y termina en siete tiene una buena media, pero es peor que otra que mantiene un once constante de principio a fin.",
        "La fatiga en la mano es real. Los músculos flexores que accionan el botón se cansan y el clic empieza a frenarse. Un ratón ligero, un agarre relajado y sesiones cortas de práctica lo reducen.",
        "Si tu marca se desploma de golpe en lugar de bajar poco a poco, la causa suele ser mecánica: un switch gastado que empieza a rebotar o un ratón que ha desarrollado un arrastre en la superficie que estás usando.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es una buena marca de CPS?",
      answer:
        "Para la mayoría de la gente, entre seis y ocho clics por segundo es lo normal. Los jugadores competidores habituales llegan a nueve o once, y la cima de las tablas ronda los trece o catorce. Estas marcas se miden en equipos dedicados y de baja latencia, así que una lectura en el navegador suele ser algo más baja.",
    },
    {
      question: "¿Cómo puedo conseguir una marca de CPS más alta?",
      answer:
        "Relaja el agarre y mueve el clic desde el antebrazo en lugar del dedo, usa un ratón ligero sobre una superficie con poca fricción y mantén un tempo constante en lugar de clicar a ráfagas. La constancia durante toda la ventana puntúa mejor que un arranque rápido seguido de un desplome.",
    },
    {
      question: "¿Qué duración del test de CPS es la más precisa?",
      answer:
        "Diez segundos es el estándar de la comunidad porque son suficientes para entrar en el ritmo y lo bastante cortos como para que un arranque lento no domine el resultado. Un segundo mide solo la velocidad de ráfaga, y sesenta segundos miden el ritmo sostenido, que es una habilidad distinta.",
    },
    {
      question: "¿Puedo usar la barra espaciadora en lugar del ratón?",
      answer:
        "Sí. Tanto el test de teclado como el de CPS responden a la barra espaciadora, y hacer clic con ella suele dar una marca algo más alta porque el movimiento necesario es menor. Merece la pena probar ambos y usar el que te resulte más constante.",
    },
    {
      question: "¿Por qué mi CPS es más bajo en el navegador que en una tabla de récords?",
      answer:
        "La entrega de eventos del navegador añade un pequeño coste que una utilidad dedicada de entrada en bruto no tiene, y las marcas de las tablas suelen no estar verificadas. Trata los números del navegador como una medida relativa y constante de tu propio progreso, no como una comparación absoluta.",
    },
    {
      question: "¿El test de CPS funciona en un touchpad?",
      answer:
        "Funciona, pero tocar en un touchpad es más lento que un clic de ratón, así que las marcas serán más bajas. Algunos touchpads además solo registran el clic físico con una pulsación fuerte, lo que cambia bastante la sensación. Usa el test de botones del ratón si no estás seguro de que tu touchpad registra los clics correctamente.",
    },
    {
      question: "Mi CPS ha bajado respecto al mes pasado. ¿Qué debería revisar?",
      answer:
        "Repásalo por este orden: un switch gastado o que empieza a rebotar, un cambio en los ajustes de aceleración del puntero, un proceso de fondo que se come el tiempo de fotograma y, por último, la fatiga o un cambio en el peso del ratón. Una caída de dos o tres clics por segundo a lo largo de semanas suele ser de origen mecánico.",
    },
    {
      question: "¿El test de CPS es gratis y necesito una cuenta?",
      answer:
        "Sí. No hay registro, ni descargas, ni límite de veces que puedas ejecutarlo. Los recuentos de clics viven solo en la pestaña abierta y se descartan cuando cierras o recargas la página.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "keyboard-test", "scroll-test"],
};
