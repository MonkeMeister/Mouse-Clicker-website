import type { ToolContent } from "../../types";

export const mouseTest: ToolContent = {
  slug: "mouse-test",
  name: "Teste de Botões do Mouse",
  h1: "Teste de Botões do Mouse",
  metaTitle: "Teste de Botões do Mouse — Verifique Todos os Botões Online",
  metaDescription:
    "Seu mouse está dando duplo clique? Teste os cinco botões do mouse, a rodinha e o comportamento do duplo clique no navegador. Detecta botões mortos, vibração no duplo clique e cliques perdidos. Grátis e instantâneo.",
  category: "Ferramentas para Mouse",
  intro: [
    "Este teste de botões do mouse registra cada clique, evento de rolagem e acionamento que o seu navegador realmente recebe e depois mostra se os números fecham. O seu mouse está dando duplo clique sozinho? Este teste responde a isso em cerca de dez segundos — aperte um botão uma vez e, se um único acionamento somar dois cliques, o switch está vibrando, e o painel aponta o defeito junto com o tempo exato. Aperte cada botão do seu mouse de verdade dentro da área de teste e acompanhe os contadores em tempo real. Se um botão não registra nada, se um clique chega como dois ou se acionamentos se perdem no clique rápido, os contadores vão mostrar.",
    "Tudo roda localmente no seu navegador usando eventos padrão de mouse. Não há download, extensão, conta, e nada sobre os seus cliques ou o seu hardware é enviado para lugar nenhum.",
  ],
  steps: [
    {
      title: "Abra a área de teste e leve o cursor até ela",
      body: "Clique em qualquer lugar dentro do painel cinza. O painel captura o mouse para que o clique com o botão direito não abra um menu de contexto e cliques acidentais não acionem links em outras partes da página.",
    },
    {
      title: "Aperte cada botão uma vez, sozinho",
      body: "Esquerdo, direito, meio e depois os dois botões de polegar, se o seu mouse tiver. Aperte cada um algumas vezes para ver os contadores se separarem com clareza. Observe o diagrama à esquerda acender a zona correspondente.",
    },
    {
      title: "Role a rodinha para cima e depois para baixo",
      body: "Role a rodinha devagar em uma direção e depois na outra. Os contadores de cima e de baixo acompanham cada direção separadamente, e é assim que fica evidente uma rodinha que só registra um dos sentidos.",
    },
    {
      title: "Faça um duplo clique rápido para procurar vibração",
      body: "Dê duplo clique no mesmo botão de dez a vinte vezes bem rápido. Um micro-switch desgastado envia dois acionamentos separados para um único clique físico, e o teste marca isso como um defeito de duplo clique com o tempo exato.",
    },
  ],
  sections: [
    {
      heading: "Como saber se o seu mouse está dando duplo clique",
      paragraphs: [
        "Um mouse dá duplo clique quando um único acionamento físico produz dois eventos de clique separados. O jeito mais rápido de descobrir é apertar um botão uma vez e observar dois números. O contador Total deve subir exatamente um. Se subir dois, o botão está enviando um acionamento que você nunca fez, e o painel exibe o aviso \"Vibração em duplo clique detectada\", que inclui o intervalo entre os dois acionamentos em milissegundos. É esse intervalo que separa um defeito de hardware do comportamento normal: a vibração do switch acontece abaixo de 40 milissegundos, enquanto um duplo clique feito de propósito leva 200 milissegundos ou mais.",
        "O contador Duplo também pode subir, porque o sistema operacional enxerga dois eventos reais de botão pressionado e conta isso como um duplo clique. É exatamente por isso que um mouse que vibra seleciona um único arquivo e já em seguida começa a renomeá-lo, sem você tocar em nada duas vezes.",
        "Rode o teste em quatro passadas para ter certeza. Clique uma vez e faça uma pausa. Dê um duplo clique normal e confira se o contador Duplo sobe exatamente um. Depois estufe o switch dando duplo clique no mesmo botão de quinze a vinte vezes o mais rápido que conseguir — um switch desgastado aciona o detector de vibração em poucos segundos. Por fim, repita o teste com um segundo mouse ou em um segundo computador: se o defeito acompanha o mouse, é hardware; se acompanha o computador, é um problema de driver ou de configuração.",
        "Se os dois acionamentos estão distantes o suficiente para o seu sistema operacional tê-los contado como duplo clique, o mouse não é o culpado e a solução é mudar uma configuração, e não fazer um reparo. Windows: abra Propriedades do Mouse e mova o controle de velocidade do duplo clique para o lado mais rápido. macOS: ajuste \"Velocidade do duplo clique\" em Ajustes do Mouse. Linux: altere o intervalo de duplo clique nas configurações do ambiente gráfico. Só os acionamentos que chegam dentro da janela de 40 milissegundos são vibração de hardware de verdade, e esses precisam de limpeza ou de troca do switch.",
      ],
      bullets: [
        "Passada de clique simples — aperte uma vez, pause um segundo e aperte de novo. Um acionamento físico precisa somar exatamente um ao contador Total",
        "Passada de duplo clique — dê um duplo clique normal. O contador Duplo deve subir um e o contador Total, dois",
        "Passada de estresse — dê duplo clique no mesmo botão de 15 a 20 vezes o mais rápido que puder. A vibração de um switch desgastado aparece na hora, com o intervalo exato em milissegundos",
        "Passada de conferência — repita com um segundo mouse ou em um segundo computador para separar um defeito de hardware de um defeito de software",
      ],
    },
    {
      heading: "O que cada contador significa",
      paragraphs: [
        "Um mouse reporta o estado dos botões por meio de um pequeno conjunto de botões numerados. O seu navegador reporta 0 para o botão esquerdo, 1 para o botão do meio, 2 para o botão direito, e 3 e 4 para os dois botões de polegar que existem na maioria dos mouses gamers e ergonômicos. O teste separa cada um deles em um contador próprio, então um mouse com um botão lateral quebrado fica evidente em vez de se esconder dentro do total.",
        "O total de cliques é a soma de todos os acionamentos. Se o total e os contadores individuais divergirem em mais do que o número de acionamentos que você lembra de ter feito, algo está sendo perdido ou duplicado em algum ponto.",
        "Os cliques duplos são contados a partir do próprio reconhecimento de duplo clique do navegador, que usa o limite de tempo do sistema operacional — normalmente entre 400 e 500 milissegundos. Se a sua contagem de duplos cliques for menor do que o número de duplos cliques que você fez, provavelmente a velocidade de duplo clique do sistema operacional está lenta demais, e não o seu mouse com defeito. Um switch que vibra também pode empurrar esse contador para cima, porque o sistema operacional conta dois eventos reais de botão pressionado como duplo clique, mesmo que você tenha apertado só uma vez.",
      ],
      bullets: [
        "Clique esquerdo — botão principal, o que você mira",
        "Clique direito — o botão contextual; se ele ficar zerado, o sistema operacional pode estar remapeando",
        "Clique do meio — a pressão na rodinha, também usada para abrir links em uma nova aba",
        "Botão lateral (Avançar) e botão lateral (Voltar) — os botões de polegar",
        "Rolagem para cima / Rolagem para baixo — eventos da rodinha, acompanhados por direção",
      ],
    },
    {
      heading: "Os três defeitos que este teste realmente detecta",
      paragraphs: [
        "Botão morto. A falha mais simples e a mais fácil de passar despercebida, porque as pessoas se adaptam a ela sem perceber. Se você aperta o botão direito dez vezes e o contador continua em zero enquanto o botão esquerdo responde na hora, o switch por baixo está morto. O fio e a porta USB estão funcionando, porque é o mesmo cabo que carrega todos os outros sinais.",
        "Vibração em duplo clique. É o defeito que estraga o clique rápido em jogos competitivos. Um micro-switch é um pequeno contato metálico com mola. Conforme ele se desgasta, o contato ganha um ponto irregular e fica quicando por um instante — abrindo, fechando e fechando de novo em poucos milissegundos. O mouse então reporta dois cliques para um único acionamento físico. O sistema operacional interpreta isso como duplo clique acidental e dispara uma ação que você não pediu, como selecionar um único arquivo ou disparar dois tiros quando você queria um.",
        "Falha intermitente. Menos comum, mas mais difícil de conviver, porque o botão funciona na maior parte do tempo. Durante o clique rápido, o contato às vezes não fecha de forma limpa e o acionamento é completamente perdido. Em um jogo isso parece um mouse que aleatoriamente não registra. O teste evidencia isso comparando o número de acionamentos registrados pelo teste com o número de cliques que você deu.",
      ],
    },
    {
      heading: "É vibração de switch ou apenas um duplo clique rápido?",
      paragraphs: [
        "Nem todo defeito de duplo clique é culpa do mouse. Se o teste mostrar dois acionamentos separados por menos de 40 milissegundos, isso é vibração de switch — o sinal nunca chegou a um estado de soltar entre os dois acionamentos, o que significa que o hardware os produziu. Se os dois acionamentos estiverem separados por 200 milissegundos ou mais e o sistema operacional os tiver contado como duplo clique, isso é simplesmente um duplo clique rápido e é totalmente normal.",
        "A distinção importa porque a solução é diferente. Vibração é um problema de hardware que você resolve limpando ou trocando o switch. Um limite de duplo clique lento é um problema de configuração que você resolve no painel de controle do mouse do sistema operacional. O painel usa esse mesmo limite de 40 milissegundos, então tudo o que ele marca como vibração é culpa do hardware, e de mais nada.",
      ],
    },
    {
      heading: "Como corrigir os problemas que este teste encontra",
      paragraphs: [
        "Para um botão morto, comece pela causa mais simples: um conector mal encaixado ou torto. Reencaixe o plugue USB, tente outra porta diretamente no computador em vez de um hub e teste o mouse em outra máquina. Se o botão continuar morto em um segundo computador, o switch falhou e o mouse precisa de reparo ou de troca.",
        "Para a vibração em duplo clique, muitas vezes é possível salvar o switch. Abra o mouse e aplique uma pequena quantidade de limpador de contato ou lubrificante de switch diretamente no switch afetado e depois acione o botão várias vezes para espalhar o produto. Isso prolonga a vida útil do switch, mas não reverte o desgaste. Para um mouse do qual você depende todo dia, trocar o switch por uma peça de reposição é uma solução mais confiável do que limpar.",
        "Para uma rodinha que só registra uma direção ou pula entalhes, o problema costuma ser o encoder, e não o switch. Desligue o mouse, retire as pilhas e limpe o encoder com álcool isopropílico 90% aplicado em um pano sem fiapos; depois gire a rodinha por toda a amplitude uma dúzia de vezes ou mais, para que o álcool alcance o contato. Ar comprimido sozinho normalmente só empurra a poeira para mais dentro.",
        "Para cliques perdidos de forma intermitente no clique rápido, verifique se o sistema operacional está aplicando aceleração de ponteiro. No Windows, desative \"Aprimorar a precisão do ponteiro\" em Propriedades do Mouse. No macOS, desative a aceleração do ponteiro nos Ajustes de Acessibilidade. No Linux, verifique o perfil de aceleração do libinput. Entrada bruta, sem aceleração, elimina uma fonte de tempo errático que é fácil de confundir com falha de hardware.",
      ],
    },
    {
      heading: "O que este teste não pode dizer",
      paragraphs: [
        "Este é um teste de navegador, então ele observa os eventos que o navegador recebe, e não o estado elétrico do switch. Ele não mede a latência de acionamento do switch, não lê o DPI bruto do sensor e não informa se uma taxa de polling é de fato 1000 Hz. Ele também não diferencia um sensor desgastado de um switch desgastado quando os dois produzem o mesmo sintoma.",
        "O que ele faz é dizer a coisa que mais importa na prática: se o mouse e o computador estão de acordo entre si. Quando um acionamento físico produz exatamente um evento, todas as vezes, esse é o contrato do qual o resto do seu software depende.",
      ],
    },
  ],
  faqs: [
    {
      question: "Como testo os botões do meu mouse online?",
      answer:
        "Leve o cursor para a área de teste e aperte cada botão por vez — esquerdo, direito, meio e os dois botões de polegar, se você tiver. Cada acionamento incrementa o seu próprio contador e acende a zona correspondente no diagrama do mouse. Depois role a rodinha para cima e para baixo e verifique as duas direções separadamente.",
    },
    {
      question: "Quais botões do mouse este testador consegue verificar?",
      answer:
        "Todos os cinco botões padrão: esquerdo, direito, meio e os botões de polegar de avançar e voltar que existem na maioria dos mouses gamers e ergonômicos. Botões além desses cinco são reportados pelo navegador como acionamentos não identificados, então eles ainda entram no total, mesmo que não possam ser atribuídos a uma zona específica.",
    },
    {
      question: "Preciso instalar alguma coisa para rodar um teste de botões do mouse?",
      answer:
        "Não. O teste usa eventos padrão de mouse do navegador e roda inteiramente na página que você está vendo. Não há download, plugin, extensão de navegador nem conta para criar.",
    },
    {
      question: "Como faço para testar se o meu mouse está dando duplo clique?",
      answer:
        "Clique uma vez dentro da área de teste e observe o contador Total. Se um único acionamento físico somar dois cliques, o switch está vibrando, e o painel informa \"Vibração em duplo clique detectada\" junto com o intervalo exato entre os dois acionamentos. Aperte o mesmo botão de dez a vinte vezes em sequência rápida para fazer um switch desgastado se revelar — um switch saudável nunca produz dois acionamentos dentro de 40 milissegundos.",
    },
    {
      question: "O meu mouse dá duplo clique sozinho? O que causa isso?",
      answer:
        "Isso significa que o switch sob o botão está quicando: o contato metálico fecha, abre e fecha de novo em poucos milissegundos, então o mouse reporta dois acionamentos para um único clique físico. As causas mais comuns são micro-switches desgastados, poeira ou detritos dentro do mouse e danos por cliques pesados repetidos. Se os dois acionamentos estão a mais de 200 milissegundos um do outro, isso não é vibração — é a velocidade de duplo clique do seu sistema operacional, que você pode aumentar em Propriedades do Mouse.",
    },
    {
      question: "O que significa um defeito de duplo clique?",
      answer:
        "Significa que o mouse está reportando dois acionamentos separados para um único clique físico. Isso costuma ser a vibração de contato de um micro-switch desgastado, em que o contato metálico quica por alguns milissegundos antes de se estabilizar. O sistema operacional então trata isso como duplo clique acidental, e por isso o defeito é mais irritante em jogos de ritmo rápido.",
    },
    {
      question: "O contador do clique direito fica sempre em zero. Meu mouse quebrou?",
      answer:
        "Não necessariamente. Alguns sistemas operacionais e aplicativos remapeiam o botão direito, e um clique do meio que abre um link em uma nova aba pode fazer o navegador suprimir o menu de contexto dentro da área de teste. Teste o mouse em um segundo computador e confira a configuração dos botões do mouse nas configurações do sistema operacional antes de concluir que o hardware falhou.",
    },
    {
      question: "O teste registra alguma informação pessoal minha?",
      answer:
        "Não. Os cliques são contados na memória da própria página enquanto a aba está aberta e são descartados no momento em que você fecha ou recarrega. Nada é transmitido para um servidor e nenhum perfil é criado.",
    },
    {
      question: "O teste funciona com mouse com fio e sem fio?",
      answer:
        "Sim. O navegador recebe os mesmos eventos de qualquer jeito, então o teste se comporta de forma idêntica com fio, Bluetooth e receptores sem fio de 2,4 GHz. Ainda assim, vale testar mais os mouses sem fio, porque uma bateria fraca pode gerar eventos perdidos e atrasados, idênticos a falhas de hardware.",
    },
    {
      question: "Este teste mede o DPI ou a latência do mouse?",
      answer:
        "Não. O DPI vem do sensor óptico e a latência vem do switch e do ciclo de polling, e nenhum dos dois é exposto ao navegador. O teste de taxa de polling mede com que frequência o navegador recebe atualizações do ponteiro, que é um número relacionado, mas diferente.",
    },
    {
      question: "O meu mouse clica bem, mas o teste mostra cliques perdidos. O que devo conferir?",
      answer:
        "Três coisas, nessa ordem. Primeiro, a aceleração de ponteiro no sistema operacional, que pode introduzir um tempo errático — desative \"Aprimorar a precisão do ponteiro\" no Windows. Segundo, bateria fraca ou conexão sem fio instável. Terceiro, detritos no sensor ou um switch desgastado. Se os cliques só são perdidos enquanto você mexe o mouse ao mesmo tempo, o problema é mais provavelmente o sensor ou a conexão, e não o switch.",
    },
  ],
  related: ["scroll-test", "cps-test", "keyboard-test", "polling-rate-test"],
};
