/* Fiche « Tire-moi » (comme le « pull me » de sweet-tape.com) : onglet orange accroché en haut de l'écran,
   qui tire un panneau de menu. À inclure dans <header class="top">, à l'endroit où l'onglet doit apparaître
   (juste après le bouton « Nous contacter ») : <script src="js/tire-moi.js?v=1"></script>
   Charge GSAP depuis cdnjs si la page ne l'a pas. Caché à 900 px et moins (le menu burger s'en charge). */
(function(){
  var ici=document.currentScript;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var top=ici && ici.closest('.top');
  if(!top || document.getElementById('pull')) return;

  /* Sur l'accueil les sections sont sur la page ; ailleurs, on y retourne */
  function vers(id){ return document.getElementById(id) ? '#' + id : 'index.html#' + id; }
  var LIENS=[
    ['Particuliers', vers('particuliers'), 'images/particuliers/ordinateur.jpg'],
    ['Pros', vers('pros'), 'images/pull/pros.jpg'],
    ['Studio Social', 'decouvrir-studio-social.html', 'images/pull/studio-social.jpg'],
    ['Contact', 'contact.html', 'images/pull/contact.jpg']
  ];
  var FLECHE='<svg viewBox="0 0 12 12" fill="none"><path d="M1.4 10.6 10.6 1.4M3.6 1.4h7v7" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"/></svg>';
  var DENTS="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15' preserveAspectRatio='none'%3E%3Cpath d='M0 0L0 11Q0 15 4.29 12.43L20.71 2.57Q25 0 29.29 2.57L45.71 12.43Q50 15 54.29 12.43L70.71 2.57Q75 0 79.29 2.57L95.71 12.43Q100 15 100 11L100 0Z' fill='%23000'/%3E%3C/svg%3E\")";

  if(!document.getElementById('tire-moi-css')){
    var st=document.createElement('style'); st.id='tire-moi-css';
    st.textContent=[
      /* Papier blanc, encre noire, pastilles orange ; tailles reprises de sweet-tape (en vw, bornées) */
      '.pull{--pull-ink:#0a0a0a;--pull-paper:#fff;--pull-dot:var(--or,#F3852B);',
        '--tab-w:clamp(96px,9.3vw,134px);--menu-w:clamp(330px,31vw,460px);--row-h:clamp(46px,4.9vw,70px);--thumb:clamp(36px,4vw,58px);',
        '--perf-mark:clamp(2px,.208vw,3px);--perf-pitch:clamp(4px,.417vw,6px);',
        'position:relative;flex:0 0 auto;width:var(--tab-w);height:0;align-self:flex-start;transition:margin-top .3s;',
        'display:flex;flex-direction:column;align-items:flex-end;color:var(--pull-ink);font-family:Archivo,system-ui,sans-serif;font-stretch:62%;font-weight:900;text-transform:uppercase;letter-spacing:normal;line-height:1;z-index:2;pointer-events:auto}',
      /* le panneau glisse d'un bloc depuis le haut de l'écran (déplacement seul : rien n'est recalculé à chaque image) ;
         son ::before bouche le haut pendant le rebond */
      '.pull-panel{width:var(--menu-w);background:var(--pull-paper);border-radius:0 0 0 clamp(10px,.9vw,14px);position:absolute;top:0;right:0;visibility:hidden;will-change:transform;box-shadow:0 14px 34px rgba(0,40,80,.18)}',
      '.pull-panel::before{content:"";position:absolute;left:0;right:0;bottom:100%;height:80px;background:var(--pull-paper)}',
      '.pull[data-open="false"] .pull-panel{pointer-events:none}',
      /* tant que l'animation n'est pas prête, l'onglet attend au-dessus de l'écran (pas d'apparition puis de saut) */
      '.pull.en-attente .pull-tab{transform:translateY(-115%)}',
      /* sans animation : le panneau se place simplement au-dessus de l'onglet */
      '.pull.sans-anim .pull-panel{position:relative;visibility:visible}',
      '.pull.sans-anim[data-open="false"] .pull-panel{display:none}',
      '.pull-sheet{padding:clamp(14px,1.4vw,20px) clamp(14px,1.4vw,20px) clamp(6px,.5vw,8px) clamp(10px,1vw,14px)}',
      '.pull-list{list-style:none;margin:0;padding:0}',
      '.pull-rule{display:block;height:var(--perf-mark);background-image:linear-gradient(to right,currentColor 0 var(--perf-mark),transparent var(--perf-mark));background-size:var(--perf-pitch) 100%;background-repeat:repeat-x}',
      '.pull-link{height:var(--row-h);display:flex;align-items:start;position:relative;padding-right:clamp(26px,2.6vw,38px);color:inherit;text-decoration:none}',
      '.pull-thumb{flex:0 0 auto;width:0;height:var(--thumb);margin-right:0;position:relative;top:calc(clamp(5px,.55vw,8px) * -1);z-index:1;overflow:hidden;border-radius:clamp(14px,1.736vw,25px);transform:rotate(-5deg);',
        'transition:width .22s cubic-bezier(.16,.84,.3,1) .3s,margin-right .22s cubic-bezier(.16,.84,.3,1) .3s}',
      '.pull-thumb img{display:block;width:var(--thumb);max-width:none;height:100%;object-fit:cover;border-radius:inherit;transform:scale(0);transition:transform .3s cubic-bezier(.4,0,.2,1)}',
      '.pull-link:hover .pull-thumb,.pull-link:focus-visible .pull-thumb{width:var(--thumb);margin-right:clamp(8px,.85vw,12px);transition-delay:0s}',
      '.pull-link:hover .pull-thumb img,.pull-link:focus-visible .pull-thumb img{transform:scale(1);transition-delay:.1s}',
      /* plus petit que sweet-tape : nos intitulés sont plus longs (« Particuliers », « Studio Social ») */
      '.pull-label{display:flex;align-items:flex-end;white-space:nowrap;font-size:clamp(26px,2.9vw,42px);line-height:1;letter-spacing:-.005em}',
      '.pull .clip{display:block;flex:0 0 auto;overflow:hidden;margin:-.1em -.04em 0;padding:.1em .04em 0}',
      '.pull .char{display:block}',
      '.pull-arrow{position:absolute;right:0;top:clamp(10px,1vw,14px);display:grid;place-items:center;width:clamp(22px,1.7vw,26px);height:clamp(22px,1.7vw,26px);border-radius:50%;background:var(--pull-dot);color:#fff}',
      '.pull-arrow svg{width:clamp(8px,.56vw,9px);height:clamp(8px,.56vw,9px);transition:transform .4s cubic-bezier(.34,1.56,.64,1)}',
      '.pull-link:hover .pull-arrow svg,.pull-link:focus-visible .pull-arrow svg{transform:rotate(45deg)}',
      /* la fiche elle-même : orange, texte et perforation blancs */
      '.pull-tab{--pull-paper:var(--or,#F3852B);display:block;width:var(--tab-w);flex:0 0 auto;padding:0;border:0;background:none;color:#fff;font:inherit;text-transform:inherit;cursor:pointer;position:relative;will-change:transform;filter:drop-shadow(0 3px 6px rgba(0,40,80,.16))}',
      '.pull-tab.is-arriving::before{content:"";position:absolute;left:0;right:0;bottom:100%;height:150%;background:var(--pull-paper)}',
      /* Corps de l'onglet + bas en dents de scie (même découpe que sweet-tape), ligne de perforation en haut */
      '.pull-tab-sheet{--tab-body:clamp(46px,4.681vw,67px);--tooth-h:clamp(14px,1.4vw,20px);--perf-y:clamp(16px,1.667vw,24px);--perf-x:clamp(5px,.556vw,8px);--tooth:' + DENTS + ';',
        'display:block;position:relative;height:calc(var(--tab-body) + var(--tooth-h));background:var(--pull-paper);',
        'padding-top:calc(var(--perf-y) + (var(--tab-body) - var(--perf-y) - .8em) / 2);text-align:center;font-size:clamp(13px,1.389vw,20px);line-height:.8;letter-spacing:.01em;',
        '-webkit-mask-image:linear-gradient(#000 0 0),var(--tooth);mask-image:linear-gradient(#000 0 0),var(--tooth);',
        '-webkit-mask-size:100% calc(100% - var(--tooth-h)),100% var(--tooth-h);mask-size:100% calc(100% - var(--tooth-h)),100% var(--tooth-h);',
        '-webkit-mask-position:0 0,0 calc(100% - 2px);mask-position:0 0,0 calc(100% - 2px);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}',
      '.pull-tab-sheet::before{content:"";position:absolute;top:var(--perf-y);left:var(--perf-x);right:var(--perf-x);height:var(--perf-mark);pointer-events:none;',
        'background-image:linear-gradient(to right,currentColor 0 var(--perf-mark),transparent var(--perf-mark));background-size:var(--perf-pitch) 100%;background-repeat:repeat-x}',
      '.pull-link:focus-visible,.pull-tab:focus-visible{outline:2px solid var(--pull-ink);outline-offset:2px}',
      /* Téléphone et tablette : le menu burger s'en charge */
      '@media (max-width:900px){.pull{display:none}}'
    ].join('');
    document.head.appendChild(st);
  }

  /* ---------- Fiche et panneau, placés à l'endroit du script ---------- */
  var nav=document.createElement('nav');
  nav.className=reduce ? 'pull' : 'pull en-attente'; nav.id='pull'; nav.dataset.open='false'; nav.setAttribute('aria-label', 'Menu rapide');
  nav.innerHTML='<div class="pull-panel" id="pull-panel"><div class="pull-sheet"><ul class="pull-list">' +
    LIENS.map(function(l){
      return '<li class="pull-item"><span class="pull-rule" aria-hidden="true"></span><a class="pull-link" href="' + l[1] + '" tabindex="-1" aria-label="' + l[0] + '">' +
        '<span class="pull-thumb" aria-hidden="true"><img src="' + l[2] + '" alt="" loading="lazy"></span>' +
        '<span class="pull-label" aria-hidden="true">' + l[0].split('').map(function(c){ return '<span class="clip"><span class="char">' + (c === ' ' ? '&nbsp;' : c) + '</span></span>'; }).join('') + '</span>' +
        '<span class="pull-arrow" aria-hidden="true">' + FLECHE + '</span></a></li>';
    }).join('') +
    '</ul></div></div><button class="pull-tab" type="button" aria-expanded="false" aria-controls="pull-panel"><span class="pull-tab-sheet">Tire-moi</span></button>';
  ici.parentNode.insertBefore(nav, ici);

  var tab=nav.querySelector('.pull-tab'), panel=nav.querySelector('.pull-panel');
  var items=[].slice.call(nav.querySelectorAll('.pull-item')), liens=[].slice.call(nav.querySelectorAll('.pull-link'));
  var ouvert=false, drop=null, contenu=null, retour=null;

  /* L'onglet touche toujours le haut de l'écran, quel que soit l'espacement de l'en-tête (qui change en défilant) */
  var cs=getComputedStyle(top), enLigne=/flex/.test(cs.display);
  if(!enLigne){
    // en-tête qui n'est pas une ligne flexible (article du blog) : l'onglet se pose en haut à droite de l'en-tête
    if(cs.position === 'static') top.style.position='relative';
    nav.style.cssText='position:absolute;top:0;right:var(--pad,16px)';
  }
  function caler(){
    if(!enLigne) return;
    nav.style.marginTop=(-parseFloat(getComputedStyle(top).paddingTop) || 0) + 'px';
    // rien ne le pousse à droite (pas de menu étiré avant lui) : il s'y cale tout seul
    var fin=top.getBoundingClientRect().right - (parseFloat(getComputedStyle(top).paddingRight) || 0);
    if(!nav.style.marginLeft && nav.getBoundingClientRect().right < fin - 40) nav.style.marginLeft='auto';
  }
  caler();
  addEventListener('resize', caler);
  top.addEventListener('transitionend', caler);
  if(window.MutationObserver) new MutationObserver(caler).observe(top, { attributes:true, attributeFilter:['class'] });

  function animer(){
    if(!window.gsap || reduce){ nav.classList.remove('en-attente'); nav.classList.add('sans-anim'); return; }
    var gsap=window.gsap;
    // le panneau descend avec un rebond et l'onglet, accroché dessous, descend avec lui (déplacements seuls)
    gsap.set(panel, { yPercent:-100 });
    drop=gsap.timeline({ paused:true })
      .fromTo(panel, { yPercent:-100 }, { yPercent:0, duration:.7, ease:'back.out(1.9)', force3D:true }, 0)
      .fromTo(tab, { y:0 }, { y:function(){ return panel.offsetHeight; }, duration:.7, ease:'back.out(1.9)', force3D:true }, 0);
    addEventListener('resize', function(){ drop.invalidate(); if(ouvert && !retour) gsap.set(tab, { y:panel.offsetHeight }); });
    // puis, ligne par ligne : le pointillé se trace, les lettres montent dans le désordre, la pastille gonfle
    contenu=gsap.timeline({ paused:true });
    items.forEach(function(it, i){
      var at=.28 + .16 * i, chars=[].slice.call(it.querySelectorAll('.char'));
      for(var k=chars.length - 1; k > 0; k--){ var j=Math.floor(Math.random() * (k + 1)); var x=chars[k]; chars[k]=chars[j]; chars[j]=x; }
      contenu.fromTo(it.querySelector('.pull-rule'), { clipPath:'inset(0% 100% 0% 0%)' }, { clipPath:'inset(0% 0% 0% 0%)', duration:.6, ease:'power2.out' }, at);
      contenu.fromTo(chars, { yPercent:130 }, { yPercent:0, duration:.6, stagger:.025, ease:'power3.out', force3D:true }, at + .1);
      contenu.fromTo(it.querySelector('.pull-arrow'), { scale:0 }, { scale:1, duration:.5, ease:'back.out(2.2)' }, at + .26);
    });
    // arrivée de l'onglet : il tombe du haut de l'écran une fois les portes ouvertes
    tab.classList.add('is-arriving');
    gsap.set(tab, { yPercent:-115 });
    nav.classList.remove('en-attente');
    var arrive=false;
    function arriver(){
      if(arrive) return; arrive=true;
      gsap.to(tab, { yPercent:0, duration:.75, delay:.7, ease:'back.out(1.9)', force3D:true, onComplete:function(){ tab.classList.remove('is-arriving'); } });
    }
    if(window.__doorsOpen || (!document.getElementById('intro-tx') && !document.getElementById('door-tx'))) arriver();
    else { document.addEventListener('mcd-doors-open', arriver, { once:true }); setTimeout(arriver, 2500); }
  }

  function basculer(v){
    if(v === ouvert) return;
    ouvert=v;
    nav.dataset.open=String(v);
    tab.setAttribute('aria-expanded', String(v));
    liens.forEach(function(a){ if(v) a.removeAttribute('tabindex'); else a.setAttribute('tabindex', '-1'); });
    if(!drop) return;
    var gsap=window.gsap;
    if(retour){ retour.kill(); retour=null; }
    if(v){ gsap.set(panel, { visibility:'visible' }); drop.play(); contenu.play(); return; }
    contenu.pause();
    if(drop.time() === 0){ contenu.pause(0); gsap.set(panel, { visibility:'hidden' }); return; }
    retour=drop.tweenTo(0, { duration:.85, ease:'power2.inOut', onComplete:function(){ contenu.pause(0); gsap.set(panel, { visibility:'hidden' }); retour=null; } });
  }

  tab.addEventListener('click', function(){ basculer(!ouvert); });
  liens.forEach(function(a){ a.addEventListener('click', function(){ basculer(false); }); });
  document.addEventListener('click', function(e){ if(ouvert && !e.target.closest('.pull')) basculer(false); });
  document.addEventListener('keydown', function(e){ if(ouvert && e.key === 'Escape'){ basculer(false); tab.focus(); } });

  /* GSAP : celui de la page s'il est là à la fin du chargement, sinon on le charge */
  function pret(){
    if(window.gsap || reduce){ animer(); return; }
    var s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    s.onload=animer; s.onerror=animer;
    document.head.appendChild(s);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pret); else pret();
})();
