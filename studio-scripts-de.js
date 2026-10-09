/* Skript-Bibliothek — Studio Social (Mon Copain Digital)
   Videoskripte (Reels, TikTok, Shorts, Voiceover, Avatare) und Post-Captions zum Ausfüllen.
   Die [eckigen Klammern] ersetzt du selbst oder lässt sie von Marshall ausfüllen („Mit Marshall anpassen“). */
(function(){
  var L=[];
  /* Abschnittsbezeichnungen eines Videoskripts (zu übersetzen) */
  var LB={hook:'🎬 HOOK (0–3 s)',screen:'Im Bild',body:'📍 ABLAUF',cta:'👉 CALL TO ACTION',q1:'„',q2:'“'};
  function V(o,s,n,d,hook,ecran,steps,cta){
    L.push({t:'video',o:o,s:s,n:n,d:d,x:LB.hook+'\n'+LB.q1+hook+LB.q2+'\n['+LB.screen+': '+ecran+']\n\n'+LB.body+'\n'+steps.join('\n')+'\n\n'+LB.cta+'\n'+LB.q1+cta+LB.q2});
  }
  function P(o,s,n,txt){ L.push({t:'post',o:o,s:s,n:n,x:txt}); }
  /* Kreativ-Prompts: I = Bild, W = Video (Wan 2.2 / Veo). In der Sprache der App geschrieben; Marshall formuliert sie vor der Generierung zu Profi-Prompts um. */
  function I(o,s,n,txt){ L.push({t:'img',o:o,s:s,n:n,x:txt}); }
  function W(o,s,n,d,txt){ L.push({t:'vid',o:o,s:s,n:n,d:d,x:txt}); }

  /* =================================================================== VIDEOSKRIPTE — ALLE BRANCHEN */
  V('vente','tous','Problem → Lösung','30 s',
    'Kennst du das auch: [häufiges Problem deiner Kund*innen]?','das Problem in 5 Wörtern, große Schrift',
    ['(3–10 s) „Das hören wir jeden Tag: [typischer Satz einer Kundin / eines Kunden].“','(10–22 s) „Bei [Name] gibt’s [deine Lösung]: [Vorteil 1], [Vorteil 2].“ [Einstellung: du in Aktion]','(22–27 s) „Das Ergebnis: [konkretes Ergebnis].“ [Einstellung: das Ergebnis]'],
    'Schick uns „[Stichwort]“ per DM – wir antworten dir noch heute.');
  V('vente','tous','Vorher / Nachher','20 s',
    'Schau dir den Unterschied an.','VORHER (Standbild, 1 s)',
    ['(2–8 s) [Vorher-Aufnahme] „So sah’s vorher aus: [sichtbarer Mangel].“','(8–15 s) [Schneller Übergang] „Und so nach [Dauer / Einsatz].“ [Nachher-Aufnahme]','(15–18 s) „Was den Unterschied gemacht hat: [das entscheidende Detail].“'],
    'Du willst das gleiche Ergebnis? Link in der Bio.');
  V('vente','tous','3 Gründe für …','30 s',
    '3 Gründe, warum sich unsere Kund*innen für [Produkt/Service] entscheiden.','„3 GRÜNDE“ + hochzählende Nummer',
    ['(3–10 s) „1: [Grund 1, konkret].“ [Passende Einstellung]','(10–17 s) „2: [Grund 2].“','(17–25 s) „Und 3, der wichtigste: [Grund 3].“'],
    'Welcher zählt für dich am meisten? Schreib’s in die Kommentare.');
  V('vente','tous','Das limitierte Angebot','15 s',
    'Nur bis [Datum]!','[ANGEBOT] riesig, Countdown',
    ['(3–8 s) „[Konkretes Angebot] auf [Produkt/Service].“ [Produktaufnahme]','(8–12 s) „Warum? [Ehrlicher Grund: Jubiläum, Restposten …].“'],
    'Sichere dir deinen Termin bis [Datum]: Link in der Bio.');
  V('vente','tous','Einwand entkräftet','30 s',
    '„Das ist zu teuer.“ Hören wir oft. Hier ist die Wahrheit.','der Einwand in Anführungszeichen',
    ['(3–12 s) „Wofür du wirklich zahlst: [was alles drin ist, Lebensdauer, gesparte Zeit].“','(12–22 s) „Im Vergleich zu [Alternative] heißt das: [einfache Rechnung oder Vergleich].“','(22–27 s) „Und falls [Garantie / Probephase / Ratenzahlung].“'],
    'Noch eine Frage? Stell sie in den Kommentaren – wir beantworten alles.');
  V('vente','tous','Demo in 3 Handgriffen','20 s',
    'So funktioniert’s – in 3 Handgriffen.','Hände + Produkt, Nahaufnahme',
    ['(2–7 s) „Eins: [Handgriff 1].“','(7–12 s) „Zwei: [Handgriff 2].“','(12–17 s) „Drei: [Handgriff 3]. Fertig.“ [Ergebnis-Aufnahme]'],
    'Erhältlich bei [Name] / auf [Website].');
  V('engagement','tous','Was du über … nicht weißt','30 s',
    'Das sagt dir niemand über [Thema].','Text, der sich „enthüllt“',
    ['(3–12 s) „[Überraschender, aber wahrer Fakt].“','(12–22 s) „Konkret heißt das: [Folge für die Kund*innen].“','(22–27 s) „Unser Tipp: [einfacher Tipp].“'],
    'Speicher dir das Video, damit du’s nicht vergisst.');
  V('engagement','tous','Umfrage: Bist du eher …','15 s',
    'Team [Option A] oder Team [Option B]?','A vs. B, geteilter Bildschirm',
    ['(3–7 s) [Aufnahme Option A] „[A]: [Stärke von A].“','(7–11 s) [Aufnahme Option B] „[B]: [Stärke von B].“'],
    'Stimmt in den Kommentaren ab: A oder B?');
  V('engagement','tous','Kunden-POV','15 s',
    'POV: Du hast gerade [Situation der Kundin / des Kunden].','„POV: …“ oben im Bild',
    ['(3–10 s) [Szene aus Sicht der Kund*innen, ohne Sprechen oder mit Trend-Sound]','(10–13 s) [Reaktion / Lächeln / Ergebnis]'],
    'Markiere jemanden, der das braucht.');
  V('engagement','tous','Fehler, die du vermeiden solltest','30 s',
    'Die 3 Fehler, die ich bei [Bereich] ständig sehe.','rotes Kreuz ❌ bei jedem Fehler',
    ['(3–11 s) „Fehler Nr. 1: [Fehler]. Besser: [richtiger Ansatz].“','(11–19 s) „Fehler Nr. 2: [Fehler].“','(19–26 s) „Fehler Nr. 3, der schlimmste: [Fehler].“'],
    'Hast du einen davon gemacht? Gib’s in den Kommentaren zu 😄');
  V('engagement','tous','Mythos oder Wahrheit?','25 s',
    '„[Verbreiteter Irrglaube].“ Mythos oder Wahrheit?','MYTHOS / WAHRHEIT blinkt',
    ['(3–10 s) „Viele denken, dass [Irrglaube].“','(10–20 s) „In Wahrheit: [Fakt + Beleg oder Beispiel].“'],
    'Folg uns für den nächsten Mythos.');
  V('pedagogie','tous','Express-Tutorial in 3 Schritten','30 s',
    'So schaffst du [gewünschtes Ergebnis] in 3 Schritten.','„IN 3 SCHRITTEN“ + Nummern',
    ['(3–11 s) „Schritt 1: [Aktion].“ [Nahaufnahme]','(11–19 s) „Schritt 2: [Aktion]. Profi-Trick: [Detail].“','(19–26 s) „Schritt 3: [Aktion]. Voilà.“ [Ergebnis-Aufnahme]'],
    'Speicher’s dir, um es später nachzumachen.');
  V('pedagogie','tous','Der Profi-Tipp','20 s',
    'Der Tipp, den ich all meinen Kund*innen gebe.','„PROFI-TIPP“',
    ['(3–12 s) „[Konkreter Tipp, sofort umsetzbar].“','(12–17 s) „Warum? Weil [einfache Erklärung in einem Satz].“'],
    'Teil das mit jemandem, der’s braucht.');
  V('pedagogie','tous','Kundenfrage','30 s',
    'Ich wurde gefragt: „[echte Frage einer Kundin / eines Kunden]?“','die Frage als Chat-Bubble',
    ['(3–15 s) „Die kurze Antwort: [Antwort].“','(15–25 s) „Die ausführliche Antwort: [Feinheiten, Sonderfälle].“'],
    'Stell deine Frage in den Kommentaren – ich antworte per Video.');
  V('pedagogie','tous','Fachbegriff in 30 s','30 s',
    '[Fachbegriff]: Was heißt das eigentlich?','Begriff + Definition, die sich aufbaut',
    ['(3–13 s) „Ganz einfach: [Definition in einfachen Worten].“','(13–24 s) „Beispiel: [Beispiel aus dem Alltag].“','(24–27 s) „Und für dich bedeutet das: [Auswirkung].“'],
    'Welches Wort soll ich als Nächstes erklären?');
  V('coulisses','tous','Ein Tag bei uns','45 s',
    '[Uhrzeit morgens]. Ein Tag bei [Name] beginnt.','Uhrzeit eingeblendet + Eröffnungsaufnahme',
    ['(3–15 s) [Aufschließen, Vorbereitung, Kaffee, Team]','(15–30 s) [Das Herzstück der Arbeit: 3 schnelle Shots à 2 s] „Was du nie zu sehen bekommst: [Detail].“','(30–40 s) [Feierabend / stolzer Moment] „Und das ist unser Lieblingsmoment.“'],
    'Was willst du noch hinter den Kulissen sehen? Sag’s uns.');
  V('coulisses','tous','Das Team stellt sich vor','30 s',
    'Wir sind [Anzahl] – und ohne sie gäbe es [Name] nicht.','Vornamen werden eingeblendet',
    ['(3–25 s) [Pro Person eine Einstellung à 3–4 s] „[Vorname], [Rolle], [Anekdote oder verstecktes Talent].“'],
    'Sagt Hallo zum Team in den Kommentaren 👋');
  V('coulisses','tous','Warum ich … gegründet habe','45 s',
    '[Jahr] habe ich alles hingeschmissen für [Projekt].','altes Foto oder direkt in die Kamera',
    ['(3–18 s) „Vorher war ich [Situation]. Eines Tages [Auslöser].“','(18–33 s) „Die Anfänge: [Schwierigkeit] – aber [was dich durchhalten ließ].“','(33–40 s) „Heute [worauf du stolz bist].“'],
    'Danke, dass du da bist. Folg uns, um zu sehen, wie die Geschichte weitergeht.');
  V('coulisses','tous','Herstellung im Zeitraffer','15 s',
    'Von null zu [fertigem Produkt] in 15 Sekunden.','Zeitraffer, Text „15 s“',
    ['(2–12 s) [Zeitraffer der Herstellung / Zubereitung, rhythmische Musik]','(12–14 s) [Schlussbild, Produkt im Fokus]'],
    'Hättest du gedacht, dass das eigentlich [echte Dauer] dauert?');
  V('temoignage','tous','Kund*innen erzählen','30 s',
    '„[Starker Satz der Kundin / des Kunden].“','Zitat + Vorname',
    ['(3–12 s) [Kund*in direkt in die Kamera] „Vorher [Problem].“','(12–22 s) „Mit [Name] [was sich verändert hat].“','(22–27 s) „Ich empfehle es, weil [Grund].“'],
    'Probier’s auch aus: Link in der Bio.');
  V('temoignage','tous','Bewertung laut vorgelesen','20 s',
    'Diese Bewertung haben wir bekommen … und damit nicht gerechnet.','Screenshot der Bewertung (5 Sterne)',
    ['(3–14 s) [Auszug aus der Bewertung vorlesen, echter Screenshot im Bild]','(14–18 s) „Danke, [Vorname], das berührt uns wirklich.“'],
    'Wart ihr schon mal bei uns? Lasst uns eine Bewertung da 🙏');
  V('temoignage','tous','Ergebnis in Zahlen','20 s',
    '[Echte Zahl] in [Zeitraum]. So geht’s.','die Zahl riesig',
    ['(3–10 s) „Als [Kund*in] zu uns kam, [Ausgangslage].“','(10–17 s) „Wir haben [was ihr gemacht habt]. Ergebnis: [Zahl].“'],
    'Du willst die gleiche Analyse? Schreib uns.');
  V('lancement','tous','Der Teaser','10 s',
    'Am [Datum] kommt etwas.','unscharfe / verdeckte Aufnahme, Datum groß',
    ['(2–8 s) [Details in extremer Nahaufnahme, ohne alles zu zeigen] „Mehr verraten wir nicht …“'],
    'Aktiviere die Glocke, damit du’s nicht verpasst.');
  V('lancement','tous','Die Enthüllung','30 s',
    'Endlich ist es da: [Neuheit]!','Enthüllung mit Effekt + Name',
    ['(3–13 s) „Seit [Dauer] arbeiten wir daran: [was es ist].“','(13–23 s) „Was es einzigartig macht: [Unterschied 1], [Unterschied 2].“','(23–27 s) „Erhältlich ab [Datum], für [Preis, falls fix].“'],
    'Die ersten [Anzahl] bekommen [Vorteil]: Link in der Bio.');
  V('lancement','tous','Countdown: noch 3 Tage','10 s',
    'Nur noch 3 Tage.','„NOCH 3 TAGE“ riesig',
    ['(2–8 s) [Ein visueller Hinweis pro Tag] „Hinweis des Tages: [Hinweis].“'],
    'Ratet mal in den Kommentaren!');
  V('evenement','tous','Einladung zum Event','20 s',
    'Am [Datum] warten wir auf euch!','Datum + Ort groß',
    ['(3–10 s) „Auf dem Programm: [Highlight 1], [Highlight 2].“','(10–16 s) „[Kostenlos / mit Anmeldung], in [Ort], ab [Uhrzeit].“'],
    'Schreibt „bin dabei“ in die Kommentare – wir halten euch einen Platz frei.');
  V('evenement','tous','Event-Rückblick','30 s',
    'Danke! Ihr wart [Anzahl] Leute am [Tag].','Totale auf die Menge',
    ['(3–25 s) [Rhythmischer Zusammenschnitt der besten Momente, 1,5 s pro Shot, Lächeln, Details]','(25–28 s) „Danke an [Partner / Team].“'],
    'Warst du dabei? Markier dich im Video!');
  V('fidelite','tous','Danke an die Community','20 s',
    '[Anzahl] Follower. Wir können’s kaum glauben.','die Zahl zählt hoch',
    ['(3–15 s) „Als wir angefangen haben, [Erinnerung]. Heute, dank euch, [worauf ihr stolz seid].“'],
    'Zur Feier: [kleines Geschenk / Gewinnspiel]. Details in der Caption.');
  V('fidelite','tous','Gewinnspiel','20 s',
    'Wir verlosen [Preis]!','🎁 GEWINNSPIEL',
    ['(3–15 s) „So machst du mit: 1. folg uns, 2. like das Video, 3. markiere [Anzahl] Freund*innen. Verlosung am [Datum].“'],
    'Viel Glück euch allen! Teilnahmebedingungen in der Caption.');
  V('recrutement','tous','Wir stellen ein','30 s',
    'Wir suchen [Position]. Bist das vielleicht du?','WIR STELLEN EIN + Position',
    ['(3–12 s) „Bei uns [echte Atmosphäre, 2 Team-Aufnahmen].“','(12–22 s) „Was wir suchen: [Eigenschaft 1], [Eigenschaft 2]. Du brauchst keine [Ausbildung / Erfahrung], wenn [Bedingung].“','(22–27 s) „[Vertragsart, Arbeitszeiten, Ort].“'],
    'Schick uns eine Nachricht oder teil das mit der richtigen Person.');

  /* =================================================================== CAPTIONS — ALLE BRANCHEN */
  P('vente','tous','Nutzen zuerst',
'[Das Ergebnis, das deine Kund*innen wollen] – ohne [den Aufwand, den sie fürchten]. ✨\n\nGenau das bietet dir [Produkt/Service]:\n✔️ [Vorteil 1]\n✔️ [Vorteil 2]\n✔️ [Vorteil 3]\n\n📍 [Ort / Lieferung / online]\n👉 Jetzt [buchen / bestellen] – Link in der Bio.');
  P('vente','tous','Problem – Zuspitzung – Lösung',
'[Problem]? Damit bist du nicht allein.\n\nUnd je länger du wartest, desto [konkrete Folge]. 😬\n\nDie gute Nachricht: [Lösung in einem Satz].\nBei [Name] [wie ihr das konkret macht].\n\n💬 Schreib uns „[Stichwort]“ per DM und wir sprechen darüber.');
  P('vente','tous','Angebot mit Ablaufdatum',
'⏳ Nur bis [Datum]:\n[konkretes Angebot] auf [Produkt/Service].\n\nWarum? [ehrlicher Grund].\n\nDanach gilt wieder der normale Preis. Keine Verlängerung. 🙃\n\n👉 Link in der Bio / [Telefon]');
  P('vente','tous','Unser Star-Produkt',
'Wenn du bei uns nur eine Sache probierst, dann diese. 👇\n\n[Produkt]: [was es einzigartig macht, 1 sinnlicher oder konkreter Satz].\n\nUnsere Kund*innen lieben es wegen [Grund Nr. 1].\n\nSchon probiert? Gib ihm eine Note von 1 bis 10 in den Kommentaren!');
  P('vente','tous','Ehrlicher Vergleich',
'[Option A] oder [unsere Lösung]? Mal ganz ehrlich. 🤝\n\n[Option A]: ✅ [Vorteil] / ❌ [Grenze]\n[Unsere Lösung]: ✅ [Vorteil] / ✅ [Vorteil] / ❌ [ehrlich zugegebene Grenze]\n\nFür wen es gemacht ist: [ideales Profil].\nFür wen nicht: [Profil].\n\nFragen? Wir antworten in den Kommentaren.');
  P('engagement','tous','Offene Frage',
'Kleine Frage des Tages 👇\n\n[Einfache Frage, die deine Kund*innen betrifft]?\n\nBei uns: [eure Antwort mit persönlicher Note].\n\nJetzt ihr! Wir lesen jeden Kommentar.');
  P('engagement','tous','Dies oder das',
'Bist du eher …\n\n🅰️ [Option A]\noder\n🅱️ [Option B]?\n\nAntworte einfach mit A oder B in den Kommentaren. Freitag wird ausgezählt! 📊');
  P('engagement','tous','Vervollständige den Satz',
'Vervollständige den Satz 👇\n\n„Ein perfekter [Tag / Moment] ist, wenn …“\n\nWir fangen an: [eure Antwort]. 😄');
  P('engagement','tous','Gib’s zu …',
'Gib’s zu … du [kleine Angewohnheit oder typischer Fehler aus deinem Bereich] auch? 🙈\n\nHier wird nicht geurteilt. Aber hier ist ein einfacher Trick: [Trick].\n\nMarkiere die Person, die das IMMER macht 😂');
  P('pedagogie','tous','Karussell: Schritt-für-Schritt-Guide',
'📌 Speicher dir diesen Post, du wirst ihn brauchen.\n\nSo schaffst du [Ergebnis] in [Anzahl] Schritten:\n\n1️⃣ [Schritt 1]\n2️⃣ [Schritt 2]\n3️⃣ [Schritt 3]\n4️⃣ [Schritt 4]\n\n💡 Der Fehler, den du vermeiden solltest: [Fehler].\n\nFragen? Ab in die Kommentare 👇');
  P('pedagogie','tous','Mythos',
'❌ „[Verbreiteter Irrglaube]“\n✅ In Wahrheit: [Fakt].\n\nWarum glauben das so viele? [Ursprung des Mythos].\nWas das für dich bedeutet: [praktische Folge].\n\nHast du’s auch geglaubt? Sei ehrlich 😉');
  P('pedagogie','tous','Checkliste',
'✅ Die Checkliste, bevor du [wichtige Aktion für deine Kund*innen]:\n\n☐ [Punkt 1]\n☐ [Punkt 2]\n☐ [Punkt 3]\n☐ [Punkt 4]\n☐ [Punkt 5]\n\nAlles abgehakt? Dann bist du auf der sicheren Seite. 💪\nSpeicher sie dir für den großen Tag.');
  P('pedagogie','tous','Zahl des Tages',
'[Geprüfte Zahl] 😮\n\nSo viel [was diese Zahl bedeutet] (Quelle: [Quelle]).\n\nWas das für dich heißt: [einfache Einordnung].\nUnser Tipp: [Aktion].\n\nWusstest du das?');
  P('coulisses','tous','Hinter den Kulissen',
'Was du nicht siehst, bevor [Moment, in dem die Kund*innen euch erleben]. 👀\n\n[Uhrzeit]: [Aufgabe]\n[Uhrzeit]: [Aufgabe]\n[Uhrzeit]: [Aufgabe]\n\nNicht glamourös – aber genau deshalb [Ergebnis, das eure Kund*innen schätzen]. ❤️');
  P('coulisses','tous','Team-Porträt',
'Ihr kennt sie/ihn bestimmt … aber kennt ihr [Vorname] wirklich? 👋\n\n🔧 Rolle: [Rolle]\n⏳ Bei uns seit: [Dauer]\n💛 Liebstes an der Arbeit: [Anekdote]\n🤫 Verstecktes Talent: [Talent]\n\nEin paar liebe Worte für [Vorname]? 👇');
  P('coulisses','tous','Unsere Geschichte',
'Alles begann [ungewöhnlicher Ort / Moment]. 🌱\n\n[2–3 Sätze: der Auslöser, die harten Anfänge, was euch durchhalten ließ.]\n\n[Anzahl] Jahre später: [worauf ihr stolz seid].\n\nDanke, dass ihr Teil dieser Geschichte seid. 🙏');
  P('coulisses','tous','Unsere Werte – ganz konkret',
'Wir machen kein [übliche Praxis der Branche]. Niemals. 🙅\n\nWarum? Weil [Überzeugung].\n\nStattdessen [eure Arbeitsweise], auch wenn uns das [Preis dafür] kostet.\n\nDas ist eine bewusste Entscheidung. Ist dir das auch wichtig?');
  P('temoignage','tous','Kundenbewertung',
'⭐⭐⭐⭐⭐\n„[Echtes Zitat der Kundin / des Kunden]“\n— [Vorname], [Stadt / Kontext]\n\nDanke, [Vorname]! Solche Nachrichten sind unser Treibstoff. 🔋\n\nDu willst auch [Aktion]? Link in der Bio.');
  P('temoignage','tous','Kundenprojekt',
'📂 Kundenprojekt: [Vorname / Unternehmen]\n\n🎯 Die Aufgabe: [Bedarf]\n🛠️ Was wir gemacht haben: [Lösung]\n📈 Das Ergebnis: [konkretes Ergebnis]\n\n„[Kurzes Zitat]“\n\nDu hast ein ähnliches Anliegen? Schreib uns.');
  P('lancement','tous','Neuheit',
'🆕 GANZ NEU!\n\n[Name der Neuheit]: [was es ist, in einem Satz].\n\nWarum wir es entwickelt haben: [Kundenbedürfnis].\nWas sich für dich ändert: [Vorteil].\n\n📅 Ab [Datum] · [Preis, falls bekannt]\n👉 [Wo kaufen / buchen]');
  P('lancement','tous','Teaser',
'Da kommt was … 👀\n\nHinweis: [mysteriöser Hinweis].\n\nAm [Datum] um [Uhrzeit] ist es so weit.\nEure Tipps in die Kommentare 👇');
  P('evenement','tous','Event-Ankündigung',
'📅 [Datum] · 📍 [Ort] · 🕒 [Uhrzeit]\n\n[Name des Events]: [Versprechen in einem Satz].\n\nAuf dem Programm:\n• [Highlight 1]\n• [Highlight 2]\n• [Highlight 3]\n\n[Kostenlos / Begrenzte Plätze] → [wie man sich anmeldet]');
  P('evenement','tous','Schließzeiten / Öffnungszeiten',
'📢 Kurze Info\n\n[Name] ist vom [Datum] bis [Datum] [geschlossen / zu besonderen Zeiten geöffnet].\n\n🕒 [Neue Öffnungszeiten]\n\nAb dem [Datum] sind wir wieder für euch da! Danke für euer Verständnis. 🙏');
  P('evenement','tous','Feiertag / Saison',
'[Feiertag / Saison] steht vor der Tür! [Emoji]\n\nPassend dazu: [Angebot, Produkt oder Aktion].\n\nErhältlich vom [Datum] bis [Datum], solange der Vorrat reicht.\n\nWie feiert ihr? 👇');
  P('fidelite','tous','Danke an unsere Kund*innen',
'[Anzahl] [Kund*innen / Bestellungen / Jahre]. 🥹\n\nWir wollten einfach DANKE sagen.\n\nAn alle, die wiederkommen, die uns weiterempfehlen, die uns liebe Nachrichten schreiben.\n\nZur Feier: [Geschenk / Rabatt / Überraschung].');
  P('fidelite','tous','Gewinnspiel',
'🎁 GEWINNSPIEL 🎁\n\nWir verlosen [konkreter Preis]!\n\nSo machst du mit:\n1️⃣ Folge @[Account]\n2️⃣ Like diesen Post\n3️⃣ Markiere [Anzahl] Freund*innen in den Kommentaren\n\nAuslosung am [Datum]. Viel Glück!\n\nDieses Gewinnspiel steht in keiner Verbindung zu [Plattform] und wird nicht von [Plattform] gesponsert oder durchgeführt. Die Gewinnerin / der Gewinner wird per DM benachrichtigt.');
  P('fidelite','tous','Treueprogramm',
'Du kommst oft vorbei? Ist uns aufgefallen. 😉\n\nNeu: [wie die Treuekarte / das Programm funktioniert].\n➡️ [konkrete Belohnung] nach [Anzahl] [Einkäufen / Besuchen].\n\nFrag beim nächsten Mal nach deiner Karte!');
  P('recrutement','tous','Stellenanzeige',
'🚀 WIR STELLEN EIN: [Position]\n\n📍 [Ort] · [Vertragsart] · [Arbeitszeiten]\n\nDeine Aufgaben: [Aufgaben in 2 Zeilen]\nWas wir suchen: [Eigenschaften, nicht unbedingt Abschlüsse]\nWas wir bieten: [Atmosphäre, Benefits, Entwicklung]\n\n📩 Per DM oder an [E-Mail]. Teilen hilft – vielleicht genau der richtigen Person!');

  /* =================================================================== RESTAURANT / CAFÉ / BÄCKEREI */
  V('vente','resto','Das Signature-Gericht','20 s',
    'Das Gericht, das bei uns am häufigsten bestellt wird.','Nahaufnahme: dampft / zerläuft',
    ['(3–10 s) [Anrichten in Nahaufnahme] „[Name des Gerichts]: [wichtigste Zutaten, Zubereitung].“','(10–16 s) [Der erste Bissen / Reaktion] „Hausgemacht, jeden [Tag / Morgen].“'],
    'Reservier dir deinen Tisch: Link in der Bio.');
  V('coulisses','resto','6 Uhr morgens in der Küche','30 s',
    '6 Uhr. Das Restaurant schläft – wir nicht.','Uhrzeit eingeblendet',
    ['(3–12 s) [Warenanlieferung, Kisten] „Die [Produkte] kommen von [Erzeuger], [Entfernung] von hier.“','(12–24 s) [Vorbereitung: Schneiden, Sauce, Teig] „Alles wird hier frisch zubereitet, heute Morgen.“','(24–27 s) [Gastraum bereit, Licht an]'],
    'Sollen wir dir für heute Mittag einen Tisch freihalten?');
  V('engagement','resto','Errate das Gericht','15 s',
    'Errate das Gericht, bevor das Video endet.','extrem enge Nahaufnahmen',
    ['(2–11 s) [5 Zutaten in extremer Nahaufnahme, je 2 s]','(11–13 s) [Auflösung: das Gericht]'],
    'Hattet ihr’s? Ehrliche Antworten in die Kommentare 😄');
  V('fidelite','resto','Wochenkarte','20 s',
    'Die Wochenkarte ist da!','WOCHENKARTE + Wochentage',
    ['(3–16 s) [Eine Einstellung pro Gericht, je 3 s] „Montag [Gericht], Dienstag [Gericht] …“'],
    'Worauf hast du Lust? Reservier unter [Telefon].');
  P('vente','resto','Tagesgericht',
'🍽️ Heute auf der Tafel:\n\n[Vorspeise]\n[Hauptgericht]\n[Dessert]\n\n[Menü]: [Preis] €\n\nHausgemacht mit [regionalem Produkt] von [Erzeuger]. 🌿\n📞 [Telefon] zum Reservieren · 📍 [Adresse]');
  P('coulisses','resto','Unser Erzeuger',
'Das ist [Vorname], der uns seit [Dauer] mit [Produkt] beliefert. 👨‍🌾\n\n[Sein Hof / seine Werkstatt] liegt [Entfernung] von hier. [Detail, das die Qualität zeigt.]\n\nIhm verdanken wir, dass unser [Gericht] so schmeckt.\n\nWir arbeiten einfach gern regional. Ist dir das auch wichtig?');
  P('engagement','resto','Süß oder herzhaft',
'Frühstück: Bist du eher … 🥐 oder 🍳?\n\nWir haben uns entschieden: [eure Vorliebe + Spezialität].\n\nAntworte mit einem Emoji 👇');
  P('evenement','resto','Besonderer Abend',
'🎉 [Tag]abend: [Name des Abends]!\n\n[Menü / Programm / Musik] ab [Uhrzeit].\n[Preis] pro Person, [Getränk inklusive oder nicht].\n\nNur [Anzahl] Plätze: Reservierung unter [Telefon] erforderlich.');

  /* =================================================================== BEAUTY / FRISEUR / KOSMETIK */
  V('vente','beaute','Verwandlung in 15 s','15 s',
    'So kam sie rein …','VORHER',
    ['(2–10 s) [Schritte im Zeitraffer: Schnitt, Farbe, Styling]','(10–13 s) [Reveal: Die Kundin dreht sich um / schaut in den Spiegel] „… und so ging sie wieder raus.“'],
    'Buch deine Verwandlung: Link in der Bio.');
  V('pedagogie','beaute','Der Fehler, der deine Haare kaputt macht','25 s',
    'Hör auf, das nach dem Haarewaschen zu machen.','❌ + Geste, die du vermeiden solltest',
    ['(3–12 s) „Mit dem Handtuch rubbeln [Schaden].“','(12–20 s) „Besser: [richtige Technik], und [Produkt / Trick].“'],
    'Speicher’s dir und schick’s deiner Freundin, die immer rubbelt 😄');
  V('engagement','beaute','Welche Farbe diesen Herbst?','15 s',
    'Kupfer, Karamell oder kühles Haselnussbraun?','3 Farben, Nummern 1-2-3',
    ['(3–12 s) [3 echte Ergebnisse, je 3 s, nummeriert]'],
    'Stimmt ab mit 1, 2 oder 3 in den Kommentaren!');
  V('coulisses','beaute','Die Behandlung von innen','30 s',
    'Was während deiner [Name der Behandlung] passiert.','sanfte Stimmung, gedimmtes Licht',
    ['(3–24 s) [Behandlungsschritte, Hände, Produkte, Entspannung] „Zuerst [Schritt], dann [Schritt] und zum Schluss [Schritt].“','(24–27 s) „[Dauer] nur für dich.“'],
    'Verschenk sie oder gönn sie dir selbst: Buchung über die Bio.');
  P('vente','beaute','Freie Termine',
'✂️ Diese Woche sind noch Termine frei!\n\n[Tag]: [Uhrzeiten]\n[Tag]: [Uhrzeiten]\n\nBehandlung des Monats: [Behandlung] für [Preis] €.\n\n📲 Online buchen (Link in der Bio) oder unter [Telefon].');
  P('pedagogie','beaute','Routine in 3 Schritten',
'Deine [Haar- / Haut]routine für den Abend in 3 Schritten 🌙\n\n1. [Schritt 1 + Produkttyp]\n2. [Schritt 2]\n3. [Schritt 3]\n\nDauer: [Minuten] Min. Ergebnis: [Vorteil].\n\nSpeicher’s dir für heute Abend ✨');
  P('temoignage','beaute','Reaktion der Kundin',
'Ihre Reaktion, als sie sich im Spiegel gesehen hat … 🥹\n\n„[Zitat]“\n\n[Durchgeführte Behandlung] von [Vorname der Friseurin / Kosmetikerin].\n\nDanke für dein Vertrauen, [Vorname der Kundin] 💛');
  P('fidelite','beaute','Gutschein',
'🎁 Keine Idee, was du schenken sollst?\n\nUnsere Gutscheine gibt’s von [Betrag] bis [Betrag] €, [Dauer] gültig für alle Behandlungen.\n\nIm Salon abholen oder per DM bestellen. Das Geschenk, das immer gut ankommt. 💝');

  /* =================================================================== HANDWERK / BAU / RENOVIERUNG */
  V('vente','artisan','Die Baustelle vorher / nachher','30 s',
    'An diesem [Raum] hatte sich seit [Jahr] nichts getan.','VORHER + Jahr',
    ['(3–12 s) [Ausgangszustand, beschädigte Details] „Das Problem: [Problem].“','(12–24 s) [Arbeiten im Zeitraffer] „[Dauer] Arbeit: [Arbeitsschritte].“','(24–27 s) [Totale, fertig] „Und jetzt.“'],
    'Kostenloses Angebot: per DM oder Link in der Bio.');
  V('pedagogie','artisan','Warnsignale: Jetzt muss ein Profi ran','30 s',
    'Wenn du das bei dir siehst, ruf einen Profi.','Zoom auf den Schaden',
    ['(3–12 s) „Warnsignal Nr. 1: [Signal]. Das bedeutet [Ursache].“','(12–20 s) „Warnsignal Nr. 2: [Signal].“','(20–26 s) „Je länger du wartest, desto [Folgen und Kosten].“'],
    'Unsicher? Schick uns ein Foto per DM – wir sagen dir kostenlos Bescheid.');
  V('coulisses','artisan','Handwerkskunst','15 s',
    '[Jahre] Erfahrung in diesem einen Handgriff.','Nahaufnahme Hände / Werkzeug',
    ['(2–12 s) [Fachtechnik in Echtzeit, Originalton, extreme Nahaufnahme]'],
    'Folg uns, wenn du gute Arbeit zu schätzen weißt.');
  V('temoignage','artisan','Kund*innen führen durchs Haus','30 s',
    '„Wir erkennen das Haus nicht wieder.“','Kundenzitat',
    ['(3–25 s) [Kund*innen zeigen das Ergebnis und erzählen] „Was wir wollten: [Wunsch]. Was wir bekommen haben: [Ergebnis]. Was uns besonders gefallen hat: [Termintreue, Sauberkeit, Beratung].“'],
    'Ist dein Projekt das nächste? Kostenloses Angebot.');
  P('vente','artisan','Kostenloses Angebot',
'🏠 Du denkst über [Art der Arbeiten] nach?\n\n✅ Kostenloses Angebot innerhalb von [Frist]\n✅ [Versicherung / Zertifizierung falls zutreffend]\n✅ Einsatzgebiet: [Region]\n\nWir kommen vorbei, messen aus und erklären dir alles. Unverbindlich.\n\n📞 [Telefon] · 📩 DM');
  P('pedagogie','artisan','Fördermittel',
'💶 Gut zu wissen: Deine [Art der] Arbeiten können teilweise gefördert werden.\n\n[Förderung 1, allgemeine Voraussetzungen]\n[Förderung 2]\n\n⚠️ Beträge und Bedingungen ändern sich: Wir prüfen gemeinsam mit dir, was in deinem Fall gilt.\n\nFragen? Schreib uns per DM.');
  P('coulisses','artisan','Baustelle läuft',
'🚧 Aktuelle Baustelle in [Stadt]\n\nTag [n] von [gesamt]: [heutiger Arbeitsschritt].\n\nWas wir heute machen und warum das wichtig ist: [einfache Erklärung].\n\nFortsetzung folgt! 👷');
  P('temoignage','artisan','Projekt abgeschlossen',
'✅ Projekt in [Stadt] abgeschlossen!\n\n[Art der Arbeiten] in [Dauer].\n\n„[Kundenzitat]“\n\nDanke, [Vorname], für dein Vertrauen. Vorher-/Nachher-Fotos: einfach wischen ➡️');

  /* =================================================================== EINZELHANDEL / LADEN */
  V('vente','commerce','Neue Ware','15 s',
    'Neue Ware ist da – und es reicht nicht für alle.','NEU',
    ['(2–12 s) [Schnelles Auspacken, 4–5 Artikel, je 2 s, Preis eingeblendet, falls fix]'],
    'Komm im Laden vorbei oder reservier per DM.');
  V('vente','commerce','3 Geschenkideen unter [Preis]','30 s',
    '3 Geschenkideen unter [Preis] €.','Maximalpreis groß',
    ['(3–11 s) „Für [Typ 1]: [Artikel], [Preis].“','(11–19 s) „Für [Typ 2]: [Artikel].“','(19–26 s) „Und für [Typ 3]: [Artikel]. Geschenkverpackung gratis.“'],
    'Welche rettet dich? Kommentiere 1, 2 oder 3.');
  V('coulisses','commerce','Ich packe deine Bestellung','20 s',
    'Ich packe deine Bestellung, [Vorname der Kundin / des Kunden]!','ASMR Verpacken',
    ['(2–17 s) [Liebevolles Verpacken, Papier, Schleife, handgeschriebene Karte, Originalton]'],
    'Online bestellen: Link in der Bio.');
  V('engagement','commerce','Look des Tages','15 s',
    'Ein Teil, drei Styles.','1 → 3',
    ['(2–13 s) [3 Outfits mit demselben Teil, Übergang bei jedem Fingerschnipsen]'],
    'Dein Favorit: 1, 2 oder 3?');
  P('vente','commerce','Neu eingetroffen',
'📦 Frisch eingetroffen!\n\n[Produkt / Marke]: [kurze, sinnliche Beschreibung].\nGrößen / Modelle: [Details]\nPreis: [Preis]\n\nNur begrenzte Stückzahl. Reservier per DM, wir legen es dir 24 h zurück. 🛍️');
  P('fidelite','commerce','Sale / Aktion',
'🏷️ [Aktion] vom [Datum] bis [Datum]\n\n-[x] % auf [Abteilung / Auswahl]\n[Extra-Vorteil: 2. Artikel, Geschenk …]\n\nIm Laden [und online]. Die besten Teile sind am ersten Tag weg. 😉');
  P('coulisses','commerce','Warum dieses Produkt',
'Warum verkaufen wir eigentlich [Produkt / Marke]? 🤔\n\n• [Grund 1: Qualität, Herstellung]\n• [Grund 2: fair, regional]\n• [Grund 3: Feedback unserer Kund*innen]\n\nWir verkaufen nur, was wir selbst benutzen würden.');
  P('engagement','commerce','Hilf uns bei der Auswahl',
'Wir können uns für die nächste Bestellung nicht entscheiden … hilf uns! 🙏\n\n[Option A] oder [Option B]?\n\nWas in den Kommentaren am meisten gewünscht wird, kommt am [Datum] in den Laden.');

  /* =================================================================== GESUNDHEIT / WELLNESS / THERAPIE */
  V('pedagogie','sante','Eine einfache Übung','30 s',
    'Eine [Dauer]-Übung gegen [Bereich / Verspannung].','Name der Übung',
    ['(3–20 s) [Langsame Demonstration] „Geh in [Position]. Atme [Anleitung]. Wiederhole das [Anzahl] Mal.“','(20–27 s) „Wenn es wehtut, hör auf und sprich mit einer Fachperson.“'],
    'Speicher’s dir für heute Abend.');
  V('pedagogie','sante','So läuft eine Sitzung ab','30 s',
    'Noch nie [Methode] ausprobiert? So läuft’s ab.','die Praxis, ruhige Stimmung',
    ['(3–12 s) „Wir beginnen mit [Gespräch / Anamnese].“','(12–22 s) „Dann [Ablauf der Sitzung].“','(22–27 s) „Eine Sitzung dauert [Dauer].“'],
    'Noch Fragen vorab? Schreib mir.');
  V('engagement','sante','Gesundheitsmythos','25 s',
    '„[Gesundheitsmythos].“ Wahr oder falsch?','WAHR / FALSCH',
    ['(3–20 s) „[Differenzierte Antwort mit Quelle]. Was wirklich zählt: [Tipp].“'],
    'Welchen Mythos soll ich als Nächstes aufklären?');
  V('coulisses','sante','Warum ich diesen Beruf mache','30 s',
    'Ich bin seit [Jahren] [Beruf]. Und zwar aus diesem Grund.','direkt in die Kamera, zugewandt',
    ['(3–25 s) „[Persönlicher Auslöser], [was du an der Begleitung liebst], [was dich an deinen Klient*innen berührt].“'],
    'Pass gut auf dich auf. Termine online, wenn du Unterstützung brauchst.');
  P('pedagogie','sante','Wellness-Tipp',
'🌿 Der Tipp der Woche\n\n[Einfacher, umsetzbarer Tipp]\n\nWarum das hilft: [Erklärung in 2 Sätzen].\n\n⚠️ Dieser Tipp ersetzt keinen ärztlichen Rat. Im Zweifel lass dich untersuchen.\n\nSpeicher ihn dir als Erinnerung 💚');
  P('vente','sante','Terminbuchung',
'📅 [Zeitraum] werden Termine frei.\n\n[Art der Sitzung] · [Dauer] · [Preis]\n[Erstattung durch Krankenkasse / Zusatzversicherung, falls zutreffend]\n\nOnline buchen (Link in der Bio) oder unter [Telefon].');
  P('coulisses','sante','Die Praxis',
'Willkommen in der Praxis 🤍\n\nEin Ort, an dem du dich ab der ersten Minute [sicher / entspannt] fühlen sollst.\n\n📍 [Adresse] · [Anfahrt, Parken, Barrierefreiheit]\n\nBis bald.');
  P('engagement','sante','Check-in',
'Wie geht’s dir diese Woche – mal ganz ehrlich? 🫶\n\nAntworte mit einem Emoji:\n😌 gut\n😐 geht so\n😮‍💨 erschöpft\n\nEgal, wie die Antwort ausfällt: Gönn dir heute [kleine Self-Care-Geste].');

  /* =================================================================== COACH / SPORT / WEITERBILDUNG */
  V('pedagogie','coach','Die Übung, die fast alle falsch machen','25 s',
    'Du machst [Übung] so? Stopp.','❌ falsche Ausführung',
    ['(3–12 s) [Falsche Ausführung] „Hier [Fehler und Risiko].“','(12–21 s) [Richtige Ausführung] „Besser: [Hinweis 1], [Hinweis 2].“'],
    'Speicher’s dir und teste es beim nächsten Training.');
  V('temoignage','coach','Der Fortschritt','30 s',
    'Vor [Dauer] konnte [Vorname] noch nicht [Aktion].','VORHER, Datum',
    ['(3–15 s) [Bilder vom Anfang]','(15–25 s) [Heute] „Was funktioniert hat: [Regelmäßigkeit, Methode].“'],
    'Bereit loszulegen? Probetraining über die Bio.');
  V('engagement','coach','7-Tage-Challenge','20 s',
    'Challenge: 7 Tage lang [Aktion]. Bist du dabei?','7-TAGE-CHALLENGE',
    ['(3–15 s) „Jeden Tag [konkrete, realistische Aktion]. Ich poste meine Version täglich in der Story.“'],
    'Kommentiere „BIN DABEI“, um mitzumachen.');
  V('vente','coach','Das Probetraining','20 s',
    'Du bist noch unsicher? Probier’s einfach aus.','PROBETRAINING [kostenlos / Preis]',
    ['(3–15 s) „In [Dauer] machen wir [Analyse / Schnupperstunde], und du merkst [was du spüren wirst]. Ganz unverbindlich.“'],
    'Buch dein Probetraining: Link in der Bio.');
  P('pedagogie','coach','Express-Workout',
'💪 Express-Workout: [Dauer] Min., ohne Equipment\n\n1. [Übung] — [Wiederholungen]\n2. [Übung] — [Wiederholungen]\n3. [Übung] — [Wiederholungen]\n\n[Anzahl] Runden. [Sekunden] s Pause.\n\nSpeicher’s dir und sag mir in den Kommentaren, wenn du’s geschafft hast ✅');
  P('engagement','coach','Motivation',
'Reminder für [Tag]: [eigener Motivationssatz, kein kopiertes Zitat].\n\nDu musst nicht perfekt sein. Du musst heute nur [Minimal-Aktion].\n\nWas war dein kleiner Erfolg diese Woche? 👇');
  P('vente','coach','Anmeldung offen',
'🚀 Die Anmeldung für [Programm / Kurs] ist offen!\n\nFür wen: [Profil]\nDauer: [Dauer]\nFormat: [vor Ort / online]\nDanach kannst du: [Ergebnis]\n\n[Anzahl] Plätze. Start am [Datum].\n👉 Link in der Bio');
  P('temoignage','coach','Erfolg eines Teilnehmers',
'🏆 Glückwunsch, [Vorname]!\n\n[Erreichtes Ziel] nach [Dauer] harter Arbeit.\n\nWas mich beeindruckt hat: [Eigenschaft der Person].\n\nDu bist als Nächstes dran. Wann legen wir los?');

  /* =================================================================== IMMOBILIEN */
  V('vente','immo','Besichtigung in 30 Sekunden','30 s',
    '[Objektart], [Fläche] m², in [Viertel / Stadt].','Preis + Fläche',
    ['(3–24 s) [Flüssiger Rundgang: Eingang, Wohnzimmer, Küche, Schlafzimmer, Außenbereich] „Das Highlight: [Pluspunkt].“','(24–27 s) „[Preis] · [Energieausweis]“'],
    'Besichtigung nach Vereinbarung: per DM.');
  V('pedagogie','immo','Was ist deine Immobilie wert?','25 s',
    'Ist deine Immobilie wirklich so viel wert, wie du denkst?','€?',
    ['(3–20 s) „Die 3 wichtigsten Kriterien in [Stadt]: [Kriterium 1], [Kriterium 2], [Kriterium 3].“'],
    'Kostenlose Bewertung in 48 h: Link in der Bio.');
  V('coulisses','immo','Ein Tag als Makler*in','30 s',
    'Was Immobilienmakler*innen wirklich machen.','Tag im Zeitraffer',
    ['(3–25 s) [Besichtigungen, Fotos, Notartermin, Telefonate] „Ein Verkauf bedeutet im Schnitt [Anzahl] Besichtigungen und [Dauer].“'],
    'Fragen zum Verkauf? Stellt sie in den Kommentaren.');
  V('temoignage','immo','Schlüsselübergabe','15 s',
    'Der schönste Moment in unserem Job.','🔑',
    ['(2–12 s) [Schlüsselübergabe, Lächeln, mit Einverständnis der Kund*innen]'],
    'Herzlichen Glückwunsch, [Vornamen]! Wer ist als Nächstes dran?');
  P('vente','immo','Neues Objekt',
'🏡 EXKLUSIV · [Stadt / Viertel]\n\n[Objektart] · [Fläche] m² · [Zimmer] Zimmer\n✨ [Pluspunkt 1] · [Pluspunkt 2] · [Pluspunkt 3]\n\n[Preis] € [Provision: …]\nEnergieausweis: [Klasse]\n\n📩 Besichtigung nach Vereinbarung per DM.');
  P('pedagogie','immo','Tipp für Verkäufer*innen',
'Du willst verkaufen? 3 Dinge, die du VOR den Fotos erledigen solltest 📸\n\n1. [Tipp 1]\n2. [Tipp 2]\n3. [Tipp 3]\n\nGut präsentiert verkauft sich eine Immobilie [schneller / besser].\n\nKostenlose Bewertung: Link in der Bio.');
  P('temoignage','immo','Verkauft',
'🔑 VERKAUFT!\n\n[Objektart] in [Stadt], verkauft in [Dauer].\n\n„[Zitat der Verkäufer*innen]“\n\nDanke, [Vornamen], für euer Vertrauen. Du möchtest verkaufen? Lass uns reden.');
  P('engagement','immo','Lieblingsobjekt',
'Wofür würdest du dich entscheiden? 🤔\n\n🅰️ [Objekt A: Pluspunkt]\n🅱️ [Objekt B: Pluspunkt]\n\nGleiches Budget: [Budget]. Stimmt in den Kommentaren ab!');

  /* =================================================================== DIENSTLEISTUNG / B2B / FREELANCE */
  V('pedagogie','services','Der Fehler, der Unternehmen teuer zu stehen kommt','30 s',
    'Dieser Fehler kostet die meisten [Zielgruppe] [Betrag / Zeit].','💸',
    ['(3–13 s) „Der Fehler: [Fehler].“','(13–23 s) „Warum das so schlimm ist: [Folge in Zahlen, falls belegt].“','(23–27 s) „Die einfache Lösung: [Lösung].“'],
    'Schreib uns „AUDIT“ per DM – wir schauen uns deinen Fall an.');
  V('vente','services','So arbeite ich','30 s',
    'So läuft die Zusammenarbeit mit mir ab.','Schritte 1-2-3',
    ['(3–12 s) „1. [Kennenlerngespräch / Audit].“','(12–20 s) „2. [Angebot / Umsetzung].“','(20–27 s) „3. [Übergabe / Betreuung]. Durchschnittliche Dauer: [Dauer].“'],
    'Das erste Gespräch ist kostenlos: Link in der Bio.');
  V('temoignage','services','Kundenergebnis','25 s',
    '[Ergebnis in Zahlen] für [Art von Kunde].','die Zahl',
    ['(3–20 s) „Die Ausgangslage: [Situation]. Was wir gemacht haben: [Maßnahme]. Das Ergebnis: [Ergebnis].“'],
    'Du willst das auch? Schreib mir per DM.');
  V('coulisses','services','Mein Arbeitsplatz, meine Tools','20 s',
    'Die [Anzahl] Tools, ohne die ich nicht arbeite.','Arbeitsplatz-Setup',
    ['(3–17 s) [Eine Einstellung pro Tool] „[Tool]: für [Einsatzzweck].“'],
    'Und du – welches Tool ist für dich unverzichtbar?');
  P('pedagogie','services','LinkedIn-Post: Lektion gelernt',
'[Ausgangssituation in einem knackigen Satz].\n\nVor [Dauer] [was passiert ist].\n\nWas ich daraus gelernt habe:\n→ [Lektion 1]\n→ [Lektion 2]\n→ [Lektion 3]\n\nUnd du – welche Lektion hat dich am meisten gekostet?');
  P('vente','services','Leistungsangebot',
'Du bist [Zielgruppe] und [Problem]?\n\nIch helfe [Zielgruppe], [Ergebnis] zu erreichen – mit [Methode], in [Dauer].\n\nDas bekommst du:\n✔️ [Leistung 1]\n✔️ [Leistung 2]\n✔️ [Leistung 3]\n\n[Anzahl] Plätze in diesem Monat. Kostenloses Kennenlerngespräch: Link in den Kommentaren.');
  P('temoignage','services','LinkedIn-Fallstudie',
'[Kunde] hatte [Problem].\n\nIn [Dauer] haben wir:\n1. [Maßnahme]\n2. [Maßnahme]\n3. [Maßnahme]\n\nErgebnis: [messbares Ergebnis].\n\nDas Entscheidende war nicht [was man denkt], sondern [echter Schlüsselfaktor].\n\nGeht’s dir gerade ähnlich? Lass uns reden.');
  P('coulisses','services','Hinter den Kulissen eines Projekts',
'Was meine Kund*innen nicht sehen (und das ist auch gut so) 👇\n\n• [Unsichtbarer Schritt 1]\n• [Unsichtbarer Schritt 2]\n• [Unsichtbarer Schritt 3]\n\nDas sind 80 % der Arbeit für 20 % dessen, was man sieht. Und genau da entscheidet sich die Qualität.');


  /* =================================================================== BILD-PROMPTS — ALLE BRANCHEN */
  I('produit','tous','Studio-Packshot vor einfarbigem Hintergrund',
'Professionelles Produktfoto von [Produkt], mittig platziert vor einfarbigem Hintergrund in [Markenfarbe], weiches Studiolicht mit leichtem Schlagschatten am Boden, klare Reflexe auf dem Material, Fokus exakt auf dem Logo, viel freie Fläche oben für Text. Hochwertiger Katalog-Look, quadratisches Format.');
  I('produit','tous','Produkt im Einsatz',
'[Produkt] wird von einer Person in [realistischer Wohnumgebung: Küche, Büro, Badezimmer …] benutzt, natürliches Licht am späten Vormittag durch ein Fenster, Hände sichtbar beim [Handgriff], Hintergrund leicht unscharf, warme, natürliche Farben. Authentisches Lifestyle-Foto, nicht gestellt. Hochformat 4:5.');
  I('produit','tous','Flat Lay von oben',
'Flat-Lay-Komposition von oben: [Hauptprodukt] in der Mitte, umgeben von [3 bis 5 passenden Objekten oder Zutaten], sorgfältig arrangiert auf einer Oberfläche aus [hellem Holz / Marmor / Leinen], weiche Schatten, Farbpalette [Farben], viel Luft zwischen den Objekten. Cleaner Magazin-Stil. Quadratisches Format.');
  I('produit','tous','Dynamische Levitation',
'[Produkt] schwebt in der Luft, umgeben von [passenden Elementen: Spritzer, Früchte, Blätter, Pulver], mitten in der Bewegung eingefroren, Farbverlauf-Hintergrund in [Farbe], kontrastreiches Licht, gestochen scharf, Premium-Werbe-Look. Hochformat 9:16.');
  I('produit','tous','Produktlinie in Reihe',
'Die [Anzahl] Produkte der Linie [Name] von links nach rechts auf einem minimalistischen Regal aufgereiht, vom kleinsten zum größten, Hintergrund [Farbe], gleichmäßiges Licht, gut lesbare Etiketten, sauberer E-Commerce-Foto-Look. Querformat 16:9.');
  I('pub','tous','Werbemotiv mit Platz für Text',
'Werbemotiv für [Angebot]: [Produkt oder Service] in Szene gesetzt auf der rechten Bildhälfte, die linke Hälfte ist eine leere Farbfläche in [Farbe] für eine Headline, energiegeladene Stimmung, kräftige Markenfarben, klares Licht. Keinen Text ins Bild schreiben. Format 4:5.');
  I('pub','tous','Vorher / Nachher nebeneinander',
'Bild vertikal in zwei Hälften geteilt: links [Vorher-Zustand, matt und realistisch], rechts [Nachher-Zustand, klar und strahlend], gleicher Bildausschnitt und gleicher Winkel auf beiden Seiten, feine weiße Linie in der Mitte, identisches Licht. Realistisches Foto, keine übertriebene Retusche. Quadratisches Format.');
  I('pub','tous','Event-Plakat',
'Plakat für [Event]: Szene, die [Stimmung des Events] im Vordergrund zeigt, viel freier Platz oben für den Titel und unten für das Datum, Farben [Palette], Stil [modern-grafisch / retro / elegant]. Kein generierter Text im Bild. Hochformat 9:16.');
  I('pub','tous','Story-Hintergrund mit Textfeld',
'Vertikaler Hintergrund für eine Instagram-Story: [Textur oder Szene passend zur Marke] weichgezeichnet und sanft, ein großes, helles, halbtransparentes Rechteck in der Mitte für eine Botschaft, Farben [Markenpalette], ruhige, gut lesbare Stimmung. Format 9:16.');
  I('lieu','tous','Einladende Fassade',
'Fassade von [Art des Geschäfts] [Name] am frühen Abend, Schaufenster von innen warm beleuchtet, Ladenschild gut sichtbar, sauberer Gehweg, ein paar unscharfe Passant*innen, blauer Dämmerungshimmel. Realistisches, einladendes Architekturfoto. Format 4:5.');
  I('lieu','tous','Gemütliches Interieur',
'Innenansicht von [Ort: Laden, Salon, Praxis, Werkstatt], leer und perfekt aufgeräumt, weiches natürliches Licht, Grünpflanzen, Materialien [Holz, Leinen, Metall], Weitwinkelperspektive vom Eingang aus, einladende, hochwertige Atmosphäre. Realistisches Interior-Foto. Querformat 3:2.');
  I('personnes','tous','Porträt der Inhaberin / des Inhabers',
'Professionelles Porträt von [Beschreibung: Alter, Stil] in [ihrem / seinem] [Arbeitsumfeld], lächelnd, Blick in die Kamera, Outfit [Outfit], Hintergrund leicht unscharf, weiches seitliches Licht, authentische, selbstbewusste Ausstrahlung. Realistisches Porträtfoto, 85-mm-Objektiv. Format 4:5.');
  I('personnes','tous','Das Team in Aktion',
'Foto von [Anzahl] Teammitgliedern beim gemeinsamen [Tätigkeit aus dem Arbeitsalltag], natürlicher, vertrauter Moment, ein paar Lächeln, natürliches Licht, warme Farben, Reportage-Ausschnitt, spontan aufgenommen. Realistisches Foto, nicht gestellt. Querformat 3:2.');
  I('personnes','tous','Hände bei der Arbeit',
'Nahaufnahme von geübten Händen beim [präziser Handgriff aus dem Beruf], Werkzeuge und Material gut sichtbar, sehr geringe Schärfentiefe, Streiflicht, das die Texturen betont, handwerkliche, sorgfältige Atmosphäre. Quadratisches Format.');
  I('saison','tous','Saisonale Stimmung',
'[Produkt oder Ort] dekoriert für [Saison oder Anlass: Weihnachten, Sommer, Schulstart, Valentinstag …], dezente, elegante Deko-Elemente ([Deko]), [warmes / kühles] Licht, saisonale Farben, festliche, aber hochwertige Stimmung. Format 4:5.');
  I('saison','tous','Festlicher Hintergrund für Ankündigungen',
'Festlicher Grafik-Hintergrund für [Anlass], [Elemente: Konfetti, Girlanden, Schneeflocken, Blätter] an den Rändern, freie, einfarbige Mitte für eine Ankündigung, Farben [Palette], klarer, moderner Look. Kein Text. Quadratisches Format.');

  /* =================================================================== BILD-PROMPTS — NACH BRANCHE */
  I('produit','resto','Signature-Gericht in Nahaufnahme',
'Appetitliche Nahaufnahme von [Gericht], angerichtet auf einem [Tellerstil]-Teller auf einem Holztisch, leichter Dampf, glänzende Sauce, frische Kräuter, natürliches Seitenlicht, unscharfer, gemütlicher Restaurant-Hintergrund. Professionelles Food-Foto. Format 4:5.');
  I('produit','resto','Gedeckter Tisch von oben',
'Draufsicht auf einen Tisch voller [Gerichte und Getränke], die unter Freund*innen geteilt werden, Hände, die sich bedienen, Tischdecke aus [Material], weiches Licht, warme Farben, gesellige, großzügige Stimmung. Lifestyle-Food-Foto. Quadratisches Format.');
  I('ambiance','resto','Terrasse bei Sonnenuntergang',
'Terrasse von [Restaurant / Café] bei Sonnenuntergang, gedeckte Tische, leuchtende Lichterketten, funkelnde Gläser, ein paar unscharfe, lachende Gäste, goldenes Licht. Realistisches Stimmungsfoto. Format 4:5.');
  I('produit','resto','Gebäck an der Theke',
'Bäckertheke voller goldbrauner, knuspriger [Croissants / Brote], Nahaufnahme der blättrigen Struktur, Morgenlicht, etwas Mehl auf dem Holz, handwerkliche Atmosphäre. Format 4:5.');
  I('produit','beaute','Premium-Pflegeflasche',
'[Beauty-Produkt] auf einem nassen Stein in [Farbe], Wassertropfen auf der Flasche, [Pflanzen]blätter drumherum, weiches, diffuses Licht, Farbpalette [Farben], hochwertige Spa-Ästhetik. Format 4:5.');
  I('personnes','beaute','Frisur-Ergebnis',
'Porträt von hinten und im Dreiviertelprofil einer Kundin mit [Schnitt / Farbe], glänzendes Haar in Bewegung, weiches Salonlicht, unscharfer Salon-Hintergrund, realistischer, natürlicher Look. Format 4:5.');
  I('lieu','beaute','Entspannende Behandlungskabine',
'Leere, vorbereitete Behandlungskabine: Massageliege mit gefalteten Handtüchern, brennende Kerzen, Pflanzen, warmes gedimmtes Licht, natürliche Materialien, ruhige, saubere Zen-Atmosphäre. Format 4:5.');
  I('produit','artisan','Fertiges Projekt',
'Foto von [Projekt: Küche, Badezimmer, Terrasse, Möbelstück], fertiggestellt, gerade Linien, saubere Oberflächen, natürliches Licht, aufgeräumter, schlicht inszenierter Raum, Weitwinkelperspektive. Realistisches Interior-Architekturfoto. Querformat 3:2.');
  I('personnes','artisan','Handwerker*in auf der Baustelle',
'[Beruf] in sauberer Arbeitskleidung auf einer Baustelle für [Art der Arbeiten], konzentriert beim [Handgriff], Profi-Werkzeug, Helm oder Schutzausrüstung, Tageslicht, realistisches, wertschätzendes Reportagefoto. Format 4:5.');
  I('produit','commerce','Schaufenster mit Neuheit',
'[Artikel] im Schaufenster des Ladens in Szene gesetzt, elegantes Display, passende Accessoires, warme Schaufensterbeleuchtung, leichte Spiegelungen in der Scheibe, Innenstadt-Shopping-Atmosphäre. Format 4:5.');
  I('produit','commerce','Outfit draußen getragen',
'Person trägt [Kleidungsstück / Accessoire] in einer Straße in [Art von Stadt], natürliche Pose beim Gehen, Licht am späten Nachmittag, unscharfer Hintergrund, Lifestyle-Modefoto. Format 4:5.');
  I('lieu','sante','Vertrauenerweckende Praxis',
'Helle, vertrauenerweckende Praxis für [Fachrichtung], bequemer Sessel, Pflanzen, sanfte Farben [Palette], natürliches Licht, keine Personen, Gefühl von Ruhe und Sauberkeit. Querformat 3:2.');
  I('ambiance','sante','Wellness-Motiv',
'Beruhigende Wellness-Szene: [Element: Tasse Kräutertee, Kieselsteine, Blatt, ruhiges Wasser] in Nahaufnahme, sanftes Morgenlicht, Farbpalette [Farben], viel freie Fläche für Text. Quadratisches Format.');
  I('personnes','coach','Training unter voller Belastung',
'Person mitten in [Übung] in [Studio / draußen], leichter Schweiß, angespannte Muskeln, kontrastreiches Licht, dynamischer Bildausschnitt aus der Froschperspektive, motivierende, energiegeladene Stimmung. Realistisches Sportfoto. Format 4:5.');
  I('pub','coach','Motiv für Sport-Challenge',
'Sportmotiv für eine [Dauer]-Challenge: [Sportart]-Ausrüstung auf dem Boden (Trinkflasche, Handtuch, Schuhe), Morgenlicht, Hintergrund [Farbe], viel freier Platz oben für einen Titel. Kein Text. Format 4:5.');
  I('lieu','immo','Lichtdurchflutetes Wohnzimmer',
'Wohnzimmer von [Objektart], durchflutet von natürlichem Licht, große Fenster, neutrale, moderne Einrichtung, Weitwinkelperspektive vom Eingang aus, gerade vertikale Linien, professioneller Immobilienfoto-Look. Querformat 3:2.');
  I('lieu','immo','Virtuelles Home Staging',
'Derselbe Raum [Beschreibung des leeren Raums], eingerichtet im [skandinavischen / zeitgenössischen / Boho]-Stil: Sofa, Teppich, Leuchten, Pflanzen, natürliches Licht, realistische Darstellung, originalgetreu zu Wänden und Fenstern. Querformat 3:2.');
  I('pub','services','Expertise-Motiv',
'Konzeptbild für [Dienstleistung]: aufgeräumter Schreibtisch mit Laptop, Notizbuch und Kaffee, Bildschirm zeigt [Art von Tabelle oder Diagramm], natürliches Licht, Farbpalette [Markenfarben], professionelle, entspannte Atmosphäre. Format 4:5.');
  I('personnes','services','Kundentermin',
'Zwei Personen bei einem geschäftlichen Termin am Tisch, freundliches Gespräch, Unterlagen und Laptop, natürliches Bürolicht, unscharfer Hintergrund, vertrauensvolle Atmosphäre. Realistisches Corporate-Foto. Querformat 3:2.');

  /* =================================================================== VIDEO-PROMPTS — ALLE BRANCHEN */
  W('produit','tous','360°-Produktrotation','5 s',
'[Produkt] auf einem Sockel, der sich langsam um die eigene Achse dreht, einfarbiger Hintergrund in [Farbe], weiches Studiolicht mit Reflexen, die über das Material gleiten, statische Kamera leicht von oben, flüssige, gleichmäßige Bewegung. Format 9:16.');
  W('produit','tous','Reveal-Kamerafahrt','5 s',
'Die Kamera fährt langsam von einer unscharfen Nahaufnahme von [Produktdetail] zurück, bis [Produkt] vollständig zu sehen ist, Fokus zieht allmählich nach, warmes Seitenlicht, Staubpartikel schweben im Licht. Format 9:16.');
  W('produit','tous','Produkt in Aktion','5 s',
'Hände [Handgriff: öffnen, gießen, auftragen, zusammenbauen] [Produkt] in Nahaufnahme, natürliche, präzise Bewegung, natürliches Licht, unscharfer Hintergrund von [Ort], statische Kamera auf Tischhöhe. Format 9:16.');
  W('produit','tous','Zutaten fallen in Zeitlupe','5 s',
'[Zutaten oder Elemente] fallen in Zeitlupe rund um [Produkt] und prallen leicht ab, Hintergrund [Farbe], kontrastreiches Licht, statische Kamera, Premium-Werbe-Look. Format 9:16.');
  W('ambiance','tous','Atmosphäre vor Ort','5 s',
'Langsame seitliche Kamerafahrt durch [Ort: Laden, Gastraum, Werkstatt], leer und perfekt aufgeräumt, weiches Licht am frühen Abend, kleine funkelnde Lichter, geringe Schärfentiefe, warme, einladende Atmosphäre. Format 9:16.');
  W('ambiance','tous','Morgendliches Öffnen','5 s',
'Eine Hand dreht das „Geöffnet“-Schild an der Glastür von [Geschäft] um, Morgenlicht fällt in den Raum, statische Kamera von innen, natürliche Bewegung, Stimmung eines beginnenden Tages. Format 9:16.');
  W('personnes','tous','Freundliche Begrüßung','5 s',
'[Person] hinter der Theke blickt auf, lächelt und winkt kurz in die Kamera, sanftes natürliches Licht, unscharfer Hintergrund von [Ort], natürliche, herzliche Bewegung. Format 9:16.');
  W('personnes','tous','Handgriff in Zeitlupe','5 s',
'Nahaufnahme in Zeitlupe von Händen, die [präziser Handgriff aus dem Beruf], Werkzeuge und Material gut sichtbar, Streiflicht, das die Texturen betont, statische Kamera, handwerkliche Atmosphäre. Format 9:16.');
  W('pub','tous','Vorher → Nachher als Übergang','5 s',
'Statische Einstellung von [Ort oder Objekt] im Vorher-Zustand, dann wischt ein Lichtstreifen von links nach rechts durchs Bild und enthüllt den Nachher-Zustand, gleicher Bildausschnitt, flüssiger Übergang, realistische Darstellung. Format 9:16.');
  W('pub','tous','Schluss-Zoom aufs Logo','5 s',
'Die Kamera fährt langsam von [Markenelement: Ladenschild, Tasche, Schürze, Verpackung] zurück und enthüllt die Szene drumherum, warmes Licht, langsame, sichere Bewegung, ruhiges Schlussbild für eingeblendeten Text. Format 9:16.');
  W('saison','tous','Festliche Stimmung','5 s',
'[Ort oder Produkt] dekoriert für [Anlass], funkelnde Lichterketten, sanft fallende(r) [Schnee / Konfetti / Blütenblätter], Kamera fährt langsam vor, festliche, sanfte Stimmung. Format 9:16.');
  W('ambiance','tous','Tages-Zeitraffer','5 s',
'Zeitraffer von [Ort] von morgens bis abends, das Licht wechselt von goldenem Tageslicht zu abendlichem Blau, unscharfe Silhouetten von Kund*innen kommen und gehen, statische Kamera. Format 9:16.');

  /* =================================================================== VIDEO-PROMPTS — NACH BRANCHE */
  W('produit','resto','Dampfendes Gericht','5 s',
'Nahaufnahme von frisch angerichtetem [Gericht], Dampf steigt sanft auf, ein Löffel gießt [Sauce] in einem feinen Strahl darüber, warmes Seitenlicht, unscharfer Gastraum im Hintergrund, statische Kamera leicht von oben. Format 9:16.');
  W('produit','resto','Glas wird gefüllt','5 s',
'[Getränk] wird in Zeitlupe in ein [Art von] Glas gegossen, Bläschen und kreisende Eiswürfel, Kondenswassertropfen, warmes Thekenlicht, statische Kamera auf Glashöhe. Format 9:16.');
  W('coulisses','resto','Koch in der Küche','5 s',
'Ein Koch schwenkt [Zutaten] in einer Pfanne, hohe Flamme, Dampf, schnelle, kontrollierte Bewegung, Profiküche im Hintergrund, kontrastreiches Licht, statische Kamera im Dreiviertelwinkel. Format 9:16.');
  W('produit','resto','Brot aus dem Ofen','5 s',
'Ein Bäcker holt ein Blech goldbrauner [Brote / Croissants] aus dem Ofen, heißer Dampf, knackende Kruste, orangefarbenes Ofenlicht, statische Kamera auf Ofenhöhe. Format 9:16.');
  W('pub','beaute','Reveal der Frisur','5 s',
'Eine Kundin dreht sich langsam zur Kamera und schüttelt dabei leicht ihr [Schnitt / Farbe]-Haar, glänzendes Haar in Bewegung, weiches Salonlicht, unscharfer Hintergrund, natürliches Lächeln. Format 9:16.');
  W('produit','beaute','Pflegetextur','5 s',
'Nahaufnahme in Zeitlupe: Ein Klecks [Creme / Serum] fällt auf eine Glasfläche und verteilt sich sanft, cremige Textur, diffuses Licht, Hintergrund in [Pastellfarbe], statische Kamera. Format 9:16.');
  W('ambiance','beaute','Moment der Entspannung','5 s',
'Eine Person liegt mit geschlossenen Augen während einer Gesichtsbehandlung, die Hände der Kosmetikerin massieren langsam, Kerzen und gedimmtes Licht, Kamera fährt ganz sanft vor. Format 9:16.');
  W('coulisses','artisan','Werkzeug im Einsatz','5 s',
'Nahaufnahme von [Werkzeug: Schleifmaschine, Kelle, Säge, Pinsel] im Einsatz auf [Material], Staub oder Späne fliegen im Licht, Hände in Arbeitshandschuhen, Tageslicht, statische Kamera. Format 9:16.');
  W('pub','artisan','Fertiger Raum','5 s',
'Langsame Kamerafahrt durch [renovierter Raum], fertiggestellt, natürliches Licht fällt durchs Fenster, saubere Oberflächen, sauberer Boden, flüssige Kamerabewegung vom Eingang bis ans Ende des Raums. Format 9:16.');
  W('produit','commerce','Geschenkverpackung','5 s',
'Hände verpacken [Artikel] in [Farbe]-Papier und binden eine Schleife, Nahaufnahme von oben, sorgfältige Bewegungen, weiches Licht, Holztheke, statische Kamera. Format 9:16.');
  W('produit','commerce','Neuheiten-Parade','5 s',
'Kamera gleitet langsam an einer Kleiderstange oder einem Regal mit neu eingetroffenen [Artikeln] entlang, harmonische Farben, warmes Ladenlicht, geringe Schärfentiefe. Format 9:16.');
  W('ambiance','sante','Ruhiges Atmen','5 s',
'Eine Person sitzt im Schneidersitz an einem Fenster und atmet langsam ein und aus, die Schultern entspannen sich, sanftes Morgenlicht, eine Pflanze bewegt sich leicht, statische Kamera. Format 9:16.');
  W('pedagogie','sante','Übung vorgeführt','5 s',
'[Therapeut*in] zeigt langsam [Übung oder Dehnung] in einer hellen Praxis, kontrollierte, flüssige Bewegung, statische Kamera in der Totalen, sanftes natürliches Licht. Format 9:16.');
  W('pub','coach','Explosive Power','5 s',
'Zeitlupe einer Person bei [explosive Übung: Sprung, Sprint, Heben], Staub oder Schweißtropfen im Licht, starkes Gegenlicht, statische Kamera aus der Froschperspektive. Format 9:16.');
  W('personnes','coach','Coach feuert an','5 s',
'Ein Coach klatscht und feuert [Teilnehmer*in] an, die/der gerade den letzten Satz beendet, Lächeln und High five, helles Fitnessstudio, statische Kamera auf Schulterhöhe. Format 9:16.');
  W('pub','immo','Flüssiger Rundgang','5 s',
'Flüssige Kamerafahrt vom Eingang von [Objektart] bis ins helle Wohnzimmer, gerade vertikale Linien, natürliches Licht, neutrale Einrichtung, langsame, stabile Bewegung wie mit Gimbal. Format 9:16.');
  W('pub','immo','Drohnen-Außenansicht','5 s',
'Luftaufnahme, die langsam über [Haus / Gebäude] aufsteigt und [Garten, Viertel, Aussicht] enthüllt, goldenes Licht am frühen Abend, flüssige Bewegung. Format 9:16.');
  W('pub','services','Bildschirm wird lebendig','5 s',
'Nahaufnahme eines Computerbildschirms, auf dem sich [Diagramm / Dashboard] nach und nach füllt, sanfte Reflexe, aufgeräumter Schreibtisch, Kamera fährt langsam vor, professionelle Atmosphäre. Format 9:16.');
  W('personnes','services','Handschlag','5 s',
'Zwei Personen schütteln sich lächelnd über einen Schreibtisch hinweg die Hand, unterschriebene Unterlagen im Vordergrund, natürliches Bürolicht, statische Kamera im Dreiviertelwinkel, natürliche Bewegung. Format 9:16.');

  window.MCD_SCRIPTS=L;
  window.MCD_SCRIPTS_META={
    lang:'de',
    types:{tous:'Alle',video:'🎬 Videoskripte',post:'✍️ Captions',img:'🖼️ Bild-Prompts',vid:'🎥 Video-Prompts'},
    objectifs:{vente:'💰 Verkaufen',engagement:'💬 Engagement',pedagogie:'🎓 Tipps',coulisses:'🎬 Behind the Scenes',temoignage:'⭐ Kundenstimmen',lancement:'🚀 Launch',evenement:'📅 Event',fidelite:'🎁 Kundenbindung',recrutement:'🤝 Recruiting',produit:'📦 Produkt',ambiance:'✨ Atmosphäre',pub:'📣 Werbung & Aktionen',lieu:'🏠 Ort',personnes:'🙂 Menschen',saison:'🎄 Saison & Feiertage'},
    metiers:{tous:'Alle Branchen',resto:'Restaurant & Café',beaute:'Beauty & Friseur',artisan:'Handwerk & Bau',commerce:'Einzelhandel',sante:'Gesundheit & Wellness',coach:'Coaching & Sport',immo:'Immobilien',services:'Dienstleistungen & B2B'},
    ui:{title:'Skript-Bibliothek',lead:'{n} Skripte, Captions und Bild-/Video-Prompts. Ersetze die [eckigen Klammern] oder lass Marshall sie an deine Marke anpassen.',search:'Suchen: Vorher/Nachher, Gewinnspiel, Produkt …',all:'Alle',metier:'Branche',count1:'{n} Eintrag',countN:'{n} Einträge',empty:'Keine Treffer. Probier ein anderes Wort oder „Alle“.',loading:'Bibliothek wird geladen …',
      kVideo:'Videoskript',kPost:'Caption',kImg:'Bild-Prompt',kVid:'Video-Prompt',adapted:'✨ Von Marshall angepasste Version',orig:'Original ansehen',
      insert:'⬇ In die Caption einfügen',copy:'📋 Kopieren',adapt:'✨ Mit Marshall anpassen',again:'✨ Andere Version',busy:'✨ Marshall schreibt …',create:'🪄 Mit KI-Studio erstellen',
      inserted:'In die Caption eingefügt ✓',insertedUndo:'In die Caption eingefügt · tippen zum Rückgängigmachen',copied:'Kopiert ✓',copyFail:'Kopieren nicht möglich',noComposer:'Öffne zuerst den Composer',
      sent:'Prompt an KI-Studio gesendet ✓',adaptFail:'Marshall konnte diesen Text nicht anpassen: ',close:'Schließen',
      credits:'Prompts inspiriert von den Strukturen aus awesome-ad-video-prompts (CC BY 4.0) und awesome-nanobanana-pro.'}
  };
})();
