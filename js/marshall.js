/* Marshall · assistant du site, identique sur toutes les pages (celui de l'accueil).
   À inclure là où le chat doit apparaître : <script src="js/marshall.js?v=1"></script>, avec css/marshall-chat.css
   puis css/marshall-bot.css dans la page. Aucune adresse de serveur ici : tout passe par la fonction marshall-chat. */
(function () {
  var ici = document.currentScript;
  if (!ici || document.getElementById('mcdChat')) return;
  ici.insertAdjacentHTML('beforebegin', "<div class=\"mcd-chat\" data-ouvert=\"false\" id=\"mcdChat\">\n  <div class=\"mcd-fenetre\" role=\"dialog\" aria-label=\"Assistant Marshall\">\n    <div class=\"mcd-entete\">\n      <span class=\"mcd-avatar\"><img src=\"images/avatarchatbot.png\" alt=\"Marshall\"></span>\n      <div>\n        <h2>Marshall</h2>\n        <p>Une question ? Je suis là pour y répondre !</p>\n      </div>\n      <button class=\"mcd-fermer\" id=\"mcdFermer\" aria-label=\"Fermer la conversation\">&times;</button>\n    </div>\n\n    <div class=\"mcd-fil\" id=\"mcdFil\" aria-live=\"polite\"></div>\n\n    <div class=\"mcd-suggestions\" id=\"mcdSuggestions\">\n      <button type=\"button\">Vous vous déplacez où ?</button>\n      <button type=\"button\">C’est combien, une séance ?</button>\n      <button type=\"button\">C’est quoi Studio Social ?</button>\n    </div>\n\n    <div class=\"mcd-saisie\">\n      <textarea id=\"mcdTexte\" rows=\"1\" placeholder=\"Écrivez votre question…\" aria-label=\"Votre message\"></textarea>\n      <button class=\"mcd-envoyer\" id=\"mcdEnvoyer\" aria-label=\"Envoyer\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FFF7E6\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"></path><path d=\"M5 12l7-7 7 7\"></path></svg></button>\n    </div>\n    <p class=\"mcd-mention\">Assistant automatique. Il peut se tromper, vérifie les infos importantes.</p>\n  </div>\n\n  <button class=\"mcd-lanceur\" id=\"mcdLanceur\" aria-label=\"Ouvrir l'assistant\"><img src=\"images/avatarchatbot.png\" alt=\"\"></button>\n</div>");
})();

