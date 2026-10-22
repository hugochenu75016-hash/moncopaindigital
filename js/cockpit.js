/* Cockpit · tour de contrôle de Mon Copain Digital (cockpit.html).
   Aucune donnée dans la page : tout vient de la fonction « cockpit » (et « support-ticket » pour les tickets),
   qui vérifient à chaque appel que la personne connectée est l'administrateur. */
(function () {
  var URL_SB = 'https://fskrgqkrpgxvypcwbfwm.supabase.co';
  var ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza3JncWtycGd4dnlwY3diZndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0OTY0MjgsImV4cCI6MjEwODA3MjQyOH0.rY5AB0ZwPsCqu_p74Ph09_fGj92uDztoYDwJvH1jmIU';   // clé publique du site, protégée par les règles Supabase
  var sb = window.supabase.createClient(URL_SB, ANON);
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var euro = function (c) { return (Math.round(c) / 100).toLocaleString('fr-FR', { minimumFractionDigits: c % 100 ? 2 : 0, maximumFractionDigits: 2 }) + ' €'; };
  var quand = function (d) { d = new Date(d); return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }) + ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }); };
  var OFFRES = { seance: 'Séance', pack3: 'Pack 3', pack5: 'Pack 5' };
  var CATS = { paiement: 'Paiement', seance: 'Séance', studio: 'Studio Social', 'bon-cadeau': 'Bon cadeau', compte: 'Mon compte', autre: 'Autre' };
  var STATUTS = { ouvert: ['Ouvert', 'or'], 'en-cours': ['En cours', 'bleu'], 'attente-client': ['Attente client', 'violet'], resolu: ['Résolu', 'vert'] };
  var ETATS_MAIL = { delivered: ['Livré', 'bleu'], opened: ['Ouvert', 'vert'], clicked: ['Cliqué', 'vert'], bounced: ['Rebond', 'rouge'], complained: ['Plainte', 'rouge'], sent: ['Envoyé', 'or'], scheduled: ['Prévu', 'or'], delivery_delayed: ['Retardé', 'or'], failed: ['Échec', 'rouge'] };
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

  /* ---------- Accès ---------- */
  function acces(titre, texte, bouton) {
    $('#cp-contenu').hidden = true;
    var a = $('#cp-acces'); a.hidden = false;
    a.innerHTML = '<img src="images/avatarchatbot.png" alt=""><h2>' + esc(titre) + '</h2><p>' + esc(texte) + '</p>' + (bouton || '');
    etat('', titre);
  }
  function etat(cls, txt) { var e = $('#cp-etat'); e.className = 'cp-etat ' + cls; e.querySelector('span').textContent = txt; }

  async function charger() {
    var s = (await sb.auth.getSession()).data.session;
    if (!s) return acces('Connexion nécessaire', 'Le cockpit est réservé à l’administrateur. Connectez-vous dans votre espace, puis revenez ici.', '<a class="cp-btn plein" href="espace-compte.html">Me connecter</a>');
    $('#cp-maj').disabled = true; etat('', 'Synchronisation…');
    try { D = await cockpit({ action: 'vue' }); }
    catch (e) {
      $('#cp-maj').disabled = false;
      if (e.status === 403) return acces('Accès réservé', 'Ce compte n’est pas administrateur.');
      if (e.status === 401) return acces('Connexion nécessaire', 'Votre session a expiré.', '<a class="cp-btn plein" href="espace-compte.html">Me reconnecter</a>');
      return acces('Cockpit indisponible', e.message);
    }
    $('#cp-maj').disabled = false;
    $('#cp-acces').hidden = true; $('#cp-contenu').hidden = false;
    rendu();
  }

  /* ---------- Rendu ---------- */
  function courbe(valeurs) {
    var max = Math.max.apply(null, valeurs.concat([1])), n = valeurs.length, w = 200, h = 34;
    var pts = valeurs.map(function (v, i) { return (i * w / (n - 1)).toFixed(1) + ',' + (h - 3 - v / max * (h - 6)).toFixed(1); }).join(' ');
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" aria-hidden="true"><polyline points="' + pts + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" vector-effect="non-scaling-stroke" style="color:var(--or)"/></svg>';
  }
  function evolution(a, b, unite) {
    if (!b) return '<em>premier mois suivi</em>';
    var p = Math.round((a - b) / b * 100);
    return '<em class="' + (p >= 0 ? 'mieux' : 'moins') + '">' + (p >= 0 ? '+' : '−') + Math.abs(p) + ' % vs mois dernier' + (unite || '') + '</em>';
  }

  function rendu() {
    var v = D.ventes, st = D.studio, bo = D.bons;
    // Chiffres clés
    var k = '';
    if (v.erreur) k = '<div class="cp-kpi" style="grid-column:1/-1">' + erreurBloc(v) + '</div>';
    else {
      var jours = v.jours || [];
      k += '<div class="cp-kpi or"><span>Chiffre du mois</span><b>' + euro(v.ca) + '</b>' + evolution(v.ca, v.caPrec) + courbe(jours.map(function (j) { return j.ca; })).replace('var(--or)', '#fff') + '</div>';
      k += '<div class="cp-kpi"><span>Séances vendues</span><b>' + v.seances + '</b><em>' + v.commandes + ' commande' + (v.commandes > 1 ? 's' : '') + ' · ' + v.packs + ' pack' + (v.packs > 1 ? 's' : '') + '</em>' + courbe(jours.map(function (j) { return j.n; })) + '</div>';
      k += '<div class="cp-kpi"><span>Panier moyen</span><b>' + (v.commandes ? euro(v.ca / v.commandes) : '—') + '</b>' + (v.commandesPrec ? evolution(v.ca / Math.max(v.commandes, 1), v.caPrec / v.commandesPrec) : '<em>—</em>') + '</div>';
    }
    k += '<div class="cp-kpi"><span>Bons cadeaux</span>' + (bo.erreur ? erreurBloc(bo) : '<b>' + bo.total + '</b><em>' + euro(bo.montant) + ' · ' + bo.aEnvoyer + ' à envoyer le 24/12</em>') + '</div>';
    k += '<div class="cp-kpi"><span>Abonnés Studio</span>' + (st.erreur ? erreurBloc(st) : '<b>' + st.actifs + '</b><em>sur ' + st.comptes + ' compte' + (st.comptes > 1 ? 's' : '') + ' Studio</em>') + '</div>';
    $('#ventes').innerHTML = k;

    renduEmails(); renduAutos(); renduPromos(); renduSupport(); renduSante(); renduBons(); renduIdees();

    var alertes = (Array.isArray(D.tickets) ? D.tickets.filter(function (t) { return t.statut === 'ouvert'; }).length : 0);
    var aRegarder = (v.echecs ? v.echecs.length : 0) + (D.erreurs && D.erreurs.total ? 1 : 0);
    pastille('#nb-support', alertes + (Array.isArray(D.contacts) ? D.contacts.filter(function (c) { return !c.traite_le; }).length : 0));
    pastille('#nb-sante', aRegarder);
    etat(aRegarder ? 'alerte' : 'ok', (aRegarder ? aRegarder + ' point' + (aRegarder > 1 ? 's' : '') + ' à regarder' : 'Tout tourne') + ' · synchro à ' + new Date(D.maj).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
  }
  function pastille(sel, n) { var p = $(sel); p.textContent = n; p.hidden = !n; }

  function renduEmails() {
    var m = D.emails, el = $('#bloc-emails');
    if (m.erreur) { el.innerHTML = erreurBloc(m) + '<p class="cp-note">Pour afficher la liste, créez chez Resend une clé « accès complet » et ajoutez-la dans les secrets Supabase sous le nom RESEND_API_KEY_LECTURE.</p>'; return; }
    if (!m.length) { el.innerHTML = '<p class="cp-vide">Aucun e-mail récent.</p>'; return; }
    el.innerHTML = '<div class="cp-defile"><table class="cp-table"><thead><tr><th>Quand</th><th>À</th><th>Objet</th><th>État</th></tr></thead><tbody>' +
      m.map(function (x) { var e = ETATS_MAIL[x.etat] || [x.etat || '—', '']; return '<tr><td class="num">' + quand(x.quand) + '</td><td class="cp-coupe">' + esc(x.a) + '</td><td class="cp-coupe" title="' + esc(x.objet) + '">' + esc(x.objet) + '</td><td><span class="cp-etiq ' + e[1] + '">' + esc(e[0]) + '</span></td></tr>'; }).join('') +
      '</tbody></table></div>';
  }

  function renduAutos() {
    var a = D.autos, el = $('#bloc-autos');
    if (a.erreur) { el.innerHTML = erreurBloc(a); return; }
    el.innerHTML = a.map(function (x) {
      return '<div class="cp-auto"><button type="button" class="cp-inter" role="switch" aria-checked="' + x.actif + '" data-auto="' + esc(x.cle) + '" aria-label="' + esc(x.nom) + '"></button>' +
        '<div><b>' + esc(x.nom) + '</b><small>' + esc(x.detail) + (x.actif ? '' : ' · <strong>en pause</strong>') + '</small></div>' +
        '<button type="button" class="cp-btn petit" data-lancer="' + esc(x.cle) + '">Lancer</button></div>';
    }).join('') + '<p class="cp-note" id="autos-note" role="status"></p>' +
      '<p class="cp-sous">Prêts, pas encore branchés</p><div class="cp-auto"><span class="cp-inter" aria-hidden="true" style="opacity:.4"></span><div><b>Studio · paiement abandonné</b><small>Modèle d’e-mail prêt</small></div><span></span></div>' +
      '<div class="cp-auto"><span class="cp-inter" aria-hidden="true" style="opacity:.4"></span><div><b>Studio · jetons épuisés</b><small>Modèle d’e-mail prêt</small></div><span></span></div>';
    el.querySelectorAll('[data-auto]').forEach(function (b) {
      b.addEventListener('click', async function () {
        var cle = b.dataset.auto, actif = b.getAttribute('aria-checked') !== 'true', note = $('#autos-note');
        b.disabled = true;
        try { await cockpit({ action: 'auto', cle: cle, actif: actif }); D.autos.find(function (x) { return x.cle === cle; }).actif = actif; renduAutos(); $('#autos-note').className = 'cp-note ok'; $('#autos-note').textContent = actif ? 'Réactivée.' : 'En pause : la tâche planifiée ne fera rien tant que l’interrupteur est éteint.'; }
        catch (e) { b.disabled = false; note.className = 'cp-note ko'; note.textContent = e.message; }
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

  function renduPromos() {
    var p = D.promos, el = $('#bloc-promos');
    var liste = p.erreur ? erreurBloc(p) : !p.length ? '<p class="cp-vide">Aucun code pour l’instant.</p>' :
      '<div class="cp-defile"><table class="cp-table"><thead><tr><th>Code</th><th>Remise</th><th>Utilisé</th><th>Fin</th><th>Actif</th></tr></thead><tbody>' +
      p.map(function (c) {
        var rem = c.type === 'pourcent' ? '−' + c.valeur + ' %' : '−' + euro(c.valeur);
        var off = c.offres && c.offres.length < 3 ? ' <small>' + c.offres.map(function (o) { return OFFRES[o] || o; }).join(', ') + '</small>' : '';
        var util = c.utilisations + (c.max_utilisations ? '/' + c.max_utilisations + '<span class="cp-jauge"><i style="width:' + Math.min(100, c.utilisations / c.max_utilisations * 100) + '%"></i></span>' : '');
        return '<tr><td><b>' + esc(c.code) + '</b></td><td class="num">' + rem + off + '</td><td class="num">' + util + '</td><td class="num">' + (c.fin ? new Date(c.fin).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }) : '—') + '</td>' +
          '<td><button type="button" class="cp-inter" role="switch" aria-checked="' + !!c.actif + '" data-promo="' + esc(c.code) + '" aria-label="Activer ' + esc(c.code) + '"></button></td></tr>';
      }).join('') + '</tbody></table></div>';
    el.innerHTML = liste + (p.erreur ? '' : '<form class="cp-promo-form" id="promo-form" autocomplete="off"><input id="pf-code" placeholder="NOUVEAU-CODE" maxlength="30" aria-label="Code" style="text-transform:uppercase"><input id="pf-val" type="number" min="1" step="1" placeholder="10" aria-label="Valeur"><select id="pf-type" aria-label="Type de remise"><option value="pourcent">%</option><option value="montant">€</option></select><button class="cp-btn plein" type="submit">Créer</button></form><p class="cp-note" id="promo-note" role="status"></p>');
    el.querySelectorAll('[data-promo]').forEach(function (b) {
      b.addEventListener('click', async function () {
        var actif = b.getAttribute('aria-checked') !== 'true'; b.disabled = true;
        try { await cockpit({ action: 'promo_actif', code: b.dataset.promo, actif: actif }); D.promos.find(function (x) { return x.code === b.dataset.promo; }).actif = actif; renduPromos(); }
        catch (e) { b.disabled = false; $('#promo-note').className = 'cp-note ko'; $('#promo-note').textContent = e.message; }
      });
    });
    var f = $('#promo-form'); if (!f) return;
    f.addEventListener('submit', async function (e) {
      e.preventDefault();
      var type = $('#pf-type').value, val = Number($('#pf-val').value), note = $('#promo-note');
      try {
        await cockpit({ action: 'promo_creer', code: $('#pf-code').value.trim(), type: type, valeur: type === 'montant' ? Math.round(val * 100) : val });
        note.className = 'cp-note ok'; note.textContent = 'Code créé, utilisable tout de suite sur la page de paiement.';
        D = await cockpit({ action: 'vue' }); rendu(); $('#promo-note').className = 'cp-note ok'; $('#promo-note').textContent = 'Code créé, utilisable tout de suite sur la page de paiement.';
      } catch (err) { note.className = 'cp-note ko'; note.textContent = err.message; }
    });
  }

  function renduSupport() {
    var t = D.tickets, c = D.contacts, el = $('#bloc-support'), h = '<p class="cp-sous" style="margin-top:0">Tickets à traiter</p>';
    if (t.erreur) h += erreurBloc(t);
    else if (!t.length) h += '<p class="cp-vide">Aucun ticket en cours. 🎉</p>';
    else h += '<ul class="cp-liste">' + t.slice(0, 8).map(function (x) {
      var s = STATUTS[x.statut] || [x.statut, ''];
      return '<li class="clic" data-ticket="' + esc(x.numero) + '" tabindex="0"><span class="pt ' + (x.priorite === 'haute' ? 'rouge' : '') + '"></span><div><b>' + esc(x.numero) + ' · ' + esc(x.sujet) + '</b><small>' + esc(x.nom) + ' · ' + esc(CATS[x.categorie] || x.categorie) + ' · ' + quand(x.maj_le) + '</small></div><span class="cp-etiq ' + s[1] + '">' + s[0] + '</span></li>';
    }).join('') + '</ul>';
    h += '<p class="cp-sous">Messages du formulaire de contact</p>';
    if (c.erreur) h += erreurBloc(c);
    else {
      var nt = c.filter(function (x) { return !x.traite_le; });
      h += !nt.length ? '<p class="cp-vide">Tout est traité.</p>' : '<ul class="cp-liste">' + nt.slice(0, 6).map(function (x) {
        return '<li><span class="pt bleu"></span><div><b>' + esc(x.nom) + '</b> <small style="display:inline">' + esc(x.sujet) + ' · ' + quand(x.cree_le) + '</small><small>' + esc(x.message.slice(0, 140)) + '</small><small><a href="mailto:' + esc(x.email) + '">' + esc(x.email) + '</a></small></div><button type="button" class="cp-btn petit" data-traite="' + esc(x.id) + '">Traité</button></li>';
      }).join('') + '</ul>';
    }
    el.innerHTML = h;
    el.querySelectorAll('[data-ticket]').forEach(function (li) { var go = function () { ouvrirTicket(li.dataset.ticket); }; li.addEventListener('click', go); li.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); }); });
    el.querySelectorAll('[data-traite]').forEach(function (b) {
      b.addEventListener('click', async function () { b.disabled = true; try { await cockpit({ action: 'contact_traite', id: b.dataset.traite }); D.contacts.find(function (x) { return x.id === b.dataset.traite; }).traite_le = new Date().toISOString(); renduSupport(); } catch (e) { b.disabled = false; } });
    });
  }

  function renduSante() {
    var v = D.ventes, er = D.erreurs, ch = D.chat, li = [];
    if (!v.erreur) li.push(v.echecs.length ? '<li><span class="pt rouge"></span><div><b>' + v.echecs.length + ' paiement' + (v.echecs.length > 1 ? 's' : '') + ' échoué' + (v.echecs.length > 1 ? 's' : '') + ' (7 j)</b>' + v.echecs.slice(0, 3).map(function (x) { return '<small>' + quand(x.quand) + ' · ' + euro(x.montant) + ' · ' + esc(OFFRES[x.offre] || x.offre || '') + ' · ' + esc(x.raison) + (x.client ? ' · ' + esc(x.client) : '') + '</small>'; }).join('') + '</div><span></span></li>'
      : '<li><span class="pt vert"></span><div><b>Paiements</b><small>aucun échec sur 7 jours</small></div><span></span></li>');
    if (er.erreur) li.push('<li><span class="pt"></span><div><b>Journal des erreurs</b><small>indisponible : ' + esc(er.erreur) + '</small></div><span></span></li>');
    else li.push('<li><span class="pt ' + (er.total ? 'rouge' : 'vert') + '"></span><div><b>' + (er.total ? er.total + ' erreur' + (er.total > 1 ? 's' : '') + ' aujourd’hui' : 'Aucune erreur aujourd’hui') + '</b>' + (er.top || []).slice(0, 3).map(function (x) { return '<small>' + x.n + '× ' + esc(x.kind) + ' · ' + esc(x.message) + '</small>'; }).join('') + '</div><a class="cp-btn petit" href="journal-erreurs.html">Détail</a></li>');
    if (!ch.erreur) li.push('<li><span class="pt bleu"></span><div><b>Chat de Marshall</b><small>' + ch.jour + ' message' + (ch.jour > 1 ? 's' : '') + ' sur 24 h</small></div><span></span></li>');
    $('#bloc-sante').innerHTML = '<ul class="cp-liste">' + li.join('') + '</ul>';
  }

  function renduBons() {
    var b = D.bons, el = $('#bloc-bons');
    if (b.erreur) { el.innerHTML = erreurBloc(b); return; }
    if (!b.total) { el.innerHTML = '<p class="cp-vide">Aucun bon cadeau vendu pour l’instant.</p>'; return; }
    el.innerHTML = '<div class="cp-defile"><table class="cp-table"><thead><tr><th>Code</th><th>Pour</th><th>Séances</th><th>Envoi</th><th>État</th></tr></thead><tbody>' + b.derniers.map(function (x) {
      var e = x.utilise_le ? ['Utilisé', 'vert'] : x.envoi === 'email24' && !x.envoye_beneficiaire_le ? ['À envoyer le 24/12', 'or'] : ['Envoyé', 'bleu'];
      return '<tr><td><b>' + esc(x.code) + '</b></td><td class="cp-coupe">' + esc(x.pour || '—') + '</td><td class="num">' + x.seances + '</td><td>' + (x.envoi === 'email24' ? 'E-mail 24/12' : 'À imprimer') + '</td><td><span class="cp-etiq ' + e[1] + '">' + e[0] + '</span></td></tr>';
    }).join('') + '</tbody></table></div>';
  }

  // Idées calculées à partir des chiffres réels (rien d'inventé : chaque idée cite le chiffre qui la déclenche)
  function renduIdees() {
    var idees = [], v = D.ventes, b = D.bons, p = D.promos, st = D.studio, mois = new Date().getMonth();
    if (mois >= 9) idees.push('<b>Noël approche.</b> Les bons cadeaux se vendent surtout en décembre : un code type NOEL-15 sur les packs, mis en avant sur la page carte cadeau.');
    if (!b.erreur && b.nonUtilises) idees.push('<b>' + b.nonUtilises + ' bon' + (b.nonUtilises > 1 ? 's' : '') + ' cadeau pas encore utilisé' + (b.nonUtilises > 1 ? 's' : '') + '.</b> Un petit rappel « votre séance vous attend » aux bénéficiaires.');
    if (!v.erreur && v.caPrec && v.ca < v.caPrec) idees.push('<b>Mois en dessous du précédent</b> (' + euro(v.ca) + ' contre ' + euro(v.caPrec) + '). Une relance des anciens clients avec un code de fidélité.');
    if (Array.isArray(p) && !p.some(function (c) { return c.actif; })) idees.push('<b>Aucun code promo actif.</b> Un code de bienvenue (−10 %) pour la première séance aide à transformer les visiteurs.');
    if (!st.erreur && st.comptes > st.actifs) idees.push('<b>' + (st.comptes - st.actifs) + ' compte' + (st.comptes - st.actifs > 1 ? 's' : '') + ' Studio sans abonnement.</b> Activer l’e-mail « paiement abandonné » dès qu’il sera branché.');
    $('#bloc-idees').innerHTML = idees.length ? idees.map(function (i) { return '<div class="cp-idee">' + i + '</div>'; }).join('') : '<p class="cp-vide">Rien de particulier à signaler.</p>';
  }

  /* ---------- Fiche ticket ---------- */
  var tiroir = $('#cp-tiroir');
  function fermer() { tiroir.hidden = true; }
  tiroir.addEventListener('click', function (e) { if (e.target.closest('[data-fermer]')) fermer(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !tiroir.hidden) fermer(); });
  async function ouvrirTicket(numero) {
    var el = $('#tk-fiche'); tiroir.hidden = false; el.innerHTML = '<p class="cp-vide">Chargement…</p>';
    var d; try { d = await appel('support-ticket', { admin: 'voir', numero: numero }); } catch (e) { el.innerHTML = '<p class="cp-err">' + esc(e.message) + '</p>'; return; }
    var k = d.ticket, fil = [{ auteur: 'client', message: k.message, cree_le: k.cree_le }].concat(d.messages || []);
    var conv = (k.conversation || []).map(function (m) { return '<p><b>' + (m.role === 'user' ? esc(String(k.nom).split(' ')[0]) : 'Marshall') + ' :</b> ' + esc(m.content) + '</p>'; }).join('');
    el.innerHTML = '<div class="tk-tete"><h3 id="tk-titre"><span class="tk-num">' + esc(k.numero) + '</span> · ' + esc(k.sujet) + '</h3>' +
      '<p>' + esc(k.nom) + ' · <a href="mailto:' + esc(k.email) + '">' + esc(k.email) + '</a> · ' + esc(CATS[k.categorie] || k.categorie) + ' · priorité ' + esc(k.priorite) + (k.page ? ' · depuis ' + esc(k.page) : '') + '</p>' +
      '<p style="margin-top:10px"><label>Statut <select id="tk-st">' + Object.keys(STATUTS).map(function (s) { return '<option value="' + s + '"' + (s === k.statut ? ' selected' : '') + '>' + STATUTS[s][0] + '</option>'; }).join('') + '</select></label></p></div>' +
      (conv ? '<details class="tk-conv"><summary>Conversation avec Marshall avant le ticket</summary>' + conv + '</details>' : '') +
      '<div class="tk-fil">' + fil.map(function (m) { return '<div class="tk-msg ' + m.auteur + '"><small>' + (m.auteur === 'equipe' ? 'Équipe' : esc(k.nom)) + ' · ' + quand(m.cree_le) + '</small><p>' + esc(m.message) + '</p></div>'; }).join('') + '</div>' +
      '<form class="tk-form" id="tk-form"><textarea id="tk-msg" placeholder="Votre réponse (envoyée par e-mail, visible dans « Mes tickets »)…" aria-label="Votre réponse"></textarea>' +
      '<div class="tk-actions"><label>Ensuite : <select id="tk-apres"><option value="attente-client">Attente client</option><option value="en-cours">En cours</option><option value="resolu">Résolu</option></select></label><button class="cp-btn plein" type="submit">Envoyer la réponse</button></div><p class="cp-note" id="tk-note" role="status"></p></form>';
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

  /* ---------- Navigation ---------- */
  var liens = document.querySelectorAll('.cp-nav a');
  liens.forEach(function (a) { a.addEventListener('click', function () { liens.forEach(function (x) { x.classList.toggle('on', x === a); }); }); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (ent) {
      ent.forEach(function (e) { if (e.isIntersecting) liens.forEach(function (x) { x.classList.toggle('on', x.getAttribute('href') === '#' + e.target.id); }); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['vue', 'ventes', 'marketing', 'emails', 'autos', 'support', 'sante'].forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }
  $('#cp-maj').addEventListener('click', charger);
  $('#cp-deco').addEventListener('click', async function () { await sb.auth.signOut(); location.href = 'index.html'; });
  charger();
})();
