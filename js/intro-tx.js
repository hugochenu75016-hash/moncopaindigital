/* Intro du site : le logo « Mon Copain Digital » se construit en blocs sur un rideau orange,
   puis le rideau s'ouvre par le bas en arrondi, directement sur la page.
   Remplace le dessin des anciennes portes : chaque page garde sa propre logique et pilote #door-tx
   avec les classes loading (écran de chargement), opening (ouverture) et closing (départ vers une autre page).
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

  if(!document.getElementById('intro-tx-css')){
    var lien=document.createElement('link');
    lien.rel='stylesheet'; lien.href='https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap';
    document.head.appendChild(lien);
    var st=document.createElement('style'); st.id='intro-tx-css';
    st.textContent=
      '#door-tx{position:fixed;inset:0;z-index:100000;pointer-events:none;overflow:hidden}'+
      '#door-tx.loading,#door-tx.closing{pointer-events:auto}'+
      '#door-tx .it-rideau{position:absolute;inset:0;display:none;background:linear-gradient(180deg,#ff8a1f 0%,#f26c00 55%,#d95e00 100%)}'+
      '#door-tx.it-on .it-rideau{display:block}'+
      '#door-tx .it-logo{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;'+
        'font-family:Fredoka,system-ui,sans-serif;font-weight:700;color:#fff;font-size:clamp(46px,10vw,122px);line-height:1.04}'+
      '#door-tx .it-ligne{display:flex;justify-content:center;position:relative}'+
      '#door-tx .it-l{position:relative;display:inline-block}'+
      '#door-tx .it-ch{display:inline-block;opacity:0;text-shadow:0 .06em .14em rgba(90,40,0,.3)}'+
      '#door-tx .it-blk{position:absolute;left:7%;right:7%;bottom:.17em;background:#fff;border-radius:4px;transform:scaleY(0);transform-origin:50% 100%}'+
      '#door-tx .it-esp{width:.3em}'+
      '#door-tx .it-trait{position:absolute;left:30%;right:30%;bottom:.17em;height:5px;background:#fff;border-radius:3px;transform:scaleX(0)}'+
      '#door-tx.it-statique .it-ch{opacity:1}'+
      '#door-tx.it-statique .it-blk,#door-tx.it-statique .it-trait{display:none}';
    document.head.appendChild(st);
  }

  var rideau=document.createElement('div'); rideau.className='it-rideau';
  var logo=document.createElement('div'); logo.className='it-logo';
  rideau.appendChild(logo); ov.appendChild(rideau);

  /* Le logo lettre par lettre ; chaque lettre a d'abord un bloc blanc (plus haut pour les majuscules et les hampes). */
  var HAUTES=/[A-Zbdfhklt]/;
  ['Mon Copain','Digital'].forEach(function(txt, i){
    var ligne=document.createElement('div'); ligne.className='it-ligne';
    txt.split('').forEach(function(c, j){
      if(c===' '){ var e=document.createElement('span'); e.className='it-esp'; ligne.appendChild(e); return; }
      var h=HAUTES.test(c) ? .62 + (j % 3) * .06 : .4 + (j % 2) * .08;
      var l=document.createElement('span'); l.className='it-l';
      l.innerHTML='<span class="it-blk" style="height:'+h+'em"></span><span class="it-ch">'+c+'</span>';
      ligne.appendChild(l);
    });
    if(i===0){ var t=document.createElement('span'); t.className='it-trait'; ligne.appendChild(t); }
    logo.appendChild(ligne);
  });
  var blocs=logo.querySelectorAll('.it-blk'), lettres=logo.querySelectorAll('.it-ch'), trait=logo.querySelector('.it-trait');
  var anime=!reduce && !!logo.animate;

  var pretA=0;      // moment où le logo est complet et l'ouverture peut commencer
  var ouvrant=false;
  var BACK='cubic-bezier(.34,1.8,.64,1)';

  function annuler(){
    [rideau, logo, trait].concat([].slice.call(blocs), [].slice.call(lettres)).forEach(function(el){
      if(el.getAnimations) el.getAnimations().forEach(function(a){ a.cancel(); });
    });
    rideau.style.clipPath='';
  }

  /* 1. Construction : le trait s'étire, les blocs poussent, puis chaque bloc devient sa lettre. */
  function construire(){
    ov.classList.add('it-on');
    if(!anime){ ov.classList.add('it-statique'); pretA=Date.now(); return; }
    var n=blocs.length, M=450 + n * 45;
    trait.animate([{ transform:'scaleX(0)', opacity:1 }, { transform:'scaleX(1)', opacity:1, offset:.7 }, { transform:'scaleX(1)', opacity:0 }],
      { duration:520, delay:150, easing:'ease-out', fill:'both' });
    for(var i=0; i<n; i++){
      blocs[i].animate([{ transform:'scaleY(0)' }, { transform:'scaleY(1.08)', offset:.7 }, { transform:'scaleY(1)' }],
        { duration:320, delay:420 + i * 45, easing:'ease-out', fill:'both' });
      blocs[i].animate([{ transform:'scaleY(1)', opacity:1, borderRadius:'4px' }, { transform:'scale(.55,.5)', opacity:0, borderRadius:'50%' }],
        { duration:280, delay:M + i * 50, easing:'ease-in', fill:'forwards' });
      lettres[i].animate([{ opacity:0, transform:'translateY(6px) scale(.7)' }, { opacity:1, transform:'none' }],
        { duration:300, delay:M + 100 + i * 50, easing:BACK, fill:'both' });
    }
    pretA=Date.now() + M + 100 + n * 50 + 300 + 450;
  }

  /* 2. Ouverture : le logo monte en s'effaçant, la page apparaît par le bas dans un grand arrondi. */
  function trou(p){
    var W=innerWidth, H=innerHeight;
    var cx=W / 2, cy=H * 1.25, rx=W * 1.1, ry=H * 1.6 * p;
    if(ry < 1){ rideau.style.clipPath=''; return; }
    var e='M'+(cx-rx)+' '+cy+'A'+rx+' '+ry+' 0 1 0 '+(cx+rx)+' '+cy+'A'+rx+' '+ry+' 0 1 0 '+(cx-rx)+' '+cy+'Z';
    rideau.style.clipPath='path(evenodd, "M0 0H'+W+'V'+H+'H0Z'+e+'")';
  }
  function ouvrir(){
    if(ouvrant) return; ouvrant=true;
    if(!ov.classList.contains('it-on')){ ov.classList.add('it-on', 'it-statique'); pretA=Date.now() + 250; }
    (function attendre(){
      if(!ouvrant) return;
      if(Date.now() < pretA){ setTimeout(attendre, pretA - Date.now()); return; }
      if(!anime){ ov.classList.remove('it-on'); ouvrant=false; return; }
      logo.animate([{ transform:'none', opacity:1 }, { transform:'translateY(-18vh)', opacity:0 }], { duration:500, easing:'ease-in', fill:'forwards' });
      var t0=performance.now();
      /* Filet de sécurité : si l'onglet est en arrière-plan, les images ne sont plus dessinées ; on retire quand même le rideau. */
      setTimeout(function(){ if(ouvrant){ ov.classList.remove('it-on'); ouvrant=false; annuler(); } }, 1400);
      (function pas(t){
        if(!ouvrant) return;
        var x=Math.min(1, (t - t0 - 50) / 900); if(x < 0) x=0;
        trou(x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
        if(x < 1) requestAnimationFrame(pas);
        else { ov.classList.remove('it-on'); ouvrant=false; annuler(); }
      })(t0);
    })();
  }

  /* 3. Départ vers une autre page : le rideau redescend avec le logo. */
  function fermer(){
    ouvrant=false; annuler();
    ov.classList.add('it-on', 'it-statique');
    if(anime) rideau.animate([{ transform:'translateY(-100%)' }, { transform:'none' }], { duration:550, easing:'cubic-bezier(.65,0,.35,1)', fill:'both' });
  }

  var avant={ loading:false, opening:false, closing:false };
  function etat(){ return { loading:ov.classList.contains('loading'), opening:ov.classList.contains('opening'), closing:ov.classList.contains('closing') }; }
  function suivre(){
    var e=etat();
    if(e.closing && !avant.closing) fermer();
    else if(e.opening && !avant.opening && !e.closing) ouvrir();
    else if(!e.closing && avant.closing && !e.loading){ ouvrant=false; annuler(); ov.classList.remove('it-on'); }
    avant=e;
  }

  var e0=etat();
  if(e0.loading){
    /* On attend la police du logo (au plus 0,6 s) pour que les lettres apparaissent dans la bonne forme. */
    ov.classList.add('it-on'); pretA=Date.now() + 700;
    var police=(anime && document.fonts && document.fonts.load) ? document.fonts.load('700 1em Fredoka') : Promise.resolve();
    Promise.race([police, new Promise(function(r){ setTimeout(r, 600); })])
      .then(function(){ if(!ov.classList.contains('closing')) construire(); }, function(){ construire(); });
  }
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
  /* Si on touche ou fait défiler pendant le chargement, le rideau s'ouvre aussitôt. */
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
    setTimeout(function(){ window.location.href=dest; }, 650);
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
  window.addEventListener('pageshow', function(ev){ if(ev.persisted) ov.classList.remove('closing'); });
})();
