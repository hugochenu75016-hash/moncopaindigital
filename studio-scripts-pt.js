/* Biblioteca de scripts — Studio Social (Mon Copain Digital)
   Scripts de vídeo (Reels, TikTok, Shorts, voz, avatares) e legendas de posts prontas a preencher.
   Os [colchetes] são para substituir, ou para o Marshall preencher (“Adaptar com o Marshall”). */
(function(){
  var L=[];
  /* Rótulos das secções de um script de vídeo (a traduzir) */
  var LB={hook:'🎬 GANCHO (0–3 s)',screen:'Na tela',body:'📍 DESENVOLVIMENTO',cta:'👉 CHAMADA PARA AÇÃO',q1:'“',q2:'”'};
  function V(o,s,n,d,hook,ecran,steps,cta){
    L.push({t:'video',o:o,s:s,n:n,d:d,x:LB.hook+'\n'+LB.q1+hook+LB.q2+'\n['+LB.screen+': '+ecran+']\n\n'+LB.body+'\n'+steps.join('\n')+'\n\n'+LB.cta+'\n'+LB.q1+cta+LB.q2});
  }
  function P(o,s,n,txt){ L.push({t:'post',o:o,s:s,n:n,x:txt}); }
  /* Prompts de criação: I = imagem, W = vídeo (Wan 2.2 / Veo). Escritos na língua da app; o Marshall reescreve-os como prompt profissional antes da geração. */
  function I(o,s,n,txt){ L.push({t:'img',o:o,s:s,n:n,x:txt}); }
  function W(o,s,n,d,txt){ L.push({t:'vid',o:o,s:s,n:n,d:d,x:txt}); }

  /* =================================================================== SCRIPTS DE VÍDEO — TODAS AS ÁREAS */
  V('vente','tous','Problema → solução','30 s',
    'Também sofre com [problema frequente dos seus clientes]?','o problema em 5 palavras, texto grande',
    ['(3–10 s) “Ouvimos isso todos os dias: [frase típica de um cliente].”','(10–22 s) “Na [nome], temos [a sua solução]: [benefício 1], [benefício 2].” [Cena: você em ação]','(22–27 s) “Resultado: [resultado concreto].” [Cena: o resultado]'],
    'Mande “[palavra-chave]” por mensagem e respondemos hoje mesmo.');
  V('vente','tous','Antes / Depois','20 s',
    'Repare na diferença.','ANTES (imagem fixa, 1 s)',
    ['(2–8 s) [Cena do antes] “Era assim: [defeito visível].”','(8–15 s) [Transição rápida] “E assim ficou depois de [tempo / intervenção].” [Cena do depois]','(15–18 s) “O que mudou tudo: [o detalhe-chave].”'],
    'Quer o mesmo resultado? Link na bio.');
  V('vente','tous','3 motivos para escolher…','30 s',
    '3 motivos pelos quais os nossos clientes escolhem [produto/serviço].','“3 MOTIVOS” + número que vai mudando',
    ['(3–10 s) “1: [motivo 1, concreto].” [Cena ilustrativa]','(10–17 s) “2: [motivo 2].”','(17–25 s) “E o 3, o mais importante: [motivo 3].”'],
    'Qual pesa mais na sua escolha? Conte nos comentários.');
  V('vente','tous','Oferta por tempo limitado','15 s',
    'Só até [data]!','[OFERTA] bem grande, contagem regressiva',
    ['(3–8 s) “[Oferta exata] em [produto/serviço].” [Cena do produto]','(8–12 s) “O motivo? [motivo sincero: aniversário, fim de coleção…].”'],
    'Reserve até [data]: link na bio.');
  V('vente','tous','Objeção derrubada','30 s',
    '“É caro demais.” Ouvimos isso muitas vezes. Esta é a verdade.','a objeção entre aspas',
    ['(3–12 s) “O que está realmente incluído no preço: [o que vem incluído, durabilidade, tempo poupado].”','(12–22 s) “Comparado com [alternativa], dá [cálculo simples ou comparação].”','(22–27 s) “E ainda há [garantia / período de teste / pagamento em várias vezes].”'],
    'Outra dúvida? Deixe nos comentários, respondemos a todas.');
  V('vente','tous','Demo em 3 gestos','20 s',
    'É assim que funciona, em 3 gestos.','mãos + produto, close-up',
    ['(2–7 s) “Um: [gesto 1].”','(7–12 s) “Dois: [gesto 2].”','(12–17 s) “Três: [gesto 3]. E pronto.” [Cena do resultado]'],
    'Disponível na [nome] / em [site].');
  V('engagement','tous','O que ninguém conta sobre…','30 s',
    'Ninguém conta isso sobre [tema].','texto que “se revela”',
    ['(3–12 s) “[Curiosidade surpreendente, mas verdadeira].”','(12–22 s) “Na prática, isso significa: [consequência para o cliente].”','(22–27 s) “A nossa dica: [dica simples].”'],
    'Salve o vídeo para não esquecer.');
  V('engagement','tous','Enquete: qual é a sua?','15 s',
    'Team [opção A] ou team [opção B]?','A vs B, tela dividida ao meio',
    ['(3–7 s) [Cena opção A] “[A]: [qualidade de A].”','(7–11 s) [Cena opção B] “[B]: [qualidade de B].”'],
    'Vote nos comentários: A ou B?');
  V('engagement','tous','POV do cliente','15 s',
    'POV: acabou de [situação do cliente].','“POV: …” no topo da tela',
    ['(3–10 s) [Cena vivida do ponto de vista do cliente, sem falas ou com música em alta]','(10–13 s) [Reação / sorriso / resultado]'],
    'Marque alguém que precisa disso.');
  V('engagement','tous','Os erros a evitar','30 s',
    'Os 3 erros que vejo sempre em [área].','X vermelho ❌ em cada erro',
    ['(3–11 s) “Erro n.º 1: [erro]. Em vez disso: [boa prática].”','(11–19 s) “Erro n.º 2: [erro].”','(19–26 s) “Erro n.º 3, o pior: [erro].”'],
    'Cometia algum? Confesse nos comentários 😄');
  V('engagement','tous','Mito ou verdade?','25 s',
    '“[Crença comum].” Mito ou verdade?','MITO / VERDADE intermitente',
    ['(3–10 s) “Muita gente acha que [crença comum].”','(10–20 s) “Na verdade: [verdade + prova ou exemplo].”'],
    'Siga a página para o próximo mito.');
  V('pedagogie','tous','Tutorial rápido em 3 passos','30 s',
    'Como [resultado desejado] em 3 passos.','“EM 3 PASSOS” + números',
    ['(3–11 s) “Passo 1: [ação].” [Close-up]','(11–19 s) “Passo 2: [ação]. Dica: [detalhe de profissional].”','(19–26 s) “Passo 3: [ação]. E pronto.” [Cena do resultado]'],
    'Salve para refazer depois.');
  V('pedagogie','tous','A dica de profissional','20 s',
    'A dica que dou a todos os meus clientes.','“DICA DE PRO”',
    ['(3–12 s) “[Dica precisa e para aplicar já].”','(12–17 s) “A razão? [explicação simples numa frase].”'],
    'Mande para alguém que precisa disso.');
  V('pedagogie','tous','Pergunta de cliente','30 s',
    'Pergunta de um cliente: “[pergunta real de um cliente]?”','a pergunta num balão de mensagem',
    ['(3–15 s) “Resposta curta: [resposta].”','(15–25 s) “Resposta completa: [nuances, casos específicos].”'],
    'Deixe a sua pergunta nos comentários, respondo em vídeo.');
  V('pedagogie','tous','O glossário em 30 s','30 s',
    '[Termo técnico]: o que significa, afinal?','o termo + definição escrita ao vivo',
    ['(3–13 s) “Em bom português: [definição em palavras simples].”','(13–24 s) “Exemplo: [exemplo do dia a dia].”','(24–27 s) “E o que muda na prática: [impacto].”'],
    'Que palavra quer que eu explique a seguir?');
  V('coulisses','tous','Um dia aqui','45 s',
    '[Hora da manhã]. Começa mais um dia na [nome].','hora sobreposta + cena de abertura',
    ['(3–15 s) [Abertura, preparação, café, equipe]','(15–30 s) [O coração do trabalho: 3 cenas rápidas de 2 s] “O que nunca se vê: [detalhe].”','(30–40 s) [Fecho / momento de orgulho] “E este é o nosso momento preferido.”'],
    'Quer ver mais alguma coisa dos bastidores? Diga qual.');
  V('coulisses','tous','Apresentação da equipe','30 s',
    'São [número] e sem eles a [nome] não existiria.','nomes que vão aparecendo',
    ['(3–25 s) [Uma cena de 3–4 s por pessoa] “[Nome], [função], [curiosidade ou talento escondido].”'],
    'Diga olá à equipe nos comentários 👋');
  V('coulisses','tous','A história por trás de…','45 s',
    'Em [ano], larguei tudo por [projeto].','foto da época ou cena de frente para a câmera',
    ['(3–18 s) “Antes, eu era [situação]. Um dia, [o clique].”','(18–33 s) “O início: [dificuldade] — mas [o que fez continuar].”','(33–40 s) “Hoje, [aquilo de que se orgulha].”'],
    'Obrigado por estar aqui. Siga a página para acompanhar o resto da história.');
  V('coulisses','tous','Produção acelerada','15 s',
    'Do zero a [produto final] em 15 segundos.','time-lapse, texto “15 s”',
    ['(2–12 s) [Produção / preparação acelerada, música ritmada]','(12–14 s) [Cena final, produto em destaque]'],
    'Diria que levava [tempo real]?');
  V('temoignage','tous','O cliente conta','30 s',
    '“[Frase forte do cliente].”','citação + nome do cliente',
    ['(3–12 s) [Cliente de frente para a câmera] “Antes, [problema].”','(12–22 s) “Com a [nome], [o que mudou].”','(22–27 s) “Recomendo porque [motivo].”'],
    'Experimente também: link na bio.');
  V('temoignage','tous','A avaliação lida em voz alta','20 s',
    'Recebemos esta avaliação… e não esperávamos.','captura da avaliação (5 estrelas)',
    ['(3–14 s) [Leitura de um trecho da avaliação, print real na tela]','(14–18 s) “Obrigado, [nome], ficamos mesmo emocionados.”'],
    'Já nos visitou? Deixe a sua avaliação 🙏');
  V('temoignage','tous','Resultado em números','20 s',
    '[Número real] em [tempo]. Veja como.','o número em tamanho gigante',
    ['(3–10 s) “Quando [cliente] chegou, [ponto de partida].”','(10–17 s) “Fizemos [o que foi feito]. Resultado: [número].”'],
    'Quer o mesmo diagnóstico? Escreva para nós.');
  V('lancement','tous','O teaser','10 s',
    'Vem aí uma novidade no dia [data].','imagem desfocada / escondida, data em grande',
    ['(2–8 s) [Detalhes em close extremo, sem mostrar tudo] “Não dizemos mais nada…”'],
    'Ative as notificações para não perder.');
  V('lancement','tous','A revelação','30 s',
    'Chegou: [novidade]!','revelação com efeito + nome',
    ['(3–13 s) “[Tempo] de trabalho para chegar aqui: [o que é].”','(13–23 s) “O que o torna único: [diferença 1], [diferença 2].”','(23–27 s) “Disponível a partir de [data], por [preço, se confirmado].”'],
    'Os [número] primeiros ganham [vantagem]: link na bio.');
  V('lancement','tous','Contagem regressiva: faltam 3 dias','10 s',
    'Faltam só 3 dias.','“-3 DIAS” enorme',
    ['(2–8 s) [Uma pista visual por dia] “Pista do dia: [pista].”'],
    'Adivinhe nos comentários!');
  V('evenement','tous','Convite para o evento','20 s',
    'Dia [data], contamos com a sua presença!','data + local em grande',
    ['(3–10 s) “No programa: [destaque 1], [destaque 2].”','(10–16 s) “É [grátis / com reserva], em [local], a partir das [hora].”'],
    'Comente “eu vou” e guardamos o seu lugar.');
  V('evenement','tous','O evento em retrospectiva','30 s',
    'Obrigado! Foram [número] pessoas neste [dia].','plano geral da multidão',
    ['(3–25 s) [Montagem ritmada dos melhores momentos, 1,5 s por cena, sorrisos, detalhes]','(25–28 s) “Obrigado a [parceiros / equipe].”'],
    'Esteve lá? Marque-se no vídeo!');
  V('fidelite','tous','Obrigado à comunidade','20 s',
    '[Número] seguidores. Nem acreditamos.','o número em contagem crescente',
    ['(3–15 s) “Quando começamos, [lembrança]. Hoje, graças a vocês, [orgulho].”'],
    'Para comemorar: [pequeno presente / sorteio]. Detalhes na legenda.');
  V('fidelite','tous','Sorteio','20 s',
    'Vamos sortear [prêmio]!','🎁 SORTEIO',
    ['(3–15 s) “Para participar: 1. siga a página, 2. dê like, 3. marque [número] amigos. Sorteio dia [data].”'],
    'Boa sorte a todos! Regulamento na legenda.');
  V('recrutement','tous','Vaga aberta','30 s',
    'Procuramos [cargo]. Pode ser você?','VAGA ABERTA + cargo',
    ['(3–12 s) “Aqui, [ambiente real, 2 cenas da equipe].”','(12–22 s) “O que procuramos: [qualidade 1], [qualidade 2]. Não precisa de [diploma / experiência] se [condição].”','(22–27 s) “[Contrato, horário, local].”'],
    'Mande uma mensagem ou envie para a pessoa certa.');

  /* =================================================================== LEGENDAS — TODAS AS ÁREAS */
  P('vente','tous','Benefício primeiro',
'[O resultado que o seu cliente quer], sem [o inconveniente que ele teme]. ✨\n\nÉ exatamente isso que [produto/serviço] oferece:\n✔️ [benefício 1]\n✔️ [benefício 2]\n✔️ [benefício 3]\n\n📍 [local / entrega / online]\n👉 [Reserve / Encomende] pelo link na bio.');
  P('vente','tous','Problema – Agitação – Solução',
'[Problema]? Não está sozinho(a).\n\nE quanto mais se espera, mais [consequência concreta]. 😬\n\nA boa notícia: [solução numa frase].\nNa [nome], [como fazemos, na prática].\n\n💬 Mande “[palavra-chave]” por mensagem para conversarmos.');
  P('vente','tous','Oferta por tempo limitado',
'⏳ Só até [data]:\n[oferta exata] em [produto/serviço].\n\nO motivo? [motivo sincero].\n\nDepois, voltamos ao preço normal. Sem prorrogação. 🙃\n\n👉 Link na bio / [telefone]');
  P('vente','tous','O produto estrela',
'Se só pudesse experimentar uma coisa aqui, seria esta. 👇\n\n[Produto]: [o que o torna único, 1 frase sensorial ou concreta].\n\nÉ o favorito dos clientes por [motivo n.º 1].\n\nJá provou? Dê uma nota de 1 a 10 nos comentários!');
  P('vente','tous','Comparação honesta',
'[Opção A] ou [a nossa solução]? Vamos ser honestos. 🤝\n\n[Opção A]: ✅ [vantagem] / ❌ [limitação]\n[A nossa solução]: ✅ [vantagem] / ✅ [vantagem] / ❌ [limitação assumida]\n\nPara quem é: [perfil ideal].\nPara quem não é: [perfil].\n\nAlguma dúvida? Respondemos nos comentários.');
  P('engagement','tous','Pergunta aberta',
'Pergunta rápida do dia 👇\n\n[Pergunta simples que tenha a ver com o seu cliente]?\n\nA nossa resposta: [resposta com um toque pessoal].\n\nAgora é a sua vez! Lemos todos os comentários.');
  P('engagement','tous','Isso ou aquilo',
'Qual é a sua?\n\n🅰️ [opção A]\nou\n🅱️ [opção B]?\n\nResponda só A ou B nos comentários. Contamos os votos na sexta! 📊');
  P('engagement','tous','Complete a frase',
'Complete a frase 👇\n\n“Um [dia / momento] perfeito é quando…”\n\nComeçamos nós: [a sua resposta]. 😄');
  P('engagement','tous','Confesse…',
'Confesse… também [pequeno hábito ou erro comum ligado à sua área]? 🙈\n\nAqui ninguém julga. Mas fica uma dica simples: [dica].\n\nMarque a pessoa que faz isso SEMPRE 😂');
  P('pedagogie','tous','Carrossel: guia passo a passo',
'📌 Salve este post, vai precisar dele.\n\nComo [resultado] em [número] passos:\n\n1️⃣ [passo 1]\n2️⃣ [passo 2]\n3️⃣ [passo 3]\n4️⃣ [passo 4]\n\n💡 O erro a evitar: [erro].\n\nAlguma dúvida? Comente 👇');
  P('pedagogie','tous','Crença comum',
'❌ “[Crença comum]”\n✅ Na verdade: [verdade].\n\nDe onde vem esta ideia? [Origem da crença].\nO que muda na prática: [consequência prática].\n\nAcreditavam nisso? Sejam sinceros 😉');
  P('pedagogie','tous','Checklist',
'✅ A checklist antes de [ação importante para o seu cliente]:\n\n☐ [ponto 1]\n☐ [ponto 2]\n☐ [ponto 3]\n☐ [ponto 4]\n☐ [ponto 5]\n\nTudo marcado? Pode ficar tranquilo(a). 💪\nSalve para rever no grande dia.');
  P('pedagogie','tous','Número-chave',
'[Número verificado] 😮\n\nÉ [o que este número representa] (fonte: [fonte]).\n\nO que isso significa na prática: [interpretação simples].\nA nossa dica: [ação].\n\nSabia disso?');
  P('coulisses','tous','Bastidores do dia',
'O que não se vê antes de [momento em que o cliente chega]. 👀\n\n[Hora]: [tarefa]\n[Hora]: [tarefa]\n[Hora]: [tarefa]\n\nNão é glamoroso, mas é por isso que [resultado que o cliente valoriza]. ❤️');
  P('coulisses','tous','Retrato da equipe',
'Já a/o conhece de vista… mas conhece mesmo [nome]? 👋\n\n🔧 Função: [função]\n⏳ Na equipe há: [tempo]\n💛 O que mais gosta: [curiosidade]\n🤫 Talento escondido: [talento]\n\nUma palavrinha para [nome]? 👇');
  P('coulisses','tous','A nossa história',
'Tudo começou [lugar / momento improvável]. 🌱\n\n[2–3 frases: o clique, o início difícil, o que fez continuar.]\n\n[Número] anos depois, [aquilo de que se orgulha].\n\nObrigado por fazer parte desta história. 🙏');
  P('coulisses','tous','Os nossos valores na prática',
'Não fazemos [prática comum do setor]. Nunca. 🙅\n\nA razão? [convicção].\n\nEm vez disso, [a sua forma de fazer], mesmo que isso nos custe [contrapartida].\n\nÉ uma escolha. E isso também conta na sua escolha?');
  P('temoignage','tous','Avaliação de cliente',
'⭐⭐⭐⭐⭐\n“[Citação real do cliente]”\n— [Nome], [cidade / contexto]\n\nObrigado, [nome]! Mensagens assim são o nosso combustível. 🔋\n\nQuer [ação] também? Link na bio.');
  P('temoignage','tous','Caso de cliente',
'📂 Caso de cliente: [nome / empresa]\n\n🎯 A necessidade: [necessidade]\n🛠️ O que fizemos: [solução]\n📈 O resultado: [resultado concreto]\n\n“[Citação curta]”\n\nTem uma necessidade parecida? Escreva para nós.');
  P('lancement','tous','Novidade',
'🆕 É NOVIDADE!\n\n[Nome da novidade]: [o que é numa frase].\n\nNasceu para: [necessidade do cliente].\nO que ganha com isso: [benefício].\n\n📅 A partir de [data] · [preço, se conhecido]\n👉 [Onde comprar / reservar]');
  P('lancement','tous','Teaser',
'Há novidades a caminho… 👀\n\nPista: [pista misteriosa].\n\nEncontro marcado dia [data] às [hora].\nPalpites nos comentários 👇');
  P('evenement','tous','Anúncio de evento',
'📅 [Data] · 📍 [Local] · 🕒 [Hora]\n\n[Nome do evento]: [promessa numa frase].\n\nNo programa:\n• [destaque 1]\n• [destaque 2]\n• [destaque 3]\n\n[Grátis / Lugares limitados] → [como se inscrever]');
  P('evenement','tous','Encerramento / horários',
'📢 Informação útil\n\n[Nome] vai estar [fechado / com horário especial] de [data] a [data].\n\n🕒 [Novo horário]\n\nAté dia [data]! Obrigado pela compreensão. 🙏');
  P('evenement','tous','Datas comemorativas',
'Chegou [data / estação]! [Emoji]\n\nPara a ocasião: [oferta, produto ou atividade especial].\n\nDisponível de [data] a [data], enquanto houver.\n\nE vocês, como comemoram? 👇');
  P('fidelite','tous','Obrigado, clientes',
'[Número] [clientes / pedidos / anos]. 🥹\n\nSó queríamos dizer OBRIGADO.\n\nA quem volta, a quem recomenda, a quem nos deixa mensagens carinhosas.\n\nPara comemorar: [presente / desconto / surpresa].');
  P('fidelite','tous','Sorteio',
'🎁 SORTEIO 🎁\n\nVamos sortear [prêmio exato]!\n\nPara participar:\n1️⃣ Siga @[conta]\n2️⃣ Dê like neste post\n3️⃣ Marque [número] amigos(as) nos comentários\n\nSorteio dia [data]. Boa sorte!\n\nSorteio não patrocinado nem gerido pelo [rede social]. Vencedor avisado por mensagem privada.');
  P('fidelite','tous','Programa de fidelidade',
'Vem cá muitas vezes? Já reparamos. 😉\n\nNovidade: [como funciona o cartão / programa].\n➡️ [recompensa concreta] a cada [número] [compras / visitas].\n\nPeça o seu cartão na próxima visita!');
  P('recrutement','tous','Vaga de emprego',
'🚀 VAGA ABERTA: [cargo]\n\n📍 [Local] · [Tipo de contrato] · [Horário]\n\nO que vai fazer: [tarefas em 2 linhas]\nO que procuramos: [qualidades, não necessariamente diplomas]\nO que oferecemos: [ambiente, benefícios, progressão]\n\n📩 Mensagem privada ou [email]. Passe adiante, pode ajudar alguém!');

  /* =================================================================== RESTAURANTE / CAFÉ / PADARIA */
  V('vente','resto','O prato da casa','20 s',
    'O prato mais pedido da casa.','close do prato fumegante / a escorrer molho',
    ['(3–10 s) [Empratamento em close] “[Nome do prato]: [ingredientes principais, técnica].”','(10–16 s) [A primeira garfada / reação] “Feito aqui, todos os [dias / manhãs].”'],
    'Reserve a sua mesa: link na bio.');
  V('coulisses','resto','6h da manhã na cozinha','30 s',
    '6h. O restaurante dorme, nós não.','hora sobreposta',
    ['(3–12 s) [Chegada dos produtos, caixotes] “Os [produtos] chegam de [produtor], a [distância].”','(12–24 s) [Preparações: cortes, molho, massa] “Tudo é preparado aqui, esta manhã.”','(24–27 s) [Salão pronto, luz]'],
    'Guardamos uma mesa para o almoço?');
  V('engagement','resto','Adivinhe o prato','15 s',
    'Adivinhe o prato antes do fim.','closes muito apertados',
    ['(2–11 s) [5 ingredientes em close extremo, 2 s cada]','(11–13 s) [Revelação do prato]'],
    'Acertou? Resposta sincera nos comentários 😄');
  V('fidelite','resto','Menu da semana','20 s',
    'Saiu o menu da semana!','MENU + dias',
    ['(3–16 s) [Uma cena por prato, 3 s cada] “Segunda, [prato]; terça, [prato]…”'],
    'Qual vai ser? Reserve pelo [telefone].');
  P('vente','resto','Prato do dia',
'🍽️ Hoje no quadro:\n\n[Entrada]\n[Prato principal]\n[Sobremesa]\n\n[Menu]: [preço]\n\nFeito aqui com [produto local] de [produtor]. 🌿\n📞 [Telefone] para reservar · 📍 [endereço]');
  P('coulisses','resto','O produtor',
'Este é o [nome], que nos fornece [produto] há [tempo]. 👨‍🌾\n\n[A propriedade / a oficina dele] fica a [distância] daqui. [Detalhe que mostra a qualidade.]\n\nÉ graças a ele que o nosso [prato] tem este sabor.\n\nAdoramos trabalhar com produtores locais. E você, também valoriza o que é local?');
  P('engagement','resto','Doce ou salgado',
'De manhã, qual é a sua: 🥐 ou 🍳?\n\nNós já escolhemos: [a sua preferência + especialidade].\n\nResponda com um emoji 👇');
  P('evenement','resto','Noite especial',
'🎉 [Dia] à noite: [nome da noite]!\n\n[Menu / animação / música] a partir das [hora].\n[Preço] por pessoa, [bebida incluída ou não].\n\nApenas [número] lugares: reserva obrigatória pelo [telefone].');

  /* =================================================================== BELEZA / CABELEIREIRO / ESTÉTICA */
  V('vente','beaute','Transformação em 15 s','15 s',
    'Ela chegou assim…','ANTES',
    ['(2–10 s) [Etapas aceleradas: corte, cor, finalização]','(10–13 s) [Revelação: a cliente dá meia-volta / olha para o espelho] “…e saiu assim.”'],
    'Reserve a sua transformação: link na bio.');
  V('pedagogie','beaute','O erro que estraga o cabelo','25 s',
    'Pare de fazer isto depois de lavar o cabelo.','❌ + gesto a evitar',
    ['(3–12 s) “Esfregar com a toalha [estrago].”','(12–20 s) “Em vez disso: [gesto certo], e [produto / truque].”'],
    'Salve e mande para a amiga que esfrega 😄');
  V('engagement','beaute','Que cor para este outono?','15 s',
    'Acobreado, caramelo ou castanho gelado?','3 cores, números 1-2-3',
    ['(3–12 s) [3 resultados reais, 3 s cada, numerados]'],
    'Vote 1, 2 ou 3 nos comentários!');
  V('coulisses','beaute','O tratamento visto por dentro','30 s',
    'O que acontece durante o seu [nome do tratamento].','ambiente suave, luz baixa',
    ['(3–24 s) [Etapas do tratamento, mãos, produtos, relaxamento] “Primeiro [etapa], depois [etapa] e, por fim, [etapa].”','(24–27 s) “[Duração] só para você.”'],
    'Para oferecer ou para se mimar: reservas na bio.');
  P('vente','beaute','Horários disponíveis',
'✂️ Ainda há horários livres esta semana!\n\n[Dia]: [horas]\n[Dia]: [horas]\n\nServiço do momento: [serviço] por [preço].\n\n📲 Reserve online (link na bio) ou pelo [telefone].');
  P('pedagogie','beaute','Rotina em 3 gestos',
'A sua rotina noturna de [cabelo / pele] em 3 gestos 🌙\n\n1. [Gesto 1 + tipo de produto]\n2. [Gesto 2]\n3. [Gesto 3]\n\nTempo total: [minutos] min. Resultado: [benefício].\n\nSalve para hoje à noite ✨');
  P('temoignage','beaute','Reação da cliente',
'A reação dela quando se viu no espelho… 🥹\n\n“[Citação]”\n\n[Serviço realizado] por [nome do cabeleireiro / esteticista].\n\nObrigado pela confiança, [nome da cliente] 💛');
  P('fidelite','beaute','Cartão-presente',
'🎁 Não sabe o que oferecer?\n\nOs nossos cartões-presente vão de [valor] a [valor], válidos por [prazo] em todos os serviços.\n\nDisponíveis no salão ou por mensagem. O presente que agrada sempre. 💝');

  /* =================================================================== ARTESÃOS / CONSTRUÇÃO / RENOVAÇÃO */
  V('vente','artisan','A obra: antes / depois','30 s',
    'Este [espaço] estava igual desde [ano].','ANTES + ano',
    ['(3–12 s) [Estado inicial, detalhes danificados] “O problema: [problema].”','(12–24 s) [Obra acelerada] “[Tempo] de obra: [intervenções].”','(24–27 s) [Plano geral do resultado] “E agora.”'],
    'Orçamento grátis: mensagem ou link na bio.');
  V('pedagogie','artisan','Os sinais de que é hora de agir','30 s',
    'Se vir isto em casa, chame um profissional.','zoom no defeito',
    ['(3–12 s) “Sinal n.º 1: [sinal]. Significa [causa].”','(12–20 s) “Sinal n.º 2: [sinal].”','(20–26 s) “Quanto mais se espera, maior [consequência e custo].”'],
    'Na dúvida? Mande uma foto por mensagem e avaliamos de graça.');
  V('coulisses','artisan','O gesto do ofício','15 s',
    '[Anos] de experiência neste gesto.','close nas mãos / na ferramenta',
    ['(2–12 s) [Gesto técnico em tempo real, som ambiente, close extremo]'],
    'Siga a página se gosta de trabalho bem feito.');
  V('temoignage','artisan','O cliente mostra o resultado','30 s',
    '“Nem parece a mesma casa.”','citação do cliente',
    ['(3–25 s) [O cliente mostra a casa e comenta] “O que queríamos: [necessidade]. O que recebemos: [resultado]. O que mais gostamos: [prazos, limpeza, conselhos].”'],
    'O próximo projeto é o seu? Orçamento grátis.');
  P('vente','artisan','Orçamento grátis',
'🏠 Tem [tipo de obra] em vista?\n\n✅ Orçamento grátis em [prazo]\n✅ [Seguro / certificação, se aplicável]\n✅ Atendemos em [região]\n\nVamos até você, medimos e explicamos tudo. Sem compromisso.\n\n📞 [Telefone] · 📩 mensagem privada');
  P('pedagogie','artisan','Apoios financeiros',
'💶 Bom saber: parte do custo das suas obras de [tipo] pode ser financiada.\n\n[Apoio 1, condições gerais]\n[Apoio 2]\n\n⚠️ Valores e condições mudam: verificamos com você o que se aplica ao seu caso.\n\nDúvidas? Mensagem privada.');
  P('coulisses','artisan','Obra em andamento',
'🚧 Obra em andamento em [cidade]\n\nDia [n] de [total]: [etapa do dia].\n\nO trabalho de hoje e a sua importância: [explicação simples].\n\nCenas dos próximos capítulos! 👷');
  P('temoignage','artisan','Obra entregue',
'✅ Obra entregue em [cidade]!\n\n[Tipo de obra] em [prazo].\n\n“[Citação do cliente]”\n\nObrigado, [nome], pela confiança. Deslize para ver o antes / depois ➡️');

  /* =================================================================== COMÉRCIO / LOJA */
  V('vente','commerce','Novidades na loja','15 s',
    'Novidades recém-chegadas — e não há para todos.','NOVIDADE',
    ['(2–12 s) [Unboxing rápido, 4–5 peças, 2 s cada, preço sobreposto se confirmado]'],
    'Passe na loja ou reserve por mensagem.');
  V('vente','commerce','3 ideias de presente até [preço]','30 s',
    '3 ideias de presente até [preço].','preço máximo em grande',
    ['(3–11 s) “Para [perfil 1]: [artigo], [preço].”','(11–19 s) “Para [perfil 2]: [artigo].”','(19–26 s) “E para [perfil 3]: [artigo]. Embrulho grátis.”'],
    'Qual delas resolve o seu problema? Comente 1, 2 ou 3.');
  V('coulisses','commerce','O seu pedido a caminho','20 s',
    'O seu pedido, [nome do cliente], está quase pronto!','ASMR de embalagem',
    ['(2–17 s) [Embalagem feita com cuidado, papel, fita, bilhete escrito à mão, som ambiente]'],
    'Compre online: link na bio.');
  V('engagement','commerce','O look do dia','15 s',
    'Uma peça, três maneiras de usar.','1 → 3',
    ['(2–13 s) [3 looks com a mesma peça, transição a cada estalar de dedos]'],
    'O seu preferido: 1, 2 ou 3?');
  P('vente','commerce','Novidades na loja',
'📦 Novidades fresquinhas!\n\n[Produto / marca]: [descrição curta e sensorial].\nTamanhos / modelos: [detalhes]\nPreço: [preço]\n\nQuantidades limitadas. Reserve por mensagem e guardamos para você durante 24 h. 🛍️');
  P('fidelite','commerce','Promoção',
'🏷️ [Evento promocional] de [data] a [data]\n\n-[x] % em [categoria / seleção]\n[Extra: 2.ª peça, brinde…]\n\nNa loja [e online]. As melhores peças saem no primeiro dia. 😉');
  P('coulisses','commerce','A escolha deste produto',
'O que nos levou a vender [produto / marca]? 🤔\n\n• [Motivo 1: qualidade, produção]\n• [Motivo 2: ética, local]\n• [Motivo 3: opinião dos clientes]\n\nSó vendemos o que nós mesmos usaríamos.');
  P('engagement','commerce','Ajude-nos a escolher',
'Estamos indecisos sobre o próximo pedido… precisamos de ajuda! 🙏\n\n[Opção A] ou [Opção B]?\n\nO mais pedido nos comentários chega à loja dia [data].');

  /* =================================================================== SAÚDE / BEM-ESTAR / TERAPEUTA */
  V('pedagogie','sante','Um exercício simples','30 s',
    'Um exercício de [duração] para aliviar [zona / tensão].','nome do exercício',
    ['(3–20 s) [Demonstração lenta] “Coloque-se em [posição]. Respire [instrução]. Repita [número] vezes.”','(20–27 s) “Se doer, pare e fale com um profissional.”'],
    'Salve para fazer hoje à noite.');
  V('pedagogie','sante','Como é uma sessão','30 s',
    'Nunca fez [disciplina]? Veja como funciona.','o consultório, ambiente calmo',
    ['(3–12 s) “Começamos com [conversa / avaliação].”','(12–22 s) “Depois, [como decorre a sessão].”','(22–27 s) “Uma sessão dura [duração].”'],
    'Alguma dúvida antes de vir? Mande uma mensagem.');
  V('engagement','sante','Mito de saúde','25 s',
    '“[Crença comum sobre saúde].” Verdade ou mentira?','VERDADE / MENTIRA',
    ['(3–20 s) “[Resposta equilibrada e com fontes]. O que realmente importa: [conselho].”'],
    'Que outro mito devo desfazer?');
  V('coulisses','sante','Como escolhi esta profissão','30 s',
    'Sou [profissão] há [anos]. E esta é a razão.','de frente para a câmera, tom acolhedor',
    ['(3–25 s) “[O clique pessoal], [o que mais gosta no acompanhamento], [o que mais a/o toca nos pacientes].”'],
    'Cuide-se. Agende online se precisar.');
  P('pedagogie','sante','Dica de bem-estar',
'🌿 A dica da semana\n\n[Dica simples e fácil de aplicar]\n\nComo ajuda: [explicação em 2 frases].\n\n⚠️ Esta dica não substitui uma opinião médica. Em caso de dúvida, consulte um profissional.\n\nSalve para não esquecer 💚');
  P('vente','sante','Agendamento',
'📅 Abriram horários [período].\n\n[Tipo de sessão] · [duração] · [preço]\n[Reembolso pelo seguro / plano de saúde, se aplicável]\n\nAgende online (link na bio) ou pelo [telefone].');
  P('coulisses','sante','O consultório',
'Bem-vindo(a) ao consultório 🤍\n\nUm espaço pensado para que se sinta [seguro(a) / relaxado(a)] logo ao entrar.\n\n📍 [Endereço] · [acesso, estacionamento, acessibilidade]\n\nAté breve.');
  P('engagement','sante','Check-in',
'Como está, de verdade, esta semana? 🫶\n\nResponda com um emoji:\n😌 tudo bem\n😐 mais ou menos\n😮‍💨 exausto(a)\n\nSeja qual for a resposta, reserve hoje um tempo para [pequeno gesto de autocuidado].');

  /* =================================================================== COACH / DESPORTO / FORMAÇÃO */
  V('pedagogie','coach','O exercício que todos fazem mal','25 s',
    'Faz [exercício] assim? Pare.','❌ execução errada',
    ['(3–12 s) [Execução errada] “Aqui, [erro e risco].”','(12–21 s) [Execução certa] “Em vez disso: [instrução 1], [instrução 2].”'],
    'Salve e teste no próximo treino.');
  V('temoignage','coach','A evolução','30 s',
    'Há [tempo], [nome] não conseguia [ação].','ANTES, data',
    ['(3–15 s) [Imagens do início]','(15–25 s) [Hoje] “O que funcionou: [constância, método].”'],
    'Pronto(a) para começar? Aula experimental na bio.');
  V('engagement','coach','Desafio de 7 dias','20 s',
    'Desafio: [ação] durante 7 dias. Quem vem comigo?','DESAFIO 7 DIAS',
    ['(3–15 s) “Todos os dias, [ação precisa e realista]. Publico a minha versão todos os dias nos stories.”'],
    'Comente “EU VOU” para entrar.');
  V('vente','coach','A aula experimental','20 s',
    'Na dúvida? Venha experimentar.','EXPERIMENTAL [grátis / preço]',
    ['(3–15 s) “Em [duração], fazemos [avaliação / sessão de descoberta] e sente logo [o que vai sentir]. Zero compromisso.”'],
    'Reserve a sua aula experimental: link na bio.');
  P('pedagogie','coach','Treino express',
'💪 Treino express: [duração] min, sem equipamento\n\n1. [Exercício] — [repetições]\n2. [Exercício] — [repetições]\n3. [Exercício] — [repetições]\n\n[Número] voltas. Descanso de [segundos] s.\n\nSalve e conte nos comentários quando terminar ✅');
  P('engagement','coach','Motivação',
'Lembrete de [dia]: [frase motivacional pessoal, não uma citação copiada].\n\nNinguém exige perfeição. Basta [ação mínima] hoje.\n\nQual foi a sua pequena vitória da semana? 👇');
  P('vente','coach','Inscrições abertas',
'🚀 Inscrições abertas para [programa / turma]!\n\nPara quem: [perfil]\nDuração: [duração]\nFormato: [presencial / online]\nNo fim, terá: [resultado]\n\n[Número] vagas. Início dia [data].\n👉 Link na bio');
  P('temoignage','coach','Vitória de um aluno',
'🏆 Parabéns, [nome]!\n\n[Objetivo alcançado] após [tempo] de trabalho.\n\nO que admirei: [qualidade da pessoa].\n\nA sua vez vai chegar. Começamos quando?');

  /* =================================================================== IMOBILIÁRIO */
  V('vente','immo','Visita em 30 segundos','30 s',
    '[Tipo de imóvel], [área] m², em [bairro / cidade].','preço + área',
    ['(3–24 s) [Visita fluida: entrada, sala, cozinha, quartos, exterior] “O ponto alto: [destaque].”','(24–27 s) “[Preço] · [classe energética]”'],
    'Visitas por agendamento: mensagem privada.');
  V('pedagogie','immo','Quanto vale o seu imóvel?','25 s',
    'O seu imóvel vale mesmo o que pensa?','💰 ?',
    ['(3–20 s) “Os 3 critérios que mais pesam em [cidade]: [critério 1], [critério 2], [critério 3].”'],
    'Avaliação grátis em 48 h: link na bio.');
  V('coulisses','immo','Um dia de consultor imobiliário','30 s',
    'O que faz realmente um consultor imobiliário.','dia em modo acelerado',
    ['(3–25 s) [Visitas, fotos, escritura, chamadas] “Uma venda são, em média, [número] visitas e [tempo].”'],
    'Dúvidas sobre vender? Deixe nos comentários.');
  V('temoignage','immo','Entrega das chaves','15 s',
    'O momento preferido da nossa profissão.','🔑',
    ['(2–12 s) [Entrega das chaves, sorrisos, com autorização dos clientes]'],
    'Parabéns, [nomes]! Quem é o próximo?');
  P('vente','immo','Novo imóvel',
'🏡 EXCLUSIVO · [Cidade / bairro]\n\n[Tipo] · [área] m² · [quartos] quartos\n✨ [Destaque 1] · [Destaque 2] · [Destaque 3]\n\n[Preço] [comissão: incluída / a cargo de …]\nClasse energética: [classe]\n\n📩 Visitas por agendamento em mensagem privada.');
  P('pedagogie','immo','Dica para quem vende',
'Vai vender? 3 coisas a fazer ANTES das fotos 📸\n\n1. [Dica 1]\n2. [Dica 2]\n3. [Dica 3]\n\nUm imóvel bem apresentado vende [mais rápido / melhor].\n\nAvaliação grátis: link na bio.');
  P('temoignage','immo','Vendido',
'🔑 VENDIDO!\n\n[Tipo de imóvel] em [cidade], vendido em [tempo].\n\n“[Citação dos vendedores]”\n\nObrigado, [nomes], pela confiança. Quer vender? Vamos conversar.');
  P('engagement','immo','Qual escolhe?',
'Qual escolheria? 🤔\n\n🅰️ [Imóvel A: vantagem]\n🅱️ [Imóvel B: vantagem]\n\nMesmo orçamento: [orçamento]. Vote nos comentários!');

  /* =================================================================== SERVIÇOS / B2B / FREELANCER */
  V('pedagogie','services','O erro que sai caro às empresas','30 s',
    'Este erro custa [valor / tempo] à maioria dos [público-alvo].','💸',
    ['(3–13 s) “O erro: [erro].”','(13–23 s) “O impacto: [consequência em números, se confirmada].”','(23–27 s) “A solução simples: [solução].”'],
    'Mande “AUDITORIA” por mensagem e analisamos o seu caso.');
  V('vente','services','Como trabalho','30 s',
    'Trabalhar comigo funciona assim.','etapas 1-2-3',
    ['(3–12 s) “1. [Chamada de descoberta / auditoria].”','(12–20 s) “2. [Proposta / execução].”','(20–27 s) “3. [Entrega / acompanhamento]. Prazo médio: [tempo].”'],
    'Primeira chamada grátis: link na bio.');
  V('temoignage','services','Resultado de cliente','25 s',
    '[Resultado em números] para [tipo de cliente].','o número',
    ['(3–20 s) “Ponto de partida: [situação]. O que fizemos: [ação]. Resultado: [resultado].”'],
    'Quer o mesmo? Mensagem privada.');
  V('coulisses','services','O meu escritório, as minhas ferramentas','20 s',
    'As [número] ferramentas sem as quais não trabalho.','setup de trabalho',
    ['(3–17 s) [Uma cena por ferramenta] “[Ferramenta]: para [uso].”'],
    'E você, qual é a sua ferramenta indispensável?');
  P('pedagogie','services','Post LinkedIn: lição aprendida',
'[Situação inicial numa frase de impacto].\n\nHá [tempo], [o que aconteceu].\n\nO que aprendi:\n→ [lição 1]\n→ [lição 2]\n→ [lição 3]\n\nE você, qual foi a lição que saiu mais cara?');
  P('vente','services','Oferta de serviço',
'É [público-alvo] e [problema]?\n\nAjudo [público-alvo] a [resultado] com [método], em [prazo].\n\nO que recebe:\n✔️ [entregável 1]\n✔️ [entregável 2]\n✔️ [entregável 3]\n\n[Número] vagas este mês. Chamada de descoberta grátis: link nos comentários.');
  P('temoignage','services','Estudo de caso LinkedIn',
'[Cliente] tinha [problema].\n\nEm [tempo], nós:\n1. [ação]\n2. [ação]\n3. [ação]\n\nResultado: [resultado mensurável].\n\nO mais importante não foi [o que se pensa], mas sim [verdadeiro fator-chave].\n\nPassa pelo mesmo? Vamos conversar.');
  P('coulisses','services','Os bastidores de um projeto',
'O que os meus clientes não veem (e é normal) 👇\n\n• [Etapa invisível 1]\n• [Etapa invisível 2]\n• [Etapa invisível 3]\n\nÉ 80 % do trabalho para 20 % do que se vê. E é aí que se decide a qualidade.');


  /* =================================================================== PROMPTS DE IMAGEM — TODAS AS ÁREAS */
  I('produit','tous','Packshot de estúdio, fundo liso',
'Foto profissional de produto de [produto], centralizado sobre um fundo liso [cor da marca], iluminação de estúdio suave com uma leve sombra projetada no chão, reflexos nítidos no material, foco perfeito no logo, bastante espaço vazio no topo para adicionar um texto. Estilo catálogo premium, formato quadrado.');
  I('produit','tous','Produto em uso',
'[Produto] usado por uma pessoa num [ambiente real do dia a dia: cozinha, escritório, banheiro…], luz natural de fim de manhã entrando por uma janela, mãos visíveis durante [gesto], fundo levemente desfocado, cores quentes e naturais. Foto autêntica estilo lifestyle, não posada. Formato vertical 4:5.');
  I('produit','tous','Flat lay visto de cima',
'Composição plana vista de cima: [produto principal] ao centro, rodeado por [3 a 5 objetos ou ingredientes relacionados] dispostos com cuidado, sobre uma superfície de [madeira clara / mármore / linho], sombras suaves, paleta [cores], bastante espaço entre os objetos. Estilo revista minimalista. Formato quadrado.');
  I('produit','tous','Levitação dinâmica',
'[Produto] suspenso no ar, rodeado de [elementos que o evocam: salpicos, frutas, folhas, pó] congelados em pleno movimento, fundo em gradiente [cor], iluminação contrastada, ultranítido, efeito de publicidade premium. Formato vertical 9:16.');
  I('produit','tous','Linha alinhada',
'Os [número] produtos da linha [nome] alinhados da esquerda para a direita numa prateleira minimalista, do menor para o maior, fundo [cor], iluminação uniforme, rótulos legíveis, acabamento limpo de foto de e-commerce. Formato horizontal 16:9.');
  I('pub','tous','Visual promocional com espaço para texto',
'Visual publicitário para [oferta]: [produto ou serviço] em destaque na metade direita da imagem, a metade esquerda é um bloco de cor [cor] vazio para colocar um título, ambiente enérgico, cores vivas da marca, luz nítida. Não escrever texto na imagem. Formato 4:5.');
  I('pub','tous','Antes / depois lado a lado',
'Imagem dividida verticalmente ao meio: à esquerda [estado antes, sem brilho e realista], à direita [estado depois, nítido e luminoso], mesmo enquadramento e mesmo ângulo dos dois lados, linha branca fina no meio, iluminação idêntica. Foto realista, sem retoques exagerados. Formato quadrado.');
  I('pub','tous','Cartaz de evento',
'Cartaz para [evento]: cena que ilustra [ambiente do evento] em primeiro plano, grande espaço livre no topo para o título e em baixo para a data, cores [paleta], estilo [gráfico moderno / vintage / elegante]. Sem texto gerado na imagem. Formato vertical 9:16.');
  I('pub','tous','Fundo de story com área de texto',
'Fundo vertical para story do Instagram: [textura ou cena ligada à marca] desfocada e suave, um grande retângulo claro semitransparente ao centro para escrever uma mensagem, cores [paleta da marca], ambiente calmo e legível. Formato 9:16.');
  I('lieu','tous','Fachada acolhedora',
'Fachada de [tipo de negócio] [nome] ao fim do dia, vitrine iluminada por dentro com luz quente, letreiro bem visível, calçada limpa, alguns transeuntes desfocados, céu azul de crepúsculo. Foto de arquitetura realista e acolhedora. Formato 4:5.');
  I('lieu','tous','Interior acolhedor',
'Interior de [espaço: loja, salão, consultório, ateliê] vazio e perfeitamente arrumado, luz natural suave, plantas verdes, materiais [madeira, linho, metal], perspectiva grande-angular a partir da entrada, ambiente acolhedor e premium. Foto de interiores realista. Formato horizontal 3:2.');
  I('personnes','tous','Retrato do dono',
'Retrato profissional de [descrição: idade, estilo] no seu [local de trabalho], sorridente, olhar para a câmera, roupa [roupa], fundo do local levemente desfocado, luz lateral suave, ambiente autêntico e confiante. Foto de retrato realista, lente 85 mm. Formato 4:5.');
  I('personnes','tous','A equipe em ação',
'Foto de [número] pessoas da equipe durante [atividade do ofício] em conjunto, momento natural e de cumplicidade, alguns sorrisos, luz natural, cores quentes, enquadramento de reportagem espontâneo. Foto realista, não posada. Formato horizontal 3:2.');
  I('personnes','tous','Mãos em ação',
'Close-up de mãos experientes durante [gesto preciso do ofício], ferramentas e material bem visíveis, profundidade de campo muito curta, luz rasante que revela as texturas, ambiente artesanal e cuidado. Formato quadrado.');
  I('saison','tous','Ambiente sazonal',
'[Produto ou espaço] decorado para [estação ou data: Natal, verão, volta às aulas, Dia dos Namorados…], elementos decorativos discretos e elegantes ([decorações]), luz [quente / fria], cores da estação, ambiente festivo mas sofisticado. Formato 4:5.');
  I('saison','tous','Fundo festivo para anúncio',
'Fundo gráfico festivo para [data comemorativa], [elementos: confetes, fitas, flocos de neve, folhas] nas bordas, centro limpo e liso para escrever um anúncio, cores [paleta], acabamento nítido e moderno. Sem texto. Formato quadrado.');

  /* =================================================================== PROMPTS DE IMAGEM — POR ÁREA */
  I('produit','resto','Prato da casa em close',
'Close apetitoso de [prato], servido num prato [estilo de prato] sobre uma mesa de madeira, vapor leve, molho brilhante, ervas frescas, luz natural lateral, fundo de salão de restaurante desfocado e acolhedor. Fotografia de comida profissional. Formato 4:5.');
  I('produit','resto','Mesa farta vista de cima',
'Vista de cima de uma mesa cheia de [pratos e bebidas] para dividir entre amigos, mãos estendidas para se servir, toalha de [material], luz suave, cores quentes, ambiente de convívio e fartura. Foto de comida estilo lifestyle. Formato quadrado.');
  I('ambiance','resto','Terraço ao pôr do sol',
'Terraço / área externa de [restaurante / café] ao pôr do sol, mesas postas, cordões de luz acesos, copos que brilham, alguns clientes desfocados em plena gargalhada, luz dourada. Foto de ambiente realista. Formato 4:5.');
  I('produit','resto','Folhados no balcão',
'Balcão de padaria com [folhados / pães] dourados e crocantes, close na textura folhada, luz da manhã, farinha leve sobre a madeira, ambiente artesanal. Formato 4:5.');
  I('produit','beaute','Frasco de cuidado premium',
'[Produto de beleza] pousado sobre uma pedra [cor] molhada, gotas de água no frasco, folhas de [planta] em volta, luz suave e difusa, paleta [cores], estética de spa sofisticada. Formato 4:5.');
  I('personnes','beaute','Resultado de cabelo',
'Retrato de costas e de três quartos de uma cliente com [corte / cor feita], cabelo brilhante e em movimento, luz suave de salão, fundo do salão desfocado, resultado realista e natural. Formato 4:5.');
  I('lieu','beaute','Sala de tratamento tranquila',
'Sala de tratamento vazia e pronta: maca de massagem com toalhas dobradas, velas acesas, plantas, luz baixa e quente, materiais naturais, ambiente zen e limpo. Formato 4:5.');
  I('produit','artisan','Trabalho concluído',
'Foto de [trabalho: cozinha, banheiro, terraço, móvel] concluído, linhas retas, acabamentos impecáveis, luz natural, espaço arrumado e decorado de forma simples, perspectiva grande-angular. Foto de arquitetura de interiores realista. Formato horizontal 3:2.');
  I('personnes','artisan','Profissional na obra',
'[Profissão] com roupa de trabalho limpa numa obra de [tipo de obra], concentrado em [gesto], ferramentas profissionais, capacete ou equipamento de segurança, luz do dia, foto de reportagem realista e valorizadora. Formato 4:5.');
  I('produit','commerce','Novidade na vitrine',
'[Peça] em destaque na vitrine da loja, expositor elegante, acessórios que combinam, iluminação quente de vitrine, reflexos leves no vidro, ambiente de compras no centro da cidade. Formato 4:5.');
  I('produit','commerce','Look na rua',
'Pessoa com [roupa / acessório] numa rua de [tipo de cidade], pose natural enquanto caminha, luz de fim de tarde, fundo desfocado, estilo foto de moda lifestyle. Formato 4:5.');
  I('lieu','sante','Consultório acolhedor',
'Consultório de [disciplina] luminoso e tranquilizador, poltrona confortável, plantas, cores suaves [paleta], luz natural, sem pessoas, sensação de calma e limpeza. Formato horizontal 3:2.');
  I('ambiance','sante','Visual de bem-estar',
'Cena relaxante ligada ao bem-estar: [elemento: caneca de chá, seixos, folha, água calma] em close, luz suave da manhã, paleta [cores], bastante espaço vazio para um texto. Formato quadrado.');
  I('personnes','coach','Treino em pleno esforço',
'Pessoa em pleno [exercício] em [academia / ginásio / ao ar livre], suor leve, músculos em ação, luz contrastada, enquadramento dinâmico de baixo para cima, ambiente motivador e enérgico. Foto fitness realista. Formato 4:5.');
  I('pub','coach','Visual de desafio fitness',
'Visual fitness para um desafio de [duração]: equipamento de [modalidade] pousado no chão (garrafa de água, toalha, calçado), luz da manhã, fundo [cor], grande espaço livre no topo para um título. Sem texto. Formato 4:5.');
  I('lieu','immo','Sala luminosa',
'Sala de estar de [tipo de imóvel] banhada por luz natural, janelas grandes, decoração neutra e moderna, perspectiva grande-angular a partir da entrada, linhas verticais retas, acabamento de fotografia imobiliária profissional. Formato horizontal 3:2.');
  I('lieu','immo','Home staging virtual',
'O mesmo espaço [descrição do espaço vazio] decorado com móveis em estilo [escandinavo / contemporâneo / boho]: sofá, tapete, iluminação, plantas, luz natural, resultado realista e fiel às paredes e janelas originais. Formato horizontal 3:2.');
  I('pub','services','Visual de especialista',
'Imagem conceitual para [serviço]: mesa de trabalho minimalista com computador portátil, caderno e café, tela com [tipo de painel ou gráfico], luz natural, paleta [cores da marca], ambiente profissional e sereno. Formato 4:5.');
  I('personnes','services','Reunião com cliente',
'Duas pessoas numa reunião profissional em torno de uma mesa, conversa sorridente, documentos e computador, luz natural de escritório, fundo desfocado, ambiente de confiança. Foto corporativa realista. Formato horizontal 3:2.');

  /* =================================================================== PROMPTS DE VÍDEO — TODAS AS ÁREAS */
  W('produit','tous','Rotação de produto 360°','5 s',
'[Produto] sobre uma base que gira lentamente, fundo liso [cor], iluminação de estúdio suave com reflexos que deslizam pelo material, câmera fixa ligeiramente de cima, movimento fluido e regular. Formato 9:16.');
  W('produit','tous','Travelling de revelação','5 s',
'A câmera avança lentamente de um close desfocado em [detalhe do produto] até revelar [produto] por inteiro, foco progressivo, luz quente lateral, partículas de pó suspensas na luz. Formato 9:16.');
  W('produit','tous','Produto em ação','5 s',
'Mãos [gesto: abrem, servem, aplicam, montam] [produto] em close, movimento natural e preciso, luz natural, fundo desfocado de [local], câmera fixa à altura da mesa. Formato 9:16.');
  W('produit','tous','Ingredientes em câmera lenta','5 s',
'[Ingredientes ou elementos] caem em câmera lenta em torno de [produto] e saltam levemente, fundo [cor], iluminação contrastada, câmera fixa, efeito de publicidade premium. Formato 9:16.');
  W('ambiance','tous','Ambiente do espaço','5 s',
'Travelling lateral lento por [espaço: loja, salão, ateliê] vazio e perfeitamente arrumado, luz suave de fim de dia, pequenas luzes que cintilam, profundidade de campo curta, ambiente acolhedor. Formato 9:16.');
  W('ambiance','tous','Abertura de manhã','5 s',
'Uma mão vira a placa de “aberto” na porta de vidro de [negócio], a luz da manhã entra no espaço, câmera fixa do lado de dentro, movimento natural, ambiente de início de dia. Formato 9:16.');
  W('personnes','tous','Boas-vindas com sorriso','5 s',
'[Pessoa] atrás do balcão levanta o olhar, sorri e acena levemente para a câmera, luz natural suave, fundo de [local] desfocado, movimento natural e caloroso. Formato 9:16.');
  W('personnes','tous','Gesto do ofício em câmera lenta','5 s',
'Close em câmera lenta de mãos que [gesto preciso do ofício], ferramentas e material bem visíveis, luz rasante que revela as texturas, câmera fixa, ambiente artesanal. Formato 9:16.');
  W('pub','tous','Antes → depois em transição','5 s',
'Plano fixo de [espaço ou objeto] no estado antes; depois, uma faixa de luz atravessa a imagem da esquerda para a direita e revela o estado depois, mesmo enquadramento, transição fluida, resultado realista. Formato 9:16.');
  W('pub','tous','Zoom final no logo','5 s',
'A câmera recua suavemente a partir de [elemento da marca: letreiro, sacola, avental, embalagem] para revelar a cena em volta, luz quente, movimento lento e seguro, final do plano estável para adicionar texto. Formato 9:16.');
  W('saison','tous','Clima de festa','5 s',
'[Espaço ou produto] decorado para [data comemorativa], cordões de luz que cintilam, [neve / confetes / pétalas] que caem suavemente, câmera que avança lentamente, ambiente festivo e suave. Formato 9:16.');
  W('ambiance','tous','Time-lapse do dia','5 s',
'Time-lapse de [espaço] da manhã à noite, luz que passa do dourado do dia ao azul do anoitecer, silhuetas desfocadas de clientes que vão e vêm, câmera fixa. Formato 9:16.');

  /* =================================================================== PROMPTS DE VÍDEO — POR ÁREA */
  W('produit','resto','Prato fumegante','5 s',
'Close de [prato] recém-servido, vapor que sobe suavemente, uma colher despeja um fio de [molho], luz quente lateral, fundo do salão desfocado, câmera fixa ligeiramente de cima. Formato 9:16.');
  W('produit','resto','Bebida servida no copo','5 s',
'[Bebida] servida em câmera lenta num copo [tipo], bolhas e cubos de gelo que giram, gotas de condensação, luz quente de balcão, câmera fixa à altura do copo. Formato 9:16.');
  W('coulisses','resto','O chef na cozinha','5 s',
'Um chef salteia [ingredientes] numa frigideira, chama viva, vapor, movimento rápido e controlado, cozinha profissional ao fundo, luz contrastada, câmera fixa de três quartos. Formato 9:16.');
  W('produit','resto','Pão fresco do forno','5 s',
'Um padeiro tira do forno uma bandeja de [pães / folhados] dourados, vapor quente, crosta crocante, luz alaranjada do forno, câmera fixa à altura do forno. Formato 9:16.');
  W('pub','beaute','Revelação do corte','5 s',
'Uma cliente gira lentamente em direção à câmera e balança levemente o cabelo [corte / cor], cabelo brilhante em movimento, luz suave de salão, fundo desfocado, sorriso natural. Formato 9:16.');
  W('produit','beaute','Textura de cuidado','5 s',
'Close em câmera lenta: uma porção de [creme / sérum] cai sobre uma superfície de vidro e espalha-se devagar, textura cremosa, luz difusa, fundo [cor pastel], câmera fixa. Formato 9:16.');
  W('ambiance','beaute','Momento de relaxamento','5 s',
'Uma pessoa deitada de olhos fechados durante um tratamento facial, mãos da esteticista que massageiam lentamente, velas e luz baixa, câmera que avança muito suavemente. Formato 9:16.');
  W('coulisses','artisan','Ferramenta em ação','5 s',
'Close em [ferramenta: lixadeira, colher de pedreiro, serra, pincel] em ação sobre [material], pó ou lascas suspensos na luz, mãos com luvas, luz do dia, câmera fixa. Formato 9:16.');
  W('pub','artisan','Espaço concluído','5 s',
'Travelling lento por [espaço renovado] concluído, luz natural que entra pela janela, acabamentos impecáveis, chão limpo, movimento de câmera fluido da entrada em direção ao fundo do espaço. Formato 9:16.');
  W('produit','commerce','Embrulho de presente','5 s',
'Mãos embrulham [artigo] em papel [cor] e dão um laço com uma fita, close visto de cima, movimentos cuidadosos, luz suave, balcão de madeira, câmera fixa. Formato 9:16.');
  W('produit','commerce','Desfile de novidades','5 s',
'Câmera que desliza lentamente ao longo de um expositor ou prateleira de [peças] recém-chegadas, cores harmoniosas, luz quente de loja, profundidade de campo curta. Formato 9:16.');
  W('ambiance','sante','Respiração calma','5 s',
'Uma pessoa sentada de pernas cruzadas perto de uma janela inspira e expira lentamente, ombros que relaxam, luz suave da manhã, planta que se mexe ligeiramente, câmera fixa. Formato 9:16.');
  W('pedagogie','sante','Demonstração de exercício','5 s',
'[Profissional] demonstra lentamente [exercício ou alongamento] num consultório luminoso, movimento controlado e fluido, câmera fixa em plano aberto, luz natural suave. Formato 9:16.');
  W('pub','coach','Esforço explosivo','5 s',
'Câmera lenta de uma pessoa que realiza [exercício explosivo: salto, sprint, levantamento], pó ou gotas de suor na luz, contraluz marcado, câmera fixa de baixo para cima. Formato 9:16.');
  W('personnes','coach','Coach que incentiva','5 s',
'Um coach aplaude e incentiva [aluno] que termina a série, sorriso e “toca aqui”, espaço de treino luminoso, câmera fixa à altura do ombro. Formato 9:16.');
  W('pub','immo','Visita fluida','5 s',
'Travelling fluido que avança da entrada de [tipo de imóvel] até a sala luminosa, linhas verticais retas, luz natural, decoração neutra, movimento lento e estável como com estabilizador. Formato 9:16.');
  W('pub','immo','Vista exterior com drone','5 s',
'Vista aérea que sobe lentamente sobre [casa / prédio] e revela [jardim, bairro, vista], luz dourada de fim de dia, movimento fluido. Formato 9:16.');
  W('pub','services','Tela que ganha vida','5 s',
'Close numa tela de computador onde [gráfico / painel] se preenche progressivamente, reflexos suaves, mesa minimalista, câmera que avança lentamente, ambiente profissional. Formato 9:16.');
  W('personnes','services','Aperto de mão','5 s',
'Duas pessoas apertam as mãos por cima de uma mesa, sorridentes, documentos assinados em primeiro plano, luz natural de escritório, câmera fixa de três quartos, movimento natural. Formato 9:16.');

  window.MCD_SCRIPTS=L;
  window.MCD_SCRIPTS_META={
    lang:'pt',
    types:{tous:'Tudo',video:'🎬 Scripts de vídeo',post:'✍️ Legendas',img:'🖼️ Prompts de imagem',vid:'🎥 Prompts de vídeo'},
    objectifs:{vente:'💰 Vender',engagement:'💬 Interação',pedagogie:'🎓 Dicas',coulisses:'🎬 Bastidores',temoignage:'⭐ Avaliações',lancement:'🚀 Lançamento',evenement:'📅 Evento',fidelite:'🎁 Fidelização',recrutement:'🤝 Recrutamento',produit:'📦 Produto',ambiance:'✨ Ambiente',pub:'📣 Anúncios e promoções',lieu:'🏠 Espaço',personnes:'🙂 Pessoas',saison:'🎄 Datas e estações'},
    metiers:{tous:'Todas as áreas',resto:'Restaurante e café',beaute:'Beleza e cabelo',artisan:'Artesãos e obras',commerce:'Loja',sante:'Saúde e bem-estar',coach:'Coach e fitness',immo:'Imóveis',services:'Serviços e B2B'},
    ui:{title:'Biblioteca de scripts',lead:'{n} scripts, legendas e prompts de imagem/vídeo. Troca os [colchetes] ou deixa o Marshall adaptar tudo à tua marca.',search:'Pesquisar: antes/depois, sorteio, produto…',all:'Tudo',metier:'Área',count1:'{n} item',countN:'{n} itens',empty:'Nada encontrado. Experimenta outra palavra ou “Tudo”.',loading:'Carregando a biblioteca…',
      kVideo:'Script de vídeo',kPost:'Legenda',kImg:'Prompt de imagem',kVid:'Prompt de vídeo',adapted:'✨ Versão adaptada pelo Marshall',orig:'ver o original',
      insert:'⬇ Inserir na legenda',copy:'📋 Copiar',adapt:'✨ Adaptar com o Marshall',again:'✨ Outra versão',busy:'✨ O Marshall está escrevendo…',create:'🪄 Criar no Estúdio IA',
      inserted:'Inserido na legenda ✓',insertedUndo:'Inserido na legenda · toca para desfazer',copied:'Copiado ✓',copyFail:'Não foi possível copiar',noComposer:'Abre primeiro o Composer',
      sent:'Prompt enviado para o Estúdio IA ✓',adaptFail:'O Marshall não conseguiu adaptar este texto: ',close:'Fechar',
      credits:'Prompts inspirados nas estruturas de awesome-ad-video-prompts (CC BY 4.0) e awesome-nanobanana-pro.'}
  };
})();
