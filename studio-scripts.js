/* Bibliothèque de scripts — Studio Social (Mon Copain Digital)
   Scripts vidéo (Reels, TikTok, Shorts, voix, avatars) et légendes de posts prêts à remplir.
   Les [crochets] sont à remplacer, ou à faire remplir par Marshall (« Adapter avec Marshall »). */
(function(){
  var L=[];
  function V(o,s,n,d,hook,ecran,steps,cta){
    L.push({t:'video',o:o,s:s,n:n,d:d,x:'🎬 ACCROCHE (0–3 s)\n« '+hook+' »\n[À l’écran : '+ecran+']\n\n📍 DÉROULÉ\n'+steps.join('\n')+'\n\n👉 APPEL À L’ACTION\n« '+cta+' »'});
  }
  function P(o,s,n,txt){ L.push({t:'post',o:o,s:s,n:n,x:txt}); }

  /* =================================================================== SCRIPTS VIDÉO — TOUS MÉTIERS */
  V('vente','tous','Le problème → la solution','30 s',
    'Vous aussi, [problème fréquent de vos clients] ?','le problème en 5 mots, gros texte',
    ['(3–10 s) « On l’entend tous les jours : [phrase type d’un client]. »','(10–22 s) « Chez [nom], on a [votre solution] : [bénéfice 1], [bénéfice 2]. » [Plan : vous en action]','(22–27 s) « Résultat : [résultat concret]. » [Plan : le résultat]'],
    'Écrivez-nous « [mot-clé] » en message, on vous répond aujourd’hui.');
  V('vente','tous','Avant / Après','20 s',
    'Regardez la différence.','AVANT (plan figé, 1 s)',
    ['(2–8 s) [Plan avant] « Voilà comment c’était : [défaut visible]. »','(8–15 s) [Transition rapide] « Et voilà après [durée / intervention]. » [Plan après]','(15–18 s) « Ce qui a tout changé : [le détail clé]. »'],
    'Vous voulez le même résultat ? Lien en bio.');
  V('vente','tous','3 raisons de choisir…','30 s',
    '3 raisons pour lesquelles nos clients choisissent [produit/service].','« 3 RAISONS » + numéro qui défile',
    ['(3–10 s) « 1 : [raison 1, concrète]. » [Plan illustratif]','(10–17 s) « 2 : [raison 2]. »','(17–25 s) « Et 3, la plus importante : [raison 3]. »'],
    'Laquelle compte le plus pour vous ? Dites-le en commentaire.');
  V('vente','tous','L’offre limitée','15 s',
    'Seulement jusqu’à [date] !','[OFFRE] en très gros, compte à rebours',
    ['(3–8 s) « [Offre précise] sur [produit/service]. » [Plan du produit]','(8–12 s) « Pourquoi ? [raison sincère : anniversaire, fin de série…]. »'],
    'Réservez avant [date] : lien en bio.');
  V('vente','tous','Objection levée','30 s',
    '« C’est trop cher. » On nous le dit souvent. Voilà la vérité.','l’objection entre guillemets',
    ['(3–12 s) « Ce que vous payez vraiment : [ce qui est inclus, durée de vie, temps gagné]. »','(12–22 s) « Comparé à [alternative], ça revient à [calcul simple ou comparaison]. »','(22–27 s) « Et si [garantie / essai / paiement en plusieurs fois]. »'],
    'Une autre question ? Posez-la en commentaire, on répond à tout.');
  V('vente','tous','Démo en 3 gestes','20 s',
    'Voilà comment ça marche, en 3 gestes.','mains + produit, gros plan',
    ['(2–7 s) « Un : [geste 1]. »','(7–12 s) « Deux : [geste 2]. »','(12–17 s) « Trois : [geste 3]. Et c’est tout. » [Plan résultat]'],
    'Disponible chez [nom] / sur [site].');
  V('engagement','tous','Ce que vous ignorez sur…','30 s',
    'Personne ne vous dit ça sur [sujet].','texte qui « se révèle »',
    ['(3–12 s) « [Fait surprenant mais vrai]. »','(12–22 s) « Concrètement, ça veut dire : [conséquence pour le client]. »','(22–27 s) « Notre conseil : [conseil simple]. »'],
    'Enregistrez la vidéo pour ne pas l’oublier.');
  V('engagement','tous','Sondage : vous êtes plutôt…','15 s',
    'Team [option A] ou team [option B] ?','A vs B, écran coupé en deux',
    ['(3–7 s) [Plan option A] « [A] : [qualité de A]. »','(7–11 s) [Plan option B] « [B] : [qualité de B]. »'],
    'Votez en commentaire : A ou B ?');
  V('engagement','tous','POV client','15 s',
    'POV : vous venez de [situation du client].','« POV : … » en haut de l’écran',
    ['(3–10 s) [Scène vécue du point de vue du client, sans parler ou avec musique tendance]','(10–13 s) [Réaction / sourire / résultat]'],
    'Identifiez quelqu’un qui a besoin de ça.');
  V('engagement','tous','Les erreurs à éviter','30 s',
    'Les 3 erreurs que je vois tout le temps en [domaine].','croix rouge ❌ à chaque erreur',
    ['(3–11 s) « Erreur n°1 : [erreur]. À la place : [bon réflexe]. »','(11–19 s) « Erreur n°2 : [erreur]. »','(19–26 s) « Erreur n°3, la pire : [erreur]. »'],
    'Vous en faisiez une ? Avouez en commentaire 😄');
  V('engagement','tous','Mythe ou réalité ?','25 s',
    '« [Idée reçue]. » Mythe ou réalité ?','MYTHE / RÉALITÉ qui clignote',
    ['(3–10 s) « Beaucoup pensent que [idée reçue]. »','(10–20 s) « En réalité : [vérité + preuve ou exemple]. »'],
    'Abonnez-vous pour la prochaine idée reçue.');
  V('pedagogie','tous','Tuto express en 3 étapes','30 s',
    'Comment [résultat souhaité] en 3 étapes.','« EN 3 ÉTAPES » + numéros',
    ['(3–11 s) « Étape 1 : [action]. » [Plan gros plan]','(11–19 s) « Étape 2 : [action]. Astuce : [détail pro]. »','(19–26 s) « Étape 3 : [action]. Et voilà. » [Plan résultat]'],
    'Enregistrez pour le refaire plus tard.');
  V('pedagogie','tous','Le conseil de pro','20 s',
    'Le conseil que je donne à tous mes clients.','« CONSEIL DE PRO »',
    ['(3–12 s) « [Conseil précis et applicable tout de suite]. »','(12–17 s) « Pourquoi ? Parce que [explication simple en une phrase]. »'],
    'Partagez à quelqu’un qui en a besoin.');
  V('pedagogie','tous','Question de client','30 s',
    'On m’a demandé : « [question réelle d’un client] ? »','la question en bulle de message',
    ['(3–15 s) « La réponse courte : [réponse]. »','(15–25 s) « La réponse complète : [nuance, cas particulier]. »'],
    'Posez votre question en commentaire, je réponds en vidéo.');
  V('pedagogie','tous','Le lexique en 30 s','30 s',
    '[Terme technique] : ça veut dire quoi, vraiment ?','le terme + définition qui s’écrit',
    ['(3–13 s) « En clair : [définition en mots simples]. »','(13–24 s) « Exemple : [exemple du quotidien]. »','(24–27 s) « Et pour vous, ça change [impact]. »'],
    'Quel mot voulez-vous que j’explique ensuite ?');
  V('coulisses','tous','Une journée chez nous','45 s',
    '[Heure du matin]. Une journée chez [nom] commence.','heure en incrust + plan d’ouverture',
    ['(3–15 s) [Ouverture, préparation, café, équipe]','(15–30 s) [Le cœur du métier : 3 plans rapides de 2 s] « Ce que vous ne voyez jamais : [détail]. »','(30–40 s) [Fermeture / moment de fierté] « Et ça, c’est notre moment préféré. »'],
    'Vous voulez voir autre chose des coulisses ? Dites-nous quoi.');
  V('coulisses','tous','Présentation de l’équipe','30 s',
    'Ils sont [nombre] et sans eux, [nom] n’existerait pas.','prénoms qui apparaissent',
    ['(3–25 s) [Un plan de 3–4 s par personne] « [Prénom], [rôle], [anecdote ou talent caché]. »'],
    'Dites bonjour à l’équipe en commentaire 👋');
  V('coulisses','tous','Pourquoi j’ai créé…','45 s',
    'En [année], j’ai tout lâché pour [projet].','photo d’époque ou plan face caméra',
    ['(3–18 s) « Avant, j’étais [situation]. Un jour, [déclic]. »','(18–33 s) « Les débuts : [difficulté] — mais [ce qui vous a fait tenir]. »','(33–40 s) « Aujourd’hui, [ce dont vous êtes fier]. »'],
    'Merci d’être là. Abonnez-vous pour suivre la suite de l’histoire.');
  V('coulisses','tous','Fabrication en accéléré','15 s',
    'De rien à [produit fini] en 15 secondes.','time-lapse, texte « 15 s »',
    ['(2–12 s) [Accéléré de la fabrication / préparation, musique rythmée]','(12–14 s) [Plan final, produit mis en valeur]'],
    'Vous auriez cru que ça prenait [vraie durée] ?');
  V('temoignage','tous','Le client raconte','30 s',
    '« [Phrase forte du client]. »','citation + prénom du client',
    ['(3–12 s) [Client face caméra] « Avant, [problème]. »','(12–22 s) « Avec [nom], [ce qui a changé]. »','(22–27 s) « Je recommande parce que [raison]. »'],
    'Vous aussi, essayez : lien en bio.');
  V('temoignage','tous','L’avis lu à voix haute','20 s',
    'On a reçu cet avis… et on ne s’y attendait pas.','capture de l’avis (5 étoiles)',
    ['(3–14 s) [Lecture d’un extrait de l’avis, vraie capture à l’écran]','(14–18 s) « Merci [prénom], ça nous touche vraiment. »'],
    'Vous êtes déjà venus ? Laissez-nous votre avis 🙏');
  V('temoignage','tous','Résultat chiffré','20 s',
    '[Chiffre réel] en [durée]. Voilà comment.','le chiffre en énorme',
    ['(3–10 s) « Quand [client] est arrivé, [point de départ]. »','(10–17 s) « On a [ce que vous avez fait]. Résultat : [chiffre]. »'],
    'Vous voulez le même diagnostic ? Écrivez-nous.');
  V('lancement','tous','Le teaser','10 s',
    'Quelque chose arrive le [date].','plan flou / caché, date en gros',
    ['(2–8 s) [Détails en très gros plan, sans tout montrer] « On n’en dit pas plus… »'],
    'Activez la cloche pour ne pas le rater.');
  V('lancement','tous','La révélation','30 s',
    'Ça y est, il est là : [nouveauté] !','révélation avec effet + nom',
    ['(3–13 s) « On y travaille depuis [durée] : [ce que c’est]. »','(13–23 s) « Ce qui le rend unique : [différence 1], [différence 2]. »','(23–27 s) « Disponible dès [date], à [prix si sûr]. »'],
    'Les [nombre] premiers ont [avantage] : lien en bio.');
  V('lancement','tous','Compte à rebours J-3','10 s',
    'Plus que 3 jours.','« J-3 » énorme',
    ['(2–8 s) [Un indice visuel par jour] « Indice du jour : [indice]. »'],
    'Devinez en commentaire !');
  V('evenement','tous','Invitation à l’événement','20 s',
    'Le [date], on vous attend !','date + lieu en gros',
    ['(3–10 s) « Au programme : [temps fort 1], [temps fort 2]. »','(10–16 s) « C’est [gratuit / sur réservation], à [lieu], dès [heure]. »'],
    'Dites « je viens » en commentaire, on vous garde une place.');
  V('evenement','tous','Retour sur l’événement','30 s',
    'Merci ! Vous étiez [nombre] ce [jour].','plan large de la foule',
    ['(3–25 s) [Montage rythmé des meilleurs moments, 1,5 s par plan, sourires, détails]','(25–28 s) « Merci à [partenaires / équipe]. »'],
    'Vous étiez là ? Identifiez-vous sur la vidéo !');
  V('fidelite','tous','Merci à la communauté','20 s',
    '[Nombre] abonnés. On n’en revient pas.','le chiffre qui monte',
    ['(3–15 s) « Quand on a commencé, [souvenir]. Aujourd’hui, grâce à vous, [fierté]. »'],
    'Pour fêter ça : [petit cadeau / jeu]. Détails en légende.');
  V('fidelite','tous','Jeu-concours','20 s',
    'On vous fait gagner [lot] !','🎁 CONCOURS',
    ['(3–15 s) « Pour participer : 1. abonnez-vous, 2. likez, 3. identifiez [nombre] amis. Tirage le [date]. »'],
    'Bonne chance à tous ! Règlement en légende.');
  V('recrutement','tous','On recrute','30 s',
    'On cherche [poste]. C’est peut-être vous ?','ON RECRUTE + poste',
    ['(3–12 s) « Chez nous, [ambiance réelle, 2 plans d’équipe]. »','(12–22 s) « Ce qu’on cherche : [qualité 1], [qualité 2]. Pas besoin de [diplôme / expérience] si [condition]. »','(22–27 s) « [Contrat, horaires, lieu]. »'],
    'Envoyez-nous un message ou partagez à la bonne personne.');

  /* =================================================================== LÉGENDES — TOUS MÉTIERS */
  P('vente','tous','Bénéfice d’abord',
'[Le résultat que votre client veut], sans [la contrainte qu’il redoute]. ✨\n\nC’est exactement ce que propose [produit/service] :\n✔️ [bénéfice 1]\n✔️ [bénéfice 2]\n✔️ [bénéfice 3]\n\n📍 [lieu / livraison / en ligne]\n👉 [Réservez / Commandez] via le lien en bio.');
  P('vente','tous','Problème – Agitation – Solution',
'[Problème] ? Vous n’êtes pas seul(e).\n\nEt plus on attend, plus [conséquence concrète]. 😬\n\nLa bonne nouvelle : [solution en une phrase].\nChez [nom], on [comment vous le faites, concrètement].\n\n💬 Écrivez « [mot-clé] » en message pour en parler.');
  P('vente','tous','Offre à durée limitée',
'⏳ Jusqu’au [date] seulement :\n[offre précise] sur [produit/service].\n\nPourquoi ? [raison sincère].\n\nAprès, on revient au prix normal. Pas de prolongation. 🙃\n\n👉 Lien en bio / [téléphone]');
  P('vente','tous','Le produit star',
'Si vous ne deviez essayer qu’une chose chez nous, ce serait celle-ci. 👇\n\n[Produit] : [ce qui le rend unique, 1 phrase sensorielle ou concrète].\n\nNos clients le choisissent pour [raison n°1].\n\nDéjà testé ? Donnez votre note sur 10 en commentaire !');
  P('vente','tous','Comparatif honnête',
'[Option A] ou [notre solution] ? Soyons honnêtes. 🤝\n\n[Option A] : ✅ [avantage] / ❌ [limite]\n[Notre solution] : ✅ [avantage] / ✅ [avantage] / ❌ [limite assumée]\n\nPour qui c’est fait : [profil idéal].\nPour qui ce n’est pas fait : [profil].\n\nUne question ? On répond en commentaire.');
  P('engagement','tous','Question ouverte',
'Petite question du jour 👇\n\n[Question simple qui concerne votre client] ?\n\nNous, c’est [votre réponse avec une touche perso].\n\nÀ vous ! On lit tous les commentaires.');
  P('engagement','tous','Ceci ou cela',
'Vous êtes plutôt…\n\n🅰️ [option A]\nou\n🅱️ [option B] ?\n\nRépondez juste A ou B en commentaire. On fait le compte vendredi ! 📊');
  P('engagement','tous','Complétez la phrase',
'Complétez la phrase 👇\n\n« Un [jour / moment] parfait, c’est quand… »\n\nNous on commence : [votre réponse]. 😄');
  P('engagement','tous','Avouez…',
'Avouez… vous aussi, vous [petite habitude ou erreur courante liée à votre domaine] ? 🙈\n\nPas de jugement ici. Mais voilà une astuce simple : [astuce].\n\nIdentifiez la personne qui fait TOUJOURS ça 😂');
  P('pedagogie','tous','Carrousel : guide en étapes',
'📌 Enregistrez ce post, vous en aurez besoin.\n\nComment [résultat] en [nombre] étapes :\n\n1️⃣ [étape 1]\n2️⃣ [étape 2]\n3️⃣ [étape 3]\n4️⃣ [étape 4]\n\n💡 L’erreur à éviter : [erreur].\n\nUne question ? Commentaire 👇');
  P('pedagogie','tous','Idée reçue',
'❌ « [Idée reçue] »\n✅ En réalité : [vérité].\n\nPourquoi on y croit ? [Origine de l’idée reçue].\nCe que ça change pour vous : [conséquence pratique].\n\nVous y croyiez ? Soyez honnêtes 😉');
  P('pedagogie','tous','Checklist',
'✅ La checklist avant de [action importante pour votre client] :\n\n☐ [point 1]\n☐ [point 2]\n☐ [point 3]\n☐ [point 4]\n☐ [point 5]\n\nCochez tout et vous êtes tranquille. 💪\nEnregistrez pour la ressortir le jour J.');
  P('pedagogie','tous','Chiffre clé',
'[Chiffre vérifié] 😮\n\nC’est [ce que représente ce chiffre] (source : [source]).\n\nCe que ça veut dire pour vous : [interprétation simple].\nNotre conseil : [action].\n\nVous le saviez ?');
  P('coulisses','tous','Coulisses du jour',
'Ce que vous ne voyez pas avant [moment où le client vous voit]. 👀\n\n[Heure] : [tâche]\n[Heure] : [tâche]\n[Heure] : [tâche]\n\nC’est pas glamour, mais c’est pour ça que [résultat que le client apprécie]. ❤️');
  P('coulisses','tous','Portrait d’équipe',
'Vous la/le connaissez sûrement… mais connaissez-vous vraiment [prénom] ? 👋\n\n🔧 Son rôle : [rôle]\n⏳ Chez nous depuis : [durée]\n💛 Ce qu’elle/il préfère : [anecdote]\n🤫 Talent caché : [talent]\n\nUn petit mot pour [prénom] ? 👇');
  P('coulisses','tous','Notre histoire',
'Tout a commencé [lieu / moment improbable]. 🌱\n\n[2–3 phrases : le déclic, les débuts difficiles, ce qui vous a fait tenir.]\n\n[Nombre] ans plus tard, [ce dont vous êtes fier].\n\nMerci de faire partie de l’histoire. 🙏');
  P('coulisses','tous','Nos valeurs en vrai',
'On ne fait pas [pratique courante du secteur]. Jamais. 🙅\n\nPourquoi ? Parce que [conviction].\n\nÀ la place, on [votre manière de faire], même si ça nous prend [contrepartie].\n\nC’est un choix. Et vous, ça compte pour vous ?');
  P('temoignage','tous','Avis client',
'⭐⭐⭐⭐⭐\n« [Citation réelle du client] »\n— [Prénom], [ville / contexte]\n\nMerci [prénom] ! Des messages comme ça, c’est notre carburant. 🔋\n\nVous aussi, [action] : lien en bio.');
  P('temoignage','tous','Cas client',
'📂 Cas client : [prénom / entreprise]\n\n🎯 Le besoin : [besoin]\n🛠️ Ce qu’on a fait : [solution]\n📈 Le résultat : [résultat concret]\n\n« [Citation courte] »\n\nVous avez un besoin similaire ? Écrivez-nous.');
  P('lancement','tous','Nouveauté',
'🆕 C’EST NOUVEAU !\n\n[Nom de la nouveauté] : [ce que c’est en une phrase].\n\nPourquoi on l’a créé : [besoin client].\nCe qui change pour vous : [bénéfice].\n\n📅 Dès le [date] · [prix si connu]\n👉 [Où l’acheter / réserver]');
  P('lancement','tous','Teaser',
'Quelque chose se prépare… 👀\n\nIndice : [indice mystérieux].\n\nRendez-vous le [date] à [heure].\nVos pronostics en commentaire 👇');
  P('evenement','tous','Annonce d’événement',
'📅 [Date] · 📍 [Lieu] · 🕒 [Heure]\n\n[Nom de l’événement] : [promesse en une phrase].\n\nAu programme :\n• [temps fort 1]\n• [temps fort 2]\n• [temps fort 3]\n\n[Gratuit / Places limitées] → [comment s’inscrire]');
  P('evenement','tous','Fermeture / horaires',
'📢 Info pratique\n\n[Nom] sera [fermé / ouvert en horaires spéciaux] du [date] au [date].\n\n🕒 [Nouveaux horaires]\n\nOn se retrouve le [date] ! Merci de votre compréhension. 🙏');
  P('evenement','tous','Fête / saison',
'[Fête / saison] arrive ! [Émoji]\n\nPour l’occasion : [offre, produit ou animation spéciale].\n\nDisponible du [date] au [date], dans la limite des stocks.\n\nVous le fêtez comment, vous ? 👇');
  P('fidelite','tous','Merci clients',
'[Nombre] [clients / commandes / années]. 🥹\n\nOn voulait juste dire MERCI.\n\nÀ ceux qui reviennent, à ceux qui recommandent, à ceux qui nous écrivent des petits mots.\n\nPour fêter ça : [cadeau / remise / surprise].');
  P('fidelite','tous','Jeu-concours',
'🎁 CONCOURS 🎁\n\nOn vous fait gagner [lot précis] !\n\nPour participer :\n1️⃣ Abonnez-vous à @[compte]\n2️⃣ Likez ce post\n3️⃣ Identifiez [nombre] ami(e)s en commentaire\n\nTirage au sort le [date]. Bonne chance !\n\nConcours non sponsorisé ni géré par [réseau]. Gagnant contacté en message privé.');
  P('fidelite','tous','Programme de fidélité',
'Vous venez souvent ? On l’a remarqué. 😉\n\nNouveau : [fonctionnement de la carte / du programme].\n➡️ [récompense concrète] au bout de [nombre] [achats / visites].\n\nDemandez votre carte au prochain passage !');
  P('recrutement','tous','Offre d’emploi',
'🚀 ON RECRUTE : [poste]\n\n📍 [Lieu] · [Type de contrat] · [Horaires]\n\nCe que vous ferez : [missions en 2 lignes]\nCe qu’on cherche : [qualités, pas forcément des diplômes]\nCe qu’on offre : [ambiance, avantages, évolution]\n\n📩 Message privé ou [email]. Partagez, ça peut aider quelqu’un !');

  /* =================================================================== RESTAURANT / CAFÉ / BOULANGERIE */
  V('vente','resto','Le plat signature','20 s',
    'Le plat qu’on nous commande le plus.','gros plan qui fume / coule',
    ['(3–10 s) [Dressage en gros plan] « [Nom du plat] : [ingrédients clés, cuisson]. »','(10–16 s) [Le premier coup de fourchette / réaction] « Fait maison, chaque [jour / matin]. »'],
    'Réservez votre table : lien en bio.');
  V('coulisses','resto','6 h du matin en cuisine','30 s',
    '6 h. Le restaurant dort, pas nous.','heure en incrust',
    ['(3–12 s) [Arrivage produits, cagettes] « Les [produits] arrivent de chez [producteur], à [distance]. »','(12–24 s) [Préparations : découpe, sauce, pâte] « Tout est préparé ici, ce matin. »','(24–27 s) [Salle prête, lumière]'],
    'On vous garde une table ce midi ?');
  V('engagement','resto','Devinez le plat','15 s',
    'Devinez le plat avant la fin.','gros plans très serrés',
    ['(2–11 s) [5 ingrédients en extrême gros plan, 2 s chacun]','(11–13 s) [Révélation du plat]'],
    'Vous aviez trouvé ? Réponse honnête en commentaire 😄');
  V('fidelite','resto','Menu de la semaine','20 s',
    'Le menu de la semaine est tombé !','MENU + jours',
    ['(3–16 s) [Un plan par plat, 3 s chacun] « Lundi [plat], mardi [plat]… »'],
    'Lequel vous tente ? Réservez au [téléphone].');
  P('vente','resto','Plat du jour',
'🍽️ Aujourd’hui à l’ardoise :\n\n[Entrée]\n[Plat]\n[Dessert]\n\n[Formule] : [prix] €\n\nFait maison avec [produit local] de [producteur]. 🌿\n📞 [Téléphone] pour réserver · 📍 [adresse]');
  P('coulisses','resto','Le producteur',
'Voilà [prénom], qui nous livre [produit] depuis [durée]. 👨‍🌾\n\n[Sa ferme / son atelier] est à [distance] d’ici. [Détail qui montre la qualité.]\n\nC’est grâce à lui que notre [plat] a ce goût-là.\n\nOn adore travailler local. Et vous, ça compte pour vous ?');
  P('engagement','resto','Sucré ou salé',
'Petit-déjeuner : vous êtes plutôt… 🥐 ou 🍳 ?\n\nNous on a tranché : [votre préférence + spécialité].\n\nRépondez avec un émoji 👇');
  P('evenement','resto','Soirée spéciale',
'🎉 [Jour] soir : [nom de la soirée] !\n\n[Menu / animation / musique] dès [heure].\n[Prix] par personne, [boisson incluse ou non].\n\nPlaces limitées à [nombre] : réservation obligatoire au [téléphone].');

  /* =================================================================== BEAUTÉ / COIFFURE / ESTHÉTIQUE */
  V('vente','beaute','Transformation en 15 s','15 s',
    'Elle est arrivée comme ça…','AVANT',
    ['(2–10 s) [Étapes en accéléré : coupe, couleur, coiffage]','(10–13 s) [Révélation, la cliente se retourne / se regarde] « …et elle est repartie comme ça. »'],
    'Réservez votre transformation : lien en bio.');
  V('pedagogie','beaute','L’erreur qui abîme vos cheveux','25 s',
    'Arrêtez de faire ça après votre shampoing.','❌ + geste à éviter',
    ['(3–12 s) « Frotter avec la serviette, ça [dégât]. »','(12–20 s) « À la place : [bon geste], et [produit / astuce]. »'],
    'Enregistrez et envoyez à votre copine qui frotte 😄');
  V('engagement','beaute','Quelle couleur cet automne ?','15 s',
    'Cuivré, caramel ou châtain glacé ?','3 couleurs, numéros 1-2-3',
    ['(3–12 s) [3 résultats réels, 3 s chacun, numérotés]'],
    'Votez 1, 2 ou 3 en commentaire !');
  V('coulisses','beaute','Le soin vu de l’intérieur','30 s',
    'Ce qui se passe pendant votre soin [nom du soin].','ambiance douce, lumière tamisée',
    ['(3–24 s) [Étapes du soin, mains, produits, détente] « D’abord [étape], puis [étape], et enfin [étape]. »','(24–27 s) « [Durée] rien que pour vous. »'],
    'Offrez-le ou offrez-vous-le : réservation en bio.');
  P('vente','beaute','Créneaux disponibles',
'✂️ Il reste des créneaux cette semaine !\n\n[Jour] : [heures]\n[Jour] : [heures]\n\nPrestation du moment : [prestation] à [prix] €.\n\n📲 Réservez en ligne (lien en bio) ou au [téléphone].');
  P('pedagogie','beaute','Routine en 3 gestes',
'Votre routine [cheveux / peau] du soir en 3 gestes 🌙\n\n1. [Geste 1 + produit type]\n2. [Geste 2]\n3. [Geste 3]\n\nTemps total : [minutes] min. Résultat : [bénéfice].\n\nEnregistrez pour ce soir ✨');
  P('temoignage','beaute','Réaction cliente',
'Sa réaction quand elle s’est vue dans le miroir… 🥹\n\n« [Citation] »\n\n[Prestation réalisée] par [prénom du coiffeur / esthéticienne].\n\nMerci pour ta confiance [prénom de la cliente] 💛');
  P('fidelite','beaute','Carte cadeau',
'🎁 Vous ne savez pas quoi offrir ?\n\nNos cartes cadeaux sont disponibles de [montant] à [montant] €, valables [durée] sur toutes nos prestations.\n\nÀ retirer au salon ou par message. Le cadeau qui fait toujours plaisir. 💝');

  /* =================================================================== ARTISAN / BTP / RÉNOVATION */
  V('vente','artisan','Le chantier avant / après','30 s',
    'Cette [pièce] n’avait pas bougé depuis [année].','AVANT + année',
    ['(3–12 s) [État initial, détails abîmés] « Le problème : [problème]. »','(12–24 s) [Travaux en accéléré] « [Durée] de travaux : [interventions]. »','(24–27 s) [Plan large fini] « Et maintenant. »'],
    'Devis gratuit : message ou lien en bio.');
  V('pedagogie','artisan','Les signes qu’il faut intervenir','30 s',
    'Si vous voyez ça chez vous, appelez un pro.','zoom sur le défaut',
    ['(3–12 s) « Signe n°1 : [signe]. Ça veut dire [cause]. »','(12–20 s) « Signe n°2 : [signe]. »','(20–26 s) « Plus on attend, plus [conséquence et coût]. »'],
    'Un doute ? Envoyez-nous une photo en message, on vous dit gratuitement.');
  V('coulisses','artisan','Le geste de métier','15 s',
    '[Années] d’expérience dans ce geste.','gros plan mains / outil',
    ['(2–12 s) [Geste technique en temps réel, son naturel, très gros plan]'],
    'Abonnez-vous si vous aimez le travail bien fait.');
  V('temoignage','artisan','Le client fait la visite','30 s',
    '« On ne reconnaît plus la maison. »','citation client',
    ['(3–25 s) [Le client fait visiter et commente] « Ce qu’on voulait : [besoin]. Ce qu’on a eu : [résultat]. Ce qu’on a apprécié : [délais, propreté, conseil]. »'],
    'Votre projet est le prochain ? Devis gratuit.');
  P('vente','artisan','Devis gratuit',
'🏠 Vous pensez à [type de travaux] ?\n\n✅ Devis gratuit sous [délai]\n✅ [Garantie décennale / certification RGE si applicable]\n✅ Intervention sur [zone]\n\nOn se déplace, on mesure, on vous explique. Sans engagement.\n\n📞 [Téléphone] · 📩 message privé');
  P('pedagogie','artisan','Aides financières',
'💶 Bon à savoir : vos travaux de [type] peuvent être en partie financés.\n\n[Aide 1, conditions générales]\n[Aide 2]\n\n⚠️ Les montants et conditions changent : on vérifie avec vous ce qui s’applique à votre situation.\n\nQuestion ? Message privé.');
  P('coulisses','artisan','Chantier en cours',
'🚧 Chantier en cours à [ville]\n\nJour [n] sur [total] : [étape du jour].\n\nCe qu’on fait aujourd’hui et pourquoi c’est important : [explication simple].\n\nSuite au prochain épisode ! 👷');
  P('temoignage','artisan','Chantier livré',
'✅ Chantier livré à [ville] !\n\n[Type de travaux] en [durée].\n\n« [Citation du client] »\n\nMerci [prénom] pour votre confiance. Photos avant / après en glissant ➡️');

  /* =================================================================== COMMERCE / BOUTIQUE */
  V('vente','commerce','Arrivage','15 s',
    'Nouvel arrivage, et il n’y en aura pas pour tout le monde.','NOUVEAU',
    ['(2–12 s) [Déballage rapide, 4–5 articles, 2 s chacun, prix en incrust si sûr]'],
    'Passez en boutique ou réservez par message.');
  V('vente','commerce','3 idées cadeaux à moins de [prix]','30 s',
    '3 idées cadeaux à moins de [prix] €.','prix max en gros',
    ['(3–11 s) « Pour [profil 1] : [article], [prix]. »','(11–19 s) « Pour [profil 2] : [article]. »','(19–26 s) « Et pour [profil 3] : [article]. Emballage offert. »'],
    'Laquelle vous sauve la vie ? Commentez 1, 2 ou 3.');
  V('coulisses','commerce','Je prépare votre commande','20 s',
    'Je prépare votre commande, [prénom du client] !','ASMR emballage',
    ['(2–17 s) [Emballage soigné, papier, ruban, petit mot manuscrit, son naturel]'],
    'Commandez en ligne : lien en bio.');
  V('engagement','commerce','Le look du jour','15 s',
    'Un article, trois façons de le porter.','1 → 3',
    ['(2–13 s) [3 tenues avec le même article, transition à chaque claquement de doigts]'],
    'Votre préférée : 1, 2 ou 3 ?');
  P('vente','commerce','Nouvel arrivage',
'📦 Arrivage tout frais !\n\n[Produit / marque] : [description courte et sensorielle].\nTailles / modèles : [détails]\nPrix : [prix]\n\nQuantités limitées. Réservez par message, on vous le met de côté 24 h. 🛍️');
  P('fidelite','commerce','Soldes / promo',
'🏷️ [Événement promo] du [date] au [date]\n\n-[x] % sur [rayon / sélection]\n[Avantage bonus : 2e article, cadeau…]\n\nEn boutique [et en ligne]. Les meilleures pièces partent le premier jour. 😉');
  P('coulisses','commerce','Pourquoi ce produit',
'Pourquoi on a choisi de vendre [produit / marque] ? 🤔\n\n• [Raison 1 : qualité, fabrication]\n• [Raison 2 : éthique, local]\n• [Raison 3 : retour des clients]\n\nOn ne vend que ce qu’on utiliserait nous-mêmes.');
  P('engagement','commerce','Aidez-nous à choisir',
'On hésite pour la prochaine commande… aidez-nous ! 🙏\n\n[Option A] ou [Option B] ?\n\nLe plus demandé en commentaire rejoint la boutique le [date].');

  /* =================================================================== SANTÉ / BIEN-ÊTRE / THÉRAPEUTE */
  V('pedagogie','sante','Un exercice simple','30 s',
    'Un exercice de [durée] pour soulager [zone / tension].','nom de l’exercice',
    ['(3–20 s) [Démonstration lente] « Placez-vous [position]. Respirez [consigne]. Répétez [nombre] fois. »','(20–27 s) « Si ça fait mal, arrêtez et parlez-en à un professionnel. »'],
    'Enregistrez pour le faire ce soir.');
  V('pedagogie','sante','Comment se passe une séance','30 s',
    'Vous n’avez jamais fait de [discipline] ? Voilà comment ça se passe.','le cabinet, ambiance calme',
    ['(3–12 s) « On commence par [échange / bilan]. »','(12–22 s) « Ensuite, [déroulé de la séance]. »','(22–27 s) « Une séance dure [durée]. »'],
    'Une question avant de venir ? Écrivez-moi.');
  V('engagement','sante','Mythe santé','25 s',
    '« [Idée reçue santé]. » Vrai ou faux ?','VRAI / FAUX',
    ['(3–20 s) « [Réponse nuancée et sourcée]. Ce qui compte vraiment : [conseil]. »'],
    'Quelle autre idée reçue je dois démêler ?');
  V('coulisses','sante','Pourquoi ce métier','30 s',
    'Je suis [métier] depuis [années]. Voilà pourquoi.','face caméra, bienveillant',
    ['(3–25 s) « [Déclic personnel], [ce que vous aimez dans l’accompagnement], [ce qui vous touche chez vos patients]. »'],
    'Prenez soin de vous. Rendez-vous en ligne si besoin.');
  P('pedagogie','sante','Conseil bien-être',
'🌿 Le conseil de la semaine\n\n[Conseil simple et applicable]\n\nPourquoi ça aide : [explication en 2 phrases].\n\n⚠️ Ce conseil ne remplace pas un avis médical. En cas de doute, consultez.\n\nEnregistrez pour y penser 💚');
  P('vente','sante','Prise de rendez-vous',
'📅 Des créneaux se libèrent [période].\n\n[Type de séance] · [durée] · [tarif]\n[Remboursement mutuelle si applicable]\n\nRéservation en ligne (lien en bio) ou au [téléphone].');
  P('coulisses','sante','Le cabinet',
'Bienvenue au cabinet 🤍\n\nUn lieu pensé pour que vous vous sentiez [en sécurité / détendu(e)] dès la porte franchie.\n\n📍 [Adresse] · [accès, parking, accessibilité PMR]\n\nÀ bientôt.');
  P('engagement','sante','Check-in',
'Comment allez-vous, vraiment, cette semaine ? 🫶\n\nRépondez avec un émoji :\n😌 ça va bien\n😐 bof\n😮‍💨 épuisé(e)\n\nQuelle que soit la réponse, prenez [petit geste de soin] aujourd’hui.');

  /* =================================================================== COACH / SPORT / FORMATION */
  V('pedagogie','coach','L’exercice que tout le monde rate','25 s',
    'Vous faites [exercice] comme ça ? Stop.','❌ mauvais geste',
    ['(3–12 s) [Mauvaise exécution] « Ici, vous [erreur et risque]. »','(12–21 s) [Bonne exécution] « Plutôt : [consigne 1], [consigne 2]. »'],
    'Enregistrez et testez à la prochaine séance.');
  V('temoignage','coach','La progression','30 s',
    'Il y a [durée], [prénom] ne pouvait pas [action].','AVANT, date',
    ['(3–15 s) [Images du début]','(15–25 s) [Aujourd’hui] « Ce qui a marché : [régularité, méthode]. »'],
    'Prêt(e) à commencer ? Séance d’essai en bio.');
  V('engagement','coach','Défi 7 jours','20 s',
    'Défi : [action] pendant 7 jours. Vous me suivez ?','DÉFI 7 JOURS',
    ['(3–15 s) « Chaque jour, [action précise et réaliste]. Je poste ma version tous les jours en story. »'],
    'Commentez « JE SUIS » pour le rejoindre.');
  V('vente','coach','La séance d’essai','20 s',
    'Vous hésitez ? Venez essayer.','ESSAI [gratuit / prix]',
    ['(3–15 s) « En [durée], on fait [bilan / séance découverte], vous voyez [ce qu’ils vont ressentir]. Zéro engagement. »'],
    'Réservez votre essai : lien en bio.');
  P('pedagogie','coach','Programme express',
'💪 Programme express : [durée] min, sans matériel\n\n1. [Exercice] — [répétitions]\n2. [Exercice] — [répétitions]\n3. [Exercice] — [répétitions]\n\n[Nombre] tours. Repos [secondes] s.\n\nEnregistrez et dites-moi en commentaire quand c’est fait ✅');
  P('engagement','coach','Motivation',
'Rappel du [jour] : [phrase de motivation personnelle, pas une citation copiée].\n\nPas besoin d’être parfait(e). Il faut juste [action minimale] aujourd’hui.\n\nVotre petite victoire de la semaine ? 👇');
  P('vente','coach','Inscriptions ouvertes',
'🚀 Les inscriptions pour [programme / session] sont ouvertes !\n\nPour qui : [profil]\nDurée : [durée]\nFormat : [présentiel / en ligne]\nVous repartez avec : [résultat]\n\n[Nombre] places. Début le [date].\n👉 Lien en bio');
  P('temoignage','coach','Victoire d’un élève',
'🏆 Bravo [prénom] !\n\n[Objectif atteint] après [durée] de travail.\n\nCe que j’ai admiré : [qualité de la personne].\n\nVotre tour viendra. On commence quand ?');

  /* =================================================================== IMMOBILIER */
  V('vente','immo','Visite en 30 secondes','30 s',
    '[Type de bien], [surface] m², à [quartier / ville].','prix + surface',
    ['(3–24 s) [Visite fluide : entrée, séjour, cuisine, chambres, extérieur] « Le coup de cœur : [atout]. »','(24–27 s) « [Prix] · [DPE] »'],
    'Visite sur rendez-vous : message privé.');
  V('pedagogie','immo','Combien vaut votre bien ?','25 s',
    'Votre bien vaut-il vraiment ce que vous pensez ?','€ ?',
    ['(3–20 s) « Les 3 critères qui comptent le plus à [ville] : [critère 1], [critère 2], [critère 3]. »'],
    'Estimation gratuite en 48 h : lien en bio.');
  V('coulisses','immo','Une journée d’agent','30 s',
    'Ce que fait vraiment un agent immobilier.','journée en accéléré',
    ['(3–25 s) [Visites, photos, rendez-vous notaire, appels] « Une vente, c’est en moyenne [nombre] visites et [durée]. »'],
    'Des questions sur la vente ? Posez-les en commentaire.');
  V('temoignage','immo','Remise des clés','15 s',
    'Le moment préféré de notre métier.','🔑',
    ['(2–12 s) [Remise des clés, sourires, avec accord des clients]'],
    'Félicitations [prénoms] ! À qui le tour ?');
  P('vente','immo','Nouveau bien',
'🏡 EXCLUSIVITÉ · [Ville / quartier]\n\n[Type] · [surface] m² · [pièces] pièces\n✨ [Atout 1] · [Atout 2] · [Atout 3]\n\n[Prix] € [honoraires charge …]\nDPE : [classe]\n\n📩 Visite sur rendez-vous en message privé.');
  P('pedagogie','immo','Conseil vendeur',
'Vous vendez ? 3 choses à faire AVANT les photos 📸\n\n1. [Conseil 1]\n2. [Conseil 2]\n3. [Conseil 3]\n\nUn bien bien présenté se vend [plus vite / mieux].\n\nEstimation offerte : lien en bio.');
  P('temoignage','immo','Vendu',
'🔑 VENDU !\n\n[Type de bien] à [ville], vendu en [durée].\n\n« [Citation des vendeurs] »\n\nMerci [prénoms] pour votre confiance. Vous souhaitez vendre ? Parlons-en.');
  P('engagement','immo','Coup de cœur',
'Vous choisissez quoi ? 🤔\n\n🅰️ [Bien A : avantage]\n🅱️ [Bien B : avantage]\n\nMême budget : [budget]. Votez en commentaire !');

  /* =================================================================== SERVICES / B2B / FREELANCE */
  V('pedagogie','services','L’erreur qui coûte cher aux entreprises','30 s',
    'Cette erreur coûte [montant / temps] à la plupart des [cible].','💸',
    ['(3–13 s) « L’erreur : [erreur]. »','(13–23 s) « Pourquoi c’est grave : [conséquence chiffrée si sûre]. »','(23–27 s) « La solution simple : [solution]. »'],
    'Écrivez « AUDIT » en message, on regarde votre cas.');
  V('vente','services','Comment je travaille','30 s',
    'Travailler avec moi, ça se passe comme ça.','étapes 1-2-3',
    ['(3–12 s) « 1. [Appel découverte / audit]. »','(12–20 s) « 2. [Proposition / réalisation]. »','(20–27 s) « 3. [Livraison / suivi]. Délai moyen : [durée]. »'],
    'Premier appel offert : lien en bio.');
  V('temoignage','services','Résultat client','25 s',
    '[Résultat chiffré] pour [type de client].','le chiffre',
    ['(3–20 s) « Le point de départ : [situation]. Ce qu’on a fait : [action]. Le résultat : [résultat]. »'],
    'Vous voulez la même chose ? Message privé.');
  V('coulisses','services','Mon bureau, mes outils','20 s',
    'Les [nombre] outils sans lesquels je ne travaille pas.','setup de travail',
    ['(3–17 s) [Un plan par outil] « [Outil] : pour [usage]. »'],
    'Et vous, votre outil indispensable ?');
  P('pedagogie','services','Post LinkedIn : leçon apprise',
'[Situation de départ en une phrase choc].\n\nIl y a [durée], [ce qui s’est passé].\n\nCe que j’en ai retenu :\n→ [leçon 1]\n→ [leçon 2]\n→ [leçon 3]\n\nEt vous, quelle leçon vous a coûté le plus cher ?');
  P('vente','services','Offre de service',
'Vous êtes [cible] et [problème] ?\n\nJ’aide [cible] à [résultat] grâce à [méthode], en [durée].\n\nCe que vous obtenez :\n✔️ [livrable 1]\n✔️ [livrable 2]\n✔️ [livrable 3]\n\n[Nombre] places ce mois-ci. Appel découverte gratuit : lien en commentaire.');
  P('temoignage','services','Étude de cas LinkedIn',
'[Client] avait [problème].\n\nEn [durée], on a :\n1. [action]\n2. [action]\n3. [action]\n\nRésultat : [résultat mesurable].\n\nLe plus important n’était pas [ce qu’on croit], mais [vrai facteur clé].\n\nVous vivez la même chose ? Parlons-en.');
  P('coulisses','services','Les coulisses d’un projet',
'Ce que mes clients ne voient pas (et c’est normal) 👇\n\n• [Étape invisible 1]\n• [Étape invisible 2]\n• [Étape invisible 3]\n\nC’est 80 % du travail pour 20 % de ce qui se voit. Et c’est là que se joue la qualité.');

  window.MCD_SCRIPTS=L;
  window.MCD_SCRIPTS_META={
    objectifs:{vente:'💰 Vendre',engagement:'💬 Engagement',pedagogie:'🎓 Conseils',coulisses:'🎬 Coulisses',temoignage:'⭐ Avis clients',lancement:'🚀 Lancement',evenement:'📅 Événement',fidelite:'🎁 Fidélité',recrutement:'🤝 Recrutement'},
    metiers:{tous:'Tous métiers',resto:'Restaurant & café',beaute:'Beauté & coiffure',artisan:'Artisan & travaux',commerce:'Boutique',sante:'Santé & bien-être',coach:'Coach & sport',immo:'Immobilier',services:'Services & B2B'}
  };
})();
