/* Studio Social · catégorie « Publier » dans la barre orange (maquette A, choisie par Hugo le 23/10)
   Sur ORDINATEUR SEULEMENT : le mobile n'est jamais touché (rien n'est ajouté ni caché sur mobile).
   Le bouton rouge « Publier » de la colonne d'outils (#ed-publish) est caché, et une catégorie « Publier »
   apparaît juste sous « Composer ». Un clic dessus ouvre le Composer puis déclenche #ed-publish :
   même écran, même export du visuel, même cadenas pour les comptes sans l'offre Complet. */
(function () {
  'use strict';
  var html = document.documentElement;
  if (html.getAttribute('data-device') === 'mobile') return;

  var style = document.createElement('style');
  style.textContent =
    'html:not([data-device="mobile"]) .ed-rail #ed-publish{display:none!important}' +
    // Flèche « Retour à l'édition » en haut à droite : en double avec « ← Éditeur » en bas de l'écran Publier
    'html:not([data-device="mobile"]) #pv-back{display:none!important}' +
    '#nav-publier .np-lock{margin-left:auto;font-size:12px;line-height:1}' +
    '#nav-publier:not(.np-locked) .np-lock{display:none}';
  document.head.appendChild(style);

  function $(s) { return document.querySelector(s); }

  function installer() {
    var composer = $('.nav-item[data-view="composer"]'), bouton = $('#ed-publish');
    if (!composer || !bouton || $('#nav-publier')) return;

    // Pas d'attribut data-view : la barre de l'application ne le connaît pas, et ses raccourcis restent les mêmes
    var a = document.createElement('a');
    a.className = 'nav-item';
    a.id = 'nav-publier';
    a.href = '#';
    a.setAttribute('role', 'button');
    a.innerHTML = '<svg class="cartoon-ic" viewBox="0 0 24 24" aria-hidden="true"><g stroke="#4a2a10" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M21.2 2.8 2.8 10.4l6.6 2.6z" fill="#fff"/><path d="M21.2 2.8 9.4 13l2.6 7.6z" fill="#FFE2C6"/><path d="M9.4 13l1.4 4.6 1.2-1.4z" fill="#FFB680"/></g></svg>' +
      '<span>Publier</span><span class="np-lock" aria-hidden="true">🔒</span>';
    composer.insertAdjacentElement('afterend', a);

    var parPublier = false;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var etape = $('#pub-step'), ouvert = etape && etape.style.display === 'grid';
      parPublier = true; composer.click(); parPublier = false;
      if (!ouvert) bouton.click();
    });

    // « Composer » ramène toujours à l'éditeur, même si l'écran de publication était resté ouvert
    // (seulement pour un vrai clic : l'Atelier ouvre aussi le Composer par programme, sans vouloir quitter l'écran Publier)
    composer.addEventListener('click', function (e) {
      if (parPublier || !e.isTrusted) return;
      var etape = $('#pub-step'), retour = $('.pub2-back') || $('#pv-back');
      if (etape && etape.style.display === 'grid' && retour) retour.click();
    });

    // Cadenas et texte d'aide : repris du bouton d'origine, que l'application tient à jour
    function copierEtat() {
      var verrou = bouton.classList.contains('mpub-locked');
      a.classList.toggle('np-locked', verrou);
      a.title = verrou ? (bouton.getAttribute('title') || '') : 'Publier';
      a.setAttribute('aria-label', verrou ? (bouton.getAttribute('aria-label') || 'Publier') : 'Publier');
    }

    // Surbrillance : « Publier » est la catégorie active quand l'écran de publication est ouvert
    // On ne touche une classe que si elle doit changer : sinon l'observateur se relancerait sans fin
    function classe(el, nom, oui) { if (el.classList.contains(nom) !== oui) el.classList.toggle(nom, oui); }
    function surligner() {
      var etape = $('#pub-step'), vue = $('#view-composer');
      var composerActif = !!(vue && vue.classList.contains('active'));
      var ouvert = !!(etape && etape.style.display === 'grid' && composerActif);
      classe(a, 'active', ouvert);
      classe(composer, 'active', composerActif && !ouvert);
    }

    copierEtat(); surligner();
    new MutationObserver(copierEtat).observe(bouton, { attributes: true, attributeFilter: ['class', 'title', 'aria-label'] });
    var etape = $('#pub-step'), vue = $('#view-composer');
    var obs = new MutationObserver(surligner);
    if (etape) obs.observe(etape, { attributes: true, attributeFilter: ['style'] });
    if (vue) obs.observe(vue, { attributes: true, attributeFilter: ['class'] });
    obs.observe(composer, { attributes: true, attributeFilter: ['class'] });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installer);
  else installer();
})();
