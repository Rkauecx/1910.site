/* =====================================================================
   CONFIGURAÇÕES — é AQUI que você edita o site (tudo em um só lugar)
   ===================================================================== */

/* ---- Acesso (EDITE AQUI) ---- */
const USUARIO = "Joanna";
const SENHA   = "19102025";

/* ---- Imagens (EDITE AQUI) ----
   Salve as fotos na pasta "imagens" como joanna1, joanna2, joanna3...
   O site descobre sozinho quantas fotos existem (até "maxFotos"). */
const IMAGENS = {
  pasta: "imagens/",
  prefixo: "joanna",
  extensoes: ["jpg", "jpeg", "png", "webp"], // aceita qualquer uma destas
  maxFotos: 40,
  colagem: ["joanna6", "joanna2", "joanna3"] // fotos nos cantos do login
};

/* ---- Textos gerais (EDITE AQUI) ---- */
const NOME_RESTAURANTE = "Restaurante da Joanna";
const BOAS_VINDAS = "Hoje o menu é feito com carinho. Seja bem-vinda, amor! 💕";
const MENSAGEM_BLOQUEIO = "Não ta tendo, fali. Pede bacon logo";

/* ---- Pratos (EDITE AQUI) — só o macarrão é "real" ---- */
const PRATOS = [
  { id: "macarrao",   nome: "Macarrão ao molho branco", preco: 25, foto: "macarrao",   real: true, desc: "Massa al dente envolvida em um molho branco cremoso, feito com muito amor." },
  { id: "pizza",      nome: "Pizza de calabresa",       preco: 42, foto: "pizza",      desc: "Massa fininha, mussarela derretida e calabresa crocante." },
  { id: "hamburguer", nome: "Hambúrguer artesanal",     preco: 34, foto: "hamburguer", desc: "Blend suculento, cheddar cremoso e pão brioche macio." },
  { id: "lasanha",    nome: "Lasanha à bolonhesa",      preco: 38, foto: "lasanha",    desc: "Camadas de massa, molho bolonhesa e queijo gratinado." },
  { id: "strogonoff", nome: "Strogonoff de frango",     preco: 32, foto: "strogonoff", desc: "Frango macio em molho cremoso, com batata palha crocante." },
  { id: "sushi",      nome: "Sushi combinado",          preco: 55, foto: "sushi",      desc: "Seleção fresquinha de sushis e sashimis." }
];

/* ---- Zoeira: 3 mensagens por prato, sorteadas (EDITE AQUI) ---- */
const MENSAGENS_ZOEIRA = {
  pizza: ["Hoje a pizzaria está fechada 🍕 O forno só funciona pro macarrão ao molho branco, clica nele!", "A pizza foi entregar em outra casa 🛵 Fica com o macarrão ao molho branco!", "Sem pizza hoje 🍕 Mas o macarrão ao molho branco está pedindo você!"],
  hamburguer: ["O hambúrguer fugiu da cozinha 🍔 Mas o macarrão ao molho branco está te esperando!", "Acabou a carne... e a paciência 🍔 Clica no macarrão ao molho branco!", "O hambúrguer entrou em greve ✊ Só o macarrão ao molho branco trabalha hoje!"],
  lasanha: ["A lasanha está em reunião 🧑‍🍳 Clica no macarrão ao molho branco, amor.", "A lasanha está no forno desde ontem 🔥 Escolhe o macarrão ao molho branco!", "Lasanha só no próximo século 😅 Hoje é macarrão ao molho branco!"],
  strogonoff: ["O strogonoff saiu de férias 🏖️ Ele só volta com o macarrão ao molho branco!", "O frango atravessou a rua 🐔 e não voltou. Clica no macarrão ao molho branco!", "Strogonoff esgotado 😢 Mas o macarrão ao molho branco ama você!"],
  sushi: ["O sushi ficou preso no trânsito 🍣 Clica no macarrão ao molho branco!", "O peixe nadou pra longe 🐟 Fica com o macarrão ao molho branco!", "Sushi só em dia de lua cheia 🌕 Hoje é macarrão ao molho branco!"]
};

/* ---- Adicionais: só o que tem livre:true pode ser marcado (EDITE AQUI) ---- */
const ADICIONAIS = [
  { nome: "Bacon",           emoji: "🥓", preco: 5, livre: true },
  { nome: "Queijo extra",    emoji: "🧀", preco: 4 },
  { nome: "Frango desfiado", emoji: "🍗", preco: 6 },
  { nome: "Tomate seco",     emoji: "🍅", preco: 4 },
  { nome: "Cebola crispy",   emoji: "🧅", preco: 3 }
];
const MSG_PEDIDO_TITULO = "Pedido recebido!";
const MSG_PEDIDO_TEXTO  = "O chef já está cozinhando com muito amor. Prepare o coração (e o garfo)!";

