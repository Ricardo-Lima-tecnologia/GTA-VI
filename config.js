// URL HTTPS do checkout. Vazia enquanto a oferta está em revisão.
const CHECKOUT_URL = "";
const COVER_IMAGE = "assets/capa.webp";
const GUIDE_TOPICS = [
  { title: "Primeiras horas sem travar", description: "A câmera passa do ponto ou o minimapa rouba sua atenção? O capítulo propõe testes rápidos para ajustar câmera, mira e interface, além de um treino de 30 minutos para praticar os fundamentos. Também mostra como revisar uma tentativa depois de falhar em um objetivo." },
  { title: "Movimentação, combate e furtividade", description: "Quando vale avançar, recuar ou contornar? Use a matriz do guia para comparar essas decisões dentro do jogo. Os exercícios ajudam a avaliar se uma posição oferece cobertura e se ainda existe uma saída quando o cenário muda." },
  { title: "Veículos, direção e fugas", description: "Quando o carro sai da trajetória, o guia divide a curva em três fases e mostra o que observar em cada uma. Há também critérios para escolher uma rota mais previsível, avaliar o veículo e manter margem para corrigir o percurso durante uma perseguição no jogo." },
  { title: "Economia, inventário e recursos", description: "Vale comprar uma melhoria agora ou guardar recursos para o próximo objetivo? O capítulo organiza os gastos por prioridade e ajuda a escolher o que levar no inventário. Antes de uma missão longa, há uma rotina de 90 segundos para revisar equipamento, recursos e deslocamento." },
  { title: "Sistemas do mundo e rotina do jogador", description: "Com vários pontos chamando atenção no mapa, escolha uma meta principal e uma opcional para a sessão. O capítulo mostra como agrupar atividades por região e ajustar o plano ao tempo disponível. Também ajuda a decidir quando insistir e quando mudar de atividade." },
  { title: "Checklists e atalhos mentais", description: "O apêndice reúne um checklist de 60 segundos para antes de uma missão, cartões de combate, direção e economia, além de um glossário. Duas fichas imprimíveis ajudam a registrar o que funcionou numa missão e a definir a prioridade da próxima sessão." },
];

const PRODUCT_INTRO = [
  "São 25 páginas em PDF, da capa às referências. Os cinco capítulos vão dos primeiros ajustes de controle à rotina de exploração. Você pode seguir essa ordem ou usar o sumário e os marcadores do PDF para ir direto ao assunto.",
  "Se você está errando a entrada das curvas, por exemplo, abra o capítulo de direção. Ele propõe dividir cada curva em aproximação, entrada e saída. Depois, use o cartão de condução do apêndice para revisar os pontos principais antes de voltar ao jogo.",
];

const USE_CASES = [
  { title: "Antes da primeira sessão", description: "O jogo abriu e você quer começar sem passar meia hora no menu. Vá ao capítulo 1, escolha o ajuste que mais afeta seu controle e faça um teste curto. Deixe os outros ajustes para quando tiver uma dificuldade concreta." },
  { title: "Na segunda tentativa de uma missão", description: "Você falhou de novo e quer mudar alguma coisa antes de repetir. Abra a ficha de missão do apêndice, anote a dificuldade principal e escolha uma estratégia alternativa para comparar na próxima tentativa." },
  { title: "Quando sobrou pouco tempo para jogar", description: "Você tem uma sessão curta e o mapa está cheio de opções. Consulte o capítulo 5, escolha um objetivo principal e deixe uma atividade próxima como opção se sobrar tempo." },
];

const VALUE_EVIDENCE = [
  "O diferencial é poder voltar ao procedimento de que você precisa. A matriz de decisão do apêndice liga problemas a uma primeira ação. Se o inventário ficou confuso, comece separando o necessário do opcional. Se a mesma falha se repete, identifique a causa e mude uma decisão na tentativa seguinte.",
  "O guia identifica o que vem de documentação oficial, o que foi relatado em análises e o que é recomendação do autor. Alguns recursos e comandos podem variar por plataforma, atualização ou progresso no jogo.",
];

const HERO_HEADLINE = "";
const CLOSING_HEADLINE = "Teste um ajuste por vez. Saiba o que vale manter.";
const OFFER_DETAILS = ["PDF em português · 25 páginas · edição 1.0"];
const DELIVERY_ANSWER = "";
const EXTRA_FAQ = [
  { question: "Preciso seguir a ordem dos capítulos?", answer: "Você pode consultar o sumário e abrir direto o tema que quer revisar, ou começar pelo capítulo de controles e interface." },
  { question: "O guia conta a história da campanha?", answer: "O foco é a jogabilidade. Os exercícios e checklists foram escritos para consulta sem depender de spoilers da campanha." },
];
