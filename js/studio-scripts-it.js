/* Libreria di script — Studio Social (Mon Copain Digital)
   Script video (Reels, TikTok, Shorts, voce, avatar) e didascalie per i post pronte da completare.
   Le [parentesi quadre] vanno sostituite, oppure fatte compilare a Marshall («Adatta con Marshall»). */
(function(){
  var L=[];
  /* Etichette delle sezioni di uno script video (da tradurre) */
  var LB={hook:'🎬 GANCIO (0–3 s)',screen:'A schermo',body:'📍 SVOLGIMENTO',cta:'👉 CALL TO ACTION',q1:'«',q2:'»'};
  function V(o,s,n,d,hook,ecran,steps,cta){
    L.push({t:'video',o:o,s:s,n:n,d:d,x:LB.hook+'\n'+LB.q1+hook+LB.q2+'\n['+LB.screen+': '+ecran+']\n\n'+LB.body+'\n'+steps.join('\n')+'\n\n'+LB.cta+'\n'+LB.q1+cta+LB.q2});
  }
  function P(o,s,n,txt){ L.push({t:'post',o:o,s:s,n:n,x:txt}); }
  /* Prompt di creazione: I = immagine, W = video (Wan 2.2 / Veo). Scritti nella lingua dell’app; Marshall li riscrive come prompt professionali prima della generazione. */
  function I(o,s,n,txt){ L.push({t:'img',o:o,s:s,n:n,x:txt}); }
  function W(o,s,n,d,txt){ L.push({t:'vid',o:o,s:s,n:n,d:d,x:txt}); }

  /* =================================================================== SCRIPT VIDEO — TUTTI I SETTORI */
  V('vente','tous','Il problema → la soluzione','30 s',
    'Anche tu [problema frequente dei tuoi clienti]?','il problema in 5 parole, testo grande',
    ['(3–10 s) «Ce lo sentiamo dire ogni giorno: [frase tipica di un cliente].»','(10–22 s) «Da [nome] abbiamo [la tua soluzione]: [beneficio 1], [beneficio 2].» [Inquadratura: tu all’opera]','(22–27 s) «Risultato: [risultato concreto].» [Inquadratura: il risultato]'],
    'Scrivici «[parola chiave]» in DM, ti rispondiamo oggi stesso.');
  V('vente','tous','Prima / Dopo','20 s',
    'Guarda che differenza.','PRIMA (fermo immagine, 1 s)',
    ['(2–8 s) [Inquadratura prima] «Ecco com’era: [difetto visibile].»','(8–15 s) [Transizione veloce] «Ed ecco dopo [tempo / intervento].» [Inquadratura dopo]','(15–18 s) «Cosa ha fatto la differenza: [il dettaglio chiave].»'],
    'Vuoi lo stesso risultato? Link in bio.');
  V('vente','tous','3 motivi per scegliere…','30 s',
    '3 motivi per cui i nostri clienti scelgono [prodotto/servizio].','«3 MOTIVI» + numero che scorre',
    ['(3–10 s) «1: [motivo 1, concreto].» [Inquadratura illustrativa]','(10–17 s) «2: [motivo 2].»','(17–25 s) «E 3, il più importante: [motivo 3].»'],
    'Qual è il più importante per te? Dimmelo nei commenti.');
  V('vente','tous','L’offerta a tempo','15 s',
    'Solo fino al [data]!','[OFFERTA] grandissima, countdown',
    ['(3–8 s) «[Offerta precisa] su [prodotto/servizio].» [Inquadratura del prodotto]','(8–12 s) «Perché? [motivo sincero: anniversario, fine serie…].»'],
    'Prenota entro il [data]: link in bio.');
  V('vente','tous','Obiezione smontata','30 s',
    '«Costa troppo.» Ce lo dicono spesso. Ecco la verità.','l’obiezione tra virgolette',
    ['(3–12 s) «Cosa paghi davvero: [cosa è incluso, durata, tempo risparmiato].»','(12–22 s) «Rispetto a [alternativa], vuol dire [calcolo semplice o confronto].»','(22–27 s) «E in più [garanzia / prova / pagamento a rate].»'],
    'Hai un’altra domanda? Scrivila nei commenti, rispondiamo a tutti.');
  V('vente','tous','Demo in 3 mosse','20 s',
    'Ecco come funziona, in 3 mosse.','mani + prodotto, primo piano',
    ['(2–7 s) «Uno: [mossa 1].»','(7–12 s) «Due: [mossa 2].»','(12–17 s) «Tre: [mossa 3]. Ed è fatta.» [Inquadratura risultato]'],
    'Lo trovi da [nome] / su [sito].');
  V('engagement','tous','Quello che non sai su…','30 s',
    'Nessuno te lo dice, ma su [argomento]…','testo che «si svela»',
    ['(3–12 s) «[Fatto sorprendente ma vero].»','(12–22 s) «In pratica significa: [conseguenza per il cliente].»','(22–27 s) «Il nostro consiglio: [consiglio semplice].»'],
    'Salva il video per non dimenticarlo.');
  V('engagement','tous','Sondaggio: sei più…','15 s',
    'Team [opzione A] o team [opzione B]?','A vs B, schermo diviso a metà',
    ['(3–7 s) [Inquadratura opzione A] «[A]: [punto forte di A].»','(7–11 s) [Inquadratura opzione B] «[B]: [punto forte di B].»'],
    'Vota nei commenti: A o B?');
  V('engagement','tous','POV cliente','15 s',
    'POV: hai appena [situazione del cliente].','«POV: …» in alto sullo schermo',
    ['(3–10 s) [Scena vissuta dal punto di vista del cliente, senza parlare o con musica di tendenza]','(10–13 s) [Reazione / sorriso / risultato]'],
    'Tagga qualcuno che ne ha bisogno.');
  V('engagement','tous','Gli errori da evitare','30 s',
    'I 3 errori che vedo di continuo in [settore].','croce rossa ❌ a ogni errore',
    ['(3–11 s) «Errore n°1: [errore]. Invece: [abitudine giusta].»','(11–19 s) «Errore n°2: [errore].»','(19–26 s) «Errore n°3, il peggiore: [errore].»'],
    'Ne facevi uno? Confessa nei commenti 😄');
  V('engagement','tous','Mito o realtà?','25 s',
    '«[Luogo comune].» Mito o realtà?','MITO / REALTÀ che lampeggia',
    ['(3–10 s) «In tanti pensano che [luogo comune].»','(10–20 s) «In realtà: [verità + prova o esempio].»'],
    'Seguici per il prossimo luogo comune.');
  V('pedagogie','tous','Tutorial lampo in 3 passaggi','30 s',
    'Come [risultato desiderato] in 3 passaggi.','«IN 3 PASSAGGI» + numeri',
    ['(3–11 s) «Passaggio 1: [azione].» [Primo piano]','(11–19 s) «Passaggio 2: [azione]. Trucco: [dettaglio da pro].»','(19–26 s) «Passaggio 3: [azione]. Ed ecco fatto.» [Inquadratura risultato]'],
    'Salvalo per rifarlo più tardi.');
  V('pedagogie','tous','Il consiglio da pro','20 s',
    'Il consiglio che do a tutti i miei clienti.','«CONSIGLIO DA PRO»',
    ['(3–12 s) «[Consiglio preciso e applicabile subito].»','(12–17 s) «Perché? Perché [spiegazione semplice in una frase].»'],
    'Condividilo con chi ne ha bisogno.');
  V('pedagogie','tous','La domanda del cliente','30 s',
    'Mi hanno chiesto: «[domanda reale di un cliente]?»','la domanda in un fumetto da chat',
    ['(3–15 s) «La risposta breve: [risposta].»','(15–25 s) «La risposta completa: [sfumatura, caso particolare].»'],
    'Fai la tua domanda nei commenti, ti rispondo in video.');
  V('pedagogie','tous','Il glossario in 30 s','30 s',
    '[Termine tecnico]: cosa vuol dire, davvero?','il termine + definizione che si scrive',
    ['(3–13 s) «In parole semplici: [definizione chiara].»','(13–24 s) «Esempio: [esempio di tutti i giorni].»','(24–27 s) «E per te cambia [impatto].»'],
    'Quale parola vuoi che spieghi la prossima volta?');
  V('coulisses','tous','Una giornata da noi','45 s',
    '[Ora del mattino]. Inizia una giornata da [nome].','ora in sovrimpressione + inquadratura di apertura',
    ['(3–15 s) [Apertura, preparazione, caffè, team]','(15–30 s) [Il cuore del lavoro: 3 inquadrature veloci da 2 s] «Quello che non vedi mai: [dettaglio].»','(30–40 s) [Chiusura / momento di orgoglio] «E questo è il nostro momento preferito.»'],
    'Vuoi vedere altro del dietro le quinte? Dicci cosa.');
  V('coulisses','tous','Ti presento il team','30 s',
    'Sono in [numero] e senza di loro [nome] non esisterebbe.','nomi che compaiono',
    ['(3–25 s) [Un’inquadratura di 3–4 s per persona] «[Nome], [ruolo], [aneddoto o talento nascosto].»'],
    'Saluta il team nei commenti 👋');
  V('coulisses','tous','Perché ho creato…','45 s',
    'Nel [anno] ho mollato tutto per [progetto].','foto d’epoca o inquadratura frontale',
    ['(3–18 s) «Prima ero [situazione]. Un giorno, [la scintilla].»','(18–33 s) «Gli inizi: [difficoltà] — ma [cosa ti ha fatto tenere duro].»','(33–40 s) «Oggi [ciò di cui vai fiero].»'],
    'Grazie di essere qui. Seguici per vedere come continua la storia.');
  V('coulisses','tous','Creazione in timelapse','15 s',
    'Dal nulla a [prodotto finito] in 15 secondi.','time-lapse, testo «15 s»',
    ['(2–12 s) [Timelapse della lavorazione / preparazione, musica ritmata]','(12–14 s) [Inquadratura finale, prodotto in evidenza]'],
    'Avresti mai detto che ci vuole [tempo reale]?');
  V('temoignage','tous','Parola al cliente','30 s',
    '«[Frase forte del cliente].»','citazione + nome del cliente',
    ['(3–12 s) [Cliente in camera] «Prima [problema].»','(12–22 s) «Con [nome] [cosa è cambiato].»','(22–27 s) «Lo consiglio perché [motivo].»'],
    'Provalo anche tu: link in bio.');
  V('temoignage','tous','La recensione letta ad alta voce','20 s',
    'Ci è arrivata questa recensione… e non ce l’aspettavamo.','screenshot della recensione (5 stelle)',
    ['(3–14 s) [Lettura di un estratto della recensione, screenshot vero a schermo]','(14–18 s) «Grazie [nome], ci ha davvero emozionato.»'],
    'Sei già passato da noi? Lasciaci una recensione 🙏');
  V('temoignage','tous','Risultato in numeri','20 s',
    '[Numero reale] in [tempo]. Ecco come.','il numero gigante',
    ['(3–10 s) «Quando [cliente] è arrivato, [punto di partenza].»','(10–17 s) «Abbiamo [cosa hai fatto]. Risultato: [numero].»'],
    'Vuoi la stessa analisi? Scrivici.');
  V('lancement','tous','Il teaser','10 s',
    'Qualcosa sta arrivando il [data].','inquadratura sfocata / nascosta, data grande',
    ['(2–8 s) [Dettagli in primissimo piano, senza mostrare tutto] «Non diciamo altro…»'],
    'Attiva le notifiche per non perdertelo.');
  V('lancement','tous','La rivelazione','30 s',
    'Ci siamo, è arrivato: [novità]!','rivelazione con effetto + nome',
    ['(3–13 s) «Ci lavoriamo da [tempo]: [cos’è].»','(13–23 s) «Cosa lo rende unico: [differenza 1], [differenza 2].»','(23–27 s) «Disponibile dal [data], a [prezzo se certo].»'],
    'I primi [numero] hanno [vantaggio]: link in bio.');
  V('lancement','tous','Conto alla rovescia -3','10 s',
    'Mancano solo 3 giorni.','«-3» gigante',
    ['(2–8 s) [Un indizio visivo al giorno] «Indizio di oggi: [indizio].»'],
    'Indovina nei commenti!');
  V('evenement','tous','Invito all’evento','20 s',
    'Il [data] ti aspettiamo!','data + luogo in grande',
    ['(3–10 s) «In programma: [momento clou 1], [momento clou 2].»','(10–16 s) «È [gratis / su prenotazione], a [luogo], dalle [ora].»'],
    'Scrivi «ci sono» nei commenti, ti teniamo un posto.');
  V('evenement','tous','Com’è andato l’evento','30 s',
    'Grazie! [Giorno] eravate in [numero].','campo largo sulla folla',
    ['(3–25 s) [Montaggio ritmato dei momenti migliori, 1,5 s per inquadratura, sorrisi, dettagli]','(25–28 s) «Grazie a [partner / team].»'],
    'C’eri anche tu? Taggati nel video!');
  V('fidelite','tous','Grazie alla community','20 s',
    '[Numero] follower. Non ci crediamo ancora.','il numero che sale',
    ['(3–15 s) «Quando abbiamo iniziato, [ricordo]. Oggi, grazie a voi, [orgoglio].»'],
    'Per festeggiare: [piccolo regalo / giveaway]. Dettagli in didascalia.');
  V('fidelite','tous','Giveaway','20 s',
    'In palio per te [premio]!','🎁 GIVEAWAY',
    ['(3–15 s) «Per partecipare: 1. seguici, 2. metti like, 3. tagga [numero] amici. Estrazione il [data].»'],
    'In bocca al lupo a tutti! Regolamento in didascalia.');
  V('recrutement','tous','Cerchiamo te','30 s',
    'Cerchiamo [ruolo]. Forse sei tu?','CERCHIAMO + ruolo',
    ['(3–12 s) «Da noi [atmosfera reale, 2 inquadrature del team].»','(12–22 s) «Cosa cerchiamo: [qualità 1], [qualità 2]. Non serve [titolo di studio / esperienza] se [condizione].»','(22–27 s) «[Contratto, orari, luogo].»'],
    'Scrivici in DM o condividi con la persona giusta.');

  /* =================================================================== DIDASCALIE — TUTTI I SETTORI */
  P('vente','tous','Prima il beneficio',
'[Il risultato che il tuo cliente vuole], senza [il vincolo che teme]. ✨\n\nÈ esattamente quello che offre [prodotto/servizio]:\n✔️ [beneficio 1]\n✔️ [beneficio 2]\n✔️ [beneficio 3]\n\n📍 [luogo / consegna / online]\n👉 [Prenota / Ordina] dal link in bio.');
  P('vente','tous','Problema – Agitazione – Soluzione',
'[Problema]? Non sei l’unico/a.\n\nE più aspetti, più [conseguenza concreta]. 😬\n\nLa buona notizia: [soluzione in una frase].\nDa [nome] [come lo fai, in concreto].\n\n💬 Scrivici «[parola chiave]» in DM e ne parliamo.');
  P('vente','tous','Offerta a tempo limitato',
'⏳ Solo fino al [data]:\n[offerta precisa] su [prodotto/servizio].\n\nPerché? [motivo sincero].\n\nPoi si torna al prezzo normale. Niente proroghe. 🙃\n\n👉 Link in bio / [telefono]');
  P('vente','tous','Il prodotto star',
'Se dovessi provare una sola cosa da noi, sarebbe questa. 👇\n\n[Prodotto]: [cosa lo rende unico, 1 frase sensoriale o concreta].\n\nI nostri clienti lo scelgono per [motivo n°1].\n\nGià provato? Dagli un voto da 1 a 10 nei commenti!');
  P('vente','tous','Confronto onesto',
'[Opzione A] o [la nostra soluzione]? Siamo onesti. 🤝\n\n[Opzione A]: ✅ [vantaggio] / ❌ [limite]\n[La nostra soluzione]: ✅ [vantaggio] / ✅ [vantaggio] / ❌ [limite dichiarato]\n\nPer chi è: [profilo ideale].\nPer chi non è: [profilo].\n\nHai una domanda? Rispondiamo nei commenti.');
  P('engagement','tous','Domanda aperta',
'Domandina del giorno 👇\n\n[Domanda semplice che riguarda il tuo cliente]?\n\nPer noi è [la tua risposta con un tocco personale].\n\nTocca a te! Leggiamo tutti i commenti.');
  P('engagement','tous','Questo o quello',
'Tu sei più…\n\n🅰️ [opzione A]\no\n🅱️ [opzione B]?\n\nRispondi solo A o B nei commenti. Venerdì facciamo i conti! 📊');
  P('engagement','tous','Completa la frase',
'Completa la frase 👇\n\n«Un [giorno / momento] perfetto è quando…»\n\nIniziamo noi: [la tua risposta]. 😄');
  P('engagement','tous','Confessa…',
'Confessa… anche tu [piccola abitudine o errore comune legato al tuo settore]? 🙈\n\nQui nessuno giudica. Ma ecco un trucco semplice: [trucco].\n\nTagga chi lo fa SEMPRE 😂');
  P('pedagogie','tous','Carosello: guida passo passo',
'📌 Salva questo post, ti servirà.\n\nCome [risultato] in [numero] passaggi:\n\n1️⃣ [passaggio 1]\n2️⃣ [passaggio 2]\n3️⃣ [passaggio 3]\n4️⃣ [passaggio 4]\n\n💡 L’errore da evitare: [errore].\n\nDomande? Commenta 👇');
  P('pedagogie','tous','Luogo comune',
'❌ «[Luogo comune]»\n✅ In realtà: [verità].\n\nPerché ci crediamo? [Origine del luogo comune].\nCosa cambia per te: [conseguenza pratica].\n\nCi credevi anche tu? Sii sincero/a 😉');
  P('pedagogie','tous','Checklist',
'✅ La checklist prima di [azione importante per il tuo cliente]:\n\n☐ [punto 1]\n☐ [punto 2]\n☐ [punto 3]\n☐ [punto 4]\n☐ [punto 5]\n\nSpunta tutto e vai sul sicuro. 💪\nSalvala per ritirarla fuori il giorno X.');
  P('pedagogie','tous','Il numero chiave',
'[Dato verificato] 😮\n\nÈ [cosa rappresenta questo numero] (fonte: [fonte]).\n\nCosa significa per te: [interpretazione semplice].\nIl nostro consiglio: [azione].\n\nLo sapevi?');
  P('coulisses','tous','Dietro le quinte di oggi',
'Quello che non vedi prima di [momento in cui il cliente ti vede]. 👀\n\n[Ora]: [attività]\n[Ora]: [attività]\n[Ora]: [attività]\n\nNon è glamour, ma è per questo che [risultato che il cliente apprezza]. ❤️');
  P('coulisses','tous','Ritratto del team',
'Probabilmente la/lo conosci già… ma conosci davvero [nome]? 👋\n\n🔧 Il suo ruolo: [ruolo]\n⏳ Con noi da: [tempo]\n💛 Cosa ama di più: [aneddoto]\n🤫 Talento nascosto: [talento]\n\nUn saluto per [nome]? 👇');
  P('coulisses','tous','La nostra storia',
'Tutto è iniziato [luogo / momento improbabile]. 🌱\n\n[2–3 frasi: la scintilla, gli inizi difficili, cosa ti ha fatto tenere duro.]\n\n[Numero] anni dopo, [ciò di cui vai fiero].\n\nGrazie di far parte di questa storia. 🙏');
  P('coulisses','tous','I nostri valori, sul serio',
'Noi non facciamo [pratica comune del settore]. Mai. 🙅\n\nPerché? Perché [convinzione].\n\nInvece [il tuo modo di lavorare], anche se ci costa [contropartita].\n\nÈ una scelta. E per te, conta?');
  P('temoignage','tous','Recensione cliente',
'⭐⭐⭐⭐⭐\n«[Citazione reale del cliente]»\n— [Nome], [città / contesto]\n\nGrazie [nome]! Messaggi così sono la nostra benzina. 🔋\n\nAnche tu vuoi [azione]? Link in bio.');
  P('temoignage','tous','Caso cliente',
'📂 Caso cliente: [nome / azienda]\n\n🎯 L’esigenza: [esigenza]\n🛠️ Cosa abbiamo fatto: [soluzione]\n📈 Il risultato: [risultato concreto]\n\n«[Breve citazione]»\n\nHai un’esigenza simile? Scrivici.');
  P('lancement','tous','Novità',
'🆕 È ARRIVATO!\n\n[Nome della novità]: [cos’è in una frase].\n\nPerché l’abbiamo creato: [esigenza del cliente].\nCosa cambia per te: [beneficio].\n\n📅 Dal [data] · [prezzo se noto]\n👉 [Dove acquistarlo / prenotarlo]');
  P('lancement','tous','Teaser',
'Qualcosa bolle in pentola… 👀\n\nIndizio: [indizio misterioso].\n\nAppuntamento il [data] alle [ora].\nLe tue ipotesi nei commenti 👇');
  P('evenement','tous','Annuncio evento',
'📅 [Data] · 📍 [Luogo] · 🕒 [Ora]\n\n[Nome dell’evento]: [promessa in una frase].\n\nIn programma:\n• [momento clou 1]\n• [momento clou 2]\n• [momento clou 3]\n\n[Gratis / Posti limitati] → [come iscriversi]');
  P('evenement','tous','Chiusura / orari',
'📢 Info utili\n\n[Nome] sarà [chiuso / aperto con orari speciali] dal [data] al [data].\n\n🕒 [Nuovi orari]\n\nCi rivediamo il [data]! Grazie per la comprensione. 🙏');
  P('evenement','tous','Festa / stagione',
'[Festa / stagione] è alle porte! [Emoji]\n\nPer l’occasione: [offerta, prodotto o iniziativa speciale].\n\nDisponibile dal [data] al [data], fino a esaurimento scorte.\n\nE tu come festeggi? 👇');
  P('fidelite','tous','Grazie clienti',
'[Numero] [clienti / ordini / anni]. 🥹\n\nVolevamo solo dirvi GRAZIE.\n\nA chi torna, a chi ci consiglia, a chi ci scrive due righe gentili.\n\nPer festeggiare: [regalo / sconto / sorpresa].');
  P('fidelite','tous','Giveaway',
'🎁 GIVEAWAY 🎁\n\nIn palio per te [premio preciso]!\n\nPer partecipare:\n1️⃣ Segui @[account]\n2️⃣ Metti like a questo post\n3️⃣ Tagga [numero] amici/amiche nei commenti\n\nEstrazione il [data]. In bocca al lupo!\n\nGiveaway non sponsorizzato né gestito da [social network]. Il vincitore sarà contattato in DM.');
  P('fidelite','tous','Programma fedeltà',
'Passi spesso da noi? Ce ne siamo accorti. 😉\n\nNovità: [come funziona la tessera / il programma].\n➡️ [premio concreto] dopo [numero] [acquisti / visite].\n\nChiedi la tua tessera alla prossima visita!');
  P('recrutement','tous','Offerta di lavoro',
'🚀 CERCHIAMO: [ruolo]\n\n📍 [Luogo] · [Tipo di contratto] · [Orari]\n\nCosa farai: [mansioni in 2 righe]\nCosa cerchiamo: [qualità, non per forza titoli di studio]\nCosa offriamo: [ambiente, vantaggi, crescita]\n\n📩 DM o [email]. Condividi, potrebbe aiutare qualcuno!');

  /* =================================================================== RISTORANTE / BAR / PANETTERIA */
  V('vente','resto','Il piatto signature','20 s',
    'Il piatto che ci ordinate di più.','primo piano che fuma / cola',
    ['(3–10 s) [Impiattamento in primo piano] «[Nome del piatto]: [ingredienti chiave, cottura].»','(10–16 s) [La prima forchettata / reazione] «Fatto in casa, ogni [giorno / mattina].»'],
    'Prenota il tuo tavolo: link in bio.');
  V('coulisses','resto','Le 6 del mattino in cucina','30 s',
    'Sono le 6. Il ristorante dorme, noi no.','ora in sovrimpressione',
    ['(3–12 s) [Arrivo dei prodotti, cassette] «I [prodotti] arrivano da [produttore], a [distanza].»','(12–24 s) [Preparazioni: taglio, salsa, impasto] «Tutto preparato qui, stamattina.»','(24–27 s) [Sala pronta, luci]'],
    'Ti teniamo un tavolo per pranzo?');
  V('engagement','resto','Indovina il piatto','15 s',
    'Indovina il piatto prima della fine.','primi piani strettissimi',
    ['(2–11 s) [5 ingredienti in primissimo piano, 2 s ciascuno]','(11–13 s) [Rivelazione del piatto]'],
    'L’avevi indovinato? Risposta sincera nei commenti 😄');
  V('fidelite','resto','Il menu della settimana','20 s',
    'È uscito il menu della settimana!','MENU + giorni',
    ['(3–16 s) [Un’inquadratura per piatto, 3 s ciascuna] «Lunedì [piatto], martedì [piatto]…»'],
    'Quale ti tenta? Prenota al [telefono].');
  P('vente','resto','Piatto del giorno',
'🍽️ Oggi alla lavagna:\n\n[Antipasto]\n[Piatto]\n[Dolce]\n\n[Menu fisso]: [prezzo] €\n\nFatto in casa con [prodotto locale] di [produttore]. 🌿\n📞 [Telefono] per prenotare · 📍 [indirizzo]');
  P('coulisses','resto','Il produttore',
'Ecco [nome], che ci porta [prodotto] da [tempo]. 👨‍🌾\n\n[La sua azienda agricola / il suo laboratorio] è a [distanza] da qui. [Dettaglio che mostra la qualità.]\n\nÈ grazie a lui che il nostro [piatto] ha quel sapore.\n\nAdoriamo lavorare a km zero. E per te, conta?');
  P('engagement','resto','Dolce o salato',
'Colazione: sei più… 🥐 o 🍳?\n\nNoi abbiamo deciso: [la tua preferenza + specialità].\n\nRispondi con un’emoji 👇');
  P('evenement','resto','Serata speciale',
'🎉 [Giorno] sera: [nome della serata]!\n\n[Menu / intrattenimento / musica] dalle [ora].\n[Prezzo] a persona, [bevanda inclusa o no].\n\nSolo [numero] posti: prenotazione obbligatoria al [telefono].');

  /* =================================================================== BELLEZZA / PARRUCCHIERE / ESTETICA */
  V('vente','beaute','Trasformazione in 15 s','15 s',
    'È arrivata così…','PRIMA',
    ['(2–10 s) [Passaggi in timelapse: taglio, colore, piega]','(10–13 s) [Rivelazione, la cliente si gira / si guarda] «…ed è uscita così.»'],
    'Prenota la tua trasformazione: link in bio.');
  V('pedagogie','beaute','L’errore che rovina i tuoi capelli','25 s',
    'Smetti di fare questo dopo lo shampoo.','❌ + gesto da evitare',
    ['(3–12 s) «Strofinarli con l’asciugamano [danno].»','(12–20 s) «Invece: [gesto giusto] e [prodotto / trucco].»'],
    'Salva e mandalo all’amica che strofina 😄');
  V('engagement','beaute','Che colore quest’autunno?','15 s',
    'Ramato, caramello o castano ghiaccio?','3 colori, numeri 1-2-3',
    ['(3–12 s) [3 risultati reali, 3 s ciascuno, numerati]'],
    'Vota 1, 2 o 3 nei commenti!');
  V('coulisses','beaute','Il trattamento visto da dentro','30 s',
    'Cosa succede durante il tuo trattamento [nome del trattamento].','atmosfera soft, luce soffusa',
    ['(3–24 s) [Fasi del trattamento, mani, prodotti, relax] «Prima [fase], poi [fase] e infine [fase].»','(24–27 s) «[Durata] tutta per te.»'],
    'Regalalo o regalatelo: prenota dal link in bio.');
  P('vente','beaute','Posti liberi',
'✂️ Ci sono ancora posti liberi questa settimana!\n\n[Giorno]: [orari]\n[Giorno]: [orari]\n\nTrattamento del momento: [trattamento] a [prezzo] €.\n\n📲 Prenota online (link in bio) o al [telefono].');
  P('pedagogie','beaute','Routine in 3 gesti',
'La tua routine [capelli / viso] della sera in 3 gesti 🌙\n\n1. [Gesto 1 + tipo di prodotto]\n2. [Gesto 2]\n3. [Gesto 3]\n\nTempo totale: [minuti] min. Risultato: [beneficio].\n\nSalvala per stasera ✨');
  P('temoignage','beaute','Reazione della cliente',
'La sua reazione quando si è vista allo specchio… 🥹\n\n«[Citazione]»\n\n[Servizio realizzato] da [nome del parrucchiere / dell’estetista].\n\nGrazie per la fiducia [nome della cliente] 💛');
  P('fidelite','beaute','Gift card',
'🎁 Non sai cosa regalare?\n\nLe nostre gift card sono disponibili da [importo] a [importo] €, valide [durata] su tutti i nostri servizi.\n\nDa ritirare in salone o da richiedere in DM. Il regalo che fa sempre centro. 💝');

  /* =================================================================== ARTIGIANO / EDILIZIA / RISTRUTTURAZIONE */
  V('vente','artisan','Il cantiere prima / dopo','30 s',
    'Questa [stanza] era ferma al [anno].','PRIMA + anno',
    ['(3–12 s) [Stato iniziale, dettagli rovinati] «Il problema: [problema].»','(12–24 s) [Lavori in timelapse] «[Durata] di lavori: [interventi].»','(24–27 s) [Campo largo a lavoro finito] «Ed ecco adesso.»'],
    'Preventivo gratuito: DM o link in bio.');
  V('pedagogie','artisan','I segnali che serve un intervento','30 s',
    'Se vedi questo in casa tua, chiama un professionista.','zoom sul difetto',
    ['(3–12 s) «Segnale n°1: [segnale]. Significa [causa].»','(12–20 s) «Segnale n°2: [segnale].»','(20–26 s) «Più aspetti, più [conseguenza e costo].»'],
    'Hai un dubbio? Mandaci una foto in DM, ti diciamo gratis cosa ne pensiamo.');
  V('coulisses','artisan','Il gesto del mestiere','15 s',
    '[Anni] di esperienza in questo gesto.','primo piano mani / attrezzo',
    ['(2–12 s) [Gesto tecnico in tempo reale, audio naturale, primissimo piano]'],
    'Seguici se ami il lavoro fatto bene.');
  V('temoignage','artisan','Il cliente fa il tour','30 s',
    '«La casa non si riconosce più.»','citazione del cliente',
    ['(3–25 s) [Il cliente mostra la casa e commenta] «Cosa volevamo: [esigenza]. Cosa abbiamo ottenuto: [risultato]. Cosa abbiamo apprezzato: [tempi, pulizia, consigli].»'],
    'Il prossimo progetto è il tuo? Preventivo gratuito.');
  P('vente','artisan','Preventivo gratuito',
'🏠 Stai pensando a [tipo di lavori]?\n\n✅ Preventivo gratuito entro [tempi]\n✅ [Assicurazione / certificazione se prevista]\n✅ Interventi in zona [zona]\n\nVeniamo da te, misuriamo, ti spieghiamo tutto. Senza impegno.\n\n📞 [Telefono] · 📩 DM');
  P('pedagogie','artisan','Bonus e agevolazioni',
'💶 Buono a sapersi: i tuoi lavori di [tipo] possono essere in parte agevolati.\n\n[Agevolazione 1, condizioni generali]\n[Agevolazione 2]\n\n⚠️ Importi e condizioni cambiano spesso: verifichiamo insieme cosa vale per la tua situazione.\n\nDomande? Scrivici in DM.');
  P('coulisses','artisan','Cantiere in corso',
'🚧 Cantiere in corso a [città]\n\nGiorno [n] di [totale]: [fase del giorno].\n\nCosa facciamo oggi e perché è importante: [spiegazione semplice].\n\nAlla prossima puntata! 👷');
  P('temoignage','artisan','Cantiere consegnato',
'✅ Cantiere consegnato a [città]!\n\n[Tipo di lavori] in [durata].\n\n«[Citazione del cliente]»\n\nGrazie [nome] per la fiducia. Foto prima / dopo scorrendo ➡️');

  /* =================================================================== NEGOZIO / BOUTIQUE */
  V('vente','commerce','Nuovi arrivi','15 s',
    'Nuovi arrivi, e non ce ne sarà per tutti.','NUOVO',
    ['(2–12 s) [Unboxing veloce, 4–5 articoli, 2 s ciascuno, prezzo in sovrimpressione se certo]'],
    'Passa in negozio o prenota in DM.');
  V('vente','commerce','3 idee regalo sotto i [prezzo]','30 s',
    '3 idee regalo sotto i [prezzo] €.','prezzo massimo in grande',
    ['(3–11 s) «Per [profilo 1]: [articolo], [prezzo].»','(11–19 s) «Per [profilo 2]: [articolo].»','(19–26 s) «E per [profilo 3]: [articolo]. Confezione regalo inclusa.»'],
    'Quale ti salva la vita? Commenta 1, 2 o 3.');
  V('coulisses','commerce','Preparo il tuo ordine','20 s',
    'Sto preparando il tuo ordine, [nome del cliente]!','ASMR packaging',
    ['(2–17 s) [Confezione curata, carta, nastro, bigliettino scritto a mano, audio naturale]'],
    'Ordina online: link in bio.');
  V('engagement','commerce','Il look del giorno','15 s',
    'Un capo, tre modi per indossarlo.','1 → 3',
    ['(2–13 s) [3 outfit con lo stesso capo, transizione a ogni schiocco di dita]'],
    'Il tuo preferito: 1, 2 o 3?');
  P('vente','commerce','Nuovi arrivi',
'📦 Nuovi arrivi freschissimi!\n\n[Prodotto / brand]: [descrizione breve e sensoriale].\nTaglie / modelli: [dettagli]\nPrezzo: [prezzo]\n\nQuantità limitate. Prenota in DM, te lo teniamo da parte 24 h. 🛍️');
  P('fidelite','commerce','Saldi / promo',
'🏷️ [Evento promo] dal [data] al [data]\n\n-[x] % su [reparto / selezione]\n[Bonus extra: 2° articolo, omaggio…]\n\nIn negozio [e online]. I pezzi migliori vanno via il primo giorno. 😉');
  P('coulisses','commerce','Perché questo prodotto',
'Perché abbiamo scelto di vendere [prodotto / brand]? 🤔\n\n• [Motivo 1: qualità, lavorazione]\n• [Motivo 2: etica, made in Italy / locale]\n• [Motivo 3: feedback dei clienti]\n\nVendiamo solo quello che useremmo noi per primi.');
  P('engagement','commerce','Aiutaci a scegliere',
'Siamo indecisi per il prossimo ordine… aiutaci tu! 🙏\n\n[Opzione A] o [Opzione B]?\n\nIl più votato nei commenti arriva in negozio il [data].');

  /* =================================================================== SALUTE / BENESSERE / TERAPEUTA */
  V('pedagogie','sante','Un esercizio semplice','30 s',
    'Un esercizio di [durata] per alleviare [zona / tensione].','nome dell’esercizio',
    ['(3–20 s) [Dimostrazione lenta] «Mettiti [posizione]. Respira [indicazione]. Ripeti [numero] volte.»','(20–27 s) «Se senti dolore, fermati e parlane con un professionista.»'],
    'Salvalo per farlo stasera.');
  V('pedagogie','sante','Come si svolge una seduta','30 s',
    'Non hai mai provato [disciplina]? Ecco come funziona.','lo studio, atmosfera calma',
    ['(3–12 s) «Si comincia con [colloquio / valutazione].»','(12–22 s) «Poi [svolgimento della seduta].»','(22–27 s) «Una seduta dura [durata].»'],
    'Hai una domanda prima di venire? Scrivimi.');
  V('engagement','sante','Mito sulla salute','25 s',
    '«[Luogo comune sulla salute].» Vero o falso?','VERO / FALSO',
    ['(3–20 s) «[Risposta sfumata e con fonti]. Quello che conta davvero: [consiglio].»'],
    'Quale altro luogo comune vuoi che sfati?');
  V('coulisses','sante','Perché questo lavoro','30 s',
    'Faccio [professione] da [anni]. Ecco perché.','in camera, tono accogliente',
    ['(3–25 s) «[Scintilla personale], [cosa ami dell’accompagnare le persone], [cosa ti tocca dei tuoi pazienti].»'],
    'Prenditi cura di te. Se ti serve, prenota online.');
  P('pedagogie','sante','Consiglio benessere',
'🌿 Il consiglio della settimana\n\n[Consiglio semplice e applicabile]\n\nPerché aiuta: [spiegazione in 2 frasi].\n\n⚠️ Questo consiglio non sostituisce il parere medico. Nel dubbio, consulta un professionista.\n\nSalvalo per ricordartene 💚');
  P('vente','sante','Prenota un appuntamento',
'📅 Si liberano dei posti [periodo].\n\n[Tipo di seduta] · [durata] · [tariffa]\n[Rimborso assicurazione sanitaria se previsto]\n\nPrenota online (link in bio) o al [telefono].');
  P('coulisses','sante','Lo studio',
'Benvenuto/a nello studio 🤍\n\nUno spazio pensato per farti sentire [al sicuro / rilassato/a] appena varchi la porta.\n\n📍 [Indirizzo] · [come arrivare, parcheggio, accessibilità]\n\nA presto.');
  P('engagement','sante','Check-in',
'Come stai, davvero, questa settimana? 🫶\n\nRispondi con un’emoji:\n😌 tutto bene\n😐 così così\n😮‍💨 esausto/a\n\nQualunque sia la risposta, oggi concediti [piccolo gesto di cura].');

  /* =================================================================== COACH / SPORT / FORMAZIONE */
  V('pedagogie','coach','L’esercizio che tutti sbagliano','25 s',
    'Fai [esercizio] così? Stop.','❌ esecuzione sbagliata',
    ['(3–12 s) [Esecuzione sbagliata] «Qui [errore e rischio].»','(12–21 s) [Esecuzione corretta] «Meglio così: [indicazione 1], [indicazione 2].»'],
    'Salva e provalo al prossimo allenamento.');
  V('temoignage','coach','I progressi','30 s',
    '[Tempo] fa, [nome] non riusciva a [azione].','PRIMA, data',
    ['(3–15 s) [Immagini dell’inizio]','(15–25 s) [Oggi] «Cosa ha funzionato: [costanza, metodo].»'],
    'Pronto/a a iniziare? Lezione di prova in bio.');
  V('engagement','coach','Sfida di 7 giorni','20 s',
    'Sfida: [azione] per 7 giorni. Ci stai?','SFIDA 7 GIORNI',
    ['(3–15 s) «Ogni giorno [azione precisa e realistica]. Pubblico la mia versione ogni giorno nelle storie.»'],
    'Commenta «CI STO» per partecipare.');
  V('vente','coach','La lezione di prova','20 s',
    'Sei indeciso/a? Vieni a provare.','PROVA [gratuita / prezzo]',
    ['(3–15 s) «In [durata] facciamo [valutazione / lezione conoscitiva] e senti [cosa proveranno]. Zero impegno.»'],
    'Prenota la tua prova: link in bio.');
  P('pedagogie','coach','Allenamento express',
'💪 Allenamento express: [durata] min, senza attrezzi\n\n1. [Esercizio] — [ripetizioni]\n2. [Esercizio] — [ripetizioni]\n3. [Esercizio] — [ripetizioni]\n\n[Numero] giri. Recupero [secondi] s.\n\nSalvalo e scrivimi nei commenti quando l’hai fatto ✅');
  P('engagement','coach','Motivazione',
'Promemoria del [giorno]: [frase motivazionale personale, non una citazione copiata].\n\nNon devi essere perfetto/a. Devi solo [azione minima] oggi.\n\nLa tua piccola vittoria della settimana? 👇');
  P('vente','coach','Iscrizioni aperte',
'🚀 Sono aperte le iscrizioni a [programma / sessione]!\n\nPer chi: [profilo]\nDurata: [durata]\nFormato: [in presenza / online]\nCosa porti a casa: [risultato]\n\n[Numero] posti. Si parte il [data].\n👉 Link in bio');
  P('temoignage','coach','La vittoria di un allievo',
'🏆 Bravo/a [nome]!\n\n[Obiettivo raggiunto] dopo [tempo] di lavoro.\n\nCosa ho ammirato: [qualità della persona].\n\nArriverà anche il tuo turno. Quando iniziamo?');

  /* =================================================================== IMMOBILIARE */
  V('vente','immo','Visita in 30 secondi','30 s',
    '[Tipo di immobile], [superficie] m², a [quartiere / città].','prezzo + superficie',
    ['(3–24 s) [Visita fluida: ingresso, soggiorno, cucina, camere, esterno] «Il colpo di fulmine: [punto forte].»','(24–27 s) «[Prezzo] · [classe energetica]»'],
    'Visite su appuntamento: scrivici in DM.');
  V('pedagogie','immo','Quanto vale la tua casa?','25 s',
    'La tua casa vale davvero quanto pensi?','€ ?',
    ['(3–20 s) «I 3 criteri che contano di più a [città]: [criterio 1], [criterio 2], [criterio 3].»'],
    'Valutazione gratuita in 48 h: link in bio.');
  V('coulisses','immo','Una giornata da agente','30 s',
    'Cosa fa davvero un agente immobiliare.','giornata in timelapse',
    ['(3–25 s) [Visite, foto, appuntamento dal notaio, telefonate] «Una vendita sono in media [numero] visite e [tempo].»'],
    'Domande sulla vendita? Scrivile nei commenti.');
  V('temoignage','immo','Consegna delle chiavi','15 s',
    'Il momento più bello del nostro lavoro.','🔑',
    ['(2–12 s) [Consegna delle chiavi, sorrisi, con il consenso dei clienti]'],
    'Congratulazioni [nomi]! A chi tocca adesso?');
  P('vente','immo','Nuovo immobile',
'🏡 IN ESCLUSIVA · [Città / quartiere]\n\n[Tipo] · [superficie] m² · [locali] locali\n✨ [Punto forte 1] · [Punto forte 2] · [Punto forte 3]\n\n[Prezzo] € [provvigione a carico di …]\nClasse energetica: [classe]\n\n📩 Visite su appuntamento in DM.');
  P('pedagogie','immo','Consiglio per chi vende',
'Vendi casa? 3 cose da fare PRIMA delle foto 📸\n\n1. [Consiglio 1]\n2. [Consiglio 2]\n3. [Consiglio 3]\n\nUna casa presentata bene si vende [prima / meglio].\n\nValutazione gratuita: link in bio.');
  P('temoignage','immo','Venduto',
'🔑 VENDUTO!\n\n[Tipo di immobile] a [città], venduto in [tempo].\n\n«[Citazione dei venditori]»\n\nGrazie [nomi] per la fiducia. Vuoi vendere? Parliamone.');
  P('engagement','immo','Colpo di fulmine',
'Tu quale scegli? 🤔\n\n🅰️ [Immobile A: punto forte]\n🅱️ [Immobile B: punto forte]\n\nStesso budget: [budget]. Vota nei commenti!');

  /* =================================================================== SERVIZI / B2B / FREELANCE */
  V('pedagogie','services','L’errore che costa caro alle aziende','30 s',
    'Questo errore costa [importo / tempo] alla maggior parte dei [target].','💸',
    ['(3–13 s) «L’errore: [errore].»','(13–23 s) «Perché è grave: [conseguenza in numeri se certa].»','(23–27 s) «La soluzione semplice: [soluzione].»'],
    'Scrivi «AUDIT» in DM, analizziamo il tuo caso.');
  V('vente','services','Come lavoro','30 s',
    'Lavorare con me funziona così.','passaggi 1-2-3',
    ['(3–12 s) «1. [Call conoscitiva / audit].»','(12–20 s) «2. [Proposta / realizzazione].»','(20–27 s) «3. [Consegna / follow-up]. Tempi medi: [durata].»'],
    'Prima call gratuita: link in bio.');
  V('temoignage','services','Risultato cliente','25 s',
    '[Risultato in numeri] per [tipo di cliente].','il numero',
    ['(3–20 s) «Il punto di partenza: [situazione]. Cosa abbiamo fatto: [azione]. Il risultato: [risultato].»'],
    'Vuoi lo stesso? Scrivimi in DM.');
  V('coulisses','services','La mia scrivania, i miei strumenti','20 s',
    'I [numero] strumenti senza cui non lavoro.','postazione di lavoro',
    ['(3–17 s) [Un’inquadratura per strumento] «[Strumento]: per [utilizzo].»'],
    'E tu, qual è il tuo strumento indispensabile?');
  P('pedagogie','services','Post LinkedIn: lezione imparata',
'[Situazione di partenza in una frase d’impatto].\n\n[Tempo] fa, [cosa è successo].\n\nCosa ho imparato:\n→ [lezione 1]\n→ [lezione 2]\n→ [lezione 3]\n\nE tu, quale lezione ti è costata di più?');
  P('vente','services','Offerta di servizio',
'Sei [target] e [problema]?\n\nAiuto [target] a [risultato] grazie a [metodo], in [tempo].\n\nCosa ottieni:\n✔️ [deliverable 1]\n✔️ [deliverable 2]\n✔️ [deliverable 3]\n\n[Numero] posti questo mese. Call conoscitiva gratuita: link nei commenti.');
  P('temoignage','services','Case study LinkedIn',
'[Cliente] aveva [problema].\n\nIn [tempo] abbiamo:\n1. [azione]\n2. [azione]\n3. [azione]\n\nRisultato: [risultato misurabile].\n\nLa cosa più importante non era [quello che si pensa], ma [vero fattore chiave].\n\nTi ci ritrovi? Parliamone.');
  P('coulisses','services','Il dietro le quinte di un progetto',
'Quello che i miei clienti non vedono (ed è normale) 👇\n\n• [Fase invisibile 1]\n• [Fase invisibile 2]\n• [Fase invisibile 3]\n\nÈ l’80 % del lavoro per il 20 % di ciò che si vede. Ed è lì che si gioca la qualità.');


  /* =================================================================== PROMPT IMMAGINE — TUTTI I SETTORI */
  I('produit','tous','Packshot in studio su fondo tinta unita',
'Foto professionale di [prodotto], appoggiato al centro su un fondo tinta unita [colore del brand], luce da studio morbida con una leggera ombra proiettata a terra, riflessi nitidi sul materiale, messa a fuoco perfetta sul logo, molto spazio vuoto in alto per aggiungere un testo. Stile catalogo di alta gamma, formato quadrato.');
  I('produit','tous','Prodotto in contesto',
'[Prodotto] usato da una persona in [ambiente di vita realistico: cucina, ufficio, bagno…], luce naturale di tarda mattinata da una finestra, mani visibili mentre [gesto], sfondo leggermente sfocato, colori caldi e naturali. Foto autentica in stile lifestyle, non in posa. Formato verticale 4:5.');
  I('produit','tous','Flat lay dall’alto',
'Composizione flat lay vista dall’alto: [prodotto principale] al centro, circondato da [da 3 a 5 oggetti o ingredienti correlati] disposti con cura, su una superficie in [legno chiaro / marmo / lino], ombre morbide, palette [colori], molta aria tra gli oggetti. Stile da rivista, pulito. Formato quadrato.');
  I('produit','tous','Levitazione dinamica',
'[Prodotto] che fluttua a mezz’aria, circondato da [elementi che lo evocano: schizzi, frutta, foglie, polvere] congelati in pieno movimento, sfondo sfumato [colore], illuminazione contrastata, nitidissimo, effetto pubblicità premium. Formato verticale 9:16.');
  I('produit','tous','Linea di prodotti allineata',
'I [numero] prodotti della linea [nome] allineati da sinistra a destra su una mensola minimal, dal più piccolo al più grande, sfondo [colore], illuminazione uniforme, etichette leggibili, resa fotografica e-commerce pulita. Formato orizzontale 16:9.');
  I('pub','tous','Visual promo con spazio per il testo',
'Visual pubblicitario per [offerta]: [prodotto o servizio] in evidenza sulla metà destra dell’immagine, la metà sinistra è un campo pieno [colore] vuoto per inserire un titolo, atmosfera energica, colori vivaci del brand, luce nitida. Non scrivere testo nell’immagine. Formato 4:5.');
  I('pub','tous','Prima / dopo affiancati',
'Immagine divisa verticalmente in due: a sinistra [stato prima, spento e realistico], a destra [stato dopo, nitido e luminoso], stessa inquadratura e stessa angolazione da entrambi i lati, sottile linea bianca al centro, illuminazione identica. Foto realistica, nessun ritocco esagerato. Formato quadrato.');
  I('pub','tous','Locandina evento',
'Locandina per [evento]: scena che illustra [atmosfera dell’evento] in primo piano, ampio spazio libero in alto per il titolo e in basso per la data, colori [palette], stile [grafico moderno / rétro / elegante]. Nessun testo generato nell’immagine. Formato verticale 9:16.');
  I('pub','tous','Sfondo storia con area di testo',
'Sfondo verticale per storia Instagram: [texture o scena legata al brand] sfocata e morbida, un grande rettangolo chiaro semitrasparente al centro per scriverci un messaggio, colori [palette del brand], atmosfera calma e leggibile. Formato 9:16.');
  I('lieu','tous','Facciata accogliente',
'Facciata di [tipo di attività] [nome] al tramonto, vetrina illuminata dall’interno con luce calda, insegna ben visibile, marciapiede pulito, qualche passante sfocato, cielo blu crepuscolare. Foto di architettura realistica e accogliente. Formato 4:5.');
  I('lieu','tous','Interno accogliente',
'Interno di [luogo: negozio, salone, studio, laboratorio] vuoto e perfettamente in ordine, luce naturale morbida, piante verdi, materiali [legno, lino, metallo], prospettiva grandangolare dall’ingresso, atmosfera accogliente e premium. Foto d’interni realistica. Formato orizzontale 3:2.');
  I('personnes','tous','Ritratto del titolare',
'Ritratto professionale di [descrizione: età, stile] nel suo [luogo di lavoro], sorridente, sguardo in camera, abbigliamento [abbigliamento], sfondo del locale leggermente sfocato, luce laterale morbida, atmosfera autentica e sicura di sé. Foto ritratto realistica, obiettivo 85 mm. Formato 4:5.');
  I('personnes','tous','Il team all’opera',
'Foto di [numero] persone del team mentre [attività del mestiere] insieme, momento naturale e complice, qualche sorriso, luce naturale, colori caldi, inquadratura da reportage colta al volo. Foto realistica, non in posa. Formato orizzontale 3:2.');
  I('personnes','tous','Mani al lavoro',
'Primo piano di mani esperte mentre [gesto preciso del mestiere], attrezzi e materiale ben visibili, profondità di campo molto ridotta, luce radente che rivela le texture, atmosfera artigianale e curata. Formato quadrato.');
  I('saison','tous','Atmosfera di stagione',
'[Prodotto o luogo] decorato per [stagione o festa: Natale, estate, rientro di settembre, San Valentino…], elementi decorativi discreti ed eleganti ([decorazioni]), luce [calda / fredda], colori di stagione, atmosfera festosa ma di alta gamma. Formato 4:5.');
  I('saison','tous','Sfondo festivo per annuncio',
'Sfondo grafico festivo per [festa], [elementi: coriandoli, festoni, fiocchi di neve, foglie] sui bordi, centro libero e uniforme per scriverci un annuncio, colori [palette], resa nitida e moderna. Nessun testo. Formato quadrato.');

  /* =================================================================== PROMPT IMMAGINE — PER SETTORE */
  I('produit','resto','Piatto signature in primo piano',
'Primo piano invitante di [piatto], impiattato in un piatto [stile del piatto] su un tavolo di legno, leggero vapore, salsa lucida, erbe fresche, luce naturale laterale, sfondo di sala ristorante sfocato e caldo. Foto food professionale. Formato 4:5.');
  I('produit','resto','Tavola condivisa dall’alto',
'Vista dall’alto di una tavola imbandita con [piatti e bevande] da condividere tra amici, mani che si servono, tovaglia in [materiale], luce morbida, colori caldi, atmosfera conviviale e generosa. Foto food lifestyle. Formato quadrato.');
  I('ambiance','resto','Dehors al tramonto',
'Dehors di [ristorante / bar] al tramonto, tavoli apparecchiati, lucine accese, bicchieri che brillano, qualche cliente sfocato che ride, luce dorata. Foto d’atmosfera realistica. Formato 4:5.');
  I('produit','resto','Lievitati sul bancone',
'Bancone di panetteria pieno di [cornetti e lievitati / pane] dorati e croccanti, primo piano sulla sfogliatura, luce del mattino, un velo di farina sul legno, atmosfera artigianale. Formato 4:5.');
  I('produit','beaute','Flacone skincare premium',
'[Prodotto di bellezza] appoggiato su una pietra [colore] bagnata, gocce d’acqua sul flacone, foglie di [pianta] intorno, luce morbida e diffusa, palette [colori], estetica spa di alta gamma. Formato 4:5.');
  I('personnes','beaute','Risultato in salone',
'Ritratto di spalle e di tre quarti di una cliente con [taglio / colore realizzato], capelli lucenti e in movimento, luce morbida da salone, sfondo del salone sfocato, resa realistica e naturale. Formato 4:5.');
  I('lieu','beaute','Cabina relax',
'Cabina estetica vuota e pronta: lettino da massaggio con asciugamani piegati, candele accese, piante, luce soffusa calda, materiali naturali, atmosfera zen e pulita. Formato 4:5.');
  I('produit','artisan','Lavoro finito',
'Foto di [lavoro: cucina, bagno, terrazzo, mobile] finito, linee dritte, finiture pulite, luce naturale, ambiente in ordine e allestito con semplicità, prospettiva grandangolare. Foto d’architettura d’interni realistica. Formato orizzontale 3:2.');
  I('personnes','artisan','Artigiano in cantiere',
'[Mestiere] in abiti da lavoro puliti in un cantiere di [tipo di lavori], concentrato su [gesto], attrezzi professionali, casco o dispositivi di sicurezza, luce diurna, foto reportage realistica e valorizzante. Formato 4:5.');
  I('produit','commerce','Vetrina della novità',
'[Articolo] allestito nella vetrina del negozio, espositore elegante, accessori abbinati, illuminazione calda da vetrina, leggeri riflessi sul vetro, atmosfera da shopping in centro città. Formato 4:5.');
  I('produit','commerce','Outfit indossato all’aperto',
'Persona che indossa [capo / accessorio] in una strada di [tipo di città], posa naturale mentre cammina, luce di tardo pomeriggio, sfondo sfocato, stile foto di moda lifestyle. Formato 4:5.');
  I('lieu','sante','Studio rassicurante',
'Studio di [disciplina] luminoso e rassicurante, poltrona comoda, piante, colori tenui [palette], luce naturale, nessuna persona, sensazione di calma e pulizia. Formato orizzontale 3:2.');
  I('ambiance','sante','Visual benessere',
'Scena rilassante legata al benessere: [elemento: tazza di tisana, ciottoli, foglia, acqua calma] in primo piano, luce morbida del mattino, palette [colori], molto spazio vuoto per un testo. Formato quadrato.');
  I('personnes','coach','Allenamento sotto sforzo',
'Persona nel pieno di [esercizio] in [palestra / all’aperto], leggero sudore, muscoli in tensione, luce contrastata, inquadratura dinamica dal basso, atmosfera motivante ed energica. Foto sportiva realistica. Formato 4:5.');
  I('pub','coach','Visual sfida sportiva',
'Visual sportivo per una sfida di [durata]: attrezzatura da [sport] appoggiata a terra (borraccia, asciugamano, scarpe), luce del mattino, sfondo [colore], ampio spazio libero in alto per un titolo. Nessun testo. Formato 4:5.');
  I('lieu','immo','Soggiorno luminoso',
'Soggiorno di [tipo di immobile] inondato di luce naturale, grandi finestre, arredamento neutro e moderno, prospettiva grandangolare dall’ingresso, linee verticali dritte, resa da foto immobiliare professionale. Formato orizzontale 3:2.');
  I('lieu','immo','Home staging virtuale',
'La stessa stanza [descrizione della stanza vuota] arredata in stile [scandinavo / contemporaneo / boho]: divano, tappeto, lampade, piante, luce naturale, resa realistica fedele alle pareti e alle finestre originali. Formato orizzontale 3:2.');
  I('pub','services','Visual competenza',
'Immagine concettuale per [servizio]: scrivania minimal con laptop, taccuino e caffè, schermo che mostra [tipo di tabella o grafico], luce naturale, palette [colori del brand], atmosfera professionale e serena. Formato 4:5.');
  I('personnes','services','Incontro con il cliente',
'Due persone in un incontro di lavoro attorno a un tavolo, conversazione sorridente, documenti e computer, luce naturale da ufficio, sfondo sfocato, atmosfera di fiducia. Foto corporate realistica. Formato orizzontale 3:2.');

  /* =================================================================== PROMPT VIDEO — TUTTI I SETTORI */
  W('produit','tous','Rotazione prodotto 360°','5 s',
'[Prodotto] appoggiato su una base che ruota lentamente su se stessa, sfondo tinta unita [colore], luce da studio morbida con riflessi che scorrono sul materiale, camera fissa leggermente dall’alto, movimento fluido e regolare. Formato 9:16.');
  W('produit','tous','Carrellata rivelazione','5 s',
'La camera avanza lentamente da un primo piano sfocato su [dettaglio del prodotto] fino a rivelare [prodotto] per intero, messa a fuoco progressiva, luce calda laterale, pulviscolo che fluttua nella luce. Formato 9:16.');
  W('produit','tous','Prodotto in azione','5 s',
'Mani che [gesto: aprono, versano, applicano, montano] [prodotto] in primo piano, movimento naturale e preciso, luce naturale, sfondo sfocato di [luogo], camera fissa all’altezza del tavolo. Formato 9:16.');
  W('produit','tous','Ingredienti che cadono al rallentatore','5 s',
'[Ingredienti o elementi] cadono al rallentatore intorno a [prodotto] e rimbalzano leggermente, sfondo [colore], illuminazione contrastata, camera fissa, effetto pubblicità premium. Formato 9:16.');
  W('ambiance','tous','Atmosfera del locale','5 s',
'Lenta carrellata laterale in [luogo: negozio, sala, laboratorio] vuoto e perfettamente in ordine, luce morbida di fine giornata, piccole luci che brillano, profondità di campo ridotta, atmosfera calda e accogliente. Formato 9:16.');
  W('ambiance','tous','Apertura del mattino','5 s',
'Una mano gira il cartello «aperto» sulla porta a vetri di [attività], la luce del mattino entra nella stanza, camera fissa dall’interno, movimento naturale, atmosfera di inizio giornata. Formato 9:16.');
  W('personnes','tous','Accoglienza sorridente','5 s',
'[Persona] dietro il bancone alza lo sguardo, sorride e fa un piccolo cenno di saluto verso la camera, luce naturale morbida, sfondo di [luogo] sfocato, movimento naturale e caloroso. Formato 9:16.');
  W('personnes','tous','Gesto del mestiere al rallentatore','5 s',
'Primo piano al rallentatore di mani che [gesto preciso del mestiere], attrezzi e materiale ben visibili, luce radente che rivela le texture, camera fissa, atmosfera artigianale. Formato 9:16.');
  W('pub','tous','Prima → dopo in transizione','5 s',
'Inquadratura fissa di [luogo o oggetto] nello stato prima, poi una scia luminosa attraversa l’immagine da sinistra a destra e rivela lo stato dopo, stessa inquadratura, transizione fluida, resa realistica. Formato 9:16.');
  W('pub','tous','Zoom finale sul logo','5 s',
'La camera arretra dolcemente da [elemento del brand: insegna, shopper, grembiule, packaging] per rivelare la scena intorno, luce calda, movimento lento e sicuro, fine dell’inquadratura stabile per aggiungere un testo. Formato 9:16.');
  W('saison','tous','Atmosfera di festa','5 s',
'[Luogo o prodotto] decorato per [festa], lucine che brillano, [neve / coriandoli / petali] che cadono dolcemente, camera che avanza lentamente, atmosfera festosa e soft. Formato 9:16.');
  W('ambiance','tous','Time-lapse della giornata','5 s',
'Time-lapse di [luogo] dalla mattina alla sera, luce che passa dall’oro del giorno al blu della sera, sagome sfocate di clienti che vanno e vengono, camera fissa. Formato 9:16.');

  /* =================================================================== PROMPT VIDEO — PER SETTORE */
  W('produit','resto','Piatto fumante','5 s',
'Primo piano di [piatto] appena impiattato, vapore che sale dolcemente, un cucchiaio versa un filo di [salsa], luce calda laterale, sfondo di sala sfocato, camera fissa leggermente dall’alto. Formato 9:16.');
  W('produit','resto','Bicchiere che si riempie','5 s',
'[Bevanda] versata al rallentatore in un bicchiere [tipo], bollicine e cubetti di ghiaccio che girano, gocce di condensa, luce calda da bancone, camera fissa all’altezza del bicchiere. Formato 9:16.');
  W('coulisses','resto','Lo chef in cucina','5 s',
'Uno chef salta [ingredienti] in padella, fiamma viva, vapore, movimento rapido e controllato, cucina professionale sullo sfondo, luce contrastata, camera fissa di tre quarti. Formato 9:16.');
  W('produit','resto','Pane appena sfornato','5 s',
'Un fornaio sforna una teglia di [pane / lievitati] dorati, vapore caldo, crosta che scrocchia, luce aranciata del forno, camera fissa all’altezza del forno. Formato 9:16.');
  W('pub','beaute','Rivelazione del taglio','5 s',
'Una cliente si gira lentamente verso la camera scuotendo leggermente i capelli [taglio / colore], capelli lucenti in movimento, luce morbida da salone, sfondo sfocato, sorriso naturale. Formato 9:16.');
  W('produit','beaute','Texture skincare','5 s',
'Primo piano al rallentatore: una noce di [crema / siero] cade su una superficie di vetro e si stende dolcemente, texture vellutata, luce diffusa, sfondo [colore pastello], camera fissa. Formato 9:16.');
  W('ambiance','beaute','Momento di relax','5 s',
'Una persona sdraiata a occhi chiusi durante un trattamento viso, mani dell’estetista che massaggiano lentamente, candele e luce soffusa, camera che avanza molto lentamente. Formato 9:16.');
  W('coulisses','artisan','Attrezzo in azione','5 s',
'Primo piano di [attrezzo: levigatrice, cazzuola, sega, pennello] in azione su [materiale], polvere o trucioli che volano nella luce, mani con i guanti, luce diurna, camera fissa. Formato 9:16.');
  W('pub','artisan','Stanza finita','5 s',
'Lenta carrellata in [stanza ristrutturata] finita, luce naturale che entra dalla finestra, finiture pulite, pavimento in ordine, movimento di camera fluido dall’ingresso verso il fondo della stanza. Formato 9:16.');
  W('produit','commerce','Pacchetto regalo','5 s',
'Mani che incartano [articolo] in carta [colore] e annodano un nastro, primo piano dall’alto, gesti curati, luce morbida, bancone in legno, camera fissa. Formato 9:16.');
  W('produit','commerce','Sfilata di novità','5 s',
'Camera che scorre lentamente lungo uno stender o uno scaffale di [articoli] appena arrivati, colori armoniosi, luce calda da negozio, profondità di campo ridotta. Formato 9:16.');
  W('ambiance','sante','Respiro calmo','5 s',
'Una persona seduta a gambe incrociate vicino a una finestra inspira ed espira lentamente, spalle che si rilassano, luce morbida del mattino, pianta che si muove appena, camera fissa. Formato 9:16.');
  W('pedagogie','sante','Dimostrazione di un esercizio','5 s',
'[Professionista] mostra lentamente [esercizio o allungamento] in uno studio luminoso, movimento controllato e fluido, camera fissa in campo largo, luce naturale morbida. Formato 9:16.');
  W('pub','coach','Sforzo esplosivo','5 s',
'Rallentatore di una persona che esegue [esercizio esplosivo: salto, sprint, stacco], polvere o gocce di sudore nella luce, controluce marcato, camera fissa dal basso. Formato 9:16.');
  W('personnes','coach','Coach che incoraggia','5 s',
'Un coach applaude e incoraggia [allievo] che chiude la serie, sorriso e batti cinque, palestra luminosa, camera fissa all’altezza delle spalle. Formato 9:16.');
  W('pub','immo','Visita fluida','5 s',
'Carrellata fluida che avanza dall’ingresso di [tipo di immobile] fino al soggiorno luminoso, linee verticali dritte, luce naturale, arredamento neutro, movimento lento e stabile come con uno stabilizzatore. Formato 9:16.');
  W('pub','immo','Vista esterna con drone','5 s',
'Ripresa aerea che sale lentamente sopra [casa / palazzo] e rivela [giardino, quartiere, panorama], luce dorata di fine giornata, movimento fluido. Formato 9:16.');
  W('pub','services','Schermo che si anima','5 s',
'Primo piano di uno schermo di computer dove [grafico / dashboard] si riempie progressivamente, riflessi morbidi, scrivania minimal, camera che avanza lentamente, atmosfera professionale. Formato 9:16.');
  W('personnes','services','Stretta di mano','5 s',
'Due persone si stringono la mano sopra una scrivania sorridendo, documenti firmati in primo piano, luce naturale da ufficio, camera fissa di tre quarti, movimento naturale. Formato 9:16.');

  window.MCD_SCRIPTS=L;
  window.MCD_SCRIPTS_META={
    lang:'it',
    types:{tous:'Tutto',video:'🎬 Script video',post:'✍️ Didascalie',img:'🖼️ Prompt immagine',vid:'🎥 Prompt video'},
    objectifs:{vente:'💰 Vendere',engagement:'💬 Engagement',pedagogie:'🎓 Consigli',coulisses:'🎬 Dietro le quinte',temoignage:'⭐ Recensioni',lancement:'🚀 Lancio',evenement:'📅 Evento',fidelite:'🎁 Fidelizzazione',recrutement:'🤝 Recruiting',produit:'📦 Prodotto',ambiance:'✨ Atmosfera',pub:'📣 Pubblicità & promo',lieu:'🏠 Luogo',personnes:'🙂 Persone',saison:'🎄 Stagioni & feste'},
    metiers:{tous:'Tutti i settori',resto:'Ristorante & bar',beaute:'Bellezza & parrucchieri',artisan:'Artigiani & lavori',commerce:'Negozio',sante:'Salute & benessere',coach:'Coach & sport',immo:'Immobiliare',services:'Servizi & B2B'},
    ui:{title:'Libreria di script',lead:'{n} script, didascalie e prompt immagine/video. Sostituisci le [parentesi quadre] o lascia che Marshall le adatti al tuo brand.',search:'Cerca: prima/dopo, giveaway, prodotto…',all:'Tutto',metier:'Settore',count1:'{n} elemento',countN:'{n} elementi',empty:'Nessun risultato. Prova un’altra parola o «Tutto».',loading:'Caricamento della libreria…',
      kVideo:'Script video',kPost:'Didascalia',kImg:'Prompt immagine',kVid:'Prompt video',adapted:'✨ Versione adattata da Marshall',orig:'vedi l’originale',
      insert:'⬇ Inserisci nella didascalia',copy:'📋 Copia',adapt:'✨ Adatta con Marshall',again:'✨ Un’altra versione',busy:'✨ Marshall sta scrivendo…',create:'🪄 Crea con Studio IA',
      inserted:'Inserito nella didascalia ✓',insertedUndo:'Inserito nella didascalia · tocca per annullare',copied:'Copiato ✓',copyFail:'Impossibile copiare',noComposer:'Apri prima il Composer',
      sent:'Prompt inviato ad Studio IA ✓',adaptFail:'Marshall non è riuscito ad adattare questo testo: ',close:'Chiudi',
      credits:'Prompt ispirati alle strutture di awesome-ad-video-prompts (CC BY 4.0) e awesome-nanobanana-pro.'}
  };
})();
