/* Biblioteca de guiones — Studio Social (Mon Copain Digital)
   Guiones de vídeo (Reels, TikTok, Shorts, voz, avatares) y textos para posts listos para completar.
   Los [corchetes] se reemplazan, o los completa Marshall («Adaptar con Marshall»). */
(function(){
  var L=[];
  /* Etiquetas de las secciones de un guion de vídeo (traducidas) */
  var LB={hook:'🎬 GANCHO (0–3 s)',screen:'En pantalla',body:'📍 DESARROLLO',cta:'👉 LLAMADA A LA ACCIÓN',q1:'«',q2:'»'};
  function V(o,s,n,d,hook,ecran,steps,cta){
    L.push({t:'video',o:o,s:s,n:n,d:d,x:LB.hook+'\n'+LB.q1+hook+LB.q2+'\n['+LB.screen+': '+ecran+']\n\n'+LB.body+'\n'+steps.join('\n')+'\n\n'+LB.cta+'\n'+LB.q1+cta+LB.q2});
  }
  function P(o,s,n,txt){ L.push({t:'post',o:o,s:s,n:n,x:txt}); }
  /* Prompts de creación: I = imagen, W = vídeo (Wan 2.2 / Veo). Escritos en el idioma de la app; Marshall los reescribe como prompt profesional antes de generar. */
  function I(o,s,n,txt){ L.push({t:'img',o:o,s:s,n:n,x:txt}); }
  function W(o,s,n,d,txt){ L.push({t:'vid',o:o,s:s,n:n,d:d,x:txt}); }

  /* =================================================================== GUIONES DE VÍDEO — TODOS LOS SECTORES */
  V('vente','tous','El problema → la solución','30 s',
    '¿Tú también [problema frecuente de tus clientes]?','el problema en 5 palabras, texto grande',
    ['(3–10 s) «Lo oímos todos los días: [frase típica de un cliente].»','(10–22 s) «En [nombre] tenemos [tu solución]: [beneficio 1], [beneficio 2].» [Plano: tú en acción]','(22–27 s) «Resultado: [resultado concreto].» [Plano: el resultado]'],
    'Escríbenos “[palabra clave]” por mensaje y te respondemos hoy mismo.');
  V('vente','tous','Antes / Después','20 s',
    'Mira la diferencia.','ANTES (plano fijo, 1 s)',
    ['(2–8 s) [Plano antes] «Así estaba: [defecto visible].»','(8–15 s) [Transición rápida] «Y así queda después de [tiempo / intervención].» [Plano después]','(15–18 s) «Lo que lo cambió todo: [el detalle clave].»'],
    '¿Quieres el mismo resultado? Link en la bio.');
  V('vente','tous','3 razones para elegir…','30 s',
    '3 razones por las que nuestros clientes eligen [producto/servicio].','«3 RAZONES» + número que va pasando',
    ['(3–10 s) «1: [razón 1, concreta].» [Plano ilustrativo]','(10–17 s) «2: [razón 2].»','(17–25 s) «Y la 3, la más importante: [razón 3].»'],
    '¿Cuál es la que más te importa? Cuéntanoslo en comentarios.');
  V('vente','tous','La oferta limitada','15 s',
    '¡Solo hasta el [fecha]!','[OFERTA] enorme, cuenta atrás',
    ['(3–8 s) «[Oferta concreta] en [producto/servicio].» [Plano del producto]','(8–12 s) «¿Por qué? [Motivo sincero: aniversario, fin de serie…].»'],
    'Reserva antes del [fecha]: link en la bio.');
  V('vente','tous','Objeción resuelta','30 s',
    '“Es demasiado caro.” Nos lo dicen a menudo. Esta es la verdad.','la objeción entre comillas',
    ['(3–12 s) «Lo que pagas de verdad: [lo que incluye, vida útil, tiempo que ahorras].»','(12–22 s) «Comparado con [alternativa], te sale a [cálculo sencillo o comparación].»','(22–27 s) «Y además, [garantía / prueba / pago a plazos].»'],
    '¿Otra pregunta? Déjala en comentarios, respondemos a todo.');
  V('vente','tous','Demo en 3 gestos','20 s',
    'Así funciona, en 3 gestos.','manos + producto, primer plano',
    ['(2–7 s) «Uno: [gesto 1].»','(7–12 s) «Dos: [gesto 2].»','(12–17 s) «Tres: [gesto 3]. Y listo.» [Plano resultado]'],
    'Disponible en [nombre] / en [web].');
  V('engagement','tous','Lo que no sabes sobre…','30 s',
    'Nadie te cuenta esto sobre [tema].','texto que se «revela»',
    ['(3–12 s) «[Dato sorprendente pero cierto].»','(12–22 s) «En la práctica, esto significa: [consecuencia para el cliente].»','(22–27 s) «Nuestro consejo: [consejo sencillo].»'],
    'Guarda el vídeo para no olvidarlo.');
  V('engagement','tous','Encuesta: ¿eres más de…?','15 s',
    '¿Team [opción A] o team [opción B]?','A vs B, pantalla partida en dos',
    ['(3–7 s) [Plano opción A] «[A]: [lo mejor de A].»','(7–11 s) [Plano opción B] «[B]: [lo mejor de B].»'],
    'Vota en comentarios: ¿A o B?');
  V('engagement','tous','POV cliente','15 s',
    'POV: acabas de [situación del cliente].','«POV: …» en la parte de arriba',
    ['(3–10 s) [Escena vivida desde el punto de vista del cliente, sin hablar o con música en tendencia]','(10–13 s) [Reacción / sonrisa / resultado]'],
    'Etiqueta a alguien que necesita esto.');
  V('engagement','tous','Errores que debes evitar','30 s',
    'Los 3 errores que veo todo el rato en [sector].','cruz roja ❌ en cada error',
    ['(3–11 s) «Error n.º 1: [error]. Mejor haz esto: [buen hábito].»','(11–19 s) «Error n.º 2: [error].»','(19–26 s) «Error n.º 3, el peor: [error].»'],
    '¿Cometías alguno? Confiésalo en comentarios 😄');
  V('engagement','tous','¿Mito o realidad?','25 s',
    '“[Mito popular].” ¿Mito o realidad?','MITO / REALIDAD parpadeando',
    ['(3–10 s) «Mucha gente cree que [mito popular].»','(10–20 s) «En realidad: [verdad + prueba o ejemplo].»'],
    'Síguenos para el próximo mito.');
  V('pedagogie','tous','Tutorial exprés en 3 pasos','30 s',
    'Cómo [resultado deseado] en 3 pasos.','«EN 3 PASOS» + números',
    ['(3–11 s) «Paso 1: [acción].» [Primer plano]','(11–19 s) «Paso 2: [acción]. Truco: [detalle de profesional].»','(19–26 s) «Paso 3: [acción]. Y listo.» [Plano resultado]'],
    'Guárdalo para hacerlo más tarde.');
  V('pedagogie','tous','El consejo de profesional','20 s',
    'El consejo que les doy a todos mis clientes.','«CONSEJO PRO»',
    ['(3–12 s) «[Consejo concreto que se puede aplicar ya].»','(12–17 s) «¿Por qué? Porque [explicación sencilla en una frase].»'],
    'Compártelo con alguien que lo necesite.');
  V('pedagogie','tous','Pregunta de un cliente','30 s',
    'Me preguntaron: “¿[pregunta real de un cliente]?”','la pregunta en una burbuja de chat',
    ['(3–15 s) «La respuesta corta: [respuesta].»','(15–25 s) «La respuesta completa: [matiz, caso particular].»'],
    'Déjame tu pregunta en comentarios y te respondo en vídeo.');
  V('pedagogie','tous','El glosario en 30 s','30 s',
    '[Término técnico]: ¿qué significa de verdad?','el término + definición que se va escribiendo',
    ['(3–13 s) «En pocas palabras: [definición con palabras sencillas].»','(13–24 s) «Ejemplo: [ejemplo del día a día].»','(24–27 s) «Y para ti, esto cambia [impacto].»'],
    '¿Qué palabra quieres que te explique la próxima vez?');
  V('coulisses','tous','Un día con nosotros','45 s',
    '[Hora de la mañana]. Empieza un día en [nombre].','hora sobreimpresa + plano de apertura',
    ['(3–15 s) [Apertura, preparación, café, equipo]','(15–30 s) [El corazón del oficio: 3 planos rápidos de 2 s] «Lo que nunca ves: [detalle].»','(30–40 s) [Cierre / momento de orgullo] «Y este es nuestro momento favorito.»'],
    '¿Qué más quieres ver de nuestro día a día? Dinos qué.');
  V('coulisses','tous','Te presentamos al equipo','30 s',
    'Son [número] y sin ellos, [nombre] no existiría.','nombres que van apareciendo',
    ['(3–25 s) [Un plano de 3–4 s por persona] «[Nombre], [puesto], [anécdota o talento oculto].»'],
    'Saluda al equipo en comentarios 👋');
  V('coulisses','tous','Por qué creé…','45 s',
    'En [año], lo dejé todo por [proyecto].','foto de la época o plano a cámara',
    ['(3–18 s) «Antes, yo [situación]. Un día, [el momento clic].»','(18–33 s) «Los inicios: [dificultad], pero [lo que te hizo seguir].»','(33–40 s) «Hoy, [lo que te enorgullece].»'],
    'Gracias por estar aquí. Síguenos para ver cómo sigue la historia.');
  V('coulisses','tous','Fabricación a cámara rápida','15 s',
    'De cero a [producto terminado] en 15 segundos.','time-lapse, texto «15 s»',
    ['(2–12 s) [Fabricación / preparación a cámara rápida, música con ritmo]','(12–14 s) [Plano final, producto bien destacado]'],
    '¿A que no dirías que lleva [tiempo real]?');
  V('temoignage','tous','El cliente lo cuenta','30 s',
    '“[Frase potente del cliente].”','cita + nombre del cliente',
    ['(3–12 s) [Cliente a cámara] «Antes, [problema].»','(12–22 s) «Con [nombre], [lo que cambió].»','(22–27 s) «Lo recomiendo porque [motivo].»'],
    'Pruébalo tú también: link en la bio.');
  V('temoignage','tous','La reseña leída en voz alta','20 s',
    'Nos llegó esta reseña… y no nos la esperábamos.','captura de la reseña (5 estrellas)',
    ['(3–14 s) [Lectura de un fragmento de la reseña, captura real en pantalla]','(14–18 s) «Gracias, [nombre], de verdad nos emociona.»'],
    '¿Ya nos conoces? Déjanos tu reseña 🙏');
  V('temoignage','tous','Resultado en cifras','20 s',
    '[Cifra real] en [tiempo]. Así lo conseguimos.','la cifra en enorme',
    ['(3–10 s) «Cuando [cliente] llegó, [punto de partida].»','(10–17 s) «Hicimos [lo que hiciste]. Resultado: [cifra].»'],
    '¿Quieres el mismo diagnóstico? Escríbenos.');
  V('lancement','tous','El teaser','10 s',
    'Algo llega el [fecha].','plano desenfocado / oculto, fecha en grande',
    ['(2–8 s) [Detalles en primerísimo plano, sin enseñarlo todo] «No te contamos más…»'],
    'Activa la campanita para no perdértelo.');
  V('lancement','tous','La gran revelación','30 s',
    '¡Ya está aquí: [novedad]!','revelación con efecto + nombre',
    ['(3–13 s) «Llevamos [tiempo] trabajando en esto: [qué es].»','(13–23 s) «Lo que lo hace único: [diferencia 1], [diferencia 2].»','(23–27 s) «Disponible desde el [fecha], a [precio si es seguro].»'],
    'Los [número] primeros tienen [ventaja]: link en la bio.');
  V('lancement','tous','Cuenta atrás: faltan 3 días','10 s',
    'Solo quedan 3 días.','«-3 DÍAS» enorme',
    ['(2–8 s) [Una pista visual por día] «Pista del día: [pista].»'],
    '¡Adivínalo en comentarios!');
  V('evenement','tous','Invitación al evento','20 s',
    '¡El [fecha] te esperamos!','fecha + lugar en grande',
    ['(3–10 s) «En el programa: [momento estrella 1], [momento estrella 2].»','(10–16 s) «Es [gratis / con reserva], en [lugar], desde las [hora].»'],
    'Comenta “voy” y te guardamos sitio.');
  V('evenement','tous','Resumen del evento','30 s',
    '¡Gracias! Este [día] fuimos [número].','plano general del público',
    ['(3–25 s) [Montaje con ritmo de los mejores momentos, 1,5 s por plano, sonrisas, detalles]','(25–28 s) «Gracias a [colaboradores / equipo].»'],
    '¿Estuviste? ¡Etiquétate en el vídeo!');
  V('fidelite','tous','Gracias a la comunidad','20 s',
    '[Número] seguidores. Todavía no nos lo creemos.','la cifra subiendo',
    ['(3–15 s) «Cuando empezamos, [recuerdo]. Hoy, gracias a ti, [orgullo].»'],
    'Para celebrarlo: [pequeño regalo / sorteo]. Detalles en la descripción.');
  V('fidelite','tous','Sorteo','20 s',
    '¡Sorteamos [premio]!','🎁 SORTEO',
    ['(3–15 s) «Para participar: 1. síguenos, 2. dale like, 3. etiqueta a [número] amigos. Sorteo el [fecha].»'],
    '¡Mucha suerte a todos! Bases en la descripción.');
  V('recrutement','tous','Estamos contratando','30 s',
    'Buscamos [puesto]. ¿Y si eres tú?','ESTAMOS CONTRATANDO + puesto',
    ['(3–12 s) «Aquí, [ambiente real, 2 planos del equipo].»','(12–22 s) «Lo que buscamos: [cualidad 1], [cualidad 2]. No necesitas [título / experiencia] si [condición].»','(22–27 s) «[Contrato, horario, lugar].»'],
    'Mándanos un mensaje o compártelo con la persona indicada.');

  /* =================================================================== TEXTOS PARA POSTS — TODOS LOS SECTORES */
  P('vente','tous','Primero el beneficio',
'[El resultado que tu cliente quiere], sin [lo que más le echa para atrás]. ✨\n\nEso es justo lo que ofrece [producto/servicio]:\n✔️ [beneficio 1]\n✔️ [beneficio 2]\n✔️ [beneficio 3]\n\n📍 [lugar / envío / online]\n👉 [Reserva / Pide] desde el link en la bio.');
  P('vente','tous','Problema – Agitación – Solución',
'¿[Problema]? No eres el único (ni la única).\n\nY cuanto más esperas, más [consecuencia concreta]. 😬\n\nLa buena noticia: [solución en una frase].\nEn [nombre], [cómo lo hacemos, en concreto].\n\n💬 Escríbenos «[palabra clave]» por mensaje y lo hablamos.');
  P('vente','tous','Oferta por tiempo limitado',
'⏳ Solo hasta el [fecha]:\n[oferta concreta] en [producto/servicio].\n\n¿Por qué? [Motivo sincero].\n\nDespués, volvemos al precio normal. Sin prórrogas. 🙃\n\n👉 Link en la bio / [teléfono]');
  P('vente','tous','El producto estrella',
'Si solo pudieras probar una cosa nuestra, sería esta. 👇\n\n[Producto]: [lo que lo hace único, 1 frase sensorial o concreta].\n\nNuestros clientes lo eligen por [motivo n.º 1].\n\n¿Ya lo probaste? ¡Ponle nota del 1 al 10 en comentarios!');
  P('vente','tous','Comparativa honesta',
'¿[Opción A] o [nuestra solución]? Seamos sinceros. 🤝\n\n[Opción A]: ✅ [ventaja] / ❌ [límite]\n[Nuestra solución]: ✅ [ventaja] / ✅ [ventaja] / ❌ [límite que asumimos]\n\nPara quién es: [perfil ideal].\nPara quién no es: [perfil].\n\n¿Alguna pregunta? Te respondemos en comentarios.');
  P('engagement','tous','Pregunta abierta',
'Preguntita del día 👇\n\n¿[Pregunta sencilla que le importe a tu cliente]?\n\nLo nuestro: [tu respuesta con un toque personal].\n\n¡Te toca! Leemos todos los comentarios.');
  P('engagement','tous','Esto o aquello',
'¿Eres más de…\n\n🅰️ [opción A]\no\n🅱️ [opción B]?\n\nResponde solo A o B en comentarios. ¡El viernes hacemos recuento! 📊');
  P('engagement','tous','Completa la frase',
'Completa la frase 👇\n\n«Un [día / momento] perfecto es cuando…»\n\nEmpezamos nosotros: [tu respuesta]. 😄');
  P('engagement','tous','Confiesa…',
'Confiesa… ¿tú también [pequeño hábito o error típico de tu sector]? 🙈\n\nAquí nadie juzga. Pero te dejamos un truco sencillo: [truco].\n\nEtiqueta a quien SIEMPRE hace esto 😂');
  P('pedagogie','tous','Carrusel: guía paso a paso',
'📌 Guarda este post, lo vas a necesitar.\n\nCómo [resultado] en [número] pasos:\n\n1️⃣ [paso 1]\n2️⃣ [paso 2]\n3️⃣ [paso 3]\n4️⃣ [paso 4]\n\n💡 El error que debes evitar: [error].\n\n¿Alguna duda? Te leemos en comentarios 👇');
  P('pedagogie','tous','Mito popular',
'❌ «[Mito popular]»\n✅ En realidad: [verdad].\n\n¿Por qué nos lo creemos? [Origen del mito].\nLo que cambia para ti: [consecuencia práctica].\n\n¿Tú te lo creías? Sé sincero 😉');
  P('pedagogie','tous','Checklist',
'✅ La checklist antes de [acción importante para tu cliente]:\n\n☐ [punto 1]\n☐ [punto 2]\n☐ [punto 3]\n☐ [punto 4]\n☐ [punto 5]\n\nMárcalo todo y a otra cosa. 💪\nGuárdalo para tenerlo a mano el gran día.');
  P('pedagogie','tous','Dato clave',
'[Dato verificado] 😮\n\nEs [lo que representa esta cifra] (fuente: [fuente]).\n\nLo que significa para ti: [interpretación sencilla].\nNuestro consejo: [acción].\n\n¿Lo sabías?');
  P('coulisses','tous','Detrás de cámaras del día',
'Lo que no ves antes de [momento en que el cliente te ve]. 👀\n\n[Hora]: [tarea]\n[Hora]: [tarea]\n[Hora]: [tarea]\n\nNo es glamuroso, pero gracias a esto [resultado que el cliente valora]. ❤️');
  P('coulisses','tous','Retrato del equipo',
'Seguro que ya la/lo conoces… pero ¿conoces de verdad a [nombre]? 👋\n\n🔧 Su puesto: [puesto]\n⏳ Con nosotros desde hace: [tiempo]\n💛 Lo que más le gusta: [anécdota]\n🤫 Talento oculto: [talento]\n\n¿Unas palabras para [nombre]? 👇');
  P('coulisses','tous','Nuestra historia',
'Todo empezó [lugar / momento improbable]. 🌱\n\n[2–3 frases: el momento clic, los inicios difíciles, lo que te hizo seguir.]\n\n[Número] años después, [lo que te enorgullece].\n\nGracias por formar parte de esta historia. 🙏');
  P('coulisses','tous','Nuestros valores, de verdad',
'No hacemos [práctica habitual del sector]. Nunca. 🙅\n\n¿Por qué? Porque [convicción].\n\nEn su lugar, [tu forma de hacerlo], aunque nos cueste [contrapartida].\n\nEs una decisión. ¿Y a ti, te importa?');
  P('temoignage','tous','Reseña de cliente',
'⭐⭐⭐⭐⭐\n«[Cita real del cliente]»\n— [Nombre], [ciudad / contexto]\n\n¡Gracias, [nombre]! Mensajes así son nuestro combustible. 🔋\n\nTú también puedes [acción]: link en la bio.');
  P('temoignage','tous','Caso de cliente',
'📂 Caso de cliente: [nombre / empresa]\n\n🎯 La necesidad: [necesidad]\n🛠️ Lo que hicimos: [solución]\n📈 El resultado: [resultado concreto]\n\n«[Cita breve]»\n\n¿Tienes una necesidad parecida? Escríbenos.');
  P('lancement','tous','Novedad',
'🆕 ¡NOVEDAD!\n\n[Nombre de la novedad]: [qué es en una frase].\n\nPor qué lo creamos: [necesidad del cliente].\nLo que cambia para ti: [beneficio].\n\n📅 Desde el [fecha] · [precio si se sabe]\n👉 [Dónde comprarlo / reservarlo]');
  P('lancement','tous','Teaser',
'Algo se está cocinando… 👀\n\nPista: [pista misteriosa].\n\nNos vemos el [fecha] a las [hora].\nDeja tu apuesta en comentarios 👇');
  P('evenement','tous','Anuncio de evento',
'📅 [Fecha] · 📍 [Lugar] · 🕒 [Hora]\n\n[Nombre del evento]: [promesa en una frase].\n\nEn el programa:\n• [momento estrella 1]\n• [momento estrella 2]\n• [momento estrella 3]\n\n[Gratis / Plazas limitadas] → [cómo apuntarse]');
  P('evenement','tous','Cierre / horarios',
'📢 Info práctica\n\n[Nombre] estará [cerrado / con horario especial] del [fecha] al [fecha].\n\n🕒 [Nuevo horario]\n\n¡Nos vemos el [fecha]! Gracias por tu comprensión. 🙏');
  P('evenement','tous','Fiesta / temporada',
'¡Llega [fiesta / temporada]! [Emoji]\n\nPara la ocasión: [oferta, producto o actividad especial].\n\nDisponible del [fecha] al [fecha], hasta agotar existencias.\n\n¿Y tú, cómo lo celebras? 👇');
  P('fidelite','tous','Gracias, clientes',
'[Número] [clientes / pedidos / años]. 🥹\n\nSolo queríamos decir GRACIAS.\n\nA quienes vuelven, a quienes nos recomiendan, a quienes nos dejan mensajitos.\n\nPara celebrarlo: [regalo / descuento / sorpresa].');
  P('fidelite','tous','Sorteo',
'🎁 SORTEO 🎁\n\n¡Sorteamos [premio concreto]!\n\nPara participar:\n1️⃣ Sigue a @[cuenta]\n2️⃣ Dale like a este post\n3️⃣ Etiqueta a [número] amigos en comentarios\n\nSorteo el [fecha]. ¡Mucha suerte!\n\nSorteo no patrocinado ni gestionado por [red social]. Contactaremos con el ganador por mensaje privado.');
  P('fidelite','tous','Programa de fidelidad',
'¿Vienes a menudo? Ya nos hemos dado cuenta. 😉\n\nNovedad: [cómo funciona la tarjeta / el programa].\n➡️ [recompensa concreta] al llegar a [número] [compras / visitas].\n\n¡Pide tu tarjeta en tu próxima visita!');
  P('recrutement','tous','Oferta de empleo',
'🚀 ESTAMOS CONTRATANDO: [puesto]\n\n📍 [Lugar] · [Tipo de contrato] · [Horario]\n\nLo que harás: [funciones en 2 líneas]\nLo que buscamos: [cualidades, no necesariamente títulos]\nLo que ofrecemos: [ambiente, ventajas, crecimiento]\n\n📩 Mensaje privado o [email]. ¡Compártelo, puede ayudar a alguien!');

  /* =================================================================== RESTAURANTE / CAFETERÍA / PANADERÍA */
  V('vente','resto','El plato estrella','20 s',
    'El plato que más nos piden.','primer plano humeante / que se derrite',
    ['(3–10 s) [Emplatado en primer plano] «[Nombre del plato]: [ingredientes clave, cocción].»','(10–16 s) [El primer bocado / reacción] «Hecho en casa, cada [día / mañana].»'],
    'Reserva tu mesa: link en la bio.');
  V('coulisses','resto','6 de la mañana en cocina','30 s',
    'Las 6:00. El restaurante duerme; nosotros, no.','hora sobreimpresa',
    ['(3–12 s) [Llega el género, cajas] «Los [productos] llegan de [productor], a [distancia].»','(12–24 s) [Preparaciones: corte, salsa, masa] «Todo se prepara aquí, esta misma mañana.»','(24–27 s) [Sala lista, luz]'],
    '¿Te guardamos mesa para hoy a mediodía?');
  V('engagement','resto','Adivina el plato','15 s',
    'Adivina el plato antes del final.','primerísimos planos muy cerrados',
    ['(2–11 s) [5 ingredientes en primerísimo plano, 2 s cada uno]','(11–13 s) [Revelación del plato]'],
    '¿Lo has acertado? Respuesta sincera en comentarios 😄');
  V('fidelite','resto','Menú de la semana','20 s',
    '¡Ya está aquí el menú de la semana!','MENÚ + días',
    ['(3–16 s) [Un plano por plato, 3 s cada uno] «Lunes [plato], martes [plato]…»'],
    '¿Cuál te apetece? Reserva en el [teléfono].');
  P('vente','resto','Plato del día',
'🍽️ Hoy en la pizarra:\n\n[Entrante]\n[Principal]\n[Postre]\n\n[Menú]: [precio] €\n\nHecho en casa con [producto local] de [productor]. 🌿\n📞 [Teléfono] para reservar · 📍 [dirección]');
  P('coulisses','resto','El productor',
'Te presentamos a [nombre], que nos trae [producto] desde hace [tiempo]. 👨‍🌾\n\n[Su granja / su taller] está a [distancia] de aquí. [Detalle que demuestre la calidad.]\n\nGracias a él, nuestro [plato] sabe así.\n\nNos encanta trabajar con producto local. ¿Y a ti, te importa?');
  P('engagement','resto','Dulce o salado',
'Desayuno: ¿eres más de… 🥐 o 🍳?\n\nNosotros lo tenemos claro: [tu preferencia + especialidad].\n\nResponde con un emoji 👇');
  P('evenement','resto','Noche especial',
'🎉 ¡[Día] por la noche: [nombre de la noche]!\n\n[Menú / actividad / música] desde las [hora].\n[Precio] por persona, [bebida incluida o no].\n\nSolo [número] plazas: reserva obligatoria en el [teléfono].');

  /* =================================================================== BELLEZA / PELUQUERÍA / ESTÉTICA */
  V('vente','beaute','Transformación en 15 s','15 s',
    'Llegó así…','ANTES',
    ['(2–10 s) [Pasos a cámara rápida: corte, color, peinado]','(10–13 s) [Revelación, la clienta se gira / se mira] «…y se fue así.»'],
    'Reserva tu transformación: link en la bio.');
  V('pedagogie','beaute','El error que estropea tu pelo','25 s',
    'Deja de hacer esto después de lavarte el pelo.','❌ + gesto que hay que evitar',
    ['(3–12 s) «Frotar con la toalla [daño].»','(12–20 s) «Mejor así: [gesto correcto], y [producto / truco].»'],
    'Guárdalo y mándaselo a esa amiga que frota 😄');
  V('engagement','beaute','¿Qué color este otoño?','15 s',
    '¿Cobrizo, caramelo o castaño frío?','3 colores, números 1-2-3',
    ['(3–12 s) [3 resultados reales, 3 s cada uno, numerados]'],
    '¡Vota 1, 2 o 3 en comentarios!');
  V('coulisses','beaute','El tratamiento por dentro','30 s',
    'Lo que pasa durante tu tratamiento [nombre del tratamiento].','ambiente suave, luz tenue',
    ['(3–24 s) [Pasos del tratamiento, manos, productos, relax] «Primero [paso], luego [paso] y, por último, [paso].»','(24–27 s) «[Duración] solo para ti.»'],
    'Regálalo o date el capricho: reserva en la bio.');
  P('vente','beaute','Huecos disponibles',
'✂️ ¡Aún quedan huecos esta semana!\n\n[Día]: [horas]\n[Día]: [horas]\n\nServicio del momento: [servicio] a [precio] €.\n\n📲 Reserva online (link en la bio) o en el [teléfono].');
  P('pedagogie','beaute','Rutina en 3 pasos',
'Tu rutina de noche para [el pelo / la piel] en 3 pasos 🌙\n\n1. [Paso 1 + tipo de producto]\n2. [Paso 2]\n3. [Paso 3]\n\nTiempo total: [minutos] min. Resultado: [beneficio].\n\nGuárdalo para esta noche ✨');
  P('temoignage','beaute','La reacción de la clienta',
'Su reacción al verse en el espejo… 🥹\n\n«[Cita]»\n\n[Servicio realizado] por [nombre del peluquero / esteticista].\n\nGracias por tu confianza, [nombre de la clienta] 💛');
  P('fidelite','beaute','Tarjeta regalo',
'🎁 ¿No sabes qué regalar?\n\nNuestras tarjetas regalo van de [importe] a [importe] €, válidas [duración] en todos nuestros servicios.\n\nRecógela en el salón o pídela por mensaje. El regalo que siempre acierta. 💝');

  /* =================================================================== OFICIOS / CONSTRUCCIÓN / REFORMAS */
  V('vente','artisan','La obra: antes / después','30 s',
    'Esta [estancia] no se tocaba desde [año].','ANTES + año',
    ['(3–12 s) [Estado inicial, detalles dañados] «El problema: [problema].»','(12–24 s) [Obra a cámara rápida] «[Duración] de obra: [trabajos].»','(24–27 s) [Plano general terminado] «Y ahora.»'],
    'Presupuesto gratis: mensaje o link en la bio.');
  V('pedagogie','artisan','Señales de que hay que actuar','30 s',
    'Si ves esto en casa, llama a un profesional.','zoom al defecto',
    ['(3–12 s) «Señal n.º 1: [señal]. Significa [causa].»','(12–20 s) «Señal n.º 2: [señal].»','(20–26 s) «Cuanto más esperas, más [consecuencia y coste].»'],
    '¿Tienes dudas? Mándanos una foto por mensaje y te decimos gratis qué pasa.');
  V('coulisses','artisan','El gesto del oficio','15 s',
    '[Años] de experiencia en este gesto.','primer plano de manos / herramienta',
    ['(2–12 s) [Gesto técnico en tiempo real, sonido ambiente, primerísimo plano]'],
    'Síguenos si te gusta el trabajo bien hecho.');
  V('temoignage','artisan','El cliente nos enseña la casa','30 s',
    '“La casa no parece la misma.”','cita del cliente',
    ['(3–25 s) [El cliente enseña la casa y comenta] «Lo que queríamos: [necesidad]. Lo que conseguimos: [resultado]. Lo que más valoramos: [plazos, limpieza, asesoramiento].»'],
    '¿Tu proyecto es el siguiente? Presupuesto gratis.');
  P('vente','artisan','Presupuesto gratis',
'🏠 ¿Estás pensando en [tipo de obra]?\n\n✅ Presupuesto gratis en [plazo]\n✅ [Seguro / certificación si aplica]\n✅ Trabajamos en [zona]\n\nVamos, medimos y te lo explicamos todo. Sin compromiso.\n\n📞 [Teléfono] · 📩 mensaje privado');
  P('pedagogie','artisan','Ayudas y subvenciones',
'💶 Bueno saberlo: tu obra de [tipo] puede estar en parte subvencionada.\n\n[Ayuda 1, condiciones generales]\n[Ayuda 2]\n\n⚠️ Los importes y las condiciones cambian: revisamos contigo qué se aplica a tu caso.\n\n¿Dudas? Mensaje privado.');
  P('coulisses','artisan','Obra en curso',
'🚧 Obra en curso en [ciudad]\n\nDía [n] de [total]: [fase del día].\n\nLo que hacemos hoy y por qué es importante: [explicación sencilla].\n\n¡Continuará! 👷');
  P('temoignage','artisan','Obra entregada',
'✅ ¡Obra entregada en [ciudad]!\n\n[Tipo de obra] en [duración].\n\n«[Cita del cliente]»\n\nGracias, [nombre], por tu confianza. Desliza para ver el antes / después ➡️');

  /* =================================================================== COMERCIO / TIENDA */
  V('vente','commerce','Recién llegado','15 s',
    'Acaba de llegar, y no habrá para todos.','NUEVO',
    ['(2–12 s) [Unboxing rápido, 4–5 artículos, 2 s cada uno, precio sobreimpreso si es seguro]'],
    'Pásate por la tienda o resérvalo por mensaje.');
  V('vente','commerce','3 ideas de regalo por menos de [precio]','30 s',
    '3 ideas de regalo por menos de [precio] €.','precio máximo en grande',
    ['(3–11 s) «Para [perfil 1]: [artículo], [precio].»','(11–19 s) «Para [perfil 2]: [artículo].»','(19–26 s) «Y para [perfil 3]: [artículo]. Te lo envolvemos gratis.»'],
    '¿Cuál te salva la vida? Comenta 1, 2 o 3.');
  V('coulisses','commerce','Preparando tu pedido','20 s',
    '¡Preparando tu pedido, [nombre del cliente]!','ASMR de empaquetado',
    ['(2–17 s) [Empaquetado cuidado, papel, lazo, notita escrita a mano, sonido ambiente]'],
    'Haz tu pedido online: link en la bio.');
  V('engagement','commerce','El look del día','15 s',
    'Una prenda, tres formas de llevarla.','1 → 3',
    ['(2–13 s) [3 looks con la misma prenda, transición en cada chasquido de dedos]'],
    'Tu favorito: ¿1, 2 o 3?');
  P('vente','commerce','Novedades en tienda',
'📦 ¡Recién llegado!\n\n[Producto / marca]: [descripción corta y sensorial].\nTallas / modelos: [detalles]\nPrecio: [precio]\n\nUnidades limitadas. Resérvalo por mensaje y te lo guardamos 24 h. 🛍️');
  P('fidelite','commerce','Rebajas / promo',
'🏷️ [Evento promo] del [fecha] al [fecha]\n\n-[x] % en [sección / selección]\n[Ventaja extra: 2.ª unidad, regalo…]\n\nEn tienda [y online]. Las mejores piezas vuelan el primer día. 😉');
  P('coulisses','commerce','Por qué este producto',
'¿Por qué elegimos vender [producto / marca]? 🤔\n\n• [Motivo 1: calidad, fabricación]\n• [Motivo 2: ética, producto local]\n• [Motivo 3: opiniones de los clientes]\n\nSolo vendemos lo que usaríamos nosotros mismos.');
  P('engagement','commerce','Ayúdanos a elegir',
'Estamos dudando con el próximo pedido… ¡ayúdanos! 🙏\n\n¿[Opción A] o [Opción B]?\n\nLa más pedida en comentarios llega a la tienda el [fecha].');

  /* =================================================================== SALUD / BIENESTAR / TERAPIAS */
  V('pedagogie','sante','Un ejercicio sencillo','30 s',
    'Un ejercicio de [duración] para aliviar [zona / tensión].','nombre del ejercicio',
    ['(3–20 s) [Demostración lenta] «Colócate [posición]. Respira [indicación]. Repite [número] veces.»','(20–27 s) «Si duele, para y consúltalo con un profesional.»'],
    'Guárdalo para hacerlo esta noche.');
  V('pedagogie','sante','Cómo es una sesión','30 s',
    '¿Nunca has probado [disciplina]? Así es una sesión.','la consulta, ambiente tranquilo',
    ['(3–12 s) «Empezamos con [una charla / una valoración].»','(12–22 s) «Después, [desarrollo de la sesión].»','(22–27 s) «Una sesión dura [duración].»'],
    '¿Alguna pregunta antes de venir? Escríbeme.');
  V('engagement','sante','Mito de salud','25 s',
    '“[Mito de salud].” ¿Verdadero o falso?','VERDADERO / FALSO',
    ['(3–20 s) «[Respuesta matizada y con fuentes]. Lo que de verdad importa: [consejo].»'],
    '¿Qué otro mito quieres que desmonte?');
  V('coulisses','sante','Por qué me dedico a esto','30 s',
    'Soy [profesión] desde hace [años]. Te cuento por qué.','a cámara, tono cercano',
    ['(3–25 s) «[Momento clic personal], [lo que te gusta de acompañar a la gente], [lo que te emociona de tus pacientes].»'],
    'Cuídate. Pide cita online si lo necesitas.');
  P('pedagogie','sante','Consejo de bienestar',
'🌿 El consejo de la semana\n\n[Consejo sencillo y aplicable]\n\nPor qué ayuda: [explicación en 2 frases].\n\n⚠️ Este consejo no sustituye la opinión de un profesional sanitario. Si tienes dudas, consulta.\n\nGuárdalo para tenerlo presente 💚');
  P('vente','sante','Pide tu cita',
'📅 Se liberan huecos [periodo].\n\n[Tipo de sesión] · [duración] · [tarifa]\n[Cobertura de seguro si aplica]\n\nReserva online (link en la bio) o en el [teléfono].');
  P('coulisses','sante','La consulta',
'Te damos la bienvenida a la consulta 🤍\n\nUn espacio pensado para que te sientas [a salvo / en calma] desde que cruzas la puerta.\n\n📍 [Dirección] · [acceso, parking, accesibilidad]\n\nHasta pronto.');
  P('engagement','sante','Check-in',
'¿Cómo estás, de verdad, esta semana? 🫶\n\nResponde con un emoji:\n😌 bien\n😐 regular\n😮‍💨 agotado/a\n\nSea cual sea la respuesta, regálate hoy [pequeño gesto de autocuidado].');

  /* =================================================================== COACH / DEPORTE / FORMACIÓN */
  V('pedagogie','coach','El ejercicio que todos hacen mal','25 s',
    '¿Haces [ejercicio] así? Para.','❌ gesto incorrecto',
    ['(3–12 s) [Ejecución incorrecta] «Aquí estás [error y riesgo].»','(12–21 s) [Ejecución correcta] «Mejor así: [indicación 1], [indicación 2].»'],
    'Guárdalo y pruébalo en tu próximo entreno.');
  V('temoignage','coach','La evolución','30 s',
    'Hace [tiempo], [nombre] no podía [acción].','ANTES, fecha',
    ['(3–15 s) [Imágenes del principio]','(15–25 s) [Hoy] «Lo que funcionó: [constancia, método].»'],
    '¿Te animas a empezar? Sesión de prueba en la bio.');
  V('engagement','coach','Reto de 7 días','20 s',
    'Reto: [acción] durante 7 días. ¿Te apuntas?','RETO 7 DÍAS',
    ['(3–15 s) «Cada día, [acción concreta y realista]. Yo subo mi versión todos los días en stories.»'],
    'Comenta “ME APUNTO” para unirte.');
  V('vente','coach','La sesión de prueba','20 s',
    '¿Lo estás pensando? Ven a probar.','PRUEBA [gratis / precio]',
    ['(3–15 s) «En [duración] hacemos [una valoración / una sesión de prueba] y notas [lo que van a sentir]. Cero compromiso.»'],
    'Reserva tu sesión de prueba: link en la bio.');
  P('pedagogie','coach','Rutina exprés',
'💪 Rutina exprés: [duración] min, sin material\n\n1. [Ejercicio] — [repeticiones]\n2. [Ejercicio] — [repeticiones]\n3. [Ejercicio] — [repeticiones]\n\n[Número] rondas. Descanso de [segundos] s.\n\nGuárdala y dime en comentarios cuando la hayas hecho ✅');
  P('engagement','coach','Motivación',
'Recordatorio del [día]: [frase de motivación tuya, no una cita copiada].\n\nNo hace falta ser perfecto. Solo tienes que [acción mínima] hoy.\n\n¿Cuál ha sido tu pequeña victoria de la semana? 👇');
  P('vente','coach','Inscripciones abiertas',
'🚀 ¡Ya están abiertas las inscripciones para [programa / sesión]!\n\nPara quién: [perfil]\nDuración: [duración]\nFormato: [presencial / online]\nTe llevas: [resultado]\n\n[Número] plazas. Empezamos el [fecha].\n👉 Link en la bio');
  P('temoignage','coach','La victoria de un alumno',
'🏆 ¡Enhorabuena, [nombre]!\n\n[Objetivo conseguido] después de [tiempo] de trabajo.\n\nLo que más admiré: [cualidad de la persona].\n\nTu momento también llegará. ¿Cuándo empezamos?');

  /* =================================================================== INMOBILIARIA */
  V('vente','immo','Visita en 30 segundos','30 s',
    '[Tipo de inmueble], [superficie] m², en [barrio / ciudad].','precio + superficie',
    ['(3–24 s) [Visita fluida: entrada, salón, cocina, dormitorios, exterior] «Lo que enamora: [punto fuerte].»','(24–27 s) «[Precio] · [certificado energético]»'],
    'Visitas con cita previa: mensaje privado.');
  V('pedagogie','immo','¿Cuánto vale tu casa?','25 s',
    '¿Tu casa vale de verdad lo que crees?','¿€?',
    ['(3–20 s) «Los 3 criterios que más pesan en [ciudad]: [criterio 1], [criterio 2], [criterio 3].»'],
    'Valoración gratis en 48 h: link en la bio.');
  V('coulisses','immo','Un día de agente','30 s',
    'Lo que hace de verdad un agente inmobiliario.','el día a cámara rápida',
    ['(3–25 s) [Visitas, fotos, firma en la notaría, llamadas] «Una venta son, de media, [número] visitas y [tiempo].»'],
    '¿Dudas sobre la venta? Déjalas en comentarios.');
  V('temoignage','immo','Entrega de llaves','15 s',
    'El momento favorito de nuestro trabajo.','🔑',
    ['(2–12 s) [Entrega de llaves, sonrisas, con permiso de los clientes]'],
    '¡Enhorabuena, [nombres]! ¿Quién es el siguiente?');
  P('vente','immo','Nuevo inmueble',
'🏡 EXCLUSIVA · [Ciudad / barrio]\n\n[Tipo] · [superficie] m² · [habitaciones] habitaciones\n✨ [Punto fuerte 1] · [Punto fuerte 2] · [Punto fuerte 3]\n\n[Precio] € [honorarios a cargo de …]\nCertificado energético: [letra]\n\n📩 Visitas con cita previa por mensaje privado.');
  P('pedagogie','immo','Consejo para vendedores',
'¿Vendes tu casa? 3 cosas que hacer ANTES de las fotos 📸\n\n1. [Consejo 1]\n2. [Consejo 2]\n3. [Consejo 3]\n\nUna casa bien presentada se vende [antes / mejor].\n\nValoración gratis: link en la bio.');
  P('temoignage','immo','Vendido',
'🔑 ¡VENDIDO!\n\n[Tipo de inmueble] en [ciudad], vendido en [tiempo].\n\n«[Cita de los vendedores]»\n\nGracias, [nombres], por confiar en nosotros. ¿Quieres vender? Hablemos.');
  P('engagement','immo','Flechazo',
'¿Con cuál te quedas? 🤔\n\n🅰️ [Inmueble A: ventaja]\n🅱️ [Inmueble B: ventaja]\n\nMismo presupuesto: [presupuesto]. ¡Vota en comentarios!');

  /* =================================================================== SERVICIOS / B2B / FREELANCE */
  V('pedagogie','services','El error que les sale caro a las empresas','30 s',
    'Este error le cuesta [dinero / tiempo] a la mayoría de [público].','💸',
    ['(3–13 s) «El error: [error].»','(13–23 s) «Por qué es grave: [consecuencia en cifras si es segura].»','(23–27 s) «La solución sencilla: [solución].»'],
    'Escríbenos “AUDITORÍA” por mensaje y revisamos tu caso.');
  V('vente','services','Cómo trabajo','30 s',
    'Trabajar conmigo es así.','pasos 1-2-3',
    ['(3–12 s) «1. [Llamada de descubrimiento / auditoría].»','(12–20 s) «2. [Propuesta / ejecución].»','(20–27 s) «3. [Entrega / seguimiento]. Plazo medio: [tiempo].»'],
    'Primera llamada gratis: link en la bio.');
  V('temoignage','services','Resultado de un cliente','25 s',
    '[Resultado en cifras] para [tipo de cliente].','la cifra',
    ['(3–20 s) «El punto de partida: [situación]. Lo que hicimos: [acción]. El resultado: [resultado].»'],
    '¿Quieres lo mismo? Mensaje privado.');
  V('coulisses','services','Mi oficina, mis herramientas','20 s',
    'Las [número] herramientas sin las que no trabajo.','setup de trabajo',
    ['(3–17 s) [Un plano por herramienta] «[Herramienta]: para [uso].»'],
    '¿Y tú? ¿Cuál es tu herramienta imprescindible?');
  P('pedagogie','services','Post de LinkedIn: lección aprendida',
'[Situación de partida en una frase impactante].\n\nHace [tiempo], [lo que pasó].\n\nLo que aprendí:\n→ [lección 1]\n→ [lección 2]\n→ [lección 3]\n\n¿Y a ti, qué lección te ha salido más cara?');
  P('vente','services','Oferta de servicio',
'¿Eres [público] y [problema]?\n\nAyudo a [público] a [resultado] gracias a [método], en [tiempo].\n\nLo que obtienes:\n✔️ [entregable 1]\n✔️ [entregable 2]\n✔️ [entregable 3]\n\n[Número] plazas este mes. Llamada de descubrimiento gratis: link en comentarios.');
  P('temoignage','services','Caso de éxito para LinkedIn',
'[Cliente] tenía [problema].\n\nEn [tiempo], hicimos esto:\n1. [acción]\n2. [acción]\n3. [acción]\n\nResultado: [resultado medible].\n\nLo más importante no fue [lo que todo el mundo cree], sino [el verdadero factor clave].\n\n¿Te pasa lo mismo? Hablemos.');
  P('coulisses','services','Detrás de un proyecto',
'Lo que mis clientes no ven (y es normal) 👇\n\n• [Paso invisible 1]\n• [Paso invisible 2]\n• [Paso invisible 3]\n\nEs el 80 % del trabajo para el 20 % de lo que se ve. Y ahí es donde se juega la calidad.');


  /* =================================================================== PROMPTS DE IMAGEN — TODOS LOS SECTORES */
  I('produit','tous','Packshot de estudio con fondo liso',
'Foto de producto profesional de [producto], colocado en el centro sobre un fondo liso [color de la marca], iluminación de estudio suave con una ligera sombra en el suelo, reflejos nítidos en el material, enfoque perfecto en el logo, mucho espacio vacío arriba para añadir un texto. Estilo catálogo de alta gama, formato cuadrado.');
  I('produit','tous','Producto en uso',
'[Producto] usado por una persona en [espacio cotidiano realista: cocina, oficina, baño…], luz natural de media mañana entrando por una ventana, manos visibles mientras [gesto], fondo ligeramente desenfocado, colores cálidos y naturales. Foto lifestyle auténtica, nada posada. Formato vertical 4:5.');
  I('produit','tous','Flat lay cenital',
'Composición plana vista desde arriba: [producto principal] en el centro, rodeado de [3 a 5 objetos o ingredientes relacionados] colocados con mimo, sobre una superficie de [madera clara / mármol / lino], sombras suaves, paleta [colores], mucho aire entre los objetos. Estilo revista minimalista. Formato cuadrado.');
  I('produit','tous','Levitación dinámica',
'[Producto] flotando en el aire, rodeado de [elementos que lo evoquen: salpicaduras, frutas, hojas, polvo] congelados en pleno movimiento, fondo degradado [color], iluminación contrastada, ultranítido, efecto de anuncio premium. Formato vertical 9:16.');
  I('produit','tous','Gama en fila',
'Los [número] productos de la gama [nombre] alineados de izquierda a derecha en una estantería minimalista, del más pequeño al más grande, fondo [color], iluminación uniforme, etiquetas legibles, acabado de foto e-commerce limpio. Formato horizontal 16:9.');
  I('pub','tous','Visual promocional con espacio para texto',
'Visual publicitario para [oferta]: [producto o servicio] destacado en la mitad derecha de la imagen, la mitad izquierda es un bloque de color [color] vacío para colocar un titular, ambiente enérgico, colores vivos de la marca, luz nítida. No escribir ningún texto en la imagen. Formato 4:5.');
  I('pub','tous','Antes / después lado a lado',
'Imagen dividida verticalmente en dos: a la izquierda [estado antes, apagado y realista], a la derecha [estado después, nítido y luminoso], mismo encuadre y mismo ángulo en ambos lados, fina línea blanca en el centro, iluminación idéntica. Foto realista, sin retoques exagerados. Formato cuadrado.');
  I('pub','tous','Cartel de evento',
'Cartel para [evento]: escena que refleja [ambiente del evento] en primer plano, gran espacio libre arriba para el título y abajo para la fecha, colores [paleta], estilo [gráfico moderno / retro / elegante]. Sin texto generado en la imagen. Formato vertical 9:16.');
  I('pub','tous','Fondo de story con zona de texto',
'Fondo vertical para story de Instagram: [textura o escena relacionada con la marca] desenfocada y suave, un gran rectángulo claro semitransparente en el centro para escribir un mensaje, colores [paleta de la marca], ambiente tranquilo y legible. Formato 9:16.');
  I('lieu','tous','Fachada acogedora',
'Fachada de [tipo de negocio] [nombre] al final del día, escaparate iluminado desde dentro con luz cálida, rótulo bien visible, acera limpia, algunos transeúntes desenfocados, cielo azul de atardecer. Foto de arquitectura realista y acogedora. Formato 4:5.');
  I('lieu','tous','Interior acogedor',
'Interior de [espacio: tienda, salón, consulta, taller] vacío y perfectamente ordenado, luz natural suave, plantas, materiales [madera, lino, metal], perspectiva gran angular desde la entrada, ambiente acogedor y premium. Foto de interiores realista. Formato horizontal 3:2.');
  I('personnes','tous','Retrato del dueño',
'Retrato profesional de [descripción: edad, estilo] en su [lugar de trabajo], sonriendo, mirando a cámara, vestido con [ropa], fondo del local ligeramente desenfocado, luz lateral suave, ambiente auténtico y seguro. Foto de retrato realista, objetivo de 85 mm. Formato 4:5.');
  I('personnes','tous','El equipo en acción',
'Foto de [número] personas del equipo [actividad del oficio] juntas, momento natural y de complicidad, algunas sonrisas, luz natural, colores cálidos, encuadre de reportaje tomado al vuelo. Foto realista, nada posada. Formato horizontal 3:2.');
  I('personnes','tous','Manos trabajando',
'Primer plano de unas manos expertas [gesto preciso del oficio], herramientas y material bien visibles, profundidad de campo muy reducida, luz rasante que resalta las texturas, ambiente artesanal y cuidado. Formato cuadrado.');
  I('saison','tous','Ambiente de temporada',
'[Producto o local] decorado para [temporada o fiesta: Navidad, verano, vuelta al cole, San Valentín…], elementos decorativos discretos y elegantes ([decoración]), luz [cálida / fría], colores de temporada, ambiente festivo pero de alta gama. Formato 4:5.');
  I('saison','tous','Fondo festivo para anuncio',
'Fondo gráfico festivo para [fiesta], [elementos: confeti, guirnaldas, copos de nieve, hojas] en los bordes, centro despejado y liso para escribir un anuncio, colores [paleta], acabado nítido y moderno. Sin texto. Formato cuadrado.');

  /* =================================================================== PROMPTS DE IMAGEN — POR SECTOR */
  I('produit','resto','Plato estrella en primer plano',
'Primer plano apetecible de [plato], emplatado en un plato [estilo de plato] sobre una mesa de madera, vapor ligero, salsa brillante, hierbas frescas, luz natural lateral, fondo de sala de restaurante desenfocado y cálido. Foto gastronómica profesional. Formato 4:5.');
  I('produit','resto','Mesa para compartir vista desde arriba',
'Vista cenital de una mesa llena de [platos y bebidas] para compartir entre amigos, manos sirviéndose, mantel de [material], luz suave, colores cálidos, ambiente generoso y de buen rollo. Foto gastronómica lifestyle. Formato cuadrado.');
  I('ambiance','resto','Terraza al atardecer',
'Terraza de [restaurante / cafetería] al atardecer, mesas montadas, guirnaldas de luces encendidas, copas que brillan, algunos clientes desenfocados riendo, luz dorada. Foto de ambiente realista. Formato 4:5.');
  I('produit','resto','Bollería en el mostrador',
'Mostrador de panadería lleno de [bollería / panes] dorados y crujientes, primer plano de la textura hojaldrada, luz de mañana, un poco de harina sobre la madera, ambiente artesanal. Formato 4:5.');
  I('produit','beaute','Frasco de tratamiento premium',
'[Producto de belleza] sobre una piedra [color] húmeda, gotas de agua en el frasco, hojas de [planta] alrededor, luz suave y difusa, paleta [colores], estética de spa de alta gama. Formato 4:5.');
  I('personnes','beaute','Resultado de peluquería',
'Retrato de espaldas y de tres cuartos de una clienta con [corte / color realizado], pelo brillante y en movimiento, luz suave de salón, fondo del salón desenfocado, acabado realista y natural. Formato 4:5.');
  I('lieu','beaute','Cabina de tratamiento relajante',
'Cabina de tratamiento vacía y lista: camilla de masaje con toallas dobladas, velas encendidas, plantas, luz tenue y cálida, materiales naturales, ambiente zen y limpio. Formato 4:5.');
  I('produit','artisan','Trabajo terminado',
'Foto de [trabajo: cocina, baño, terraza, mueble] terminado, líneas rectas, acabados impecables, luz natural, estancia ordenada con una puesta en escena sencilla, perspectiva gran angular. Foto de interiorismo realista. Formato horizontal 3:2.');
  I('personnes','artisan','Profesional en la obra',
'[Oficio] con ropa de trabajo limpia en una obra de [tipo de obra], concentrado en [gesto], herramientas profesionales, casco o equipo de seguridad, luz de día, foto de reportaje realista que pone en valor el oficio. Formato 4:5.');
  I('produit','commerce','La novedad en el escaparate',
'[Artículo] presentado en el escaparate de la tienda, expositor elegante, accesorios a juego, iluminación de escaparate cálida, ligeros reflejos en el cristal, ambiente de compras en el centro de la ciudad. Formato 4:5.');
  I('produit','commerce','Look en exterior',
'Persona que lleva [prenda / accesorio] en una calle [tipo de ciudad], pose natural caminando, luz de última hora de la tarde, fondo desenfocado, estilo de foto de moda lifestyle. Formato 4:5.');
  I('lieu','sante','Consulta que transmite calma',
'Consulta de [disciplina] luminosa y que transmite confianza, sillón cómodo, plantas, colores suaves [paleta], luz natural, sin personas, sensación de calma y limpieza. Formato horizontal 3:2.');
  I('ambiance','sante','Visual de bienestar',
'Escena relajante relacionada con el bienestar: [elemento: taza de infusión, cantos rodados, hoja, agua en calma] en primer plano, luz suave de mañana, paleta [colores], mucho espacio vacío para un texto. Formato cuadrado.');
  I('personnes','coach','Entreno a tope',
'Persona en pleno [ejercicio] en [gimnasio / exterior], sudor ligero, músculos en tensión, luz contrastada, encuadre dinámico en contrapicado, ambiente motivador y enérgico. Foto deportiva realista. Formato 4:5.');
  I('pub','coach','Visual de reto deportivo',
'Visual deportivo para un reto de [duración]: equipamiento de [deporte] en el suelo (botella, toalla, zapatillas), luz de mañana, fondo [color], gran espacio libre arriba para un titular. Sin texto. Formato 4:5.');
  I('lieu','immo','Salón luminoso',
'Salón de [tipo de inmueble] bañado de luz natural, ventanales grandes, decoración neutra y moderna, perspectiva gran angular desde la entrada, líneas verticales rectas, acabado de fotografía inmobiliaria profesional. Formato horizontal 3:2.');
  I('lieu','immo','Home staging virtual',
'La misma estancia [descripción de la estancia vacía] amueblada en estilo [nórdico / contemporáneo / bohemio]: sofá, alfombra, lámparas, plantas, luz natural, acabado realista y fiel a las paredes y ventanas originales. Formato horizontal 3:2.');
  I('pub','services','Visual de expertise',
'Imagen conceptual para [servicio]: escritorio minimalista con portátil, libreta y café, pantalla que muestra [tipo de tabla o gráfico], luz natural, paleta [colores de la marca], ambiente profesional y sereno. Formato 4:5.');
  I('personnes','services','Reunión con cliente',
'Dos personas en una reunión de trabajo alrededor de una mesa, conversación con sonrisas, documentos y ordenador, luz natural de oficina, fondo desenfocado, ambiente de confianza. Foto corporativa realista. Formato horizontal 3:2.');

  /* =================================================================== PROMPTS DE VÍDEO — TODOS LOS SECTORES */
  W('produit','tous','Rotación de producto 360°','5 s',
'[Producto] sobre una base que gira lentamente sobre sí misma, fondo liso [color], iluminación de estudio suave con reflejos que se deslizan por el material, cámara fija ligeramente en picado, movimiento fluido y constante. Formato 9:16.');
  W('produit','tous','Travelling de revelación','5 s',
'La cámara avanza despacio desde un primer plano desenfocado de [detalle del producto] hasta mostrar [producto] entero, enfoque progresivo, luz cálida lateral, partículas de polvo flotando en la luz. Formato 9:16.');
  W('produit','tous','Producto en acción','5 s',
'Unas manos [gesto: abren, vierten, aplican, montan] [producto] en primer plano, movimiento natural y preciso, luz natural, fondo desenfocado de [lugar], cámara fija a la altura de la mesa. Formato 9:16.');
  W('produit','tous','Ingredientes cayendo a cámara lenta','5 s',
'[Ingredientes o elementos] caen a cámara lenta alrededor de [producto] y rebotan ligeramente, fondo [color], iluminación contrastada, cámara fija, efecto de anuncio premium. Formato 9:16.');
  W('ambiance','tous','Ambiente del local','5 s',
'Travelling lateral lento por [lugar: tienda, sala, taller] vacío y perfectamente ordenado, luz suave de final del día, pequeñas luces que titilan, poca profundidad de campo, ambiente cálido y acogedor. Formato 9:16.');
  W('ambiance','tous','Apertura por la mañana','5 s',
'Una mano gira el cartel de «abierto» en la puerta de cristal de [negocio], la luz de la mañana entra en el local, cámara fija desde dentro, movimiento natural, ambiente de inicio de jornada. Formato 9:16.');
  W('personnes','tous','Bienvenida con una sonrisa','5 s',
'[Persona] detrás del mostrador levanta la vista, sonríe y saluda con la mano a cámara, luz natural suave, fondo de [lugar] desenfocado, movimiento natural y cercano. Formato 9:16.');
  W('personnes','tous','Gesto del oficio a cámara lenta','5 s',
'Primer plano a cámara lenta de unas manos que [gesto preciso del oficio], herramientas y material bien visibles, luz rasante que resalta las texturas, cámara fija, ambiente artesanal. Formato 9:16.');
  W('pub','tous','Antes → después con transición','5 s',
'Plano fijo de [lugar u objeto] en su estado inicial; después, un barrido de luz cruza la imagen de izquierda a derecha y revela el estado final, mismo encuadre, transición fluida, acabado realista. Formato 9:16.');
  W('pub','tous','Zoom final al logo','5 s',
'La cámara se aleja suavemente desde [elemento de la marca: rótulo, bolsa, delantal, packaging] para mostrar la escena alrededor, luz cálida, movimiento lento y seguro, final del plano estable para añadir un texto. Formato 9:16.');
  W('saison','tous','Ambiente de fiesta','5 s',
'[Lugar o producto] decorado para [fiesta], guirnaldas de luces que titilan, [nieve / confeti / pétalos] cayendo suavemente, cámara que avanza despacio, ambiente festivo y suave. Formato 9:16.');
  W('ambiance','tous','Time-lapse de un día','5 s',
'Time-lapse de [lugar] de la mañana a la noche, la luz pasa del dorado del día al azul del anochecer, siluetas desenfocadas de clientes que van y vienen, cámara fija. Formato 9:16.');

  /* =================================================================== PROMPTS DE VÍDEO — POR SECTOR */
  W('produit','resto','Plato humeante','5 s',
'Primer plano de [plato] recién emplatado, vapor que sube suavemente, una cuchara vierte un hilo de [salsa], luz cálida lateral, fondo de sala desenfocado, cámara fija ligeramente en picado. Formato 9:16.');
  W('produit','resto','Vaso que se llena','5 s',
'[Bebida] servida a cámara lenta en un vaso [tipo], burbujas y hielos girando, gotas de condensación, luz cálida de barra, cámara fija a la altura del vaso. Formato 9:16.');
  W('coulisses','resto','El chef en la cocina','5 s',
'Un chef saltea [ingredientes] en una sartén, llama viva, vapor, movimiento rápido y controlado, cocina profesional de fondo, luz contrastada, cámara fija de tres cuartos. Formato 9:16.');
  W('produit','resto','Pan recién salido del horno','5 s',
'Un panadero saca del horno una bandeja de [panes / bollería] dorados, vapor caliente, corteza que cruje, luz anaranjada del horno, cámara fija a la altura del horno. Formato 9:16.');
  W('pub','beaute','Revelación del corte','5 s',
'Una clienta se gira despacio hacia la cámara moviendo ligeramente su pelo [corte / color], melena brillante en movimiento, luz suave de salón, fondo desenfocado, sonrisa natural. Formato 9:16.');
  W('produit','beaute','Textura del tratamiento','5 s',
'Primer plano a cámara lenta: una gota de [crema / sérum] cae sobre una superficie de cristal y se extiende suavemente, textura untuosa, luz difusa, fondo [color pastel], cámara fija. Formato 9:16.');
  W('ambiance','beaute','Momento de relax','5 s',
'Una persona tumbada con los ojos cerrados durante un tratamiento facial, manos de la esteticista que masajean despacio, velas y luz tenue, cámara que avanza muy suavemente. Formato 9:16.');
  W('coulisses','artisan','Herramienta en acción','5 s',
'Primer plano de [herramienta: lijadora, llana, sierra, brocha] en acción sobre [material], polvo o virutas volando en la luz, manos con guantes, luz de día, cámara fija. Formato 9:16.');
  W('pub','artisan','Estancia terminada','5 s',
'Travelling lento por [estancia reformada] terminada, luz natural que entra por la ventana, acabados impecables, suelo limpio, movimiento de cámara fluido desde la entrada hasta el fondo de la estancia. Formato 9:16.');
  W('produit','commerce','Envoltorio de regalo','5 s',
'Unas manos envuelven [artículo] en papel [color] y atan un lazo, primer plano cenital, movimientos cuidadosos, luz suave, mostrador de madera, cámara fija. Formato 9:16.');
  W('produit','commerce','Desfile de novedades','5 s',
'Cámara que se desliza despacio a lo largo de un perchero o una estantería de [artículos] recién llegados, colores armoniosos, luz cálida de tienda, poca profundidad de campo. Formato 9:16.');
  W('ambiance','sante','Respiración tranquila','5 s',
'Una persona sentada con las piernas cruzadas junto a una ventana inspira y espira despacio, hombros que se relajan, luz suave de mañana, una planta que se mueve ligeramente, cámara fija. Formato 9:16.');
  W('pedagogie','sante','Demostración de ejercicio','5 s',
'[Profesional] muestra despacio [ejercicio o estiramiento] en una consulta luminosa, movimiento controlado y fluido, cámara fija en plano general, luz natural suave. Formato 9:16.');
  W('pub','coach','Esfuerzo explosivo','5 s',
'Cámara lenta de una persona que hace [ejercicio explosivo: salto, sprint, levantamiento], polvo o gotas de sudor en la luz, contraluz marcado, cámara fija en contrapicado. Formato 9:16.');
  W('personnes','coach','Coach que anima','5 s',
'Un coach aplaude y anima a [alumno] que termina su serie, sonrisas y choque de manos, gimnasio luminoso, cámara fija a la altura del hombro. Formato 9:16.');
  W('pub','immo','Visita fluida','5 s',
'Travelling fluido que avanza desde la entrada de [tipo de inmueble] hasta el salón luminoso, líneas verticales rectas, luz natural, decoración neutra, movimiento lento y estable como con gimbal. Formato 9:16.');
  W('pub','immo','Vista exterior con dron','5 s',
'Vista aérea que se eleva despacio sobre [casa / edificio] y revela [jardín, barrio, vistas], luz dorada de final del día, movimiento fluido. Formato 9:16.');
  W('pub','services','Pantalla que cobra vida','5 s',
'Primer plano de la pantalla de un ordenador donde [gráfico / dashboard] se va llenando poco a poco, reflejos suaves, escritorio minimalista, cámara que avanza despacio, ambiente profesional. Formato 9:16.');
  W('personnes','services','Apretón de manos','5 s',
'Dos personas se dan la mano sobre un escritorio sonriendo, documentos firmados en primer plano, luz natural de oficina, cámara fija de tres cuartos, movimiento natural. Formato 9:16.');

  window.MCD_SCRIPTS=L;
  window.MCD_SCRIPTS_META={
    lang:'es',
    types:{tous:'Todo',video:'🎬 Guiones de vídeo',post:'✍️ Textos',img:'🖼️ Prompts de imagen',vid:'🎥 Prompts de vídeo'},
    objectifs:{vente:'💰 Vender',engagement:'💬 Interacción',pedagogie:'🎓 Consejos',coulisses:'🎬 Detrás de cámaras',temoignage:'⭐ Reseñas',lancement:'🚀 Lanzamiento',evenement:'📅 Evento',fidelite:'🎁 Fidelización',recrutement:'🤝 Empleo',produit:'📦 Producto',ambiance:'✨ Ambiente',pub:'📣 Anuncios y promos',lieu:'🏠 Local',personnes:'🙂 Personas',saison:'🎄 Temporada y fiestas'},
    metiers:{tous:'Todos los sectores',resto:'Restaurante y cafetería',beaute:'Belleza y peluquería',artisan:'Oficios y reformas',commerce:'Tienda',sante:'Salud y bienestar',coach:'Coach y deporte',immo:'Inmobiliaria',services:'Servicios y B2B'},
    ui:{title:'Biblioteca de guiones',lead:'{n} guiones, textos y prompts de imagen/vídeo. Reemplaza los [corchetes] o deja que Marshall los adapte a tu marca.',search:'Buscar: antes/después, sorteo, producto…',all:'Todo',metier:'Sector',count1:'{n} elemento',countN:'{n} elementos',empty:'No hay resultados. Prueba con otra palabra o «Todo».',loading:'Cargando la biblioteca…',
      kVideo:'Guion de vídeo',kPost:'Texto de post',kImg:'Prompt de imagen',kVid:'Prompt de vídeo',adapted:'✨ Versión adaptada por Marshall',orig:'ver el original',
      insert:'⬇ Insertar en el texto',copy:'📋 Copiar',adapt:'✨ Adaptar con Marshall',again:'✨ Otra versión',busy:'✨ Marshall está escribiendo…',create:'🪄 Crear con Estudio IA',
      inserted:'Insertado en el texto ✓',insertedUndo:'Insertado en el texto · toca para deshacer',copied:'Copiado ✓',copyFail:'No se pudo copiar',noComposer:'Abre primero el Composer',
      sent:'Prompt enviado a Estudio IA ✓',adaptFail:'Marshall no pudo adaptar este texto: ',close:'Cerrar',
      credits:'Prompts inspirados en las estructuras de awesome-ad-video-prompts (CC BY 4.0) y awesome-nanobanana-pro.'}
  };
})();
