/* Cockpit · tour de contrôle de Mon Copain Digital (cockpit.html).
   Aucune donnée dans la page : tout vient de la fonction « cockpit » (et « support-ticket » pour les tickets),
   qui vérifient à chaque appel que la personne connectée est l'administrateur.
   Une catégorie de la barre = un écran ; l'adresse garde l'écran ouvert (#ventes, #emails…). */
(function () {
  var URL_SB = 'https://fskrgqkrpgxvypcwbfwm.supabase.co';
  var ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza3JncWtycGd4dnlwY3diZndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0OTY0MjgsImV4cCI6MjEwODA3MjQyOH0.rY5AB0ZwPsCqu_p74Ph09_fGj92uDztoYDwJvH1jmIU';   // clé publique du site, protégée par les règles Supabase
  var sb = window.supabase.createClient(URL_SB, ANON);
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var euro = function (c) { return (Math.round(c) / 100).toLocaleString('fr-FR', { minimumFractionDigits: c % 100 ? 2 : 0, maximumFractionDigits: 2 }) + ' €'; };
  var quand = function (d) { d = new Date(d); return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }) + ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }); };
  var s_ = function (n, mot) { return n + ' ' + mot + (n > 1 ? 's' : ''); };
  var OFFRES = { seance: 'Séance', pack3: 'Pack 3', pack5: 'Pack 5' };
  var CATS = { paiement: 'Paiement', seance: 'Séance', studio: 'Studio Social', 'bon-cadeau': 'Bon cadeau', compte: 'Mon compte', autre: 'Autre' };
  var STATUTS = { ouvert: ['Ouvert', 'or'], 'en-cours': ['En cours', 'bleu'], 'attente-client': ['Attente client', 'violet'], resolu: ['Résolu', 'vert'] };
  var ETATS_MAIL = { delivered: ['Livré', 'bleu'], opened: ['Ouvert', 'vert'], clicked: ['Cliqué', 'vert'], bounced: ['Rebond', 'rouge'], complained: ['Plainte', 'rouge'], sent: ['Envoyé', 'or'], scheduled: ['Prévu', 'or'], delivery_delayed: ['Retardé', 'or'], failed: ['Échec', 'rouge'] };
  var TITRES = { vue: 'Bonjour Hugo', ventes: 'Ventes', emails: 'E-mails', autos: 'Automatisations', support: 'Support', sante: 'Santé', marketing: 'Marketing' };
  var ICONES = {
    ca: '<path d="M3 17l6-6 4 4 8-8"/>', seances: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>',
    panier: '<path d="M6 6h15l-2 9H8L6 3H3"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>',
    bons: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18"/>', studio: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    promo: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/>', cmd: '<path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h5"/>'
  };
  var VIDE_IMG = '<img src="images/marshall-offres-ecoute.webp" alt="">';
  var D = null;

  async function appel(fn, corps) {
    var r = await sb.functions.invoke(fn, { body: corps });
    if (r.error) {
      var m = 'Action impossible.', st = r.error.context && r.error.context.status;
      try { var d = await r.error.context.json(); if (d && d.error) m = d.error; } catch (e) {}
      var err = new Error(m); err.status = st; throw err;
    }
    return r.data;
  }
  var cockpit = function (corps) { return appel('cockpit', corps); };
  function erreurBloc(x) { return x && x.erreur ? '<p class="cp-err">Indisponible : ' + esc(x.erreur) + '</p>' : ''; }
  function vide(texte) { return '<p class="cp-vide">' + VIDE_IMG + '<span>' + texte + '</span></p>'; }

  /* ---------- Navigation : une catégorie = un écran ---------- */
  var VUES = Object.keys(TITRES);
  function montre(nom) {
    if (VUES.indexOf(nom) < 0) nom = 'vue';
    document.querySelectorAll('.cp-vue').forEach(function (v) { v.classList.toggle('on', v.dataset.v === nom); });
    document.querySelectorAll('.cp-nav a').forEach(function (a) { a.classList.toggle('on', a.dataset.vue === nom); if (a.dataset.vue === nom) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $('#cp-titre').textContent = TITRES[nom];
    var actif = document.querySelector('.cp-nav a.on'); if (actif && innerWidth <= 760) actif.scrollIntoView({ inline: 'center', block: 'nearest' });
    scrollTo(0, 0);
  }
  addEventListener('hashchange', function () { montre(location.hash.slice(1)); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-aller]'); if (!a) return;
    e.preventDefault(); location.hash = a.dataset.aller;
  });

  /* ---------- Accès ---------- */
  function acces(titre, texte, bouton) {
    $('#cp-contenu').hidden = true;
    var a = $('#cp-acces'); a.hidden = false;
    a.innerHTML = '<img src="images/avatarchatbot.png" alt=""><h2>' + esc(titre) + '</h2><p>' + esc(texte) + '</p>' + (bouton || '');
    etat('', titre);
  }
  function etat(cls, txt) { var e = $('#cp-etat'); e.className = 'cp-etat ' + cls; e.querySelector('.cp-pastille b').textContent = txt; }
  $('#cp-date').textContent = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

  async function charger() {
    var s = (await sb.auth.getSession()).data.session;
    if (!s) return acces('Connexion nécessaire', 'Le cockpit est réservé à l’administrateur. Connectez-vous dans votre espace, puis revenez ici.', '<a class="cp-btn" href="espace-compte.html">Me connecter</a>');
    $('#cp-maj').disabled = true; etat('', 'Synchronisation…');
    try { D = await cockpit({ action: 'vue' }); }
    catch (e) {
      $('#cp-maj').disabled = false;
      if (e.status === 403) return acces('Accès réservé', 'Ce compte n’est pas administrateur.');
      if (e.status === 401) return acces('Connexion nécessaire', 'Votre session a expiré.', '<a class="cp-btn" href="espace-compte.html">Me reconnecter</a>');
      return acces('Cockpit indisponible', e.message);
    }
    $('#cp-maj').disabled = false;
    $('#cp-acces').hidden = true; $('#cp-contenu').hidden = false;
    rendu();
  }

  /* ---------- Rendu ---------- */
  function kpi(icone, titre, valeur, detail, cls) {
    return '<div class="cp-verre cp-kpi"><div class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">' + ICONES[icone] + '</svg></div><span>' + titre + '</span><b>' + valeur + '</b><small class="' + (cls || '') + '">' + detail + '</small></div>';
  }
  function evolution(a, b) {
    if (!b) return null;
    var p = Math.round((a - b) / b * 100);
    return [(p >= 0 ? '+' : '−') + Math.abs(p) + ' % vs mois dernier', p >= 0 ? 'mieux' : 'moins'];
  }

  function rendu() {
    var v = D.ventes, st = D.studio, bo = D.bons, k = '';
    if (v.erreur) k = '<div class="cp-verre cp-bloc" style="grid-column:1/-1">' + erreurBloc(v) + '</div>';
    else {
      var ev = evolution(v.ca, v.caPrec);
      k += kpi('ca', 'Chiffre du mois', euro(v.ca), v.ca ? (ev ? ev[0] : 'premier mois suivi') : 'Pas encore de vente ce mois-ci', v.ca && ev ? ev[1] : '');
      k += kpi('seances', 'Séances', v.seances, s_(v.commandes, 'commande') + ' · ' + s_(v.packs, 'pack'));
      k += kpi('panier', 'Panier moyen', v.commandes ? euro(v.ca / v.commandes) : '—', v.commandes ? 'sur ' + s_(v.commandes, 'commande') : 'Calculé dès la 1re vente');
    }
    k += bo.erreur ? '<div class="cp-verre cp-bloc">' + erreurBloc(bo) + '</div>' : kpi('bons', 'Bons cadeaux', bo.total, bo.total ? euro(bo.montant) + ' · ' + bo.aEnvoyer + ' à envoyer le 24/12' : 'Aucun vendu pour l’instant');
    k += st.erreur ? '<div class="cp-verre cp-bloc">' + erreurBloc(st) + '</div>' : kpi('studio', 'Abonnés Studio', st.actifs, 'sur ' + s_(st.comptes, 'compte') + ' Studio');
    $('#kpis').innerHTML = k;

    renduRegarder(); renduVentes(); renduEmails(); renduAutos(); renduSupport(); renduSante(); renduPromos(); renduBons(); renduIdees();

    var tickets = Array.isArray(D.tickets) ? D.tickets.filter(function (t) { return t.statut === 'ouvert'; }).length : 0;
    var contacts = Array.isArray(D.contacts) ? D.contacts.filter(function (c) { return !c.traite_le; }).length : 0;
    var sante = (v.echecs ? v.echecs.length : 0) + (D.erreurs && D.erreurs.total ? 1 : 0);
    pastille('#nb-support', tickets + contacts);
    pastille('#nb-sante', sante);
    var points = tickets + contacts + sante;
    etat(points ? 'alerte' : 'ok', points ? s_(points, 'point') + ' à regarder' : 'Tout tourne');
    $('#cp-date').textContent = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }) + ' · synchro ' + new Date(D.maj).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }
  function pastille(sel, n) { var p = $(sel); p.textContent = n; p.hidden = !n; }

  // Vue d'ensemble : ce qui demande une action, avec un lien vers le bon écran
  function renduRegarder() {
    var l = [], v = D.ventes, t = D.tickets, c = D.contacts, er = D.erreurs, a = D.autos, p = D.promos;
    function ligne(chip, cls, titre, detail, vue, bouton) {
      l.push('<div class="cp-ligne"><span class="chip ' + cls + '">' + chip + '</span><div><b>' + titre + '</b><small>' + detail + '</small></div>' +
        (vue ? '<div class="x"><a class="cp-btn clair petit" href="#' + vue + '" data-aller="' + vue + '">' + (bouton || 'Voir') + '</a></div>' : '') + '</div>');
    }
    var nt = Array.isArray(t) ? t.filter(function (x) { return x.statut === 'ouvert'; }).length : 0;
    var nc = Array.isArray(c) ? c.filter(function (x) { return !x.traite_le; }).length : 0;
    if (nt || nc) ligne('À traiter', 'or', 'Support', [nt ? s_(nt, 'ticket ouvert') : '', nc ? s_(nc, 'message') + ' de contact' : ''].filter(Boolean).join(' · '), 'support');
    else ligne('OK', 'vert', 'Support', 'aucun ticket ni message en attente');
    var ne = v.echecs ? v.echecs.length : 0, nerr = er && !er.erreur ? er.total : 0;
    if (ne || nerr) ligne('Attention', 'rouge', 'Paiements et erreurs', [ne ? s_(ne, 'paiement échoué') : '', nerr ? s_(nerr, 'erreur') + ' aujourd’hui' : ''].filter(Boolean).join(' · '), 'sante');
    else ligne('OK', 'vert', 'Paiements et erreurs', 'aucun échec, aucune erreur aujourd’hui');
    if (Array.isArray(a)) a.forEach(function (x) { if (x.enService === false) ligne('À décider', '', esc(x.nom), 'prête, pas encore en service', 'autos'); });
    if (Array.isArray(p) && !p.some(function (x) { return x.actif; })) ligne('Idée', 'bleu', 'Aucun code promo actif', 'un code de bienvenue −10 % aide la 1re vente', 'marketing', 'Créer');
    $('#regarder').innerHTML = l.join('');

    var m = D.emails, el = $('#mails-courts');
    if (m.erreur) { el.innerHTML = erreurBloc(m); $('#mails-resume').textContent = ''; return; }
    var rebonds = m.filter(function (x) { return x.etat === 'bounced' || x.etat === 'complained' || x.etat === 'failed'; }).length;
    $('#mails-resume').textContent = m.length ? (rebonds ? s_(rebonds, 'problème') : 'tous livrés') : '';
    el.innerHTML = !m.length ? vide('Aucun e-mail récent.') : '<div class="cp-defile"><table class="cp-table"><tbody>' + m.slice(0, 4).map(ligneMail(false)).join('') + '</tbody></table></div><a class="cp-plus" href="#emails" data-aller="emails">Tous les e-mails →</a>';
  }

  function renduVentes() {
    var v = D.ventes;
    if (v.erreur) { $('#kpis-ventes').innerHTML = ''; $('#courbe').innerHTML = erreurBloc(v); $('#echecs').innerHTML = ''; }
    else {
      var ev = evolution(v.ca, v.caPrec);
      $('#kpis-ventes').innerHTML = kpi('ca', 'Ce mois-ci', euro(v.ca), ev ? ev[0] : 'premier mois suivi', ev ? ev[1] : '') +
        kpi('cmd', 'Commandes', v.commandes, 'mois dernier : ' + v.commandesPrec) + kpi('seances', 'Séances vendues', v.seances, s_(v.packs, 'pack')) +
        kpi('bons', 'Dont bons cadeaux', v.cadeaux, 'payés ce mois-ci') + kpi('promo', 'Codes promo utilisés', v.promos, v.remises ? euro(v.remises) + ' de remise' : 'aucune remise');
      var jours = v.jours || [], max = Math.max.apply(null, jours.map(function (j) { return j.ca; }).concat([0]));
      if (!max) $('#courbe').innerHTML = vide('Pas encore de vente sur les 30 derniers jours. La courbe apparaît dès la première.');
      else {
        var w = 600, h = 160, n = jours.length, bw = w / n;
        var barres = jours.map(function (j, i) { var bh = Math.max(j.ca ? 3 : 0, j.ca / max * (h - 24)); return '<rect x="' + (i * bw + 2).toFixed(1) + '" y="' + (h - 18 - bh).toFixed(1) + '" width="' + (bw - 4).toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="3" fill="#F3852B"><title>' + j.j.slice(8, 10) + '/' + j.j.slice(5, 7) + ' : ' + euro(j.ca) + '</title></rect>'; }).join('');
        $('#courbe').innerHTML = '<div class="cp-courbe"><svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" role="img" aria-label="Chiffre jour par jour"><line x1="0" x2="' + w + '" y1="' + (h - 18) + '" y2="' + (h - 18) + '" stroke="#f0e2d3"/>' + barres + '</svg><div class="axe"><span>' + jours[0].j.slice(8, 10) + '/' + jours[0].j.slice(5, 7) + '</span><span>max ' + euro(max) + ' / jour</span><span>aujourd’hui</span></div></div>';
      }
      $('#echecs').innerHTML = !v.echecs.length ? vide('Aucun paiement échoué sur 7 jours.') : v.echecs.map(function (x) {
        return '<div class="cp-ligne"><span class="chip rouge">' + euro(x.montant) + '</span><div><b>' + esc(OFFRES[x.offre] || x.offre || 'Paiement') + (x.client ? ' · ' + esc(x.client) : '') + '</b><small>' + quand(x.quand) + ' · ' + esc(x.raison) + '</small></div></div>';
      }).join('');
    }
    var st = D.studio;
    $('#studio').innerHTML = st.erreur ? erreurBloc(st) : !st.comptes ? vide('Aucun compte Studio pour l’instant.') :
      '<div class="cp-ligne"><span class="chip vert">' + st.actifs + '</span><div><b>Abonnés actifs</b><small>sur ' + s_(st.comptes, 'compte') + ' Studio</small></div></div>' +
      Object.keys(st.parOffre || {}).map(function (o) { return '<div class="cp-ligne"><span class="chip">' + st.parOffre[o] + '</span><div><b>' + esc(o) + '</b><small>abonnés à cette formule</small></div></div>'; }).join('');
  }

  function ligneMail(complet) {
    return function (x) {
      var e = ETATS_MAIL[x.etat] || [x.etat || '—', ''];
      return '<tr><td>' + quand(x.quand) + '</td>' + (complet ? '<td class="cp-coupe">' + esc(x.a) + '</td>' : '') + '<td class="cp-coupe" title="' + esc(x.objet) + '">' + esc(x.objet) + '</td><td><span class="chip ' + e[1] + '">' + esc(e[0]) + '</span></td></tr>';
    };
  }
  function renduEmails() {
    var m = D.emails, el = $('#bloc-emails');
    if (m.erreur) { el.innerHTML = erreurBloc(m) + '<p class="cp-note">Pour afficher la liste, créez chez Resend une clé « accès complet » et ajoutez-la dans les secrets Supabase sous le nom RESEND_API_KEY_LECTURE.</p>'; return; }
    el.innerHTML = !m.length ? vide('Aucun e-mail récent.') : '<div class="cp-defile"><table class="cp-table"><thead><tr><th>Quand</th><th>À</th><th>Objet</th><th>État</th></tr></thead><tbody>' + m.map(ligneMail(true)).join('') + '</tbody></table></div>';
  }

  function renduAutos() {
    var a = D.autos, el = $('#bloc-autos');
    if (a.erreur) { el.innerHTML = erreurBloc(a); return; }
    el.innerHTML = a.map(function (x) {
      var service = x.enService !== false;
      var chip = !service ? '<span class="chip">Pas en service</span>' : x.actif ? '<span class="chip vert">Active</span>' : '<span class="chip or">En pause</span>';
      return '<div class="cp-ligne">' + (service ? '<button type="button" class="cp-inter" role="switch" aria-checked="' + x.actif + '" data-auto="' + esc(x.cle) + '" aria-label="' + esc(x.nom) + '"></button>' : '<span class="cp-inter off" aria-hidden="true"></span>') +
        '<div><b>' + esc(x.nom) + '</b><small>' + (service ? esc(x.detail) : 'Prête, mais pas encore mise en service : elle ne peut ni tourner ni être lancée.') + '</small></div>' +
        '<div class="x">' + chip + (service ? '<button type="button" class="cp-btn clair petit" data-lancer="' + esc(x.cle) + '">Lancer</button>' : '') + '</div></div>';
    }).join('') +
      '<div class="cp-ligne"><span class="cp-inter off" aria-hidden="true"></span><div><b>Studio · paiement abandonné</b><small>Modèle d’e-mail prêt, à brancher</small></div><div class="x"><span class="chip">À brancher</span></div></div>' +
      '<div class="cp-ligne"><span class="cp-inter off" aria-hidden="true"></span><div><b>Studio · jetons épuisés</b><small>Modèle d’e-mail prêt, à brancher</small></div><div class="x"><span class="chip">À brancher</span></div></div>' +
      '<p class="cp-note" id="autos-note" role="status"></p>';
    el.querySelectorAll('[data-auto]').forEach(function (b) {
      b.addEventListener('click', async function () {
        var cle = b.dataset.auto, actif = b.getAttribute('aria-checked') !== 'true';
        b.disabled = true;
        try { await cockpit({ action: 'auto', cle: cle, actif: actif }); D.autos.find(function (x) { return x.cle === cle; }).actif = actif; renduAutos(); var n = $('#autos-note'); n.className = 'cp-note ok'; n.textContent = actif ? 'Réactivée.' : 'En pause : la tâche planifiée ne fera rien tant que l’interrupteur est éteint.'; }
        catch (e) { b.disabled = false; var n2 = $('#autos-note'); n2.className = 'cp-note ko'; n2.textContent = e.message; }
      });
    });
    el.querySelectorAll('[data-lancer]').forEach(function (b) {
      b.addEventListener('click', async function () {
        var note = $('#autos-note'); b.disabled = true; note.className = 'cp-note'; note.textContent = 'Lancement…';
        try { var r = await cockpit({ action: 'lancer', cle: b.dataset.lancer }); var x = r.resultat || {}; note.className = 'cp-note ok'; note.textContent = 'Terminé' + (x.envoyes != null ? ' : ' + x.envoyes + ' envoyé(s)' + (x.echecs ? ', ' + x.echecs + ' échec(s)' : '') : '') + '.'; }
        catch (e) { note.className = 'cp-note ko'; note.textContent = e.message; }
        b.disabled = false;
      });
    });
  }

  function renduSupport() {
    var t = D.tickets, c = D.contacts, el = $('#bloc-tickets');
    if (t.erreur) el.innerHTML = erreurBloc(t);
    else if (!t.length) el.innerHTML = vide('Aucun ticket en cours.');
    else el.innerHTML = t.map(function (x) {
      var s = STATUTS[x.statut] || [x.statut, ''];
      return '<div class="cp-ligne clic" data-ticket="' + esc(x.numero) + '" tabindex="0" role="button"><span class="chip ' + (x.priorite === 'haute' ? 'rouge' : '') + '">' + esc(x.numero) + '</span><div><b>' + esc(x.sujet) + '</b><small>' + esc(x.nom) + ' · ' + esc(CATS[x.categorie] || x.categorie) + ' · ' + quand(x.maj_le) + '</small></div><div class="x"><span class="chip ' + s[1] + '">' + s[0] + '</span></div></div>';
    }).join('');
    el.querySelectorAll('[data-ticket]').forEach(function (li) { var go = function () { ouvrirTicket(li.dataset.ticket); }; li.addEventListener('click', go); li.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); }); });

    var ec = $('#bloc-contacts');
    if (c.erreur) { ec.innerHTML = erreurBloc(c); return; }
    var nt = c.filter(function (x) { return !x.traite_le; });
    ec.innerHTML = !nt.length ? vide('Aucun message en attente.') : nt.slice(0, 12).map(function (x) {
      return '<div class="cp-ligne"><div><b>' + esc(x.nom) + '</b><small>' + esc(x.sujet) + ' · ' + quand(x.cree_le) + ' · ' + esc(x.email) + '</small><small>' + esc(x.message.slice(0, 200)) + '</small></div><div class="x"><button type="button" class="cp-btn clair petit" data-traite="' + esc(x.id) + '">Traité</button></div></div>';
    }).join('');
    ec.querySelectorAll('[data-traite]').forEach(function (b) {
      b.addEventListener('click', async function () { b.disabled = true; try { await cockpit({ action: 'contact_traite', id: b.dataset.traite }); D.contacts.find(function (x) { return x.id === b.dataset.traite; }).traite_le = new Date().toISOString(); rendu(); } catch (e) { b.disabled = false; } });
    });
  }

  function renduSante() {
    var v = D.ventes, er = D.erreurs, ch = D.chat, l = [];
    if (!v.erreur) l.push(v.echecs.length
      ? '<div class="cp-ligne"><span class="chip rouge">' + v.echecs.length + '</span><div><b>' + s_(v.echecs.length, 'paiement échoué') + ' sur 7 jours</b><small>le détail est dans Ventes</small></div><div class="x"><a class="cp-btn clair petit" href="#ventes" data-aller="ventes">Voir</a></div></div>'
      : '<div class="cp-ligne"><span class="chip vert">OK</span><div><b>Paiements</b><small>aucun échec sur 7 jours</small></div></div>');
    if (er.erreur) l.push('<div class="cp-ligne"><span class="chip">?</span><div><b>Journal des erreurs</b><small>indisponible : ' + esc(er.erreur) + '</small></div></div>');
    else l.push('<div class="cp-ligne"><span class="chip ' + (er.total ? 'rouge' : 'vert') + '">' + (er.total || 'OK') + '</span><div><b>' + (er.total ? s_(er.total, 'erreur') + ' aujourd’hui' : 'Aucune erreur aujourd’hui') + '</b>' + (er.top || []).map(function (x) { return '<small>' + x.n + '× ' + esc(x.kind) + ' · ' + esc(x.message) + '</small>'; }).join('') + '</div><div class="x"><a class="cp-btn clair petit" href="journal-erreurs.html">Journal</a></div></div>');
    if (!ch.erreur) l.push('<div class="cp-ligne"><span class="chip bleu">' + ch.jour + '</span><div><b>Chat de Marshall</b><small>' + s_(ch.jour, 'message') + ' sur 24 h</small></div></div>');
    $('#bloc-sante').innerHTML = l.join('');
  }

  function renduPromos() {
    var p = D.promos, el = $('#bloc-promos');
    var liste = p.erreur ? erreurBloc(p) : !p.length ? vide('Aucun code promo pour l’instant.') :
      '<div class="cp-defile"><table class="cp-table"><thead><tr><th>Code</th><th>Remise</th><th>Utilisé</th><th>Fin</th><th>Actif</th></tr></thead><tbody>' +
      p.map(function (c) {
        var rem = c.type === 'pourcent' ? '−' + c.valeur + ' %' : '−' + euro(c.valeur);
        var off = c.offres && c.offres.length < 3 ? ' <small>' + c.offres.map(function (o) { return OFFRES[o] || o; }).join(', ') + '</small>' : '';
        var util = c.utilisations + (c.max_utilisations ? '/' + c.max_utilisations + '<span class="cp-jauge"><i style="width:' + Math.min(100, c.utilisations / c.max_utilisations * 100) + '%"></i></span>' : '');
        return '<tr><td><b>' + esc(c.code) + '</b></td><td>' + rem + off + '</td><td>' + util + '</td><td>' + (c.fin ? new Date(c.fin).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }) : '—') + '</td>' +
          '<td><button type="button" class="cp-inter" role="switch" aria-checked="' + !!c.actif + '" data-promo="' + esc(c.code) + '" aria-label="Activer ' + esc(c.code) + '"></button></td></tr>';
      }).join('') + '</tbody></table></div>';
    el.innerHTML = liste + (p.erreur ? '' : '<form class="cp-promo-form" id="promo-form" autocomplete="off"><input id="pf-code" placeholder="NOUVEAU-CODE" maxlength="30" aria-label="Code" style="text-transform:uppercase"><input id="pf-val" type="number" min="1" step="1" placeholder="10" aria-label="Valeur (jusqu’à 100 %)"><select id="pf-type" aria-label="Type de remise"><option value="pourcent">%</option><option value="montant">€</option></select><button class="cp-btn" type="submit">Créer</button></form><p class="cp-note" id="promo-note" role="status">À 100 % (ou une remise égale au prix), la commande est offerte : pas de paiement, le client reçoit sa confirmation par e-mail.</p>');
    el.querySelectorAll('[data-promo]').forEach(function (b) {
      b.addEventListener('click', async function () {
        var actif = b.getAttribute('aria-checked') !== 'true'; b.disabled = true;
        try { await cockpit({ action: 'promo_actif', code: b.dataset.promo, actif: actif }); D.promos.find(function (x) { return x.code === b.dataset.promo; }).actif = actif; rendu(); }
        catch (e) { b.disabled = false; $('#promo-note').className = 'cp-note ko'; $('#promo-note').textContent = e.message; }
      });
    });
    var f = $('#promo-form'); if (!f) return;
    f.addEventListener('submit', async function (e) {
      e.preventDefault();
      var type = $('#pf-type').value, val = Number($('#pf-val').value), note = $('#promo-note');
      try {
        await cockpit({ action: 'promo_creer', code: $('#pf-code').value.trim(), type: type, valeur: type === 'montant' ? Math.round(val * 100) : val });
        D = await cockpit({ action: 'vue' }); rendu();
        $('#promo-note').className = 'cp-note ok'; $('#promo-note').textContent = 'Code créé, utilisable tout de suite sur la page de paiement.';
      } catch (err) { note.className = 'cp-note ko'; note.textContent = err.message; }
    });
  }

  function renduBons() {
    var b = D.bons, el = $('#bloc-bons');
    if (b.erreur) { el.innerHTML = erreurBloc(b); return; }
    if (!b.total) { el.innerHTML = vide('Aucun bon cadeau vendu pour l’instant.'); return; }
    el.innerHTML = '<div class="cp-defile"><table class="cp-table"><thead><tr><th>Code</th><th>Pour</th><th>Séances</th><th>Envoi</th><th>État</th></tr></thead><tbody>' + b.derniers.map(function (x) {
      var e = x.utilise_le ? ['Utilisé', 'vert'] : x.envoi === 'email24' && !x.envoye_beneficiaire_le ? ['À envoyer le 24/12', 'or'] : ['Envoyé', 'bleu'];
      return '<tr><td><b>' + esc(x.code) + '</b></td><td class="cp-coupe">' + esc(x.pour || '—') + '</td><td>' + x.seances + '</td><td>' + (x.envoi === 'email24' ? 'E-mail 24/12' : 'À imprimer') + '</td><td><span class="chip ' + e[1] + '">' + e[0] + '</span></td></tr>';
    }).join('') + '</tbody></table></div>';
  }

  // Idées calculées à partir des chiffres réels (chaque idée cite le chiffre qui la déclenche)
  function renduIdees() {
    var l = [], v = D.ventes, b = D.bons, p = D.promos, st = D.studio, mois = new Date().getMonth();
    function idee(chip, titre, texte) { l.push('<div class="cp-ligne"><span class="chip bleu">' + chip + '</span><div><b>' + titre + '</b><small>' + texte + '</small></div></div>'); }
    if (mois >= 9) idee('Noël', 'Un code Noël sur les packs', 'les bons cadeaux se vendent surtout en décembre : à mettre en avant sur la page carte cadeau');
    if (!b.erreur && b.nonUtilises) idee('Bons', s_(b.nonUtilises, 'bon cadeau') + ' pas encore ' + (b.nonUtilises > 1 ? 'utilisés' : 'utilisé'), 'un petit rappel « votre séance vous attend » aux bénéficiaires');
    if (!v.erreur && v.caPrec && v.ca < v.caPrec) idee('Relance', 'Mois en dessous du précédent', euro(v.ca) + ' contre ' + euro(v.caPrec) + ' : une relance des anciens clients avec un code fidélité');
    if (Array.isArray(p) && !p.some(function (c) { return c.actif; })) idee('Accueil', 'Aucun code promo actif', 'un code de bienvenue −10 % aide à transformer les visiteurs');
    if (!st.erreur && st.comptes > st.actifs) idee('Studio', s_(st.comptes - st.actifs, 'compte') + ' Studio sans abonnement', 'à relancer avec l’e-mail « paiement abandonné » une fois branché');
    $('#bloc-idees').innerHTML = l.length ? l.join('') : vide('Rien de particulier à signaler.');
  }

  /* ---------- Fiche ticket ---------- */
  var tiroir = $('#cp-tiroir');
  function fermer() { tiroir.hidden = true; }
  tiroir.addEventListener('click', function (e) { if (e.target.closest('[data-fermer]')) fermer(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !tiroir.hidden) fermer(); });
  async function ouvrirTicket(numero) {
    var el = $('#tk-fiche'); tiroir.hidden = false; el.innerHTML = '<p class="cp-note">Chargement…</p>';
    var d; try { d = await appel('support-ticket', { admin: 'voir', numero: numero }); } catch (e) { el.innerHTML = '<p class="cp-err">' + esc(e.message) + '</p>'; return; }
    var k = d.ticket, fil = [{ auteur: 'client', message: k.message, cree_le: k.cree_le }].concat(d.messages || []);
    var conv = (k.conversation || []).map(function (m) { return '<p><b>' + (m.role === 'user' ? esc(String(k.nom).split(' ')[0]) : 'Marshall') + ' :</b> ' + esc(m.content) + '</p>'; }).join('');
    el.innerHTML = '<div class="tk-tete"><h3 id="tk-titre"><span class="tk-num">' + esc(k.numero) + '</span> · ' + esc(k.sujet) + '</h3>' +
      '<p>' + esc(k.nom) + ' · ' + esc(k.email) + ' · ' + esc(CATS[k.categorie] || k.categorie) + ' · priorité ' + esc(k.priorite) + (k.page ? ' · depuis ' + esc(k.page) : '') + '</p>' +
      '<p style="margin-top:10px"><label>Statut <select id="tk-st">' + Object.keys(STATUTS).map(function (s) { return '<option value="' + s + '"' + (s === k.statut ? ' selected' : '') + '>' + STATUTS[s][0] + '</option>'; }).join('') + '</select></label></p></div>' +
      (conv ? '<details class="tk-conv"><summary>Conversation avec Marshall avant le ticket</summary>' + conv + '</details>' : '') +
      '<div class="tk-fil">' + fil.map(function (m) { return '<div class="tk-msg ' + m.auteur + '"><small>' + (m.auteur === 'equipe' ? 'Équipe' : esc(k.nom)) + ' · ' + quand(m.cree_le) + '</small><p>' + esc(m.message) + '</p></div>'; }).join('') + '</div>' +
      '<form class="tk-form" id="tk-form"><textarea id="tk-msg" placeholder="Votre réponse (envoyée par e-mail, visible dans « Mes tickets »)…" aria-label="Votre réponse"></textarea>' +
      '<div class="tk-actions"><label>Ensuite : <select id="tk-apres"><option value="attente-client">Attente client</option><option value="en-cours">En cours</option><option value="resolu">Résolu</option></select></label><button class="cp-btn" type="submit">Envoyer la réponse</button></div><p class="cp-note" id="tk-note" role="status"></p></form>';
    $('#tk-st').addEventListener('change', async function () {
      var s = this.value, n = $('#tk-note');
      try { await appel('support-ticket', { admin: 'statut', numero: k.numero, statut: s }); n.className = 'cp-note ok'; n.textContent = s === 'resolu' ? 'Résolu : le client est prévenu par e-mail.' : 'Statut mis à jour.'; majTicket(k.numero, s); }
      catch (e) { n.className = 'cp-note ko'; n.textContent = e.message; }
    });
    $('#tk-form').addEventListener('submit', async function (e) {
      e.preventDefault(); var txt = $('#tk-msg').value.trim(), b = this.querySelector('button'), n = $('#tk-note'); if (!txt) return;
      b.disabled = true; n.className = 'cp-note'; n.textContent = 'Envoi…';
      try { var r = await appel('support-ticket', { admin: 'repondre', numero: k.numero, message: txt, statut: $('#tk-apres').value }); majTicket(k.numero, r.statut); ouvrirTicket(k.numero); }
      catch (err) { b.disabled = false; n.className = 'cp-note ko'; n.textContent = err.message; }
    });
  }
  function majTicket(numero, statut) {
    if (!Array.isArray(D.tickets)) return;
    var x = D.tickets.find(function (t) { return t.numero === numero; }); if (!x) return;
    if (statut === 'resolu') D.tickets = D.tickets.filter(function (t) { return t !== x; }); else { x.statut = statut; x.maj_le = new Date().toISOString(); }
    rendu();
  }

  $('#cp-maj').addEventListener('click', charger);
  $('#cp-deco').addEventListener('click', async function () { await sb.auth.signOut(); location.href = 'index.html'; });
  montre(location.hash.slice(1));
  charger();
})();