/* ---- Página secreta: datas e textos (EDITE AQUI) ---- */
const DATA_NAMORO = "2023-01-01";           // AAAA-MM-DD
const PROXIMA_DATA = "2027-01-01";          // próxima comemoração; "" para ocultar
const NOME_COMEMORACAO = "nosso próximo aniversário de namoro";
const MENSAGEM_ENTRADA = "Preparei uma surpresa para você";
const MUSICA = "audio/nossa-musica.mp3";    // coloque o arquivo na pasta audio
const NOME_MUSICA = "Nossa música";
const ASSINATURA = "Seu bebê, Robson";
const TITULO_FINAL = "E esse é só o primeiro capítulo...";
const DECLARACAO = "Foi o melhor ano da minha vida e eu quero todos os próximos ao seu lado.";
const MENSAGEM_FINAL = "Obrigado por cada dia ao seu lado. Te amo! ❤️";
const MENSAGEM_ENVELOPE = "Obrigado por tudo, por me dar uma nova vontade de viver💌";
const MENSAGEM_SURPRESA = "Se eu pudesse escolher de novo, escolheria você em todas as vidas. 💛";

/* Linha do tempo: foto = nome do arquivo sem extensão (EDITE AQUI) */
const MARCOS = [
  { data: "27/12/2014", titulo: "Minha mini namorada", foto: "joanna1", texto: "Essa surpresa já estava escrita desde você " },
  { data: "28/11/2025", titulo: "Melhores encontro",     foto: "joanna2", texto: "Eu amo ir tomar açai com com você, vc e ele são meus favoritos" },
  { data: "26/09/2024", titulo: "Minha foto Favorita",       foto: "joanna3", texto: "Hoje em dia tem mais, porém eu me apaixonei por essa foto de uma maneira indescritivel" },
  { data: "19/10/2025", titulo: "Pedido de namoro",      foto: "joanna4", texto: "O dia mais confuso com a pergunta mais fácil e o sim mais feliz da minha vida. Te amo" },
  { data: "20/11/2025", titulo: "Viagem especial",       foto: "joanna5", texto: "Qualquer lugar vira o melhor lugar do mundo com você. mas esse dia foi tão incrível quanto qualquer um" },
  { data: "26/09/2026", titulo: "Hoje",                  foto: "joanna6", texto: "E cada dia ao seu lado ainda parece o primeiro, hoje estamos bem mais maduros e mudados e que nosso namoro continue assim" }
];

/* Galeria: usa automaticamente TODAS as fotos joannaN que não estão na linha do tempo.
   Para personalizar uma foto, use o número dela em GALERIA_INFO. */
const LEGENDAS_PADRAO = ["Um dia perfeito", "Rindo à toa", "Nosso lugar", "1º Dia de namoro oficial", "Só nós dois", "Momentos dificéis"];
const GALERIA_INFO = {
  // 7: { legenda: "Nosso primeiro passeio", data: "12/03/2023" },
};

const MOTIVOS = ["Seu sorriso ilumina o meu dia", "Você me faz ser melhor", "te ver feliz alegra até os dias mais triste", "Seu jeito de se preocupar comigo", "Sua compania é tudo quepreciso", "jogar em dupla e perder", "Seu abraço é meu lugar seguro", "Sua paciência comigo", "Seus beijinhos", "Os ENORMES detalhes que você lembra (pepeto, xi)", "Seu jeitinho de me chamar", "Simplesmente por ser você"];
const CARTA = ["Oi mor,", "Um ano se passou e eu continuo sorrindo ao pensar em você. Obrigado por cada conversa, cada risada e cada abraço.", "Esse ano, assim como os outros não oficial foi maravilhoso, espero que eu possa passar mts dias 19/10 com você. Para sempre minha princesa, te amo de verdade"];
const PLANOS = [{ emoji: "✈️", texto: "Fazer uma viagem juntos para um lugar novo" }, { emoji: "🏡", texto: "Montar o nosso cantinho" }, { emoji: "🍝", texto: "Cozinhar receitas novas juntos" }, { emoji: "?", texto: "Por favor não fale que não sabe só me ajuda" }, { emoji: "?", texto: "Mais uma para você me dizer" }, { emoji: "🌅", texto: "Ver o nascer do sol juntos, na praia esse seria o melhor" }];
const ESTRELAS = ["Você é a minha constelação favorita ✨", "Com você, Nunca mais fiquei de piupiu mole", "Meu coração só bate por você", "Obrigado por existir ⭐", "Cada dia é melhor com você 🌙", "Eu sempre te escolheria de novo 💖", "você e seu pepeto são os meus lugares favoritos 🌠", "Te amo além das estrelas ✨"];
