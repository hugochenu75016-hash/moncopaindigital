/* Passage entre les pages (comme sweet-tape vers /contact), palette « Ciel de Paris » :
   7 calques à bas arrondi descendent l'un après l'autre pour couvrir l'écran, la page change,
   puis ils remontent en cascade sur la nouvelle page. Pas de logo : il reste réservé à l'entrée de l'accueil.
   Chaque page garde sa propre logique et pilote #door-tx avec les classes loading (écran couvert),
   opening (ouverture) et closing (départ vers une autre page).
   À placer juste après <div id="door-tx">. Sans dépendance.
   Avec data-auto sur le div, le script gère tout seul l'attente du chargement, les liens et le retour arrière
   (pour les pages qui n'avaient pas de portes). */
(function(){
  var ov=document.getElementById('door-tx');
  if(!ov || ov.__intro) return; ov.__intro=true;
  var auto=ov.hasAttribute('data-auto');
  /* Page affichée dans une autre page (cadre) : pas d'intro. */
  if(auto && window.self !== window.top){ ov.parentNode.removeChild(ov); return; }
  var reduce=!!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* Du calque du dessus (le premier à remonter, le dernier à descendre) à celui du dessous */
  var CIEL=['#6EC1F0','#A9DCF7','#FFFFFF','#FF9C46','#F3852B','#4AA8DE','#1D3B57'];
  var COURBE="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1456 150.5' preserveAspectRatio='none'%3E%3Cpath d='M1456 0C801.9 272 212.833 113.333 0 0Z' fill='%23000'/%3E%3C/svg%3E\")";

  if(!document.getElementById('intro-tx-css')){
    var st=document.createElement('style'); st.id='intro-tx-css';
    st.textContent=
      '#door-tx{position:fixed;inset:0;z-index:100000;pointer-events:none;overflow:hidden;--it-arc:10.336vw}'+
      '#door-tx.loading,#door-tx.closing{pointer-events:auto}'+
      '#door-tx .it-calque{position:absolute;top:0;left:0;width:100%;height:calc(100% + var(--it-arc));display:none;transform:translateY(-100%);'+
        '-webkit-mask-image:linear-gradient(#000 0 0),'+COURBE+';mask-image:linear-gradient(#000 0 0),'+COURBE+';'+
        '-webkit-mask-size:100% calc(100% - var(--it-arc) + 1px),100% var(--it-arc);mask-size:100% calc(100% - var(--it-arc) + 1px),100% var(--it-arc);'+
        '-webkit-mask-position:0 0,0 100%;mask-position:0 0,0 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}'+
      '#door-tx.it-on .it-calque{display:block}'+
      '#door-tx.it-couvert .it-calque{transform:none}';
    document.head.appendChild(st);
  }

  var calques=CIEL.map(function(c, i){
    var d=document.createElement('div'); d.className='it-calque';
    d.style.background=c; d.style.zIndex=CIEL.length - i;
    ov.appendChild(d); return d;
  });
  var anime=!reduce && !!ov.animate;
  var EASE='cubic-bezier(.65,0,.35,1)';   // power3.inOut

  /* Décalage légèrement irrégulier entre les calques (nombre d'or), comme sweet-tape */
  function cascade(liste, pas, duree){
    var at=0;
    return liste.map(function(el, i){
      if(i > 0) at+=pas * (1 + ((.6180339887 * i) % 1 * 2 - 1) * .4);
      return { el:el, at:at, duree:duree * (1 + i * .018) };
    });
  }
  function fin(vagues){ return vagues.reduce(function(m, v){ return Math.max(m, v.at + v.duree); }, 0); }
  function annuler(){
    calques.forEach(function(el){ if(el.getAnimations) el.getAnimations().forEach(function(a){ a.cancel(); }); });
  }
  function couvrir(){ annuler(); ov.classList.add('it-on', 'it-couvert'); }
  function retirer(){ annuler(); ov.classList.remove('it-on', 'it-couvert'); }

  var ouvrant=false;

  /* Ouverture : le calque du dessus remonte en premier, les autres suivent */
  function ouvrir(){
    if(ouvrant) return; ouvrant=true;
    couvrir();
    if(!anime){ retirer(); ouvrant=false; return; }
    var vagues=cascade(calques, 55, 800);
    vagues.forEach(function(v){
      v.el.animate([{ transform:'none' }, { transform:'translateY(-100%)' }], { duration:v.duree, delay:v.at, easing:EASE, fill:'both' });
    });
    ov.classList.remove('it-couvert');
    /* Filet de sécurité : onglet en arrière-plan, animations figées ; on retire quand même les calques. */
    setTimeout(function(){ if(ouvrant){ ouvrant=false; retirer(); } }, fin(vagues) + 60);
  }

  /* Départ vers une autre page : le calque du dessous descend en premier, celui du dessus ferme la marche.
     Moins de 0,6 s en tout : les pages qui pilotent elles-mêmes #door-tx changent de page au bout de 600 ms. */
  var DESCENTE=cascade(calques.slice().reverse(), 30, 360);
  var FERME=fin(DESCENTE);
  function fermer(){
    ouvrant=false; annuler();
    ov.classList.add('it-on'); ov.classList.remove('it-couvert');
    if(!anime){ ov.classList.add('it-couvert'); return; }
    DESCENTE.forEach(function(v){
      v.el.animate([{ transform:'translateY(-100%)' }, { transform:'none' }], { duration:v.duree, delay:v.at, easing:EASE, fill:'both' });
    });
  }

  var avant={ loading:false, opening:false, closing:false };
  function etat(){ return { loading:ov.classList.contains('loading'), opening:ov.classList.contains('opening'), closing:ov.classList.contains('closing') }; }
  function suivre(){
    var e=etat();
    if(e.closing && !avant.closing) fermer();
    else if(e.opening && !avant.opening && !e.closing) ouvrir();
    else if(!e.closing && avant.closing && !e.loading){ ouvrant=false; retirer(); }
    avant=e;
  }

  var e0=etat();
  if(e0.loading) couvrir();
  else if(e0.opening) ouvrir();
  avant=e0;
  if(window.MutationObserver) new MutationObserver(suivre).observe(ov, { attributes:true, attributeFilter:['class'] });

  if(!auto) return;
  /* ---------- Mode autonome ---------- */
  var ouverte=false;
  function lancer(){
    if(ouverte) return; ouverte=true;
    ov.classList.remove('loading'); ov.classList.add('opening');
    window.__doorsOpen=true;
    document.dispatchEvent(new Event('mcd-doors-open'));
  }
  function charge(){
    var fr=(document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    fr.then(lancer, lancer);
  }
  if(document.readyState==='complete') charge(); else window.addEventListener('load', charge, { once:true });
  setTimeout(lancer, 2500);
  /* Si on touche ou fait défiler pendant le chargement, les calques remontent aussitôt. */
  ['touchstart','wheel','keydown'].forEach(function(ev){ window.addEventListener(ev, lancer, { once:true, passive:true }); });

  function interne(a){
    if(!a) return false;
    if(a.target && a.target!=='_self') return false;
    if(a.hasAttribute('download')) return false;
    var href=a.getAttribute('href')||'';
    if(!href || href.charAt(0)==='#') return false;
    if(/^(mailto:|tel:|javascript:)/i.test(href)) return false;
    var url; try{ url=new URL(a.href, location.href); }catch(err){ return false; }
    if(url.origin!==location.origin) return false;
    if(url.pathname===location.pathname && url.search===location.search && url.hash) return false;
    return true;
  }
  function go(dest){
    if(ov.classList.contains('closing')) return;
    ov.classList.remove('opening'); ov.classList.add('closing');
    setTimeout(function(){ window.location.href=dest; }, (anime ? FERME : 0) + 60);
  }
  if(!window.mcdGo) window.mcdGo=go;
  document.addEventListener('click', function(e){
    if(e.defaultPrevented) return;
    if(e.button!==0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a=e.target.closest ? e.target.closest('a[href]') : null;
    if(!interne(a)) return;
    e.preventDefault();
    go(a.href);
  }, true);
  window.addEventListener('pageshow', function(ev){ if(ev.persisted){ ov.classList.remove('closing'); retirer(); } });
})();
