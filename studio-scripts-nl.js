/* Scriptbibliotheek — Studio Social (Mon Copain Digital)
   Videoscripts (Reels, TikTok, Shorts, voice-over, avatars) en kant-en-klare bijschriften voor posts.
   De [blokhaken] vervang je zelf, of laat je invullen door Marshall (“Aanpassen met Marshall”). */
(function(){
  var L=[];
  /* Labels van de onderdelen van een videoscript (te vertalen) */
  var LB={hook:'🎬 HOOK (0–3 s)',screen:'In beeld',body:'📍 OPBOUW',cta:'👉 CALL-TO-ACTION',q1:'“',q2:'”'};
  function V(o,s,n,d,hook,ecran,steps,cta){
    L.push({t:'video',o:o,s:s,n:n,d:d,x:LB.hook+'\n'+LB.q1+hook+LB.q2+'\n['+LB.screen+': '+ecran+']\n\n'+LB.body+'\n'+steps.join('\n')+'\n\n'+LB.cta+'\n'+LB.q1+cta+LB.q2});
  }
  function P(o,s,n,txt){ L.push({t:'post',o:o,s:s,n:n,x:txt}); }
  /* Creatieprompts: I = beeld, W = video (Wan 2.2 / Veo). Geschreven in de taal van de app; Marshall herschrijft ze tot een professionele prompt vóór het genereren. */
  function I(o,s,n,txt){ L.push({t:'img',o:o,s:s,n:n,x:txt}); }
  function W(o,s,n,d,txt){ L.push({t:'vid',o:o,s:s,n:n,d:d,x:txt}); }

  /* =================================================================== VIDEOSCRIPTS — ALLE BRANCHES */
  V('vente','tous','Het probleem → de oplossing','30 s',
    'Herken jij dit ook: [veelvoorkomend probleem van je klanten]?','het probleem in 5 woorden, grote tekst',
    ['(3–10 s) “We horen het elke dag: [typische uitspraak van een klant].”','(10–22 s) “Bij [naam] hebben we [jouw oplossing]: [voordeel 1], [voordeel 2].” [Shot: jij aan het werk]','(22–27 s) “Het resultaat: [concreet resultaat].” [Shot: het resultaat]'],
    'Stuur ons “[trefwoord]” in een DM, dan reageren we vandaag nog.');
  V('vente','tous','Voor / na','20 s',
    'Kijk het verschil.','VOOR (stilstaand shot, 1 s)',
    ['(2–8 s) [Shot voor] “Zo zag het eruit: [zichtbaar mankement].”','(8–15 s) [Snelle overgang] “En zo na [duur / ingreep].” [Shot na]','(15–18 s) “Wat het verschil maakte: [het cruciale detail].”'],
    'Ook zo’n resultaat? Link in bio.');
  V('vente','tous','3 redenen om te kiezen voor…','30 s',
    '3 redenen waarom onze klanten voor [product/dienst] kiezen.','“3 REDENEN” + oplopend nummer',
    ['(3–10 s) “1: [reden 1, concreet].” [Illustratief shot]','(10–17 s) “2: [reden 2].”','(17–25 s) “En 3, de belangrijkste: [reden 3].”'],
    'Welke vind jij het belangrijkst? Laat het weten in de reacties.');
  V('vente','tous','Het tijdelijke aanbod','15 s',
    'Alleen tot [datum]!','[AANBOD] heel groot, aftellende timer',
    ['(3–8 s) “[Concreet aanbod] op [product/dienst].” [Productshot]','(8–12 s) “Waarom? [eerlijke reden: verjaardag, einde van de reeks…].”'],
    'Boek vóór [datum]: link in bio.');
  V('vente','tous','Bezwaar weerlegd','30 s',
    '“Dat is te duur.” Horen we vaak. Dit is de waarheid.','het bezwaar tussen aanhalingstekens',
    ['(3–12 s) “Waar je echt voor betaalt: [wat inbegrepen is, levensduur, tijdwinst].”','(12–22 s) “Vergeleken met [alternatief] komt het neer op [simpele berekening of vergelijking].”','(22–27 s) “En bovendien: [garantie / proefperiode / gespreide betaling].”'],
    'Nog een vraag? Stel ’m in de reacties, we beantwoorden alles.');
  V('vente','tous','Demo in 3 handelingen','20 s',
    'Zo werkt het, in 3 handelingen.','handen + product, close-up',
    ['(2–7 s) “Eén: [handeling 1].”','(7–12 s) “Twee: [handeling 2].”','(12–17 s) “Drie: [handeling 3]. En dat is alles.” [Shot resultaat]'],
    'Verkrijgbaar bij [naam] / op [website].');
  V('engagement','tous','Wat je nog niet wist over…','30 s',
    'Niemand vertelt je dit over [onderwerp].','tekst die zich “onthult”',
    ['(3–12 s) “[Verrassend maar waar feit].”','(12–22 s) “Concreet betekent dat: [gevolg voor de klant].”','(22–27 s) “Onze tip: [simpele tip].”'],
    'Sla deze video op zodat je het niet vergeet.');
  V('engagement','tous','Poll: ben jij meer…','15 s',
    'Team [optie A] of team [optie B]?','A vs B, splitscreen',
    ['(3–7 s) [Shot optie A] “[A]: [sterk punt van A].”','(7–11 s) [Shot optie B] “[B]: [sterk punt van B].”'],
    'Stem in de reacties: A of B?');
  V('engagement','tous','POV klant','15 s',
    'POV: je hebt net [situatie van de klant].','“POV: …” bovenaan in beeld',
    ['(3–10 s) [Scène vanuit het perspectief van de klant, zonder tekst of met trending muziek]','(10–13 s) [Reactie / glimlach / resultaat]'],
    'Tag iemand die dit nodig heeft.');
  V('engagement','tous','Fouten die je moet vermijden','30 s',
    'De 3 fouten die ik constant zie bij [vakgebied].','rood kruis ❌ bij elke fout',
    ['(3–11 s) “Fout 1: [fout]. Doe in plaats daarvan: [juiste reflex].”','(11–19 s) “Fout 2: [fout].”','(19–26 s) “Fout 3, de ergste: [fout].”'],
    'Deed jij er ook eentje? Geef het toe in de reacties 😄');
  V('engagement','tous','Mythe of feit?','25 s',
    '“[Misvatting].” Mythe of feit?','MYTHE / FEIT knipperend in beeld',
    ['(3–10 s) “Veel mensen denken dat [misvatting].”','(10–20 s) “In werkelijkheid: [waarheid + bewijs of voorbeeld].”'],
    'Volg ons voor de volgende misvatting.');
  V('pedagogie','tous','Snelle tutorial in 3 stappen','30 s',
    'Zo bereik je [gewenst resultaat] in 3 stappen.','“IN 3 STAPPEN” + nummers',
    ['(3–11 s) “Stap 1: [actie].” [Close-up]','(11–19 s) “Stap 2: [actie]. Tip: [pro-detail].”','(19–26 s) “Stap 3: [actie]. En klaar.” [Shot resultaat]'],
    'Sla op om het later na te doen.');
  V('pedagogie','tous','De tip van de pro','20 s',
    'De tip die ik al mijn klanten geef.','“PROTIP”',
    ['(3–12 s) “[Concrete tip die je meteen kunt toepassen].”','(12–17 s) “Waarom? Omdat [simpele uitleg in één zin].”'],
    'Deel dit met iemand die het nodig heeft.');
  V('pedagogie','tous','Vraag van een klant','30 s',
    'Iemand vroeg me: “[echte vraag van een klant]?”','de vraag in een chatballon',
    ['(3–15 s) “Het korte antwoord: [antwoord].”','(15–25 s) “Het volledige antwoord: [nuance, uitzondering].”'],
    'Stel je vraag in de reacties, ik antwoord met een video.');
  V('pedagogie','tous','Vakjargon in 30 s','30 s',
    '[Vakterm]: wat betekent dat nou echt?','de term + definitie die verschijnt',
    ['(3–13 s) “Simpel gezegd: [definitie in gewone woorden].”','(13–24 s) “Voorbeeld: [voorbeeld uit het dagelijks leven].”','(24–27 s) “En voor jou betekent dat: [impact].”'],
    'Welk woord moet ik hierna uitleggen?');
  V('coulisses','tous','Een dag bij ons','45 s',
    '[Tijdstip ’s ochtends]. Een dag bij [naam] begint.','tijd in beeld + openingsshot',
    ['(3–15 s) [Opening, voorbereiding, koffie, team]','(15–30 s) [De kern van het vak: 3 snelle shots van 2 s] “Wat je nooit ziet: [detail].”','(30–40 s) [Sluiting / trots moment] “En dit is ons favoriete moment.”'],
    'Wil je nog iets anders achter de schermen zien? Laat het ons weten.');
  V('coulisses','tous','Maak kennis met het team','30 s',
    'Ze zijn met [aantal] en zonder hen zou [naam] niet bestaan.','voornamen die verschijnen',
    ['(3–25 s) [Een shot van 3–4 s per persoon] “[Voornaam], [rol], [anekdote of verborgen talent].”'],
    'Zeg hallo tegen het team in de reacties 👋');
  V('coulisses','tous','Waarom ik … ben begonnen','45 s',
    'In [jaar] gooide ik alles om voor [project].','oude foto of shot recht in de camera',
    ['(3–18 s) “Vroeger was ik [situatie]. Op een dag [kantelmoment].”','(18–33 s) “De begintijd: [moeilijkheid] — maar [waardoor je doorzette].”','(33–40 s) “Vandaag [waar je trots op bent].”'],
    'Bedankt dat je er bent. Volg ons om te zien hoe het verhaal verdergaat.');
  V('coulisses','tous','Maakproces versneld','15 s',
    'Van niks tot [eindproduct] in 15 seconden.','timelapse, tekst “15 s”',
    ['(2–12 s) [Versnelde beelden van het maken / bereiden, ritmische muziek]','(12–14 s) [Eindshot, product mooi in beeld]'],
    'Had jij gedacht dat het [echte duur] duurde?');
  V('temoignage','tous','De klant vertelt','30 s',
    '“[Krachtige uitspraak van de klant].”','quote + voornaam van de klant',
    ['(3–12 s) [Klant recht in de camera] “Eerst [probleem].”','(12–22 s) “Met [naam] [wat er veranderd is].”','(22–27 s) “Ik raad het aan omdat [reden].”'],
    'Probeer het ook: link in bio.');
  V('temoignage','tous','De review voorgelezen','20 s',
    'We kregen deze review… en dat hadden we niet zien aankomen.','screenshot van de review (5 sterren)',
    ['(3–14 s) [Voorlezen van een stuk uit de review, echte screenshot in beeld]','(14–18 s) “Dankjewel [voornaam], dit raakt ons echt.”'],
    'Ben je al eens langs geweest? Laat een review achter 🙏');
  V('temoignage','tous','Resultaat in cijfers','20 s',
    '[Echt cijfer] in [periode]. Zo hebben we het gedaan.','het cijfer extra groot',
    ['(3–10 s) “Toen [klant] bij ons kwam, [startpunt].”','(10–17 s) “We hebben [wat jullie gedaan hebben]. Resultaat: [cijfer].”'],
    'Wil je dezelfde analyse? Stuur ons een bericht.');
  V('lancement','tous','De teaser','10 s',
    'Er komt iets aan op [datum].','wazig / verborgen shot, datum groot in beeld',
    ['(2–8 s) [Details in extreme close-up, zonder alles te laten zien] “Meer verklappen we niet…”'],
    'Zet je meldingen aan zodat je het niet mist.');
  V('lancement','tous','De onthulling','30 s',
    'Het is zover: [nieuwigheid] is er!','onthulling met effect + naam',
    ['(3–13 s) “We werken er al [duur] aan: [wat het is].”','(13–23 s) “Wat het uniek maakt: [verschil 1], [verschil 2].”','(23–27 s) “Verkrijgbaar vanaf [datum], voor [prijs als die vaststaat].”'],
    'De eerste [aantal] krijgen [voordeel]: link in bio.');
  V('lancement','tous','Aftellen: nog 3 dagen','10 s',
    'Nog maar 3 dagen.','“NOG 3 DAGEN” enorm groot',
    ['(2–8 s) [Elke dag een visuele hint] “Hint van de dag: [hint].”'],
    'Raad het in de reacties!');
  V('evenement','tous','Uitnodiging voor het event','20 s',
    'Op [datum] verwachten we je!','datum + locatie groot in beeld',
    ['(3–10 s) “Op het programma: [hoogtepunt 1], [hoogtepunt 2].”','(10–16 s) “Het is [gratis / op reservering], in [locatie], vanaf [tijd].”'],
    'Zeg “ik kom” in de reacties, dan houden we een plekje voor je vrij.');
  V('evenement','tous','Terugblik op het event','30 s',
    'Bedankt! Jullie waren met [aantal] op [dag].','wide shot van het publiek',
    ['(3–25 s) [Ritmische montage van de beste momenten, 1,5 s per shot, glimlachen, details]','(25–28 s) “Dank aan [partners / team].”'],
    'Was jij erbij? Tag jezelf in de video!');
  V('fidelite','tous','Bedankt aan de community','20 s',
    '[Aantal] volgers. We kunnen het nog steeds niet geloven.','het cijfer dat oploopt',
    ['(3–15 s) “Toen we begonnen, [herinnering]. Vandaag, dankzij jullie, [trots].”'],
    'Om dat te vieren: [kleine attentie / winactie]. Details in het bijschrift.');
  V('fidelite','tous','Winactie','20 s',
    'Maak kans op [prijs]!','🎁 WINACTIE',
    ['(3–15 s) “Zo doe je mee: 1. volg ons, 2. like, 3. tag [aantal] vrienden. Winnaar bekend op [datum].”'],
    'Succes allemaal! Voorwaarden in het bijschrift.');
  V('recrutement','tous','We zoeken versterking','30 s',
    'We zoeken een [functie]. Ben jij het misschien?','VACATURE + functie',
    ['(3–12 s) “Bij ons [echte sfeer, 2 teamshots].”','(12–22 s) “Wat we zoeken: [kwaliteit 1], [kwaliteit 2]. Geen [diploma / ervaring] nodig als [voorwaarde].”','(22–27 s) “[Contract, werktijden, locatie].”'],
    'Stuur ons een bericht of deel dit met de juiste persoon.');

  /* =================================================================== BIJSCHRIFTEN — ALLE BRANCHES */
  P('vente','tous','Eerst het voordeel',
'[Het resultaat dat je klant wil], zonder [het gedoe waar hij tegen opziet]. ✨\n\nPrecies dat biedt [product/dienst]:\n✔️ [voordeel 1]\n✔️ [voordeel 2]\n✔️ [voordeel 3]\n\n📍 [locatie / levering / online]\n👉 [Boek / Bestel] via de link in bio.');
  P('vente','tous','Probleem – Agitatie – Oplossing',
'[Probleem]? Je bent niet de enige.\n\nEn hoe langer je wacht, hoe meer [concreet gevolg]. 😬\n\nHet goede nieuws: [oplossing in één zin].\nBij [naam] [hoe jullie het concreet aanpakken].\n\n💬 Stuur “[trefwoord]” in een DM om erover te praten.');
  P('vente','tous','Tijdelijk aanbod',
'⏳ Alleen tot [datum]:\n[concreet aanbod] op [product/dienst].\n\nWaarom? [eerlijke reden].\n\nDaarna geldt weer de normale prijs. Geen verlenging. 🙃\n\n👉 Link in bio / [telefoon]');
  P('vente','tous','Het topproduct',
'Als je maar één ding bij ons zou proberen, dan is het dit. 👇\n\n[Product]: [wat het uniek maakt, 1 zintuiglijke of concrete zin].\n\nOnze klanten kiezen het vanwege [reden 1].\n\nAl geprobeerd? Geef het een cijfer van 1 tot 10 in de reacties!');
  P('vente','tous','Eerlijke vergelijking',
'[Optie A] of [onze oplossing]? Laten we eerlijk zijn. 🤝\n\n[Optie A]: ✅ [voordeel] / ❌ [beperking]\n[Onze oplossing]: ✅ [voordeel] / ✅ [voordeel] / ❌ [eerlijk toegegeven beperking]\n\nVoor wie het is: [ideaal profiel].\nVoor wie het niet is: [profiel].\n\nVragen? We antwoorden in de reacties.');
  P('engagement','tous','Open vraag',
'Vraagje van de dag 👇\n\n[Simpele vraag die je klant aangaat]?\n\nBij ons is het [jouw antwoord met een persoonlijke touch].\n\nJouw beurt! We lezen alle reacties.');
  P('engagement','tous','Dit of dat',
'Ben jij meer…\n\n🅰️ [optie A]\nof\n🅱️ [optie B]?\n\nAntwoord gewoon A of B in de reacties. Vrijdag tellen we de stemmen! 📊');
  P('engagement','tous','Maak de zin af',
'Maak de zin af 👇\n\n“Een perfecte [dag / moment] is als…”\n\nWij beginnen: [jouw antwoord]. 😄');
  P('engagement','tous','Geef toe…',
'Geef toe… jij [kleine gewoonte of veelgemaakte fout in jouw vakgebied] ook? 🙈\n\nGeen oordeel hier. Maar hier is een simpele tip: [tip].\n\nTag die ene persoon die dit ALTIJD doet 😂');
  P('pedagogie','tous','Carrousel: stappenplan',
'📌 Sla deze post op, je gaat ’m nodig hebben.\n\nZo bereik je [resultaat] in [aantal] stappen:\n\n1️⃣ [stap 1]\n2️⃣ [stap 2]\n3️⃣ [stap 3]\n4️⃣ [stap 4]\n\n💡 De fout die je moet vermijden: [fout].\n\nVragen? Laat een reactie achter 👇');
  P('pedagogie','tous','Misvatting',
'❌ “[Misvatting]”\n✅ In werkelijkheid: [waarheid].\n\nWaarom geloven we het? [Oorsprong van de misvatting].\nWat het voor jou betekent: [praktisch gevolg].\n\nGeloofde jij het ook? Wees eerlijk 😉');
  P('pedagogie','tous','Checklist',
'✅ De checklist voordat je [belangrijke actie voor je klant]:\n\n☐ [punt 1]\n☐ [punt 2]\n☐ [punt 3]\n☐ [punt 4]\n☐ [punt 5]\n\nAlles afgevinkt? Dan zit je goed. 💪\nSla op voor de grote dag.');
  P('pedagogie','tous','Kerncijfer',
'[Geverifieerd cijfer] 😮\n\nDat is [wat dit cijfer voorstelt] (bron: [bron]).\n\nWat het voor jou betekent: [simpele uitleg].\nOnze tip: [actie].\n\nWist jij dit?');
  P('coulisses','tous','Achter de schermen vandaag',
'Wat je niet ziet voordat [moment waarop de klant je ziet]. 👀\n\n[Tijd]: [taak]\n[Tijd]: [taak]\n[Tijd]: [taak]\n\nNiet echt glamoureus, maar daardoor [resultaat dat de klant waardeert]. ❤️');
  P('coulisses','tous','Teamportret',
'Je kent haar/hem vast… maar ken je [voornaam] echt? 👋\n\n🔧 Rol: [rol]\n⏳ Bij ons sinds: [duur]\n💛 Waar ze/hij het meest van houdt: [anekdote]\n🤫 Verborgen talent: [talent]\n\nEen lief berichtje voor [voornaam]? 👇');
  P('coulisses','tous','Ons verhaal',
'Het begon allemaal [plek / onverwacht moment]. 🌱\n\n[2–3 zinnen: het kantelmoment, de moeilijke begintijd, waardoor je doorzette.]\n\n[Aantal] jaar later: [waar je trots op bent].\n\nBedankt dat jij deel uitmaakt van ons verhaal. 🙏');
  P('coulisses','tous','Onze waarden in de praktijk',
'Wij doen niet aan [gangbare praktijk in de branche]. Nooit. 🙅\n\nWaarom? Omdat [overtuiging].\n\nIn plaats daarvan [jouw aanpak], ook al kost dat ons [nadeel].\n\nDat is een bewuste keuze. En jij, vind jij dat belangrijk?');
  P('temoignage','tous','Klantreview',
'⭐⭐⭐⭐⭐\n“[Echte quote van de klant]”\n— [Voornaam], [plaats / context]\n\nDankjewel [voornaam]! Dit soort berichten is onze brandstof. 🔋\n\nOok [actie]? Link in bio.');
  P('temoignage','tous','Klantcase',
'📂 Klantcase: [voornaam / bedrijf]\n\n🎯 De vraag: [behoefte]\n🛠️ Wat we deden: [oplossing]\n📈 Het resultaat: [concreet resultaat]\n\n“[Korte quote]”\n\nHeb jij een vergelijkbare vraag? Stuur ons een bericht.');
  P('lancement','tous','Nieuw',
'🆕 NIEUW!\n\n[Naam van de nieuwigheid]: [wat het is in één zin].\n\nWaarom we het gemaakt hebben: [klantbehoefte].\nWat het voor jou verandert: [voordeel].\n\n📅 Vanaf [datum] · [prijs indien bekend]\n👉 [Waar te koop / te reserveren]');
  P('lancement','tous','Teaser',
'Er is iets in de maak… 👀\n\nHint: [mysterieuze hint].\n\nSave the date: [datum] om [tijd].\nJouw gok in de reacties 👇');
  P('evenement','tous','Aankondiging event',
'📅 [Datum] · 📍 [Locatie] · 🕒 [Tijd]\n\n[Naam van het event]: [belofte in één zin].\n\nOp het programma:\n• [hoogtepunt 1]\n• [hoogtepunt 2]\n• [hoogtepunt 3]\n\n[Gratis / Beperkt aantal plekken] → [hoe je je inschrijft]');
  P('evenement','tous','Sluiting / openingstijden',
'📢 Praktische info\n\n[Naam] is [gesloten / open met aangepaste tijden] van [datum] tot en met [datum].\n\n🕒 [Nieuwe openingstijden]\n\nTot [datum]! Bedankt voor je begrip. 🙏');
  P('evenement','tous','Feestdag / seizoen',
'[Feestdag / seizoen] komt eraan! [Emoji]\n\nSpeciaal voor de gelegenheid: [aanbod, product of activiteit].\n\nVerkrijgbaar van [datum] tot [datum], zolang de voorraad strekt.\n\nHoe vier jij het? 👇');
  P('fidelite','tous','Bedankt klanten',
'[Aantal] [klanten / bestellingen / jaar]. 🥹\n\nWe wilden gewoon even DANKJEWEL zeggen.\n\nAan wie terugkomt, aan wie ons aanraadt, aan wie ons lieve berichtjes stuurt.\n\nOm dat te vieren: [cadeau / korting / verrassing].');
  P('fidelite','tous','Winactie',
'🎁 WINACTIE 🎁\n\nMaak kans op [concrete prijs]!\n\nZo doe je mee:\n1️⃣ Volg @[account]\n2️⃣ Like deze post\n3️⃣ Tag [aantal] vrienden in de reacties\n\nDe winnaar wordt geloot op [datum]. Succes!\n\nDeze actie wordt niet gesponsord of beheerd door [platform]. De winnaar krijgt een DM.');
  P('fidelite','tous','Klantenkaart',
'Kom je vaak langs? Dat is ons opgevallen. 😉\n\nNieuw: [hoe de kaart / het programma werkt].\n➡️ [concrete beloning] na [aantal] [aankopen / bezoeken].\n\nVraag je kaart bij je volgende bezoek!');
  P('recrutement','tous','Vacature',
'🚀 WE ZOEKEN: [functie]\n\n📍 [Locatie] · [Type contract] · [Werktijden]\n\nWat je gaat doen: [taken in 2 regels]\nWat we zoeken: [kwaliteiten, niet per se diploma’s]\nWat we bieden: [sfeer, voordelen, groeikansen]\n\n📩 DM of [e-mail]. Deel dit, misschien help je er iemand mee!');

  /* =================================================================== RESTAURANT / CAFÉ / BAKKERIJ */
  V('vente','resto','Het signatuurgerecht','20 s',
    'Het gerecht dat het vaakst besteld wordt.','close-up: dampend / smeltend',
    ['(3–10 s) [Opmaken van het bord in close-up] “[Naam van het gerecht]: [belangrijkste ingrediënten, bereiding].”','(10–16 s) [De eerste hap / reactie] “Huisgemaakt, elke [dag / ochtend].”'],
    'Reserveer je tafel: link in bio.');
  V('coulisses','resto','6 uur ’s ochtends in de keuken','30 s',
    '6 uur. Het restaurant slaapt nog, wij niet.','tijd in beeld',
    ['(3–12 s) [Levering, kratten] “De [producten] komen van [leverancier], op [afstand] van hier.”','(12–24 s) [Mise-en-place: snijden, saus, deeg] “Alles wordt hier vers bereid, vanochtend.”','(24–27 s) [Zaal klaar, lichten aan]'],
    'Zullen we vanmiddag een tafel voor je vrijhouden?');
  V('engagement','resto','Raad het gerecht','15 s',
    'Raad het gerecht voordat de video afloopt.','extreem strakke close-ups',
    ['(2–11 s) [5 ingrediënten in extreme close-up, elk 2 s]','(11–13 s) [Onthulling van het gerecht]'],
    'Had je het goed? Eerlijk antwoord in de reacties 😄');
  V('fidelite','resto','Menu van de week','20 s',
    'Het weekmenu is er!','MENU + dagen',
    ['(3–16 s) [Eén shot per gerecht, elk 3 s] “Maandag [gerecht], dinsdag [gerecht]…”'],
    'Waar heb jij zin in? Reserveer via [telefoon].');
  P('vente','resto','Dagschotel',
'🍽️ Vandaag op het krijtbord:\n\n[Voorgerecht]\n[Hoofdgerecht]\n[Dessert]\n\n[Menu]: € [prijs]\n\nHuisgemaakt met [lokaal product] van [producent]. 🌿\n📞 [Telefoon] om te reserveren · 📍 [adres]');
  P('coulisses','resto','De producent',
'Dit is [voornaam], die ons al [duur] [product] levert. 👨‍🌾\n\n[Zijn boerderij / werkplaats] ligt op [afstand] van hier. [Detail dat de kwaliteit laat zien.]\n\nDankzij hem smaakt onze [gerecht] zo goed.\n\nWij werken supergraag lokaal. En jij, vind jij dat belangrijk?');
  P('engagement','resto','Zoet of hartig',
'Ontbijt: ben jij meer… 🥐 of 🍳?\n\nWij hebben gekozen: [jouw voorkeur + specialiteit].\n\nAntwoord met een emoji 👇');
  P('evenement','resto','Speciale avond',
'🎉 [Dag]avond: [naam van de avond]!\n\n[Menu / entertainment / muziek] vanaf [tijd].\n€ [prijs] per persoon, [drankje inbegrepen of niet].\n\nMaximaal [aantal] plaatsen: reserveren verplicht via [telefoon].');

  /* =================================================================== BEAUTY / KAPPER / SCHOONHEIDSSALON */
  V('vente','beaute','Transformatie in 15 s','15 s',
    'Zo kwam ze binnen…','VOOR',
    ['(2–10 s) [Stappen versneld: knippen, kleuren, stylen]','(10–13 s) [Onthulling, de klant draait zich om / bekijkt zichzelf] “…en zo ging ze weer naar buiten.”'],
    'Boek jouw transformatie: link in bio.');
  V('pedagogie','beaute','De fout die je haar beschadigt','25 s',
    'Stop hiermee na het wassen van je haar.','❌ + handeling om te vermijden',
    ['(3–12 s) “Wrijven met de handdoek zorgt voor [schade].”','(12–20 s) “Doe in plaats daarvan: [juiste handeling], en [product / tip].”'],
    'Sla op en stuur door naar die vriendin die altijd wrijft 😄');
  V('engagement','beaute','Welke kleur dit najaar?','15 s',
    'Koper, karamel of koel kastanjebruin?','3 kleuren, nummers 1-2-3',
    ['(3–12 s) [3 echte resultaten, elk 3 s, genummerd]'],
    'Stem 1, 2 of 3 in de reacties!');
  V('coulisses','beaute','De behandeling van binnenuit','30 s',
    'Dit gebeurt er tijdens je [naam van de behandeling].','zachte sfeer, gedimd licht',
    ['(3–24 s) [Stappen van de behandeling, handen, producten, ontspanning] “Eerst [stap], dan [stap], en tot slot [stap].”','(24–27 s) “[Duur] helemaal voor jou.”'],
    'Cadeau doen of jezelf verwennen: boeken via de link in bio.');
  P('vente','beaute','Beschikbare plekken',
'✂️ Er zijn nog plekjes vrij deze week!\n\n[Dag]: [tijden]\n[Dag]: [tijden]\n\nBehandeling van het moment: [behandeling] voor € [prijs].\n\n📲 Boek online (link in bio) of via [telefoon].');
  P('pedagogie','beaute','Routine in 3 stappen',
'Jouw avondroutine voor [haar / huid] in 3 stappen 🌙\n\n1. [Stap 1 + type product]\n2. [Stap 2]\n3. [Stap 3]\n\nTotale tijd: [minuten] min. Resultaat: [voordeel].\n\nSla op voor vanavond ✨');
  P('temoignage','beaute','Reactie van een klant',
'Haar reactie toen ze zichzelf in de spiegel zag… 🥹\n\n“[Quote]”\n\n[Uitgevoerde behandeling] door [voornaam van de kapper / schoonheidsspecialist].\n\nBedankt voor je vertrouwen, [voornaam van de klant] 💛');
  P('fidelite','beaute','Cadeaubon',
'🎁 Geen idee wat je moet geven?\n\nOnze cadeaubonnen zijn er van € [bedrag] tot € [bedrag], [duur] geldig op al onze behandelingen.\n\nOp te halen in de salon of te bestellen via DM. Een cadeau dat altijd in de smaak valt. 💝');

  /* =================================================================== VAKMAN / BOUW / RENOVATIE */
  V('vente','artisan','De klus voor / na','30 s',
    'Aan deze [ruimte] was sinds [jaar] niets meer gedaan.','VOOR + jaartal',
    ['(3–12 s) [Oude staat, beschadigde details] “Het probleem: [probleem].”','(12–24 s) [Werkzaamheden versneld] “[Duur] werk: [werkzaamheden].”','(24–27 s) [Wide shot van het eindresultaat] “En nu.”'],
    'Gratis offerte: DM of link in bio.');
  V('pedagogie','artisan','Signalen dat je moet ingrijpen','30 s',
    'Zie je dit bij jou thuis? Bel een vakman.','inzoomen op het gebrek',
    ['(3–12 s) “Signaal 1: [signaal]. Dat betekent [oorzaak].”','(12–20 s) “Signaal 2: [signaal].”','(20–26 s) “Hoe langer je wacht, hoe [gevolg en kosten].”'],
    'Twijfel je? Stuur ons een foto via DM, we zeggen je gratis hoe het zit.');
  V('coulisses','artisan','Vakmanschap in beeld','15 s',
    '[Aantal jaar] ervaring in deze ene handeling.','close-up handen / gereedschap',
    ['(2–12 s) [Technische handeling in real time, natuurlijk geluid, extreme close-up]'],
    'Volg ons als je houdt van goed vakwerk.');
  V('temoignage','artisan','De klant geeft een rondleiding','30 s',
    '“We herkennen ons huis niet meer terug.”','quote van de klant',
    ['(3–25 s) [De klant leidt rond en vertelt] “Wat we wilden: [wens]. Wat we kregen: [resultaat]. Wat we waardeerden: [planning, netheid, advies].”'],
    'Is jouw project de volgende? Gratis offerte.');
  P('vente','artisan','Gratis offerte',
'🏠 Plannen voor [type werkzaamheden]?\n\n✅ Gratis offerte binnen [termijn]\n✅ [Verzekering / certificering indien van toepassing]\n✅ Werkgebied: [regio]\n\nWe komen langs, meten op en leggen alles uit. Vrijblijvend.\n\n📞 [Telefoon] · 📩 DM');
  P('pedagogie','artisan','Subsidies en premies',
'💶 Goed om te weten: je [type] werkzaamheden kunnen deels gefinancierd worden.\n\n[Subsidie / premie 1, algemene voorwaarden]\n[Subsidie / premie 2]\n\n⚠️ Bedragen en voorwaarden veranderen: we checken samen met jou wat er voor jouw situatie geldt.\n\nVragen? Stuur een DM.');
  P('coulisses','artisan','Klus in uitvoering',
'🚧 Klus in uitvoering in [plaats]\n\nDag [n] van [totaal]: [stap van vandaag].\n\nWat we vandaag doen en waarom dat belangrijk is: [simpele uitleg].\n\nWordt vervolgd! 👷');
  P('temoignage','artisan','Klus opgeleverd',
'✅ Klus opgeleverd in [plaats]!\n\n[Type werkzaamheden] in [duur].\n\n“[Quote van de klant]”\n\nBedankt voor je vertrouwen, [voornaam]. Swipe voor de foto’s voor / na ➡️');

  /* =================================================================== WINKEL / BOETIEK */
  V('vente','commerce','Net binnen','15 s',
    'Net binnen, en op = op.','NIEUW',
    ['(2–12 s) [Snel uitpakken, 4–5 items, elk 2 s, prijs in beeld als die vaststaat]'],
    'Kom langs in de winkel of reserveer via DM.');
  V('vente','commerce','3 cadeau-ideeën onder [prijs]','30 s',
    '3 cadeau-ideeën onder € [prijs].','maximumprijs groot in beeld',
    ['(3–11 s) “Voor [profiel 1]: [artikel], [prijs].”','(11–19 s) “Voor [profiel 2]: [artikel].”','(19–26 s) “En voor [profiel 3]: [artikel]. Gratis ingepakt.”'],
    'Welke redt jou? Reageer met 1, 2 of 3.');
  V('coulisses','commerce','Ik pak je bestelling in','20 s',
    'Ik pak je bestelling in, [voornaam van de klant]!','ASMR inpakken',
    ['(2–17 s) [Zorgvuldig inpakken, papier, lint, handgeschreven kaartje, natuurlijk geluid]'],
    'Bestel online: link in bio.');
  V('engagement','commerce','De look van de dag','15 s',
    'Eén item, drie manieren om het te dragen.','1 → 3',
    ['(2–13 s) [3 outfits met hetzelfde item, overgang bij elke vingerknip]'],
    'Jouw favoriet: 1, 2 of 3?');
  P('vente','commerce','Nieuwe binnenkomers',
'📦 Vers binnen!\n\n[Product / merk]: [korte, zintuiglijke beschrijving].\nMaten / modellen: [details]\nPrijs: [prijs]\n\nBeperkte voorraad. Reserveer via DM, dan leggen we het 24 u voor je apart. 🛍️');
  P('fidelite','commerce','Uitverkoop / actie',
'🏷️ [Actie] van [datum] tot [datum]\n\n-[x]% op [afdeling / selectie]\n[Extra voordeel: 2e artikel, cadeautje…]\n\nIn de winkel [en online]. De mooiste stukken zijn de eerste dag al weg. 😉');
  P('coulisses','commerce','Waarom dit product',
'Waarom we [product / merk] zijn gaan verkopen? 🤔\n\n• [Reden 1: kwaliteit, productie]\n• [Reden 2: ethisch, lokaal]\n• [Reden 3: feedback van klanten]\n\nWe verkopen alleen wat we zelf ook zouden gebruiken.');
  P('engagement','commerce','Help ons kiezen',
'We twijfelen over de volgende bestelling… help ons! 🙏\n\n[Optie A] of [Optie B]?\n\nWat het vaakst genoemd wordt in de reacties, ligt vanaf [datum] in de winkel.');

  /* =================================================================== GEZONDHEID / WELZIJN / THERAPEUT */
  V('pedagogie','sante','Een simpele oefening','30 s',
    'Een oefening van [duur] om [zone / spanning] te verlichten.','naam van de oefening',
    ['(3–20 s) [Langzame demonstratie] “Neem [houding] aan. Adem [instructie]. Herhaal [aantal] keer.”','(20–27 s) “Doet het pijn? Stop dan en overleg met een professional.”'],
    'Sla op om het vanavond te doen.');
  V('pedagogie','sante','Zo verloopt een sessie','30 s',
    'Nog nooit [discipline] gedaan? Zo gaat het in z’n werk.','de praktijk, rustige sfeer',
    ['(3–12 s) “We beginnen met [gesprek / intake].”','(12–22 s) “Daarna [verloop van de sessie].”','(22–27 s) “Een sessie duurt [duur].”'],
    'Nog een vraag voordat je komt? Stuur me een bericht.');
  V('engagement','sante','Gezondheidsmythe','25 s',
    '“[Gezondheidsmythe].” Waar of niet waar?','WAAR / NIET WAAR',
    ['(3–20 s) “[Genuanceerd antwoord met bron]. Wat echt telt: [tip].”'],
    'Welke andere mythe moet ik ontkrachten?');
  V('coulisses','sante','Waarom dit vak','30 s',
    'Ik ben al [aantal jaar] [beroep]. Dit is waarom.','recht in de camera, warm en betrokken',
    ['(3–25 s) “[Persoonlijk kantelmoment], [wat je mooi vindt aan het begeleiden], [wat je raakt bij je cliënten].”'],
    'Zorg goed voor jezelf. Maak online een afspraak als je dat nodig hebt.');
  P('pedagogie','sante','Welzijnstip',
'🌿 De tip van de week\n\n[Simpele, toepasbare tip]\n\nWaarom het helpt: [uitleg in 2 zinnen].\n\n⚠️ Deze tip vervangt geen medisch advies. Twijfel je? Raadpleeg een arts.\n\nSla op als geheugensteuntje 💚');
  P('vente','sante','Afspraak maken',
'📅 Er komen plekken vrij [periode].\n\n[Type sessie] · [duur] · [tarief]\n[Vergoeding via zorgverzekering / ziekenfonds indien van toepassing]\n\nBoek online (link in bio) of via [telefoon].');
  P('coulisses','sante','De praktijk',
'Welkom in de praktijk 🤍\n\nEen plek waar je je vanaf de eerste stap [veilig / ontspannen] voelt.\n\n📍 [Adres] · [bereikbaarheid, parkeren, rolstoeltoegankelijkheid]\n\nTot snel.');
  P('engagement','sante','Check-in',
'Hoe gaat het nou echt met je deze week? 🫶\n\nAntwoord met een emoji:\n😌 goed\n😐 gaat wel\n😮‍💨 uitgeput\n\nWat je antwoord ook is: gun jezelf vandaag [klein zelfzorgmoment].');

  /* =================================================================== COACH / SPORT / TRAINING */
  V('pedagogie','coach','De oefening die iedereen fout doet','25 s',
    'Doe jij [oefening] zo? Stop.','❌ verkeerde uitvoering',
    ['(3–12 s) [Verkeerde uitvoering] “Hier [fout en risico].”','(12–21 s) [Juiste uitvoering] “Beter: [instructie 1], [instructie 2].”'],
    'Sla op en probeer het bij je volgende training.');
  V('temoignage','coach','De vooruitgang','30 s',
    '[Duur] geleden kon [voornaam] nog niet [actie].','VOOR, datum',
    ['(3–15 s) [Beelden van het begin]','(15–25 s) [Nu] “Wat werkte: [regelmaat, methode].”'],
    'Klaar om te beginnen? Proefles via de link in bio.');
  V('engagement','coach','7-dagenchallenge','20 s',
    'Challenge: 7 dagen lang [actie]. Doe je mee?','7-DAGENCHALLENGE',
    ['(3–15 s) “Elke dag [concrete, haalbare actie]. Ik post elke dag mijn versie in mijn story.”'],
    'Reageer “IK DOE MEE” om mee te doen.');
  V('vente','coach','De proefles','20 s',
    'Twijfel je? Kom het gewoon proberen.','PROEFLES [gratis / prijs]',
    ['(3–15 s) “In [duur] doen we [intake / kennismakingsles], en je merkt meteen [wat ze gaan voelen]. Volledig vrijblijvend.”'],
    'Boek je proefles: link in bio.');
  P('pedagogie','coach','Snelle workout',
'💪 Snelle workout: [duur] min, zonder materiaal\n\n1. [Oefening] — [herhalingen]\n2. [Oefening] — [herhalingen]\n3. [Oefening] — [herhalingen]\n\n[Aantal] rondes. [seconden] s rust.\n\nSla op en laat in de reacties weten wanneer je klaar bent ✅');
  P('engagement','coach','Motivatie',
'Reminder voor [dag]: [persoonlijke motivatiezin, geen gekopieerde quote].\n\nJe hoeft niet perfect te zijn. Doe vandaag gewoon [minimale actie].\n\nWat is jouw kleine overwinning van deze week? 👇');
  P('vente','coach','Inschrijvingen geopend',
'🚀 De inschrijvingen voor [programma / sessie] zijn open!\n\nVoor wie: [profiel]\nDuur: [duur]\nVorm: [live / online]\nDit neem je mee: [resultaat]\n\n[Aantal] plekken. Start op [datum].\n👉 Link in bio');
  P('temoignage','coach','Succes van een cliënt',
'🏆 Goed gedaan, [voornaam]!\n\n[Behaald doel] na [duur] hard werken.\n\nWat ik bewonderde: [kwaliteit van de persoon].\n\nJouw moment komt ook. Wanneer beginnen we?');

  /* =================================================================== VASTGOED */
  V('vente','immo','Bezichtiging in 30 seconden','30 s',
    '[Type woning], [oppervlakte] m², in [wijk / stad].','prijs + oppervlakte',
    ['(3–24 s) [Vloeiende rondleiding: hal, woonkamer, keuken, slaapkamers, buiten] “Waar je verliefd op wordt: [troef].”','(24–27 s) “[Prijs] · [energielabel / EPC]”'],
    'Bezichtiging op afspraak: stuur een DM.');
  V('pedagogie','immo','Hoeveel is jouw woning waard?','25 s',
    'Is je woning echt waard wat je denkt?','€ ?',
    ['(3–20 s) “De 3 criteria die in [stad] het zwaarst wegen: [criterium 1], [criterium 2], [criterium 3].”'],
    'Gratis waardebepaling binnen 48 u: link in bio.');
  V('coulisses','immo','Een dag als makelaar','30 s',
    'Wat een makelaar echt doet.','dag versneld',
    ['(3–25 s) [Bezichtigingen, foto’s, afspraken bij de notaris, telefoontjes] “Een verkoop is gemiddeld [aantal] bezichtigingen en [duur].”'],
    'Vragen over verkopen? Stel ze in de reacties.');
  V('temoignage','immo','Sleuteloverdracht','15 s',
    'Het mooiste moment van ons vak.','🔑',
    ['(2–12 s) [Overhandiging van de sleutels, glimlachen, met toestemming van de klanten]'],
    'Gefeliciteerd [voornamen]! Wie is de volgende?');
  P('vente','immo','Nieuw in de verkoop',
'🏡 EXCLUSIEF · [Stad / wijk]\n\n[Type] · [oppervlakte] m² · [kamers] kamers\n✨ [Troef 1] · [Troef 2] · [Troef 3]\n\n€ [prijs] [kosten koper / makelaarskosten …]\nEnergielabel / EPC: [klasse]\n\n📩 Bezichtiging op afspraak via DM.');
  P('pedagogie','immo','Tip voor verkopers',
'Ga je verkopen? 3 dingen die je moet doen VÓÓR de foto’s 📸\n\n1. [Tip 1]\n2. [Tip 2]\n3. [Tip 3]\n\nEen goed gepresenteerde woning verkoopt [sneller / beter].\n\nGratis waardebepaling: link in bio.');
  P('temoignage','immo','Verkocht',
'🔑 VERKOCHT!\n\n[Type woning] in [stad], verkocht in [duur].\n\n“[Quote van de verkopers]”\n\nBedankt voor jullie vertrouwen, [voornamen]. Wil jij ook verkopen? Laten we praten.');
  P('engagement','immo','Favoriet',
'Wat kies jij? 🤔\n\n🅰️ [Woning A: troef]\n🅱️ [Woning B: troef]\n\nZelfde budget: [budget]. Stem in de reacties!');

  /* =================================================================== DIENSTEN / B2B / FREELANCE */
  V('pedagogie','services','De fout die bedrijven veel geld kost','30 s',
    'Deze fout kost de meeste [doelgroep] [bedrag / tijd].','💸',
    ['(3–13 s) “De fout: [fout].”','(13–23 s) “Waarom dat erg is: [gevolg in cijfers, als het klopt].”','(23–27 s) “De simpele oplossing: [oplossing].”'],
    'Stuur “AUDIT” in een DM, dan kijken we naar jouw situatie.');
  V('vente','services','Zo werk ik','30 s',
    'Zo ziet samenwerken met mij eruit.','stappen 1-2-3',
    ['(3–12 s) “1. [Kennismakingsgesprek / audit].”','(12–20 s) “2. [Voorstel / uitvoering].”','(20–27 s) “3. [Oplevering / opvolging]. Gemiddelde doorlooptijd: [duur].”'],
    'Eerste gesprek gratis: link in bio.');
  V('temoignage','services','Klantresultaat','25 s',
    '[Resultaat in cijfers] voor [type klant].','het cijfer',
    ['(3–20 s) “Het startpunt: [situatie]. Wat we deden: [actie]. Het resultaat: [resultaat].”'],
    'Wil jij hetzelfde? Stuur een DM.');
  V('coulisses','services','Mijn werkplek, mijn tools','20 s',
    'De [aantal] tools waar ik niet zonder kan.','werkplek-setup',
    ['(3–17 s) [Eén shot per tool] “[Tool]: voor [gebruik].”'],
    'En jij, wat is jouw onmisbare tool?');
  P('pedagogie','services','LinkedIn-post: geleerde les',
'[Beginsituatie in één pakkende zin].\n\n[Duur] geleden [wat er gebeurde].\n\nWat ik ervan geleerd heb:\n→ [les 1]\n→ [les 2]\n→ [les 3]\n\nEn jij, welke les heeft jou het meest gekost?');
  P('vente','services','Dienstaanbod',
'Ben jij [doelgroep] en [probleem]?\n\nIk help [doelgroep] om [resultaat] te bereiken met [methode], in [duur].\n\nWat je krijgt:\n✔️ [deliverable 1]\n✔️ [deliverable 2]\n✔️ [deliverable 3]\n\n[Aantal] plekken deze maand. Gratis kennismakingsgesprek: link in de reacties.');
  P('temoignage','services','LinkedIn-case study',
'[Klant] had [probleem].\n\nIn [duur] hebben we:\n1. [actie]\n2. [actie]\n3. [actie]\n\nResultaat: [meetbaar resultaat].\n\nHet belangrijkste was niet [wat je zou denken], maar [echte sleutelfactor].\n\nHerken jij dit? Laten we praten.');
  P('coulisses','services','Achter de schermen van een project',
'Wat mijn klanten niet zien (en dat is normaal) 👇\n\n• [Onzichtbare stap 1]\n• [Onzichtbare stap 2]\n• [Onzichtbare stap 3]\n\nDat is 80% van het werk voor 20% van wat zichtbaar is. En precies daar zit de kwaliteit.');


  /* =================================================================== BEELDPROMPTS — ALLE BRANCHES */
  I('produit','tous','Studio-packshot op effen achtergrond',
'Professionele productfoto van [product], in het midden geplaatst op een effen achtergrond in [merkkleur], zachte studioverlichting met een lichte slagschaduw op de ondergrond, scherpe reflecties op het materiaal, perfecte focus op het logo, veel lege ruimte bovenin voor tekst. High-end catalogusstijl, vierkant formaat.');
  I('produit','tous','Product in gebruik',
'[Product] gebruikt door iemand in [realistische woonomgeving: keuken, kantoor, badkamer…], natuurlijk ochtendlicht door een raam, handen zichtbaar terwijl ze [handeling], licht onscherpe achtergrond, warme en natuurlijke kleuren. Authentieke lifestylefoto, niet geposeerd. Staand formaat 4:5.');
  I('produit','tous','Flatlay van bovenaf',
'Flatlay-compositie van bovenaf: [hoofdproduct] in het midden, omringd door [3 tot 5 bijpassende voorwerpen of ingrediënten] die zorgvuldig zijn geschikt, op een ondergrond van [licht hout / marmer / linnen], zachte schaduwen, kleurenpalet [kleuren], veel ruimte tussen de voorwerpen. Strakke magazinestijl. Vierkant formaat.');
  I('produit','tous','Dynamische levitatie',
'[Product] dat in de lucht zweeft, omringd door [elementen die erbij passen: spetters, fruit, bladeren, poeder] die midden in de beweging bevroren zijn, achtergrond met verloop in [kleur], contrastrijke belichting, haarscherp, premium reclame-effect. Staand formaat 9:16.');
  I('produit','tous','Productlijn op een rij',
'De [aantal] producten uit de [naam]-lijn van links naar rechts op een minimalistische plank, van klein naar groot, achtergrond in [kleur], gelijkmatige belichting, leesbare etiketten, strakke e-commerce productfoto. Liggend formaat 16:9.');
  I('pub','tous','Promovisual met ruimte voor tekst',
'Reclamevisual voor [aanbod]: [product of dienst] prominent op de rechterhelft van het beeld, de linkerhelft is een leeg vlak in [kleur] voor een titel, energieke sfeer, felle merkkleuren, helder licht. Geen tekst in het beeld zetten. Formaat 4:5.');
  I('pub','tous','Voor / na naast elkaar',
'Beeld verticaal in tweeën gedeeld: links [situatie voor, dof en realistisch], rechts [situatie na, strak en stralend], dezelfde kadrering en dezelfde hoek aan beide kanten, dunne witte lijn in het midden, identieke belichting. Realistische foto, geen overdreven retouche. Vierkant formaat.');
  I('pub','tous','Eventposter',
'Poster voor [event]: scène die [de sfeer van het event] uitbeeldt op de voorgrond, veel vrije ruimte bovenaan voor de titel en onderaan voor de datum, kleuren [palet], stijl [modern grafisch / retro / elegant]. Geen gegenereerde tekst in het beeld. Staand formaat 9:16.');
  I('pub','tous','Story-achtergrond met tekstvlak',
'Verticale achtergrond voor een Instagram-story: [textuur of scène die bij het merk past], wazig en zacht, een groot licht, halfdoorzichtig rechthoekig vlak in het midden voor een boodschap, kleuren [merkpalet], rustige en goed leesbare sfeer. Formaat 9:16.');
  I('lieu','tous','Uitnodigende gevel',
'Gevel van [type zaak] [naam] aan het eind van de dag, etalage van binnenuit verlicht met warm licht, goed zichtbaar uithangbord, schone stoep, enkele wazige voorbijgangers, blauwe schemerlucht. Realistische, uitnodigende architectuurfoto. Formaat 4:5.');
  I('lieu','tous','Warm interieur',
'Interieur van [locatie: winkel, salon, praktijk, werkplaats], leeg en perfect opgeruimd, zacht natuurlijk licht, groene planten, materialen [hout, linnen, metaal], groothoekperspectief vanaf de ingang, uitnodigende premium sfeer. Realistische interieurfoto. Liggend formaat 3:2.');
  I('personnes','tous','Portret van de eigenaar',
'Professioneel portret van [beschrijving: leeftijd, stijl] in [zijn/haar werkplek], glimlachend, kijkt in de camera, kleding [kleding], achtergrond van de zaak licht onscherp, zacht zijlicht, authentieke en zelfverzekerde sfeer. Realistische portretfoto, 85 mm-lens. Formaat 4:5.');
  I('personnes','tous','Het team in actie',
'Foto van [aantal] teamleden die samen [activiteit uit het vak] doen, natuurlijk en hecht moment, hier en daar een glimlach, natuurlijk licht, warme kleuren, reportagestijl, spontaan vastgelegd. Realistische foto, niet geposeerd. Liggend formaat 3:2.');
  I('personnes','tous','Handen aan het werk',
'Close-up van vakkundige handen die [precieze handeling uit het vak] uitvoeren, gereedschap en materiaal goed zichtbaar, zeer geringe scherptediepte, strijklicht dat texturen laat zien, ambachtelijke en verzorgde sfeer. Vierkant formaat.');
  I('saison','tous','Seizoenssfeer',
'[Product of locatie] versierd voor [seizoen of feestdag: kerst, zomer, back to school, Valentijnsdag…], subtiele en elegante decoratie ([decoratie]), [warm / koel] licht, seizoenskleuren, feestelijke maar high-end sfeer. Formaat 4:5.');
  I('saison','tous','Feestelijke achtergrond voor aankondiging',
'Feestelijke grafische achtergrond voor [feestdag], [elementen: confetti, slingers, sneeuwvlokken, bladeren] langs de randen, effen en vrij midden voor een aankondiging, kleuren [palet], strakke en moderne uitstraling. Geen tekst. Vierkant formaat.');

  /* =================================================================== BEELDPROMPTS — PER BRANCHE */
  I('produit','resto','Signatuurgerecht in close-up',
'Smakelijke close-up van [gerecht], opgemaakt op een [type bord] op een houten tafel, lichte stoom, glanzende saus, verse kruiden, natuurlijk zijlicht, wazige en warme restaurantzaal op de achtergrond. Professionele foodfotografie. Formaat 4:5.');
  I('produit','resto','Gedeelde tafel van bovenaf',
'Bovenaanzicht van een tafel vol [gerechten en drankjes] die vrienden met elkaar delen, handen die opscheppen, tafelkleed van [materiaal], zacht licht, warme kleuren, gezellige en royale sfeer. Lifestyle-foodfoto. Vierkant formaat.');
  I('ambiance','resto','Terras bij zonsondergang',
'Terras van [restaurant / café] bij zonsondergang, gedekte tafels, brandende lichtslingers, glinsterende glazen, enkele wazige gasten die lachen, gouden licht. Realistische sfeerfoto. Formaat 4:5.');
  I('produit','resto','Viennoiserie op de toonbank',
'Bakkerstoonbank vol goudbruine, knapperige [viennoiserie / broden], close-up van de luchtige bladerdeegstructuur, ochtendlicht, een beetje bloem op het hout, ambachtelijke sfeer. Formaat 4:5.');
  I('produit','beaute','Premium verzorgingsflesje',
'[Beautyproduct] op een vochtige steen in [kleur], waterdruppels op het flesje, bladeren van [plant] eromheen, zacht en diffuus licht, kleurenpalet [kleuren], high-end spa-esthetiek. Formaat 4:5.');
  I('personnes','beaute','Kapselresultaat',
'Portret op de rug en driekwart van een klant met [uitgevoerde coupe / kleur], glanzend haar in beweging, zacht salonlicht, wazige salon op de achtergrond, realistisch en natuurlijk. Formaat 4:5.');
  I('lieu','beaute','Rustgevende behandelruimte',
'Lege, klaargemaakte behandelruimte: massagetafel met opgevouwen handdoeken, brandende kaarsen, planten, warm gedimd licht, natuurlijke materialen, zen en schone sfeer. Formaat 4:5.');
  I('produit','artisan','Afgerond project',
'Foto van een afgeronde [realisatie: keuken, badkamer, terras, meubel], strakke lijnen, nette afwerking, natuurlijk licht, opgeruimde ruimte met eenvoudige styling, groothoekperspectief. Realistische interieurfoto. Liggend formaat 3:2.');
  I('personnes','artisan','Vakman op de bouwplaats',
'[Beroep] in schone werkkleding op een bouwplaats voor [type werkzaamheden], geconcentreerd op [handeling], professioneel gereedschap, helm of veiligheidsuitrusting, daglicht, realistische en flatterende reportagefoto. Formaat 4:5.');
  I('produit','commerce','Nieuwigheid in de etalage',
'[Artikel] in de etalage van de winkel, elegante display, bijpassende accessoires, warme etalageverlichting, lichte reflecties op het glas, winkelsfeer in de binnenstad. Formaat 4:5.');
  I('produit','commerce','Outfit buiten gedragen',
'Iemand die [kledingstuk / accessoire] draagt in een straat in [type stad], natuurlijke pose al wandelend, licht van de late namiddag, wazige achtergrond, lifestyle-modefotografie. Formaat 4:5.');
  I('lieu','sante','Geruststellende praktijk',
'Lichte en geruststellende praktijkruimte voor [discipline], comfortabele stoel, planten, zachte kleuren [palet], natuurlijk licht, geen mensen, gevoel van rust en netheid. Liggend formaat 3:2.');
  I('ambiance','sante','Welzijnsvisual',
'Rustgevende scène rond welzijn: [element: kopje kruidenthee, kiezelstenen, blad, kalm water] in close-up, zacht ochtendlicht, kleurenpalet [kleuren], veel lege ruimte voor tekst. Vierkant formaat.');
  I('personnes','coach','Training op vol vermogen',
'Iemand midden in [oefening] in [sportschool / buiten], licht bezweet, aangespannen spieren, contrastrijk licht, dynamische kadrering in kikvorsperspectief, motiverende en energieke sfeer. Realistische sportfoto. Formaat 4:5.');
  I('pub','coach','Visual voor sportchallenge',
'Sportieve visual voor een challenge van [duur]: [sport]-uitrusting op de grond (bidon, handdoek, schoenen), ochtendlicht, achtergrond in [kleur], veel vrije ruimte bovenaan voor een titel. Geen tekst. Formaat 4:5.');
  I('lieu','immo','Lichte woonkamer',
'Woonkamer van [type woning] badend in natuurlijk licht, grote ramen, neutrale en moderne inrichting, groothoekperspectief vanaf de ingang, rechte verticale lijnen, professionele vastgoedfoto. Liggend formaat 3:2.');
  I('lieu','immo','Virtuele home staging',
'Dezelfde ruimte [beschrijving van de lege ruimte] ingericht in [Scandinavische / eigentijdse / boho] stijl: bank, vloerkleed, verlichting, planten, natuurlijk licht, realistisch en trouw aan de originele muren en ramen. Liggend formaat 3:2.');
  I('pub','services','Expertisevisual',
'Conceptueel beeld voor [dienst]: opgeruimd bureau met laptop, notitieboek en koffie, scherm met [type tabel of grafiek], natuurlijk licht, kleurenpalet [merkkleuren], professionele en rustige sfeer. Formaat 4:5.');
  I('personnes','services','Klantafspraak',
'Twee mensen in een zakelijk gesprek aan tafel, glimlachend in gesprek, documenten en laptop, natuurlijk kantoorlicht, wazige achtergrond, sfeer van vertrouwen. Realistische zakelijke foto. Liggend formaat 3:2.');

  /* =================================================================== VIDEOPROMPTS — ALLE BRANCHES */
  W('produit','tous','Product 360° draaiend','5 s',
'[Product] op een sokkel die langzaam om zijn as draait, effen achtergrond in [kleur], zachte studioverlichting met reflecties die over het materiaal glijden, statische camera iets van bovenaf, vloeiende en gelijkmatige beweging. Formaat 9:16.');
  W('produit','tous','Onthullende camerarit','5 s',
'De camera beweegt langzaam vanaf een wazige close-up van [productdetail] naar achteren tot [product] volledig in beeld is, geleidelijke scherpstelling, warm zijlicht, stofjes die in het licht zweven. Formaat 9:16.');
  W('produit','tous','Product in actie','5 s',
'Handen die [product] [handeling: openen, schenken, aanbrengen, in elkaar zetten] in close-up, natuurlijke en precieze beweging, natuurlijk licht, wazige achtergrond van [locatie], statische camera op tafelhoogte. Formaat 9:16.');
  W('produit','tous','Ingrediënten in slow motion','5 s',
'[Ingrediënten of elementen] vallen in slow motion rond [product] en stuiteren licht op, achtergrond in [kleur], contrastrijke belichting, statische camera, premium reclame-effect. Formaat 9:16.');
  W('ambiance','tous','Sfeer van de zaak','5 s',
'Langzame zijwaartse camerarit door [locatie: winkel, zaal, werkplaats], leeg en perfect opgeruimd, zacht licht aan het eind van de dag, twinkelende lichtjes, geringe scherptediepte, warme en uitnodigende sfeer. Formaat 9:16.');
  W('ambiance','tous','Opening in de ochtend','5 s',
'Een hand draait het bordje “open” om op de glazen deur van [zaak], ochtendlicht valt de ruimte binnen, statische camera vanbinnen, natuurlijke beweging, sfeer van een nieuwe dag. Formaat 9:16.');
  W('personnes','tous','Glimlachend welkom','5 s',
'[Persoon] achter de toonbank kijkt op, glimlacht en zwaait kort naar de camera, zacht natuurlijk licht, wazige achtergrond van [locatie], natuurlijke en hartelijke beweging. Formaat 9:16.');
  W('personnes','tous','Vakhandeling in slow motion','5 s',
'Close-up in slow motion van handen die [precieze handeling uit het vak], gereedschap en materiaal goed zichtbaar, strijklicht dat texturen laat zien, statische camera, ambachtelijke sfeer. Formaat 9:16.');
  W('pub','tous','Voor → na met overgang','5 s',
'Statisch shot van [locatie of voorwerp] in de oude staat, daarna trekt een lichtveeg van links naar rechts door het beeld en onthult de nieuwe staat, zelfde kadrering, vloeiende overgang, realistisch. Formaat 9:16.');
  W('pub','tous','Afsluitende zoom op het logo','5 s',
'De camera trekt langzaam terug vanaf [merkelement: uithangbord, tas, schort, verpakking] en onthult de scène eromheen, warm licht, langzame en zelfverzekerde beweging, stabiel eindshot om tekst toe te voegen. Formaat 9:16.');
  W('saison','tous','Feestsfeer','5 s',
'[Locatie of product] versierd voor [feestdag], twinkelende lichtslingers, [sneeuw / confetti / bloemblaadjes] die zachtjes neerdwarrelen, camera die langzaam naar voren beweegt, feestelijke en zachte sfeer. Formaat 9:16.');
  W('ambiance','tous','Timelapse van een dag','5 s',
'Timelapse van [locatie] van ’s ochtends tot ’s avonds, licht dat verschuift van gouden daglicht naar avondblauw, wazige silhouetten van klanten die komen en gaan, statische camera. Formaat 9:16.');

  /* =================================================================== VIDEOPROMPTS — PER BRANCHE */
  W('produit','resto','Dampend gerecht','5 s',
'Close-up van [gerecht], net opgemaakt, stoom die zachtjes opstijgt, een lepel giet een straaltje [saus], warm zijlicht, wazige zaal op de achtergrond, statische camera iets van bovenaf. Formaat 9:16.');
  W('produit','resto','Glas dat volloopt','5 s',
'[Drankje] in slow motion ingeschonken in een [type] glas, bubbels en ronddraaiende ijsblokjes, condensdruppels, warm barlicht, statische camera op glashoogte. Formaat 9:16.');
  W('coulisses','resto','De chef in de keuken','5 s',
'Een chef laat [ingrediënten] in een pan opspringen, hoge vlam, stoom, snelle en beheerste beweging, professionele keuken op de achtergrond, contrastrijk licht, statische camera in driekwart. Formaat 9:16.');
  W('produit','resto','Brood uit de oven','5 s',
'Een bakker haalt een plaat goudbruine [broden / viennoiserie] uit de oven, hete stoom, knisperende korst, oranje ovengloed, statische camera op ovenhoogte. Formaat 9:16.');
  W('pub','beaute','Onthulling van de coupe','5 s',
'Een klant draait zich langzaam naar de camera en schudt licht haar [coupe / kleur], glanzend haar in beweging, zacht salonlicht, wazige achtergrond, natuurlijke glimlach. Formaat 9:16.');
  W('produit','beaute','Textuur van het product','5 s',
'Close-up in slow motion: een klodder [crème / serum] valt op een glazen oppervlak en spreidt zich langzaam uit, romige textuur, diffuus licht, achtergrond in [pastelkleur], statische camera. Formaat 9:16.');
  W('ambiance','beaute','Moment van ontspanning','5 s',
'Iemand ligt met gesloten ogen tijdens een gezichtsbehandeling, handen van de schoonheidsspecialist die langzaam masseren, kaarsen en gedimd licht, camera die heel langzaam naar voren beweegt. Formaat 9:16.');
  W('coulisses','artisan','Gereedschap in actie','5 s',
'Close-up van [gereedschap: schuurmachine, troffel, zaag, kwast] in actie op [materiaal], stof of krullen die door het licht vliegen, handen met werkhandschoenen, daglicht, statische camera. Formaat 9:16.');
  W('pub','artisan','Afgeronde ruimte','5 s',
'Langzame camerarit door een afgeronde [gerenoveerde ruimte], natuurlijk licht dat door het raam valt, nette afwerking, schone vloer, vloeiende camerabeweging van de ingang naar de achterkant van de ruimte. Formaat 9:16.');
  W('produit','commerce','Cadeau inpakken','5 s',
'Handen pakken [artikel] in met [kleur] papier en knopen er een lint om, close-up van bovenaf, zorgvuldige bewegingen, zacht licht, houten toonbank, statische camera. Formaat 9:16.');
  W('produit','commerce','Nieuwe collectie in beeld','5 s',
'Camera die langzaam langs een kledingrek of schap met net binnengekomen [artikelen] glijdt, harmonieuze kleuren, warm winkellicht, geringe scherptediepte. Formaat 9:16.');
  W('ambiance','sante','Rustige ademhaling','5 s',
'Iemand zit in kleermakerszit bij een raam en ademt langzaam in en uit, schouders die ontspannen, zacht ochtendlicht, plant die licht beweegt, statische camera. Formaat 9:16.');
  W('pedagogie','sante','Demonstratie van een oefening','5 s',
'[Behandelaar] doet langzaam [oefening of stretch] voor in een lichte praktijkruimte, gecontroleerde en vloeiende beweging, statische camera in wide shot, zacht natuurlijk licht. Formaat 9:16.');
  W('pub','coach','Explosieve inspanning','5 s',
'Slow motion van iemand die [explosieve oefening: sprong, sprint, lift] uitvoert, stof of zweetdruppels in het licht, sterk tegenlicht, statische camera in kikvorsperspectief. Formaat 9:16.');
  W('personnes','coach','Coach die aanmoedigt','5 s',
'Een coach applaudisseert en moedigt [deelnemer] aan die een set afmaakt, glimlach en high five, lichte sportschool, statische camera op schouderhoogte. Formaat 9:16.');
  W('pub','immo','Vloeiende rondleiding','5 s',
'Vloeiende camerarit vanaf de ingang van [type woning] naar de lichte woonkamer, rechte verticale lijnen, natuurlijk licht, neutrale inrichting, langzame en stabiele beweging zoals met een gimbal. Formaat 9:16.');
  W('pub','immo','Dronebeeld van buiten','5 s',
'Luchtbeeld dat langzaam opstijgt boven [huis / gebouw] en [tuin, buurt, uitzicht] onthult, gouden licht aan het eind van de dag, vloeiende beweging. Formaat 9:16.');
  W('pub','services','Scherm dat tot leven komt','5 s',
'Close-up van een computerscherm waarop [grafiek / dashboard] zich geleidelijk vult, zachte reflecties, opgeruimd bureau, camera die langzaam naar voren beweegt, professionele sfeer. Formaat 9:16.');
  W('personnes','services','Handdruk','5 s',
'Twee mensen schudden elkaar glimlachend de hand boven een bureau, ondertekende documenten op de voorgrond, natuurlijk kantoorlicht, statische camera in driekwart, natuurlijke beweging. Formaat 9:16.');

  window.MCD_SCRIPTS=L;
  window.MCD_SCRIPTS_META={
    lang:'nl',
    types:{tous:'Alles',video:'🎬 Videoscripts',post:'✍️ Bijschriften',img:'🖼️ Beeldprompts',vid:'🎥 Videoprompts'},
    objectifs:{vente:'💰 Verkopen',engagement:'💬 Engagement',pedagogie:'🎓 Tips',coulisses:'🎬 Achter de schermen',temoignage:'⭐ Klantreviews',lancement:'🚀 Lancering',evenement:'📅 Event',fidelite:'🎁 Klantbinding',recrutement:'🤝 Werving',produit:'📦 Product',ambiance:'✨ Sfeer',pub:'📣 Reclame & promo',lieu:'🏠 Locatie',personnes:'🙂 Mensen',saison:'🎄 Seizoen & feestdagen'},
    metiers:{tous:'Alle branches',resto:'Restaurant & café',beaute:'Beauty & kapper',artisan:'Vakman & klussen',commerce:'Winkel',sante:'Gezondheid & welzijn',coach:'Coach & sport',immo:'Vastgoed',services:'Diensten & B2B'},
    ui:{title:'Scriptbibliotheek',lead:'{n} scripts, bijschriften en beeld-/videoprompts. Vervang de [blokhaken] of laat Marshall ze afstemmen op jouw merk.',search:'Zoeken: voor/na, winactie, product…',all:'Alles',metier:'Branche',count1:'{n} item',countN:'{n} items',empty:'Niets gevonden. Probeer een ander woord of “Alles”.',loading:'Bibliotheek laden…',
      kVideo:'Videoscript',kPost:'Bijschrift',kImg:'Beeldprompt',kVid:'Videoprompt',adapted:'✨ Versie aangepast door Marshall',orig:'bekijk het origineel',
      insert:'⬇ Invoegen in bijschrift',copy:'📋 Kopiëren',adapt:'✨ Aanpassen met Marshall',again:'✨ Andere versie',busy:'✨ Marshall schrijft…',create:'🪄 Maken met AI-studio',
      inserted:'Ingevoegd in bijschrift ✓',insertedUndo:'Ingevoegd in bijschrift · tik om ongedaan te maken',copied:'Gekopieerd ✓',copyFail:'Kopiëren mislukt',noComposer:'Open eerst de Composer',
      sent:'Prompt verzonden naar AI-studio ✓',adaptFail:'Marshall kon deze tekst niet aanpassen: ',close:'Sluiten',
      credits:'Prompts geïnspireerd op de structuren van awesome-ad-video-prompts (CC BY 4.0) en awesome-nanobanana-pro.'}
  };
})();
