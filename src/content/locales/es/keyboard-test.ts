import type { ToolContent } from "../../types";

export const keyboardTest: ToolContent = {
  slug: "keyboard-test",
  name: "Test de teclado",
  h1: "Test de teclado",
  metaTitle:
    "Test de teclado en línea — Comprueba cada tecla y detecta el ghosting",
  metaDescription:
    "Testea todas las teclas de tu teclado en el navegador. Identifica teclas que no responden, teclas atascadas y el ghosting por rollover, y muestra el código de tecla en vivo de todo lo que pulses. Gratis y sin instalar nada.",
  category: "Herramientas de teclado",
  intro: [
    "El test de teclado escucha tu teclado mientras escribes e informa de cada tecla que el navegador recibe, junto con su código de tecla físico. Pulsa las teclas una por una para comprobar cada una y después mantén combinaciones para ver si aparece el ghosting por rollover, ese límite del hardware que hace que las pulsaciones rápidas en los juegos se pierdan.",
    "Nada de lo que escribes se registra ni se transmite. Las teclas se comparan con un mapa de distribución en vivo dentro de la página y después se descartan.",
  ],
  steps: [
    {
      title: "Haz clic en el panel de teclas para darle el foco",
      body: "El panel necesita el foco antes de poder recibir eventos de teclado. Haz clic una vez y empieza a escribir. Mientras el panel tiene el foco, tu navegador no interceptará la escritura normal, así que ten cuidado de no escribir por accidente en un formulario.",
    },
    {
      title: "Pulsa las teclas una por una",
      body: "Recorre el teclado de forma física, no alfabética. Pulsa cada tecla, comprueba que el panel se ilumina y anota cualquier tecla que se quede apagada: esa es la tecla que no funciona.",
    },
    {
      title: "Comprueba si hay teclas atascadas",
      body: "Pulsa una tecla y suéltala. Si el panel sigue mostrándola como pulsada después de que la sueltes, la tecla está atascada mecánicamente o el teclado no está registrando la liberación.",
    },
    {
      title: "Prueba el rollover con combinaciones",
      body: "Mantén pulsadas tres o cuatro teclas a la vez y vigila si se enciende una cuarta tecla que no debería encenderse. Esa tecla extra es un fantasma y te dice exactamente cuántas pulsaciones simultáneas puede manejar tu teclado.",
    },
  ],
  sections: [
    {
      heading: "Qué significan los códigos de tecla y por qué importan",
      paragraphs: [
        "Cada evento de teclado lleva dos identificadores. El valor de la tecla es lo que produce la tecla según la distribución activa, así que en un teclado AZERTY francés la tecla etiquetada como Q produce la letra a. El código es la posición física de esa tecla en el teclado, sin importar la distribución, así que la misma tecla física siempre informa del mismo código.",
        "Para hacer pruebas, el código es lo que importa. Es estable entre distribuciones, lo que significa que una tecla rota informa del mismo fallo en todos los idiomas, y además permite a la herramienta dibujar un diagrama exacto de la distribución que estás usando.",
        "El indicador de repetición también conviene conocerlo. Mantener una tecla pulsada produce un keydown seguido de un flujo de eventos keydown marcados como repeticiones y, por último, un único keyup. Una tecla que nunca envía el keyup es lo que la prueba llama tecla atascada, y hará que una letra se repita en cualquier aplicación que estés usando.",
      ],
    },
    {
      heading: "El rollover y el ghosting, explicados a fondo",
      paragraphs: [
        "Todos los teclados tienen una matriz de hardware: una rejilla de filas y columnas conectadas entre sí, con un interruptor en cada intersección. Cuando pulsas una tecla, conecta una fila con una columna. El controlador solo puede detectar las filas y columnas que están conectadas, y tiene un número limitado de conexiones que puede leer a la vez.",
        "Un teclado mecánico completo con un controlador decente suele manejar seis o más teclas simultáneas, y a menudo más. Un teclado barato, uno de portátil o uno de membrana puede que solo maneje tres. Al pulsar una cuarta tecla, el controlador lee como conectado un segundo par fila-columna no previsto, lo que produce una tecla fantasma que tú nunca pulsaste.",
        "El test lo muestra de forma directa: mantén las teclas que usarías en una combinación rápida de un juego y mira qué tecla extra aparece. Si aparece un fantasma con tres teclas, ese es el límite efectivo de rollover de tu teclado y ningún ajuste de software va a aumentarlo.",
      ],
    },
    {
      heading: "Fallos habituales del teclado y qué los causa",
      paragraphs: [
        "Una sola tecla que no responde casi siempre es un switch que ha fallado. Los switches se clasifican por su vida útil en millones de pulsaciones, y una tecla que se usa mucho, a menudo aquella en la que apoyas el dedo durante un juego, se desgasta mucho antes que el resto del teclado. Si la tecla no produce ningún evento, y lo hace de forma constante tras varios reinicios, el switch ha fallado. Los switches de repuesto cuestan muy poco y la mayoría de los teclados de portátil son reparables si te manejas abriéndolos.",
        "Una tecla que se dispara dos veces por una pulsación es chatter, el equivalente en teclado del rebote de un switch de ratón. Lo causa el mismo mecanismo de desgaste y produce repeticiones accidentales en los juegos.",
        "Una tecla que se queda pulsada pero sí envía su evento de liberación suele deberse a restos: una miga, una bebida o polvo atrapado en el mecanismo. Pulsar la tecla varias veces y luego limpiar por debajo de la tapa suele devolverla a la normalidad sin necesidad de desmontar nada.",
        "El chatter que afecta a muchas teclas a la vez, sobre todo en toda una fila o en toda una columna, apunta a un problema del controlador o del firmware y no a switches individuales. Eso suele significar una actualización de driver, un reinicio o la sustitución del teclado entero.",
      ],
    },
    {
      heading: "Qué conviene comprobar antes de culpar al hardware",
      paragraphs: [
        "Las teclas adherentes (sticky keys) y las teclas de filtro (filter keys) son funciones de accesibilidad activadas por defecto en Windows que se pueden encender por accidente al pulsar cinco veces la tecla Mayús. Cuando las teclas adherentes están activas, una sola pulsación se comporta como si la maintainieras, y la tecla parece repetirse. Desactivarlas en los ajustes de teclado lo resuelve al instante.",
        "En macOS, los ajustes de teclas lentas y de repetición de teclas pueden hacer que el teclado parezca no responder si el retardo está configurado alto. Ambos son ajustables en los ajustes de Teclado.",
        "La reasignación a nivel de aplicación es otra causa común. Programas como las utilidades de reasignación de ratón y teclado, las superposiciones de streaming y algunas herramientas de accesibilidad interceptan las teclas antes de que la aplicación las vea. Si una tecla funciona en todas partes menos en un programa concreto, el problema es el programa.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cómo pruebo todas las teclas de mi teclado?",
      answer:
        "Haz clic en el panel de teclas para que tenga el foco y después pulsa las teclas por todo el teclado. Cada pulsación enciende la tecla correspondiente en el diagrama y muestra su código. Recorre la distribución en lugar de ir alfabéticamente, así es menos probable que te saltes alguna.",
    },
    {
      question: "¿Qué es el ghosting del teclado y cómo lo pruebo?",
      answer:
        "El ghosting ocurre cuando el teclado informa de una tecla que no pulsaste, porque su matriz de hardware no puede leer a la vez todas las que mantienes pulsadas. Mantén tres o cuatro teclas a la vez en el panel de prueba y cualquier tecla extra que se encienda es un fantasma.",
    },
    {
      question: "¿Qué número de rollover es bueno para jugar?",
      answer:
        "Seis o más teclas simultáneas resulta cómodo en la mayoría de los juegos competitivos, y los teclados mecánicos completos con un buen controlador suelen llegar a más. Tres es el mínimo absoluto y es justo donde empieza a aparecer el ghosting en combinaciones rápidas.",
    },
    {
      question: "¿Por qué no me funciona una de mis teclas?",
      answer:
        "Si la tecla no produce ningún evento, lo más probable es que el switch haya fallado: los switches individuales se desgastan y los que más se usan se estropean antes. Si la tecla está atascada físicamente o envía un keyup sin keydown, la causa habitual son restos bajo la tapa.",
    },
    {
      question: "¿El test de teclado funciona con portátiles?",
      answer:
        "Sí, pero los teclados de portátil suelen tener un límite de rollover más bajo que los teclados mecánicos de escritorio, así que es más probable que muestren ghosting. Además, el fabricante duplica o desactiva algunas teclas del portátil, lo que puede parecer una avería sin serlo.",
    },
    {
      question: "¿Se guarda en algún sitio la información de mis pulsaciones de teclas?",
      answer:
        "No. Las teclas se comparan con la distribución de la página según llegan y se descartan de inmediato. La página nunca envía lo que escribes a un servidor y no se conserva nada cuando cierras la pestaña.",
    },
    {
      question: "¿Cuál es la diferencia entre el código de tecla y el valor de la tecla?",
      answer:
        "El código de tecla identifica la posición física de la tecla y no cambia con la distribución. El valor de la tecla es el carácter que produce la tecla, así que en AZERTY la tecla etiquetada como Q produce la letra a. La prueba muestra ambos y usa el código para averiguar qué tecla física pulsaste.",
    },
    {
      question: "Mis teclas se repiten cuando las mantengo pulsadas. ¿Es normal?",
      answer:
        "Sí, es la repetición de teclas normal, y la prueba marca esos eventos adicionales como repeticiones y no como pulsaciones nuevas. Si una tecla sigue repitiéndose después de que la hayas soltado, es una tecla atascada y merece la pena investigarla: normalmente es por restos o por un switch que ha fallado.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "polling-rate-test"],
};
