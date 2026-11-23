import type {
  AboutContent,
  ContactContent,
  HomeContent,
  PrivacyContent,
  ToolsIndexContent,
} from "../../types";

export const home: HomeContent = {
  metaTitle:
    "MouseLab — Testes grátis no navegador para mouse, teclado e ponteiro",
  metaDescription:
    "Teste todos os botões, a rodinha, as teclas e a taxa de clique direto no navegador. Grátis, sem cadastro, sem download e sem que nenhum dado saia do seu dispositivo.",
  badge: "Roda inteiramente no seu navegador",
  heroTitleBefore: "Descubra exatamente o que o seu",
  heroTitleHighlight: "mouse e teclado",
  heroTitleAfter: "realmente fazem.",
  heroSubtitle:
    "Cinco diagnósticos grátis que leem os eventos que o seu computador realmente recebe — cada botão, cada direção da rolagem, cada tecla e a velocidade real do seu ponteiro. Sem download, sem cadastro e sem que nada saia do seu dispositivo.",
  ctaPrimary: "Teste seu mouse agora",
  ctaSecondary: "Ver todas as ferramentas",
  stats: [
    { term: "Sem instalação", detail: "Roda em qualquer navegador moderno" },
    { term: "Sem rastreamento", detail: "As contagens ficam na sua aba" },
    { term: "Instantâneo", detail: "Resultado enquanto você pressiona" },
  ],
  tester: {
    heading: "Teste de botões do mouse",
    description:
      "Pressione cada botão do seu mouse dentro do painel abaixo e acompanhe os contadores. O clique com o botão direito é capturado, então nenhum menu abre, e qualquer botão que não registra aparece na hora.",
    linkLabel: "Guia completo e perguntas frequentes →",
  },
  allTools: {
    heading: "Todas as ferramentas",
    description:
      "Cada uma mede uma parte diferente do seu hardware de entrada, e cada uma explica o que os seus números significam quando você termina.",
    blurbs: {
      "mouse-test":
        "Verifique os cinco botões, a rodinha e o comportamento do duplo clique, e identifique a vibração do switch.",
      "scroll-test":
        "Encontre entalhes perdidos, rolagem invertida e passos desnivelados antes que eles virem um clique errado.",
      "keyboard-test":
        "Descubra teclas mortas, teclas travadas e o número exato de acionamentos simultâneos que o seu teclado aguenta.",
      "cps-test":
        "Meça seus cliques por segundo de 1 a 60 segundos e veja se a sua pontuação está se mantendo.",
      "polling-rate-test":
        "Descubra a taxa de relatório real do seu mouse em Hz usando eventos brutos do ponteiro, e não chutes baseados na taxa de quadros.",
    },
  },
  why: {
    heading: "Por que testar no navegador",
    description:
      "A maioria dos problemas de hardware aparece como eventos que nunca chegam, ou chegam duas vezes. O navegador enxerga exatamente esses eventos, o que faz dele um diagnóstico inusitadamente bom para os defeitos que as pessoas realmente encontram.",
    items: [
      {
        title: "Ele testa a cadeia inteira",
        body: "Um acionamento físico precisa passar pelo switch, pelo controlador, pelo driver e pelo sistema operacional antes de chegar ao seu aplicativo. Este teste falha onde quer que essa cadeia se quebre, e por isso ele consegue dizer que um mouse que funciona em outro computador aponta para software, e não hardware.",
      },
      {
        title: "Ele não exige nada de você",
        body: "Não há instalador, driver, conta nem direitos de administrador. A página funciona até em um notebook corporativo bloqueado, que é exatamente onde os problemas de hardware costumam aparecer e onde você não pode instalar um utilitário.",
      },
      {
        title: "Ele não pode mentir para você",
        body: "Um contador zerado para um botão que você com certeza apertou não é opinião. É a ausência de um evento, e é a coisa mais útil que um diagnóstico pode dizer.",
      },
    ],
  },
  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        question: "Esses testes funcionam sem instalar nada?",
        answer:
          "Sim. Todas as ferramentas aqui usam eventos padrão do navegador — mouse, rolagem, teclado e ponteiro — então rodam na página que você já está vendo. Não há download, extensão de navegador, conta nem software para configurar.",
      },
      {
        question: "Algum dado meu é coletado ou enviado?",
        answer:
          "Não. Cliques, teclas pressionadas e eventos de rolagem são contados dentro da página e descartados no momento em que você fecha ou recarrega a aba. Nada é transmitido para um servidor, nenhum perfil é criado e nenhuma informação do dispositivo é armazenada.",
      },
      {
        question: "O que um teste no navegador consegue detectar de verdade?",
        answer:
          "Tudo o que o navegador recebe: quais botões registram, se a rodinha informa as duas direções, se um clique chega duplicado, com que rapidez o ponteiro reporta a posição e se o teclado perde acionamentos em combinações. Ele não enxerga o interior do seu hardware, portanto não mede a latência do switch, não lê o DPI do sensor e não informa a distância física que cada entalhe da rodinha percorre.",
      },
      {
        question:
          "Meu mouse está pulando páginas. Qual teste devo rodar primeiro?",
        answer:
          "Comece pelo teste da rodinha, rolando devagar em uma única direção. Um encoder sujo ou desgastado produz inversões de direção e passos desnivelados em velocidades baixas. Se a rodinha estiver limpa mas as páginas continuarem pulando, rode em seguida o teste de botões do mouse para descartar um switch com defeito e verifique se a aceleração do ponteiro está ativada no sistema operacional.",
      },
      {
        question: "Funciona em um notebook com trackpad?",
        answer:
          "Sim, com uma ressalva. O trackpad não reporta entalhes físicos, então o teste de rolagem mede a velocidade e a consistência dele em vez de contar entalhes. Os testes de teclado, CPS e taxa de polling funcionam normalmente no trackpad, mas um mouse físico dá uma pontuação de velocidade de clique mais significativa.",
      },
      {
        question: "É realmente grátis?",
        answer:
          "Sim. Não há cadastro, limite de uso nem nada para comprar. O site é sustentado por publicidade, e os anúncios ficam abaixo da ferramenta para nunca atrapalhar o que você veio fazer aqui.",
      },
    ],
  },
};

