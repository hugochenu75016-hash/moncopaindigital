/* Marshall · assistant du site, identique sur toutes les pages (celui de l'accueil).
   À inclure là où le chat doit apparaître : <script src="js/marshall.js?v=1"></script>, avec css/marshall-chat.css
   puis css/marshall-bot.css dans la page. Aucune adresse de serveur ici : tout passe par la fonction marshall-chat. */
(function () {
  var ici = document.currentScript;
  if (!ici || document.getElementById('mcdChat')) return;
  ici.insertAdjacentHTML('beforebegin', "<div class=\"mcd-chat\" data-ouvert=\"false\" id=\"mcdChat\">\n  <div class=\"mcd-fenetre\" role=\"dialog\" aria-label=\"Assistant Marshall\">\n    <div class=\"mcd-entete\">\n      <span class=\"mcd-avatar\"><img src=\"images/avatarchatbot.png\" alt=\"Marshall\"></span>\n      <div>\n        <h2>Marshall</h2>\n        <p>Une question ? Je suis là pour y répondre !</p>\n      </div>\n      <button class=\"mcd-fermer\" id=\"mcdFermer\" aria-label=\"Fermer la conversation\">&times;</button>\n    </div>\n\n    <div class=\"mcd-fil\" id=\"mcdFil\" aria-live=\"polite\"></div>\n\n    <div class=\"mcd-suggestions\" id=\"mcdSuggestions\">\n      <button type=\"button\">Vous vous déplacez où ?</button>\n      <button type=\"button\">C’est combien, une séance ?</button>\n      <button type=\"button\">C’est quoi Studio Social ?</button>\n    </div>\n\n    <div class=\"mcd-saisie\">\n      <textarea id=\"mcdTexte\" rows=\"1\" placeholder=\"Écrivez votre question…\" aria-label=\"Votre message\"></textarea>\n      <button class=\"mcd-envoyer\" id=\"mcdEnvoyer\" aria-label=\"Envoyer\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#FFF7E6\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V5\"></path><path d=\"M5 12l7-7 7 7\"></path></svg></button>\n    </div>\n    <p class=\"mcd-mention\">Assistant automatique : il peut se tromper, vérifiez les infos importantes. Échanges conservés 90 jours pour améliorer Marshall.</p>\n  </div>\n\n  <button class=\"mcd-lanceur\" id=\"mcdLanceur\" aria-label=\"Ouvrir l'assistant\"><img src=\"images/avatarchatbot.png\" alt=\"\"></button>\n</div>");
})();

