import type { ToolContent } from "../../types";

export const cpsTest: ToolContent = {
  slug: "cps-test",
  name: "Teste de CPS (Cliques por Segundo)",
  h1: "Teste de CPS (Cliques por Segundo)",
  metaTitle:
    "Teste de CPS — Meça seus Cliques por Segundo Online",
  metaDescription:
    "Meça seus cliques por segundo com um teste de CPS de 1, 5, 10, 15, 30 ou 60 segundos. See o CPS ao vivo, sua melhor pontuação e o detalhamento clique a clique. Grátis, sem cadastro.",
  category: "Ferramentas para Mouse",
  intro: [
    "O teste de CPS conta quantas vezes você clica em um intervalo fixo e divide pelo tempo que de fato passou, o que resulta em uma pontuação de cliques por segundo. A maioria das pessoas fica entre seis e oito. Treino constante e um bom mouse podem levar um jogador dedicado a passar de onze, e os melhores do mundo chegam à casa dos quinze.",
    "Escolha a duração antes de começar. Dez segundos é o padrão da comunidade porque é tempo suficiente para entrar no ritmo e curto o bastante para que uma largada ruim não estrague a execução.",
  ],
  steps: [
    {
      title: "Escolha a duração do teste",
      body: "Um segundo mede a velocidade pura de rajada. Cinco segundos é um bom meio-termo. Dez segundos é o benchmark padrão, e trinta ou sessenta segundos medem ritmo sustentado, e não uma arrancada.",
    },
    {
      title: "Aperte Iniciar e espere o sinal",
      body: "A contagem regressiva começa assim que o cronômetro dispara, então você não ganha uma largada de graça clicando antes. Coloque o cursor sobre o painel primeiro.",
    },
    {
      title: "Clique o mais rápido que puder",
      body: "Use um ritmo confortável. A pontuação mais alta que você consegue sustentar quase sempre é maior do que a dos primeiros dois segundos de desespero, porque cliques inconsistentes fazem o cronômetro e o mouse saírem de sincronia.",
    },
    {
      title: "Compare as execuções",
      body: "O teste guarda sua melhor pontuação e mostra a divisão entre a primeira e a segunda metade. Uma queda grande significa que você começou rápido demais e ficou sem ritmo.",
    },
  ],
  sections: [
    {
      heading: "O que o CPS mede de verdade, e o que não mede",
      paragraphs: [
        "Um navegador conta eventos de mouse. Quando você aperta o botão físico, o switch fecha, o controlador registra e o navegador recebe um evento de clique. Este teste mede quantos desses eventos o seu computador recebeu durante a janela.",
        "Ele não mede a latência de acionamento do switch — o pequeno intervalo entre o switch fechar fisicamente e o evento chegar. Esse atraso costuma ser de um ou dois milissegundos, o que parece irrelevante até você multiplicá-lo pelo número de cliques de uma sequência rápida, onde vira a diferença entre o primeiro clique acertar e passar batido.",
        "Ele também não mede a precisão do clique no sentido de um jogo de tiro, em que o alvo precisa estar de fato sob a mira. CPS é puramente uma taxa. Dois jogadores com o mesmo CPS podem ter resultados completamente diferentes em um jogo se um deles acerta o que está mirando.",
      ],
    },
    {
      heading: "Como é uma pontuação de CPS boa",
      paragraphs: [
        "Para a maioria das pessoas, seis a oito cliques por segundo é uma faixa realista no dia a dia. Quem joga shooters competitivos com frequência costuma ficar entre nove e onze. Jogadores de elite de verdade, o tipo que detém recordes nos rankings, chegam a treze ou quatorze, e o topo dessa faixa se diferencia por uma fração de clique por segundo.",
        "Esses números merecem ser levados com uma pitada de sal. Os rankings públicos de CPS costumam ser medidos em um dispositivo de entrada bruta, com latência mínima, e são frequentemente marcados como não verificados. Um teste no navegador sempre vai ler um pouco abaixo de um utilitário de benchmark dedicado, principalmente por causa da sobrecarga de entrega de eventos.",
        "O número importa menos do que a tendência. Se a sua pontuação cai de dois ou três cliques por segundo entre uma semana e outra, alguma coisa mudou — um switch desgastado, um processo em segundo plano consumindo recursos, ou um mouse que ficou mais pesado de mover.",
      ],
    },
    {
      heading: "Técnicas que realmente melhoram a pontuação",
      paragraphs: [
        "Relaxe a pegada. A tensão no antebraço se transmite para o mouse e deixa o botão mais difícil de apertar rápido. A maioria das pessoas que clica rápido usa um movimento leve e rítmico, movido pelo antebraço, e não pelo dedo.",
        "Use um mouse leve e de baixo atrito. Um mouse mais pesado, com mais atrito na superfície, dificulta manter a mão na posição entre os cliques, e recomeçar custa tempo.",
        "Mantenha o pulso levemente suspenso. Apoiar a base da mão na mesa introduz atrito e micro-movimentos que quebram o ritmo.",
        "Encontre um andamento estável e mantenha-o. Clicar em rajadas parece mais rápido, mas pontua menos. A consistência ao longo de toda a janela é o que separa um nove de um doze.",
        "Treine no jogo de verdade. CPS se treina, mas o padrão motor que transfere para o jogo é o que você ensaia nele, e não o que você pratica em um teste.",
      ],
    },
    {
      heading: "Por que a sua pontuação cai durante a execução",
      paragraphs: [
        "Quase todo mundo concentra os cliques no começo. Os primeiros dois segundos são rápidos porque você está fresco e levemente movido pela adrenalina, e depois a fadiga chega e a taxa cai. Uma execução que começa em quatorze e termina em sete tem uma boa média, mas é pior do que uma que mantém onze estável do começo ao fim.",
        "A fadiga na mão é real. Os músculos flexores que acionam o botão de clique cansam, e o clique começa a desacelerar. Um mouse leve, uma pegada relaxada e sessões curtas de prática reduzem esse efeito.",
        "Se a sua pontuação desaba de repente em vez de cair aos poucos, a causa costuma ser mecânica: um switch desgastado que está começando a vibrar, ou um mouse que developeu um arrastão na superfície que você está usando.",
      ],
    },
  ],
  faqs: [
    {
      question: "Qual é uma pontuação de CPS boa?",
      answer:
        "Para a maioria das pessoas, seis a oito cliques por segundo é normal. Jogadores competitivos de referência chegam a nove ou onze, e o topo dos rankings fica em torno de treze ou quatorze. Esses números são medidos em setups dedicados de baixa latência, então a leitura no navegador costuma ser um pouco mais baixa.",
    },
    {
      question: "Como faço para conseguir uma pontuação de CPS maior?",
      answer:
        "Relaxe a pegada e mova o clique a partir do antebraço, e não do dedo, use um mouse leve em uma superfície de baixo atrito e mantenha um andamento estável em vez de rajadas. A consistência ao longo de toda a janela pontua melhor do que uma largada rápida seguida de um colapso.",
    },
    {
      question: "Qual duração do teste de CPS é mais precisa?",
      answer:
        "Dez segundos é o padrão da comunidade porque é tempo suficiente para entrar no ritmo e curto o bastante para que uma largada lenta não domine o resultado. Um segundo mede apenas a velocidade de rajada, e sessenta segundos medem ritmo sustentado, que é uma habilidade diferente.",
    },
    {
      question: "Posso usar a barra de espaço em vez do mouse?",
      answer:
        "Pode. O teste de teclado e o teste de CPS respondem à barra de espaço, e clicar com a barra de espaço costuma dar uma pontuação um pouco maior, porque o movimento exigido é menor. Vale testar os dois e usar aquele em que você for mais consistente.",
    },
    {
      question: "Por que meu CPS no navegador é menor do que no ranking?",
      answer:
        "A entrega de eventos do navegador acrescenta uma pequena sobrecarga que um utilitário dedicado de entrada bruta não tem, e as pontuações dos rankings muitas vezes não são verificadas. Considere os números do navegador como uma medida relativa e consistente do seu próprio progresso, e não como uma comparação absoluta.",
    },
    {
      question: "O teste de CPS funciona em um trackpad?",
      answer:
        "Funciona, mas o toque no trackpad é mais lento do que um clique de mouse, então as pontuações serão menores. Alguns trackpads também registram o clique físico apenas com uma pressão forte, o que muda bastante a sensação. Use o teste de botões do mouse se você não tiver certeza de que o trackpad está registrando os cliques corretamente.",
    },
    {
      question: "Meu CPS caiu em comparação com o mês passado. O que devo conferir?",
      answer:
        "Passe por cada item em ordem: um switch desgastado ou que começa a vibrar, a aceleração de ponteiro mudando nas configurações, um processo em segundo plano consumindo tempo de quadro e, por fim, fadiga ou uma mudança no peso do mouse. Uma queda de dois ou três cliques por segundo ao longo de semanas normalmente é mecânica.",
    },
    {
      question: "O teste de CPS é grátis e preciso criar uma conta?",
      answer:
        "Não, é grátis. Não há cadastro, download, nem limite de quantas vezes você pode rodar. A contagem de cliques fica apenas na aba aberta e é descartada quando você fecha ou recarrega a página.",
    },
  ],
  related: ["mouse-test", "polling-rate-test", "keyboard-test", "scroll-test"],
};
