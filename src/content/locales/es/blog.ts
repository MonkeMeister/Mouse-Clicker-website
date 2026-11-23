import type { BlogContent } from "../../types";

export const blog: BlogContent = {
  metaTitle: "Blog",
  metaDescription:
    "Notas prácticas sobre hardware de entrada, las APIs de eventos del navegador y cómo crear mejores diagnósticos para ratones, teclados y punteros.",
  heading: "Blog",
  lead: "Notas sobre el hardware de entrada, las APIs de eventos del navegador que lo exponen y cómo se construyen los diagnósticos de este sitio. Escrito para quien quiere entender qué hace su hardware en lugar de limitarse a cambiarlo.",
  posts: [
    {
      slug: "how-a-browser-sees-your-mouse",
      title: "Cómo ve un navegador tu ratón de verdad",
      metaTitle: "Cómo ve un navegador tu ratón de verdad",
      metaDescription:
        "Qué recibe de verdad un navegador cuando mueves el ratón: el flujo de eventos, las coordenadas que informa, cómo lo alteran la frecuencia de sondeo y la aceleración del puntero, y qué puede y qué no puede decirte una prueba hecha en el navegador.",
      excerpt:
        "Tu cursor no es un objeto. Es una secuencia de muestras de posición, y entender de dónde sale esa secuencia explica casi todas las averías de hardware que acabarás persiguiendo.",
      readTime: "8 min de lectura",
      dateLabel: "23 de noviembre de 2026",
      lead: "Tu cursor no es un objeto del navegador: es una secuencia de muestras de posición, producidas por un hardware que el navegador nunca ve y filtradas por un sistema operativo que la página no puede configurar. Entender esa cadena explica por qué el mismo ratón se siente distinto en máquinas distintas y por qué ninguna web puede decirte qué hace tu ratón.",
      sections: [
        {
          heading: "El cursor es un flujo de eventos, no un objeto",
          paragraphs: [
            "Abre las herramientas de desarrollo y escribe document en la consola. Ahí no hay ningún cursor: ningún objeto que represente el puntero, ninguna propiedad de la que leer su posición, ninguna forma de preguntarle a una página dónde está ahora. El navegador no guarda un cursor, guarda un historial de lo que ya ocurrió.",
            "Lo que una página recibe es una sucesión de eventos pointermove. Cada uno lleva una instantánea del puntero en un momento pasado: dónde estaba, qué botón estaba pulsado, qué presión registró el sensor y cuánto tiempo ha pasado desde el evento anterior. Entre eventos no hay información: la posición no la conoce el navegador, se la comunicaron una vez por evento y la dejaron atrás.",
            "Ese único hecho explica casi todo el comportamiento raro que nota la gente. Un script no puede preguntar dónde está el ratón ahora, solo puede ser avisado. Una aplicación que lee la última posición conocida va retrasada exactamente un evento. Y una pestaña en segundo plano deja de recibir eventos: su flujo es un hueco, no una posición.",
          ],
          bullets: [
            "pointermove se dispara con el movimiento; pointerdown y pointerup con los botones.",
            "Cada evento lleva un timeStamp medido desde el origen temporal del documento, en milisegundos, como un número de doble precisión (double).",
            "Los eventos se fusionan: varios movimientos se agrupan en un evento que solo informa de la posición final.",
          ],
        },
        {
          heading: "De dónde sale realmente el flujo",
          paragraphs: [
            "El ratón no envía su posición cuando lo mueves: la envía siguiendo un calendario, te muevas o no, y cada informe contiene solo el cambio respecto al anterior. Un ratón de 1000 Hz genera 1000 informes USB por segundo y uno de oficina de 125 Hz genera 125. Esa cadencia es la frecuencia de sondeo que mide la prueba de frecuencia de sondeo de este sitio.",
            "Entre el dispositivo y el navegador hay dos filtros que desde la página no se ven. El sistema operativo aplica aceleración del puntero: el mismo movimiento físico produce distinto número de píxeles de pantalla según la velocidad, y puede aplicar suavizado, que introduce latencia. El navegador decide después con qué frecuencia entrega eventos y a cuáles fusiona.",
            "El flujo que recibe una página es el producto de tres cosas: la cadencia de informes del dispositivo, los ajustes del sistema operativo y el presupuesto interno del navegador. Cuando una página dice que el puntero se movió 400 píxeles, eso es la verdad sobre lo que le comunicaron, no sobre cuánto se movió tu mano.",
          ],
        },
        {
          heading: "Tres sistemas de coordenadas, y no se ponen de acuerdo",
          paragraphs: [
            "Un único evento de movimiento informa del mismo movimiento físico en tres sistemas de coordenadas, y esos tres discrepan a propósito.",
            "La unidad es el píxel CSS, no el píxel físico. Con una relación de píxeles del dispositivo (device pixel ratio) de 2, un píxel CSS son dos píxeles físicos de lado. Un script que mide con getBoundingClientRect trabaja en píxeles CSS; uno que compara con una captura de pantalla está en otra unidad y debe dividir entre la relación.",
            "La consecuencia práctica es que las coordenadas de un evento describen el documento en el momento en que se despachó, y puede que la página se haya desplazado desde entonces. Código que guarda un pageX y lo compara luego con un getBoundingClientRect nuevo compara dos fotogramas distintos.",
          ],
          bullets: [
            "screenX y screenY dan la posición sobre la pantalla, en píxeles de dispositivo, incluido el desplazamiento de la ventana.",
            "clientX y clientY dan la posición dentro del área de visualización, en píxeles CSS: la pareja que usa casi todo el código de página.",
            "pageX y pageY dan la posición dentro del documento completo, así que cambian al desplazar la página.",
          ],
        },
        {
          heading: "Con qué frecuencia recibes eventos en realidad",
          paragraphs: [
            "El navegador no está obligado a entregar un evento por cada informe. Si una página maqueta a 120 fotogramas por segundo y el ratón informa a 1000 Hz, la mayoría de esos informes ya no sirven cuando se pinta el fotograma, así que el navegador los fusiona.",
            "getCoalescedEvents sobre un pointermove devuelve la lista de posiciones agrupadas en él, cada una con su propio timeStamp: lo más parecido al flujo en bruto que una página web puede ver. Chromium y Firefox lo implementan; Safari no, y allí la página solo ve el punto final fusionado.",
            "pointerrawupdate es un evento aparte que se dispara por cada muestra de movimiento individual antes de la fusión, la señal de mayor fidelidad disponible para una página. Solo se entrega para el puntero principal y no está implementado en todas partes, así que el código que dependa de él necesita una alternativa.",
          ],
          bullets: [
            "Un solo pointermove puede representar muchos movimientos físicos. Pide getCoalescedEvents para verlos por separado.",
            "requestAnimationFrame se ejecuta al terminar el navegador un fotograma: el sitio adecuado para leer una posición y el inadecuado para esperar un evento por movimiento.",
            "Una pestaña en segundo plano no recibe eventos de movimiento: su visión del puntero queda desfasada hasta que llega uno.",
          ],
        },
        {
          heading: "Aceleración, entrada en bruto y los límites de una página",
          paragraphs: [
            "La aceleración del puntero existe para que los movimientos pequeños sean precisos y los grandes sigan siendo rápidos. La contrapartida: el paso de movimiento físico a píxeles no es fijo ni igual en todas las máquinas. Un script que lee movementX obtiene el delta que el navegador decidió aplicar, ya incluida esa curva.",
            "La API Pointer Lock es el único modo que tiene una página web de pedir entrada sin acelerar. Con el puntero bloqueado, movementX y movementY informan del delta en bruto entre muestras consecutivas. También toma el control a pantalla completa, oculta el cursor y exige un gesto del usuario: por eso una herramienta de diagnóstico no puede activarla sin más.",
            "Así que una página puede decirte cuántos píxeles recorrió el puntero y a qué velocidad aproximada, pero no cuánto se movió de verdad tu mano, cuál es la resolución nativa del sensor, ni si el ratón aplicó suavizado antes de que el sistema operativo viera el movimiento.",
          ],
        },
        {
          heading: "Qué significa esto cuando pruebas un ratón",
          paragraphs: [
            "Por eso las herramientas de aquí se describen como medidoras de lo que recibió tu ordenador y no de lo que hace tu ratón. La prueba de botones del ratón cuenta los clics que llegaron a la página; la de frecuencia de sondeo mide la separación de los eventos de movimiento que entregó el navegador. Ninguna inspecciona un switch, un encoder o un sensor.",
            "El hueco entre esas dos afirmaciones es donde viven los hilos de soporte más confusos. Un ratón con el botón izquierdo estropeado envía dos eventos de pulsación por una pulsación física, y el navegador informa de ambos. Uno con el sensor desgastado puede informar de un flujo regular de posiciones sutilmente equivocadas. Desde la página, ambos parecen averías de hardware; desde el driver, fallos del navegador.",
            "Saber de qué lado de esa línea estás ahorra horas. Si los eventos que llegan a la página están mal, la avería está en el hardware o en el driver, y ningún ajuste del navegador la arregla. Si están bien y la aplicación se porta mal, la avería está en la aplicación.",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Sabe el navegador la posición real de mi cursor?",
          answer:
            "No. Sabe las posiciones que le han comunicado, y solo en los momentos en que despachó un evento. Entre eventos no hace ningún seguimiento del puntero, y a una pestaña en segundo plano no se le informa del movimiento hasta que vuelve a llegarle un evento.",
        },
        {
          question:
            "¿Por qué mi puntero parece más fluido de lo que sugiere la cadencia de eventos?",
          answer:
            "Porque la pantalla se refresca con su propio ritmo: tu ratón puede informar 1000 veces por segundo mientras el monitor se refresca 144 veces por segundo. El navegador fusiona los eventos que llegan entre fotogramas, así que la página ve menos eventos de los que produjo el dispositivo mientras la pantalla sigue mostrando un recorrido fluido.",
        },
        {
          question:
            "¿Puede una página web leer mi ratón más rápido de lo que el ratón informa?",
          answer:
            "No, y no lo necesita. El dispositivo es la fuente de los datos, así que la cadencia de informes es un techo infranqueable. Una página puede pedir las muestras individuales que hay detrás de un evento fusionado con getCoalescedEvents, pero no puede inventar muestras que el dispositivo nunca envió.",
        },
        {
          question:
            "¿Qué es la aceleración del puntero y puedo desactivarla para una prueba?",
          answer:
            "La aceleración del puntero es la traducción que hace el sistema operativo del movimiento físico a píxeles de pantalla: un golpe rápido cubre más distancia que uno lento. Solo la API Pointer Lock expone a una página el movimiento sin acelerar, y a cambio toma el control de la pantalla. En cualquier otro sitio, los números que lee una página ya incluyen la curva de aceleración.",
        },
        {
          question: "¿Demuestra una prueba de navegador que mi ratón funciona bien?",
          answer:
            "No. Demuestra qué llegó a la página. Un ratón puede informar de un flujo limpio y perfectamente regular de posiciones mientras su sensor está gastado, y un navegador puede entregar eventos a la perfección mientras el hardware está bien. Usa la prueba del navegador para descartar la parte de software y confirma después la parte de hardware con los diagnósticos del propio fabricante.",
        },
      ],
      toolSlug: "mouse-test",
    },
    {
      slug: "double-click-chatter-explained",
      title: "El chatter de doble clic, explicado a fondo",
      metaTitle: "El chatter de doble clic, explicado a fondo",
      metaDescription:
        "Por qué un switch de ratón gastado manda dos clics por una pulsación, en qué se distingue de un doble clic de verdad, qué aspecto tiene su firma temporal y cómo eliminar el chatter de switch para siempre.",
      excerpt:
        "Por qué un switch gastado envía dos clics por una sola pulsación, en qué se diferencia de un doble clic real y qué aspecto tiene la firma temporal de cada uno.",
      readTime: "6 min de lectura",
      dateLabel: "23 de noviembre de 2026",
      lead: "Cuando un ratón empieza a hacer doble clic por su cuenta, el diagnóstico habitual es el chatter de switch: una pulsación física produce dos contactos eléctricos. En el software tiene el mismo aspecto que un doble clic, y por eso se diagnostica mal tan a menudo. La diferencia está en el tiempo, y el tiempo es toda la historia.",
      sections: [
        {
          heading: "Lo que hace de verdad un switch de ratón",
          paragraphs: [
            "Un botón de ratón es un contacto metálico con muelle que cierra un circuito cuando lo pulsas. En un switch en buen estado el contacto cierra una vez, limpiamente, y se mantiene cerrado hasta que sueltas.",
            "En un switch gastado, el contacto se ha picado o se ha corrosionado, o el muelle se ha debilitado y ya no presiona igual de fuerte. Al pulsar, el circuito se cierra, se reabre durante una fracción de milisegundo mientras el contacto rebota y se cierra otra vez. El controlador del ratón ve dos pulsaciones. Tú hiciste una.",
            "El intervalo entre los dos contactos suele ser de unos pocos milisegundos y casi siempre muy por debajo de cincuenta. Se siente como un doble clic porque muchísimos programas tratan el doble clic como una señal, y un doble clic son dos pulsaciones próximas. El ratón dice la verdad sobre lo que detectó: una pulsación que tú nunca hiciste.",
          ],
        },
        {
          heading: "Por qué el sistema operativo lo llama doble clic",
          paragraphs: [
            "Casi todos los sistemas de escritorio tienen un ajuste que decide cuánto deben estar separadas dos pulsaciones para que cuenten como doble clic. En Windows esto es la velocidad de doble clic, 500 milisegundos por defecto; macOS guarda el equivalente en los ajustes de su trackpad y su ratón. Todo lo que quede por debajo de ese umbral es un doble clic para el sistema, y el chatter cae muy por debajo.",
            "De modo que el chatter no se parece a un doble clic: es un doble clic según la definición del propio sistema. El ratón mandó dos eventos de pulsación separados por 6 milisegundos; el sistema vio dos pulsaciones dentro de su umbral e informó de un doble clic a todas las aplicaciones de la máquina.",
            "Por eso la avería se culpa tantas veces de Windows, del navegador o del juego que estuviera abierto. El sistema hace exactamente lo que le dijeron, y la prueba que utilizó fue el informe del ratón.",
          ],
        },
        {
          heading: "La firma temporal que los distingue",
          paragraphs: [
            "Un doble clic real y un evento de chatter son distinguibles: están hechos de cosas distintas. Un doble clic real son dos ciclos completos de pulsación y soltado: down, up, down, up. El chatter es un ciclo con un contacto extra dentro: down, up, down, up, donde el segundo down llega microsegundos después del primer up y ningún dedo se movió entre medias.",
            "El intervalo es la pista. En un doble clic real, entre la primera soltada y la segunda pulsación pasa el tiempo que tarda una persona en mover un dedo y volver a pulsar: entre 80 y 300 milisegundos. En el chatter, ese intervalo es el rebote de un contacto metálico, entre 1 y 30 milisegundos. Las dos poblaciones no se solapan: una es una persona, la otra un muelle.",
            "La misma firma aparece en la velocidad de clic. Una persona picando lo más rápido posible se queda en torno a 10 a 12 clics por segundo. Un switch con chatter puede producir mucho más, porque el hardware genera eventos más rápido de lo que cualquier dedo podría.",
          ],
          bullets: [
            "Un doble clic real son dos ciclos completos de pulsación y soltado, normalmente separados por 80 a 300 milisegundos, y salen de un dedo que se movió.",
            "El chatter es un ciclo de pulsación y soltado con un contacto extra dentro, normalmente separado por 1 a 30 milisegundos.",
            "Picar con la mano a toda velocidad se queda en 10 a 12 clics por segundo; el chatter puede superar ese ritmo.",
          ],
        },
        {
          heading: "Por qué el navegador lo pone difícil",
          paragraphs: [
            "El navegador informa con fidelidad de lo que le dicen, pero tiene su propia idea de qué es un doble clic y usa el umbral del sistema operativo. Una página que escucha el evento dblclick ve lo que vio el sistema, así que a través de ese evento el chatter y un doble clic real son indistinguibles. Esa es la trampa: dblclick nunca te dirá cuál de los dos ocurrió.",
            "Los eventos pointerdown y pointerup son un sitio mejor donde mirar: se entregan por contacto físico y cada uno lleva un timeStamp con resolución de submilisegundo. Una página que marca la hora de cada pulsación por su cuenta puede medir el intervalo entre dos pulsaciones separadas por 6 milisegundos, y ese número es el diagnóstico.",
            "El timeStamp de cada evento es relativo al origen temporal del documento, y los navegadores no garantizan que sea el instante en que el hardware tomó la muestra: es el instante en que se despachó el evento. Bajo carga ese despacho se desvía del tiempo físico, así que una página debería calcular el intervalo entre dos marcas del mismo reloj y no comparar una marca con Date.now.",
          ],
        },
        {
          heading: "Cómo leer el resultado",
          paragraphs: [
            "La prueba de botones del ratón de este sitio registra la marca de tiempo de cada pulsación, agrupa las que llegan con menos de 50 milisegundos de diferencia y muestra el intervalo. Un intervalo de unos pocos milisegundos es chatter; uno en el rango de los dobles clics es un doble clic, y el contador de dobles clics solo sube cuando el intervalo cae en ese rango.",
            "El umbral de 50 milisegundos es deliberadamente generoso. Los dobles clics humanos prácticamente nunca se acercan a unos 80 milisegundos y el rebote de un switch nunca supera unos 30, así que las poblaciones no se solapan y el umbral puede colocarse en el espacio vacío entre ambas.",
            "La prueba también muestra el intervalo más pequeño visto durante la sesión. Ese número suele zanjar la cuestión sin interpretación: un mínimo de un solo dígito de milisegundos es chatter, y un mínimo de cientos de milisegundos significa que tus dobles clics son reales.",
          ],
        },
        {
          heading: "Qué hacer realmente con esto",
          paragraphs: [
            "Si el chatter es leve, la solución suele ser limpiar. El aire comprimido o un cepillo suave se llevan el polvo, y un limpiador de contactos del tipo que se vende para contactos eléctricos disuelve el óxido que hace rebotar un contacto picado. Los contactos son baratos de mantener y un switch gastado se recupera así con frecuencia.",
            "Si el switch está dañado mecánicamente, hay que sustituirlo. Un ratón con switches intercambiables, habitual entre los ratones reparables, es un trabajo de cinco minutos con un soldador. Un ratón con el switch sellado es otra historia, y la pregunta real es si merece la pena repararlo.",
            "Hay un apaño en software que conviene conocer, porque confunde a la gente: bajar el umbral de doble clic del sistema operativo. Ponlo al mínimo y el sistema dejará de tratar un rebote de 6 milisegundos como un doble clic. Funciona, y es sencillamente la solución equivocada, porque hace más difícil hacer dobles clics de verdad: todas las aplicaciones que uses, no solo la que fallaba, tienen ahora una ventana de doble clic más estrecha. Trátalo como una forma de comprobar el diagnóstico, no como una solución.",
          ],
        },
      ],
      faqs: [
        {
          question:
            "¿Cómo distingo el chatter del switch de un doble clic de verdad?",
          answer:
            "Por el intervalo entre las dos pulsaciones. Un doble clic real son dos ciclos completos de pulsación y soltado, normalmente separados por 80 a 300 milisegundos. El chatter es una pulsación con un contacto extra dentro, normalmente separada por 1 a 30 milisegundos. La prueba de botones del ratón mide ese intervalo y te lo muestra.",
        },
        {
          question:
            "¿Puede un doble clic real llegar a ser tan rápido que parezca chatter?",
          answer:
            "No. Incluso el doble clic intencionado más rápido deja un intervalo de unos 80 milisegundos, porque un dedo tiene que soltarse y desplazarse antes de poder volver a pulsar. El chatter ocurre en milisegundos de un solo dígito, más rápido de lo que un switch puede moverse físicamente. Los dos nunca se solapan.",
        },
        {
          question:
            "Mi ratón hace doble clic solo en un programa. ¿Sigue siendo el ratón?",
          answer:
            "Casi con total seguridad. El programa suele ser el único que trata el doble clic como una acción con sentido, así que es el que hace visible la avería. Comprueba el ratón en un editor de texto normal y en el navegador: si el chatter aparece también ahí, es el hardware y no el programa.",
        },
        {
          question:
            "¿Influye el ajuste de velocidad de doble clic del sistema operativo?",
          answer:
            "Decide qué cuenta como doble clic, y ese umbral es la razón por la que el chatter se informa como tal. Bajar el ajuste hace que el chatter sea más difícil de provocar, pero también hace más difícil hacer dobles clics de verdad, así que es una forma de comprobar el diagnóstico y no una solución.",
        },
        {
          question:
            "¿Un ratón con chatter es un riesgo de incendio o peligroso de seguir usando?",
          answer:
            "No. El chatter es un contacto eléctrico que rebota dentro de un circuito de baja tensión que transporta una fracción de amperio. No daña el ratón ni es un riesgo de incendio. El coste son los clics dirigidos a donde no tocabas y el trabajo perdido, no el hardware.",
        },
      ],
      toolSlug: "mouse-test",
    },
  ],
};
