/* Studio Social · Atelier de Marshall
   Module ajouté à studio-social.html, sur ORDINATEUR SEULEMENT (règle du Studio : la version mobile n'est jamais touchée).
   Il ne modifie pas le code de l'application : il se branche sur la légende (#cap), les hashtags (#tags), le lien en DM (#dm-link)
   et la barre des vues (.nav-item[data-view]), et lit les publications en lecture seule (base Supabase, ou mémoire locale en démo).
   Ce qu'il retient (favoris, idées, groupes de hashtags, objectif) reste dans ce navigateur (localStorage, préfixe mcd_atelier_). */
(function () {
  'use strict';
  var html = document.documentElement;
  if (html.getAttribute('data-device') === 'mobile' || innerWidth <= 760) return;

  /* ====================================================================== */
  /* Outils de base                                                          */
  /* ====================================================================== */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var memo = {
    lire: function (k, def) { try { var v = localStorage.getItem('mcd_atelier_' + k); return v == null ? def : JSON.parse(v); } catch (e) { return def; } },
    ecrire: function (k, v) { try { localStorage.setItem('mcd_atelier_' + k, JSON.stringify(v)); } catch (e) {} }
  };
  function jour(d) { return d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' }); }
  function cle(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function copier(texte, bouton) {
    function ok() { if (bouton) { var t = bouton.textContent; bouton.textContent = 'Copié ✓'; setTimeout(function () { bouton.textContent = t; }, 1400); } }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texte).then(ok, function () { repli(); });
    else repli();
    function repli() { var z = document.createElement('textarea'); z.value = texte; document.body.appendChild(z); z.select(); try { document.execCommand('copy'); ok(); } catch (e) {} z.remove(); }
  }
  function message(t) {
    var m = $('#at-message');
    if (!m) { m = document.createElement('div'); m.id = 'at-message'; m.className = 'at-rappel'; m.setAttribute('role', 'status'); document.body.appendChild(m); }
    m.innerHTML = '<span></span>'; m.firstChild.textContent = t; m.hidden = false;
    clearTimeout(m._t); m._t = setTimeout(function () { m.hidden = true; }, 2600);
  }

  /* Légende : toujours passer par un événement « input » pour que l'application enregistre le changement */
  function legende() { return $('#cap'); }
  function lireLegende() { var c = legende(); return c ? c.value : ''; }
  function ecrireLegende(v, garderVersion) {
    var c = legende(); if (!c) return;
    if (garderVersion !== false) versionner(c.value);
    c.value = v; c.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function inserer(texte) {
    var c = legende(); if (!c) return;
    var a = c.selectionStart == null ? c.value.length : c.selectionStart, b = c.selectionEnd == null ? a : c.selectionEnd;
    var avant = c.value.slice(0, a), apres = c.value.slice(b);
    ecrireLegende(avant + texte + apres);
    var p = (avant + texte).length; c.focus(); try { c.setSelectionRange(p, p); } catch (e) {}
  }
  function remplacerSelection(fn) {
    var c = legende(); if (!c) return;
    var a = c.selectionStart, b = c.selectionEnd;
    if (a === b) { message('Sélectionne d’abord le texte à transformer.'); return; }
    var nouveau = fn(c.value.slice(a, b));
    ecrireLegende(c.value.slice(0, a) + nouveau + c.value.slice(b));
    c.focus(); try { c.setSelectionRange(a, a + nouveau.length); } catch (e) {}
  }
  function champ(id) { var e = $('#' + id); return e; }
  function ecrireChamp(id, v) { var e = champ(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); }
  function allerVue(nom) { var n = $('.nav-item[data-view="' + nom + '"]'); if (n) n.click(); }
  function ouvrirComposeur() {
    allerVue('composer');
    setTimeout(function () {
      var c = legende(); if (!c) return;
      // La légende vit dans l'étape « Publier » : si elle est cachée, le texte est gardé et on le dit
      if (c.offsetParent) c.focus(); else message('Texte ajouté à ta légende : tu le retrouveras à l’étape « Publier ».');
    }, 300);
  }

  /* ====================================================================== */
  /* Données d'aide (repères généraux, écrits pour les commerçants)          */
  /* ====================================================================== */
  var METIERS = {
    'Boulangerie': '#boulangerie #painmaison #artisanboulanger #viennoiseries #croissant #baguette #faitmaison #boulangeriefrancaise #painaulevain #gourmandise',
    'Pâtisserie': '#patisserie #patisseriefrancaise #faitmaison #gourmandise #dessert #artisanpatissier #entremets #chocolat #sucre #foodporn',
    'Restaurant': '#restaurant #faitmaison #cuisinefrancaise #produitslocaux #bonneadresse #chef #platdujour #gastronomie #foodlover #restaurantparis',
    'Café · bar': '#cafe #coffeetime #barista #brunch #terrasse #apero #cocktail #bonneadresse #coffeeshop #latteart',
    'Fleuriste': '#fleuriste #fleurs #bouquet #artfloral #fleursdesaison #composition #mariage #flowerlovers #bouquetdefleurs #fleuristefrancais',
    'Coiffure': '#coiffure #coiffeur #salondecoiffure #balayage #coloration #coupe #cheveux #hairstyle #hairfrance #coiffurefemme',
    'Esthétique · beauté': '#institutdebeaute #esthetique #soinvisage #beaute #manucure #ongles #bienetre #massage #skincare #beautefrancaise',
    'Boutique mode': '#boutique #modefemme #nouvellecollection #lookdujour #shoppingaddict #pretaporter #tendance #ootd #conceptstore #madeinfrance',
    'Épicerie fine': '#epiceriefine #produitslocaux #circuitcourt #terroir #gourmet #faitmaison #producteurslocaux #bio #epicerie #idéecadeau',
    'Caviste': '#caviste #vin #vinfrancais #degustation #vinnaturel #cave #accordmetsvins #oenologie #champagne #winelover',
    'Boucherie · traiteur': '#boucherie #artisanboucher #viandefrancaise #traiteur #charcuterie #faitmaison #circuitcourt #bbq #qualite #terroir',
    'Artisan du bâtiment': '#artisan #renovation #travaux #batiment #savoirfaire #avantapres #chantier #maison #decoration #artisanfrancais',
    'Garage': '#garage #mecanique #entretienauto #reparation #voiture #pneus #carrosserie #auto #garagiste #automobile',
    'Immobilier': '#immobilier #agenceimmobiliere #avendre #alouer #maison #appartement #investissement #visite #nouveaumandat #immo',
    'Coach sportif': '#coachsportif #fitness #sport #motivation #bienetre #musculation #remiseenforme #training #santé #coaching',
    'Librairie': '#librairie #livres #lecture #coupdecoeur #bookstagram #rentreelitteraire #librairieindependante #roman #bd #jeunesse'
  };
  var LOCAL = '#paris #iledefrance #commercedeproximite #consommerlocal';

  var MODELES = [
    { id: 'nouveaute', nom: 'Nouveauté', texte: '✨ Nouveau chez [Nom] !\n\n[Décris le produit en une phrase qui donne envie.]\n\nDisponible dès [date] en boutique. Vous allez adorer 😍\n\n👉 [Appel à l’action]' },
    { id: 'promo', nom: 'Promotion', texte: '🔥 [Remise] sur [produit] jusqu’au [date] !\n\nC’est le moment de [bénéfice pour le client].\n\n📍 [Adresse]\n⏰ [Horaires]\n\n👉 [Appel à l’action]' },
    { id: 'coulisses', nom: 'Coulisses', texte: '👀 Dans les coulisses de [Nom]…\n\nChaque matin, [geste, étape, savoir-faire].\nC’est ce qui fait la différence dans [produit].\n\nVous saviez ? Dites-le-nous en commentaire 👇' },
    { id: 'avis', nom: 'Avis client', texte: '💬 « [Citation de l’avis] »\n— [Prénom], cliente depuis [durée]\n\nMerci pour ce message qui nous touche ❤️\nVous aussi, laissez-nous votre avis : [lien]' },
    { id: 'evenement', nom: 'Événement', texte: '📅 Rendez-vous le [date] à [heure] !\n\n[Nom de l’événement] : [ce qui se passe, ce qu’on y gagne].\n\n📍 [Adresse]\nPlaces limitées, réservez vite 👉 [lien]' },
    { id: 'conseil', nom: 'Conseil', texte: '💡 Notre astuce du jour : [conseil concret].\n\nPourquoi ? [Explication simple en une phrase.]\n\nEnregistrez ce post pour ne pas l’oublier 📌' },
    { id: 'equipe', nom: 'Présenter l’équipe', texte: '👋 Voici [Prénom], [rôle] chez [Nom] depuis [durée].\n\nSa spécialité : [spécialité].\nSon conseil préféré : « [conseil] »\n\nVenez lui dire bonjour !' },
    { id: 'question', nom: 'Question / sondage', texte: '🤔 Petite question pour vous :\n\n[Option A] ou [Option B] ?\n\nRépondez en commentaire, on lit tout 👇' },
    { id: 'concours', nom: 'Jeu concours', texte: '🎁 CONCOURS 🎁\n\nÀ gagner : [lot] !\n\nPour participer :\n1️⃣ Abonnez-vous à @[compte]\n2️⃣ Likez ce post\n3️⃣ Identifiez 2 amis en commentaire\n\nTirage au sort le [date]. Bonne chance 🍀' },
    { id: 'horaires', nom: 'Horaires / fermeture', texte: '📢 Info pratique\n\n[Fermeture exceptionnelle / nouveaux horaires] : [détails].\n\nOn vous retrouve dès le [date] ! Merci de votre compréhension 🙏' }
  ];
  var CTAS = {
    'Venir en boutique': ['📍 On vous attend en boutique !', '👉 Passez nous voir, on vous garde le meilleur.', '⏰ Ouvert dès [heure], à tout à l’heure !'],
    'Réserver / commander': ['👉 Réservez en un clic : lien en bio.', '📲 Commandez par message, on prépare tout pour vous.', '☎️ Réservation au [téléphone] ou en DM.'],
    'Faire réagir': ['👇 Dites-nous en commentaire !', '❤️ Double-tapez si vous aussi…', '🏷️ Identifiez la personne qui doit voir ça.'],
    'Garder le post': ['📌 Enregistrez ce post pour plus tard.', '🔁 Partagez-le à quelqu’un que ça aidera.'],
    'S’abonner': ['➕ Abonnez-vous pour ne rien rater.', '🔔 Activez les notifications pour voir nos nouveautés en premier.']
  };
  var REPONSES = [
    { nom: 'Merci pour un avis 5 étoiles', texte: 'Merci beaucoup [Prénom] pour ce super retour ! 😊 Toute l’équipe est ravie. Au plaisir de vous revoir très vite chez [Nom] !' },
    { nom: 'Avis négatif (apaiser)', texte: 'Bonjour [Prénom], merci d’avoir pris le temps de nous écrire. Nous sommes désolés que votre expérience n’ait pas été à la hauteur. Pouvez-vous nous contacter en message privé ? Nous tenons à comprendre et à arranger les choses.' },
    { nom: 'Question sur le prix', texte: 'Bonjour ! Je vous envoie toutes les infos en message privé 📩' },
    { nom: 'Question sur les horaires', texte: 'Bonjour ! Nous sommes ouverts [jours] de [heure] à [heure]. À très vite 😊' },
    { nom: 'Compliment en commentaire', texte: 'Merci, ça nous fait vraiment plaisir ! 🙏❤️' },
    { nom: 'Demande de réservation', texte: 'Avec plaisir ! Envoyez-nous la date, l’heure et le nombre de personnes en message privé, on vous confirme tout de suite 📅' },
    { nom: 'Produit épuisé', texte: 'Victime de son succès 😅 ! Il revient [date]. Voulez-vous qu’on vous en mette un de côté ?' }
  ];
  var EMOJI_MOTS = [
    [/pain|baguette|boulang/i, '🥖'], [/croissant|viennois/i, '🥐'], [/g[aâ]teau|p[aâ]tiss|dessert/i, '🍰'], [/chocolat/i, '🍫'], [/caf[eé]/i, '☕'],
    [/vin|cave|apéro|apero/i, '🍷'], [/bi[eè]re/i, '🍺'], [/fleur|bouquet/i, '💐'], [/rose\b/i, '🌹'], [/coiff|cheveu/i, '💇'],
    [/ongle|manucure/i, '💅'], [/promo|remise|soldes|r[eé]duction/i, '🔥'], [/nouveau|nouveaut[eé]/i, '✨'], [/cadeau|offert/i, '🎁'],
    [/no[eë]l/i, '🎄'], [/f[eê]te|anniversaire/i, '🎉'], [/amour|coeur|cœur|saint-valentin/i, '❤️'], [/soleil|[eé]t[eé]/i, '☀️'],
    [/pluie|automne/i, '🍂'], [/hiver|neige/i, '❄️'], [/printemps/i, '🌸'], [/merci/i, '🙏'], [/horaire|heure|ouvert/i, '⏰'],
    [/adresse|boutique|magasin/i, '📍'], [/t[eé]l[eé]phone|appel/i, '☎️'], [/r[eé]serv/i, '📅'], [/livraison|livr/i, '🚚'],
    [/sport|coach|training/i, '💪'], [/livre|lecture/i, '📚'], [/maison|appartement|immo/i, '🏡'], [/voiture|garage|auto/i, '🚗'],
    [/viande|boucher|bbq/i, '🥩'], [/fromage/i, '🧀'], [/l[eé]gume|bio|local/i, '🥕'], [/concours|gagner/i, '🍀']
  ];
  var HORAIRES = [
    ['Instagram', 'mar · mer · ven', '11 h – 13 h et 18 h – 20 h'], ['Facebook', 'mar · mer · jeu', '9 h – 13 h'],
    ['TikTok', 'mar · jeu · ven', '18 h – 22 h'], ['X', 'lun → ven', '8 h – 10 h et 12 h – 13 h'],
    ['LinkedIn', 'mar · mer · jeu', '8 h – 10 h'], ['Pinterest', 'sam · dim', '20 h – 23 h'], ['Threads', 'lun → ven', '9 h – 12 h']
  ];
  var HORAIRES_METIER = {
    'Boulangerie': 'Publier tôt (7 h – 9 h) pour donner envie avant le passage en boutique, et vers 16 h pour le goûter.',
    'Pâtisserie': 'Jeudi et vendredi après-midi : on prépare le dessert du week-end.',
    'Restaurant': '11 h (avant le déjeuner) et 17 h 30 (avant le dîner). Le plat du jour, le matin même.',
    'Café · bar': 'Le matin pour le café, jeudi-vendredi 17 h pour l’apéro.',
    'Fleuriste': 'Jeudi soir et samedi matin, plus les veilles de fêtes (Saint-Valentin, fête des mères).',
    'Coiffure': 'Dimanche soir et lundi : on réserve pour la semaine.',
    'Boutique mode': 'Mercredi et samedi matin : jours de shopping.',
    'Caviste': 'Jeudi-vendredi en fin de journée : on choisit le vin du week-end.'
  };

  // Temps forts de l'année (France) : une idée de post pour chacun, calculés pour l'année en cours et la suivante
  function paques(a) { var f = Math.floor, G = a % 19, C = f(a / 100), H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30, I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)), J = (a + f(a / 4) + I + 2 - C + f(C / 4)) % 7, L = I - J, m = 3 + f((L + 40) / 44), j = L + 28 - 31 * f(m / 4); return new Date(a, m - 1, j); }
  function nieme(a, mois, jourSemaine, n) { var d = new Date(a, mois, 1); while (d.getDay() !== jourSemaine) d.setDate(d.getDate() + 1); d.setDate(d.getDate() + 7 * (n - 1)); return d; }
  function dernier(a, mois, jourSemaine) { var d = new Date(a, mois + 1, 0); while (d.getDay() !== jourSemaine) d.setDate(d.getDate() - 1); return d; }
  function plus(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function tempsForts(a) {
    var p = paques(a), fm = dernier(a, 4, 0); if (cle(fm) === cle(plus(p, 49))) fm = plus(fm, 7);
    return [
      [new Date(a, 0, 1), 'Nouvel an', 'Remerciez vos clients pour l’année et partagez une bonne résolution de la maison.'],
      [new Date(a, 0, 6), 'Épiphanie · galette des rois', 'Galette, fève, couronne : la photo qui donne faim (boulangeries, pâtisseries, restaurants).'],
      [nieme(a, 0, 3, 2), 'Soldes d’hiver', 'Annoncez vos remises et ce qui part vite.'],
      [new Date(a, 1, 2), 'Chandeleur', 'Crêpes maison, recette ou offre spéciale.'],
      [new Date(a, 1, 14), 'Saint-Valentin', 'Idées cadeaux, menu en duo, bouquet : à publier une semaine avant.'],
      [plus(p, -47), 'Mardi gras', 'Beignets, déguisements, bonne humeur.'],
      [nieme(a, 2, 0, 1), 'Fête des grands-mères', 'Un cadeau pour mamie : bouquet, gourmandise, séance photo…'],
      [new Date(a, 2, 8), 'Journée des droits des femmes', 'Mettez en avant les femmes de l’équipe ou des clientes inspirantes.'],
      [new Date(a, 2, 20), 'Printemps', 'Nouvelle saison, nouvelle collection, nouvelle carte.'],
      [new Date(a, 3, 1), '1er avril', 'Un poisson d’avril gentil : idéal pour l’engagement.'],
      [p, 'Pâques', 'Chocolats, chasse aux œufs, menu de Pâques.'],
      [new Date(a, 4, 1), '1er mai', 'Muguet, horaires du jour férié.'],
      [fm, 'Fête des mères', 'Le temps fort cadeaux du printemps : idées à moins de 30 €, bons cadeaux.'],
      [nieme(a, 5, 0, 3), 'Fête des pères', 'Idées cadeaux pour papa, atelier, dégustation.'],
      [new Date(a, 5, 21), 'Fête de la musique', 'Animation, playlist de la boutique, horaires prolongés.'],
      [dernier(a, 5, 3), 'Soldes d’été', 'Remises, dernières tailles, nouveautés à prix doux.'],
      [new Date(a, 6, 14), '14 juillet', 'Horaires du jour férié, bleu-blanc-rouge en vitrine.'],
      [new Date(a, 7, 15), 'Mi-août', 'Fermeture ou ouverture estivale : prévenez vos clients.'],
      [new Date(a, 8, 1), 'Rentrée', 'Nouveaux horaires, nouveautés de septembre, bonnes résolutions.'],
      [nieme(a, 8, 6, 3), 'Journées du patrimoine', 'Racontez l’histoire de votre boutique ou de votre quartier.'],
      [new Date(a, 9, 16), 'Journée mondiale du pain / de l’alimentation', 'Le savoir-faire derrière vos produits.'],
      [new Date(a, 9, 31), 'Halloween', 'Vitrine, produits ou maquillage effrayants 🎃.'],
      [new Date(a, 10, 13), 'Journée de la gentillesse', 'Un petit geste pour vos clients, un merci public.'],
      [nieme(a, 10, 4, 3), 'Beaujolais nouveau', 'Dégustation, accord mets-vins (cavistes, bars, restaurants).'],
      [plus(nieme(a, 10, 4, 4), 1), 'Black Friday', 'Offre limitée, ou au contraire « pas de Black Friday ici, mais… ».'],
      [new Date(a, 11, 1), 'Début de l’Avent', 'Calendrier de l’Avent sur vos réseaux : une surprise par jour.'],
      [new Date(a, 11, 6), 'Saint-Nicolas', 'Douceurs et cadeaux pour les enfants.'],
      [new Date(a, 11, 15), 'Derniers cadeaux de Noël', 'Bons cadeaux, retrait en boutique, horaires élargis.'],
      [new Date(a, 11, 25), 'Noël', 'Joyeux Noël en photo d’équipe.'],
      [new Date(a, 11, 31), 'Réveillon', 'Menu, commandes, horaires du 31.']
    ].map(function (x) { return { date: x[0], nom: x[1], idee: x[2] }; });
  }
  function aVenir(jours, tous) {
    var a = new Date(); a.setHours(0, 0, 0, 0); var fin = plus(a, jours);
    return tempsForts(a.getFullYear()).concat(tempsForts(a.getFullYear() + 1))
      .filter(function (t) { return t.date >= a && t.date <= fin && (tous || pertinent(t)); }).sort(function (x, y) { return x.date - y.date; });
  }

  /* ====================================================================== */
  /* Publications (lecture seule) : la copie locale que le Studio tient à jour */
  /* ====================================================================== */
  /* Le Studio recopie dans localStorage (mcd_social_posts_<identifiant>) les posts qu'il a chargés depuis la base,
     déjà filtrés sur l'utilisateur, ou sur le client géré en mode agence. L'Atelier lit cette copie, et seulement
     celle du compte actif : aucune requête Supabase en plus, aucun 2ᵉ client de connexion, jamais les posts d'un autre compte. */
  var PREFIXE_POSTS = 'mcd_social_posts_', cleActive = '';
  try {
    var ecrireOrig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      if (this === window.localStorage && typeof k === 'string' && k.indexOf(PREFIXE_POSTS) === 0) cleActive = k;   // la dernière copie écrite par le Studio = le compte affiché
      return ecrireOrig.apply(this, arguments);
    };
  } catch (e) {}
  function uidSession() {
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (/^sb-.*-auth-token$/.test(k)) { var o = JSON.parse(localStorage.getItem(k) || 'null'); if (o && o.user && o.user.id) return o.user.id; } } } catch (e) {}
    return '';
  }
  function cleDesPosts() {
    if (cleActive) return cleActive;
    var uid = uidSession(); if (uid) return PREFIXE_POSTS + uid;
    if (window.MCD_DEMO) { try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (/^mcd_social_posts_demo/.test(k)) return k; } } catch (e) {} }
    return PREFIXE_POSTS + 'anon';
  }
  var cachePosts = null, cacheQuand = 0;
  function postsLocaux() {
    var l = [];
    try { l = JSON.parse(localStorage.getItem(cleDesPosts()) || '[]'); } catch (e) {}
    if (!Array.isArray(l)) l = [];
    return l.map(function (p) { return { caption: p.caption || '', tags: p.tags || '', nets: p.nets || p.networks || [], status: p.status || 'draft', scheduled_at: p.scheduled_at || null, created_at: p.created_at || null }; })
      .sort(function (a, b) { return new Date(b.created_at || 0) - new Date(a.created_at || 0); });
  }
  async function lirePosts() {
    if (cachePosts && Date.now() - cacheQuand < 10000) return cachePosts;
    cachePosts = postsLocaux(); cacheQuand = Date.now();
    return cachePosts;
  }
  function datePost(p) { return new Date(p.scheduled_at || p.created_at || 0); }
  function estProgramme(p) { return p.scheduled_at && new Date(p.scheduled_at) > new Date() && p.status !== 'draft'; }
  function estPublie(p) { return /publi|sent|done|success|posted/i.test(p.status || '') || (p.scheduled_at && new Date(p.scheduled_at) <= new Date() && p.status !== 'draft'); }

  /* ====================================================================== */
  /* 1 · Historique des versions de la légende (20 dernières)                */
  /* ====================================================================== */
  var versions = [];
  function versionner(v) { if (!v || versions[versions.length - 1] === v) return; versions.push(v); if (versions.length > 20) versions.shift(); }

  /* ====================================================================== */
  /* 2 · Typographie française                                               */
  /* ====================================================================== */
  function typographie(t) {
    return t
      .replace(/\.\.\./g, '…')
      .replace(/(\w)'(\w)/g, '$1’$2')
      .replace(/"([^"\n]+)"/g, '« $1 »')
      .replace(/«\s*/g, '«\u00A0').replace(/\s*»/g, '\u00A0»')
      .replace(/(\S)\s*([;:!?])(?=\s|$)/g, function (m, a, p) { return /[:/]/.test(a) || /https?$/.test(a) ? m : a + '\u202F' + p; })
      .replace(/ {2,}/g, ' ');
  }

  /* ====================================================================== */
  /* 3 · Gras / italique Unicode (lisible sur Instagram, LinkedIn…)         */
  /* ====================================================================== */
  function styleUnicode(t, style) {
    var base = { gras: [0x1D5D4, 0x1D5EE, 0x1D7EC], italique: [0x1D608, 0x1D622, null] }[style];
    var accents = { 'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e', 'à': 'a', 'â': 'a', 'ä': 'a', 'î': 'i', 'ï': 'i', 'ô': 'o', 'ö': 'o', 'ù': 'u', 'û': 'u', 'ü': 'u', 'ç': 'c', 'É': 'E', 'È': 'E', 'Ê': 'E', 'À': 'A', 'Ç': 'C' };
    return Array.from(t).map(function (ch) {
      var c = ch, combinant = '';
      if (accents[ch]) { c = accents[ch]; combinant = { 'é': '\u0301', 'É': '\u0301', 'è': '\u0300', 'È': '\u0300', 'à': '\u0300', 'À': '\u0300', 'ù': '\u0300', 'ç': '\u0327', 'Ç': '\u0327' }[ch] || ({ 'ê': '\u0302', 'Ê': '\u0302', 'â': '\u0302', 'î': '\u0302', 'ô': '\u0302', 'û': '\u0302' }[ch] || '\u0308'); }
      var k = c.charCodeAt(0);
      if (k >= 65 && k <= 90) return String.fromCodePoint(base[0] + k - 65) + combinant;
      if (k >= 97 && k <= 122) return String.fromCodePoint(base[1] + k - 97) + combinant;
      if (k >= 48 && k <= 57 && base[2]) return String.fromCodePoint(base[2] + k - 48);
      return ch;
    }).join('');
  }

  /* ====================================================================== */
  /* 4 · Version courte pour X (280 caractères)                              */
  /* ====================================================================== */
  function versionCourte(t, tags) {
    var max = 280, propre = t.replace(/\n{2,}/g, '\n').trim();
    var tg = (tags || '').split(/[\s,]+/).filter(function (x) { return /^#/.test(x); }).slice(0, 2).join(' ');
    var place = max - (tg ? tg.length + 1 : 0);
    if (propre.length > place) {
      var phrases = propre.match(/[^.!?…\n]+[.!?…]*\s*/g) || [propre], out = '';
      for (var i = 0; i < phrases.length; i++) { if ((out + phrases[i]).trim().length > place - 1) break; out += phrases[i]; }
      propre = (out.trim() || Array.from(propre).slice(0, place - 1).join('')).trim();
      if (propre.length > place) propre = Array.from(propre).slice(0, place - 1).join('') + '…';
    }
    return (propre + (tg ? '\n' + tg : '')).trim();
  }

  /* ====================================================================== */
  /* 5 · Barre d'outils sous la légende                                      */
  /* ====================================================================== */
  function popover(bouton, contenu) {
    fermerPop();
    var p = document.createElement('div'); p.className = 'at-pop'; p.innerHTML = contenu; document.body.appendChild(p);
    var r = bouton.getBoundingClientRect();
    p.style.left = Math.min(innerWidth - p.offsetWidth - 12, r.left + scrollX) + 'px';
    p.style.top = (r.bottom + scrollY + 6) + 'px';
    setTimeout(function () { document.addEventListener('click', fermerPop, { once: true }); }, 0);
    p.addEventListener('click', function (e) { e.stopPropagation(); });
    return p;
  }
  function fermerPop() { $$('.at-pop').forEach(function (p) { p.remove(); }); }

  function barreLegende() {
    var c = legende(); if (!c || $('#at-barre')) return;
    var barre = document.createElement('div'); barre.id = 'at-barre'; barre.className = 'at-barre';
    barre.innerHTML = '<span class="at-lbl">Atelier</span>' +
      '<button type="button" class="at-chip" data-at="modele">📝 Modèles</button>' +
      '<button type="button" class="at-chip" data-at="cta">👉 Appel à l’action</button>' +
      '<button type="button" class="at-chip" data-at="typo" title="Espaces avant : ; ! ?, guillemets « », apostrophes, points de suspension">« » Typographie</button>' +
      '<button type="button" class="at-chip" data-at="style">𝗚 Gras / italique</button>' +
      '<button type="button" class="at-chip" data-at="casse">Aa Casse</button>' +
      '<button type="button" class="at-chip" data-at="puces">• Puces</button>' +
      '<button type="button" class="at-chip" data-at="decompte">⏳ Compte à rebours</button>' +
      '<button type="button" class="at-chip" data-at="court">X · Version courte</button>' +
      '<button type="button" class="at-chip" data-at="copier">⧉ Copier tout</button>' +
      '<button type="button" class="at-chip" data-at="versions">↶ Versions</button>' +
      '<button type="button" class="at-chip" data-at="favori">☆ Favori</button>' +
      '<button type="button" class="at-chip" data-at="zen">⛶ Concentration</button>';
    var infos = document.createElement('div'); infos.id = 'at-infos'; infos.className = 'at-infos';
    var accroche = document.createElement('div'); accroche.id = 'at-accroche'; accroche.className = 'at-accroche'; accroche.hidden = true;
    var emojis = document.createElement('div'); emojis.id = 'at-emojis'; emojis.className = 'at-emojis';
    c.insertAdjacentElement('afterend', barre);
    barre.insertAdjacentElement('afterend', infos);
    infos.insertAdjacentElement('afterend', accroche);
    accroche.insertAdjacentElement('afterend', emojis);

    barre.addEventListener('click', function (e) {
      var b = e.target.closest('[data-at]'); if (!b) return; e.stopPropagation();
      var a = b.dataset.at;
      if (a === 'modele') {
        var p = popover(b, '<h4>Modèles de légende</h4>' + MODELES.map(function (m) { return '<button data-m="' + m.id + '">' + esc(m.nom) + '</button>'; }).join('') + '<small>Les [crochets] sont à remplacer.</small>');
        p.addEventListener('click', function (ev) { var x = ev.target.closest('[data-m]'); if (!x) return; var m = MODELES.find(function (y) { return y.id === x.dataset.m; }); ecrireLegende(lireLegende() ? lireLegende() + '\n\n' + avecNom(m.texte) : avecNom(m.texte)); fermerPop(); });
      } else if (a === 'cta') {
        var h = Object.keys(CTAS).map(function (k) { return '<h4>' + esc(k) + '</h4>' + CTAS[k].map(function (t) { return '<button data-t="' + esc(t) + '">' + esc(t) + '</button>'; }).join(''); }).join('');
        var p2 = popover(b, h);
        p2.addEventListener('click', function (ev) { var x = ev.target.closest('[data-t]'); if (!x) return; var v = lireLegende().replace(/\s+$/, ''); ecrireLegende((v ? v + '\n\n' : '') + x.dataset.t); fermerPop(); });
      } else if (a === 'typo') {
        var avant = lireLegende(), apres = typographie(avant);
        if (apres === avant) message('La typographie est déjà bonne.'); else { ecrireLegende(apres); message('Typographie française appliquée.'); }
      } else if (a === 'style') {
        var p3 = popover(b, '<h4>Sur le texte sélectionné</h4><button data-s="gras">𝗚𝗿𝗮𝘀</button><button data-s="italique">𝘐𝘵𝘢𝘭𝘪𝘲𝘶𝘦</button><small>À utiliser avec modération : les lecteurs d’écran lisent mal ces caractères.</small>');
        p3.addEventListener('click', function (ev) { var x = ev.target.closest('[data-s]'); if (!x) return; fermerPop(); remplacerSelection(function (t) { return styleUnicode(t, x.dataset.s); }); });
      } else if (a === 'casse') {
        var p4 = popover(b, '<h4>Sur le texte sélectionné</h4><button data-c="maj">MAJUSCULES</button><button data-c="min">minuscules</button><button data-c="phrase">Début de phrase</button>');
        p4.addEventListener('click', function (ev) { var x = ev.target.closest('[data-c]'); if (!x) return; fermerPop(); remplacerSelection(function (t) { return x.dataset.c === 'maj' ? t.toLocaleUpperCase('fr') : x.dataset.c === 'min' ? t.toLocaleLowerCase('fr') : t.toLocaleLowerCase('fr').replace(/(^|[.!?]\s+|\n)(\p{L})/gu, function (m, s, l) { return s + l.toLocaleUpperCase('fr'); }); }); });
      } else if (a === 'puces') {
        var p5 = popover(b, '<h4>Devant chaque ligne sélectionnée</h4>' + ['•', '✅', '➡️', '✨', '📍', '1️⃣ 2️⃣ 3️⃣'].map(function (x) { return '<button data-p="' + x + '">' + x + '</button>'; }).join(''));
        p5.addEventListener('click', function (ev) { var x = ev.target.closest('[data-p]'); if (!x) return; fermerPop(); var n = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
          remplacerSelection(function (t) { var i = 0; return t.split('\n').map(function (l) { if (!l.trim()) return l; var pre = x.dataset.p.indexOf('1️⃣') === 0 ? n[Math.min(i++, 9)] : x.dataset.p; return pre + ' ' + l.replace(/^\s*([•✅➡️✨📍]|\d️⃣)\s*/u, ''); }).join('\n'); }); });
      } else if (a === 'decompte') {
        var p6 = popover(b, '<h4>Compte à rebours</h4><div style="display:grid;gap:6px;padding:4px"><input id="at-dc-nom" placeholder="Événement (ex. nos soldes)" style="border:1.5px solid #f0dcc6;border-radius:9px;padding:7px"><input id="at-dc-date" type="date" style="border:1.5px solid #f0dcc6;border-radius:9px;padding:7px"><button class="at-btn" id="at-dc-ok" style="text-align:center">Insérer</button></div>');
        $('#at-dc-ok', p6).addEventListener('click', function () {
          var d = new Date($('#at-dc-date', p6).value + 'T00:00'), nom = $('#at-dc-nom', p6).value.trim() || 'le jour J';
          if (isNaN(d)) return; var auj = new Date(); auj.setHours(0, 0, 0, 0); var n = Math.round((d - auj) / 864e5);
          inserer(n > 1 ? '⏳ Plus que ' + n + ' jours avant ' + nom + ' !' : n === 1 ? '⏳ C’est demain : ' + nom + ' !' : n === 0 ? '🎉 C’est aujourd’hui : ' + nom + ' !' : '');
          fermerPop();
        });
      } else if (a === 'court') {
        var court = versionCourte(lireLegende(), (champ('tags') || {}).value);
        var p7 = popover(b, '<h4>Version courte · ' + court.length + ' / 280</h4><div style="white-space:pre-wrap;padding:6px 8px;background:#f6f9fb;border-radius:9px;max-height:200px;overflow:auto" id="at-court"></div><button class="at-btn" id="at-court-copier" style="text-align:center;margin-top:6px">Copier</button>');
        $('#at-court', p7).textContent = court;
        $('#at-court-copier', p7).addEventListener('click', function () { copier(court, this); });
      } else if (a === 'copier') {
        var tags = (champ('tags') || {}).value || '';
        copier(lireLegende() + (tags.trim() ? '\n\n' + tags.trim() : ''), b);
      } else if (a === 'versions') {
        var v = versions.slice().reverse();
        var p8 = popover(b, '<h4>Versions précédentes</h4>' + (v.length ? v.map(function (t, i) { return '<button data-v="' + (v.length - 1 - i) + '">' + esc(t.slice(0, 70)) + (t.length > 70 ? '…' : '') + '</button>'; }).join('') : '<small>Aucune version pour l’instant : elles s’enregistrent quand un outil de l’Atelier change le texte, ou toutes les 30 secondes de frappe.</small>'));
        p8.addEventListener('click', function (ev) { var x = ev.target.closest('[data-v]'); if (!x) return; ecrireLegende(versions[+x.dataset.v]); fermerPop(); message('Version restaurée.'); });
      } else if (a === 'favori') {
        var t = lireLegende().trim(); if (!t) { message('La légende est vide.'); return; }
        var f = memo.lire('favoris', []); if (f.some(function (x) { return x.texte === t; })) { message('Déjà dans tes favoris.'); return; }
        f.unshift({ texte: t, quand: Date.now() }); memo.ecrire('favoris', f.slice(0, 60)); message('Ajoutée à tes légendes favorites ☆');
      } else if (a === 'zen') zen();
    });

    c.addEventListener('input', majInfos);
    var dernierePause = 0;
    c.addEventListener('input', function () { if (Date.now() - dernierePause > 30000) { dernierePause = Date.now(); versionner(c.value); } });
    majInfos();
  }

  // Infos de lecture + accroche visible + émojis suggérés
  function majInfos() {
    var t = lireLegende(), infos = $('#at-infos'); if (!infos) return;
    var mots = (t.match(/[\p{L}\p{N}’'-]+/gu) || []).length;
    var phrases = t.split(/[.!?…\n]+/).map(function (x) { return x.trim(); }).filter(Boolean);
    var longues = phrases.filter(function (x) { return x.split(/\s+/).length > 25; }).length;
    var lecture = Math.max(1, Math.round(mots / 3.5));
    infos.innerHTML = t.trim() ? '<span><b>' + mots + '</b> mots</span><span>lecture ≈ <b>' + lecture + ' s</b></span>' +
      (longues ? '<span class="at-alerte">' + longues + ' phrase' + (longues > 1 ? 's' : '') + ' de plus de 25 mots : à couper</span>' : '<span>phrases courtes ✓</span>') : '';
    var acc = $('#at-accroche');
    if (t.trim().length > 60) {
      var car = Array.from(t), vis = car.slice(0, 125).join(''), coupe = car.length > 125;
      acc.innerHTML = '<small>Ce qu’on voit avant « … plus » sur Instagram</small>';
      acc.appendChild(document.createTextNode(vis.split('\n').slice(0, 2).join('\n')));
      if (coupe || t.split('\n').length > 2) acc.insertAdjacentHTML('beforeend', '<i> … plus</i>');
      acc.hidden = false;
    } else acc.hidden = true;
    var deja = t, prop = [];
    EMOJI_MOTS.forEach(function (x) { if (x[0].test(t) && deja.indexOf(x[1]) < 0 && prop.indexOf(x[1]) < 0) prop.push(x[1]); });
    var em = $('#at-emojis');
    em.innerHTML = prop.length ? '<span class="at-lbl" style="font:700 11.5px Fredoka,sans-serif;color:#8b7562;text-transform:uppercase;letter-spacing:.06em">Émojis suggérés</span>' + prop.slice(0, 8).map(function (e) { return '<button type="button" data-e="' + e + '" title="Insérer">' + e + '</button>'; }).join('') : '';
  }
  document.addEventListener('click', function (e) { var b = e.target.closest('#at-emojis [data-e]'); if (b) inserer(b.dataset.e); });

  /* ====================================================================== */
  /* 6 · Hashtags : nettoyeur, banque par métier, mes groupes               */
  /* ====================================================================== */
  function nettoyerHashtags(v) {
    var vus = {}, mentions = [], tags = [];
    v.split(/[\s,;]+/).forEach(function (m) {
      if (!m) return;
      if (m[0] === '@') { mentions.push(m); return; }
      var t = '#' + m.replace(/^#+/, '').replace(/[^\p{L}\p{N}_]/gu, '').toLocaleLowerCase('fr');
      if (t.length > 1 && !vus[t]) { vus[t] = 1; tags.push(t); }
    });
    return { texte: mentions.concat(tags.slice(0, 30)).join(' '), retires: Math.max(0, tags.length - 30) };
  }
  function barreHashtags() {
    var t = champ('tags'); if (!t || $('#at-tags')) return;
    var b = document.createElement('div'); b.id = 'at-tags'; b.className = 'at-barre';
    b.innerHTML = '<button type="button" class="at-chip" data-h="nettoyer" title="Doublons, # manquants, majuscules, limite de 30">🧹 Nettoyer</button>' +
      '<button type="button" class="at-chip" data-h="banque">🏷️ Par métier</button>' +
      '<button type="button" class="at-chip" data-h="groupes">📚 Mes groupes</button>' +
      '<span class="at-infos" id="at-tags-n" style="margin:0"></span>';
    t.insertAdjacentElement('afterend', b);
    function compter() { var n = (t.value.match(/#[\p{L}\p{N}_]+/gu) || []).length; $('#at-tags-n').innerHTML = n ? '<span><b>' + n + '</b> / 30 hashtags' + (n > 30 ? ' · <span class="at-alerte">au-delà, Instagram refuse</span>' : n > 15 ? ' · 8 à 15 suffisent souvent' : '') + '</span>' : ''; }
    t.addEventListener('input', compter); compter();
    b.addEventListener('click', function (e) {
      var x = e.target.closest('[data-h]'); if (!x) return; e.stopPropagation();
      if (x.dataset.h === 'nettoyer') { var r = nettoyerHashtags(t.value); ecrireChamp('tags', r.texte); compter(); message(r.retires ? r.retires + ' hashtag(s) au-delà de 30 retirés.' : 'Hashtags nettoyés.'); }
      else if (x.dataset.h === 'banque') {
        var p = popover(x, '<h4>Hashtags par métier</h4>' + Object.keys(METIERS).map(function (m) { return '<button data-m="' + esc(m) + '">' + esc(m) + '</button>'; }).join('') + '<small>Ajoute aussi les hashtags de ta ville : ' + esc(LOCAL) + '</small>');
        p.addEventListener('click', function (ev) { var y = ev.target.closest('[data-m]'); if (!y) return; ecrireChamp('tags', nettoyerHashtags(t.value + ' ' + METIERS[y.dataset.m] + ' ' + LOCAL).texte); compter(); fermerPop(); memo.ecrire('metier', y.dataset.m); });
      } else {
        var g = memo.lire('groupes', []);
        var p2 = popover(x, '<h4>Mes groupes de hashtags</h4>' + (g.length ? g.map(function (gr, i) { return '<button data-g="' + i + '"><b>' + esc(gr.nom) + '</b><small>' + esc(gr.tags.slice(0, 60)) + '…</small></button>'; }).join('') : '<small style="padding:4px 8px">Aucun groupe. Écris tes hashtags puis enregistre-les ici.</small>') +
          '<div style="display:flex;gap:6px;padding:6px 4px 2px"><input id="at-g-nom" placeholder="Nom du groupe" style="flex:1;border:1.5px solid #f0dcc6;border-radius:9px;padding:6px"><button class="at-btn" id="at-g-ok">Enregistrer</button></div>');
        p2.addEventListener('click', function (ev) { var y = ev.target.closest('[data-g]'); if (!y) return; ecrireChamp('tags', nettoyerHashtags(t.value + ' ' + g[+y.dataset.g].tags).texte); compter(); fermerPop(); });
        $('#at-g-ok', p2).addEventListener('click', function () { var nom = $('#at-g-nom', p2).value.trim(); if (!nom || !t.value.trim()) { message('Donne un nom et écris des hashtags.'); return; } g.unshift({ nom: nom, tags: t.value.trim() }); memo.ecrire('groupes', g.slice(0, 30)); fermerPop(); message('Groupe « ' + nom + ' » enregistré.'); });
      }
    });
  }

  /* ====================================================================== */
  /* 7 · Mode concentration (grand éditeur, synchronisé avec la légende)     */
  /* ====================================================================== */
  function zen() {
    if ($('.at-zen')) return;
    var z = document.createElement('div'); z.className = 'at-zen'; z.setAttribute('role', 'dialog'); z.setAttribute('aria-label', 'Mode concentration');
    z.innerHTML = '<header><img src="images/avatarchatbot.png" alt="" style="width:36px;height:36px;border-radius:50%">Mode concentration<button type="button" class="at-btn" id="at-zen-fin">Terminer (Échap)</button></header><textarea id="at-zen-t" aria-label="Légende"></textarea><footer id="at-zen-n"></footer>';
    document.body.appendChild(z);
    var t = $('#at-zen-t'); t.value = lireLegende(); t.focus();
    function maj() { var n = (t.value.match(/[\p{L}\p{N}’'-]+/gu) || []).length; $('#at-zen-n').textContent = n + ' mots · ' + t.value.length + ' caractères'; }
    t.addEventListener('input', function () { var c = legende(); if (c) { c.value = t.value; c.dispatchEvent(new Event('input', { bubbles: true })); } maj(); });
    maj();
    function fin() { z.remove(); document.removeEventListener('keydown', echap); var c = legende(); if (c) c.focus(); }
    function echap(e) { if (e.key === 'Escape') fin(); }
    document.addEventListener('keydown', echap); $('#at-zen-fin').addEventListener('click', fin);
  }

  /* ====================================================================== */
  /* 8 · Panneau de l'Atelier                                                */
  /* ====================================================================== */
  var onglet = memo.lire('onglet', 'ecrire');
  function panneau() {
    if ($('#at-panneau')) return;
    var l = document.createElement('button'); l.type = 'button'; l.className = 'at-lanceur'; l.id = 'at-lanceur'; l.title = 'Atelier de Marshall (Ctrl + J pour les commandes)';
    l.innerHTML = '<img src="images/avatarchatbot.png" alt=""><span class="at-nom-l">Atelier</span><span class="at-obj" id="at-obj" hidden></span><span class="at-pastille" id="at-pastille" hidden></span>';
    document.body.appendChild(l);
    var p = document.createElement('aside'); p.className = 'at-panneau'; p.id = 'at-panneau'; p.setAttribute('aria-label', 'Atelier de Marshall'); p.setAttribute('aria-hidden', 'true');
    p.innerHTML = '<div class="at-tete"><img src="images/avatarchatbot.png" alt=""><div><h2>Atelier de Marshall</h2><p>Des outils pour écrire, planifier et t’organiser.</p></div><button type="button" class="at-fermer" id="at-fermer" aria-label="Fermer">×</button></div>' +
      '<div class="at-onglets" role="tablist"><button data-o="ecrire" role="tab">Écrire</button><button data-o="planifier" role="tab">Planifier</button><button data-o="organiser" role="tab">Organiser</button></div>' +
      '<div class="at-corps" id="at-corps"></div>';
    document.body.appendChild(p);
    l.addEventListener('click', function () { ouvrir(!p.classList.contains('on')); });
    $('#at-fermer').addEventListener('click', function () { ouvrir(false); });
    $$('.at-onglets button', p).forEach(function (b) { b.addEventListener('click', function () { onglet = b.dataset.o; memo.ecrire('onglet', onglet); rendre(); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && p.classList.contains('on') && !$('.at-zen') && !$('.at-palette-fond')) ouvrir(false); });
  }
  function ouvrir(oui, ong) {
    var p = $('#at-panneau'); if (!p) return;
    if (ong) { onglet = ong; memo.ecrire('onglet', ong); }
    p.classList.toggle('on', oui); p.setAttribute('aria-hidden', oui ? 'false' : 'true');
    if (oui) rendre();
  }
  function rendre() {
    $$('.at-onglets button').forEach(function (b) { b.classList.toggle('on', b.dataset.o === onglet); b.setAttribute('aria-selected', b.dataset.o === onglet); });
    var c = $('#at-corps'); c.innerHTML = '';
    ({ ecrire: ongletEcrire, planifier: ongletPlanifier, organiser: ongletOrganiser })[onglet](c);
    if (EXTRAS[onglet]) EXTRAS[onglet](c);
  }
  function carte(parent, titre, petit) {
    var d = document.createElement('section'); d.className = 'at-carte';
    d.innerHTML = '<h3>' + titre + (petit ? '<small>' + petit + '</small>' : '') + '</h3>';
    parent.appendChild(d); return d;
  }

  /* ---------- Onglet Écrire ---------- */
  function ongletEcrire(c) {
    // Modèles
    var k1 = carte(c, '📝 Modèles de légende', MODELES.length + ' objectifs');
    k1.insertAdjacentHTML('beforeend', '<p>Un point de départ par objectif. Les [crochets] sont à remplacer.</p><div class="at-ligne">' + MODELES.map(function (m) { return '<button class="at-chip" data-m="' + m.id + '">' + esc(m.nom) + '</button>'; }).join('') + '</div>');
    k1.addEventListener('click', function (e) { var b = e.target.closest('[data-m]'); if (!b) return; var m = MODELES.find(function (x) { return x.id === b.dataset.m; }); ouvrirComposeur(); setTimeout(function () { ecrireLegende(lireLegende() ? lireLegende() + '\n\n' + avecNom(m.texte) : avecNom(m.texte)); }, 250); message('Modèle « ' + m.nom + ' » ajouté à la légende.'); });

    // Favoris
    var f = memo.lire('favoris', []);
    var k2 = carte(c, '☆ Mes légendes favorites', f.length + ' enregistrée' + (f.length > 1 ? 's' : ''));
    k2.insertAdjacentHTML('beforeend', f.length ? '<div class="at-liste">' + f.slice(0, 12).map(function (x, i) { return '<div class="at-item"><small>' + esc(x.texte.slice(0, 160)) + (x.texte.length > 160 ? '…' : '') + '</small><div class="at-actions"><button class="at-btn" data-f="u' + i + '">Utiliser</button><button class="at-btn clair" data-f="s' + i + '">Retirer</button></div></div>'; }).join('') + '</div>' : '<p>Le bouton « ☆ Favori » sous la légende garde tes meilleurs textes ici, pour les réutiliser.</p>');
    k2.addEventListener('click', function (e) { var b = e.target.closest('[data-f]'); if (!b) return; var i = +b.dataset.f.slice(1); if (b.dataset.f[0] === 'u') { ouvrirComposeur(); setTimeout(function () { ecrireLegende(f[i].texte); }, 250); } else { f.splice(i, 1); memo.ecrire('favoris', f); rendre(); } });

    // Réponses types
    var k3 = carte(c, '💬 Réponses aux commentaires et aux avis', 'à copier');
    k3.insertAdjacentHTML('beforeend', '<div class="at-liste">' + REPONSES.map(function (r, i) { return '<div class="at-item"><b>' + esc(r.nom) + '</b><small>' + esc(r.texte) + '</small><div class="at-actions"><button class="at-btn clair" data-r="' + i + '">Copier</button></div></div>'; }).join('') + '</div>');
    k3.addEventListener('click', function (e) { var b = e.target.closest('[data-r]'); if (b) copier(REPONSES[+b.dataset.r].texte, b); });

    // Lien suivi (UTM)
    var k4 = carte(c, '🔗 Lien suivi', 'pour savoir d’où viennent tes visiteurs');
    k4.insertAdjacentHTML('beforeend', '<p>Ajoute une étiquette invisible à ton lien : dans tes statistiques de site, tu verras les visites venues de ce post.</p>' +
      '<div class="at-ligne"><input id="at-utm-url" type="url" placeholder="https://monsite.fr/page"></div>' +
      '<div class="at-ligne"><select id="at-utm-src"><option value="instagram">Instagram</option><option value="facebook">Facebook</option><option value="tiktok">TikTok</option><option value="linkedin">LinkedIn</option><option value="x">X</option></select><input id="at-utm-camp" placeholder="Nom de la campagne (ex. noel)"></div>' +
      '<div class="at-ligne"><button class="at-btn" id="at-utm-ok">Créer le lien</button><button class="at-btn clair" id="at-utm-dm" disabled>Mettre dans « Lien en DM »</button><button class="at-btn clair" id="at-utm-copier" disabled>Copier</button></div><p id="at-utm-res" style="overflow-wrap:anywhere;color:#3b2a1c;font-weight:700"></p>');
    var dm = champ('dm-link'); if (dm && dm.value) $('#at-utm-url').value = dm.value;
    var lien = '';
    $('#at-utm-ok').addEventListener('click', function () {
      try { var u = new URL($('#at-utm-url').value.trim()); } catch (e) { $('#at-utm-res').textContent = 'Adresse invalide : elle doit commencer par https://'; return; }
      u.searchParams.set('utm_source', $('#at-utm-src').value); u.searchParams.set('utm_medium', 'social');
      u.searchParams.set('utm_campaign', ($('#at-utm-camp').value.trim() || 'studio-social').toLowerCase().replace(/[^a-z0-9]+/g, '-'));
      lien = u.toString(); $('#at-utm-res').textContent = lien; $('#at-utm-dm').disabled = !champ('dm-link'); $('#at-utm-copier').disabled = false;
    });
    $('#at-utm-copier').addEventListener('click', function () { copier(lien, this); });
    $('#at-utm-dm').addEventListener('click', function () { ecrireChamp('dm-link', lien); message('Lien mis dans « Lien envoyé en DM ».'); });
  }

  /* ---------- Onglet Planifier ---------- */
  function ongletPlanifier(c) {
    // Temps forts
    var tf = aVenir(60, voirTous), metierTF = memo.lire('metier', '');
    var k1 = carte(c, '📅 Temps forts à venir', '60 prochains jours');
    if (metierTF) { k1.insertAdjacentHTML('beforeend', '<p>' + (voirTous ? 'Tous les temps forts.' : 'Choisis pour : <b>' + esc(metierTF) + '</b>.') + ' <button class="at-btn clair" id="at-tf-tous">' + (voirTous ? 'Seulement mon métier' : 'Tout afficher') + '</button></p>'); $('#at-tf-tous', k1).addEventListener('click', function () { voirTous = !voirTous; rendre(); }); }
    k1.insertAdjacentHTML('beforeend', '<div class="at-ligne"><button class="at-btn clair" id="at-tf-mois">Préparer le mois : tout mettre dans ma boîte à idées</button></div>');
    $('#at-tf-mois', k1).addEventListener('click', preparerMois);
    k1.insertAdjacentHTML('beforeend', tf.length ? '<div class="at-liste">' + tf.map(function (t, i) {
      var n = Math.round((t.date - new Date().setHours(0, 0, 0, 0)) / 864e5);
      return '<div class="at-item"><b>' + esc(t.nom) + ' <span class="at-tag ' + (n <= 7 ? 'or' : '') + '">' + (n === 0 ? 'aujourd’hui' : 'dans ' + n + ' j') + '</span></b><small>' + jour(t.date) + ' · ' + esc(t.idee) + '</small><div class="at-actions"><button class="at-btn" data-tf="' + i + '">Créer le post</button></div></div>';
    }).join('') + '</div><p>Astuce : publie 5 à 7 jours avant les fêtes à cadeaux.</p>' : '<p>Rien dans les 60 prochains jours.</p>');
    k1.addEventListener('click', function (e) { var b = e.target.closest('[data-tf]'); if (!b) return; creerPostTF(tf[+b.dataset.tf]); });

    // Meilleurs horaires
    var metier = memo.lire('metier', '');
    var k2 = carte(c, '⏰ Meilleurs moments pour publier', 'repères généraux');
    k2.insertAdjacentHTML('beforeend', '<table class="at-table"><thead><tr><th>Réseau</th><th>Jours</th><th>Heures</th></tr></thead><tbody>' + HORAIRES.map(function (h) { return '<tr><td><b>' + h[0] + '</b></td><td>' + h[1] + '</td><td>' + h[2] + '</td></tr>'; }).join('') + '</tbody></table>' +
      '<div class="at-ligne"><select id="at-metier"><option value="">Mon métier…</option>' + Object.keys(METIERS).map(function (m) { return '<option' + (m === metier ? ' selected' : '') + '>' + esc(m) + '</option>'; }).join('') + '</select></div><p id="at-metier-conseil"></p><p>Tes propres chiffres comptent plus : regarde « Meilleures publications » dans les Rapports.</p>');
    function conseil() { var m = $('#at-metier').value; memo.ecrire('metier', m); $('#at-metier-conseil').textContent = m ? (HORAIRES_METIER[m] || 'Pas de repère particulier : suis le tableau ci-dessus.') : ''; }
    $('#at-metier').addEventListener('change', conseil); conseil();

    // Objectif + régularité + équilibre (données réelles)
    var k3 = carte(c, '🎯 Objectif de la semaine', '');
    var k4 = carte(c, '🗓️ Régularité', '12 dernières semaines');
    var k5 = carte(c, '⚖️ Équilibre de tes contenus', '30 derniers posts');
    var k6 = carte(c, '📤 Exporter mon planning', 'agenda');
    [k3, k4, k5].forEach(function (k) { k.insertAdjacentHTML('beforeend', '<p>Chargement de tes publications…</p>'); });
    lirePosts().then(function (posts) {
      // Objectif hebdomadaire + série
      var obj = memo.lire('objectif', 3);
      var lundi = new Date(); lundi.setHours(0, 0, 0, 0); lundi.setDate(lundi.getDate() - ((lundi.getDay() + 6) % 7));
      var semaine = posts.filter(function (p) { var d = datePost(p); return p.status !== 'draft' && d >= lundi && d < plus(lundi, 7); }).length;
      var serie = 0; for (var s = 1; s < 60; s++) { var deb = plus(lundi, -7 * s), n = posts.filter(function (p) { var d = datePost(p); return p.status !== 'draft' && d >= deb && d < plus(deb, 7); }).length; if (n >= obj) serie++; else break; }
      if (semaine >= obj) serie++;
      k3.lastChild.remove();
      k3.insertAdjacentHTML('beforeend', '<div class="at-ligne"><b style="font:700 22px Fredoka,sans-serif">' + semaine + ' / ' + obj + '</b><span>publications cette semaine</span><select id="at-obj" style="flex:0 0 auto;margin-left:auto">' + [1, 2, 3, 4, 5, 7, 10, 14].map(function (n) { return '<option' + (n === obj ? ' selected' : '') + ' value="' + n + '">' + n + ' / semaine</option>'; }).join('') + '</select></div>' +
        '<div class="at-jauge"><i style="width:' + Math.min(100, semaine / obj * 100) + '%"></i></div><p>' + (serie ? '🔥 Série : <b>' + serie + ' semaine' + (serie > 1 ? 's' : '') + '</b> d’affilée à l’objectif.' : 'Atteins ton objectif cette semaine pour démarrer une série.') + ' Les posts programmés comptent.</p>');
      $('#at-obj').addEventListener('change', function () { memo.ecrire('objectif', +this.value); rendre(); majLanceur(); });

      // Carte de régularité
      var debut = plus(lundi, -7 * 11), parJour = {};
      posts.forEach(function (p) { if (p.status === 'draft') return; var d = datePost(p); if (d >= debut) parJour[cle(d)] = (parJour[cle(d)] || 0) + 1; });
      var cases = '', total = 0;
      for (var j = 0; j < 7; j++) for (var w = 0; w < 12; w++) { var d = plus(debut, w * 7 + j), n = parJour[cle(d)] || 0; total += n; cases += '<span class="' + (n >= 3 ? 'n3' : n === 2 ? 'n2' : n === 1 ? 'n1' : '') + '" title="' + jour(d) + ' : ' + n + ' post' + (n > 1 ? 's' : '') + '"></span>'; }
      k4.lastChild.remove();
      k4.insertAdjacentHTML('beforeend', '<div class="at-carre" aria-label="Publications par jour sur 12 semaines">' + cases + '</div><p>' + total + ' publication' + (total > 1 ? 's' : '') + ' en 12 semaines. Une ligne = un jour de la semaine (lundi en haut).</p>');

      // Équilibre des contenus
      var types = { 'Promo / vente': /promo|remise|soldes|-\s?\d+ ?%|prix|offre|code/i, 'Coulisses / équipe': /coulisse|équipe|equipe|atelier|fabrication|préparation|chaque matin/i, 'Conseil / astuce': /astuce|conseil|saviez|comment|tuto|idée/i, 'Avis / clients': /avis|merci|client|témoignage|★|⭐/i, 'Événement / annonce': /rendez-vous|événement|evenement|ouverture|fermeture|horaires|nouveau/i };
      var compte = {}, derniers = posts.filter(function (p) { return p.caption; }).slice(0, 30);
      Object.keys(types).forEach(function (t) { compte[t] = 0; });
      derniers.forEach(function (p) { var ok = false; Object.keys(types).forEach(function (t) { if (!ok && types[t].test(p.caption)) { compte[t]++; ok = true; } }); });
      var promo = derniers.length ? compte['Promo / vente'] / derniers.length : 0;
      k5.lastChild.remove();
      k5.insertAdjacentHTML('beforeend', derniers.length ? Object.keys(compte).map(function (t) { var pct = Math.round(compte[t] / derniers.length * 100); return '<div><div class="at-ligne" style="justify-content:space-between"><span>' + t + '</span><b>' + pct + ' %</b></div><div class="at-jauge"><i style="width:' + pct + '%"></i></div></div>'; }).join('') +
        '<p>' + (promo > 0.4 ? '⚠️ Beaucoup de promo : vise environ 1 post de vente pour 4 posts utiles ou sympas (coulisses, conseils, avis).' : 'Bon équilibre : continue à alterner vente, coulisses, conseils et avis.') + '</p>' : '<p>Pas encore assez de publications pour analyser.</p>');

      // Export agenda
      var prog = posts.filter(estProgramme);
      k6.insertAdjacentHTML('beforeend', '<p>' + (prog.length ? prog.length + ' publication' + (prog.length > 1 ? 's' : '') + ' programmée' + (prog.length > 1 ? 's' : '') + ' : ajoute-les à ton agenda (Google, Apple, Outlook) pour les voir à côté de tes rendez-vous.' : 'Aucune publication programmée pour l’instant.') + '</p><div class="at-ligne"><button class="at-btn" id="at-ics"' + (prog.length ? '' : ' disabled') + '>Télécharger le fichier agenda (.ics)</button></div>');
      $('#at-ics').addEventListener('click', function () { exporterIcs(prog); });
    });
  }
  function exporterIcs(prog) {
    var z = function (d) { return d.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z'); };
    var plie = function (t) { return t.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/[,;]/g, function (c) { return '\\' + c; }); };
    var lignes = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Mon Copain Digital//Studio Social//FR', 'CALSCALE:GREGORIAN'];
    prog.forEach(function (p, i) {
      var d = new Date(p.scheduled_at), fin = new Date(d.getTime() + 15 * 60000);
      lignes.push('BEGIN:VEVENT', 'UID:studio-' + d.getTime() + '-' + i + '@moncopaindigital.fr', 'DTSTAMP:' + z(new Date()), 'DTSTART:' + z(d), 'DTEND:' + z(fin),
        'SUMMARY:' + plie('Publication ' + (p.nets || []).join(', ')), 'DESCRIPTION:' + plie((p.caption || '').slice(0, 500)), 'END:VEVENT');
    });
    lignes.push('END:VCALENDAR');
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([lignes.join('\r\n')], { type: 'text/calendar' })); a.download = 'studio-social-planning.ics';
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* ---------- Onglet Organiser ---------- */
  function ongletOrganiser(c) {
    // Boîte à idées
    var idees = memo.lire('idees', []);
    var k1 = carte(c, '💡 Boîte à idées', idees.length + ' idée' + (idees.length > 1 ? 's' : ''));
    k1.insertAdjacentHTML('beforeend', '<div class="at-ligne"><input id="at-idee" placeholder="Une idée de post en passant…" maxlength="300"><button class="at-btn" id="at-idee-ok">Garder</button></div>' +
      (idees.length ? '<div class="at-liste">' + idees.map(function (x, i) { return '<div class="at-item' + (x.prio ? ' at-prio' : '') + '"><small style="color:#3b2a1c"><button type="button" class="at-etoile" data-i="e' + i + '" title="' + (x.prio ? 'Retirer des prioritaires' : 'Prioritaire : passe en haut de la liste') + '" aria-pressed="' + !!x.prio + '">' + (x.prio ? '★' : '☆') + '</button> ' + esc(x.texte) + '</small><div class="at-actions"><button class="at-btn" data-i="p' + i + '">En faire un post</button><button class="at-btn clair" data-i="s' + i + '">Fait</button></div></div>'; }).join('') + '</div>' : '<p>Note ici tes idées dès qu’elles te viennent, Marshall les garde au chaud.</p>'));
    $('#at-idee-ok').addEventListener('click', function () { var v = $('#at-idee').value.trim(); if (!v) return; idees.unshift({ texte: v, quand: Date.now() }); memo.ecrire('idees', idees.slice(0, 100)); rendre(); });
    $('#at-idee').addEventListener('keydown', function (e) { if (e.key === 'Enter') $('#at-idee-ok').click(); });
    k1.addEventListener('click', function (e) { var b = e.target.closest('[data-i]'); if (!b) return; var i = +b.dataset.i.slice(1); if (b.dataset.i[0] === 'e') { idees[i].prio = !idees[i].prio; idees.sort(function (x, y) { return (y.prio ? 1 : 0) - (x.prio ? 1 : 0); }); memo.ecrire('idees', idees); rendre(); return; } if (b.dataset.i[0] === 'p') { var t = idees[i].texte; ouvrirComposeur(); setTimeout(function () { ecrireLegende((lireLegende() ? lireLegende() + '\n\n' : '') + t); }, 250); ouvrir(false); } idees.splice(i, 1); memo.ecrire('idees', idees); if (b.dataset.i[0] === 's') rendre(); });

    // Recherche dans mes publications
    var k2 = carte(c, '🔎 Rechercher dans mes publications', '');
    k2.insertAdjacentHTML('beforeend', '<div class="at-ligne"><input id="at-cherche" type="search" placeholder="Un mot : croissant, soldes, Noël…"></div><div class="at-liste" id="at-resultats"></div>');
    var posts = null;
    $('#at-cherche').addEventListener('input', async function () {
      var q = this.value.trim().toLocaleLowerCase('fr'), r = $('#at-resultats');
      if (q.length < 2) { r.innerHTML = ''; return; }
      posts = posts || await lirePosts();
      var trouves = posts.filter(function (p) { return (p.caption + ' ' + p.tags).toLocaleLowerCase('fr').indexOf(q) >= 0; }).slice(0, 15);
      r.innerHTML = trouves.length ? trouves.map(function (p, i) { return '<div class="at-item"><b>' + jour(datePost(p)) + ' <span class="at-tag ' + (estPublie(p) ? 'vert' : p.status === 'draft' ? '' : 'or') + '">' + (estPublie(p) ? 'publié' : p.status === 'draft' ? 'brouillon' : 'programmé') + '</span></b><small>' + esc(p.caption.slice(0, 180)) + (p.caption.length > 180 ? '…' : '') + '</small><div class="at-actions"><button class="at-btn" data-p="' + i + '">Reprendre</button></div></div>'; }).join('') : '<p>Aucune publication ne contient « ' + esc(q) + ' ».</p>';
      r.onclick = function (e) { var b = e.target.closest('[data-p]'); if (!b) return; var p = trouves[+b.dataset.p]; ouvrirComposeur(); setTimeout(function () { ecrireLegende(p.caption); if (p.tags) ecrireChamp('tags', p.tags); }, 250); ouvrir(false); message('Texte repris dans le composeur.'); };
    });

    // Raccourcis
    var k3 = carte(c, '⌨️ Raccourcis clavier', '');
    k3.insertAdjacentHTML('beforeend', '<table class="at-table"><tbody>' + [['Ctrl + J', 'Palette de commandes'], ['Alt + 1 à 6', 'Composer, Calendrier, Historique, Brouillons, Pilote, Automatisations'], ['Alt + A', 'Ouvrir / fermer l’Atelier'], ['Alt + Z', 'Mode concentration'], ['Alt + D', 'Dicter la légende (micro)'], ['?', 'Afficher ces raccourcis'], ['Échap', 'Fermer']].map(function (r) { return '<tr><td><b>' + r[0] + '</b></td><td>' + r[1] + '</td></tr>'; }).join('') + '</tbody></table>');

    // Quoi de neuf
    var k4 = carte(c, '✨ Quoi de neuf dans l’Atelier', NOUVEAUTES.length + ' outils');
    k4.insertAdjacentHTML('beforeend', '<div class="at-liste">' + NOUVEAUTES.map(function (n) { return '<div class="at-item"><small style="color:#3b2a1c"><b style="font:600 13.5px Fredoka,sans-serif">' + esc(n[0]) + '</b> · ' + esc(n[1]) + '</small></div>'; }).join('') + '</div>');
    memo.ecrire('vu', NOUVEAUTES.length); var pa = $('#at-pastille'); if (pa) pa.hidden = true;
  }

  var NOUVEAUTES = [
    ['Modèles de légende', '10 objectifs prêts à remplir'], ['Appels à l’action', '13 formules par objectif'], ['Typographie française', 'espaces, guillemets, apostrophes en un clic'],
    ['Gras et italique', 'pour Instagram et LinkedIn'], ['Casse', 'majuscules, minuscules, début de phrase'], ['Puces', '•, ✅, ➡️, 1️⃣ 2️⃣ 3️⃣ devant chaque ligne'],
    ['Compte à rebours', '« Plus que 5 jours avant… »'], ['Version courte X', 'résumé à 280 caractères'], ['Copier tout', 'légende + hashtags'],
    ['Versions', 'revenir à un texte précédent'], ['Favoris', 'garder ses meilleures légendes'], ['Mode concentration', 'grand éditeur sans distraction'],
    ['Accroche visible', 'ce qu’on lit avant « … plus »'], ['Lecture', 'mots, temps de lecture, phrases trop longues'], ['Émojis suggérés', 'selon les mots du texte'],
    ['Nettoyeur de hashtags', 'doublons, #, majuscules, limite de 30'], ['Hashtags par métier', '16 métiers + ta ville'], ['Mes groupes de hashtags', 'à réutiliser en un clic'],
    ['Compteur de hashtags', 'avec la limite Instagram'], ['Réponses types', '7 réponses aux commentaires et aux avis'], ['Lien suivi', 'savoir quel post amène des visites'],
    ['Temps forts', '30 dates de l’année avec une idée de post'], ['Meilleurs horaires', 'par réseau et par métier'], ['Objectif de la semaine', 'avec série de semaines réussies'],
    ['Régularité', 'carte de 12 semaines'], ['Équilibre des contenus', 'vente, coulisses, conseils, avis'], ['Export agenda', 'tes posts programmés dans ton agenda'],
    ['Boîte à idées', 'noter une idée et en faire un post'], ['Recherche', 'retrouver et reprendre un ancien post'], ['Palette de commandes', 'Ctrl + J pour tout faire au clavier'],
    ['Raccourcis', 'Alt + 1 à 6 pour changer de vue'], ['Rappel', 'prévient quand rien n’est prévu demain'],
    ['Temps forts de mon métier', 'seulement les dates utiles à ton activité'], ['Préparer le mois', 'tous les temps forts du mois dans la boîte à idées, en un clic'], ['Post de temps fort programmé', 'la date de publication est proposée toute seule'],
    ['Adapter par réseau', 'versions X, LinkedIn, TikTok et story à copier'], ['Passages à compléter', 'repère les [crochets] oubliés et remplit le nom de ta boutique'], ['Anti-doublon', 'prévient si ta légende ressemble trop à un post récent'],
    ['Brouillons oubliés', 'les brouillons de plus de 7 jours à finir'], ['Il y a un an', 'tes posts de la même semaine l’an dernier, à reprendre'], ['Objectif sur le bouton', 'ta progression de la semaine en un coup d’œil']
  ];

  /* ====================================================================== */
  /* 9 · Palette de commandes (Ctrl + J) et raccourcis                       */
  /* ====================================================================== */
  var VUES = [['composer', 'Composer'], ['calendar', 'Calendrier'], ['history', 'Historique'], ['drafts', 'Brouillons'], ['pilote', 'Pilote'], ['automations', 'Automatisations']];
  function commandes() {
    var l = VUES.map(function (v, i) { return { nom: 'Aller à ' + v[1], aide: 'Alt + ' + (i + 1), faire: function () { allerVue(v[0]); } }; });
    l.push({ nom: 'Ouvrir l’Atelier · Écrire', faire: function () { ouvrir(true, 'ecrire'); } },
      { nom: 'Ouvrir l’Atelier · Planifier', faire: function () { ouvrir(true, 'planifier'); } },
      { nom: 'Ouvrir l’Atelier · Organiser', faire: function () { ouvrir(true, 'organiser'); } },
      { nom: 'Préparer le mois (temps forts → boîte à idées)', faire: preparerMois },
      { nom: 'Dicter la légende au micro', aide: 'Alt + D', faire: function () { ouvrirComposeur(); setTimeout(dicter, 300); } },
      { nom: 'Écouter ma légende', faire: ecouter },
      { nom: 'Déplacer les hashtags de la légende', faire: deplacerHashtags },
      { nom: 'Mélanger les hashtags', faire: melangerHashtags },
      { nom: 'Imprimer mon planning', faire: function () { lirePosts().then(imprimerPlanning); } },
      { nom: 'Idée au hasard / sauvegarde / tirage au sort', faire: function () { ouvrir(true, 'organiser'); } },
      { nom: 'Mode concentration', aide: 'Alt + Z', faire: function () { ouvrirComposeur(); setTimeout(zen, 250); } },
      { nom: 'Typographie française sur la légende', faire: function () { ecrireLegende(typographie(lireLegende())); } },
      { nom: 'Nettoyer les hashtags', faire: function () { var t = champ('tags'); if (t) ecrireChamp('tags', nettoyerHashtags(t.value).texte); } },
      { nom: 'Copier légende + hashtags', faire: function () { copier(lireLegende() + '\n\n' + ((champ('tags') || {}).value || '')); message('Copié.'); } },
      { nom: 'Ajouter la légende aux favoris', faire: function () { var b = $('[data-at="favori"]'); if (b) b.click(); } },
      { nom: 'Exporter mon planning (.ics)', faire: function () { lirePosts().then(function (p) { var g = p.filter(estProgramme); if (g.length) exporterIcs(g); else message('Aucune publication programmée.'); }); } });
    MODELES.forEach(function (m) { l.push({ nom: 'Modèle : ' + m.nom, faire: function () { ouvrirComposeur(); setTimeout(function () { ecrireLegende(lireLegende() ? lireLegende() + '\n\n' + avecNom(m.texte) : avecNom(m.texte)); }, 250); } }); });
    aVenir(45).forEach(function (t) { l.push({ nom: 'Temps fort : ' + t.nom, aide: jour(t.date), faire: function () { creerPostTF(t); } }); });
    return l;
  }
  function palette() {
    if ($('.at-palette-fond')) return;
    var f = document.createElement('div'); f.className = 'at-palette-fond';
    f.innerHTML = '<div class="at-palette" role="dialog" aria-label="Palette de commandes"><input id="at-pal-q" placeholder="Que veux-tu faire ? (ex. brouillons, modèle promo, Noël…)" autocomplete="off"><ul id="at-pal-l" role="listbox"></ul></div>';
    document.body.appendChild(f);
    var tout = commandes(), choix = 0, vis = tout;
    function norm(s) { return s.toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
    function liste() {
      var q = norm($('#at-pal-q').value.trim());
      vis = q ? tout.filter(function (c) { return q.split(/\s+/).every(function (m) { return norm(c.nom).indexOf(m) >= 0; }); }) : tout;
      choix = Math.min(choix, Math.max(0, vis.length - 1));
      $('#at-pal-l').innerHTML = vis.length ? vis.slice(0, 40).map(function (c, i) { return '<li role="option" data-i="' + i + '" class="' + (i === choix ? 'on' : '') + '"><span>' + esc(c.nom) + '</span><small>' + esc(c.aide || '') + '</small></li>'; }).join('') : '<li>Aucune commande.</li>';
    }
    function fermer() { f.remove(); }
    function lancer(i) { var c = vis[i]; fermer(); if (c) c.faire(); }
    $('#at-pal-q').addEventListener('input', function () { choix = 0; liste(); });
    $('#at-pal-q').addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); choix = Math.min(vis.length - 1, choix + 1); liste(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); choix = Math.max(0, choix - 1); liste(); }
      else if (e.key === 'Enter') { e.preventDefault(); lancer(choix); }
      else if (e.key === 'Escape') fermer();
    });
    $('#at-pal-l').addEventListener('click', function (e) { var li = e.target.closest('[data-i]'); if (li) lancer(+li.dataset.i); });
    f.addEventListener('click', function (e) { if (e.target === f) fermer(); });
    liste(); $('#at-pal-q').focus();
  }
  document.addEventListener('keydown', function (e) {
    var k = String(e.key).toLowerCase();
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && k === 'j') { e.preventDefault(); palette(); return; }
    if (e.altKey && !e.ctrlKey && !e.metaKey) {
      var n = parseInt(e.code && e.code.replace(/^Digit/, ''), 10);
      if (n >= 1 && n <= VUES.length) { e.preventDefault(); allerVue(VUES[n - 1][0]); return; }
      if (e.code === 'KeyA') { e.preventDefault(); var p = $('#at-panneau'); ouvrir(!(p && p.classList.contains('on'))); return; }
      if (e.code === 'KeyZ') { e.preventDefault(); ouvrirComposeur(); setTimeout(zen, 250); }
      if (e.code === 'KeyD') { e.preventDefault(); dicter(); }
    }
    if (e.key === '?' && !e.ctrlKey && !e.altKey && !/^(INPUT|TEXTAREA|SELECT)$/.test((e.target || {}).tagName || '') && !(e.target || {}).isContentEditable) { e.preventDefault(); ouvrir(true, 'organiser'); setTimeout(function () { var r = $$('#at-corps h3').find(function (h) { return /Raccourcis/.test(h.textContent); }); if (r) r.scrollIntoView({ block: 'start' }); }, 300); }
  });

  /* ====================================================================== */
  /* 10 · Rappel « rien de prévu demain » (une fois par jour)               */
  /* ====================================================================== */
  function rappel() {
    var auj = cle(new Date()); if (memo.lire('rappel', '') === auj) return;
    lirePosts().then(function (posts) {
      if (!posts.length) return;   // compte tout neuf : pas de rappel
      var dem = plus(new Date(new Date().setHours(0, 0, 0, 0)), 1), apres = plus(dem, 1);
      var prevu = posts.some(function (p) { return p.scheduled_at && new Date(p.scheduled_at) >= dem && new Date(p.scheduled_at) < apres; });
      if (prevu) return;
      var tf = aVenir(10)[0];
      var r = document.createElement('div'); r.className = 'at-rappel'; r.setAttribute('role', 'status');
      r.innerHTML = '<span>📅 Rien n’est prévu demain' + (tf ? ' · ' + esc(tf.nom) + ' approche' : '') + '.</span><button class="go">Préparer un post</button><button class="x" aria-label="Fermer">×</button>';
      document.body.appendChild(r);
      $('.go', r).addEventListener('click', function () { r.remove(); memo.ecrire('rappel', auj); ouvrir(true, 'planifier'); });
      $('.x', r).addEventListener('click', function () { r.remove(); memo.ecrire('rappel', auj); });
    });
  }

  /* ====================================================================== */
  /* 11 · Suite (23/10) : chaque outil analysé, 3 améliorations chacun        */
  /* ====================================================================== */
  var EXTRAS = {}, voirTous = false;

  /* --- Temps forts ① : seulement ceux qui concernent le métier choisi --- */
  var BOUCHE = ['Boulangerie', 'Pâtisserie', 'Restaurant', 'Café · bar', 'Épicerie fine', 'Caviste', 'Boucherie · traiteur'];
  var CADEAUX = ['Fleuriste', 'Boutique mode', 'Esthétique · beauté', 'Épicerie fine', 'Caviste', 'Librairie', 'Pâtisserie', 'Coiffure'];
  var POUR_QUI = {
    'Épiphanie · galette des rois': ['Boulangerie', 'Pâtisserie', 'Restaurant', 'Café · bar'], 'Chandeleur': BOUCHE, 'Mardi gras': BOUCHE.concat(['Boutique mode']),
    'Fête des grands-mères': CADEAUX, 'Pâques': BOUCHE.concat(CADEAUX), 'Fête des mères': CADEAUX.concat(BOUCHE), 'Fête des pères': CADEAUX.concat(BOUCHE, ['Coach sportif', 'Garage']),
    'Soldes d’hiver': ['Boutique mode', 'Librairie', 'Esthétique · beauté'], 'Soldes d’été': ['Boutique mode', 'Librairie', 'Esthétique · beauté'],
    'Journée mondiale du pain / de l’alimentation': ['Boulangerie', 'Pâtisserie', 'Restaurant', 'Épicerie fine', 'Boucherie · traiteur'],
    'Beaujolais nouveau': ['Caviste', 'Restaurant', 'Café · bar', 'Épicerie fine', 'Boucherie · traiteur'], 'Fête de la musique': BOUCHE.concat(['Librairie', 'Boutique mode']),
    'Journées du patrimoine': BOUCHE.concat(['Librairie', 'Immobilier', 'Artisan du bâtiment', 'Fleuriste']), 'Saint-Nicolas': ['Boulangerie', 'Pâtisserie', 'Librairie', 'Épicerie fine']
  };
  function pertinent(t) { var m = memo.lire('metier', ''); return !m || !POUR_QUI[t.nom] || POUR_QUI[t.nom].indexOf(m) >= 0; }

  /* --- Temps forts ② : programmer le post à la bonne date --- */
  function pad2(n) { return String(n).padStart(2, '0'); }
  function programmer(d) {
    var seg = $('.seg[data-sched="later"]'), dt = $('#sc-date'), hr = $('#sc-time');
    if (!seg || !dt || !hr) return false;
    seg.click();
    dt.value = d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
    hr.value = pad2(d.getHours()) + ':' + pad2(d.getMinutes());
    [dt, hr].forEach(function (x) { x.dispatchEvent(new Event('input', { bubbles: true })); x.dispatchEvent(new Event('change', { bubbles: true })); });
    return true;
  }
  function dateConseillee(t) {
    var cadeau = /cadeau|Valentin|fête des|Noël|Black|Pâques|Saint-Nicolas/i.test(t.nom + ' ' + t.idee);
    var d = plus(t.date, cadeau ? -5 : -1); d.setHours(11, 0, 0, 0);
    var tot = new Date(Date.now() + 3600000);
    if (d < tot) { d = new Date(t.date); d.setHours(9, 0, 0, 0); }
    return d < tot ? null : d;
  }
  function creerPostTF(t) {
    var d = dateConseillee(t);
    ouvrirComposeur(); ouvrir(false);
    setTimeout(function () {
      ecrireLegende((lireLegende() ? lireLegende() + '\n\n' : '') + '📅 ' + t.nom + '\n\n[' + t.idee + ']');
      if (d && programmer(d)) message('Post « ' + t.nom + ' » préparé, programmé le ' + jour(d) + ' à ' + d.getHours() + ' h (modifiable à l’étape Publier).');
    }, 350);
  }

  /* --- Temps forts ③ : préparer le mois d'un coup dans la boîte à idées --- */
  function preparerMois() {
    var idees = memo.lire('idees', []), n = 0;
    aVenir(31).forEach(function (t) {
      var texte = '📅 ' + t.nom + ' (' + jour(t.date) + ') : ' + t.idee;
      if (idees.some(function (x) { return x.texte === texte; })) return;
      idees.push({ texte: texte, quand: Date.now() }); n++;
    });
    memo.ecrire('idees', idees.slice(0, 100));
    message(n ? n + ' temps fort' + (n > 1 ? 's' : '') + ' ajouté' + (n > 1 ? 's' : '') + ' à ta boîte à idées (onglet Organiser).' : 'Les temps forts du mois sont déjà dans ta boîte à idées.');
  }

  /* --- Légende ① : adapter le texte à chaque réseau --- */
  function phrasesDe(t) { return (t.replace(/\n{2,}/g, '\n').match(/[^.!?…\n]+[.!?…]*/g) || []).map(function (x) { return x.trim(); }).filter(Boolean); }
  function tagsDe(n) { return ((champ('tags') || {}).value || '').split(/[\s,]+/).filter(function (x) { return /^#/.test(x); }).slice(0, n).join(' '); }
  function coupe(t, max) { if (t.length <= max) return t; var out = ''; phrasesDe(t).some(function (p) { if ((out + ' ' + p).trim().length > max) return true; out = (out + ' ' + p).trim(); }); return out || Array.from(t).slice(0, max - 1).join('') + '…'; }
  function versionsReseaux(t) {
    var ph = phrasesDe(t);
    return [
      ['X (Twitter)', versionCourte(t, (champ('tags') || {}).value), 280],
      ['LinkedIn', ph.join('\n\n') + (tagsDe(3) ? '\n\n' + tagsDe(3) : ''), 3000],
      ['TikTok', coupe(t.replace(/\n+/g, ' '), 150) + (tagsDe(4) ? ' ' + tagsDe(4) : ''), 2200],
      ['Story / Snapchat', coupe(ph[0] || t, 80), 80]
    ];
  }
  function chipAdapter() {
    var barre = $('#at-barre'); if (!barre || $('[data-at2="adapter"]', barre)) return;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'at-chip'; b.dataset.at2 = 'adapter'; b.textContent = '🔀 Adapter par réseau';
    var ref = $('[data-at="court"]', barre); barre.insertBefore(b, ref ? ref.nextSibling : null);
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var t = lireLegende().trim(); if (!t) { message('Écris d’abord ta légende.'); return; }
      var v = versionsReseaux(t);
      var p = popover(b, '<h4>Une version par réseau</h4>' + v.map(function (x, i) { return '<div class="at-version"><b>' + esc(x[0]) + ' <small>' + x[1].length + ' / ' + x[2] + '</small></b><div>' + esc(x[1]) + '</div><button class="at-btn clair" data-v2="' + i + '">Copier</button></div>'; }).join('') + '<small>LinkedIn : une phrase par ligne. TikTok : court + 4 hashtags. Story : une seule phrase.</small>');
      p.classList.add('at-pop-large'); p.style.left = Math.max(12, Math.min(innerWidth - p.offsetWidth - 12, b.getBoundingClientRect().left + scrollX)) + 'px';
      p.addEventListener('click', function (ev) { var x = ev.target.closest('[data-v2]'); if (x) copier(v[+x.dataset.v2][1], x); });
    });
  }

  /* --- Légende ② : passages [à compléter] et nom de la boutique --- */
  function avecNom(t) { var n = memo.lire('nom', ''); return n ? t.replace(/\[Nom\]/g, n) : t; }
  function crochets(t) { return t.match(/\[[^\]\n]{1,60}\]/g) || []; }
  function allerAuSuivant() {
    var c = legende(); if (!c) return;
    var re = /\[[^\]\n]{1,60}\]/g, m, depart = c.selectionEnd || 0, trouve = null, premier = null;
    while ((m = re.exec(c.value))) { if (!premier) premier = m; if (m.index >= depart && !trouve) trouve = m; }
    trouve = trouve || premier; if (!trouve) return;
    c.focus(); c.setSelectionRange(trouve.index, trouve.index + trouve[0].length);
  }

  /* --- Légende ③ : prévenir si le texte ressemble trop à un post récent --- */
  function motsDe(t) { var o = {}; (t.toLocaleLowerCase('fr').normalize('NFD').replace(/[̀-ͯ]/g, '').match(/[a-z0-9]{4,}/g) || []).forEach(function (m) { o[m] = 1; }); return o; }
  function ressemblance(a, b) { var ka = Object.keys(a), kb = Object.keys(b); if (!ka.length || !kb.length) return 0; var com = ka.filter(function (k) { return b[k]; }).length; return com / (ka.length + kb.length - com); }
  var minuterieDoublon = 0;
  function verifierDoublon(t, zone) {
    clearTimeout(minuterieDoublon);
    minuterieDoublon = setTimeout(function () {
      var mots = motsDe(t);
      if (Object.keys(mots).length < 8) { zone.dataset.doublon = ''; afficherAlertes(); return; }
      lirePosts().then(function (posts) {
        var depuis = Date.now() - 90 * 864e5, meilleur = null, score = 0;
        posts.forEach(function (p) {
          if (p.status === 'draft' || !p.caption || p.caption.trim() === t.trim() || datePost(p).getTime() < depuis) return;
          var r = ressemblance(mots, motsDe(p.caption)); if (r > score) { score = r; meilleur = p; }
        });
        zone.dataset.doublon = score >= 0.55 ? Math.round(score * 100) + '|' + jour(datePost(meilleur)) : '';
        afficherAlertes();
      });
    }, 900);
  }
  function afficherAlertes() {
    var infos = $('#at-infos'); if (!infos) return;
    var z = $('#at-alertes');
    if (!z) { z = document.createElement('div'); z.id = 'at-alertes'; z.className = 'at-alertes'; infos.insertAdjacentElement('afterend', z); }
    var t = lireLegende(), cr = crochets(t), h = '', nom = memo.lire('nom', '');
    if (cr.length) {
      h += '<div class="at-alerte-l">✏️ <span><b>' + cr.length + ' passage' + (cr.length > 1 ? 's' : '') + ' à compléter</b> : ' + esc(cr.slice(0, 3).join(', ')) + (cr.length > 3 ? '…' : '') + '</span><button type="button" class="at-btn clair" data-al="suivant">Aller au suivant</button>' +
        (cr.indexOf('[Nom]') >= 0 ? (nom ? '<button type="button" class="at-btn clair" data-al="nom">Mettre « ' + esc(nom) + ' »</button>' : '<button type="button" class="at-btn clair" data-al="nomdef">Enregistrer le nom de ma boutique</button>') : '') + '</div>';
    }
    if (z.dataset.doublon) { var d = z.dataset.doublon.split('|'); h += '<div class="at-alerte-l">🔁 <span>Ressemble à <b>' + d[0] + ' %</b> à ton post du ' + esc(d[1]) + ' : change l’accroche pour ne pas lasser tes abonnés.</span></div>'; }
    h += alertesEnPlus(t);
    z.innerHTML = h; z.hidden = !h;
  }
  function surLegende() { var z = $('#at-alertes'); afficherAlertes(); z = $('#at-alertes'); if (z) verifierDoublon(lireLegende(), z); }
  function clicAlerte(e) {
    var b = e.target.closest('#at-alertes [data-al]'); if (!b) return;
    if (b.dataset.al === 'suivant') allerAuSuivant();
    else if (b.dataset.al === 'nom') ecrireLegende(avecNom(lireLegende()));
    else if (b.dataset.al === 'nomdef') { var n = (prompt('Nom de ta boutique (il remplacera [Nom] dans les modèles) :', '') || '').trim(); if (n) { memo.ecrire('nom', n.slice(0, 60)); ecrireLegende(avecNom(lireLegende())); } }
    else clicAlerte2(b.dataset.al);
  }

  /* --- Organiser ① : brouillons oubliés · Planifier ② : il y a un an · ③ objectif sur le bouton --- */
  EXTRAS.ecrire = function (c) {
    var k = carte(c, '🏪 Ma boutique', 'pour les modèles');
    k.insertAdjacentHTML('beforeend', '<p>Ton nom remplace automatiquement [Nom] dans les modèles de légende.</p><div class="at-ligne"><input id="at-nom" maxlength="60" placeholder="Ex. Maison Léa"><button class="at-btn" id="at-nom-ok">Enregistrer</button></div>');
    $('#at-nom', k).value = memo.lire('nom', '');
    $('#at-nom-ok', k).addEventListener('click', function () { memo.ecrire('nom', $('#at-nom', k).value.trim().slice(0, 60)); message('Nom enregistré.'); afficherAlertes(); });
    c.insertBefore(k, c.children[1] || null);
  };
  EXTRAS.planifier = function (c) {
    var k = carte(c, '🕰️ Il y a un an', 'même semaine, l’an dernier');
    k.insertAdjacentHTML('beforeend', '<p>Chargement…</p>');
    lirePosts().then(function (posts) {
      var centre = Date.now() - 365 * 864e5, l = posts.filter(function (p) { return p.caption && p.status !== 'draft' && Math.abs(datePost(p).getTime() - centre) <= 7 * 864e5; }).slice(0, 5);
      k.lastChild.remove();
      k.insertAdjacentHTML('beforeend', l.length ? '<p>Ce qui a été publié à la même période : une bonne base pour cette année.</p><div class="at-liste">' + l.map(function (p, i) { return '<div class="at-item"><b>' + jour(datePost(p)) + '</b><small>' + esc(p.caption.slice(0, 160)) + (p.caption.length > 160 ? '…' : '') + '</small><div class="at-actions"><button class="at-btn" data-an="' + i + '">Reprendre</button></div></div>'; }).join('') + '</div>' : '<p>Pas encore de publication il y a un an. Dans un an, tes posts d’aujourd’hui apparaîtront ici.</p>');
      k.addEventListener('click', function (e) { var b = e.target.closest('[data-an]'); if (!b) return; var p = l[+b.dataset.an]; ouvrirComposeur(); ouvrir(false); setTimeout(function () { ecrireLegende(p.caption); if (p.tags) ecrireChamp('tags', p.tags); }, 350); });
    });
  };
  function brouillonsOublies(posts) { var lim = Date.now() - 7 * 864e5; return posts.filter(function (p) { return p.status === 'draft' && p.created_at && new Date(p.created_at).getTime() < lim; }); }
  EXTRAS.organiser = function (c) {
    var k = carte(c, '📝 Brouillons oubliés', 'plus de 7 jours');
    k.insertAdjacentHTML('beforeend', '<p>Chargement…</p>');
    c.insertBefore(k, c.firstChild);
    lirePosts().then(function (posts) {
      var l = brouillonsOublies(posts);
      k.lastChild.remove();
      k.insertAdjacentHTML('beforeend', l.length ? '<p><b>' + l.length + ' brouillon' + (l.length > 1 ? 's' : '') + '</b> attend' + (l.length > 1 ? 'ent' : '') + ' depuis plus d’une semaine. Finis-le' + (l.length > 1 ? 's' : '') + ' ou supprime-le' + (l.length > 1 ? 's' : '') + ' pour garder une liste claire.</p><div class="at-liste">' + l.slice(0, 3).map(function (p) { return '<div class="at-item"><b>' + jour(new Date(p.created_at)) + '</b><small>' + esc((p.caption || '(sans texte)').slice(0, 120)) + '</small></div>'; }).join('') + '</div><div class="at-ligne"><button class="at-btn" id="at-vers-brouillons">Ouvrir mes brouillons</button></div>' : '<p>Aucun brouillon oublié. Bravo 👏</p>');
      var b = $('#at-vers-brouillons', k); if (b) b.addEventListener('click', function () { allerVue('drafts'); ouvrir(false); });
    });
  };
  function majLanceur() {
    var o = $('#at-obj'); if (!o) return;
    cacheQuand = 0;
    lirePosts().then(function (posts) {
      var obj = memo.lire('objectif', 3), lundi = new Date(); lundi.setHours(0, 0, 0, 0); lundi.setDate(lundi.getDate() - ((lundi.getDay() + 6) % 7));
      var n = posts.filter(function (p) { var d = datePost(p); return p.status !== 'draft' && d >= lundi && d < plus(lundi, 7); }).length;
      o.textContent = Math.min(n, 99) + '/' + obj; o.hidden = false; o.classList.toggle('ok', n >= obj);
      o.title = n + ' publication' + (n > 1 ? 's' : '') + ' cette semaine, objectif ' + obj;
    });
  }

  function suite() {
    chipAdapter();
    document.addEventListener('input', function (e) { if (e.target && e.target.id === 'cap') surLegende(); });
    document.addEventListener('click', clicAlerte);
    surLegende(); majLanceur(); setInterval(majLanceur, 5 * 60000);
    suite2();
  }

  /* ====================================================================== */
  /* 12 · Grande passe (23/10) : chaque outil repris et prolongé             */
  /* ====================================================================== */

  /* ---------- Menu « ➕ Plus » sous la légende ---------- */
  var dictee = null;
  function dicter() {
    var R = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!R) { message('La dictée marche dans Chrome et Edge.'); return; }
    if (dictee) { dictee.stop(); return; }
    if (!legende()) return;
    dictee = new R(); dictee.lang = 'fr-FR'; dictee.continuous = true; dictee.interimResults = false;
    dictee.onresult = function (e) { for (var i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) { var t = e.results[i][0].transcript.trim(); if (t) inserer((/\s$|^$/.test(lireLegende()) ? '' : ' ') + t.charAt(0).toLocaleUpperCase('fr') + t.slice(1)); } };
    dictee.onend = function () { dictee = null; message('Dictée arrêtée.'); var b = $('#at-dictee'); if (b) b.remove(); };
    dictee.onerror = function (e) { if (e.error === 'not-allowed') message('Autorise le micro dans ton navigateur pour dicter.'); };
    try { dictee.start(); } catch (e) { dictee = null; return; }
    var b = document.createElement('button'); b.type = 'button'; b.id = 'at-dictee'; b.className = 'at-dictee'; b.textContent = '🎙️ Dictée en cours… cliquer pour arrêter';
    b.addEventListener('click', function () { if (dictee) dictee.stop(); }); document.body.appendChild(b);
  }
  function ecouter() {
    if (!window.speechSynthesis) { message('La lecture à voix haute n’est pas disponible ici.'); return; }
    if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
    var t = lireLegende().replace(/#[\p{L}\p{N}_]+/gu, '').replace(/\p{Extended_Pictographic}/gu, '').trim();
    if (!t) { message('La légende est vide.'); return; }
    var u = new SpeechSynthesisUtterance(t); u.lang = 'fr-FR'; u.rate = 1;
    speechSynthesis.speak(u); message('🔊 Lecture… (clique à nouveau sur « Écouter » pour arrêter)');
  }
  function hashtagsDeLaLegende() { return lireLegende().replace(/https?:\/\/\S+/g, '').match(/#[\p{L}\p{N}_]+/gu) || []; }
  function deplacerHashtags() {
    var tg = hashtagsDeLaLegende(); if (!tg.length) { message('Aucun hashtag dans la légende.'); return; }
    var t = lireLegende();
    tg.forEach(function (h) { t = t.replace(new RegExp('\\s*' + h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\p{L}\\p{N}_])', 'u'), ''); });
    ecrireLegende(t.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim());
    var champTags = champ('tags'); if (champTags) ecrireChamp('tags', nettoyerHashtags(champTags.value + ' ' + tg.join(' ')).texte);
    message(tg.length + ' hashtag' + (tg.length > 1 ? 's' : '') + ' déplacé' + (tg.length > 1 ? 's' : '') + ' dans « Hashtags ».');
  }
  function melangerHashtags() {
    var t = champ('tags'); if (!t || !t.value.trim()) { message('Aucun hashtag à mélanger.'); return; }
    var m = t.value.split(/\s+/).filter(Boolean), at = m.filter(function (x) { return x[0] === '@'; }), h = m.filter(function (x) { return x[0] !== '@'; });
    for (var i = h.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = h[i]; h[i] = h[j]; h[j] = x; }
    ecrireChamp('tags', at.concat(h).join(' ')); message('Ordre des hashtags mélangé.');
  }
  function tailleLegende(delta) {
    var c = legende(); if (!c) return;
    var tl = Math.max(12, Math.min(24, memo.lire('taille', 15) + delta)); memo.ecrire('taille', tl);
    c.style.setProperty('font-size', tl + 'px', 'important'); c.style.setProperty('line-height', '1.55', 'important');
  }
  function remplacerPop(ancre) {
    var p = popover(ancre, '<h4>Rechercher et remplacer</h4><div style="display:grid;gap:6px;padding:4px"><input id="at-rr-a" placeholder="Chercher (ex. samedi)" class="at-champ"><input id="at-rr-b" placeholder="Remplacer par (ex. dimanche)" class="at-champ"><small id="at-rr-n" style="padding:0"></small><button class="at-btn" id="at-rr-ok" style="text-align:center">Tout remplacer</button></div>');
    var a = $('#at-rr-a', p), b2 = $('#at-rr-b', p), n = $('#at-rr-n', p);
    function re() { var v = a.value; return v ? new RegExp(v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi') : null; }
    a.addEventListener('input', function () { var r = re(); n.textContent = r ? ((lireLegende().match(r) || []).length + ' trouvé(s)') : ''; });
    $('#at-rr-ok', p).addEventListener('click', function () { var r = re(); if (!r) return; var k = (lireLegende().match(r) || []).length; ecrireLegende(lireLegende().replace(r, b2.value)); fermerPop(); message(k + ' remplacement' + (k > 1 ? 's' : '') + '.'); });
    a.focus();
  }
  function phrasesPop(ancre) {
    var l = memo.lire('phrases', []), c = legende(), sel = c && c.selectionStart !== c.selectionEnd ? c.value.slice(c.selectionStart, c.selectionEnd) : '';
    var p = popover(ancre, '<h4>Mes phrases toutes prêtes</h4>' + (l.length ? l.map(function (x, i) { return '<button data-ph="' + i + '"><b>' + esc(x.nom) + '</b><small>' + esc(x.texte.slice(0, 70)) + '</small></button>'; }).join('') : '<small style="padding:4px 8px">Adresse, horaires, lien de réservation… : enregistre-les une fois, insère-les en un clic.</small>') +
      '<div style="display:grid;gap:6px;padding:8px 4px 2px"><input id="at-ph-nom" class="at-champ" placeholder="Nom (ex. Horaires)"><textarea id="at-ph-t" class="at-champ" rows="2" placeholder="Texte"></textarea><button class="at-btn" id="at-ph-ok" style="text-align:center">Enregistrer la phrase</button></div>');
    $('#at-ph-t', p).value = sel;
    p.addEventListener('click', function (ev) { var x = ev.target.closest('[data-ph]'); if (!x) return; fermerPop(); inserer(l[+x.dataset.ph].texte); });
    $('#at-ph-ok', p).addEventListener('click', function () { var nom = $('#at-ph-nom', p).value.trim(), t = $('#at-ph-t', p).value.trim(); if (!nom || !t) { message('Donne un nom et un texte.'); return; } l.unshift({ nom: nom.slice(0, 40), texte: t.slice(0, 600) }); memo.ecrire('phrases', l.slice(0, 40)); fermerPop(); message('Phrase « ' + nom + ' » enregistrée.'); });
  }
  function chipPlus() {
    var barre = $('#at-barre'); if (!barre || $('[data-at2="plus"]', barre)) return;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'at-chip at-chip-plus'; b.dataset.at2 = 'plus'; b.textContent = '➕ Plus';
    barre.appendChild(b);
    var t = memo.lire('taille', 0); if (t) tailleLegende(0);
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var p = popover(b, '<h4>Écrire</h4><button data-pl="dicter">🎙️ Dicter au micro <small>Alt + D</small></button><button data-pl="ecouter">🔊 Écouter ma légende</button><button data-pl="remplacer">🔍 Rechercher et remplacer</button><button data-pl="phrases">🧩 Mes phrases toutes prêtes</button>' +
        '<h4>Hashtags</h4><button data-pl="deplacer">⇣ Déplacer les hashtags de la légende vers « Hashtags »</button><button data-pl="melanger">🔀 Mélanger l’ordre des hashtags</button><button data-pl="copiertags">⧉ Copier seulement les hashtags</button>' +
        '<h4>Affichage</h4><div class="at-ligne" style="padding:2px 6px"><button class="at-btn clair" data-pl="moins">A−</button><button class="at-btn clair" data-pl="plus">A+</button><small style="padding:0">Taille du texte de la légende</small></div>');
      p.addEventListener('click', function (ev) {
        var x = ev.target.closest('[data-pl]'); if (!x) return; var a = x.dataset.pl;
        if (a === 'plus' || a === 'moins') { tailleLegende(a === 'plus' ? 1 : -1); return; }
        fermerPop();
        if (a === 'dicter') dicter(); else if (a === 'ecouter') ecouter(); else if (a === 'remplacer') remplacerPop(b); else if (a === 'phrases') phrasesPop(b);
        else if (a === 'deplacer') deplacerHashtags(); else if (a === 'melanger') melangerHashtags();
        else if (a === 'copiertags') { var tg = ((champ('tags') || {}).value || '').trim(); if (tg) { copier(tg); message('Hashtags copiés.'); } else message('Aucun hashtag.'); }
      });
    });
  }

  /* ---------- Alertes en plus (légende, hashtags, programmation) ---------- */
  var PASSE_PARTOUT = ['très', 'vraiment', 'super', 'trop', 'juste', 'génial', 'incroyable', 'top', 'sympa', 'beaucoup', 'énormément', 'franchement'];
  var BANNIS = ['#followforfollow', '#follow4follow', '#f4f', '#like4like', '#l4l', '#likeforlike', '#followback', '#tagsforlikes', '#likes4likes', '#followme', '#sfs', '#shoutout4shoutout', '#likeforfollow', '#instalike', '#spam'];
  var GENERIQUES = ['#love', '#instagood', '#photooftheday', '#instagram', '#happy', '#beautiful', '#picoftheday', '#follow', '#like', '#photography', '#fashion', '#cute'];
  function feries(a) {
    var p = paques(a);
    return [[new Date(a, 0, 1), 'Jour de l’an'], [plus(p, 1), 'Lundi de Pâques'], [new Date(a, 4, 1), 'Fête du travail'], [new Date(a, 4, 8), 'Victoire 1945'], [plus(p, 39), 'Ascension'], [plus(p, 50), 'Lundi de Pentecôte'],
      [new Date(a, 6, 14), 'Fête nationale'], [new Date(a, 7, 15), 'Assomption'], [new Date(a, 10, 1), 'Toussaint'], [new Date(a, 10, 11), 'Armistice'], [new Date(a, 11, 25), 'Noël']].map(function (x) { return { date: x[0], nom: x[1] }; });
  }
  function ferieDu(d) { var k = cle(d); return feries(d.getFullYear()).find(function (f) { return cle(f.date) === k; }); }
  function programmeLe() {
    var on = $('.seg.on[data-sched]'); if (!on || on.getAttribute('data-sched') !== 'later') return null;
    var dv = ($('#sc-date') || {}).value, hv = ($('#sc-time') || {}).value; if (!dv) return null;
    var d = new Date(dv + 'T' + (hv || '09:00')); return isNaN(d) ? null : d;
  }
  function ligne(ic, texte, boutons) { return '<div class="at-alerte-l">' + ic + ' <span>' + texte + '</span>' + (boutons || '') + '</div>'; }
  function alertesEnPlus(t) {
    var h = '', tags = ((champ('tags') || {}).value || '').toLocaleLowerCase('fr');
    if (/https?:\/\/\S+|www\.\S+/i.test(t)) h += ligne('🔗', 'Sur Instagram, un lien dans la légende <b>n’est pas cliquable</b>.', '<button type="button" class="at-btn clair" data-al="lien">Le mettre en DM + « lien en bio »</button>');
    var bas = t.toLocaleLowerCase('fr'), pp = PASSE_PARTOUT.map(function (m) { return [m, (bas.match(new RegExp('(^|[^\\p{L}])' + m + '(?![\\p{L}])', 'gu')) || []).length]; }).filter(function (x) { return x[1]; });
    var totalPP = pp.reduce(function (s2, x) { return s2 + x[1]; }, 0);
    if (totalPP >= 3) h += ligne('💬', 'Mots passe-partout : ' + pp.map(function (x) { return '« ' + x[0] + ' »' + (x[1] > 1 ? ' ×' + x[1] : ''); }).join(', ') + '. Un mot précis touche plus (« croustillant » plutôt que « super bon »).');
    var lettres = t.replace(/[^\p{L}]/gu, ''), maj = lettres.replace(/[^\p{Lu}]/gu, '');
    if (/!{3,}|\?{3,}/.test(t) || (lettres.length >= 30 && maj.length / lettres.length > 0.35)) h += ligne('📢', 'Beaucoup de MAJUSCULES ou de « !!! » : le message peut paraître crié.');
    var nbEmo = (t.match(/\p{Extended_Pictographic}/gu) || []).length;
    if (nbEmo > 10) h += ligne('😵', '<b>' + nbEmo + ' émojis</b> : au-delà de 6 à 8, le texte devient difficile à lire.');
    var dansLeg = hashtagsDeLaLegende();
    if (dansLeg.length >= 3) h += ligne('#️⃣', dansLeg.length + ' hashtags au milieu du texte : la légende est plus lisible s’ils sont à part.', '<button type="button" class="at-btn clair" data-al="deplacer">Les déplacer</button>');
    var tous = (tags + ' ' + dansLeg.join(' ')).toLocaleLowerCase('fr').split(/[\s,]+/);
    var b = BANNIS.filter(function (x) { return tous.indexOf(x) >= 0; });
    if (b.length) h += ligne('🚫', 'À éviter : <b>' + esc(b.join(' ')) + '</b>. Ces hashtags « d’échange de likes » peuvent faire baisser la portée de tes posts.', '<button type="button" class="at-btn clair" data-al="bannis">Les retirer</button>');
    var g = GENERIQUES.filter(function (x) { return tous.indexOf(x) >= 0; });
    if (g.length >= 2) h += ligne('🌊', esc(g.join(' ')) + ' : trop généraux, ton post s’y noie parmi des millions. Préfère ceux de ton métier et de ta ville.');
    var d = programmeLe();
    if (d) {
      if (d < new Date()) h += ligne('⏰', 'La date de programmation est <b>déjà passée</b>.');
      else if (d.getHours() < 7 || d.getHours() >= 22) h += ligne('🌙', 'Programmé à <b>' + pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + '</b> : la plupart de tes abonnés dorment. Entre 11 h et 13 h ou 18 h et 20 h, c’est mieux.');
      var f = ferieDu(d); if (f) h += ligne('📅', 'Le ' + jour(d) + ' est férié (<b>' + esc(f.nom) + '</b>). Si tu annonces une ouverture, précise tes horaires.');
    }
    return h;
  }
  function clicAlerte2(a) {
    if (a === 'deplacer') deplacerHashtags();
    else if (a === 'bannis') {
      var bas = function (x) { return BANNIS.indexOf(x.toLocaleLowerCase('fr')) < 0; };
      var t = champ('tags'); if (t) ecrireChamp('tags', t.value.split(/\s+/).filter(bas).join(' '));
      ecrireLegende(lireLegende().split(/(\s+)/).filter(function (m) { return !/^#/.test(m) || bas(m); }).join('').replace(/ {2,}/g, ' '));
      message('Hashtags à éviter retirés.');
    } else if (a === 'lien') {
      var m = lireLegende().match(/https?:\/\/\S+|www\.\S+/i); if (!m) return;
      var url = /^www\./i.test(m[0]) ? 'https://' + m[0] : m[0];
      if (champ('dm-link')) ecrireChamp('dm-link', url);
      ecrireLegende(lireLegende().replace(m[0], 'lien en bio 👆'));
      message('Lien mis dans « Lien envoyé en DM » et remplacé par « lien en bio ».');
    }
  }

  /* ---------- Texte de secours : on ne perd plus une légende ---------- */
  var minuterieSecours = 0;
  function garderSecours() { clearTimeout(minuterieSecours); minuterieSecours = setTimeout(function () { var t = lireLegende(); if (t.trim().length > 20) memo.ecrire('secours', { texte: t, quand: Date.now() }); }, 1500); }
  function proposerSecours() {
    var s2 = memo.lire('secours', null); if (!s2 || !s2.texte || Date.now() - s2.quand > 3 * 864e5 || lireLegende().trim()) return;
    lirePosts().then(function (posts) {
      if (posts.some(function (p) { return (p.caption || '').trim() === s2.texte.trim(); })) return;
      var r = document.createElement('div'); r.className = 'at-rappel at-rappel-haut'; r.setAttribute('role', 'status');
      r.innerHTML = '<span>📝 Un texte non publié du ' + jour(new Date(s2.quand)) + ' a été gardé : « ' + esc(s2.texte.slice(0, 50)) + '… »</span><button class="go">Le reprendre</button><button class="x" aria-label="Oublier">×</button>';
      document.body.appendChild(r);
      $('.go', r).addEventListener('click', function () { r.remove(); ouvrirComposeur(); setTimeout(function () { ecrireLegende(s2.texte); }, 350); });
      $('.x', r).addEventListener('click', function () { r.remove(); memo.ecrire('secours', null); });
    });
  }

  /* ---------- Planifier : prochain post, jours vides, semaine type, fériés, impression ---------- */
  var SEMAINES = {
    1: [[5, 'nouveaute']], 2: [[2, 'coulisses'], [5, 'promo']], 3: [[2, 'coulisses'], [4, 'conseil'], [6, 'nouveaute']],
    4: [[1, 'conseil'], [3, 'coulisses'], [5, 'promo'], [6, 'avis']], 5: [[1, 'conseil'], [2, 'coulisses'], [3, 'question'], [5, 'promo'], [6, 'avis']]
  };
  var NOMS_JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  function semaineType() { var o = memo.lire('objectif', 3); return SEMAINES[Math.min(5, Math.max(1, o))]; }
  function postAuJour(d) {
    d = new Date(d); d.setHours(11, 0, 0, 0);
    ouvrirComposeur(); ouvrir(false);
    setTimeout(function () { if (programmer(d)) message('Post programmé le ' + jour(d) + ' à 11 h : écris ta légende (modifiable à l’étape Publier).'); }, 350);
  }
  function imprimerPlanning(posts) {
    var auj = new Date(); auj.setHours(0, 0, 0, 0); var fin = plus(auj, 31);
    var lignes = posts.filter(function (p) { return p.scheduled_at && new Date(p.scheduled_at) >= auj && new Date(p.scheduled_at) < fin; }).map(function (p) { return [new Date(p.scheduled_at), '📣 ' + (p.caption || '').slice(0, 140), (p.nets || []).join(', ')]; })
      .concat(aVenir(31).map(function (t) { return [t.date, '★ ' + t.nom + ' : ' + t.idee, 'temps fort']; }))
      .concat(feries(auj.getFullYear()).concat(feries(auj.getFullYear() + 1)).filter(function (f) { return f.date >= auj && f.date < fin; }).map(function (f) { return [f.date, '🏖️ Férié : ' + f.nom, '']; }))
      .sort(function (a, b) { return a[0] - b[0]; });
    var w = window.open('', '_blank'); if (!w) { message('Autorise les fenêtres pour imprimer.'); return; }
    w.document.write('<!doctype html><html lang="fr"><meta charset="utf-8"><title>Mon planning · Studio Social</title><style>body{font:14px/1.45 system-ui,sans-serif;color:#3b2a1c;margin:28px}h1{font-size:20px;margin:0 0 4px}p{color:#8b7562;margin:0 0 16px}table{border-collapse:collapse;width:100%}td,th{border-bottom:1px solid #eadfd2;padding:7px 6px;text-align:left;vertical-align:top}th{font-size:12px;text-transform:uppercase;color:#8b7562}td:first-child{white-space:nowrap;font-weight:700}button{margin-top:16px}@media print{button{display:none}}</style>' +
      '<h1>Mon planning des 31 prochains jours</h1><p>Studio Social · Mon Copain Digital · imprimé le ' + new Date().toLocaleDateString('fr-FR') + '</p><table><thead><tr><th>Date</th><th>Quoi</th><th>Réseaux</th></tr></thead><tbody>' +
      (lignes.length ? lignes.map(function (l) { return '<tr><td>' + esc(l[0].toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })) + (l[2] && l[2] !== 'temps fort' ? ' ' + pad2(l[0].getHours()) + ':' + pad2(l[0].getMinutes()) : '') + '</td><td>' + esc(l[1]) + '</td><td>' + esc(l[2]) + '</td></tr>'; }).join('') : '<tr><td colspan="3">Rien de prévu.</td></tr>') +
      '</tbody></table><button onclick="print()">Imprimer</button></html>');
    w.document.close();
  }
  var EXTRAS_P1 = EXTRAS.planifier;
  EXTRAS.planifier = function (c) {
    EXTRAS_P1(c);
    var kP = carte(c, '⏭️ Prochaine publication', ''); c.insertBefore(kP, c.firstChild);
    var kV = carte(c, '🕳️ Jours sans publication', '14 prochains jours'); c.insertBefore(kV, kP.nextSibling);
    var kS = carte(c, '🗓️ Ma semaine type', 'selon ton objectif');
    var kF = carte(c, '🏖️ Jours fériés à venir', '90 jours');
    var kI = carte(c, '🖨️ Imprimer mon planning', '31 jours');
    [kP, kV].forEach(function (k) { k.insertAdjacentHTML('beforeend', '<p>Chargement…</p>'); });
    // semaine type
    var st = semaineType();
    kS.insertAdjacentHTML('beforeend', '<p>Un rythme simple, à adapter. Chaque jour a son type de post.</p><div class="at-liste">' + st.map(function (x, i) { var m = MODELES.find(function (y) { return y.id === x[1]; }); return '<div class="at-item"><b>' + NOMS_JOURS[x[0]].replace(/^./, function (l) { return l.toUpperCase(); }) + ' · ' + esc(m.nom) + '</b><div class="at-actions"><button class="at-btn clair" data-st="' + i + '">Écrire</button></div></div>'; }).join('') + '</div><div class="at-ligne"><button class="at-btn clair" id="at-st-idees">Mettre la semaine dans ma boîte à idées</button></div>');
    kS.addEventListener('click', function (e) { var b = e.target.closest('[data-st]'); if (!b) return; var m = MODELES.find(function (y) { return y.id === st[+b.dataset.st][1]; }); ouvrirComposeur(); ouvrir(false); setTimeout(function () { ecrireLegende(avecNom(m.texte)); }, 350); });
    $('#at-st-idees', kS).addEventListener('click', function () { var idees = memo.lire('idees', []); st.forEach(function (x) { var m = MODELES.find(function (y) { return y.id === x[1]; }); idees.push({ texte: NOMS_JOURS[x[0]] + ' : post « ' + m.nom + ' »', quand: Date.now() }); }); memo.ecrire('idees', idees.slice(0, 100)); message(st.length + ' idées ajoutées à ta boîte à idées.'); });
    // fériés
    var auj = new Date(); auj.setHours(0, 0, 0, 0);
    var fr = feries(auj.getFullYear()).concat(feries(auj.getFullYear() + 1)).filter(function (f) { return f.date >= auj && f.date <= plus(auj, 90); });
    kF.insertAdjacentHTML('beforeend', fr.length ? '<div class="at-liste">' + fr.map(function (f, i) { return '<div class="at-item"><b>' + esc(f.nom) + ' <span class="at-tag">' + jour(f.date) + '</span></b><div class="at-actions"><button class="at-btn clair" data-fe="' + i + '">Annoncer mes horaires</button></div></div>'; }).join('') + '</div><p>Prévenir 2 ou 3 jours avant évite les clients devant une porte fermée.</p>' : '<p>Aucun jour férié dans les 90 prochains jours.</p>');
    kF.addEventListener('click', function (e) { var b = e.target.closest('[data-fe]'); if (!b) return; var f = fr[+b.dataset.fe]; ouvrirComposeur(); ouvrir(false);
      setTimeout(function () { ecrireLegende(avecNom('📢 ' + f.nom + ' (' + f.date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) + ')\n\n[Ouvert de … à … / Fermé exceptionnellement].\n\nOn vous retrouve dès le [date] ! Merci de votre fidélité 🙏')); var d = plus(f.date, -2); d.setHours(11, 0, 0, 0); if (d > new Date()) programmer(d); }, 350); });
    kI.insertAdjacentHTML('beforeend', '<p>Tes posts programmés, les temps forts et les jours fériés sur une feuille, à afficher dans l’arrière-boutique.</p><div class="at-ligne"><button class="at-btn" id="at-imprimer">Ouvrir la version à imprimer</button></div>');
    $('#at-imprimer', kI).addEventListener('click', function () { lirePosts().then(imprimerPlanning); });
    lirePosts().then(function (posts) {
      var prog = posts.filter(estProgramme).sort(function (a, b) { return datePost(a) - datePost(b); }), p = prog[0];
      kP.lastChild.remove();
      if (p) { var ms = datePost(p) - Date.now(), j = Math.floor(ms / 864e5), hh = Math.floor(ms % 864e5 / 36e5);
        kP.insertAdjacentHTML('beforeend', '<div class="at-ligne"><b style="font:700 20px Fredoka,sans-serif">dans ' + (j ? j + ' j ' : '') + hh + ' h</b><span>' + jour(datePost(p)) + ' à ' + pad2(datePost(p).getHours()) + ':' + pad2(datePost(p).getMinutes()) + '</span></div><p>« ' + esc((p.caption || '').slice(0, 120)) + ' »</p><p>' + prog.length + ' publication' + (prog.length > 1 ? 's' : '') + ' programmée' + (prog.length > 1 ? 's' : '') + ' au total.</p>');
      } else kP.insertAdjacentHTML('beforeend', '<p>Aucune publication programmée. Choisis un jour ci-dessous pour commencer.</p>');
      var occupes = {}; prog.forEach(function (x) { occupes[cle(datePost(x))] = 1; });
      var vides = []; for (var i = 1; i <= 14; i++) { var d = plus(auj, i); if (!occupes[cle(d)]) vides.push(d); }
      kV.lastChild.remove();
      kV.insertAdjacentHTML('beforeend', vides.length ? '<p>' + vides.length + ' jour' + (vides.length > 1 ? 's' : '') + ' sans post. Clique sur un jour pour y programmer une publication à 11 h.</p><div class="at-ligne at-jours">' + vides.map(function (d, i) { return '<button class="at-chip" data-vd="' + i + '">' + jour(d) + (ferieDu(d) ? ' 🏖️' : '') + '</button>'; }).join('') + '</div>' : '<p>Chaque jour des deux prochaines semaines a sa publication. Bravo !</p>');
      kV.addEventListener('click', function (e) { var b = e.target.closest('[data-vd]'); if (b) postAuJour(vides[+b.dataset.vd]); });
    });
  };

  /* ---------- Organiser : idée au hasard, bilan du mois, mots, hashtags, tirage au sort, sauvegarde ---------- */
  var BANQUE = [
    'Montre tes mains au travail (sans visage, ça marche très bien).', 'Ton produit le plus vendu et pourquoi les clients l’adorent.', 'Une erreur de débutant que tu ne fais plus.', 'Avant / après : une transformation en photo.',
    'Présente un fournisseur ou un producteur avec qui tu travailles.', 'La question qu’on te pose le plus souvent, et ta réponse.', 'Ton outil préféré et à quoi il sert.', 'Une journée type en 5 photos.',
    'Le mot de la fin d’une cliente (avec son accord).', 'Un sondage : lequel préférez-vous, A ou B ?', 'Une astuce pour bien conserver / entretenir ce que tu vends.', 'Ton coin préféré du quartier.',
    'L’histoire de ta boutique en 3 dates.', 'Ce qui arrive la semaine prochaine (teasing).', 'Un « vrai ou faux » sur ton métier.', 'Remercie tes clients pour un cap (100 avis, 1 an, 1 000 abonnés…).',
    'Le produit de saison du moment.', 'Ce que tu fais quand la boutique est fermée.', 'Ton conseil pour offrir un cadeau réussi.', 'Une photo de ta vitrine qui change avec la saison.',
    'La playlist de la boutique.', 'Le geste technique le plus difficile de ton métier, en vidéo courte.', 'Un client fidèle depuis longtemps (avec son accord).', 'Les coulisses d’une commande spéciale.',
    'Ton « petit plus » que les autres n’ont pas.', 'Une idée reçue sur ton métier, démontée.', 'Le premier produit que tu as vendu.', 'Une photo d’équipe, même si tu es seul·e (selfie !).',
    'Un mini-tuto en 3 étapes.', 'Ce que tu prépares pour le prochain temps fort.', 'Une citation qui te motive.', 'Un jeu : trouve l’erreur dans la photo.',
    'Rappelle comment te trouver (adresse, horaires, accès).', 'Ce qui se cache derrière ton prix (matière, temps, savoir-faire).', 'Ton moment préféré de la journée.', 'Montre un emballage cadeau.',
    'Partage un avis Google et dis merci.', 'Une nouveauté en avant-première pour tes abonnés.', 'Un conseil de saison (chaleur, froid, pluie…).', 'Le défi de la semaine dans ta boutique.'
  ];
  var MOTS_VIDES = ('avec dans pour plus vous nous votre vos notre nos cette cela ceux elles leur leurs tout tous toute toutes mais donc quand comme aussi encore très bien sans sous chez entre après avant depuis faire fait être avoir sont sera était peut') .split(' ');
  function topMots(posts) {
    var n = {}; posts.forEach(function (p) { ((p.caption || '').toLocaleLowerCase('fr').match(/[\p{L}’'-]{5,}/gu) || []).forEach(function (m) { m = m.replace(/^[a-z]’/, ''); if (MOTS_VIDES.indexOf(m) < 0) n[m] = (n[m] || 0) + 1; }); });
    return Object.keys(n).map(function (k) { return [k, n[k]]; }).filter(function (x) { return x[1] > 1; }).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 14);
  }
  function topHashtags(posts) {
    var n = {}; posts.forEach(function (p) { ((p.tags || '') + ' ' + (p.caption || '')).toLocaleLowerCase('fr').match(/#[\p{L}\p{N}_]+/gu)?.forEach(function (h) { n[h] = (n[h] || 0) + 1; }); });
    return Object.keys(n).map(function (k) { return [k, n[k]]; }).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 15);
  }
  function hasard(n) { var a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % n; }
  var EXTRAS_O1 = EXTRAS.organiser;
  EXTRAS.organiser = function (c) {
    EXTRAS_O1(c);
    // idée au hasard
    var kH = carte(c, '🎲 Pas d’idée ? Tire au sort', BANQUE.length + ' idées');
    c.insertBefore(kH, c.children[1] || null);
    kH.insertAdjacentHTML('beforeend', '<p class="at-hasard" id="at-hasard">Clique pour une idée de post qui marche dans tous les métiers.</p><div class="at-ligne"><button class="at-btn" id="at-h-tirer">🎲 Une idée</button><button class="at-btn clair" id="at-h-garder" disabled>Garder</button><button class="at-btn clair" id="at-h-ecrire" disabled>Écrire maintenant</button></div>');
    var idee = '';
    $('#at-h-tirer', kH).addEventListener('click', function () { idee = BANQUE[hasard(BANQUE.length)]; $('#at-hasard', kH).textContent = '💡 ' + idee; $('#at-h-garder', kH).disabled = $('#at-h-ecrire', kH).disabled = false; });
    $('#at-h-garder', kH).addEventListener('click', function () { var l = memo.lire('idees', []); l.push({ texte: idee, quand: Date.now() }); memo.ecrire('idees', l.slice(0, 100)); message('Idée gardée.'); this.disabled = true; });
    $('#at-h-ecrire', kH).addEventListener('click', function () { ouvrirComposeur(); ouvrir(false); setTimeout(function () { ecrireLegende((lireLegende() ? lireLegende() + '\n\n' : '') + '[' + idee + ']'); }, 350); });
    // bilan, mots, hashtags
    var kB = carte(c, '📊 Ce mois-ci', ''), kM = carte(c, '🔤 Tes mots les plus utilisés', 'pour varier'), kT = carte(c, '🏷️ Tes hashtags les plus utilisés', 'un clic pour l’ajouter');
    [kB, kM, kT].forEach(function (k) { k.insertAdjacentHTML('beforeend', '<p>Chargement…</p>'); });
    lirePosts().then(function (posts) {
      var auj = new Date(), deb = new Date(auj.getFullYear(), auj.getMonth(), 1), debAv = new Date(auj.getFullYear(), auj.getMonth() - 1, 1), memeJour = new Date(auj.getFullYear(), auj.getMonth() - 1, auj.getDate(), 23, 59);
      var faits = posts.filter(function (p) { return p.status !== 'draft'; });
      var ce = faits.filter(function (p) { var d = datePost(p); return d >= deb && d <= auj; }).length, av = faits.filter(function (p) { var d = datePost(p); return d >= debAv && d <= memeJour; }).length;
      var aVen = faits.filter(estProgramme).length, br = posts.filter(function (p) { return p.status === 'draft'; }).length;
      kB.lastChild.remove();
      kB.insertAdjacentHTML('beforeend', '<table class="at-table"><tbody><tr><td>Publiés depuis le 1er</td><td><b>' + ce + '</b> ' + (ce > av ? '<span class="at-tag vert">+' + (ce - av) + ' vs mois dernier</span>' : ce < av ? '<span class="at-tag or">' + (ce - av) + ' vs mois dernier</span>' : '<span class="at-tag">comme le mois dernier</span>') + '</td></tr><tr><td>Programmés à venir</td><td><b>' + aVen + '</b></td></tr><tr><td>Brouillons</td><td><b>' + br + '</b></td></tr></tbody></table>');
      var mots = topMots(posts.slice(0, 60));
      kM.lastChild.remove();
      kM.insertAdjacentHTML('beforeend', mots.length ? '<div class="at-ligne">' + mots.map(function (m) { return '<span class="at-tag">' + esc(m[0]) + ' ×' + m[1] + '</span>'; }).join('') + '</div><p>Si un mot revient trop, trouve-lui un synonyme : tes abonnés remarquent les répétitions.</p>' : '<p>Pas encore assez de publications.</p>');
      var ht = topHashtags(posts);
      kT.lastChild.remove();
      kT.insertAdjacentHTML('beforeend', ht.length ? '<div class="at-ligne">' + ht.map(function (h, i) { return '<button class="at-chip" data-ht="' + i + '">' + esc(h[0]) + ' ×' + h[1] + '</button>'; }).join('') + '</div>' : '<p>Pas encore de hashtags dans tes publications.</p>');
      kT.addEventListener('click', function (e) { var b = e.target.closest('[data-ht]'); if (!b) return; var t = champ('tags'); if (!t) return; ecrireChamp('tags', nettoyerHashtags(t.value + ' ' + ht[+b.dataset.ht][0]).texte); message(ht[+b.dataset.ht][0] + ' ajouté aux hashtags.'); });
    });
    // tirage au sort
    var kC = carte(c, '🎁 Tirage au sort d’un concours', 'équitable');
    kC.insertAdjacentHTML('beforeend', '<p>Colle la liste des participants (un par ligne, ou les @ des commentaires). Les doublons sont retirés.</p><textarea id="at-tir-l" class="at-champ" rows="4" placeholder="@marie_d\n@paul.b\n@julie…"></textarea><div class="at-ligne"><label style="display:flex;gap:6px;align-items:center">Gagnants <select id="at-tir-n">' + [1, 2, 3, 5].map(function (n) { return '<option>' + n + '</option>'; }).join('') + '</select></label><button class="at-btn" id="at-tir-ok">Tirer au sort</button></div><div id="at-tir-res"></div>');
    $('#at-tir-ok', kC).addEventListener('click', function () {
      var brut = $('#at-tir-l', kC).value, l = (brut.match(/@[\w.]+/g) || brut.split(/\n+/)).map(function (x) { return x.trim(); }).filter(Boolean);
      var vus = {}; l = l.filter(function (x) { var k = x.toLowerCase(); if (vus[k]) return false; vus[k] = 1; return true; });
      var n = Math.min(+$('#at-tir-n', kC).value, l.length), g = [];
      if (!l.length) { $('#at-tir-res', kC).innerHTML = '<p>Aucun participant.</p>'; return; }
      while (g.length < n) { var x = l.splice(hasard(l.length), 1)[0]; g.push(x); }
      var annonce = '🎉 Merci à tous pour votre participation !\n\nBravo à ' + g.join(', ') + ' ' + (g.length > 1 ? 'qui remportent' : 'qui remporte') + ' [lot] 🎁\nEnvoie-nous un message pour récupérer ton cadeau.';
      $('#at-tir-res', kC).innerHTML = '<p><b>' + (g.length > 1 ? 'Gagnants' : 'Gagnant') + ' : ' + esc(g.join(', ')) + '</b> (parmi ' + (l.length + g.length) + ' participants, tirage le ' + new Date().toLocaleString('fr-FR') + ')</p><div class="at-ligne"><button class="at-btn clair" id="at-tir-ann">Écrire l’annonce</button></div>';
      $('#at-tir-ann', kC).addEventListener('click', function () { ouvrirComposeur(); ouvrir(false); setTimeout(function () { ecrireLegende(annonce); }, 350); });
    });
    // sauvegarde
    var kS = carte(c, '💾 Sauvegarder mon Atelier', 'favoris, idées, phrases…');
    kS.insertAdjacentHTML('beforeend', '<p>Tes favoris, idées, phrases et groupes de hashtags restent dans ce navigateur. Télécharge-les pour les retrouver sur un autre ordinateur.</p><div class="at-ligne"><button class="at-btn" id="at-sv-dl">Télécharger ma sauvegarde</button><label class="at-btn clair" style="cursor:pointer">Restaurer…<input type="file" id="at-sv-up" accept="application/json,.json" hidden></label></div>');
    $('#at-sv-dl', kS).addEventListener('click', function () {
      var o = {}; try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (/^mcd_atelier_/.test(k)) o[k] = localStorage.getItem(k); } } catch (e) {}
      var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify({ atelier: 1, date: new Date().toISOString(), donnees: o }, null, 1)], { type: 'application/json' }));
      a.download = 'atelier-marshall-' + cle(new Date()) + '.json'; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    });
    $('#at-sv-up', kS).addEventListener('change', function () {
      var fi = this.files && this.files[0]; if (!fi) return;
      fi.text().then(function (t) {
        var o; try { o = JSON.parse(t); } catch (e) { message('Fichier illisible.'); return; }
        if (!o || o.atelier !== 1 || typeof o.donnees !== 'object') { message('Ce fichier n’est pas une sauvegarde de l’Atelier.'); return; }
        if (!confirm('Remplacer les données de l’Atelier de ce navigateur par la sauvegarde du ' + new Date(o.date).toLocaleDateString('fr-FR') + ' ?')) return;
        Object.keys(o.donnees).forEach(function (k) { if (/^mcd_atelier_[a-z_]+$/.test(k) && typeof o.donnees[k] === 'string') try { localStorage.setItem(k, o.donnees[k]); } catch (e) {} });
        message('Sauvegarde restaurée.'); onglet = memo.lire('onglet', 'organiser'); rendre();
      });
    });
  };

  var NOUVEAUTES_2 = [
    ['Dictée', 'écrire la légende au micro (Alt + D)'], ['Écouter', 'lire la légende à voix haute pour la relire'], ['Rechercher et remplacer', 'dans la légende'], ['Mes phrases', 'adresse, horaires… insérés en un clic'],
    ['Taille du texte', 'agrandir la légende pour mieux relire'], ['Déplacer les hashtags', 'de la légende vers le champ Hashtags'], ['Mélanger les hashtags', 'pour ne pas publier toujours la même liste'], ['Copier les hashtags', 'seuls, pour le premier commentaire'],
    ['Alerte lien', 'lien non cliquable sur Instagram → DM + « lien en bio »'], ['Alerte mots passe-partout', 'très, super, vraiment…'], ['Alerte MAJUSCULES', 'et « !!! »'], ['Alerte émojis', 'au-delà de 10'],
    ['Alerte hashtags dans le texte', 'et bouton pour les déplacer'], ['Hashtags à éviter', '#f4f, #like4like… détectés et retirés'], ['Hashtags trop généraux', '#love, #instagood…'], ['Alerte heure de nuit', 'programmation entre 22 h et 7 h'],
    ['Alerte jour férié', 'quand le post tombe un jour férié'], ['Alerte date passée', 'programmation dans le passé'], ['Texte de secours', 'une légende non publiée n’est plus perdue'], ['Prochaine publication', 'compte à rebours'],
    ['Jours sans publication', 'un clic pour programmer un jour vide'], ['Ma semaine type', 'un type de post par jour selon ton objectif'], ['Jours fériés', 'avec l’annonce des horaires préparée'], ['Imprimer le planning', 'une feuille pour l’arrière-boutique'],
    ['Idées prioritaires', '⭐ en haut de la boîte à idées'], ['Idée au hasard', BANQUE.length + ' idées de posts'], ['Bilan du mois', 'comparé au mois dernier'], ['Mots les plus utilisés', 'pour varier ton vocabulaire'],
    ['Hashtags les plus utilisés', 'à réutiliser en un clic'], ['Tirage au sort', 'pour tes concours, avec l’annonce prête'], ['Sauvegarde', 'retrouver ton Atelier sur un autre ordinateur'], ['Raccourci ?', 'affiche les raccourcis'], ['Alt + D', 'lance la dictée']
  ];
  Array.prototype.push.apply(NOUVEAUTES, NOUVEAUTES_2);

  function suite2() {
    chipPlus();
    document.addEventListener('input', function (e) { var id = e.target && e.target.id; if (id === 'cap') garderSecours(); if (id === 'tags' || id === 'sc-date') afficherAlertes(); });
    document.addEventListener('change', function (e) { var id = e.target && e.target.id; if (id === 'sc-date' || id === 'sc-time') afficherAlertes(); });
    document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('.seg[data-sched], #quick-slots [data-slot]')) setTimeout(afficherAlertes, 80); });
    new MutationObserver(function () { if ($('#at-barre') && !$('[data-at2="plus"]')) chipPlus(); }).observe(document.body, { childList: true, subtree: true });
    setTimeout(proposerSecours, 2500);
  }

  /* ====================================================================== */
  /* Démarrage : on attend que l'application ait construit le composeur      */
  /* ====================================================================== */
  var essais = 0;
  (function demarrer() {
    if (!legende() || !$('#hub')) { if (essais++ < 120) setTimeout(demarrer, 500); return; }
    panneau(); barreLegende(); barreHashtags(); suite();
    var pa = $('#at-pastille'), vu = memo.lire('vu', 0);
    if (pa && vu < NOUVEAUTES.length) { pa.hidden = false; pa.textContent = '+' + (NOUVEAUTES.length - vu); pa.title = (NOUVEAUTES.length - vu) + ' nouveaux outils : voir « Quoi de neuf » dans l’onglet Organiser'; }
    setTimeout(rappel, 4000);
    // L'application peut reconstruire le composeur : on se rebranche si besoin
    new MutationObserver(function () { if (legende() && !$('#at-barre')) { barreLegende(); chipAdapter(); } if (champ('tags') && !$('#at-tags')) barreHashtags(); }).observe(document.body, { childList: true, subtree: true });
    // Le bouton de l'Atelier n'apparaît que dans les outils, pas sur l'accueil (cartes Studio / Message / Rapports)
    setInterval(function () { var h = $('#hub'), l = $('#at-lanceur'); if (h && l) l.hidden = !!(h.offsetParent || getComputedStyle(h).display !== 'none' && h.getBoundingClientRect().height > 0); }, 700);
  })();
})();
