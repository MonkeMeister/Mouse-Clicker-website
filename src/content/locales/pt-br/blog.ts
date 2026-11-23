import type { BlogContent } from "../../types";

export const blog: BlogContent = {
  metaTitle: "Blog",
  metaDescription:
    "Notas práticas sobre hardware de entrada, APIs de eventos do navegador e como construir diagnósticos melhores para mouse, teclado e ponteiro.",
  heading: "Blog",
  lead: "Notas sobre hardware de entrada, sobre as APIs de eventos do navegador que o expõem e sobre como os diagnósticos deste site são montados. Escrito para quem quer entender o que o seu hardware está fazendo, em vez de simplesmente trocá-lo.",
  posts: [
    {
      slug: "how-a-browser-sees-your-mouse",
      title: "Como o navegador realmente enxerga o seu mouse",
      metaTitle: "Como o navegador realmente enxerga o seu mouse",
      metaDescription:
        "O que o navegador de fato recebe quando você move o mouse: o fluxo de eventos, as coordenadas que ele informa, como a taxa de polling e a aceleração do ponteiro alteram tudo e o que um teste no navegador consegue e não consegue dizer.",
      excerpt:
        "O seu cursor não é um objeto. É um fluxo de amostras de posição, e entender de onde esse fluxo vem explica quase todo defeito de hardware que você vai passar a depurar.",
      readTime: "8 min de leitura",
      dateLabel: "23 de novembro de 2026",
      lead: "O seu cursor não é um objeto que pertence ao navegador. Ele é um fluxo de amostras de posição, produzido por um hardware que o navegador nunca chega a ver e filtrado por um sistema operacional que a página não tem como configurar. Entender esse caminho explica por que o mesmo mouse parece diferente em máquinas diferentes, e por que nenhuma página web é capaz de dizer com precisão o que o seu mouse está fazendo.",
      sections: [
        {
          heading: "O cursor é um fluxo de eventos, não um objeto",
          paragraphs: [
            "Abra as ferramentas de desenvolvedor e digite document no console. Não existe cursor ali dentro. Não há objeto algum que represente o ponteiro do mouse, não há propriedade para ler a posição dele, e não há maneira de uma página perguntar onde o ponteiro está neste exato instante. O navegador não guarda um cursor. Ele guarda um histórico de movimentos que já aconteceram.",
            "O que uma página recebe é uma sequência de eventos pointermove. Cada um carrega um retrato do ponteiro em um instante do passado: onde ele estava, qual botão estava pressionado, que pressão o sensor informou e há quanto tempo o navegador acredita que se passou desde o evento anterior. Entre esses eventos não há informação nenhuma. A posição do ponteiro não é algo que o navegador saiba; é algo que ele foi avisado, uma vez por evento, e depois deixou para trás.",
            "Esse único fato explica a maior parte dos comportamentos estranhos que as pessoas notam. Um script não consegue perguntar onde o mouse está agora, ele só pode ser avisado de que alguma coisa mudou. Um aplicativo que lê a última posição conhecida atrasa exatamente um evento. E uma aba em segundo plano para de receber eventos por completo, então o fluxo que ela guarda quando você volta é um intervalo, não uma posição.",
          ],
          bullets: [
            "pointermove dispara com o movimento; pointerdown e pointerup disparam com os botões.",
            "Todo evento carrega um timeStamp medido a partir da origem de tempo do documento, em milissegundos, como um double.",
            "Os eventos são coalescidos: vários movimentos podem ser fundidos em um único evento, que informa apenas a posição final.",
          ],
        },
        {
          heading: "De onde o fluxo realmente vem",
          paragraphs: [
            "O mouse não manda a sua posição quando você o move. Ele manda uma posição conforme um cronograma, mova ou não a mão, e cada relatório contém apenas a variação desde o último. Um mouse de 1000 Hz produz 1000 relatórios USB por segundo. Um mouse de escritório de 125 Hz produz 125. Essa taxa de relatórios é justamente a taxa de polling que o teste de taxa de polling deste site mede.",
            "Entre o dispositivo e o navegador existem dois filtros que você não consegue enxergar a partir da página. O sistema operacional aplica a aceleração do ponteiro, o que significa que o mesmo movimento físico produz um número diferente de pixels na tela conforme a velocidade com que você se moveu, e pode aplicar suavização, o que introduz atraso. Depois disso é o navegador que aplica as próprias regras sobre com que frequência ele aceita entregar eventos a uma página e quais deles funde.",
            "O fluxo que uma página recebe é, portanto, o produto de três fatores: a taxa de relatórios do dispositivo, as configurações do sistema operacional e o orçamento interno do navegador. Quando uma página afirma que o ponteiro andou 400 pixels, isso é a verdade sobre o que a página foi informada. Não é a verdade sobre o quanto a sua mão se deslocou.",
          ],
        },
        {
          heading: "Três sistemas de coordenadas, e eles não concordam",
          paragraphs: [
            "Um único evento de movimento relata o mesmo movimento físico em três sistemas de coordenadas, e eles discordam por projeto.",
            "A unidade é o pixel CSS, e não o pixel físico. Em uma tela com device pixel ratio 2, ou seja, com a propriedade devicePixelRatio igual a 2, um pixel CSS ocupa dois pixels físicos de largura. Um script que mede um elemento com getBoundingClientRect trabalha em pixels CSS, enquanto um script que compara o resultado com uma captura de tela trabalha em outra unidade e precisa dividir pela razão para acertar as contas.",
            "A consequência prática é que as coordenadas de um evento descrevem o documento no momento em que ele foi despachado, e a página pode ter rolado desde então. Código que guarda um pageX e depois o compara com um resultado novo de getBoundingClientRect está comparando dois quadros diferentes.",
          ],
          bullets: [
            "screenX e screenY dão a posição na tela, em pixels de dispositivo, incluindo o deslocamento da própria janela do navegador.",
            "clientX e clientY dão a posição dentro da área visível, em pixels CSS. É o par que a maior parte do código de página usa.",
            "pageX e pageY dão a posição dentro do documento inteiro, então eles mudam conforme a página rola.",
          ],
        },
        {
          heading: "Com que frequência você recebe eventos de verdade",
          paragraphs: [
            "O navegador não é obrigado a entregar um evento por relatório. Se uma página está ocupada calculando layout a 120 quadros por segundo e o mouse reporta a 1000 Hz, a maior parte desses relatórios já virou irrelevante quando o quadro foi pintado, então o navegador os funde.",
            "getCoalescedEvents em um pointermove devolve a lista das posições que foram dobradas dentro dele, cada uma com o seu próprio timeStamp. É a coisa mais próxima do fluxo bruto que uma página web consegue enxergar. Chromium e Firefox implementam; o Safari não, e por lá a página enxerga apenas o ponto final já fundido.",
            "pointerrawupdate é um evento à parte que dispara para amostras individuais de movimento antes da fusão, o que faz dele o sinal de maior fidelidade que uma página pode ter. Ele é entregue apenas para o ponteiro principal, e não é implementado em todo lugar, então um código que dependa dele ainda precisa de um plano B.",
          ],
          bullets: [
            "Um pointermove pode representar muitos movimentos físicos. Peça getCoalescedEvents para ver cada um separado.",
            "requestAnimationFrame roda depois que o navegador terminou um quadro. É o lugar certo para ler uma posição e o lugar errado para esperar um evento por movimento.",
            "Uma aba em segundo plano não recebe nenhum evento de movimento, então a visão que ela tem do ponteiro fica desatualizada até chegar um evento.",
          ],
        },
        {
          heading: "Aceleração, entrada bruta e os limites de uma página",
          paragraphs: [
            "A aceleração do ponteiro existe para que movimentos pequenos possam ser precisos enquanto movimentos grandes continuem rápidos. O preço disso é que o mapeamento entre movimento físico e pixels não é fixo, e não é o mesmo em todas as máquinas. Um script que lê movementX recebe o delta que o navegador decidiu aplicar, e esse delta já vem com a curva embutida.",
            "A Pointer Lock API é a única forma de uma página web pedir entrada não acelerada. Com o ponteiro travado, movementX e movementY informam o delta bruto entre amostras consecutivas. Só que ela também é uma tomada de tela inteira, que esconde o cursor e exige um gesto do usuário, e é por isso que uma ferramenta de diagnóstico não pode simplesmente ligá-la.",
            "Dessa forma, uma página consegue dizer quantos pixels o ponteiro percorreu e, de forma aproximada, com que rapidez, mas não consegue dizer o quanto a sua mão realmente andou, qual é a resolução nativa do sensor, nem se o mouse aplicou suavização por conta própria antes de o sistema operacional sequer ver o movimento.",
          ],
        },
        {
          heading: "O que isso significa quando você testa um mouse",
          paragraphs: [
            "É por isso que as ferramentas aqui se descrevem como medindo o que o seu computador recebeu, e não o que o seu mouse está fazendo. O teste de botões do mouse conta os cliques que chegaram à página. O teste de taxa de polling mede o espaçamento entre os eventos de movimento que o navegador entregou. Nenhum dos dois consegue inspecionar um switch, um encoder ou um sensor.",
            "A distância entre essas duas frases é onde mora a maior parte dos tópicos de suporte confusos. Um mouse com o botão esquerdo defeituoso envia dois eventos de pressionamento para um pressionamento físico, e o navegador reporta os dois. Um mouse com o sensor desgastado consegue relatar um fluxo perfeitamente regular de posições sutilmente erradas. De dentro da página, os dois parecem defeitos de hardware; de dentro do driver, os dois parecem bugs do navegador.",
            "Saber de que lado dessa linha você está economiza horas. Se os eventos que chegam à página estão errados, o problema está no hardware ou no driver, e nenhuma configuração de navegador resolve. Se os eventos estão certos e o aplicativo ainda se comporta mal, o problema está no aplicativo.",
          ],
        },
      ],
      faqs: [
        {
          question: "O navegador sabe a posição real do meu cursor?",
          answer:
            "Não. Ele conhece as posições das quais foi avisado, e apenas nos instantes em que despachou um evento. Entre os eventos ele não acompanha o ponteiro de forma alguma, e uma aba em segundo plano não fica sabendo de movimentos até um evento chegar de novo.",
        },
        {
          question: "Por que meu ponteiro parece mais suave do que a taxa de eventos sugere?",
          answer:
            "Porque a tela se atualiza no ritmo dela. Seu mouse pode reportar 1000 vezes por segundo enquanto o monitor atualiza 144 quadros por segundo. O navegador funde os eventos de movimento que chegam entre quadros, então a página vê menos eventos do que o dispositivo produziu, enquanto a tela continua mostrando um caminho suave.",
        },
        {
          question: "Uma página web consegue ler o mouse mais rápido do que o mouse reporta?",
          answer:
            "Não, e não precisa. O dispositivo é a origem dos dados, então a taxa de relatórios é um teto rígido. Uma página pode pedir as amostras individuais que ficaram atrás de um evento fundido com getCoalescedEvents, mas não tem como inventar amostras que o dispositivo nunca enviou.",
        },
        {
          question: "O que é aceleração do ponteiro, e dá para desligá-la em um teste?",
          answer:
            "Aceleração do ponteiro é o remapeamento que o sistema operacional faz do movimento físico para pixels de tela, de modo que um gesto rápido cobre mais distância do que um gesto lento. Só a Pointer Lock API expõe movimento não acelerado a uma página, e ela toma conta da tela. Em todos os outros lugares, os números que a página lê já incluem a curva de aceleração.",
        },
        {
          question: "Um teste no navegador prova que o meu mouse está funcionando corretamente?",
          answer:
            "Não. Ele prova o que chegou à página. Um mouse pode relatar um fluxo de posições limpo e perfeitamente regular enquanto o sensor está gasto, e um navegador pode entregar eventos perfeitos enquanto o hardware está impecável. Use o teste no navegador para descartar o lado do software e depois confirme o lado do hardware com os diagnósticos do próprio fabricante.",
        },
      ],
      toolSlug: "mouse-test",
    },
    {
      slug: "double-click-chatter-explained",
      title: "Vibração no clique duplo, explicado de verdade",
      metaTitle: "Vibração no clique duplo, explicado de verdade",
      metaDescription:
        "Por que um switch desgastado do mouse envia dois cliques para um só toque, como isso se diferencia de um duplo clique de verdade, qual é a assinatura de tempo e como eliminar a vibração do switch de vez.",
      excerpt:
        "Por que um switch desgastado do mouse envia dois cliques para um só toque, como isso se diferencia de um duplo clique de verdade e qual é a assinatura de tempo que denuncia a vibração do switch.",
      readTime: "6 min de leitura",
      dateLabel: "23 de novembro de 2026",
      lead: "Quando um mouse começa a dar duplo clique por conta própria, o diagnóstico quase sempre é vibração do switch: um único toque físico produz dois contatos elétricos. No software ele é idêntico a um duplo clique, e é justamente por isso que esse defeito é diagnosticado errado com tanta frequência. A diferença está no tempo, e o tempo é toda a história.",
      sections: [
        {
          heading: "O que um switch de mouse faz de verdade",
          paragraphs: [
            "Um botão de mouse é um contato metálico sob tensão que fecha um circuito quando você pressiona. Em um switch bom, o contato fecha uma única vez, de forma limpa, e permanece fechado até você soltar o dedo.",
            "Em um switch desgastado, o contato já está um pouco corroído ou gasto, ou a mola perdeu força e não pressiona mais com a mesma firmeza. O resultado é que, quando você pressiona, o circuito fecha, abre de novo por uma fração de milissegundo enquanto o contato quica, e fecha mais uma vez. O controlador do mouse enxerga dois pressionamentos. Você fez um.",
            "O intervalo entre os dois contatos costuma ser de poucos milissegundos e quase sempre fica bem abaixo de 50 milissegundos. O que faz isso parecer um duplo clique é que muitíssimos programas tratam o duplo clique como um comando, e duplo clique é justamente dois pressionamentos próximos. O mouse está dizendo a verdade sobre o que detectou; ele apenas detectou um toque que você nunca deu.",
          ],
        },
        {
          heading: "Por que o sistema operacional chama isso de duplo clique",
          paragraphs: [
            "Quase todo sistema desktop tem uma configuração para definir o quão próximos dois cliques precisam estar para valerem como duplo clique. No Windows, isso é a velocidade de duplo clique, 500 milissegundos por padrão. O macOS guarda o equivalente nas configurações de trackpad e mouse. Qualquer coisa abaixo desse limite conta como duplo clique para o sistema, e a vibração do switch cai bem abaixo dele.",
            "Dessa forma, a vibração do switch não só parece um duplo clique: ele é um duplo clique pela própria definição do sistema. O mouse mandou dois eventos de pressionamento com 6 milissegundos de intervalo; o sistema viu dois toques dentro do limite dele e informou duplo clique para todos os aplicativos da máquina.",
            "É por isso também que a culpa acaba caindo no Windows, no navegador ou no jogo que por acaso estava rodando. O sistema está fazendo exatamente o que mandaram fazer, e a evidência que ele usou foi o relato do mouse.",
          ],
        },
        {
          heading: "A assinatura de tempo que separa os dois casos",
          paragraphs: [
            "Um duplo clique de verdade e um evento de vibração do switch são distinguíveis, porque são formados por coisas diferentes. Um duplo clique de verdade são dois ciclos completos de pressionar e soltar: pressionar, soltar, pressionar, soltar. A vibração do switch é um ciclo de pressionar e soltar com um contato extra dentro dele: pressionar, soltar, pressionar, soltar, onde o segundo pressionar chega microssegundos depois do primeiro soltar e nenhum dedo humano se mexeu no meio do caminho.",
            "O intervalo é a pista que entrega tudo. Em um duplo clique de verdade, o intervalo entre a primeira soltura e o segundo toque é o tempo que uma pessoa leva para mover o dedo e apertar de novo, normalmente entre 80 e 300 milissegundos. Na vibração do switch, o intervalo é o tempo de quique de um contato metálico, entre 1 e 30 milissegundos. As duas populações não se sobrepõem: uma é uma pessoa, a outra é uma mola.",
            "A mesma assinatura aparece na taxa de clique. Uma pessoa clicando o mais rápido que consegue chega a 10 a 12 cliques por segundo. Um switch com vibração produz muito mais que isso, porque o hardware está gerando eventos mais rápido do que qualquer dedo conseguiria.",
          ],
          bullets: [
            "Um duplo clique de verdade são dois ciclos completos de pressionar e soltar, com 80 a 300 milissegundos de intervalo, vindos de um dedo que se moveu.",
            "Vibração do switch é um ciclo de pressionar e soltar com um contato extra dentro dele, com 1 a 30 milissegundos de intervalo.",
            "Clique rápido à mão tem teto em torno de 10 a 12 cliques por segundo; a vibração passa desse número com facilidade.",
          ],
        },
        {
          heading: "Por que o navegador dificulta a visão",
          paragraphs: [
            "O navegador relata com fidelidade o que ele recebe, mas o navegador também tem a própria ideia de duplo clique, e ela usa o limite do sistema operacional. Uma página que escuta o evento dblclick enxerga exatamente o que o sistema viu, então a vibração do switch e um duplo clique de verdade ficam indistinguíveis por esse evento. É a armadilha: dblclick é o único evento que nunca vai dizer qual dos dois aconteceu.",
            "Os eventos pointerdown e pointerup são um lugar melhor para olhar, porque são entregues por contato físico e cada um carrega um timeStamp com resolução de submilissegundo. Uma página que cronometra cada toque por conta própria consegue medir o intervalo entre dois toques que chegaram com 6 milissegundos de distância, e esse número é o diagnóstico.",
            "Há uma sutileza em volta dos timestamps. O timeStamp de cada evento é relativo à origem de tempo do documento, e os navegadores não garantem que ele seja o instante em que o hardware amostrou o movimento. É o instante em que o evento foi despachado. Sob carga, esse instante de despacho pode se afastar do tempo físico, então uma página deve sempre calcular o intervalo entre dois timestamps tirados do mesmo relógio, em vez de comparar um timestamp com Date.now.",
          ],
        },
        {
          heading: "Como ler o resultado",
          paragraphs: [
            "O teste de botões do mouse deste site registra o timestamp de cada toque, agrupa os toques que chegam a menos de 50 milissegundos uns dos outros e informa o intervalo. Um intervalo de poucos milissegundos é vibração do switch. Um intervalo na faixa do duplo clique é um duplo clique, e o contador de duplo clique só aumenta quando o intervalo cai dentro dessa faixa.",
            "O limite de 50 milissegundos é deliberadamente generoso. Um duplo clique humano praticamente nunca chega perto de 80 milissegundos, e o quique do switch praticamente nunca passa de 30 milissegundos, então as duas populações não se sobrepõem e a fronteira pode ficar sossegada no espaço vazio entre elas.",
            "O teste também mostra o menor intervalo visto durante a sessão. Esse único número costuma resolver a questão sem precisar de nenhum julgamento: um menor intervalo de poucos milissegundos é vibração do switch, e um menor intervalo na casa das centenas de milissegundos significa que os seus duplos cliques são reais.",
          ],
        },
        {
          heading: "O que fazer a respeito",
          paragraphs: [
            "Se a vibração do switch for leve, a solução costuma ser limpeza. Ar comprimido ou um pincel macio tiram a poeira, e um limpador de contatos do tipo vendido para limpar contatos elétricos dissolve o óxido que faz um contato corroído quicar. Contatos são baratos de revisar, e um switch desgastado muitas vezes volta a funcionar por esse caminho.",
            "Se o switch estiver danificado mecanicamente, ele precisa ser trocado. Um mouse com switches intercambiáveis, o que é comum entre os mouses reparáveis, é um trabalho de cinco minutos com um ferro de solda. Um mouse com switch selado é outra história, e a pergunta real nesse caso é se vale a pena reparar o mouse.",
            "Existe uma saída por software que vale conhecer, porque ela confunde as pessoas: baixar o limite de duplo clique do sistema operacional. Coloque no mínimo e o sistema para de tratar um quique de 6 milissegundos como duplo clique. Funciona, e é de fato a solução errada, porque também torna mais difícil fazer um duplo clique de verdade. Todo aplicativo que você usa, não só aquele que se comportou mal, passa a ter uma janela de duplo clique mais estreita. Trate isso como um jeito de testar o diagnóstico, e não como uma solução.",
          ],
        },
      ],
      faqs: [
        {
          question: "Como eu diferencio a vibração do switch de um duplo clique de verdade?",
          answer:
            "Pelo intervalo entre os dois toques. Um duplo clique de verdade são dois ciclos completos de pressionar e soltar, normalmente com 80 a 300 milissegundos de intervalo. Vibração do switch é um toque com um contato extra dentro dele, normalmente com 1 a 30 milissegundos de intervalo. O teste de botões do mouse mede esse intervalo e informa o valor.",
        },
        {
          question: "Um duplo clique de verdade pode ser rápido o bastante para parecer uma vibração do switch?",
          answer:
            "Não. Mesmo o duplo clique intencional mais rápido deixa um intervalo de cerca de 80 milissegundos, porque o dedo precisa soltar e percorrer o caminho antes de apertar de novo. A vibração do switch acontece em milissegundos de um dígito, mais rápido do que um switch consegue se mover fisicamente. Os dois nunca se sobrepõem.",
        },
        {
          question: "Meu mouse dá duplo clique em um único programa. Ainda assim é o mouse?",
          answer:
            "Quase certamente. O programa costuma ser o único que trata o duplo clique como uma ação com significado, então é ele que deixa a falha visível. Teste o mouse em um editor de texto simples e no navegador: se a vibração do switch aparecer lá também, é o hardware, e não o programa.",
        },
        {
          question: "A configuração de velocidade de duplo clique do sistema operacional importa?",
          answer:
            "Ela decide o que conta como duplo clique, e é esse limite a razão de a vibração do switch ser relatada como uma. Baixar a configuração dificulta mais que a vibração do switch dispare, mas também dificulta mais fazer um duplo clique de verdade, então serve para testar o diagnóstico, e não para consertar.",
        },
        {
          question: "Um mouse com vibração é risco de incêndio ou perigoso de continuar usando?",
          answer:
            "Não. A vibração do switch é um contato elétrico quicando dentro de um circuito de baixa tensão que carrega uma fração de ampere. Ele não danifica o mouse e não é risco de incêndio. O custo é o clique no lugar errado e o trabalho perdido, não o hardware em si.",
        },
      ],
      toolSlug: "mouse-test",
    },
  ],
};