export const toolsIndex: ToolsIndexContent = {
  metaTitle: "Todas as ferramentas",
  metaDescription:
    "Todos os diagnósticos grátis baseados em navegador do MouseLab: botões do mouse, rodinha, teclado, velocidade de clique e taxa de polling.",
  heading: "Todas as ferramentas",
  intro:
    "Cinco diagnósticos grátis que leem os eventos que o seu computador recebe. Todos rodam no navegador, não exigem instalação e explicam o que os seus números significam quando você termina.",
  blurbs: {
    "mouse-test":
      "Pressione todos os botões e acompanhe os contadores. Identifica botões mortos, acionamentos perdidos e vibração de duplo clique causada por um micro-switch desgastado.",
    "scroll-test":
      "Role sem parar em uma única direção e o teste aponta eventos invertidos, entalhes perdidos e passos desnivelados, além de dizer se você está usando uma rodinha com entalhes ou um trackpad.",
    "keyboard-test":
      "Verifique cada tecla, identifique teclas travadas e rode um teste de rollover que descobre o número exato de acionamentos simultâneos que o seu teclado aguenta.",
    "cps-test":
      "Um benchmark de cliques por segundo de 1 a 60 segundos, com CPS ao vivo, sua melhor pontuação e o detalhamento segundo a segundo.",
    "polling-rate-test":
      "Mede a taxa de relatório real do seu mouse em hertz usando eventos brutos coalescidos do ponteiro, para que você veja a taxa do dispositivo e não a taxa de atualização do monitor.",
  },
};

export const about: AboutContent = {
  metaTitle: "Sobre",
  metaDescription:
    "Como o MouseLab funciona, o que cada teste consegue e não consegue detectar, e como tratamos os seus dados.",
  heading: "Sobre {brand}",
  lead: "Construímos um conjunto de diagnósticos baseados em navegador para quem suspeita que o mouse ou o teclado está se comportando mal, mas não tem como provar isso. Cada ferramenta mostra o que o seu computador realmente recebeu, e cada página explica o que esses resultados significam em linguagem simples.",
  sections: [
    {
      heading: "Como os testes funcionam",
      paragraphs: [
        "Quando você aperta um botão do mouse, o switch dentro dele fecha, o controlador do dispositivo registra a mudança, o sistema operacional traduz essa mudança e o navegador recebe enfim um evento. A mesma cadeia acontece com a rodinha, o teclado e o sensor do ponteiro. Cada teste escuta esse fluxo final de eventos e mostra o que chegou.",
        "Isso significa que um teste falha onde quer que essa cadeia se quebre. Um botão que não reporta nada aponta para o switch, o cabo, a porta ou o driver. Um botão que reporta dois acionamentos para um único acionamento físico aponta para vibração de contato do switch. Uma rodinha que inverte o sentido aponta para o encoder. A medição é objetiva, e é isso que a torna útil quando você precisa decidir se limpa o mouse ou se troca.",
      ],
    },
    {
      heading: "O que estas ferramentas não conseguem fazer",
      paragraphs: [
        "Prefiro ser claro sobre os limites a deixar você atrás de um problema que a ferramenta nunca foi feita para encontrar.",
      ],
      bullets: [
        "Elas não medem a latência de acionamento do switch. O navegador vê um evento que já chegou, e não o instante em que o contato metálico fechou.",
        "Elas não leem o DPI do sensor óptico. Isso exigiria acesso direto ao sensor, que a plataforma web deliberadamente não oferece.",
        "Elas não informam a distância física que cada entalhe da rodinha percorre. Navegadores reportam deltas de rolagem em pixels, linhas ou páginas, e não em milímetros.",
        "Elas não diagnosticam um trackpad como defeituoso quando ele é apenas um dispositivo sem entalhes. O teste de rolagem classifica trackpads como dispositivos de rolagem suave em vez de dar nota a eles.",
        "Elas não confirmam que o hardware está saudável em termos absolutos. Elas confirmam que o seu hardware e o seu computador estão de acordo, que é justamente o que costuma quebrar no dia a dia.",
      ],
    },
    {
      heading: "Como tratamos os seus dados",
      paragraphs: [
        "Contagens, tempos e leituras de teclas ficam na memória da aba aberta e são descartados quando você fecha ou recarrega a página. Não armazenamos o que você clicou, o que você digitou nem qualquer identificador ligado ao seu dispositivo, e não existe sistema de contas para criar.",
        "Rodamos análises de site padrão e que respeitam sua privacidade para saber quais páginas são úteis e quais não são. Os detalhes completos estão na {privacyPolicy}.",
      ],
    },
    {
      heading: "Como o site é financiado",
      paragraphs: [
        "Por publicidade. Todas as ferramentas continuam grátis e ilimitadas, e colocamos a publicidade abaixo da ferramenta em vez de acima, para que aquilo que você veio usar nunca seja empurrado para fora da tela para dar espaço a um anúncio. Se alguma ferramenta precisar de uma versão paga, será para algo realmente adicional, como salvar o histórico ou exportar um relatório, e nunca para a medição básica.",
      ],
    },
  ],
  privacyLinkLabel: "política de privacidade",
};