(function () {
  // Relais Supabase : l'adresse du serveur de Marshall reste côté serveur (fonction marshall-chat)
  const ENDPOINT = 'https://fskrgqkrpgxvypcwbfwm.supabase.co/functions/v1/marshall-chat';

  const chat   = document.getElementById('mcdChat');
  const fil    = document.getElementById('mcdFil');
  const texte  = document.getElementById('mcdTexte');
  const envoi  = document.getElementById('mcdEnvoyer');
  const sugg   = document.getElementById('mcdSuggestions');

  const historique = [];
  let occupe = false;

  const ACCUEIL = "Bonjour 👋 Moi c’est Marshall ! Une question sur l’aide à domicile, les sites web ou Studio Social ? Je vous écoute !";

  function bulle(role, contenu) {
    const el = document.createElement('div');
    el.className = 'mcd-bulle ' + role;
    // Transforme les liens internes en liens cliquables, sans injecter de HTML brut
    el.textContent = contenu;
    el.innerHTML = el.innerHTML.replace(
      /(\/[a-zA-Z0-9\-_]+\.html)/g,
      '<a href="$1">$1</a>'
    );
    fil.appendChild(el);
    fil.scrollTop = fil.scrollHeight;
    return el;
  }

  function ouvrir() {
    chat.dataset.ouvert = 'true';
    if (!fil.children.length) bulle('assistant', ACCUEIL);
  }
  function fermer() { chat.dataset.ouvert = 'false'; }

  async function envoyer(message) {
    if (occupe || !message.trim()) return;
    occupe = true;
    envoi.disabled = true;
    sugg.style.display = 'none';

    bulle('visiteur', message);
    historique.push({ role: 'user', content: message });
    texte.value = '';
    texte.style.height = 'auto';

    const attente = bulle('assistant', '');
    attente.innerHTML = '<span class="mcd-points"><i></i><i></i><i></i></span>';

    try {
      const r = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historique }),
      });
      const data = await r.json();
      attente.remove();

      if (!r.ok) {
        bulle('erreur', data.error || "Marshall fait une petite pause, réessaie dans un instant.");
        return;
      }
      bulle('assistant', data.reply);
      historique.push({ role: 'assistant', content: data.reply });
    } catch (e) {
      attente.remove();
      bulle('erreur', "Connexion impossible. Vérifie ta connexion et réessaie.");
    } finally {
      occupe = false;
      envoi.disabled = false;
      texte.focus();
    }
  }

  document.getElementById('mcdLanceur').addEventListener('click', () =>
    chat.dataset.ouvert === 'true' ? fermer() : ouvrir()
  );
  document.getElementById('mcdFermer').addEventListener('click', fermer);
  envoi.addEventListener('click', () => envoyer(texte.value));

  texte.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); envoyer(texte.value); }
  });
  texte.addEventListener('input', () => {
    texte.style.height = 'auto';
    texte.style.height = Math.min(texte.scrollHeight, 90) + 'px';
  });

  sugg.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') envoyer(e.target.textContent);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chat.dataset.ouvert === 'true') fermer();
  });
})();

/* Sur téléphone, garde la conversation à sa place quand le clavier s'ouvre :
   hauteur calée sur la zone visible, et compensation si le navigateur fait glisser la page */
(function(){
  var vv = window.visualViewport, chat = document.querySelector('.mcd-chat');
  if (!vv || !chat) return;
  function cale(){
    document.documentElement.style.setProperty('--mcd-vh', vv.height + 'px');
    chat.classList.toggle('clavier', innerWidth <= 520 && vv.height < innerHeight * .8);
    chat.style.transform = innerWidth <= 520 && vv.offsetTop > 0 ? 'translateY(' + vv.offsetTop + 'px)' : '';
  }
  vv.addEventListener('resize', cale); vv.addEventListener('scroll', cale); cale();

  /* Conversation ouverte sur téléphone : la page reste figée à sa place, sans défilement ni zoom */
  var meta = document.querySelector('meta[name="viewport"]'), metaInitial = meta.content, y = 0, fige = false;
  function bloque(e){ if (e.touches && e.touches.length > 1) e.preventDefault(); }
  function geste(e){ e.preventDefault(); }
  function defile(e){ if (!chat.contains(e.target) || !e.target.closest('.mcd-fil,.mcd-saisie textarea,.mcd-suggestions')) e.preventDefault(); }
  function figer(oui){
    if (oui === fige) return; fige = oui;
    var b = document.body.style;
    if (oui) {
      y = scrollY;
      if (window.lenis) lenis.stop();
      document.documentElement.classList.add('chat-fige');
      b.position = 'fixed'; b.top = -y + 'px'; b.left = '0'; b.right = '0'; b.width = '100%';
      meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
      document.addEventListener('touchmove', bloque, { passive:false });
      document.addEventListener('touchmove', defile, { passive:false });
      document.addEventListener('gesturestart', geste);
    } else {
      document.documentElement.classList.remove('chat-fige');
      b.position = b.top = b.left = b.right = b.width = '';
      meta.content = metaInitial;
      document.removeEventListener('touchmove', bloque);
      document.removeEventListener('touchmove', defile);
      document.removeEventListener('gesturestart', geste);
      scrollTo(0, y);
      if (window.lenis) { lenis.scrollTo(y, { immediate:true }); lenis.start(); }
    }
  }
  new MutationObserver(function(){ figer(innerWidth <= 520 && chat.dataset.ouvert === 'true'); })
    .observe(chat, { attributes:true, attributeFilter:['data-ouvert'] });
})();

