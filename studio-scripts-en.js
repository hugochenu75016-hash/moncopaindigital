/* Script library — Social Studio (Mon Copain Digital)
   Ready-to-fill video scripts (Reels, TikTok, Shorts, voiceover, avatars) and post captions.
   Replace the [brackets] yourself, or let Marshall fill them in (“Adapt with Marshall”). */
(function(){
  var L=[];
  /* Section labels for a video script (to translate) */
  var LB={hook:'🎬 HOOK (0–3 s)',screen:'On screen',body:'📍 BREAKDOWN',cta:'👉 CALL TO ACTION',q1:'“',q2:'”'};
  function V(o,s,n,d,hook,ecran,steps,cta){
    L.push({t:'video',o:o,s:s,n:n,d:d,x:LB.hook+'\n'+LB.q1+hook+LB.q2+'\n['+LB.screen+': '+ecran+']\n\n'+LB.body+'\n'+steps.join('\n')+'\n\n'+LB.cta+'\n'+LB.q1+cta+LB.q2});
  }
  function P(o,s,n,txt){ L.push({t:'post',o:o,s:s,n:n,x:txt}); }
  /* Creation prompts: I = image, W = video (Wan 2.2 / Veo). Written in the app’s language; Marshall rewrites them into a pro prompt before generation. */
  function I(o,s,n,txt){ L.push({t:'img',o:o,s:s,n:n,x:txt}); }
  function W(o,s,n,d,txt){ L.push({t:'vid',o:o,s:s,n:n,d:d,x:txt}); }

  /* =================================================================== VIDEO SCRIPTS — ALL BUSINESSES */
  V('vente','tous','Problem → solution','30 s',
    'Dealing with [your customers’ most common problem] too?','the problem in 5 words, big text',
    ['(3–10 s) “We hear it every single day: [typical customer line].”','(10–22 s) “At [name], we’ve got [your solution]: [benefit 1], [benefit 2].” [Shot: you in action]','(22–27 s) “The result: [concrete result].” [Shot: the result]'],
    'DM us “[keyword]” and we’ll get back to you today.');
  V('vente','tous','Before / After','20 s',
    'Just look at the difference.','BEFORE (freeze frame, 1 s)',
    ['(2–8 s) [Before shot] “Here’s how it looked: [visible issue].”','(8–15 s) [Quick transition] “And here it is after [time / job].” [After shot]','(15–18 s) “What made all the difference: [the key detail].”'],
    'Want the same result? Link in bio.');
  V('vente','tous','3 reasons to choose…','30 s',
    '3 reasons our customers choose [product/service].','“3 REASONS” + counter ticking up',
    ['(3–10 s) “1: [reason 1, concrete].” [Illustrative shot]','(10–17 s) “2: [reason 2].”','(17–25 s) “And 3, the big one: [reason 3].”'],
    'Which one matters most to you? Tell us in the comments.');
  V('vente','tous','Limited-time offer','15 s',
    'Only until [date]!','[OFFER] huge, countdown timer',
    ['(3–8 s) “[Exact offer] on [product/service].” [Product shot]','(8–12 s) “Why? [honest reason: anniversary, end of line…].”'],
    'Book before [date]: link in bio.');
  V('vente','tous','Objection handled','30 s',
    '“It’s too expensive.” We hear it a lot. Here’s the truth.','the objection in quotes',
    ['(3–12 s) “What you’re really paying for: [what’s included, how long it lasts, time saved].”','(12–22 s) “Compared to [alternative], it works out to [simple math or comparison].”','(22–27 s) “And if [guarantee / trial / pay in installments].”'],
    'Got another question? Drop it in the comments, we answer everything.');
  V('vente','tous','3-step demo','20 s',
    'Here’s how it works, in 3 moves.','hands + product, close-up',
    ['(2–7 s) “One: [move 1].”','(7–12 s) “Two: [move 2].”','(12–17 s) “Three: [move 3]. That’s it.” [Result shot]'],
    'Available at [name] / on [website].');
  V('engagement','tous','What nobody tells you about…','30 s',
    'Nobody tells you this about [topic].','text that “reveals” itself',
    ['(3–12 s) “[Surprising but true fact].”','(12–22 s) “In plain terms, that means: [what it means for the customer].”','(22–27 s) “Our advice: [simple tip].”'],
    'Save this video so you don’t forget.');
  V('engagement','tous','Poll: are you more…','15 s',
    'Team [option A] or team [option B]?','A vs B, split screen',
    ['(3–7 s) [Option A shot] “[A]: [what’s great about A].”','(7–11 s) [Option B shot] “[B]: [what’s great about B].”'],
    'Vote in the comments: A or B?');
  V('engagement','tous','Customer POV','15 s',
    'POV: you just [customer situation].','“POV: …” at the top of the screen',
    ['(3–10 s) [Scene from the customer’s point of view, no talking or with a trending sound]','(10–13 s) [Reaction / smile / result]'],
    'Tag someone who needs this.');
  V('engagement','tous','Mistakes to avoid','30 s',
    'The 3 mistakes I see all the time in [field].','red cross ❌ on each mistake',
    ['(3–11 s) “Mistake #1: [mistake]. Instead: [right move].”','(11–19 s) “Mistake #2: [mistake].”','(19–26 s) “Mistake #3, the worst one: [mistake].”'],
    'Guilty of one? Confess in the comments 😄');
  V('engagement','tous','Myth or fact?','25 s',
    '“[Common myth].” Myth or fact?','MYTH / FACT flashing',
    ['(3–10 s) “A lot of people think [common myth].”','(10–20 s) “Actually: [the truth + proof or example].”'],
    'Follow for the next myth we bust.');
  V('pedagogie','tous','Quick 3-step tutorial','30 s',
    'How to [desired result] in 3 steps.','“IN 3 STEPS” + numbers',
    ['(3–11 s) “Step 1: [action].” [Close-up shot]','(11–19 s) “Step 2: [action]. Pro tip: [pro detail].”','(19–26 s) “Step 3: [action]. Done.” [Result shot]'],
    'Save it to try later.');
  V('pedagogie','tous','The pro tip','20 s',
    'The tip I give every single client.','“PRO TIP”',
    ['(3–12 s) “[Specific tip they can use right away].”','(12–17 s) “Why? Because [simple one-line explanation].”'],
    'Share with someone who needs it.');
  V('pedagogie','tous','Customer question','30 s',
    'Someone asked me: “[real customer question]?”','the question in a chat bubble',
    ['(3–15 s) “The short answer: [answer].”','(15–25 s) “The full answer: [nuance, special case].”'],
    'Drop your question in the comments, I’ll answer it on video.');
  V('pedagogie','tous','Jargon buster in 30 s','30 s',
    '[Technical term]: what does it actually mean?','the term + definition typing out',
    ['(3–13 s) “Simply put: [definition in plain words].”','(13–24 s) “Example: [everyday example].”','(24–27 s) “And for you, it means [impact].”'],
    'Which word should I explain next?');
  V('coulisses','tous','A day at our place','45 s',
    '[Morning time]. A day at [name] begins.','time on screen + opening shot',
    ['(3–15 s) [Opening up, prep, coffee, team]','(15–30 s) [The heart of the job: 3 quick 2-second shots] “What you never get to see: [detail].”','(30–40 s) [Closing / proud moment] “And this is our favorite part.”'],
    'Want to see more behind the scenes? Tell us what.');
  V('coulisses','tous','Meet the team','30 s',
    'There are [number] of them, and without them [name] wouldn’t exist.','first names popping up',
    ['(3–25 s) [One 3–4 s shot per person] “[First name], [role], [fun fact or hidden talent].”'],
    'Say hi to the team in the comments 👋');
  V('coulisses','tous','Why I started…','45 s',
    'In [year], I dropped everything to start [project].','old photo or talking to camera',
    ['(3–18 s) “Before, I was [situation]. Then one day, [turning point].”','(18–33 s) “The early days: [struggle] — but [what kept you going].”','(33–40 s) “Today, [what you’re proud of].”'],
    'Thanks for being here. Follow along for the rest of the story.');
  V('coulisses','tous','Sped-up making-of','15 s',
    'From nothing to [finished product] in 15 seconds.','time-lapse, “15 s” text',
    ['(2–12 s) [Sped-up making / prep, upbeat music]','(12–14 s) [Final shot, product front and center]'],
    'Would you have guessed it takes [actual time]?');
  V('temoignage','tous','The customer’s story','30 s',
    '“[Customer’s strongest line].”','quote + customer’s first name',
    ['(3–12 s) [Customer talking to camera] “Before, [problem].”','(12–22 s) “With [name], [what changed].”','(22–27 s) “I recommend them because [reason].”'],
    'Try it for yourself: link in bio.');
  V('temoignage','tous','Review read out loud','20 s',
    'We got this review… and we didn’t see it coming.','screenshot of the review (5 stars)',
    ['(3–14 s) [Reading an excerpt of the review, real screenshot on screen]','(14–18 s) “Thank you [first name], this really means a lot.”'],
    'Been in already? Leave us a review 🙏');
  V('temoignage','tous','Results by the numbers','20 s',
    '[Real number] in [time]. Here’s how.','the number, huge',
    ['(3–10 s) “When [customer] came to us, [starting point].”','(10–17 s) “We [what you did]. Result: [number].”'],
    'Want the same assessment? Message us.');
  V('lancement','tous','The teaser','10 s',
    'Something’s coming on [date].','blurry / hidden shot, date in big text',
    ['(2–8 s) [Extreme close-up details, without showing it all] “That’s all we’re saying…”'],
    'Turn on notifications so you don’t miss it.');
  V('lancement','tous','The big reveal','30 s',
    'It’s finally here: [new launch]!','reveal with effect + name',
    ['(3–13 s) “We’ve been working on it for [time]: [what it is].”','(13–23 s) “What makes it unique: [difference 1], [difference 2].”','(23–27 s) “Available from [date], at [price if confirmed].”'],
    'The first [number] get [perk]: link in bio.');
  V('lancement','tous','Countdown: 3 days to go','10 s',
    'Just 3 days left.','“3 DAYS” huge',
    ['(2–8 s) [One visual clue per day] “Today’s clue: [clue].”'],
    'Take a guess in the comments!');
  V('evenement','tous','Event invitation','20 s',
    'On [date], we’re waiting for you!','date + venue in big text',
    ['(3–10 s) “On the program: [highlight 1], [highlight 2].”','(10–16 s) “It’s [free / by booking only], at [venue], from [time].”'],
    'Comment “I’m in” and we’ll save you a spot.');
  V('evenement','tous','Event recap','30 s',
    'Thank you! [number] of you showed up on [day].','wide shot of the crowd',
    ['(3–25 s) [Upbeat montage of the best moments, 1.5 s per shot, smiles, details]','(25–28 s) “Thanks to [partners / team].”'],
    'Were you there? Tag yourself in the video!');
  V('fidelite','tous','Thank you, community','20 s',
    '[Number] followers. We can’t believe it.','the number counting up',
    ['(3–15 s) “When we started, [memory]. Today, thanks to you, [proud moment].”'],
    'To celebrate: [small gift / giveaway]. Details in the caption.');
  V('fidelite','tous','Giveaway','20 s',
    'We’re giving away [prize]!','🎁 GIVEAWAY',
    ['(3–15 s) “To enter: 1. follow us, 2. like, 3. tag [number] friends. Winner drawn on [date].”'],
    'Good luck, everyone! Rules in the caption.');
  V('recrutement','tous','We’re hiring','30 s',
    'We’re looking for a [position]. Could it be you?','WE’RE HIRING + position',
    ['(3–12 s) “At our place, [real vibe, 2 team shots].”','(12–22 s) “What we’re looking for: [quality 1], [quality 2]. No [degree / experience] needed if [condition].”','(22–27 s) “[Contract, hours, location].”'],
    'Send us a message or share with the right person.');

  /* =================================================================== CAPTIONS — ALL BUSINESSES */
  P('vente','tous','Benefit first',
'[The result your customer wants], without [the hassle they dread]. ✨\n\nThat’s exactly what [product/service] delivers:\n✔️ [benefit 1]\n✔️ [benefit 2]\n✔️ [benefit 3]\n\n📍 [location / delivery / online]\n👉 [Book / Order] via the link in bio.');
  P('vente','tous','Problem – Agitate – Solve',
'[Problem]? You’re not alone.\n\nAnd the longer you wait, the more [concrete consequence]. 😬\n\nThe good news: [solution in one sentence].\nAt [name], we [how you do it, concretely].\n\n💬 DM us “[keyword]” to talk about it.');
  P('vente','tous','Limited-time offer',
'⏳ Until [date] only:\n[exact offer] on [product/service].\n\nWhy? [honest reason].\n\nAfter that, it’s back to full price. No extensions. 🙃\n\n👉 Link in bio / [phone]');
  P('vente','tous','The star product',
'If you only try one thing from us, make it this one. 👇\n\n[Product]: [what makes it unique, 1 sensory or concrete sentence].\n\nOur customers pick it for [reason #1].\n\nTried it already? Rate it out of 10 in the comments!');
  P('vente','tous','Honest comparison',
'[Option A] or [our solution]? Let’s be honest. 🤝\n\n[Option A]: ✅ [pro] / ❌ [limitation]\n[Our solution]: ✅ [pro] / ✅ [pro] / ❌ [limitation we own]\n\nWho it’s for: [ideal profile].\nWho it’s not for: [profile].\n\nQuestions? We answer in the comments.');
  P('engagement','tous','Open question',
'Quick question of the day 👇\n\n[Simple question your customer cares about]?\n\nFor us, it’s [your answer with a personal touch].\n\nYour turn! We read every comment.');
  P('engagement','tous','This or that',
'Are you more…\n\n🅰️ [option A]\nor\n🅱️ [option B]?\n\nJust reply A or B in the comments. We’ll tally it up on Friday! 📊');
  P('engagement','tous','Finish the sentence',
'Finish the sentence 👇\n\n“A perfect [day / moment] is when…”\n\nWe’ll go first: [your answer]. 😄');
  P('engagement','tous','Admit it…',
'Admit it… you [small habit or common mistake related to your field] too? 🙈\n\nNo judgment here. But here’s a simple trick: [tip].\n\nTag the person who ALWAYS does this 😂');
  P('pedagogie','tous','Carousel: step-by-step guide',
'📌 Save this post, you’ll need it.\n\nHow to [result] in [number] steps:\n\n1️⃣ [step 1]\n2️⃣ [step 2]\n3️⃣ [step 3]\n4️⃣ [step 4]\n\n💡 The mistake to avoid: [mistake].\n\nQuestions? Comments 👇');
  P('pedagogie','tous','Common myth',
'❌ “[Common myth]”\n✅ Actually: [the truth].\n\nWhy do people believe it? [Where the myth comes from].\nWhat it means for you: [practical consequence].\n\nDid you believe it? Be honest 😉');
  P('pedagogie','tous','Checklist',
'✅ The checklist before you [important action for your customer]:\n\n☐ [item 1]\n☐ [item 2]\n☐ [item 3]\n☐ [item 4]\n☐ [item 5]\n\nTick them all and you’re set. 💪\nSave it for the big day.');
  P('pedagogie','tous','Key stat',
'[Verified number] 😮\n\nThat’s [what this number represents] (source: [source]).\n\nWhat it means for you: [simple takeaway].\nOur advice: [action].\n\nDid you know?');
  P('coulisses','tous','Behind the scenes today',
'What you don’t see before [moment the customer sees you]. 👀\n\n[Time]: [task]\n[Time]: [task]\n[Time]: [task]\n\nIt’s not glamorous, but it’s why [result the customer loves]. ❤️');
  P('coulisses','tous','Team spotlight',
'You’ve probably met them… but do you really know [first name]? 👋\n\n🔧 Role: [role]\n⏳ With us since: [time]\n💛 Favorite thing: [fun fact]\n🤫 Hidden talent: [talent]\n\nA quick shout-out for [first name]? 👇');
  P('coulisses','tous','Our story',
'It all started [unlikely place / moment]. 🌱\n\n[2–3 sentences: the turning point, the tough early days, what kept you going.]\n\n[Number] years later, [what you’re proud of].\n\nThanks for being part of the story. 🙏');
  P('coulisses','tous','Our values, for real',
'We don’t do [common industry practice]. Ever. 🙅\n\nWhy? Because [belief].\n\nInstead, we [your way of doing things], even if it costs us [trade-off].\n\nIt’s a choice. Does it matter to you?');
  P('temoignage','tous','Customer review',
'⭐⭐⭐⭐⭐\n“[Real customer quote]”\n— [First name], [city / context]\n\nThank you [first name]! Messages like this are what keep us going. 🔋\n\nYou can [action] too: link in bio.');
  P('temoignage','tous','Case study',
'📂 Case study: [first name / company]\n\n🎯 The need: [need]\n🛠️ What we did: [solution]\n📈 The result: [concrete result]\n\n“[Short quote]”\n\nGot a similar need? Message us.');
  P('lancement','tous','New launch',
'🆕 IT’S NEW!\n\n[Name of the new launch]: [what it is in one sentence].\n\nWhy we made it: [customer need].\nWhat it changes for you: [benefit].\n\n📅 From [date] · [price if known]\n👉 [Where to buy / book]');
  P('lancement','tous','Teaser',
'Something’s brewing… 👀\n\nClue: [mysterious clue].\n\nSee you on [date] at [time].\nDrop your guesses in the comments 👇');
  P('evenement','tous','Event announcement',
'📅 [Date] · 📍 [Venue] · 🕒 [Time]\n\n[Event name]: [one-line promise].\n\nOn the program:\n• [highlight 1]\n• [highlight 2]\n• [highlight 3]\n\n[Free / Limited spots] → [how to sign up]');
  P('evenement','tous','Closure / opening hours',
'📢 Heads up\n\n[Name] will be [closed / on special hours] from [date] to [date].\n\n🕒 [New hours]\n\nSee you on [date]! Thanks for your understanding. 🙏');
  P('evenement','tous','Holiday / season',
'[Holiday / season] is almost here! [Emoji]\n\nTo celebrate: [special offer, product or event].\n\nAvailable from [date] to [date], while stocks last.\n\nHow do you celebrate? 👇');
  P('fidelite','tous','Thank you, customers',
'[Number] [customers / orders / years]. 🥹\n\nWe just wanted to say THANK YOU.\n\nTo everyone who comes back, everyone who recommends us, everyone who sends us sweet notes.\n\nTo celebrate: [gift / discount / surprise].');
  P('fidelite','tous','Giveaway',
'🎁 GIVEAWAY 🎁\n\nWe’re giving away [exact prize]!\n\nTo enter:\n1️⃣ Follow @[account]\n2️⃣ Like this post\n3️⃣ Tag [number] friends in the comments\n\nWinner drawn on [date]. Good luck!\n\nThis giveaway is not sponsored or administered by [platform]. Winner will be contacted by DM.');
  P('fidelite','tous','Loyalty program',
'Here a lot? We’ve noticed. 😉\n\nNew: [how the card / program works].\n➡️ [concrete reward] after [number] [purchases / visits].\n\nAsk for your card next time you’re in!');
  P('recrutement','tous','Job opening',
'🚀 WE’RE HIRING: [position]\n\n📍 [Location] · [Contract type] · [Hours]\n\nWhat you’ll do: [tasks in 2 lines]\nWho we’re looking for: [qualities, not necessarily degrees]\nWhat we offer: [vibe, perks, growth]\n\n📩 DM us or [email]. Please share, it could help someone!');

  /* =================================================================== RESTAURANT / CAFÉ / BAKERY */
  V('vente','resto','The signature dish','20 s',
    'Our most-ordered dish.','steaming / oozing close-up',
    ['(3–10 s) [Plating close-up] “[Dish name]: [key ingredients, cooking method].”','(10–16 s) [The first forkful / reaction] “Homemade, every [day / morning].”'],
    'Book your table: link in bio.');
  V('coulisses','resto','6 a.m. in the kitchen','30 s',
    '6 a.m. The restaurant’s asleep. We’re not.','time on screen',
    ['(3–12 s) [Deliveries, crates] “The [produce] comes from [supplier], just [distance] away.”','(12–24 s) [Prep: chopping, sauce, dough] “Everything’s made right here, this morning.”','(24–27 s) [Dining room ready, lights on]'],
    'Shall we save you a table for lunch?');
  V('engagement','resto','Guess the dish','15 s',
    'Guess the dish before the end.','super-tight close-ups',
    ['(2–11 s) [5 ingredients in extreme close-up, 2 s each]','(11–13 s) [Dish reveal]'],
    'Did you get it? Honest answers in the comments 😄');
  V('fidelite','resto','This week’s menu','20 s',
    'This week’s menu just dropped!','MENU + days',
    ['(3–16 s) [One shot per dish, 3 s each] “Monday [dish], Tuesday [dish]…”'],
    'Which one’s calling you? Book at [phone].');
  P('vente','resto','Dish of the day',
'🍽️ On the board today:\n\n[Starter]\n[Main]\n[Dessert]\n\n[Set menu]: [price]\n\nHomemade with [local produce] from [supplier]. 🌿\n📞 [Phone] to book · 📍 [address]');
  P('coulisses','resto','Meet our supplier',
'Meet [first name], who’s been bringing us [produce] for [time]. 👨‍🌾\n\n[Their farm / workshop] is just [distance] from here. [Detail that shows the quality.]\n\nThey’re the reason our [dish] tastes the way it does.\n\nWe love working local. Does that matter to you?');
  P('engagement','resto','Sweet or savory',
'Breakfast: are you more… 🥐 or 🍳?\n\nWe’ve made our pick: [your preference + specialty].\n\nReply with an emoji 👇');
  P('evenement','resto','Special night',
'🎉 [Day] night: [name of the night]!\n\n[Menu / entertainment / music] from [time].\n[Price] per person, [drink included or not].\n\nLimited to [number] seats: booking required at [phone].');

  /* =================================================================== BEAUTY / HAIR / SKINCARE */
  V('vente','beaute','15-second transformation','15 s',
    'She walked in like this…','BEFORE',
    ['(2–10 s) [Sped-up steps: cut, color, styling]','(10–13 s) [Reveal, client turns around / looks in the mirror] “…and walked out like this.”'],
    'Book your transformation: link in bio.');
  V('pedagogie','beaute','The mistake that’s damaging your hair','25 s',
    'Stop doing this after you shampoo.','❌ + the move to avoid',
    ['(3–12 s) “Rubbing with your towel [damage].”','(12–20 s) “Instead: [right move], and [product / tip].”'],
    'Save this and send it to your friend who rubs 😄');
  V('engagement','beaute','Which color this fall?','15 s',
    'Copper, caramel or icy brunette?','3 colors, numbered 1-2-3',
    ['(3–12 s) [3 real results, 3 s each, numbered]'],
    'Vote 1, 2 or 3 in the comments!');
  V('coulisses','beaute','Inside the treatment','30 s',
    'What happens during your [treatment name].','soft vibe, dim lighting',
    ['(3–24 s) [Treatment steps, hands, products, relaxation] “First [step], then [step], and finally [step].”','(24–27 s) “[Duration] just for you.”'],
    'Gift it, or treat yourself: book via the link in bio.');
  P('vente','beaute','Available slots',
'✂️ We still have slots this week!\n\n[Day]: [times]\n[Day]: [times]\n\nTreatment of the moment: [treatment] for [price].\n\n📲 Book online (link in bio) or call [phone].');
  P('pedagogie','beaute','3-step routine',
'Your evening [hair / skin] routine in 3 steps 🌙\n\n1. [Step 1 + type of product]\n2. [Step 2]\n3. [Step 3]\n\nTotal time: [minutes] min. Result: [benefit].\n\nSave it for tonight ✨');
  P('temoignage','beaute','Client reaction',
'Her reaction when she saw herself in the mirror… 🥹\n\n“[Quote]”\n\n[Service] by [stylist / beautician’s first name].\n\nThank you for trusting us, [client’s first name] 💛');
  P('fidelite','beaute','Gift card',
'🎁 Stuck on what to give?\n\nOur gift cards come in [amount] to [amount], valid for [duration] on all our services.\n\nPick one up at the salon or order by DM. The gift that always lands. 💝');

  /* =================================================================== TRADES / CONSTRUCTION / RENOVATION */
  V('vente','artisan','Job site before / after','30 s',
    'This [room] hadn’t changed since [year].','BEFORE + year',
    ['(3–12 s) [Original state, damaged details] “The problem: [problem].”','(12–24 s) [Sped-up work] “[Duration] of work: [jobs done].”','(24–27 s) [Wide shot, finished] “And now.”'],
    'Free quote: DM us or link in bio.');
  V('pedagogie','artisan','Signs it’s time to call a pro','30 s',
    'If you see this at home, call a pro.','zoom on the issue',
    ['(3–12 s) “Sign #1: [sign]. It means [cause].”','(12–20 s) “Sign #2: [sign].”','(20–26 s) “The longer you wait, the more [consequence and cost].”'],
    'Not sure? Send us a photo by DM and we’ll tell you for free.');
  V('coulisses','artisan','The craft move','15 s',
    '[Years] of experience in this one move.','close-up on hands / tool',
    ['(2–12 s) [Technical move in real time, natural sound, extreme close-up]'],
    'Follow if you love a job well done.');
  V('temoignage','artisan','The client gives the tour','30 s',
    '“The house is unrecognizable.”','client quote',
    ['(3–25 s) [Client gives the tour and comments] “What we wanted: [need]. What we got: [result]. What we loved: [timing, tidiness, advice].”'],
    'Is your project next? Free quote.');
  P('vente','artisan','Free quote',
'🏠 Thinking about [type of work]?\n\n✅ Free quote within [timeframe]\n✅ [Insurance / certification if applicable]\n✅ Serving [area]\n\nWe come out, we measure, we explain. No obligation.\n\n📞 [Phone] · 📩 DM');
  P('pedagogie','artisan','Financial assistance',
'💶 Good to know: your [type] work may be partly covered.\n\n[Grant / rebate 1, general conditions]\n[Grant / rebate 2]\n\n⚠️ Amounts and conditions change: we’ll check with you what applies to your situation.\n\nQuestions? Send us a DM.');
  P('coulisses','artisan','Work in progress',
'🚧 Job in progress in [city]\n\nDay [n] of [total]: [today’s step].\n\nWhat we’re doing today and why it matters: [simple explanation].\n\nTo be continued! 👷');
  P('temoignage','artisan','Job complete',
'✅ Job complete in [city]!\n\n[Type of work] in [duration].\n\n“[Client quote]”\n\nThanks for trusting us, [first name]. Swipe for before / after photos ➡️');

  /* =================================================================== RETAIL / SHOP */
  V('vente','commerce','New arrivals','15 s',
    'New arrivals, and there won’t be enough for everyone.','NEW',
    ['(2–12 s) [Quick unboxing, 4–5 items, 2 s each, price on screen if confirmed]'],
    'Swing by the shop or reserve by DM.');
  V('vente','commerce','3 gift ideas under [price]','30 s',
    '3 gift ideas under [price].','max price in big text',
    ['(3–11 s) “For [profile 1]: [item], [price].”','(11–19 s) “For [profile 2]: [item].”','(19–26 s) “And for [profile 3]: [item]. Free gift wrapping.”'],
    'Which one saves the day? Comment 1, 2 or 3.');
  V('coulisses','commerce','Packing your order','20 s',
    'Packing your order, [customer’s first name]!','packing ASMR',
    ['(2–17 s) [Careful packing, tissue paper, ribbon, handwritten note, natural sound]'],
    'Order online: link in bio.');
  V('engagement','commerce','Outfit of the day','15 s',
    'One piece, three ways to wear it.','1 → 3',
    ['(2–13 s) [3 outfits with the same piece, transition on every finger snap]'],
    'Your favorite: 1, 2 or 3?');
  P('vente','commerce','New arrival',
'📦 Fresh arrivals!\n\n[Product / brand]: [short, sensory description].\nSizes / styles: [details]\nPrice: [price]\n\nLimited stock. DM us to reserve and we’ll hold it for 24 h. 🛍️');
  P('fidelite','commerce','Sale / promo',
'🏷️ [Promo event] from [date] to [date]\n\n[x]% off [department / selection]\n[Bonus perk: 2nd item, free gift…]\n\nIn store [and online]. The best pieces go on day one. 😉');
  P('coulisses','commerce','Why this product',
'Why did we choose to sell [product / brand]? 🤔\n\n• [Reason 1: quality, craftsmanship]\n• [Reason 2: ethical, local]\n• [Reason 3: customer feedback]\n\nWe only sell what we’d use ourselves.');
  P('engagement','commerce','Help us choose',
'We can’t decide on the next order… help us out! 🙏\n\n[Option A] or [Option B]?\n\nThe most requested in the comments joins the shop on [date].');

  /* =================================================================== HEALTH / WELLNESS / THERAPIST */
  V('pedagogie','sante','One simple exercise','30 s',
    'A [duration] exercise to ease [area / tension].','name of the exercise',
    ['(3–20 s) [Slow demonstration] “Get into [position]. Breathe [instruction]. Repeat [number] times.”','(20–27 s) “If it hurts, stop and talk to a professional.”'],
    'Save it to do tonight.');
  V('pedagogie','sante','What a session looks like','30 s',
    'Never tried [practice]? Here’s how it goes.','the practice room, calm vibe',
    ['(3–12 s) “We start with [a chat / an assessment].”','(12–22 s) “Then, [how the session unfolds].”','(22–27 s) “A session lasts [duration].”'],
    'A question before you come in? Message me.');
  V('engagement','sante','Health myth','25 s',
    '“[Health myth].” True or false?','TRUE / FALSE',
    ['(3–20 s) “[Nuanced, sourced answer]. What really matters: [advice].”'],
    'Which myth should I unpack next?');
  V('coulisses','sante','Why I do this work','30 s',
    'I’ve been a [profession] for [years]. Here’s why.','talking to camera, warm',
    ['(3–25 s) “[Personal turning point], [what you love about supporting people], [what moves you about your clients].”'],
    'Take care of yourself. Book online if you need to.');
  P('pedagogie','sante','Wellness tip',
'🌿 Tip of the week\n\n[Simple, practical tip]\n\nWhy it helps: [2-sentence explanation].\n\n⚠️ This tip doesn’t replace medical advice. If in doubt, see a professional.\n\nSave it as a reminder 💚');
  P('vente','sante','Book an appointment',
'📅 Slots are opening up [period].\n\n[Type of session] · [duration] · [rate]\n[Insurance coverage if applicable]\n\nBook online (link in bio) or call [phone].');
  P('coulisses','sante','The practice',
'Welcome to the practice 🤍\n\nA space designed to help you feel [safe / relaxed] the moment you walk in.\n\n📍 [Address] · [access, parking, wheelchair accessibility]\n\nSee you soon.');
  P('engagement','sante','Check-in',
'How are you doing this week, really? 🫶\n\nReply with an emoji:\n😌 doing well\n😐 meh\n😮‍💨 running on empty\n\nWhatever your answer, take [small act of self-care] today.');

  /* =================================================================== COACH / FITNESS / TRAINING */
  V('pedagogie','coach','The exercise everyone gets wrong','25 s',
    'Doing [exercise] like this? Stop.','❌ wrong form',
    ['(3–12 s) [Wrong form] “Here, you’re [mistake and risk].”','(12–21 s) [Right form] “Instead: [cue 1], [cue 2].”'],
    'Save it and try it at your next session.');
  V('temoignage','coach','The progress','30 s',
    '[Time] ago, [first name] couldn’t [action].','BEFORE, date',
    ['(3–15 s) [Footage from the start]','(15–25 s) [Today] “What worked: [consistency, method].”'],
    'Ready to start? Trial session: link in bio.');
  V('engagement','coach','7-day challenge','20 s',
    'Challenge: [action] for 7 days. You in?','7-DAY CHALLENGE',
    ['(3–15 s) “Every day, [specific, realistic action]. I’ll post my version in my stories every day.”'],
    'Comment “I’M IN” to join.');
  V('vente','coach','The trial session','20 s',
    'On the fence? Come try it.','TRIAL [free / price]',
    ['(3–15 s) “In [duration], we do [an assessment / intro session], and you’ll see [what they’ll feel]. Zero commitment.”'],
    'Book your trial: link in bio.');
  P('pedagogie','coach','Express workout',
'💪 Express workout: [duration] min, no equipment\n\n1. [Exercise] — [reps]\n2. [Exercise] — [reps]\n3. [Exercise] — [reps]\n\n[Number] rounds. Rest [seconds] s.\n\nSave it and tell me in the comments when you’re done ✅');
  P('engagement','coach','Motivation',
'[Day] reminder: [your own motivational line, not a copied quote].\n\nYou don’t have to be perfect. You just have to [minimum action] today.\n\nWhat’s your small win this week? 👇');
  P('vente','coach','Sign-ups are open',
'🚀 Sign-ups for [program / session] are open!\n\nWho it’s for: [profile]\nLength: [duration]\nFormat: [in person / online]\nYou’ll walk away with: [result]\n\n[Number] spots. Starts on [date].\n👉 Link in bio');
  P('temoignage','coach','Client win',
'🏆 Well done, [first name]!\n\n[Goal reached] after [time] of hard work.\n\nWhat I admired: [the person’s quality].\n\nYour turn will come. When do we start?');

  /* =================================================================== REAL ESTATE */
  V('vente','immo','30-second tour','30 s',
    '[Property type], [size] sq ft, in [neighborhood / city].','price + size',
    ['(3–24 s) [Smooth tour: entrance, living room, kitchen, bedrooms, outdoors] “The standout: [feature].”','(24–27 s) “[Price] · [energy rating]”'],
    'Viewings by appointment: DM us.');
  V('pedagogie','immo','What’s your home worth?','25 s',
    'Is your home really worth what you think?','$ ?',
    ['(3–20 s) “The 3 factors that matter most in [city]: [factor 1], [factor 2], [factor 3].”'],
    'Free valuation in 48 h: link in bio.');
  V('coulisses','immo','A day as an agent','30 s',
    'What a real estate agent actually does.','day in fast-forward',
    ['(3–25 s) [Viewings, photos, closing appointments, calls] “One sale takes [number] viewings and [time] on average.”'],
    'Questions about selling? Ask in the comments.');
  V('temoignage','immo','Handing over the keys','15 s',
    'Our favorite part of the job.','🔑',
    ['(2–12 s) [Key handover, smiles, with the clients’ permission]'],
    'Congrats [first names]! Who’s next?');
  P('vente','immo','New listing',
'🏡 EXCLUSIVE · [City / neighborhood]\n\n[Type] · [size] sq ft · [rooms] rooms\n✨ [Feature 1] · [Feature 2] · [Feature 3]\n\n[Price] [fees paid by …]\nEnergy rating: [rating]\n\n📩 Viewings by appointment, DM us.');
  P('pedagogie','immo','Seller tip',
'Selling? 3 things to do BEFORE the photos 📸\n\n1. [Tip 1]\n2. [Tip 2]\n3. [Tip 3]\n\nA well-presented home sells [faster / for more].\n\nFree valuation: link in bio.');
  P('temoignage','immo','Sold',
'🔑 SOLD!\n\n[Property type] in [city], sold in [time].\n\n“[Sellers’ quote]”\n\nThanks for trusting us, [first names]. Thinking of selling? Let’s talk.');
  P('engagement','immo','Dream home pick',
'Which would you pick? 🤔\n\n🅰️ [Property A: perk]\n🅱️ [Property B: perk]\n\nSame budget: [budget]. Vote in the comments!');

  /* =================================================================== SERVICES / B2B / FREELANCE */
  V('pedagogie','services','The costly mistake businesses make','30 s',
    'This mistake costs most [target audience] [amount / time].','💸',
    ['(3–13 s) “The mistake: [mistake].”','(13–23 s) “Why it’s a big deal: [consequence in numbers if confirmed].”','(23–27 s) “The simple fix: [solution].”'],
    'DM us “AUDIT” and we’ll look at your case.');
  V('vente','services','How I work','30 s',
    'Here’s what working with me looks like.','steps 1-2-3',
    ['(3–12 s) “1. [Discovery call / audit].”','(12–20 s) “2. [Proposal / delivery].”','(20–27 s) “3. [Handover / follow-up]. Average turnaround: [time].”'],
    'First call is on us: link in bio.');
  V('temoignage','services','Client result','25 s',
    '[Result in numbers] for [type of client].','the number',
    ['(3–20 s) “The starting point: [situation]. What we did: [action]. The result: [result].”'],
    'Want the same? DM us.');
  V('coulisses','services','My desk, my tools','20 s',
    'The [number] tools I can’t work without.','work setup',
    ['(3–17 s) [One shot per tool] “[Tool]: for [use].”'],
    'What’s your must-have tool?');
  P('pedagogie','services','LinkedIn post: lesson learned',
'[Opening situation in one punchy sentence].\n\n[Time] ago, [what happened].\n\nWhat I took away from it:\n→ [lesson 1]\n→ [lesson 2]\n→ [lesson 3]\n\nWhat’s the most expensive lesson you’ve learned?');
  P('vente','services','Service offer',
'Are you a [target] dealing with [problem]?\n\nI help [target] [result] with [method], in [time].\n\nWhat you get:\n✔️ [deliverable 1]\n✔️ [deliverable 2]\n✔️ [deliverable 3]\n\n[Number] spots this month. Free discovery call: link in the comments.');
  P('temoignage','services','LinkedIn case study',
'[Client] was struggling with [problem].\n\nIn [time], we:\n1. [action]\n2. [action]\n3. [action]\n\nResult: [measurable result].\n\nThe key wasn’t [what people assume], it was [the real key factor].\n\nGoing through the same thing? Let’s talk.');
  P('coulisses','services','Behind a project',
'What my clients don’t see (and that’s fine) 👇\n\n• [Invisible step 1]\n• [Invisible step 2]\n• [Invisible step 3]\n\nIt’s 80% of the work for 20% of what shows. And that’s where quality is made.');


  /* =================================================================== IMAGE PROMPTS — ALL BUSINESSES */
  I('produit','tous','Studio packshot, plain background',
'Professional product photo of [product], centered on a plain [brand color] background, soft studio lighting with a subtle drop shadow on the floor, crisp reflections on the material, perfect focus on the logo, plenty of empty space at the top for text. High-end catalog style, square format.');
  I('produit','tous','Product in use',
'[Product] being used by a person in [realistic everyday setting: kitchen, office, bathroom…], late-morning natural light through a window, hands visible while [action], slightly blurred background, warm natural colors. Authentic lifestyle-style photo, not staged. Vertical 4:5 format.');
  I('produit','tous','Top-down flat lay',
'Top-down flat lay: [main product] in the center, surrounded by [3 to 5 related objects or ingredients] carefully arranged, on a [light wood / marble / linen] surface, soft shadows, [colors] palette, lots of breathing room between items. Clean editorial magazine style. Square format.');
  I('produit','tous','Dynamic levitation',
'[Product] floating in mid-air, surrounded by [elements that evoke it: splashes, fruit, leaves, powder] frozen mid-motion, [color] gradient background, high-contrast lighting, ultra sharp, premium ad look. Vertical 9:16 format.');
  I('produit','tous','Product line-up',
'The [number] products from the [name] range lined up left to right on a minimalist shelf, smallest to largest, [color] background, even lighting, readable labels, clean e-commerce photo look. Landscape 16:9 format.');
  I('pub','tous','Promo visual with room for text',
'Advertising visual for [offer]: [product or service] showcased on the right half of the image, the left half is an empty flat [color] block for a headline, energetic vibe, vivid brand colors, crisp lighting. Do not write any text in the image. 4:5 format.');
  I('pub','tous','Before / after side by side',
'Image split vertically in two: on the left [before state, dull and realistic], on the right [after state, clean and bright], same framing and same angle on both sides, thin white line down the middle, identical lighting. Realistic photo, no over-the-top retouching. Square format.');
  I('pub','tous','Event poster',
'Poster for [event]: a scene capturing [the event’s atmosphere] in the foreground, large empty space at the top for the title and at the bottom for the date, [palette] colors, [modern graphic / retro / elegant] style. No generated text in the image. Vertical 9:16 format.');
  I('pub','tous','Story background with text area',
'Vertical Instagram story background: soft, blurred [brand-related texture or scene], a large light semi-transparent rectangle in the center for a message, [brand palette] colors, calm and readable feel. 9:16 format.');
  I('lieu','tous','Welcoming storefront',
'Storefront of [type of business] [name] at the end of the day, window lit from inside with warm light, sign clearly visible, clean sidewalk, a few blurred passers-by, blue twilight sky. Realistic, inviting architectural photo. 4:5 format.');
  I('lieu','tous','Cozy interior',
'Interior of an empty, perfectly tidy [place: shop, salon, practice, workshop], soft natural light, green plants, [wood, linen, metal] materials, wide-angle view from the entrance, welcoming premium feel. Realistic interior photo. Landscape 3:2 format.');
  I('personnes','tous','Owner portrait',
'Professional portrait of [description: age, style] in their [workplace], smiling, looking at the camera, wearing [outfit], slightly blurred background of the space, soft side lighting, authentic and confident feel. Realistic portrait photo, 85 mm lens. 4:5 format.');
  I('personnes','tous','Team in action',
'Photo of [number] team members [business activity] together, a natural moment of easy teamwork, a few smiles, natural light, warm colors, candid documentary-style framing. Realistic photo, not posed. Landscape 3:2 format.');
  I('personnes','tous','Hands at work',
'Close-up of skilled hands [precise trade move], tools and materials clearly visible, very shallow depth of field, raking light that brings out textures, crafted, meticulous feel. Square format.');
  I('saison','tous','Seasonal vibe',
'[Product or place] decorated for [season or holiday: Christmas, summer, back to school, Valentine’s Day…], subtle, elegant decor touches ([decorations]), [warm / cool] light, seasonal colors, festive yet upscale feel. 4:5 format.');
  I('saison','tous','Festive background for an announcement',
'Festive graphic background for [holiday], [elements: confetti, garlands, snowflakes, leaves] around the edges, clear plain center for an announcement, [palette] colors, crisp modern look. No text. Square format.');

  /* =================================================================== IMAGE PROMPTS — BY BUSINESS */
  I('produit','resto','Signature dish close-up',
'Mouthwatering close-up of [dish], plated on a [plate style] plate on a wooden table, light steam, glossy sauce, fresh herbs, natural side light, warm blurred restaurant dining room in the background. Professional food photography. 4:5 format.');
  I('produit','resto','Shared table from above',
'Top-down view of a table loaded with [dishes and drinks] shared among friends, hands reaching in, [material] tablecloth, soft light, warm colors, generous, convivial vibe. Lifestyle food photography. Square format.');
  I('ambiance','resto','Terrace at sunset',
'[Restaurant / café] terrace at sunset, tables set, string lights glowing, glasses sparkling, a few blurred guests laughing, golden light. Realistic mood photo. 4:5 format.');
  I('produit','resto','Pastries on the counter',
'Bakery counter filled with golden, crispy [pastries / breads], close-up on the flaky texture, morning light, a light dusting of flour on the wood, artisan feel. 4:5 format.');
  I('produit','beaute','Premium skincare bottle',
'[Beauty product] resting on a wet [color] stone, water droplets on the bottle, [plant] leaves around it, soft diffused light, [colors] palette, high-end spa aesthetic. 4:5 format.');
  I('personnes','beaute','Hair result',
'Back and three-quarter portrait of a client with [cut / color done], shiny hair in motion, soft salon lighting, blurred salon in the background, realistic, natural look. 4:5 format.');
  I('lieu','beaute','Soothing treatment room',
'Empty treatment room, ready to go: massage table with folded towels, lit candles, plants, warm dim lighting, natural materials, zen and spotless feel. 4:5 format.');
  I('produit','artisan','Finished project',
'Photo of a finished [project: kitchen, bathroom, deck, piece of furniture], straight lines, clean finishes, natural light, tidy room with simple styling, wide-angle view. Realistic interior architecture photo. Landscape 3:2 format.');
  I('personnes','artisan','Tradesperson on site',
'[Trade] in clean workwear on a [type of work] job site, focused on [move], professional tools, helmet or safety gear, daylight, realistic, flattering documentary-style photo. 4:5 format.');
  I('produit','commerce','New arrival in the window',
'[Item] styled in the shop window, elegant display stand, matching accessories, warm window lighting, light reflections on the glass, downtown shopping vibe. 4:5 format.');
  I('produit','commerce','Outfit worn outdoors',
'Person wearing [clothing / accessory] on a [type of city] street, natural pose mid-stride, late-afternoon light, blurred background, lifestyle fashion photo style. 4:5 format.');
  I('lieu','sante','Reassuring practice',
'Bright, reassuring [practice type] office, comfortable armchair, plants, soft [palette] colors, natural light, no people, a sense of calm and cleanliness. Landscape 3:2 format.');
  I('ambiance','sante','Wellness visual',
'Soothing wellness scene: [element: cup of herbal tea, pebbles, leaf, still water] in close-up, soft morning light, [colors] palette, plenty of empty space for text. Square format.');
  I('personnes','coach','Session at full effort',
'Person mid-[exercise] in [gym / outdoors], light sweat, muscles engaged, high-contrast lighting, dynamic low-angle framing, motivating, high-energy vibe. Realistic sports photo. 4:5 format.');
  I('pub','coach','Fitness challenge visual',
'Fitness visual for a [duration] challenge: [sport] gear laid on the floor (water bottle, towel, shoes), morning light, [color] background, large empty space at the top for a headline. No text. 4:5 format.');
  I('lieu','immo','Bright living room',
'Living room of a [property type] bathed in natural light, large windows, neutral modern decor, wide-angle view from the entrance, straight vertical lines, professional real estate photo look. Landscape 3:2 format.');
  I('lieu','immo','Virtual home staging',
'The same room [description of the empty room] furnished in [Scandinavian / contemporary / boho] style: sofa, rug, lighting, plants, natural light, realistic render true to the original walls and windows. Landscape 3:2 format.');
  I('pub','services','Expertise visual',
'Conceptual image for [service]: clean desk with a laptop, notebook and coffee, screen showing [type of dashboard or chart], natural light, [brand colors] palette, professional, calm vibe. 4:5 format.');
  I('personnes','services','Client meeting',
'Two people in a business meeting around a table, smiling conversation, documents and a laptop, natural office light, blurred background, a feeling of trust. Realistic corporate photo. Landscape 3:2 format.');

  /* =================================================================== VIDEO PROMPTS — ALL BUSINESSES */
  W('produit','tous','360° product spin','5 s',
'[Product] on a pedestal slowly spinning in place, plain [color] background, soft studio lighting with reflections gliding across the material, static camera slightly from above, smooth, steady motion. 9:16 format.');
  W('produit','tous','Reveal dolly shot','5 s',
'The camera slowly pushes in from a blurry close-up on [product detail] until [product] is fully revealed, gradual focus pull, warm side light, dust floating in the light. 9:16 format.');
  W('produit','tous','Product in action','5 s',
'Hands [action: open, pour, apply, assemble] [product] in close-up, natural, precise movement, natural light, blurred [place] in the background, static camera at table height. 9:16 format.');
  W('produit','tous','Ingredients falling in slow motion','5 s',
'[Ingredients or elements] fall in slow motion around [product] and bounce slightly, [color] background, high-contrast lighting, static camera, premium ad look. 9:16 format.');
  W('ambiance','tous','Venue vibe','5 s',
'Slow lateral tracking shot through an empty, perfectly tidy [place: shop, dining room, workshop], soft end-of-day light, small twinkling lights, shallow depth of field, warm, welcoming feel. 9:16 format.');
  W('ambiance','tous','Morning opening','5 s',
'A hand flips the “open” sign on the glass door of [business], morning light floods into the room, static camera from inside, natural movement, start-of-the-day feel. 9:16 format.');
  W('personnes','tous','Smiling welcome','5 s',
'[Person] behind their counter looks up, smiles and gives a little wave to the camera, soft natural light, blurred [place] in the background, natural, warm movement. 9:16 format.');
  W('personnes','tous','Trade move in slow motion','5 s',
'Slow-motion close-up of hands [precise trade move], tools and materials clearly visible, raking light bringing out textures, static camera, artisan feel. 9:16 format.');
  W('pub','tous','Before → after transition','5 s',
'Static shot of [place or object] in its before state, then a sweep of light crosses the frame from left to right and reveals the after state, same framing, smooth transition, realistic render. 9:16 format.');
  W('pub','tous','Final pull-back on the logo','5 s',
'The camera gently pulls back from [brand element: sign, bag, apron, packaging] to reveal the scene around it, warm light, slow, confident movement, steady end of shot to add text. 9:16 format.');
  W('saison','tous','Holiday vibe','5 s',
'[Place or product] decorated for [holiday], twinkling string lights, [snow / confetti / petals] gently falling, camera slowly pushing in, festive, cozy feel. 9:16 format.');
  W('ambiance','tous','Day time-lapse','5 s',
'Time-lapse of [place] from morning to evening, light shifting from golden daylight to evening blue, blurred customer silhouettes coming and going, static camera. 9:16 format.');

  /* =================================================================== VIDEO PROMPTS — BY BUSINESS */
  W('produit','resto','Steaming dish','5 s',
'Close-up of freshly plated [dish], steam gently rising, a spoon drizzles [sauce], warm side light, blurred dining room in the background, static camera slightly from above. 9:16 format.');
  W('produit','resto','Glass being filled','5 s',
'[Drink] poured in slow motion into a [type] glass, bubbles and ice swirling, condensation droplets, warm bar lighting, static camera at glass level. 9:16 format.');
  W('coulisses','resto','The chef in the kitchen','5 s',
'A chef tosses [ingredients] in a pan, bright flame, steam, fast, controlled movement, professional kitchen in the background, high-contrast lighting, static three-quarter camera. 9:16 format.');
  W('produit','resto','Bread fresh from the oven','5 s',
'A baker pulls a tray of golden [breads / pastries] out of the oven, hot steam, crackling crust, orange oven glow, static camera at oven height. 9:16 format.');
  W('pub','beaute','Haircut reveal','5 s',
'A client slowly turns toward the camera, gently shaking her [cut / color] hair, shiny hair in motion, soft salon lighting, blurred background, natural smile. 9:16 format.');
  W('produit','beaute','Skincare texture','5 s',
'Slow-motion close-up: a dollop of [cream / serum] drops onto a glass surface and gently spreads, rich creamy texture, diffused light, [pastel color] background, static camera. 9:16 format.');
  W('ambiance','beaute','Moment of relaxation','5 s',
'A person lying with eyes closed during a facial, the beautician’s hands massaging slowly, candles and dim lighting, camera pushing in very gently. 9:16 format.');
  W('coulisses','artisan','Tool in action','5 s',
'Close-up of a [tool: sander, trowel, saw, paintbrush] at work on [material], dust or shavings flying in the light, gloved hands, daylight, static camera. 9:16 format.');
  W('pub','artisan','Finished room','5 s',
'Slow tracking shot through a finished [renovated room], natural light coming through the window, clean finishes, spotless floor, smooth camera movement from the entrance to the back of the room. 9:16 format.');
  W('produit','commerce','Gift wrapping','5 s',
'Hands wrap [item] in [color] paper and tie a ribbon, top-down close-up, careful movements, soft light, wooden counter, static camera. 9:16 format.');
  W('produit','commerce','New arrivals showcase','5 s',
'Camera slowly glides along a rack or shelf of newly arrived [items], harmonious colors, warm shop lighting, shallow depth of field. 9:16 format.');
  W('ambiance','sante','Calm breathing','5 s',
'A person sitting cross-legged by a window slowly breathes in and out, shoulders relaxing, soft morning light, a plant gently swaying, static camera. 9:16 format.');
  W('pedagogie','sante','Exercise demo','5 s',
'[Practitioner] slowly demonstrates [exercise or stretch] in a bright practice room, controlled, fluid movement, static wide-shot camera, soft natural light. 9:16 format.');
  W('pub','coach','Explosive effort','5 s',
'Slow motion of a person doing [explosive exercise: jump, sprint, lift], dust or drops of sweat in the light, strong backlight, static low-angle camera. 9:16 format.');
  W('personnes','coach','Coach cheering on','5 s',
'A coach claps and cheers on [client] finishing their set, smile and high five, bright gym, static camera at shoulder height. 9:16 format.');
  W('pub','immo','Smooth walkthrough','5 s',
'Smooth tracking shot moving from the entrance of [property type] into the bright living room, straight vertical lines, natural light, neutral decor, slow, stable gimbal-like movement. 9:16 format.');
  W('pub','immo','Drone exterior view','5 s',
'Aerial shot slowly rising above [house / building] to reveal [garden, neighborhood, view], golden late-afternoon light, smooth movement. 9:16 format.');
  W('pub','services','Screen coming to life','5 s',
'Close-up of a computer screen where [chart / dashboard] gradually fills in, soft reflections, clean desk, camera slowly pushing in, professional vibe. 9:16 format.');
  W('personnes','services','Handshake','5 s',
'Two people shake hands over a desk, smiling, signed documents in the foreground, natural office light, static three-quarter camera, natural movement. 9:16 format.');

  window.MCD_SCRIPTS=L;
  window.MCD_SCRIPTS_META={
    lang:'en',
    types:{tous:'All',video:'🎬 Video scripts',post:'✍️ Captions',img:'🖼️ Image prompts',vid:'🎥 Video prompts'},
    objectifs:{vente:'💰 Sell',engagement:'💬 Engagement',pedagogie:'🎓 Tips',coulisses:'🎬 Behind the scenes',temoignage:'⭐ Reviews',lancement:'🚀 Launch',evenement:'📅 Event',fidelite:'🎁 Loyalty',recrutement:'🤝 Hiring',produit:'📦 Product',ambiance:'✨ Vibe',pub:'📣 Ads & promo',lieu:'🏠 Place',personnes:'🙂 People',saison:'🎄 Seasons & holidays'},
    metiers:{tous:'All businesses',resto:'Restaurant & café',beaute:'Beauty & hair',artisan:'Trades & renovation',commerce:'Retail shop',sante:'Health & wellness',coach:'Coaching & fitness',immo:'Real estate',services:'Services & B2B'},
    ui:{title:'Script library',lead:'{n} scripts, captions and image/video prompts. Replace the [brackets] or let Marshall tailor them to your brand.',search:'Search: before/after, giveaway, product…',all:'All',metier:'Business',count1:'{n} item',countN:'{n} items',empty:'Nothing matches. Try another word or “All”.',loading:'Loading the library…',
      kVideo:'Video script',kPost:'Caption',kImg:'Image prompt',kVid:'Video prompt',adapted:'✨ Version tailored by Marshall',orig:'see the original',
      insert:'⬇ Insert into caption',copy:'📋 Copy',adapt:'✨ Adapt with Marshall',again:'✨ Another version',busy:'✨ Marshall is writing…',create:'🪄 Create with AI Studio',
      inserted:'Inserted into caption ✓',insertedUndo:'Inserted into caption · tap to undo',copied:'Copied ✓',copyFail:'Couldn’t copy',noComposer:'Open the Composer first',
      sent:'Prompt sent to AI Studio ✓',adaptFail:'Marshall couldn’t adapt this text: ',close:'Close',
      credits:'Prompts inspired by the structures of awesome-ad-video-prompts (CC BY 4.0) and awesome-nanobanana-pro.'}
  };
})();