export const contact: ContactContent = {
  metaTitle: "Contato",
  metaDescription:
    "Fale com a gente sobre um erro em alguma ferramenta, um pedido de novo diagnóstico ou uma correção em um dos nossos guias.",
  heading: "Contato",
  lead: "Encontrou um erro, percebeu que erramos em alguma coisa ou quer um diagnóstico que ainda não construímos? Mande uma mensagem e a gente dá uma olhada.",
  cards: [
    {
      title: "Relatar um erro",
      body: "Diga qual ferramenta você estava usando, o que esperava e o que aconteceu no lugar. Se um contador não se moveu quando você esperava, esse é o detalhe mais útil que você pode nos passar.",
    },
    {
      title: "Pedir uma ferramenta",
      body: "Não há limite para o que você pode pedir. Um diagnóstico que mexe em algo que ninguém mediu antes é exatamente o tipo de coisa que pertence aqui.",
    },
    {
      title: "Corrigir um guia",
      body: "Todas as explicações deste site são escritas para serem tecnicamente precisas. Se um trecho estiver errado, confuso, ou puder induzir alguém a comprar a peça errada, queremos saber.",
    },
  ],
  messageHeading: "Envie-nos uma mensagem",
  messageBody:
    "Escreva para {email}. Lemos tudo e respondemos à maioria das mensagens em poucos dias úteis.",
  messageNote:
    "Por favor, não envie informações pessoais nem detalhes da configuração do seu dispositivo. Nada do que você mandar é necessário para diagnosticar uma ferramenta, e preferiríamos que não mandasse.",
};


export const privacy: PrivacyContent = {
  metaTitle: "Política de privacidade",
  metaDescription:
    "O que o MouseLab coleta, o que ele não coleta e o que acontece com os dados de medição que você gera.",
  heading: "Política de privacidade",
  lastUpdated: "Última atualização: 22 de novembro de 2026",
  sections: [
    {
      heading: "Os dados de medição ficam no seu dispositivo",
      body: "Quando você roda um teste, cliques, teclas pressionadas, eventos de rolagem e amostras do ponteiro são contados na memória da aba do navegador que está aberta. Nada é transmitido para lugar nenhum. Fechar ou recarregar a aba descarta tudo de forma permanente. Não conseguimos recuperar uma leitura que você fez ontem, porque ela nunca foi armazenada.",
    },
    {
      heading: "Sem contas e sem identificadores",
      body: "Não há cadastro, login ou perfil de usuário. Não pedimos endereço de e-mail para usar uma ferramenta e não criamos identificador permanente ligado ao seu dispositivo ou navegador para fins de medição.",
    },
    {
      heading: "Análises do site",
      body: "Usamos ferramentas de análise que respeitam sua privacidade para entender quais páginas e ferramentas são úteis e quais precisam de trabalho. Elas registram visualizações agregadas, informações de origem e dados aproximados de dispositivo e país. Não registram o conteúdo das suas sessões de teste e não são usadas para montar um perfil publicitário seu.",
    },
    {
      heading: "Publicidade",
      body: "Este site é financiado por publicidade. Os parceiros de anúncios podem definir cookies ou usar tecnologias semelhantes para exibir e medir anúncios. Você pode controlar como a publicidade personalizada é usada pelas configurações do navegador e pelas opções oferecidas pelo Google para Google Ads, pela página Privacidade e Termos do Google e pelo aboutads.info para os terceiros participantes.",
    },
    {
      heading: "Conteúdo de terceiros",
      body: "Os scripts de publicidade só são carregados depois que você interage com a página, o que evita que rodem antes de você demonstrar qualquer sinal de engajamento. As fontes são servidas do nosso próprio domínio, então nenhuma requisição a um provedor de fontes é feita quando você abre uma página.",
    },
    {
      heading: "Contato",
      body: "Se você tiver alguma dúvida sobre esta política ou quiser que algo seja removido, escreva para hello@mouselab.io e a gente resolve.",
    },
  ],
  copyright: "© {year} {brand}",
};
