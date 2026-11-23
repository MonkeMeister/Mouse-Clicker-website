import type { ToolContent } from "../../types";

export const scrollTest: ToolContent = {
  slug: "scroll-test",
  name: "Teste de Rolagem do Mouse",
  h1: "Teste de Rolagem do Mouse",
  metaTitle:
    "Teste de Rolagem do Mouse — Verifique Entalhes Pulados e Rolagem Invertida",
  metaDescription:
    "Teste a rolagem do mouse online. Detecta rolagem invertida, entalhes pulados e passos irregulares, e mostra se o problema está na rodinha, no navegador ou no sistema operacional. Grátis e instantâneo.",
  category: "Ferramentas para Mouse",
  intro: [
    "Uma rodinha desgastada raramente para de funcionar de uma vez. Ela pula de vez em quando um entalhe, rola um pouco demais em uma direção ou volta para trás no meio de uma página longa. O teste de rolagem do mouse registra cada evento de rolagem que o navegador recebe, para que você veja exatamente o que está acontecendo, evento por evento.",
    "Rode o teste devagar primeiro e depois rápido, porque as duas velocidades revelam defeitos completamente diferentes. Um encoder sujo aparece em velocidades baixas. Um encoder com defeito ou uma conexão sem fio com bateria fraca aparece quando você dá um golpe na rodinha.",
  ],
  steps: [
    {
      title: "Escolha a duração do teste",
      body: "Quinze segundos é um bom padrão. Use uma janela maior para uma média mais confiável, ou mude para o modo contínuo se quiser manter o gráfico rodando enquanto você trabalha.",
    },
    {
      title: "Role sem parar em uma única direção",
      body: "Coloque o cursor sobre o painel de teste e role apenas para baixo. O painel captura a rodinha, então a própria página não se move. Manter uma direção por vez importa, porque inverter no meio da execução deixa a análise de direção sem sentido.",
    },
    {
      title: "Inverta e role para cima",
      body: "Quando a execução terminar, comece outra e role apenas para cima. Os totais de cima e de baixo ficam separados, então uma rodinha que só transmite em uma direção fica evidente.",
    },
    {
      title: "Leia o veredito",
      body: "O relatório procura saltos invertidos, passos irregulares e tremidas. Combine com o teste de botões do mouse se a rodinha parece estar boa, mas a página continua pulando.",
    },
  ],
  sections: [
    {
      heading: "O que o navegador realmente recebe",
      paragraphs: [
        "Rolar não é um evento único. Toda vez que você gira a rodinha, o sistema operacional envia ao navegador um fluxo de atualizações individuais, cada uma carregando um delta vertical, um delta horizontal e uma flag de unidade. O teste registra esse fluxo exatamente como ele chega.",
        "A flag de unidade importa mais do que a maioria das pessoas espera. O modo pixel é o padrão moderno, e é o que você obtém da maioria das rodinhas atuais e de todos os trackpads. O modo linha e o modo página são comportamentos antigos, e alguns drivers mais velhos e softwares de desktop remoto ainda os emitem. Uma rodinha reportando em modo linha não está necessariamente com defeito, mas ela dá uma sensação diferente e pode atrapalhar a rolagem dentro de alguns aplicativos web que assumem deltas em pixels.",
        "A direção é codificada pelo sinal. Um delta vertical positivo significa que o conteúdo sobe, que é o que acontece ao rolar para baixo. Um delta negativo significa rolagem para cima. É exatamente esse sinal que o teste observa quando procura saltos invertidos.",
      ],
    },
    {
      heading: "Rolagem invertida e o que realmente a causa",
      paragraphs: [
        "Um salto invertido é um evento de rolagem cujo sinal contradiz a direção em que você vem rolando. Alguns deles durante um golpe rápido são normais — o sistema operacional aplica uma pequena suavização inercial que pode deslocar o último evento de um gesto. Um fluxo constante deles durante uma rolagem lenta e deliberada é um defeito de verdade.",
        "A causa mais comum é um encoder sujo ou desgastado. O encoder é uma pequena roda dentada com duas superfícies de contato que deslizam uma sobre a outra conforme a rodinha gira. Poeira, lubrificante seco ou um dente torto criam uma interrupção momentânea no contato, e o dispositivo reporta por um instante a direção oposta. Limpar o encoder resolve o defeito na grande maioria dos casos.",
        "No macOS, verifique se a rolagem natural não está simplesmente ativada. Com a rolagem natural, rolar para baixo move o conteúdo para baixo, e o sinal de cada evento fica invertido em relação ao que o teste espera. Inverta a direção dentro do teste se ela estiver ativada, porque a rodinha está funcionando perfeitamente.",
        "No navegador, use uma única direção durante toda a execução. Inverter no meio é sinalizado, porque isso produz exatamente a mesma assinatura que a vibração do encoder e, sem esse cuidado, seria reportado como um defeito que não existe.",
      ],
    },
    {
      heading: "Entalhes pulados e passos irregulares",
      paragraphs: [
        "Rodinhas com entalhe reportam um salto discreto por entalhe. Em um mouse comum no Windows, isso costuma ser 100 ou 120 unidades de delta vertical por entalhe, dependendo da suposição de pixels por linha da plataforma. Se você rola dez entalhes devagar e só chegam oito incrementos, o encoder está perdendo contatos.",
        "Rodinhas de rotação livre e trackpads se comportam de outro jeito e não estão com defeito. Eles emitem um fluxo contínuo de muitos deltas pequenos em vez de passos discretos, então contar entalhes neles não faz sentido. O teste detecta qual dos dois é o seu caso e rotula a leitura de acordo, em vez de dar nota de defeito a um trackpad saudável.",
        "Tremida é a variação no tamanho do passo dentro de uma execução. Uma quantidade pequena é esperada mesmo em uma boa rodinha, porque o encoder óptico tem resolução finita e a geometria dos entalhes não é perfeitamente uniforme. Variações grandes e constantes apontam para um encoder torto ou uma rodinha que sofreu dano físico.",
      ],
    },
    {
      heading: "Como limpar uma rodinha que pula ou inverte",
      paragraphs: [
        "Desligue o mouse completamente antes de tudo. Em um mouse sem fio, retire as pilhas em vez de apenas desligá-lo, para que o encoder não fique pressionado pela energia residual.",
        "Remova a rodinha e aplique álcool isopropílico 90% em um pano sem fiapos. Deixe o álcool penetrar na roda do encoder e na fresta onde o encoder fica encostado na placa. Gire a rodinha lentamente por toda a amplitude cerca de uma dúzia de vezes, para que o álcool alcance as superfícies de contato, e depois deixe secar completamente antes de remontar. Ar comprimido sozinho costuma empurrar os detritos para mais dentro do alojamento.",
        "Se a rodinha continuar pulando depois de uma limpeza bem feita, o próprio encoder já se desgastou. Em um mouse com peças substituíveis, um encoder novo é barato e devolve a rodinha ao normal. Em um mouse lacrado, é aqui que a troca passa a ser a opção realista.",
        "Já que você está com o mouse aberto, aproveite e verifique a bateria de um mouse sem fio. A tensão baixa da bateria é uma causa comum de eventos de rolagem irregulares que se resolvem sozinhos depois da troca da bateria — vale descartar essa hipótese antes de abrir qualquer coisa.",
      ],
    },
  ],
  faqs: [
    {
      question: "Como faço para testar minha rodinha?",
      answer:
        "Coloque o cursor sobre o painel de teste e role sem parar em uma direção e depois repita na outra. O painel captura a rodinha, então a página fica parada enquanto os eventos são registrados. Use uma velocidade baixa para revelar um encoder sujo e uma velocidade alta para revelar um encoder com defeito.",
    },
    {
      question: "O que significa um salto invertido?",
      answer:
        "É um evento de rolagem que reporta a direção oposta à que você está rolando. Alguns durante um golpe rápido são artefatos normais de suavização. Um fluxo constante durante a rolagem lenta significa que o contato do encoder está quebrando e refazendo, o que geralmente é poeira ou um encoder desgastado, e isso se resolve com uma limpeza.",
    },
    {
      question: "Posso testar um trackpad ou um Magic Mouse com esta ferramenta?",
      answer:
        "Pode, e a ferramenta vai avisar que está lidando com um dispositivo de rolagem suave em vez de uma rodinha com entalhes. Trackpads e rodinhas de rotação livre não reportam entalhes físicos, então contar entalhes neles não faria sentido. O teste mede a velocidade e a consistência deles, em vez de dar nota de defeito.",
    },
    {
      question: "Minha rodinha volta para trás só no Mac. Está com defeito?",
      answer:
        "Quase certamente não. O macOS ativa a rolagem natural por padrão, o que inverte a direção de cada evento de rolagem em relação ao que o teste espera. Desative a rolagem natural nos Ajustes do Sistema, ou inverta a direção dentro do teste, e as leituras se normalizam.",
    },
    {
      question: "Por que minha rodinha só pula quando rolo rápido?",
      answer:
        "A rolagem rápida gera rajadas longas e rápidas de eventos e dá ao encoder menos tempo para se acomodar entre os entalhes. Uma rodinha que já está no limite — levemente suja ou rodando com bateria fraca — tende a falhar sob essa carga. Teste devagar também: se a execução lenta sai limpa e a rápida pula, o encoder está desgastado, e não o relato ser inconsistente.",
    },
    {
      question: "O teste de rolagem é preciso o suficiente para avaliar um mouse?",
      answer:
        "Ele é preciso para o que um navegador consegue observar: direção, modo de unidade, tamanho do passo, taxa de eventos e consistência. Ele não mede a distância física que a rodinha percorreria, então não vai dar milímetros de curso por entalhe nem dizer o quanto o detalhe mecânico está desgastado.",
    },
    {
      question: "O teste funciona em uma tela sensível ao toque?",
      answer:
        "A rolagem por toque produz eventos de toque, e não eventos de rolagem, então o painel da rodinha fica vazio em um dispositivo sensível ao toque. Para entrada por celular, as ferramentas são voltadas para mouses, teclados e outros dispositivos de apontamento.",
    },
    {
      question: "Minha rodinha pula em jogos, mas não no uso normal. Por quê?",
      answer:
        "Os jogos frequentemente aplicam o próprio tratamento de rolagem, incluindo suavização e aceleração, e costumam usar entrada bruta, que contorna parte do processamento do navegador. Uma rodinha só um pouco desgastada pode funcionar bem em velocidades normais de leitura e falhar sob as entradas rápidas e repetidas que um jogo gera. Teste com golpes rápidos e repetidos, e não com uma rolagem lenta única.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "cps-test", "keyboard-test"],
};
