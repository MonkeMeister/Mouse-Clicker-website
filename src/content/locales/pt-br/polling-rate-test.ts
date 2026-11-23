import type { ToolContent } from "../../types";

export const pollingRateTest: ToolContent = {
  slug: "polling-rate-test",
  name: "Teste de Taxa de Polling",
  h1: "Teste de Taxa de Polling do Mouse",
  metaTitle:
    "Teste de Taxa de Polling — Meça a taxa de polling do seu mouse em Hz",
  metaDescription:
    "Meça a taxa de polling do seu mouse no navegador usando eventos brutos coalescidos do ponteiro. Veja o Hz médio, o Hz de pico e a estabilidade, e descubra qual método de amostragem o navegador usou.",
  category: "Ferramentas para Mouse",
  intro: [
    "A taxa de polling é a frequência com que o seu mouse reporta a posição para o computador, medida em hertz. Um mouse de 1000 Hz reporta a posição mil vezes por segundo; um mouse de 125 Hz reporta cento e vinte e cinco vezes. O teste mede a taxa que o seu navegador realmente recebe e mostra tanto a média quanto o pico.",
    "A medição é feita a partir de eventos brutos do ponteiro, que recuperam as amostras que o navegador coalesce em um único quadro. Isso importa: sem amostragem bruta, um mouse de 1000 Hz aparece como 60 ou 120 Hz em um monitor de 60 ou 120 Hz, que é o erro mais comum em testes de taxa de polling feitos no navegador.",
  ],
  steps: [
    {
      title: "Coloque o cursor sobre a área de teste",
      body: "A área precisa receber movimento contínuo do ponteiro. Deixar o mouse no centro de um mousepad grande e movê-lo em círculos lentos e amplos dá a leitura mais limpa.",
    },
    {
      title: "Mova o mouse sem parar por dez segundos",
      body: "Continue se movendo. Uma leitura tirada com o mouse parado não significa nada, porque a maioria dos mouses para de reportar quando nada muda.",
    },
    {
      title: "Confira o método de amostragem indicado",
      body: "O painel informa se os eventos brutos coalescidos estavam disponíveis ou se a leitura caiu para amostragem no nível de quadro. A amostragem bruta é o que você quer; o modo de nível de quadro limita a leitura máxima à taxa de atualização do monitor.",
    },
    {
      title: "Leia o número de estabilidade",
      body: "Um mouse fazendo polling em uma taxa estável mostra um agrupamento apertado em torno do valor nominal. Uma variação grande normalmente indica um problema de conexão, e não uma taxa diferente.",
    },
  ],
  sections: [
    {
      heading: "Como a medição funciona",
      paragraphs: [
        "Os navegadores amostram o movimento do ponteiro uma vez por quadro para renderizar, mas o hardware por baixo reporta muito mais vezes do que isso. Um mouse de 1000 Hz gera uma atualização de posição a cada milissegundo e, em um quadro de 16,7 milissegundos a 60 Hz, cerca de dezesseis dessas atualizações chegam durante o quadro. O navegador descarta todas, menos a última, para fins de renderização.",
        "A API de eventos coalescidos recupera as amostras descartadas. Cada evento de ponteiro carrega a lista completa de posições que foram agrupadas nele, cada uma com seu próprio timestamp de alta resolução. Dividir a contagem de amostras pelo tempo decorrido dá a taxa real de report do dispositivo, e não a taxa do monitor.",
        "Onde essa API não está disponível, a ferramenta recorre a contar eventos de ponteiro individuais, o que só pode reportar na taxa de atualização do monitor. O painel rotula qual método produziu o número, então uma leitura de 60 Hz em um mouse de 1000 Hz é identificável na hora como um fallback, e não como um mouse lento.",
      ],
    },
    {
      heading: "Taxas de polling comuns e o que elas valem",
      paragraphs: [
        "125 Hz foi o padrão de longa data dos mouses de escritório e ainda é comum em hardware mais barato. 250 Hz e 500 Hz aparecem em mouses gamers de gama média. 1000 Hz é o padrão competitivo da atualidade. 2000 Hz, 4000 Hz e 8000 Hz aparecem em produtos voltados a entusiastas, e exigem um mouse capaz e um navegador que exponha eventos brutos do ponteiro.",
        "O benefício prático de passar de 125 Hz para 1000 Hz é real, mas modesto: um a dois milissegundos a menos de latência de entrada, o que importa em shooters competitivos e é imperceptível no trabalho de rotina. O salto de 1000 Hz para 8000 Hz é bem menor ainda — menos de um milissegundo de ganho adicional — e aparece sobretudo como mais uso de CPU e mais consumo de bateria.",
        "Taxas de polling mais altas também interagem com a taxa de quadros. Em um monitor de 240 Hz, um mouse de 1000 Hz é amostrado cerca de quatro vezes por quadro, e a diferença visível entre 1000 Hz e 4000 Hz é mínima, porque o monitor não consegue mostrar isso.",
      ],
    },
    {
      heading: "Por que uma leitura pode não bater com a da caixa",
      paragraphs: [
        "A taxa de report é uma propriedade do mouse, mas o que você mede é a taxa com que o seu computador recebe os reports. Entre os dois ficam a conexão e o sistema operacional, e os dois podem reduzir a taxa efetiva.",
        "Um mouse sem fio de 2,4 GHz a uma distância curta costuma ser estável. Ao longe, ou com interferência, o receptor perde reports e a leitura cai e oscila. O mesmo acontece com a bateria fraca, quando o mouse reduz de propósito a taxa de report para economizar energia.",
        "As configurações de polling do USB também importam. Um controlador configurado para 125 Hz não vai entregar reports de 1000 Hz, independentemente do que o mouse seja capaz de fazer. No Windows, as propriedades avançadas de um USB Root Hub expõem o intervalo de polling do dispositivo.",
        "Por fim, o gerenciamento de energia pode atrapalhar. No Windows, desativar a suspensão seletiva do USB no controlador correspondente é uma solução comum para mouses que perdem reports durante períodos de inatividade.",
      ],
    },
    {
      heading: "Taxas de polling altas e a sua taxa de quadros",
      paragraphs: [
        "Existe uma troca real. Um mouse fazendo polling a 8000 Hz gera oito mil eventos de ponteiro por segundo, e cada um deles representa trabalho para o navegador e para o sistema operacional. Em uma página movimentada, isso pode custar uma parcela significativa do tempo de quadro.",
        "Este é um dos motivos para testar a taxa de polling na página em que você realmente joga, e não de forma isolada. Se o seu jogo mantém uma taxa de quadros estável com o mouse a 8000 Hz, mantenha. Se os tempos de quadro ficarem irregulares, caia para 4000 Hz e compare. A diferença de latência entre as duas opções é menor do que a diferença de suavidade.",
      ],
    },
  ],
  faqs: [
    {
      question: "Qual é uma boa taxa de polling para jogos?",
      answer:
        "1000 Hz é a meta sensata para a maioria das partidas competitivas. É o padrão da atualidade, a diferença de latência em relação a 500 Hz é pequena, mas mensurável, e o custo de CPU é administrável. Ir além disso traz retorno decrescente, a não ser que você esteja buscando um jogo específico que se beneficie disso.",
    },
    {
      question: "Por que o navegador mostra uma taxa de polling menor do que a especificação do meu mouse?",
      answer:
        "Geralmente porque o navegador expôs apenas eventos de ponteiro no nível de quadro, e não eventos brutos coalescidos, o que limita a leitura à taxa de atualização do monitor. O painel do teste informa qual método foi usado. Se ele acusar um fallback, a taxa real é maior do que o número mostrado.",
    },
    {
      question: "8000 Hz é realmente melhor do que 1000 Hz?",
      answer:
        "Marginalmente, e mais em termos de tempo de quadro. A melhora de latência é uma fração de milissegundo, que poucos jogadores conseguem perceber. O custo é oito vezes mais eventos de ponteiro por segundo para o navegador e o sistema operacional lidarem, o que pode afetar o ritmo de quadros em uma página movimentada.",
    },
    {
      question: "Como faço para testar a taxa de polling do meu mouse?",
      answer:
        "Mantenha o cursor em movimento contínuo sobre a área de teste por cerca de dez segundos. Deixar o mouse parado não dá leitura, porque a maioria dos mouses para de reportar quando nada se move. Círculos lentos e amplos produzem o resultado mais limpo.",
    },
    {
      question: "Por que a minha taxa de polling oscila durante o teste?",
      answer:
        "Oscilação normalmente significa que reports estão sendo perdidos entre o mouse e o computador. As causas comuns são uma conexão sem fio fraca ou com interferência, uma bateria fraca que faz o mouse reduzir a taxa e o gerenciamento de energia do USB suspendendo a porta. Uma conexão com fio em um cabo curto é a referência para comparação.",
    },
    {
      question: "A taxa de polling afeta a suavidade do cursor?",
      answer:
        "Ela afeta a latência entre o movimento da sua mão e a resposta do jogo. A suavidade visível do cursor é limitada pela taxa de atualização do monitor, e é por isso que um mouse de 1000 Hz pode parecer idêntico a um de 500 Hz em um monitor de 60 Hz, mesmo que a entrada chegue antes.",
    },
    {
      question: "Este teste funciona com mouses sem fio?",
      answer:
        "Sim, e é no sem fio que a leitura é mais informativa. Ele mostra tanto a taxa nominal quanto o quanto essa taxa é estável ao longo do tempo, que é como um problema de conexão fica visível. Uma leitura estável de 1000 Hz significa que o link está saudável.",
    },
    {
      question: "Posso aumentar a taxa de polling do meu mouse?",
      answer:
        "Às vezes. Muitos mouses gamers vêm com software que permite definir a taxa como 500, 1000 ou 8000 Hz, e alguns têm uma chave física na parte de baixo para isso. O teste vai mostrar a taxa com que o mouse está configurado no momento.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "keyboard-test"],
};
