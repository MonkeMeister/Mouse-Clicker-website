import type { ToolContent } from "../../types";

export const keyboardTest: ToolContent = {
  slug: "keyboard-test",
  name: "Teste de Teclado",
  h1: "Teste de Teclado",
  metaTitle: "Teste de Teclado Online — Verifique Todas as Teclas e Encontre Teclas Fantasma",
  metaDescription:
    "Teste todas as teclas do seu teclado no navegador. Identifica teclas sem resposta, teclas travadas e o ghosting por rollover, e mostra ao vivo o código de tudo o que você pressiona. Grátis, sem instalar nada.",
  category: "Ferramentas para Teclado",
  intro: [
    "O teste de teclado escuta o seu teclado enquanto você digita e reporta cada tecla que o navegador recebe, junto com o código físico da tecla. Aperte as teclas uma de cada vez para conferir cada uma e depois segure combinações para verificar o ghosting por rollover, que é o limite de hardware que faz o clique rápido em jogos perder comandos.",
    "Nada do que você digita é registrado ou transmitido. As teclas são comparadas com um mapa de layout ao vivo dentro da página e depois descartadas.",
  ],
  steps: [
    {
      title: "Clique no painel de teclas para dar foco a ele",
      body: "O painel precisa de foco antes de conseguir receber eventos de teclado. Clique nele uma vez e comece a digitar. Seu navegador não vai interceptar a digitação comum enquanto o painel estiver em foco, então tome cuidado para não digitar em algum formulário sem querer.",
    },
    {
      title: "Aperte as teclas uma de cada vez",
      body: "Percorra o teclado de forma física, não alfabética. Aperte cada tecla, confirme que o painel acende e anote qualquer tecla que permanecer apagada — essa é a tecla que não está funcionando.",
    },
    {
      title: "Verifique se há teclas travadas",
      body: "Aperte uma tecla e solte. Se o painel continuar mostrando ela como pressionada depois que você soltou, a tecla está travada mecanicamente ou o teclado não está registrando a soltura.",
    },
    {
      title: "Teste o rollover com combinações",
      body: "Segure três ou quatro teclas ao mesmo tempo e observe se uma quarta tecla acende sem deveria. Essa tecla extra é uma fantasma, e ela mostra exatamente quantos acionamentos simultâneos o seu teclado aguenta.",
    },
  ],
  sections: [
    {
      heading: "O que os códigos de tecla significam e por que importam",
      paragraphs: [
        "Cada evento de teclado carrega dois identificadores. O valor da tecla é o que a tecla produz de acordo com o layout ativo, então em um teclado AZERTY francês apertar a tecla marcada como Q produz a. O código é a posição física dessa tecla no teclado, independentemente do layout, então a mesma tecla física sempre reporta o mesmo código.",
        "Para os testes, o código é o que importa. Ele é estável entre layouts, o que significa que uma tecla quebrada reporta a mesma falha em todos os idiomas, e permite que a ferramenta desenhe um diagrama preciso do layout que você está realmente usando.",
        "A flag de repetição também vale a pena conhecer. Segurar uma tecla produz um keydown seguido de um fluxo de eventos keydown marcados como repetição, e então um único keyup. Uma tecla que nunca envia o keyup é o que o teste chama de tecla travada, e ela vai continuar repetindo uma letra em qualquer aplicativo que você estiver usando.",
      ],
    },
    {
      heading: "Rollover e ghosting, explicados como devem ser",
      paragraphs: [
        "Todo teclado tem uma matriz de hardware: uma grade de linhas e colunas ligadas entre si, com um switch em cada interseção. Quando você aperta uma tecla, ela conecta uma linha a uma coluna. O controlador só consegue detectar as linhas e colunas que estão conectadas, e ele tem um número limitado de conexões que consegue ler por vez.",
        "Um teclado mecânico completo com um controlador decente normalmente lida com seis ou mais teclas simultâneas, e muitas vezes com mais. Um teclado mais barato, um teclado de notebook ou um teclado de membrana talvez só comporte três. Aperte uma quarta tecla e o controlador lê um segundo par de linha e coluna, não intencional, como conectado — e isso produz uma tecla fantasma que você nunca apertou.",
        "O teste mostra isso na prática: segure as teclas que você usaria em uma combinação rápida de movimento em um jogo e veja qual tecla extra aparece. Se uma fantasma surge com três teclas, esse é o limite efetivo de rollover do seu teclado, e nenhuma configuração de software vai aumentá-lo.",
      ],
    },
    {
      heading: "Defeitos comuns de teclado e o que os causa",
      paragraphs: [
        "Uma única tecla sem resposta quase sempre é um switch que falhou. Os switches de tecla têm vida útil cotada em milhões de acionamentos, e uma tecla muito usada — muitas vezes uma em que você descansa o dedo durante um jogo — se desgasta muito antes do resto do teclado. Se a tecla não produz nenhum evento, e produz assim de forma consistente entre reinicializações, o switch falhou. Switches de reposição custam muito pouco e a maioria dos teclados de notebook permite a troca, desde que você se sinta confortável abrindo o aparelho.",
        "Uma tecla que dispara duas vezes com um único acionamento é vibração, o equivalente de teclado ao bounce do switch do mouse. Ela é causada pelo mesmo mecanismo de desgaste e produz repetições acidentais em jogos.",
        "Uma tecla que fica presa, mas envia o evento de soltura, geralmente é sujeira: um migalha, uma bebida ou poeira comprimida no mecanismo. Apertar a tecla algumas vezes e depois limpar debaixo do capuz costuma resolver, sem precisar desmontar nada.",
        "Vibração que afeta muitas teclas ao mesmo tempo, especialmente em uma linha inteira ou em uma coluna inteira, aponta para um problema de controlador ou de firmware, e não para switches isolados. Isso normalmente significa uma atualização de driver, um reset ou a troca do teclado inteiro.",
      ],
    },
    {
      heading: "O que vale conferir antes de culpar o hardware",
      paragraphs: [
        "Sticky Keys e Filter Keys são recursos de acessibilidade que vêm ativados por padrão no Windows e podem ser ligadas sem querer ao apertar a tecla Shift cinco vezes. Quando o Sticky Keys está ativo, um único toque de tecla se comporta como se você a tivesse segurado, e a tecla parece se repetir. Desativá-lo nas configurações do teclado resolve o problema na hora.",
        "No macOS, o Slow Keys e as configurações de repetição de tecla podem fazer as teclas parecerem sem resposta se o atraso for longo. As duas opções são ajustáveis nos Ajustes de Teclado.",
        "O remapeamento no nível dos aplicativos é outra causa comum. Softwares de remapeamento de mouse e teclado, overlays de transmissão e algumas ferramentas de acessibilidade interceptam as teclas antes de o aplicativo vê-las. Se uma tecla funciona em todo lugar, mas falha dentro de um programa específico, o problema é o programa.",
      ],
    },
  ],
  faqs: [
    {
      question: "Como faço para testar todas as teclas do meu teclado?",
      answer:
        "Clique no painel de teclas para que ele receba o foco e depois aperte as teclas fisicamente ao longo do teclado. Cada acionamento acende a tecla correspondente no diagrama e mostra o código da tecla. Percorra o layout em vez de seguir a ordem alfabética, para que você tenha menos chance de pular alguma tecla.",
    },
    {
      question: "O que é ghosting de teclado e como eu testo?",
      answer:
        "É quando o teclado reporta uma tecla que você não apertou, porque a matriz de hardware não consegue ler todas as teclas que você está segurando ao mesmo tempo. Segure três ou quatro teclas juntas no painel de teste: qualquer tecla extra que acender é uma fantasma.",
    },
    {
      question: "Qual é um bom número de rollover para jogos?",
      answer:
        "Seis ou mais teclas simultâneas é confortável na maioria dos jogos competitivos, e teclados mecânicos completos com um bom controlador costumam lidar com mais. Três é o mínimo e é onde o ghosting começa a aparecer em combinações rápidas.",
    },
    {
      question: "Por que uma das minhas teclas não funciona?",
      answer:
        "Se a tecla não produz nenhum evento, é bem provável que o switch tenha falhado — switches individuais se desgastam, e os mais usados se desgastam primeiro. Se a tecla está travada fisicamente ou envia um keyup sem keydown, a causa usual é sujeira embaixo do capuz.",
    },
    {
      question: "O teste de teclado funciona com notebooks?",
      answer:
        "Sim, mas teclados de notebook costumam ter um limite de rollover menor do que os teclados mecânicos de mesa, então é mais provável que mostrem ghosting. Várias teclas de notebook também são duplicadas ou desativadas pelo fabricante, o que pode parecer um defeito quando não é.",
    },
    {
      question: "Os dados das minhas teclas são guardados em algum lugar?",
      answer:
        "Não. As teclas são comparadas com o layout da página à medida que chegam e descartadas na hora. A página nunca envia o que você digita para um servidor, e nada fica retido quando você fecha a aba.",
    },
    {
      question: "Qual a diferença entre código da tecla e valor da tecla?",
      answer:
        "O código da tecla identifica a posição física da tecla e não muda com o layout. O valor da tecla é o caractere que a tecla produz, então em um AZERTY a tecla marcada como Q produz a. O teste mostra os dois e usa o código para descobrir qual tecla física você apertou.",
    },
    {
      question: "Minhas teclas se repetem quando eu seguro. Isso é normal?",
      answer:
        "Sim, essa é a repetição normal de tecla, e o teste marca esses eventos extras como repetição, e não como novos acionamentos. Se uma tecla continua se repetindo depois que você soltou, isso é uma tecla travada e vale investigar — a causa usual é sujeira ou um switch que falhou.",
    },
  ],
  related: ["mouse-test", "cps-test", "scroll-test", "polling-rate-test"],
};