(function () {
  // Relais Supabase : l'adresse du serveur de Marshall reste côté serveur (fonction marshall-chat)
  const ENDPOINT = 'https://fskrgqkrpgxvypcwbfwm.supabase.co/functions/v1/marshall-chat';
  const CLE_CONV = 'mcd-chat-conversation', CLE_OUVERT = 'mcd-chat-ouvert', DUREE = 3 * 86400000;   // la conversation suit le visiteur 3 jours
  const CLE_SESSION = 'sb-fskrgqkrpgxvypcwbfwm-auth-token';

  const chat   = document.getElementById('mcdChat');
  const fil    = document.getElementById('mcdFil');
  const texte  = document.getElementById('mcdTexte');
  const envoi  = document.getElementById('mcdEnvoyer');
  const sugg   = document.getElementById('mcdSuggestions');

  let occupe = false;
  const ACCUEIL = "Bonjour 👋 Moi c’est Marshall ! Une question sur l’aide à domicile, les sites web ou Studio Social ? Je vous écoute !";
  const PAUSE = "Marshall fait une petite pause, réessayez dans un instant.";

  /* ---------- Conversation gardée d'une page à l'autre ---------- */
  function nouvelId() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) { var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
  }
  function charger() {
    try {
      const x = JSON.parse(localStorage.getItem(CLE_CONV) || 'null');
      if (x && x.id && Array.isArray(x.messages) && Date.now() - x.maj < DUREE) return x;
    } catch (e) {}
    return { id: nouvelId(), maj: Date.now(), messages: [] };
  }
  const etat = charger();
  function sauver() {
    etat.maj = Date.now();
    try { localStorage.setItem(CLE_CONV, JSON.stringify({ id: etat.id, maj: etat.maj, messages: etat.messages.slice(-40) })); } catch (e) {}
  }
  function sessionClient() {
    try { var x = JSON.parse(localStorage.getItem(CLE_SESSION) || 'null'); x = x && (x.currentSession || x); return x && x.user && x.user.email ? x : null; } catch (e) { return null; }
  }
  function corpsCommun() {
    return { id: etat.id, page: { chemin: location.pathname, titre: document.title }, connecte: !!sessionClient() };
  }
  async function relais(corps) {
    const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.assign(corpsCommun(), corps)) });
    const d = await r.json().catch(function () { return {}; });
    return { ok: r.ok, statut: r.status, d: d };
  }

  /* ---------- Affichage ---------- */
  function bas() { fil.scrollTop = fil.scrollHeight; }
  function ecrire(el, contenu) {
    // Transforme les liens internes en liens cliquables, sans injecter de HTML brut
    el.textContent = contenu;
    el.innerHTML = el.innerHTML.replace(/(\/[a-zA-Z0-9\-_]+\.html)/g, '<a href="$1">$1</a>');
  }
  function bulle(role, contenu) {
    const el = document.createElement('div');
    el.className = 'mcd-bulle ' + role;
    ecrire(el, contenu);
    fil.appendChild(el);
    bas();
    return el;
  }
  // Pendant l'écriture : on cache les balises de fin ([[...]]) et le gras, la version propre arrive à la fin
  function visible(t) {
    const i = t.indexOf('[[');
    if (i >= 0) t = t.slice(0, i);
    return t.replace(/\[$/, '').replace(/\*\*/g, '').trim();
  }
  function retirerChoix() { fil.querySelectorAll('.mcd-choix').forEach(function (x) { x.remove(); }); }

  function choix(liste) {
    if (!liste || !liste.length) return;
    const z = document.createElement('div');
    z.className = 'mcd-choix';
    liste.forEach(function (t) {
      const b = document.createElement('button'); b.type = 'button';
      b.textContent = t.length > 32 ? t.slice(0, 32).replace(/\s+\S*$/, '') + '…' : t;   // affichage court, texte complet envoyé
      b.title = t;
      b.addEventListener('click', function () { envoyer(t); });
      z.appendChild(b);
    });
    fil.appendChild(z); bas();
  }

  function avis(el, question, reponse) {
    const z = document.createElement('div');
    z.className = 'mcd-avis';
    z.innerHTML = '<button type="button" aria-label="Réponse utile">👍</button><button type="button" aria-label="Réponse pas utile">👎</button>';
    z.addEventListener('click', function (e) {
      const b = e.target.closest('button'); if (!b) return;
      const note = b === z.children[0] ? 1 : -1;
      z.innerHTML = '<span>' + (note === 1 ? 'Merci !' : 'Merci, nous allons nous améliorer.') + '</span>';
      relais({ avis: { note: note, question: question, reponse: reponse } }).catch(function () {});
    });
    el.insertAdjacentElement('afterend', z);
  }

  /* ---------- Cartes : offres, calendrier, ticket ---------- */
  const OFFRES = {
    seance: { titre: 'Aide numérique à domicile', sous: 'Chez vous en Île-de-France, ou en visio. Sur votre matériel, à votre rythme.',
      lignes: [['1 séance d’1 h', '49 €'], ['3 séances', '135 €', '45 € la séance'], ['5 séances', '210 €', '42 € la séance']],
      actions: [['Voir les offres', '/Nosoffres.html'], ['Prendre rendez-vous', 'calendrier']] },
    audit: { titre: 'Audit gratuit', sous: '30 minutes en visio avec l’équipe, sans engagement.',
      lignes: [['Site, réseaux, fiche Google', 'Offert']],
      actions: [['Choisir un créneau', 'calendrier'], ['Audit express en 1 min', '/audit-gratuit.html']] },
    studio: { titre: 'Studio Social', sous: 'Marshall crée vos posts, stories et vidéos et les publie. Sans engagement.',
      lignes: [['Gratuit', '0 €', '1 500 tokens par mois'], ['Complet', '29 €/mois', 'publication et programmation'], ['Hyper', '59 €/mois', '22 500 tokens']],
      actions: [['Découvrir Studio Social', '/decouvrir-studio-social.html']] }
  };
  function carteOffre(id) {
    const o = OFFRES[id]; if (!o) return;
    const c = document.createElement('div'); c.className = 'mcd-tk mcd-offre';
    c.innerHTML = '<h3></h3><p class="tk-petit"></p><ul class="of-prix"></ul><div class="of-actions"></div>';
    c.querySelector('h3').textContent = o.titre;
    c.querySelector('.tk-petit').textContent = o.sous;
    o.lignes.forEach(function (l) {
      const li = document.createElement('li'); li.innerHTML = '<span></span><b></b>' + (l[2] ? '<small></small>' : '');
      li.children[0].textContent = l[0]; li.children[1].textContent = l[1]; if (l[2]) li.children[2].textContent = l[2];
      c.querySelector('.of-prix').appendChild(li);
    });
    o.actions.forEach(function (a, i) {
      const el = document.createElement(a[1] === 'calendrier' ? 'button' : 'a');
      el.className = i === 0 ? 'tk-ok' : 'of-lien'; el.textContent = a[0];
      if (a[1] === 'calendrier') { el.type = 'button'; el.addEventListener('click', function () { carteCalendrier(); }); }
      else el.href = a[1].slice(1);
      c.querySelector('.of-actions').appendChild(el);
    });
    fil.appendChild(c); bas();
  }

  const CRENEAUX = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
  const TYPES = ['Aide numérique à domicile', 'Création de site web', 'Refonte de site existant', 'Référencement / SEO', 'Réseaux sociaux',
                 'Identité visuelle / branding', 'Autre / je ne sais pas encore'];
  const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const MOIS_COURTS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  const ERREURS_RDV = { creneau_pris: 'Ce créneau vient d’être pris : choisissez-en un autre.', date_passee: 'Cette date est passée.',
    dimanche_ferme: 'Nous sommes fermés le dimanche.', email_invalide: 'L’adresse e-mail n’est pas valide.', nom_invalide: 'Il manque votre nom.',
    heure_invalide: 'Ce créneau n’existe pas.', date_invalide: 'La date n’est pas valide.' };
  function isoLocal(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }

  async function carteCalendrier() {
    const ouverte = fil.querySelector('.mcd-cal:not(.fait)');
    if (ouverte) { ouverte.scrollIntoView({ block: 'nearest' }); return; }
    retirerChoix();
    const c = document.createElement('div'); c.className = 'mcd-tk mcd-cal';
    c.innerHTML = '<h3>📅 Choisir un créneau</h3><p class="tk-petit">Chargement des créneaux libres…</p>';
    fil.appendChild(c); bas();
    let pris = new Set();
    try { const r = await relais({ creneaux: true }); if (r.ok) pris = new Set(r.d.pris || []); } catch (e) {}
    const maintenant = new Date(), jours = [];
    for (let k = 0; jours.length < 12 && k < 21; k++) {
      const d = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate() + k);
      if (d.getDay() === 0) continue;
      const libres = CRENEAUX.filter(function (h) {
        const t = new Date(d.getFullYear(), d.getMonth(), d.getDate(), +h.slice(0, 2));
        return t - maintenant > 2 * 3600000 && !pris.has(isoLocal(d) + ' ' + h);
      });
      if (libres.length) jours.push({ d: d, libres: libres });
    }
    if (!jours.length) { c.querySelector('.tk-petit').innerHTML = 'Aucun créneau libre en ligne pour l’instant : écrivez-nous via <a href="contact.html">la page contact</a>.'; return; }
    c.innerHTML = '<h3>📅 Choisir un créneau</h3><div class="cal-jours"></div><div class="cal-heures"></div>';
    const zj = c.querySelector('.cal-jours'), zh = c.querySelector('.cal-heures');
    function montrerJour(j, bouton) {
      zj.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === bouton); });
      zh.innerHTML = '';
      j.libres.forEach(function (h) {
        const b = document.createElement('button'); b.type = 'button'; b.textContent = h.replace(':00', ' h');
        b.addEventListener('click', function () { formulaireRdv(c, j.d, h); });
        zh.appendChild(b);
      });
    }
    jours.forEach(function (j, i) {
      const b = document.createElement('button'); b.type = 'button';
      b.innerHTML = '<small></small><b></b>';
      b.children[0].textContent = JOURS[j.d.getDay()].slice(0, 3); b.children[1].textContent = j.d.getDate() + ' ' + MOIS_COURTS[j.d.getMonth()];
      b.addEventListener('click', function () { montrerJour(j, b); });
      zj.appendChild(b);
      if (i === 0) montrerJour(j, b);
    });
    bas();
  }

  function formulaireRdv(c, d, h) {
    const quand = JOURS[d.getDay()] + ' ' + d.getDate() + ' ' + MOIS[d.getMonth()] + ' ' + d.getFullYear() + ' à ' + h;
    const s = sessionClient(), meta = (s && s.user && s.user.user_metadata) || {};
    const f = document.createElement('form'); f.className = 'mcd-tk mcd-cal'; f.noValidate = true;
    f.innerHTML = '<h3>📅 Votre rendez-vous</h3><p class="cal-quand"></p>' +
      '<select name="type" aria-label="Votre besoin"></select>' +
      '<input name="nom" placeholder="Votre nom" autocomplete="name" maxlength="120">' +
      '<input name="email" type="email" placeholder="Votre e-mail" autocomplete="email" maxlength="160">' +
      '<input name="tel" type="tel" placeholder="Téléphone (facultatif)" autocomplete="tel" maxlength="30">' +
      '<textarea name="msg" placeholder="Un mot sur votre besoin (facultatif)" maxlength="800"></textarea>' +
      '<p class="tk-err" role="alert" hidden></p><button class="tk-ok" type="submit">Réserver ce créneau</button>' +
      '<button class="of-lien" type="button">Changer de créneau</button>';
    f.querySelector('.cal-quand').textContent = quand.charAt(0).toUpperCase() + quand.slice(1);
    TYPES.forEach(function (t) { const o = document.createElement('option'); o.textContent = t; f.type.appendChild(o); });
    f.nom.value = meta.nom || meta.full_name || ''; f.email.value = (s && s.user.email) || ''; f.tel.value = meta.tel || '';
    f.querySelector('.of-lien').addEventListener('click', function () { f.replaceWith(c); bas(); });
    f.addEventListener('submit', async function (ev) {
      ev.preventDefault();
      const err = f.querySelector('.tk-err'), ok = f.querySelector('.tk-ok');
      const x = { nom: f.nom.value.trim(), email: f.email.value.trim(), tel: f.tel.value.trim(), type: f.type.value, msg: f.msg.value.trim(), date: isoLocal(d), heure: h, when: quand };
      if (!x.nom || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(x.email)) { err.hidden = false; err.textContent = 'Il faut votre nom et une adresse e-mail valide.'; return; }
      err.hidden = true; ok.disabled = true; ok.textContent = 'Réservation…';
      try {
        const r = await relais({ reserver: x });
        if (!r.d.success) throw new Error(ERREURS_RDV[r.d.error] || 'La réservation n’a pas abouti. Vous pouvez réessayer, ou passer par /rendez-vous.html.');
        const fait = document.createElement('div'); fait.className = 'mcd-tk mcd-cal fait';
        fait.innerHTML = '<h3>Rendez-vous réservé ✓</h3><p class="cal-quand"></p><p>Confirmation envoyée à <b></b>. Un empêchement ? Le lien d’annulation est dans l’e-mail.</p>';
        fait.querySelector('.cal-quand').textContent = f.querySelector('.cal-quand').textContent;
        fait.querySelector('b').textContent = x.email;
        f.replaceWith(fait);
        // Marshall le saura au prochain message
        const note = 'C’est réservé : ' + quand + ' (' + x.type + '). Confirmation envoyée à ' + x.email + '.';
        const der = etat.messages[etat.messages.length - 1];
        if (der && der.role === 'assistant') der.content += ' ' + note; else etat.messages.push({ role: 'assistant', content: note });
        sauver();
      } catch (e) {
        err.hidden = false; err.textContent = e.message || 'La réservation n’a pas abouti.';
        ok.disabled = false; ok.textContent = 'Réserver ce créneau';
      }
      bas();
    });
    c.replaceWith(f); bas(); (f.nom.value ? f.msg : f.nom).focus();
  }

  function cartes(liste) {
    (liste || []).forEach(function (c) {
      if (c.type === 'offre') carteOffre(c.id);
      else if (c.type === 'calendrier') carteCalendrier();
      else if (c.type === 'ticket' && window.MCD_ticket) window.MCD_ticket();
    });
  }

  /* ---------- Envoi, réponse au fil de l'eau ---------- */
  function ouvrir() {
    chat.dataset.ouvert = 'true';
    try { sessionStorage.setItem(CLE_OUVERT, '1'); } catch (e) {}
    if (!fil.children.length) bulle('assistant', ACCUEIL);
  }
  function fermer() {
    chat.dataset.ouvert = 'false';
    try { sessionStorage.removeItem(CLE_OUVERT); } catch (e) {}
  }

  async function envoyer(message) {
    if (occupe || !message.trim()) return;
    occupe = true;
    envoi.disabled = true;
    sugg.style.display = 'none';
    retirerChoix();

    bulle('visiteur', message);
    etat.messages.push({ role: 'user', content: message });
    sauver();
    texte.value = '';
    texte.style.height = 'auto';

    const el = bulle('assistant', '');
    el.innerHTML = '<span class="mcd-points"><i></i><i></i><i></i></span>';
    let recu = '', fin = null, erreur = '';
    try {
      const r = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign(corpsCommun(), { messages: etat.messages.map(function (m) { return { role: m.role, content: m.content }; }), stream: true })),
      });
      if (!r.ok || !r.body) {
        const d = await r.json().catch(function () { return {}; });
        erreur = d.error || PAUSE;
      } else {
        const lecteur = r.body.getReader(), dec = new TextDecoder();
        let reste = '';
        const ligne = function (l) {
          l = l.trim(); if (!l) return;
          let d; try { d = JSON.parse(l); } catch (e) { return; }
          if (d.t) { recu += d.t; const v = visible(recu); if (v) { el.textContent = v; bas(); } }
          else if (d.fin) fin = d;
          else if (d.erreur) erreur = d.erreur;
          else if (typeof d.reply === 'string') fin = d;   // relais sans flux : la réponse arrive d'un bloc
        };
        for (;;) {
          const x = await lecteur.read();
          if (x.done) break;
          reste += dec.decode(x.value, { stream: true });
          let i;
          while ((i = reste.indexOf('\n')) >= 0) { ligne(reste.slice(0, i)); reste = reste.slice(i + 1); }
        }
        ligne(reste);
      }
    } catch (e) {
      erreur = recu ? '' : "Connexion impossible. Vérifiez votre connexion et réessayez.";
    }
    if (!fin && recu && !erreur) fin = { reply: visible(recu) };
    if (fin && fin.reply) {
      el.dataset.fini = '1';
      ecrire(el, fin.reply);
      etat.messages.push({ role: 'assistant', content: fin.reply, boutons: fin.boutons || [], cartes: fin.cartes || [] });
      sauver();
      avis(el, message, fin.reply);
      cartes(fin.cartes);
      choix(fin.boutons);
    } else {
      el.remove();
      etat.messages.pop(); sauver();   // le message pourra être renvoyé tel quel
      bulle('erreur', erreur || PAUSE);
    }
    occupe = false;
    envoi.disabled = false;
    texte.focus();
    bas();
  }
  window.MCD_envoyer = envoyer;

  /* ---------- Reprise de la conversation en arrivant sur la page ---------- */
  if (etat.messages.length) {
    bulle('assistant', ACCUEIL);
    etat.messages.forEach(function (m) { const el = bulle(m.role === 'user' ? 'visiteur' : 'assistant', m.content); if (m.role !== 'user') el.dataset.fini = '1'; });
    const der = etat.messages[etat.messages.length - 1];
    if (der.role === 'assistant') {
      (der.cartes || []).forEach(function (c) { if (c.type === 'offre') carteOffre(c.id); });
      choix(der.boutons);
    }
    sugg.style.display = 'none';
  }
  try { if (sessionStorage.getItem(CLE_OUVERT)) { ouvrir(); setTimeout(bas, 50); } } catch (e) {}

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
    // Pas connecté : Marshall prend la demande par écrit et la transmet par e-mail (outil creer_ticket_support)
    if (!x) return window.MCD_envoyer ? window.MCD_envoyer('Je voudrais ouvrir un ticket support.') : demandeConnexion();
    if (fil.querySelector('form.mcd-tk:not(.mcd-cal)')) { fil.querySelector('form.mcd-tk:not(.mcd-cal) textarea').focus(); return; }
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
        var li = document.createElement('li'); li.tabIndex = 0; li.setAttribute('role', 'button');
        li.innerHTML = '<span class="tk-n"></span><span class="tk-s"></span><span class="tk-e"></span>';
        li.addEventListener('click', function () { voirTicket(k.numero); });
        li.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') voirTicket(k.numero); });
        li.children[0].textContent = k.numero; li.children[1].textContent = k.sujet;
        li.children[2].textContent = STATUTS[k.statut] || k.statut; li.children[2].dataset.statut = k.statut;
        ul.appendChild(li);
      });
      c.querySelector('.tk-ok').addEventListener('click', function () { formulaire(); });
    } catch (e) { c.innerHTML = '<h3>🎫 Mes tickets</h3><p class="tk-err"></p>'; c.querySelector('.tk-err').textContent = e.message; }
    bas();
  }

  // Un ticket : le message de départ, les réponses de l'équipe et du client, et un champ pour répondre
  async function voirTicket(numero) {
    var c = carte('', '<h3>🎫 ' + numero + '</h3><p>Chargement…</p>');
    try {
      var res = await appel({ voir: numero });
      if (res.connexion) { c.remove(); return demandeConnexion(); }
      var tk = res.ticket, msgs = [{ auteur: 'client', message: tk.message, cree_le: tk.cree_le }].concat(res.messages || []);
      c.innerHTML = '<h3>🎫 <span></span></h3><p class="tk-sujet"></p><span class="tk-e"></span><div class="tk-fil"></div>' +
        (tk.statut === 'resolu' ? '<p class="tk-petit">Ticket résolu. Écrivez ci-dessous pour le rouvrir.</p>' : '') +
        '<form class="tk-rep"><textarea maxlength="3000" placeholder="Votre réponse…" aria-label="Votre réponse"></textarea><p class="tk-err" role="alert" hidden></p><button class="tk-ok" type="submit">Répondre</button></form>';
      c.querySelector('h3 span').textContent = tk.numero; c.querySelector('.tk-sujet').textContent = tk.sujet;
      var st = c.querySelector('.tk-e'); st.textContent = STATUTS[tk.statut] || tk.statut; st.dataset.statut = tk.statut;
      var zone = c.querySelector('.tk-fil');
      function ajoute(m) {
        var d = document.createElement('div'); d.className = 'tk-msg ' + m.auteur;
        d.innerHTML = '<small></small><p></p>';
        d.querySelector('small').textContent = (m.auteur === 'equipe' ? 'Mon Copain Digital' : 'Vous') + ' · ' + new Date(m.cree_le).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
        d.querySelector('p').textContent = m.message; zone.appendChild(d);
      }
      msgs.forEach(ajoute);
      var f = c.querySelector('.tk-rep');
      f.addEventListener('submit', async function (ev) {
        ev.preventDefault();
        var ta = f.querySelector('textarea'), err = f.querySelector('.tk-err'), ok = f.querySelector('.tk-ok'), txt = ta.value.trim();
        if (!txt) return;
        ok.disabled = true; err.hidden = true;
        try {
          var r = await appel({ repondre: tk.numero, message: txt });
          if (r.connexion) { c.remove(); return demandeConnexion(); }
          ajoute({ auteur: 'client', message: txt, cree_le: new Date().toISOString() }); ta.value = '';
          st.textContent = STATUTS.ouvert; st.dataset.statut = 'ouvert';
        } catch (e) { err.hidden = false; err.textContent = e.message; }
        ok.disabled = false; bas();
      });
    } catch (e) { c.innerHTML = '<h3>🎫 Ticket</h3><p class="tk-err"></p>'; c.querySelector('.tk-err').textContent = e.message; }
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
    var reps = fil.querySelectorAll('.mcd-bulle.assistant'), rep = reps[reps.length - 1];
    if (!rep || rep.dataset.fini !== '1' || rep.compareDocumentPosition(der) & Node.DOCUMENT_POSITION_FOLLOWING) return;
    propose = true;
    var b = bulle('Si ça ne règle pas votre souci, je peux ouvrir un ticket pour l’équipe. ');
    var a = document.createElement('button'); a.type = 'button'; a.className = 'mcd-tk-btn'; a.style.marginLeft = '0'; a.textContent = '🎫 Créer un ticket';
    a.addEventListener('click', function () { formulaire(/paie|rembours|refus/i.test(der.textContent) ? 'paiement' : /bloqu|connexion|mot de passe/i.test(der.textContent) ? 'compte' : ''); });
    b.appendChild(a);
  }).observe(fil, { childList: true, subtree: true, characterData: true });

  window.MCD_ticket = formulaire;
})();