/* ---------- Mode « Créer un ticket », comme chez Kraken ----------
   Réservé aux clients connectés : le nom et l'e-mail viennent du compte (session de l'espace client),
   rien n'est redemandé. La conversation avec Marshall est jointe au ticket. « Mes tickets » montre l'historique.
   Pas connecté : Marshall propose de se connecter. Fonction serveur : support-ticket. */
(function () {
  var PROJET = 'https://fskrgqkrpgxvypcwbfwm.supabase.co', URL_FN = PROJET + '/functions/v1/support-ticket';
  var ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza3JncWtycGd4dnlwY3diZndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0OTY0MjgsImV4cCI6MjEwODA3MjQyOH0.rY5AB0ZwPsCqu_p74Ph09_fGj92uDztoYDwJvH1jmIU';   // clé publique du site (la même que dans les pages), protégée par les règles Supabase
  var CLE = 'sb-fskrgqkrpgxvypcwbfwm-auth-token';
  var chat = document.getElementById('mcdChat'), fil = document.getElementById('mcdFil'), sugg = document.getElementById('mcdSuggestions');
  if (!chat || !fil) return;
  var CATS = [['paiement', '💳 Paiement'], ['seance', '📅 Séance'], ['studio', '📱 Studio Social'], ['bon-cadeau', '🎁 Bon cadeau'], ['compte', '🔐 Mon compte'], ['autre', '💬 Autre']];
  var STATUTS = { ouvert: 'Ouvert', 'en-cours': 'En cours', 'attente-client': 'Votre réponse attendue', resolu: 'Résolu' };
  var MOTS = /(rembours|bug|bloqu|ne marche|marche pas|fonctionne pas|erreur|refus|annul|plainte|réclamation|reclamation|ticket|support|problème de paiement|pas reçu|pas recu)/i;
  var propose = false;

  /* Session de l'espace client (même lecture que le bouton « Mon compte »), rafraîchie si elle a expiré */
  function lireSession() {
    try { var x = JSON.parse(localStorage.getItem(CLE) || 'null'); x = x && (x.currentSession || x); return x && x.user && x.user.email ? x : null; } catch (e) { return null; }
  }
  async function jeton() {
    var x = lireSession(); if (!x) return '';
    if (x.access_token && x.expires_at && x.expires_at * 1000 > Date.now() + 30000) return x.access_token;
    if (!x.refresh_token) return '';
    try {
      var r = await fetch(PROJET + '/auth/v1/token?grant_type=refresh_token', { method: 'POST', headers: { apikey: ANON, 'Content-Type': 'application/json' }, body: JSON.stringify({ refresh_token: x.refresh_token }) });
      if (!r.ok) return '';
      var n = await r.json(); try { localStorage.setItem(CLE, JSON.stringify(n)); } catch (e) {}
      return n.access_token || '';
    } catch (e) { return ''; }
  }
  async function appel(corps) {
    var j = await jeton(); if (!j) return { connexion: true };
    var r = await fetch(URL_FN, { method: 'POST', headers: { 'Content-Type': 'application/json', apikey: ANON, Authorization: 'Bearer ' + j }, body: JSON.stringify(corps) });
    var d = await r.json().catch(function () { return {}; });
    if (r.status === 401) return { connexion: true };
    if (!r.ok) throw new Error(d.error || 'Envoi impossible.');
    return d;
  }

  function conversation() {
    return Array.prototype.map.call(fil.querySelectorAll('.mcd-bulle.visiteur,.mcd-bulle.assistant'), function (b) {
      return { role: b.classList.contains('visiteur') ? 'user' : 'assistant', content: b.textContent.trim() };
    }).filter(function (m) { return m.content; });
  }
  function bas() { fil.scrollTop = fil.scrollHeight; }
  function bulle(txt) { var b = document.createElement('div'); b.className = 'mcd-bulle assistant'; b.textContent = txt; fil.appendChild(b); bas(); return b; }
  function carte(cls, html) { var c = document.createElement('div'); c.className = 'mcd-tk ' + (cls || ''); c.innerHTML = html; fil.appendChild(c); bas(); return c; }

  function demandeConnexion() {
    if (sugg) sugg.style.display = 'none';
    carte('', '<h3>🎫 Support</h3><p>Pour ouvrir un ticket, connectez-vous à votre espace client : nous retrouvons votre compte et vous répondons sur votre adresse e-mail, sans rien vous redemander.</p>' +
      '<a class="tk-ok" href="espace-compte.html">Me connecter</a><p class="tk-petit">Pas encore client ? Écrivez à <b>contact@moncopaindigital.fr</b>.</p>');
  }

  function formulaire(catInit) {
    var x = lireSession();
    if (!x) return demandeConnexion();
    if (fil.querySelector('form.mcd-tk')) { fil.querySelector('form.mcd-tk textarea').focus(); return; }
    if (sugg) sugg.style.display = 'none';
    bulle('Je crée un ticket pour l’équipe. Un humain vous répond par e-mail, et notre échange est joint pour ne rien vous faire répéter.');
    var f = document.createElement('form'); f.className = 'mcd-tk'; f.noValidate = true;
    f.innerHTML = '<h3>🎫 Nouveau ticket</h3><p class="tk-qui">Compte : <b></b></p><p>C’est à propos de :</p><div class="tk-cats">' +
      CATS.map(function (c) { return '<button type="button" data-c="' + c[0] + '" aria-pressed="' + (c[0] === catInit) + '">' + c[1] + '</button>'; }).join('') + '</div>' +
      '<input name="sujet" placeholder="En une phrase : que se passe-t-il ?" maxlength="140">' +
      '<textarea name="message" placeholder="Les détails : date, montant, message d’erreur…" maxlength="3000"></textarea>' +
      '<p class="tk-err" role="alert" hidden></p><button class="tk-ok" type="submit">Envoyer le ticket</button>';
    f.querySelector('.tk-qui b').textContent = x.user.email;
    var cat = catInit || '';
    f.querySelector('.tk-cats').addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return; cat = b.dataset.c;
      f.querySelectorAll('.tk-cats button').forEach(function (y) { y.setAttribute('aria-pressed', y === b); });
    });
    var dernier = conversation().filter(function (m) { return m.role === 'user'; }).pop();
    if (dernier) f.sujet.value = dernier.content.slice(0, 140);
    f.addEventListener('submit', async function (ev) {
      ev.preventDefault();
      var err = f.querySelector('.tk-err'), ok = f.querySelector('.tk-ok');
      var d = { categorie: cat || 'autre', sujet: f.sujet.value.trim(), message: f.message.value.trim(), page: location.pathname, conversation: conversation() };
      if (!d.sujet || !d.message) { err.hidden = false; err.textContent = 'Il manque le sujet ou le message.'; return; }
      err.hidden = true; ok.disabled = true; ok.textContent = 'Envoi…';
      try {
        var res = await appel(d);
        if (res.connexion) { f.remove(); return demandeConnexion(); }
        if (!res.numero) throw new Error('Envoi impossible.');
        var fait = document.createElement('div'); fait.className = 'mcd-tk fait';
        fait.innerHTML = '<h3>Ticket ouvert ✓</h3><span class="tk-num"></span><p>' +
          (res.avertissement ? 'L’e-mail de confirmation n’a pas pu partir, mais votre demande est bien enregistrée.' : 'Confirmation envoyée à <b></b>.') +
          '</p><p>Nous répondons sous 24 h en semaine, plus vite pour un souci de paiement ou d’accès. Suivez-le dans « Mes tickets ».</p>';
        fait.querySelector('.tk-num').textContent = res.numero;
        var b = fait.querySelector('b'); if (b) b.textContent = x.user.email;
        f.replaceWith(fait);
      } catch (e) {
        err.hidden = false; err.textContent = (e.message || 'Envoi impossible.') + ' Vous pouvez aussi écrire à support@moncopaindigital.fr.';
        ok.disabled = false; ok.textContent = 'Envoyer le ticket';
      }
      bas();
    });
    fil.appendChild(f); bas(); f.message.focus();
  }

  async function mesTickets() {
    if (!lireSession()) return demandeConnexion();
    if (sugg) sugg.style.display = 'none';
    var c = carte('', '<h3>🎫 Mes tickets</h3><p>Chargement…</p>');
    try {
      var res = await appel({ liste: true });
      if (res.connexion) { c.remove(); return demandeConnexion(); }
      var t = res.tickets || [];
      c.innerHTML = '<h3>🎫 Mes tickets</h3>' + (t.length ? '<ul class="tk-liste"></ul>' : '<p>Aucun ticket pour l’instant.</p>') + '<button type="button" class="tk-ok">Nouveau ticket</button>';
      var ul = c.querySelector('ul');
      t.forEach(function (k) {
        var li = document.createElement('li');
        li.innerHTML = '<span class="tk-n"></span><span class="tk-s"></span><span class="tk-e"></span>';
        li.children[0].textContent = k.numero; li.children[1].textContent = k.sujet;
        li.children[2].textContent = STATUTS[k.statut] || k.statut; li.children[2].dataset.statut = k.statut;
        ul.appendChild(li);
      });
      c.querySelector('.tk-ok').addEventListener('click', function () { formulaire(); });
    } catch (e) { c.innerHTML = '<h3>🎫 Mes tickets</h3><p class="tk-err"></p>'; c.querySelector('.tk-err').textContent = e.message; }
    bas();
  }

  // Suggestions + bouton dans l'en-tête
  if (sugg) {
    [['🎫 Créer un ticket', function () { formulaire(); }], ['Mes tickets', mesTickets]].forEach(function (x) {
      var s = document.createElement('button'); s.type = 'button'; s.textContent = x[0];
      s.addEventListener('click', function (e) { e.stopPropagation(); x[1](); }, true); sugg.appendChild(s);
    });
  }
  var tete = chat.querySelector('.mcd-entete'), fermer = document.getElementById('mcdFermer');
  if (tete && fermer) { var h = document.createElement('button'); h.type = 'button'; h.className = 'mcd-tk-btn'; h.textContent = '🎫 Ticket'; h.addEventListener('click', function () { formulaire(); }); tete.insertBefore(h, fermer); }

  // Proposition automatique quand Marshall a répondu à un message qui parle d'un souci
  new MutationObserver(function () {
    if (propose) return;
    var v = fil.querySelectorAll('.mcd-bulle.visiteur'), der = v[v.length - 1];
    if (!der || !MOTS.test(der.textContent)) return;
    var rep = fil.lastElementChild;
    if (!rep || !rep.classList.contains('assistant') || !rep.textContent.trim() || rep.querySelector('.mcd-points')) return;
    propose = true;
    var b = bulle('Si ça ne règle pas votre souci, je peux ouvrir un ticket pour l’équipe. ');
    var a = document.createElement('button'); a.type = 'button'; a.className = 'mcd-tk-btn'; a.style.marginLeft = '0'; a.textContent = '🎫 Créer un ticket';
    a.addEventListener('click', function () { formulaire(/paie|rembours|refus/i.test(der.textContent) ? 'paiement' : /bloqu|connexion|mot de passe/i.test(der.textContent) ? 'compte' : ''); });
    b.appendChild(a);
  }).observe(fil, { childList: true, subtree: true, characterData: true });

  window.MCD_ticket = formulaire;
})();
