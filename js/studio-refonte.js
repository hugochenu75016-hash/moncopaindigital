/* Refonte Studio Social : disposition de l'ordinateur. ?norefonte=1 désactive tout ; la version mobile n'est jamais touchée.
   Règles : aucun nœud existant recréé ni vidé, aucun id ou texte existant modifié, ajouts préfixés rf-. */
(function(){
  var html=document.documentElement;
  try{
    if(/[?&]norefonte=1/.test(location.search))return;
    if(html.getAttribute('data-device')==='mobile'||window.innerWidth<=760)return;
    html.classList.add('rf-on');
  }catch(e){return;}

  function $(s,r){return (r||document).querySelector(s);}
  function $all(s,r){return [].slice.call((r||document).querySelectorAll(s));}
  function el(tag,cls,txt){var n=document.createElement(tag);if(cls)n.className=cls;if(txt!=null)n.textContent=txt;return n;}
  function donnees(){try{return window.mcdStudioData?window.mcdStudioData():null;}catch(e){return null;}}
  function reduit(){return window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;}

  /* Icônes de la maquette : le contenu est posé dans chaque svg, car les classes CSS ne traversent pas <use> */
  var ICONES={
    home:'<path class="s" d="M6 12l7-6 7 6v9H6z"/><path class="l" d="M3 12.5 13 4l10 8.5M6 10.5V22h14V10.5"/><rect class="a" x="10.5" y="15" width="5" height="7" rx="1.5"/>',
    pen:'<circle class="s" cx="8" cy="8" r="6"/><path class="l" d="M5 21l1.3-5L18 4.3a2.4 2.4 0 0 1 3.4 3.4L9.8 19.5z"/><path class="a" d="M4 22.5l1.8-6 4.2 4.2z"/>',
    cal:'<rect class="s" x="5" y="9" width="17" height="13" rx="3"/><rect class="l" x="3" y="5" width="20" height="18" rx="4"/><path class="l" d="M3 11h20M8.5 2.5v5M17.5 2.5v5"/><circle class="a" cx="17" cy="17" r="2.8"/>',
    his:'<circle class="s" cx="15" cy="15" r="8"/><path class="l" d="M3.5 13a9.5 9.5 0 1 0 2.8-6.700L3.5 9M3.5 4v5h5"/><path class="l" d="M13 8v5.5l3.500 2"/><circle class="a" cx="13" cy="13.500" r="1.900"/>',
    doc:'<path class="s" d="M9 8h12v14H9z"/><path class="l" d="M6 3h10l6 6v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2z"/><path class="l" d="M15.5 3.5V10H22M9 15h8M9 19h5"/><circle class="a" cx="20.500" cy="20.500" r="3"/>',
    zap:'<circle class="s" cx="17" cy="9" r="7"/><path class="a" d="M14.5 2 5 14.5h7L10.5 24 21 10.5h-7z"/><path class="l" d="M14.5 2 5 14.5h7L10.5 24 21 10.5h-7z"/>',
    target:'<circle class="s" cx="15" cy="15" r="7"/><circle class="l" cx="13" cy="13" r="10"/><circle class="l" cx="13" cy="13" r="5"/><circle class="a" cx="13" cy="13" r="2.300"/>',
    up:'<path class="s" d="M5 16h16v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path class="l" d="M4 16v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5M13 17V4M8 9l5-5 5 5"/><circle class="a" cx="13" cy="4" r="2.200"/>',
    plus:'<path class="l" d="M13 6v14M6 13h14"/>',
    fleche:'<path class="l" d="M5 13h15M14 7l6 6-6 6"/>',
    shapes:'<circle class="s" cx="8.5" cy="8.5" r="5.5"/><rect class="l" x="13" y="13" width="10" height="10" rx="2.5"/><path class="a" d="M8 14l5.5 9h-11z"/><circle class="l" cx="8.5" cy="8.5" r="5.5"/>',
    text:'<rect class="s" x="3" y="17" width="20" height="6" rx="3"/><path class="l" d="M6 7V4h14v3M13 4v17M9.5 21h7"/><circle class="a" cx="21" cy="20" r="2.5"/>',
    img:'<rect class="s" x="6" y="9" width="17" height="13" rx="3"/><rect class="l" x="3" y="4" width="20" height="18" rx="4"/><path class="l" d="m4 18 5-5 4 4 3-3 6 6"/><circle class="a" cx="17" cy="9.5" r="2.5"/>',
    fill:'<circle class="s" cx="13" cy="13" r="8"/><circle class="l" cx="13" cy="13" r="10"/><path class="a" d="M13 3a10 10 0 0 1 0 20z"/>',
    lay:'<path class="s" d="m13 12 10 5-10 5-10-5z"/><path class="l" d="m13 3 10 5-10 5L3 8z"/><path class="l" d="m3 13 10 5 10-5M3 18l10 5 10-5"/><circle class="a" cx="13" cy="8" r="2.2"/>',
    play:'<circle class="s" cx="14" cy="14" r="9"/><circle class="l" cx="13" cy="13" r="10"/><path class="a" d="M10 8.5v9l8-4.5z"/>',
    bot:'<rect class="s" x="6" y="11" width="16" height="11" rx="4"/><rect class="l" x="4" y="9" width="18" height="13" rx="5"/><path class="l" d="M13 9V5M2 15v3M24 15v3"/><circle class="a" cx="13" cy="4" r="2.2"/><circle class="a" cx="9.5" cy="15" r="1.7"/><circle class="a" cx="16.5" cy="15" r="1.7"/>',
    gear:'<circle class="s" cx="14" cy="14" r="7"/><circle class="l" cx="13" cy="13" r="3.5"/><path class="l" d="M13 2.5v3.2M13 20.3v3.2M2.5 13h3.2M20.3 13h3.2M5.6 5.6l2.3 2.3M18.1 18.1l2.3 2.3M20.4 5.6l-2.3 2.3M7.9 18.1l-2.3 2.3"/><circle class="a" cx="13" cy="13" r="1.6"/>',
    shield:'<path class="s" d="M13 8l7 2v5c0 4-3 6-7 8z"/><path class="l" d="M13 3 4 6.5V13c0 5 3.5 8 9 10 5.5-2 9-5 9-10V6.5z"/><circle class="a" cx="13" cy="12.5" r="2.5"/>'
  };
  var ICONE_VUE={composer:'pen',calendar:'cal',history:'his',drafts:'doc',automations:'zap',pilote:'target'};
  function icone(nom){
    var s=document.createElementNS('http://www.w3.org/2000/svg','svg');
    s.setAttribute('class','rf-ic');s.setAttribute('viewBox','0 0 26 26');s.setAttribute('aria-hidden','true');
    s.innerHTML=ICONES[nom]||'';
    return s;
  }
  function cleItem(item){return item.id==='nav-publier'?'publier':item.getAttribute('data-view');}

  /* ===== Barre latérale du Studio ===== */
  function decorerBarre(){
    var fan=$('#fan-wrap');if(!fan)return;
    $all('.nav-item',fan).forEach(function(item){
      if($('.rf-ic',item))return;
      var cle=cleItem(item);
      item.insertBefore(icone(cle==='publier'?'up':ICONE_VUE[cle]),item.firstChild);
    });
    if(!$('.rf-nav-home',fan)){
      // Pas de .nav-item ici : switchView les parcourt tous
      var home=el('a','rf-nav-home');home.href='#';home.setAttribute('role','button');
      home.appendChild(icone('home'));home.appendChild(el('span',null,'Accueil'));
      home.addEventListener('click',function(e){e.preventDefault();var b=$('#side-home');if(b)b.click();});
      fan.insertBefore(home,fan.firstChild);
    }
    if(!$('#rf-pill')){var p=el('span');p.id='rf-pill';p.setAttribute('aria-hidden','true');fan.appendChild(p);}
    var maison=$('#side-home');
    if(maison&&!$('.rf-brand-av',maison)){var im=el('img','rf-brand-av');im.src='images/avatarchatbot.png';im.alt='';maison.appendChild(im);}
    placerPilule();
  }
  function placerPilule(){
    var p=$('#rf-pill'),a=$('#fan-wrap .nav-item.active');if(!p)return;
    if(!a||!a.offsetHeight){p.style.opacity='0';return;}
    p.style.opacity='1';p.style.height=a.offsetHeight+'px';p.style.transform='translateY('+a.offsetTop+'px)';
  }

  /* ===== Accueil ===== */
  function aller(cle){
    var d=donnees();if(!d)return;
    if(cle==='publier'){d.goView('composer');setTimeout(function(){var n=$('#nav-publier');if(n)n.click();},650);return;}
    d.goView(cle);
  }
  function section(id,titre,lien,vue){
    var box=el('section');box.id=id;
    var t=el('div','rf-sec');t.appendChild(el('h3',null,titre));
    var a=el('a',null,lien);a.href='#';a.addEventListener('click',function(e){e.preventDefault();aller(vue);});
    t.appendChild(a);box.appendChild(t);
    return box;
  }
  function construireAccueil(){
    var hub=$('#hub'),inner=$('.hub-inner',hub);
    if(!inner||$('#rf-hub-main'))return;

    var side=el('aside');side.id='rf-hub-side';
    var brand=el('div','rf-brand'),im=el('img');im.src='images/avatarchatbot.png';im.alt='';
    var bt=el('span','rf-brand-t');bt.appendChild(el('b',null,'Studio Social'));bt.appendChild(el('small',null,'Mon Copain Digital'));
    brand.appendChild(im);brand.appendChild(bt);side.appendChild(brand);
    var nav=el('nav','rf-nav');nav.id='rf-hub-nav';nav.setAttribute('aria-label','Navigation du Studio');side.appendChild(nav);
    var cred=el('div','rf-credits');cred.id='rf-hub-credits';cred.hidden=true;side.appendChild(cred);

    var main=el('div');main.id='rf-hub-main';
    var top=el('div','rf-top'),tx=el('div'),h=el('h1');
    h.appendChild(document.createTextNode('Salut '));
    var nom=el('span');nom.id='hub-name';h.appendChild(nom);
    h.appendChild(document.createTextNode(', on publie quoi ?'));
    tx.appendChild(h);tx.appendChild(el('p',null,'Tes outils et ton activité, au même endroit.'));
    var cree=el('button','rf-btn');cree.type='button';cree.appendChild(icone('plus'));cree.appendChild(document.createTextNode('Créer'));
    cree.addEventListener('click',function(){
      var d=donnees();if(!d)return;
      d.goView('composer');setTimeout(function(){var b=$('#side-create');if(b)b.click();},650);
    });
    top.appendChild(tx);top.appendChild(cree);main.appendChild(top);
    var cartes=$('.hub-cards',inner),tete=$('.hub-head',inner);
    if(tete)main.appendChild(tete);
    main.appendChild(cartes);

    var sem=section('rf-week','Cette semaine','Tout voir','history');
    var st=el('div','rf-stats');
    [['cal','Programmés'],['doc','Brouillons'],['his','Publiés']].forEach(function(c){
      var b=el('div','rf-st'),t=el('div','rf-st-ic');t.appendChild(icone(c[0]));
      var v=el('div');v.appendChild(el('b',null,'0'));v.appendChild(el('span',null,c[1]));
      b.appendChild(t);b.appendChild(v);st.appendChild(b);
    });
    sem.appendChild(st);main.appendChild(sem);
    var pro=section('rf-next','Prochaines publications','Calendrier','calendar');
    pro.appendChild(el('div','rf-posts'));main.appendChild(pro);

    var panel=el('aside');panel.id='rf-hub-panel';
    var fond=el('div','rf-panel-in');
    var me=el('div','rf-me'),ph=el('div','rf-ph'),ava=el('img');ava.alt='';ph.appendChild(ava);
    me.appendChild(ph);me.appendChild(el('b','rf-me-nom'));me.appendChild(el('span','rf-me-role'));
    fond.appendChild(me);fond.appendChild(el('div','rf-nl','Mes réseaux'));
    var reseaux=$('#hub-networks',inner),pied=$('.hub-foot',inner);
    fond.appendChild(reseaux);panel.appendChild(fond);panel.appendChild(pied);

    inner.insertBefore(side,inner.firstChild);
    inner.appendChild(main);inner.appendChild(panel);

    new MutationObserver(nommerReseaux).observe(reseaux,{childList:true});
    nommerReseaux();
    var src=$('#side-credits');
    if(src)new MutationObserver(copierCredits).observe(src,{childList:true,attributes:true,attributeFilter:['hidden']});
    copierCredits();
  }
  /* #hub-networks est réécrit à chaque changement : le libellé vient du title de chaque ligne */
  function nommerReseaux(){
    $all('#hub-networks .hub-network-item').forEach(function(l){
      if($('.rf-net-t',l))return;
      var p=(l.title||'').split(' · '),t=el('span','rf-net-t');
      t.appendChild(el('b',null,p[0]||''));t.appendChild(el('small',null,p[1]||''));
      l.insertBefore(t,$('input',l));
    });
  }
  function copierCredits(){
    var src=$('#side-credits'),c=$('#rf-hub-credits');if(!src||!c)return;
    c.hidden=src.hidden||!src.innerHTML;
    if(c.innerHTML!==src.innerHTML)c.innerHTML=src.innerHTML;
  }

  function remplirNavAccueil(){
    var nav=$('#rf-hub-nav'),fan=$('#fan-wrap');if(!nav||!fan)return;
    while(nav.firstChild)nav.removeChild(nav.firstChild);
    var p=el('span');p.id='rf-hub-pill';p.setAttribute('aria-hidden','true');nav.appendChild(p);
    function item(cle,nomIcone,txt,badge,verrou){
      var b=el('button','rf-item');b.type='button';b.appendChild(icone(nomIcone));b.appendChild(el('span',null,txt));
      if(badge)b.appendChild(el('em','rf-badge',badge));
      if(verrou)b.appendChild(el('em','rf-lock','🔒'));
      if(cle)b.addEventListener('click',function(){aller(cle);});
      nav.appendChild(b);return b;
    }
    var ici=item(null,'home','Accueil');ici.classList.add('on');ici.setAttribute('aria-current','page');
    $all('.nav-item',fan).forEach(function(n){
      if(n.hidden)return;
      var cle=cleItem(n),lib=$('span:not(.badge):not(.np-lock)',n),bd=$('.badge',n);
      item(cle,cle==='publier'?'up':ICONE_VUE[cle],lib?lib.textContent:'',bd&&bd.style.display!=='none'?bd.textContent:'',n.classList.contains('np-locked'));
    });
    function poser(b){
      p.style.height=b.offsetHeight+'px';p.style.transform='translateY('+b.offsetTop+'px)';
      $all('.rf-item',nav).forEach(function(i){i.classList.toggle('rf-cur',i===b);});
    }
    nav.onmouseover=function(e){var b=e.target.closest&&e.target.closest('.rf-item');if(b)poser(b);};
    nav.onmouseleave=function(){poser(ici);};
    poser(ici);
  }

  function compter(b,v){
    var de=parseInt(b.textContent,10)||0;
    if(de===v)return;
    if(reduit()){b.textContent=v;return;}
    var t0=performance.now();
    (function pas(t){
      var k=Math.min(1,(t-t0)/650);
      b.textContent=Math.round(de+(v-de)*(1-Math.pow(1-k,3)));
      if(k<1)requestAnimationFrame(pas);
    })(t0);
  }
  function majStats(d){
    var n=new Date(),lun=new Date(n.getFullYear(),n.getMonth(),n.getDate()-((n.getDay()+6)%7)),fin=new Date(lun.getFullYear(),lun.getMonth(),lun.getDate()+7);
    function dansSemaine(x){if(!x)return false;var t=new Date(x);return t>=lun&&t<fin;}
    var v=[0,0,0];
    d.posts.forEach(function(p){
      if(p.status==='scheduled'&&dansSemaine(p.scheduled_at))v[0]++;
      else if(p.status==='draft')v[1]++;
      else if((p.status==='published'||p.status==='publishing')&&dansSemaine(p.scheduled_at||p.created_at))v[2]++;
    });
    $all('#rf-week .rf-st b').forEach(function(b,i){compter(b,v[i]);});
  }
  function dateTuile(x){
    var t=new Date(x),j=t.toLocaleDateString('fr-FR',{weekday:'long'}),m=t.getMinutes();
    return j.charAt(0).toUpperCase()+j.slice(1)+' '+t.getHours()+' h'+(m?(m<10?' 0':' ')+m:'');
  }
  function majPublications(d){
    var box=$('#rf-next .rf-posts');if(!box)return;
    var now=Date.now();
    var liste=d.posts.filter(function(p){return p.status==='scheduled'&&p.scheduled_at&&new Date(p.scheduled_at).getTime()>=now;})
      .sort(function(a,b){return new Date(a.scheduled_at)-new Date(b.scheduled_at);}).slice(0,3);
    var sig=JSON.stringify(liste.map(function(p){return [p.id,p.scheduled_at,p.caption,d.approved(p)];}));
    if(box._sig===sig)return;
    box._sig=sig;
    while(box.firstChild)box.removeChild(box.firstChild);
    if(!liste.length){
      var v=el('button','rf-post rf-post-vide');v.type='button';
      v.appendChild(el('b',null,'Rien de prévu'));v.appendChild(el('small',null,'Ouvre le calendrier pour programmer un post'));
      v.addEventListener('click',function(){aller('calendar');});
      box.appendChild(v);return;
    }
    liste.forEach(function(p,i){
      var b=el('button','rf-post p'+(i+1));b.type='button';
      var m=p.media&&p.media[0];
      if(m&&m.url&&m.type!=='video'){var im=el('img','rf-post-im');im.alt='';im.src=m.url;b.appendChild(im);b.classList.add('rf-post-photo');}
      b.appendChild(el('em',null,dateTuile(p.scheduled_at)));
      if(!d.approved(p))b.appendChild(el('i','rf-post-val','à valider'));
      b.appendChild(el('b',null,d.excerpt(p)));
      b.addEventListener('click',function(){
        var x=donnees();if(!x)return;
        x.goView('calendar');
        setTimeout(function(){try{x.validate(p.id);}catch(e){}},800);
      });
      box.appendChild(b);
    });
  }
  function majPanneau(d){
    var im=$('.rf-ph img'),photo=$('#studio-profile-photo');if(!im)return;
    var src=(!d.acting&&photo&&!photo.hidden&&photo.getAttribute('src'))||'images/avatarchatbot.png';
    if(im.getAttribute('src')!==src)im.src=src;
    $('.rf-me-nom').textContent=d.nom;
    $('.rf-me-role').textContent=d.acting?'Compte géré':(d.staff?(d.role||d.formule):'Formule '+d.formule);
    var hn=$('#hub-name');if(hn&&!hn.textContent)hn.textContent=d.nom||'👋';
  }
  function majAccueil(){
    var hub=$('#hub');if(!hub||!hub.classList.contains('show'))return;
    try{
      remplirNavAccueil();
      var d=donnees();if(!d)return;
      majStats(d);majPublications(d);majPanneau(d);
    }catch(e){console.warn('Refonte accueil',e);}
  }

  /* ===== Éditeur : hauteur du canvas lue par edApplyFmt (0 = calcul d'origine) ===== */
  window.mcdStageH=function(){
    if(!html.classList.contains('rf-on')||window.innerWidth<=760)return 0;
    var w=$('.ed-stagewrap');if(!w||!w.clientHeight)return 0;
    var cs=getComputedStyle(w),h=w.clientHeight-(parseFloat(cs.paddingTop)||0)-(parseFloat(cs.paddingBottom)||0);
    ['.ed-toolbar','#eds-mix','#ed-vbar'].forEach(function(s){
      var e=$(s,w);if(!e||!e.offsetHeight)return;
      var c=getComputedStyle(e);h-=e.offsetHeight+(parseFloat(c.marginTop)||0)+(parseFloat(c.marginBottom)||0);
    });
    return Math.max(300,Math.floor(h));
  };
  function revoirCanvas(){window.dispatchEvent(new Event('resize'));}

  /* Icônes : l'original reste dans le bouton, masqué en CSS */
  var ICONE_OUTIL={elements:'shapes',text:'text',uploads:'up','brand-assets':'img',bg:'fill',style:'pen',layers:'lay',motion:'play',settings:'gear'};
  var ICONE_BARRE={'ed-my-tpl':'doc','ed-to-story':'up','ed-visual-check':'shield'};
  function decorerOutils(){
    // Agents IA : uniquement dans le panneau de droite sur ordinateur
    var agents=$('#ed-agents');if(agents)agents.remove();
    $all('.ed-rail .ed-tool[data-fly]').forEach(function(b){
      var nom=ICONE_OUTIL[b.getAttribute('data-fly')];
      if(nom&&!$('.rf-ic',b))b.insertBefore(icone(nom),b.firstChild);
    });
    Object.keys(ICONE_BARRE).forEach(function(id){
      var b=document.getElementById(id);
      if(b&&!$('.rf-ic',b))b.insertBefore(icone(ICONE_BARRE[id]),b.firstChild);
    });
  }
  /* Écran de départ : recréé par l'éditeur, on ajoute l'illustration à côté de l'emoji */
  var ILLUS=[
    '<circle cx="46" cy="46" r="46" fill="#FFEFE2"/><path d="M22 44 44 22h24v24L46 68z" fill="#F06A12"/><path d="M22 44 46 68l10-10-24-24z" fill="#CC4A0A"/><circle cx="58" cy="33" r="5" fill="#fff"/><path d="M36 50l14-14" stroke="#FFD2B0" stroke-width="3" stroke-linecap="round"/>',
    '<circle cx="46" cy="46" r="46" fill="#DDF2FD"/><rect x="24" y="42" width="44" height="28" rx="6" fill="#38BDF8"/><rect x="20" y="32" width="52" height="13" rx="5" fill="#0284C7"/><rect x="41" y="32" width="10" height="38" fill="#F06A12"/><path d="M46 32c-9-1-14-5-11-9 3-3 9 2 11 9 2-7 8-12 11-9 3 4-2 8-11 9z" fill="#CC4A0A"/>',
    '<circle cx="46" cy="46" r="46" fill="#DDF2FD"/><rect x="18" y="31" width="56" height="39" rx="9" fill="#0284C7"/><path d="M36 31l4-8h12l4 8z" fill="#38BDF8"/><circle cx="46" cy="50" r="14" fill="#fff"/><circle cx="46" cy="50" r="9" fill="#F06A12"/><circle cx="49" cy="47" r="3" fill="#FFD2B0"/>',
    '<circle cx="46" cy="46" r="46" fill="#FFEFE2"/><rect x="21" y="26" width="50" height="46" rx="9" fill="#fff"/><path d="M21 35a9 9 0 0 1 9-9h32a9 9 0 0 1 9 9v5H21z" fill="#F06A12"/><rect x="33" y="20" width="5" height="13" rx="2.5" fill="#CC4A0A"/><rect x="54" y="20" width="5" height="13" rx="2.5" fill="#CC4A0A"/><circle cx="46" cy="56" r="9" fill="#38BDF8"/><path d="m42 56 3 3 5-6" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
  ];
  function decorerDepart(){
    $all('#ed-start .ed-start-card').forEach(function(c,i){
      if($('.rf-ill',c)||!ILLUS[i])return;
      var s=document.createElementNS('http://www.w3.org/2000/svg','svg');
      s.setAttribute('class','rf-ill');s.setAttribute('viewBox','0 0 92 92');s.setAttribute('aria-hidden','true');
      s.innerHTML=ILLUS[i];c.insertBefore(s,c.firstChild);
    });
  }

  /* ===== Panneau blanc de l'éditeur ===== */
  function demanderMarshall(txt){
    if(!$('.ed-flyout.marshall-mode.show:not(.minimized)')){var ai=$('#ed-ai');if(ai)ai.click();}
    var t0=Date.now();
    (function attendre(){
      var champ=$('.ed-flyout.marshall-mode.show #ai-prompt'),go=$('.ed-flyout.marshall-mode.show #ai-run');
      if(!champ||!go){if(Date.now()-t0<2000)setTimeout(attendre,50);return;}
      champ.value=txt;champ.dispatchEvent(new Event('input',{bubbles:true}));go.click();
    })();
  }
  /* #net-row est réécrit à chaque changement : les pastilles sont refaites et le clic relayé sur la ligne d'origine */
  function majReseauxEditeur(){
    var box=$('#sr-nets');if(!box)return;
    var lignes=$all('#net-row .net-line');
    var sig=lignes.map(function(l){return l.className;}).join('|');
    if(box._sig===sig)return;
    box._sig=sig;
    while(box.firstChild)box.removeChild(box.firstChild);
    lignes.forEach(function(l){
      var id=l.getAttribute('data-net'),ni=$('.ni',l),nom=$('.nn b',l),b=el('button','sr-net');
      b.type='button';
      if(l.classList.contains('on'))b.classList.add('on');
      if(l.classList.contains('off'))b.classList.add('off');
      b.title=nom?nom.textContent:'';b.setAttribute('aria-label',b.title);
      b.setAttribute('aria-pressed',l.classList.contains('on')?'true':'false');
      if(ni){b.setAttribute('style',ni.getAttribute('style')||'');b.innerHTML=ni.innerHTML;}
      b.addEventListener('click',function(){var o=$('#net-row .net-line[data-net="'+id+'"]');if(o)o.click();});
      box.appendChild(b);
    });
  }
  function copierVerrouPublier(){
    var src=$('#ed-publish'),b=$('#sr-publish');if(!src||!b)return;
    var verrou=src.classList.contains('mpub-locked');
    b.classList.toggle('mpub-locked',verrou);
    b.title=verrou?(src.getAttribute('title')||''):'Publier';
  }
  function construireEditeur(){
    var wrap=$('#ed-shell-wrap'),rail=$('#ed-agent-rail');
    if(!wrap||!rail||$('#sr-panel'))return;
    var flyout=$('#ed-flyout');
    var p=el('aside');p.id='sr-panel';p.setAttribute('role','dialog');p.setAttribute('aria-label','Agents IA');
    p.appendChild(el('div','sr-t','Agents IA'));
    p.appendChild(el('div','sr-slot'));
    p.appendChild(rail);
    var f=el('form');f.id='sr-ask';
    var i=el('input');i.type='text';i.placeholder='Demande à Marshall';i.setAttribute('aria-label','Demande à Marshall');
    var e=el('button');e.type='submit';e.setAttribute('aria-label','Envoyer');
    e.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V6M6 11.5 12 5.5l6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    f.appendChild(i);f.appendChild(e);p.appendChild(f);
    f.addEventListener('submit',function(ev){
      ev.preventDefault();
      var txt=i.value.trim();if(!txt)return;
      i.value='';demanderMarshall(txt);
    });
    var nets=el('div');nets.id='sr-nets';p.appendChild(nets);
    var pub=el('button',null,'Publier');pub.id='sr-publish';pub.type='button';
    pub.addEventListener('click',function(){var b=$('#ed-publish');if(b)b.click();});
    p.appendChild(pub);
    wrap.appendChild(p);

    /* Fenêtre rétrécie : le code mobile retrouve la barre d'agents à sa place */
    var mq=window.matchMedia('(max-width:760px)');
    function placerRail(){
      if(mq.matches){if(rail.parentNode===p&&flyout)flyout.parentNode.insertBefore(rail,flyout);}
      else if(rail.parentNode!==p)p.insertBefore(rail,f);
    }
    if(mq.addEventListener)mq.addEventListener('change',placerRail);else if(mq.addListener)mq.addListener(placerRail);
    placerRail();

    var row=$('#net-row');
    if(row){
      new MutationObserver(majReseauxEditeur).observe(row,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
      if(!row.children.length&&window.mcdRefonte)try{window.mcdRefonte.renderNets();}catch(err){}
      majReseauxEditeur();
    }
    var src=$('#ed-publish');
    if(src)new MutationObserver(copierVerrouPublier).observe(src,{attributes:true,attributeFilter:['class','title']});
    copierVerrouPublier();

    decorerOutils();decorerDepart();
    var rl=$('.ed-rail');if(rl)new MutationObserver(decorerOutils).observe(rl,{childList:true});
    var st=$('#ed-stage');if(st)new MutationObserver(decorerDepart).observe(st,{childList:true});
    var sw=$('.ed-stagewrap'),tm;
    if(sw)new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(revoirCanvas,60);}).observe(sw,{childList:true});
    revoirCanvas();
  }

  /* ===== Fiche d'agent en discussion ===== */
  function ficheDiscussion(){
    var chat=$('#marshall-agent-dock .madock-chat'),th=$('#marshall-agent-dock-thread');if(!chat||!th)return;
    var p=$('#marshall-agent-dock-detail>.madock-detail-head .madock-detail-copy p'),simple=$('#marshall-agent-dock-detail>.madock-actions-grid');
    var intro=$('#rf-ag-intro');
    if(!p||!simple){if(intro)intro.remove();return;}
    if(!intro){
      intro=el('div');intro.id='rf-ag-intro';intro.appendChild(el('div','rf-bu'));intro.appendChild(el('div','rf-bu','On commence par quoi ?'));
      chat.insertBefore(intro,th);
    }
    if(intro.firstChild.textContent!==p.textContent)intro.firstChild.textContent=p.textContent;
  }
  function suivreFiche(){
    var dock=$('#marshall-agent-dock');
    if(!dock){
      var att=new MutationObserver(function(){if($('#marshall-agent-dock')){att.disconnect();suivreFiche();}});
      att.observe(document.body,{childList:true});return;
    }
    var d=$('#marshall-agent-dock-detail'),tm;
    if(d)new MutationObserver(function(){clearTimeout(tm);tm=setTimeout(ficheDiscussion,40);}).observe(d,{childList:true,subtree:true});
    ficheDiscussion();
    suivreDiscussions(dock);
  }

  /* ===== Bulles de discussion ===== */
  var bulles=[],fils={},filCle=null,compte=null,tmSauve=0;
  var MAX_MSG=30,MAX_CHARS=160000;
  function cleStockage(uid){return 'mcd_rf_discussions_v1_'+uid;}
  function propre(html){
    // Rechargé dans la page : on retire ce qui s'exécuterait ou ne marcherait plus
    var t=document.createElement('template');t.innerHTML=html;
    $all('script,style,iframe,object,embed,form,button,input,textarea,select',t.content).forEach(function(n){n.remove();});
    $all('*',t.content).forEach(function(n){
      [].slice.call(n.attributes).forEach(function(a){
        if(/^on/i.test(a.name)||/^\s*javascript:/i.test(a.value))n.removeAttribute(a.name);
      });
    });
    $all('img,video,audio,source',t.content).forEach(function(n){if(/^(blob|data):/i.test(n.getAttribute('src')||''))n.remove();});
    return t.innerHTML;
  }
  function versMessages(noeuds){
    return noeuds.filter(function(n){return !n.classList.contains('mthink-msg')&&!$('.madock-typing,.madock-caret',n);}).slice(-MAX_MSG).map(function(n){
      return {r:n.classList.contains('user')?'user':n.classList.contains('error')?'error':'assistant',h:propre(n.innerHTML)};
    });
  }
  function sauver(){
    clearTimeout(tmSauve);tmSauve=0;
    if(!compte||!verifierCompte())return;
    var data={bulles:bulles.slice(),fils:{}},th=$('#marshall-agent-dock-thread');
    bulles.forEach(function(cle){
      var n=cle===filCle&&th?$all('.madock-msg',th):(fils[cle]||[]);
      if(n.length)data.fils[cle]=versMessages(n);
    });
    // Le plus ancien part d'abord : ce stockage est partagé avec les brouillons
    var txt=JSON.stringify(data),garde=0;
    while(txt.length>MAX_CHARS&&garde++<200){
      var pire=Object.keys(data.fils).sort(function(a,b){return data.fils[b].length-data.fils[a].length;})[0];
      if(!pire||!data.fils[pire].length)break;
      data.fils[pire].shift();txt=JSON.stringify(data);
    }
    try{localStorage.setItem(cleStockage(compte),txt);}catch(e){}
  }
  function sauverBientot(){if(!tmSauve)tmSauve=setTimeout(sauver,700);}
  function viderBulles(){
    bulles=[];fils={};
    $all('#rf-bulles .rf-bulle').forEach(function(b){b.remove();});
    var d=$('#marshall-agent-dock'),th=$('#marshall-agent-dock-thread');
    if(d){d.classList.remove('open');d.removeAttribute('data-chat-agent');}
    if(th)th.textContent='';
    filCle=null;majBulles();
  }
  function charger(uid){
    var data=null;
    try{data=JSON.parse(localStorage.getItem(cleStockage(uid))||'null');}catch(e){}
    if(!data||!Array.isArray(data.bulles))return;
    data.bulles.forEach(function(cle){
      if(!/^[a-z]+$/.test(cle))return;
      ajouterBulle(cle);
      var m=data.fils&&data.fils[cle];
      if(Array.isArray(m)&&m.length)fils[cle]=m.map(function(x){
        var n=el('div','madock-msg '+(x.r==='user'||x.r==='error'?x.r:'assistant'));n.innerHTML=propre(String(x.h||''));return n;
      });
    });
    var th=$('#marshall-agent-dock-thread');
    if(th&&filCle&&fils[filCle]){fils[filCle].forEach(function(n){th.appendChild(n);});delete fils[filCle];}
  }
  // Renvoie true si le compte n'a pas changé : chaque compte et chaque client géré a ses discussions
  function verifierCompte(){
    var d=donnees(),uid=d&&d.uid;
    if(!uid||uid===compte)return !!uid;
    var neuf=compte!==null;
    compte=uid;
    if(neuf)viderBulles();
    charger(uid);
    return false;
  }
  function cleOuverte(){return window.marshallAgentDockSelected||'marshall';}
  function ficheVisible(){var d=$('#marshall-agent-dock');return !!d&&d.classList.contains('open')&&!d.classList.contains('min');}
  function agentOccupe(){var d=$('#marshall-agent-dock');return !!d&&d.getAttribute('aria-busy')==='true';}
  function boutonAgent(cle){return $('#ed-agent-rail [data-agent-rail="'+cle+'"]');}
  function nomAgent(cle){var b=boutonAgent(cle),n=b&&$('b',b);return n?n.textContent:cle;}
  function imageAgent(cle){return 'images/agents/ag-'+cle+'.webp';}
  function majBulles(){
    $all('#rf-bulles .rf-bulle').forEach(function(b){b.classList.toggle('on',ficheVisible()&&b.getAttribute('data-agent')===cleOuverte());});
    html.classList.toggle('rf-a-bulles',bulles.length>0);
  }
  function secouer(cle){
    var b=$('#rf-bulles .rf-bulle[data-agent="'+cle+'"]');if(!b)return;
    b.classList.remove('rf-secoue');void b.offsetWidth;b.classList.add('rf-secoue');
  }
  function ajouterBulle(cle){
    if(bulles.indexOf(cle)>=0)return;
    var box=$('#rf-bulles');
    if(!box){
      var wrap=$('#ed-shell-wrap');if(!wrap)return;
      // role dialog : un clic sur les bulles ne désélectionne pas le calque
      box=el('div');box.id='rf-bulles';box.setAttribute('role','dialog');box.setAttribute('aria-label','Discussions en cours');wrap.appendChild(box);
    }
    bulles.push(cle);
    var b=el('div','rf-bulle');b.setAttribute('data-agent',cle);
    var a=el('button','rf-bulle-a');a.type='button';a.title=nomAgent(cle);a.setAttribute('aria-label','Reprendre la discussion avec '+nomAgent(cle));
    var im=el('img');im.src=imageAgent(cle);im.alt='';a.appendChild(im);
    a.addEventListener('click',function(){ouvrirBulle(cle);});
    var x=el('button','rf-bulle-x','×');x.type='button';x.title='Fermer cette discussion';x.setAttribute('aria-label','Fermer la discussion avec '+nomAgent(cle));
    x.addEventListener('click',function(){fermerBulle(cle);});
    b.appendChild(a);b.appendChild(x);box.appendChild(b);
    majBulles();window.dispatchEvent(new Event('resize'));sauverBientot();
  }
  function ouvrirBulle(cle){
    if(ficheVisible()&&cle===cleOuverte()){var pin=$('#marshall-agent-dock-pin');if(pin)pin.click();majBulles();return;}
    if(agentOccupe()){secouer(cleOuverte());return;}
    var b=boutonAgent(cle);if(b)b.click();
    majBulles();
  }
  function fermerBulle(cle){
    if(agentOccupe()&&cle===cleOuverte()){secouer(cle);return;}
    var d=$('#marshall-agent-dock');
    if(cle===cleOuverte()&&d){
      var pin=$('#marshall-agent-dock-pin');if(ficheVisible()&&pin)pin.click();
      d.removeAttribute('data-chat-agent');filCle=null;
    }
    delete fils[cle];
    bulles=bulles.filter(function(k){return k!==cle;});
    var b=$('#rf-bulles .rf-bulle[data-agent="'+cle+'"]');if(b)b.remove();
    majBulles();window.dispatchEvent(new Event('resize'));sauverBientot();
  }
  function fermerQuestion(){var q=$('#rf-ask-agent');if(q)q.remove();document.removeEventListener('mousedown',clicDehors,true);}
  function clicDehors(e){if(!e.target.closest('#rf-ask-agent'))fermerQuestion();}
  function poserQuestion(bouton,cle){
    fermerQuestion();
    var wrap=$('#ed-shell-wrap');if(!wrap)return;
    var q=el('div');q.id='rf-ask-agent';q.setAttribute('role','dialog');q.setAttribute('aria-label','Démarrer une discussion');
    var im=el('img');im.src=imageAgent(cle);im.alt='';q.appendChild(im);
    var p=el('p',null,'Démarrer une discussion avec ');p.appendChild(el('b',null,nomAgent(cle)));p.appendChild(document.createTextNode(' ?'));q.appendChild(p);
    var bas=el('div','rf-ask-b'),non=el('button','rf-ask-non','Annuler'),oui=el('button','rf-ask-oui','Démarrer');
    non.type=oui.type='button';bas.appendChild(non);bas.appendChild(oui);q.appendChild(bas);
    non.addEventListener('click',fermerQuestion);
    oui.addEventListener('click',function(){
      fermerQuestion();
      var b=boutonAgent(cle);if(!b)return;
      b.click();ajouterBulle(cle);majBulles();
    });
    q.addEventListener('keydown',function(e){if(e.key==='Escape')fermerQuestion();});
    wrap.appendChild(q);
    var z=parseFloat(html.style.zoom)||1,r=bouton.getBoundingClientRect();
    q.style.top=Math.max(14,Math.min(r.top/z,window.innerHeight/z-q.offsetHeight-14))+'px';
    oui.focus();
    document.addEventListener('mousedown',clicDehors,true);
  }
  function brancherAgents(){
    var rail=$('#ed-agent-rail');if(!rail)return;
    // Seuls les vrais clics passent par la question : les liens ?agent= et le code gardent l'ouverture directe
    rail.addEventListener('click',function(e){
      var b=e.target.closest('[data-agent-rail]');
      if(!b||!e.isTrusted||b.classList.contains('locked'))return;
      var cle=b.getAttribute('data-agent-rail');
      if(agentOccupe()&&cle!==cleOuverte()){e.stopPropagation();secouer(cleOuverte());return;}
      if(bulles.indexOf(cle)>=0)return;
      e.stopPropagation();poserQuestion(b,cle);
    },true);
  }
  function suivreDiscussions(dock){
    var th=$('#marshall-agent-dock-thread');
    if(th){
      filCle=dock.getAttribute('data-chat-agent');
      // Le fil est vidé à chaque changement d'agent : les messages retirés sont gardés pour cet agent
      var obs=new MutationObserver(function(recs){
        var cle=dock.getAttribute('data-chat-agent');
        if(cle===filCle){sauverBientot();return;}
        var gardes=[];
        recs.forEach(function(r){[].forEach.call(r.removedNodes,function(n){if(n.nodeType===1&&n.classList.contains('madock-msg'))gardes.push(n);});});
        if(filCle&&gardes.length)fils[filCle]=gardes;
        filCle=cle;
        var retour=fils[cle];
        if(retour){
          th.textContent='';retour.forEach(function(n){th.appendChild(n);});th.scrollTop=th.scrollHeight;
          delete fils[cle];obs.takeRecords();
        }
        sauverBientot();
      });
      obs.observe(th,{childList:true,subtree:true});
      // La fiche se crée au premier clic : son fil est déjà vidé quand on arrive ici
      if(filCle&&fils[filCle]){
        fils[filCle].forEach(function(n){th.appendChild(n);});delete fils[filCle];obs.takeRecords();th.scrollTop=th.scrollHeight;
      }
    }
    new MutationObserver(function(){
      if(ficheVisible())ajouterBulle(cleOuverte());
      majBulles();
    }).observe(dock,{attributes:true,attributeFilter:['class']});
    if(ficheVisible())ajouterBulle(cleOuverte());
  }

  /* Atelier : la pastille reste active, seule sa place change */
  function rangerAtelier(){
    var l=$('#at-lanceur'),bas=$('#side .side-bottom');
    if(l&&bas&&l.parentNode!==bas)bas.insertBefore(l,bas.firstChild);
    return !!l;
  }

  /* Cercle de couleur : suit la barre de couleur de l'élément sélectionné et ouvre le même choix */
  function majCouleur(){
    var mix=$('#eds-mix'),suiv=mix&&$('[data-eds-pas="1"]',mix);if(!suiv)return;
    var c=$('#rf-couleur');
    if(!c){
      c=el('button','rf-couleur ctx-colbtn');c.id='rf-couleur';c.type='button';c.hidden=true;
      c.title='Couleur de l’élément sélectionné';c.setAttribute('aria-label',c.title);
      c.addEventListener('click',function(){var b=$('#ed-qbar .ctx-colbtn');if(b)b.click();});
      suiv.insertAdjacentElement('afterend',c);
    }
    var tb=$('.ed-toolbar'),bouton=$('#ed-qbar .ctx-colbtn'),barre=$('#ed-qbar .ctx-colbar');
    var teinte=barre&&barre.style.background,ok=!!(tb&&tb.classList.contains('has-sel')&&bouton&&bouton.offsetWidth&&teinte&&teinte!=='transparent');
    c.hidden=!ok;
    if(ok)c.style.background=teinte;
  }
  function suivreCouleur(){
    majCouleur();
    var tb=$('.ed-toolbar'),sw=$('.ed-stagewrap');
    if(tb)new MutationObserver(majCouleur).observe(tb,{attributes:true,attributeFilter:['class','style'],subtree:true});
    if(sw)new MutationObserver(majCouleur).observe(sw,{childList:true});
  }

  /* Petites fiches : calées sous l'icône cliquée, comme l'espace compte */
  function caleFiches(){
    document.addEventListener('click',function(e){
      var b=e.target.closest&&e.target.closest('#hdr-books,#hub-gear,#mcd-gear-hdr,#mcd-bell');if(!b||!b.offsetWidth)return;
      var z=parseFloat(html.style.zoom)||1,r=b.getBoundingClientRect();
      html.style.setProperty('--rf-fiche-droite',Math.max(14,window.innerWidth/z-r.right/z)+'px');
      html.style.setProperty('--rf-fiche-haut',(r.bottom/z+10)+'px');
    },true);
  }

  var prevu=0;
  function plusTard(){if(prevu)return;prevu=setTimeout(function(){prevu=0;decorerBarre();majAccueil();verifierCompte();rangerAtelier();},0);}

  function demarrer(){
    try{
      decorerBarre();construireAccueil();majAccueil();construireEditeur();suivreFiche();brancherAgents();caleFiches();suivreCouleur();
      new MutationObserver(plusTard).observe($('#hub'),{attributes:true,attributeFilter:['class']});
      var app=$('#app');if(app)new MutationObserver(plusTard).observe(app,{attributes:true,attributeFilter:['class']});
      var fan=$('#fan-wrap');
      if(fan)new MutationObserver(placerPilule).observe(fan,{attributes:true,subtree:true,attributeFilter:['class','hidden']});
      ['#badge-sched','#badge-drafts'].forEach(function(s){var b=$(s);if(b)new MutationObserver(plusTard).observe(b,{attributes:true,attributeFilter:['style'],childList:true,characterData:true,subtree:true});});
      window.addEventListener('resize',plusTard);
      window.addEventListener('pagehide',sauver);
      verifierCompte();
      if(!rangerAtelier()){
        var attAtelier=new MutationObserver(function(){if(rangerAtelier())attAtelier.disconnect();});
        attAtelier.observe(document.body,{childList:true});
      }
      setInterval(majAccueil,60000);
    }catch(e){console.warn('Refonte',e);}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',demarrer);else demarrer();
})();
