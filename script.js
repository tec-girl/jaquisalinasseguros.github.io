/* ===== JAQUI SALINAS SEGUROS — lógica del sitio ===== */
(function () {
  'use strict';

  /* ========= CONFIGURACIÓN (editar aquí) ========= */
  var CONFIG = {
    whatsapp: '522221169215',   // ← número de Jaqui con código de país, solo dígitos (ej. '5212212345678')
    formUrl: 'https://forms.gle/cEDkt9DMWfAemaGq7',
    formEmbed: 'https://docs.google.com/forms/d/e/1FAIpQLSeg7cu5tlxc9YHIM5CEiijrmiksz0KKPdqqLbZpvMFiw_d-mw/viewform?embedded=true'     // ← enlace del Google Forms de cotización
  };
  var WA_TEXT = {
    general: 'Hola Jaqui, quiero cotizar un seguro. ¿Me ayudas?',
    auto: 'Hola Jaqui, quiero cotizar un seguro de AUTO. ¿Me ayudas?',
    retiro: 'Hola Jaqui, quiero información de un PLAN PERSONAL DE RETIRO. ¿Me ayudas?',
    medicos: 'Hola Jaqui, quiero cotizar un seguro de GASTOS MÉDICOS. ¿Me ayudas?',
    vida: 'Hola Jaqui, quiero cotizar un SEGURO DE VIDA. ¿Me ayudas?',
    becas: 'Hola Jaqui, quiero información de SEGUBECAS para la educación de mis hijos. ¿Me ayudas?'
  };

  function wireLinks() {
    document.querySelectorAll('[data-wa]').forEach(function (a) {
      if (CONFIG.whatsapp) {
        var msg = WA_TEXT[a.getAttribute('data-wa')] || WA_TEXT.general;
        a.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
        a.target = '_blank'; a.rel = 'noopener';
      } else {
        a.href = '#contacto';
      }
    });
    document.querySelectorAll('[data-form]').forEach(function (a) {
      if (CONFIG.formUrl) {
        a.href = CONFIG.formUrl;
        a.target = '_blank'; a.rel = 'noopener';
      } else {
        a.href = '#formulario';
      }
    });
  }

  /* ========= I18N ========= */
  var I18N = {
  "en": {
    "pageTitle": "Jaqui Salinas Insurance — Insurance advice",
    "nav.products": "Insurance",
    "nav.process": "Process",
    "nav.about": "About me",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "hero.kicker": "INSURANCE ADVICE",
    "hero.title": "Protect what you love most, with a plan made for you",
    "hero.sub": "Auto, retirement, medical, life and education insurance, with personal advice before, during and after you sign up.",
    "hero.ctaWa": "Get a quote on WhatsApp",
    "hero.ctaForm": "Fill out the form",
    "hero.trust": "Personal attention · No obligation · Same-day reply",
    "pr.kicker": "COVERAGE",
    "pr.title": "Insurance for every stage of your life",
    "pr.auto.t": "Auto Insurance",
    "pr.auto.d": "Protect your car and your wallet against accidents, theft and third-party damage, with roadside assistance included.",
    "pr.auto.f": "Full or third-party coverage · 24/7 assistance · Monthly payments",
    "pr.ppr.t": "Personal Retirement Plan",
    "pr.ppr.d": "Start building today the income you want to enjoy in retirement, with contributions at your own pace.",
    "pr.ppr.f": "Flexible contributions · Tax benefits* · Starting young pays off more",
    "pr.gmm.t": "Medical Expenses",
    "pr.gmm.d": "Access private hospitals and specialists without a health emergency turning into a debt.",
    "pr.gmm.f": "Wide hospital network · Hospitalization and surgery · For you and your family",
    "pr.vida.t": "Life Insurance",
    "pr.vida.d": "The peace of mind of knowing that, whatever happens, your family is financially protected.",
    "pr.vida.f": "Protection for your family · Affordable premiums · Options with savings",
    "pr.beca.t": "Education Plans (Segubecas)",
    "pr.beca.d": "A savings plan with insurance to guarantee your children's education, whatever happens.",
    "pr.beca.f": "Savings for their university · Insurance included · Start from birth",
    "pr.help.t": "Not sure what you need?",
    "pr.help.d": "Tell me where you are in life and I will recommend only what truly serves you. No pressure, no obligation.",
    "pr.quote": "Get a quote",
    "pr.fine": "*Tax benefits apply under current law and your personal situation. Every quote is informational and free of obligation.",
    "proc.kicker": "THIS EASY",
    "proc.title": "Getting a quote takes a few minutes",
    "proc.s1t": "Message me",
    "proc.s1d": "Send me a WhatsApp or fill out the form telling me what you want to protect.",
    "proc.s2t": "We compare options",
    "proc.s2d": "I present the alternatives that fit your stage and budget, in plain language.",
    "proc.s3t": "You are protected",
    "proc.s3d": "You sign up with step-by-step support, and I stay with you for the life of your policy.",
    "about.kicker": "ABOUT ME",
    "about.title": "Hi, I am Jaqueline Salinas",
    "about.d1": "I am an insurance advisor and my job is to make sure you understand exactly what you are buying: no fine print, no pressure.",
    "about.d2": "I help you choose the ideal protection for you and your family — auto, health, life, retirement and your children's education — and I am still by your side when you need to use it.",
    "faq.kicker": "FREQUENT QUESTIONS",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How much does insurance cost?",
    "faq.a1": "It depends on the type of insurance, the coverage and your profile. That is why quotes are personalized and free: in minutes you know your real price.",
    "faq.q2": "What is a Personal Retirement Plan (PPR)?",
    "faq.a2": "It is a long-term savings plan designed for your retirement, with possible tax benefits under current law. The younger you start, the less you contribute per month.",
    "faq.q3": "What does medical expenses insurance cover?",
    "faq.a3": "Depending on the policy: hospitalization, surgeries, medical fees and emergencies at private hospitals. Together we review the deductible, co-insurance and the hospital network in your city.",
    "faq.q4": "What is a segubeca?",
    "faq.a4": "It is insurance with scheduled savings for your children's education: if you were gone, the plan continues and their university is guaranteed.",
    "faq.q5": "How do I start?",
    "faq.a5": "Message me on WhatsApp or fill out the form below. I reply the same day and we prepare your quote with no obligation.",
    "ct.kicker": "CONTACT",
    "ct.title": "Let's talk about your protection",
    "ct.sub": "Choose how you prefer to start: a direct message or the form. I reply personally.",
    "ct.wa.t": "WhatsApp",
    "ct.wa.d": "The fastest way: tell me what you want to quote and I reply the same day.",
    "ct.wa.btn": "Send message",
    "ct.form.t": "Quote form",
    "ct.form.d": "Fill out the Google form with your details and what you want to protect; with that I prepare your quote.",
    "ct.form.btn": "Open the form",
    "ct.office": "Office", "ct.follow": "Follow me", "nav.gallery": "Gallery", "nav.videos": "Videos", "gal.kicker": "GALLERY", "gal.title": "Meet me", "gal.c1": "Personal advice", "gal.c2": "Close attention", "gal.c3": "Executive image", "vid.kicker": "VIDEOS", "vid.title": "Learn about insurance on video", "vid.tiktok": "Follow me on TikTok", "vid.more": "More videos", "vid.soon": "Coming soon", "bot.open": "Can I help?", "bot.title": "Jaqui's Assistant", "bot.online": "Online · Instant reply", "foot.line": "Personal advice on auto, retirement, medical, life and education insurance.",
    "foot.credit": "Website created by"
  },
  "fr": {
    "pageTitle": "Jaqui Salinas Assurances — Conseil en assurances",
    "nav.products": "Assurances",
    "nav.process": "Processus",
    "nav.about": "À propos",
    "nav.faq": "Questions",
    "nav.contact": "Contact",
    "hero.kicker": "CONSEIL EN ASSURANCES",
    "hero.title": "Protégez ce que vous aimez le plus, avec un plan sur mesure",
    "hero.sub": "Assurance auto, retraite, frais médicaux, vie et éducation, avec un accompagnement personnel avant, pendant et après la souscription.",
    "hero.ctaWa": "Devis par WhatsApp",
    "hero.ctaForm": "Remplir le formulaire",
    "hero.trust": "Attention personnalisée · Sans engagement · Réponse le jour même",
    "pr.kicker": "COUVERTURES",
    "pr.title": "Des assurances pour chaque étape de votre vie",
    "pr.auto.t": "Assurance Auto",
    "pr.auto.d": "Protégez votre voiture et votre portefeuille contre les accidents, le vol et les dommages à des tiers, assistance routière incluse.",
    "pr.auto.f": "Tous risques ou au tiers · Assistance 24/7 · Paiement mensuel",
    "pr.ppr.t": "Plan Personnel de Retraite",
    "pr.ppr.d": "Construisez dès aujourd'hui le revenu dont vous voulez profiter à la retraite, avec des contributions à votre rythme.",
    "pr.ppr.f": "Contributions flexibles · Avantages fiscaux* · Commencer jeune rapporte plus",
    "pr.gmm.t": "Frais Médicaux",
    "pr.gmm.d": "Accédez aux hôpitaux privés et aux spécialistes sans qu'une urgence de santé devienne une dette.",
    "pr.gmm.f": "Large réseau hospitalier · Hospitalisation et chirurgie · Pour vous et votre famille",
    "pr.vida.t": "Assurance Vie",
    "pr.vida.d": "La tranquillité de savoir que, quoi qu'il arrive, votre famille est protégée financièrement.",
    "pr.vida.f": "Protection pour votre famille · Primes accessibles · Options avec épargne",
    "pr.beca.t": "Segubecas (Éducation)",
    "pr.beca.d": "Un plan d'épargne avec assurance pour garantir l'éducation de vos enfants, quoi qu'il arrive.",
    "pr.beca.f": "Épargne pour leur université · Assurance incluse · Dès la naissance",
    "pr.help.t": "Vous ne savez pas ce qu'il vous faut ?",
    "pr.help.d": "Racontez-moi votre moment de vie et je ne vous recommanderai que ce qui vous sert vraiment. Sans pression, sans engagement.",
    "pr.quote": "Devis",
    "pr.fine": "*Les avantages fiscaux s'appliquent selon la loi en vigueur et votre situation personnelle. Tout devis est informatif et sans engagement.",
    "proc.kicker": "C'EST SI SIMPLE",
    "proc.title": "Un devis prend quelques minutes",
    "proc.s1t": "Écrivez-moi",
    "proc.s1d": "Envoyez-moi un WhatsApp ou remplissez le formulaire en me disant ce que vous voulez protéger.",
    "proc.s2t": "Nous comparons les options",
    "proc.s2d": "Je vous présente les alternatives adaptées à votre moment et à votre budget, en langage clair.",
    "proc.s3t": "Vous êtes protégé",
    "proc.s3d": "Vous souscrivez avec un accompagnement pas à pas, et je reste à vos côtés pendant toute la vie de votre police.",
    "about.kicker": "À PROPOS",
    "about.title": "Bonjour, je suis Jaqueline Salinas",
    "about.d1": "Je suis conseillère en assurances et mon travail est que vous compreniez exactement ce que vous souscrivez : sans petits caractères ni pressions.",
    "about.d2": "Je vous aide à choisir la protection idéale pour vous et votre famille — auto, santé, vie, retraite et l'éducation de vos enfants — et je reste à vos côtés quand vous en avez besoin.",
    "faq.kicker": "QUESTIONS FRÉQUENTES",
    "faq.title": "Questions fréquentes",
    "faq.q1": "Combien coûte une assurance ?",
    "faq.a1": "Cela dépend du type d'assurance, de la couverture et de votre profil. C'est pourquoi le devis est personnalisé et gratuit : en quelques minutes, vous connaissez votre prix réel.",
    "faq.q2": "Qu'est-ce qu'un Plan Personnel de Retraite (PPR) ?",
    "faq.a2": "C'est un plan d'épargne à long terme pensé pour votre retraite, avec d'éventuels avantages fiscaux selon la loi en vigueur. Plus vous commencez jeune, moins vous contribuez par mois.",
    "faq.q3": "Que couvre une assurance frais médicaux ?",
    "faq.a3": "Selon la police : hospitalisation, chirurgies, honoraires médicaux et urgences dans des hôpitaux privés. Nous examinons ensemble la franchise, la coassurance et le réseau hospitalier de votre ville.",
    "faq.q4": "Qu'est-ce qu'une segubeca ?",
    "faq.a4": "C'est une assurance avec épargne programmée pour l'éducation de vos enfants : si vous veniez à manquer, le plan continue et leur université est garantie.",
    "faq.q5": "Comment commencer ?",
    "faq.a5": "Écrivez-moi sur WhatsApp ou remplissez le formulaire ci-dessous. Je réponds le jour même et nous préparons votre devis sans engagement.",
    "ct.kicker": "CONTACT",
    "ct.title": "Parlons de votre protection",
    "ct.sub": "Choisissez comment vous préférez commencer : message direct ou formulaire. Je réponds personnellement.",
    "ct.wa.t": "WhatsApp",
    "ct.wa.d": "La façon la plus rapide : dites-moi ce que vous voulez assurer et je réponds le jour même.",
    "ct.wa.btn": "Envoyer un message",
    "ct.form.t": "Formulaire de devis",
    "ct.form.d": "Remplissez le formulaire Google avec vos coordonnées et ce que vous voulez protéger ; je prépare votre devis.",
    "ct.form.btn": "Ouvrir le formulaire",
    "ct.office": "Bureau", "ct.follow": "Suivez-moi", "nav.gallery": "Galerie", "nav.videos": "Vidéos", "gal.kicker": "GALERIE", "gal.title": "Faites ma connaissance", "gal.c1": "Conseil personnalisé", "gal.c2": "Attention proche", "gal.c3": "Image exécutive", "vid.kicker": "VIDÉOS", "vid.title": "Apprenez l'assurance en vidéo", "vid.tiktok": "Suivez-moi sur TikTok", "vid.more": "Plus de vidéos", "vid.soon": "Bientôt", "bot.open": "Je peux aider ?", "bot.title": "Assistant de Jaqui", "bot.online": "En ligne · Réponse immédiate", "foot.line": "Conseil personnalisé en assurance auto, retraite, frais médicaux, vie et éducation.",
    "foot.credit": "Site créé par"
  },
  "de": {
    "pageTitle": "Jaqui Salinas Versicherungen — Versicherungsberatung",
    "nav.products": "Versicherungen",
    "nav.process": "Ablauf",
    "nav.about": "Über mich",
    "nav.faq": "Fragen",
    "nav.contact": "Kontakt",
    "hero.kicker": "VERSICHERUNGSBERATUNG",
    "hero.title": "Schützen Sie, was Ihnen am wichtigsten ist — mit einem Plan nach Maß",
    "hero.sub": "Auto-, Ruhestands-, Krankenzusatz-, Lebens- und Ausbildungsversicherung, mit persönlicher Beratung vor, während und nach dem Abschluss.",
    "hero.ctaWa": "Angebot per WhatsApp",
    "hero.ctaForm": "Formular ausfüllen",
    "hero.trust": "Persönliche Betreuung · Unverbindlich · Antwort am selben Tag",
    "pr.kicker": "DECKUNGEN",
    "pr.title": "Versicherungen für jede Lebensphase",
    "pr.auto.t": "Kfz-Versicherung",
    "pr.auto.d": "Schützt Ihr Auto und Ihren Geldbeutel bei Unfällen, Diebstahl und Schäden an Dritten, inkl. Pannenhilfe.",
    "pr.auto.f": "Voll- oder Teilkasko / Haftpflicht · 24/7-Hilfe · Monatliche Zahlung",
    "pr.ppr.t": "Persönlicher Ruhestandsplan",
    "pr.ppr.d": "Bauen Sie ab heute das Einkommen auf, das Sie im Ruhestand genießen möchten — mit Beiträgen in Ihrem Tempo.",
    "pr.ppr.f": "Flexible Beiträge · Steuervorteile* · Früh starten lohnt sich mehr",
    "pr.gmm.t": "Krankenzusatzversicherung",
    "pr.gmm.d": "Zugang zu Privatkliniken und Spezialisten, ohne dass ein Gesundheitsnotfall zur Schuld wird.",
    "pr.gmm.f": "Großes Kliniknetz · Stationär und Chirurgie · Für Sie und Ihre Familie",
    "pr.vida.t": "Lebensversicherung",
    "pr.vida.d": "Die Ruhe zu wissen, dass Ihre Familie finanziell geschützt ist — was auch geschieht.",
    "pr.vida.f": "Schutz für Ihre Familie · Bezahlbare Beiträge · Optionen mit Sparanteil",
    "pr.beca.t": "Segubecas (Ausbildung)",
    "pr.beca.d": "Ein Sparplan mit Versicherung, der die Ausbildung Ihrer Kinder garantiert — was auch geschieht.",
    "pr.beca.f": "Sparen für ihr Studium · Versicherung inklusive · Ab der Geburt starten",
    "pr.help.t": "Unsicher, was Sie brauchen?",
    "pr.help.d": "Erzählen Sie mir von Ihrer Lebensphase und ich empfehle nur, was Ihnen wirklich nützt. Ohne Druck, unverbindlich.",
    "pr.quote": "Angebot",
    "pr.fine": "*Steuervorteile gelten nach aktueller Rechtslage und Ihrer persönlichen Situation. Jedes Angebot ist informativ und unverbindlich.",
    "proc.kicker": "SO EINFACH",
    "proc.title": "Ein Angebot dauert nur wenige Minuten",
    "proc.s1t": "Schreiben Sie mir",
    "proc.s1d": "Senden Sie mir ein WhatsApp oder füllen Sie das Formular aus und sagen Sie mir, was Sie schützen möchten.",
    "proc.s2t": "Wir vergleichen Optionen",
    "proc.s2d": "Ich zeige Ihnen die Alternativen, die zu Ihrer Phase und Ihrem Budget passen — in klarer Sprache.",
    "proc.s3t": "Sie sind geschützt",
    "proc.s3d": "Sie schließen mit Begleitung Schritt für Schritt ab — und ich bleibe während der gesamten Laufzeit an Ihrer Seite.",
    "about.kicker": "ÜBER MICH",
    "about.title": "Hallo, ich bin Jaqueline Salinas",
    "about.d1": "Ich bin Versicherungsberaterin und meine Aufgabe ist, dass Sie genau verstehen, was Sie abschließen: ohne Kleingedrucktes und ohne Druck.",
    "about.d2": "Ich helfe Ihnen, den idealen Schutz für Sie und Ihre Familie zu wählen — Auto, Gesundheit, Leben, Ruhestand und die Ausbildung Ihrer Kinder — und bleibe an Ihrer Seite, wenn Sie ihn brauchen.",
    "faq.kicker": "HÄUFIGE FRAGEN",
    "faq.title": "Häufige Fragen",
    "faq.q1": "Wie viel kostet eine Versicherung?",
    "faq.a1": "Das hängt von der Versicherungsart, der Deckung und Ihrem Profil ab. Deshalb ist das Angebot personalisiert und kostenlos: In wenigen Minuten kennen Sie Ihren echten Preis.",
    "faq.q2": "Was ist ein Persönlicher Ruhestandsplan (PPR)?",
    "faq.a2": "Ein langfristiger Sparplan für Ihren Ruhestand, mit möglichen Steuervorteilen nach geltendem Recht. Je jünger Sie starten, desto weniger zahlen Sie pro Monat.",
    "faq.q3": "Was deckt eine Krankenzusatzversicherung?",
    "faq.a3": "Je nach Police: Krankenhausaufenthalt, Operationen, Arzthonorare und Notfälle in Privatkliniken. Gemeinsam prüfen wir Selbstbehalt, Mitversicherung und das Kliniknetz Ihrer Stadt.",
    "faq.q4": "Was ist eine Segubeca?",
    "faq.a4": "Eine Versicherung mit programmiertem Sparen für die Ausbildung Ihrer Kinder: Sollten Sie fehlen, läuft der Plan weiter und ihr Studium ist garantiert.",
    "faq.q5": "Wie fange ich an?",
    "faq.a5": "Schreiben Sie mir per WhatsApp oder füllen Sie das Formular unten aus. Ich antworte am selben Tag und wir erstellen unverbindlich Ihr Angebot.",
    "ct.kicker": "KONTAKT",
    "ct.title": "Sprechen wir über Ihren Schutz",
    "ct.sub": "Wählen Sie, wie Sie beginnen möchten: Direktnachricht oder Formular. Ich antworte persönlich.",
    "ct.wa.t": "WhatsApp",
    "ct.wa.d": "Der schnellste Weg: Sagen Sie mir, was Sie versichern möchten, und ich antworte am selben Tag.",
    "ct.wa.btn": "Nachricht senden",
    "ct.form.t": "Angebotsformular",
    "ct.form.d": "Füllen Sie das Google-Formular mit Ihren Daten aus und was Sie schützen möchten; damit bereite ich Ihr Angebot vor.",
    "ct.form.btn": "Formular öffnen",
    "ct.office": "Büro", "ct.follow": "Folgen Sie mir", "nav.gallery": "Galerie", "nav.videos": "Videos", "gal.kicker": "GALERIE", "gal.title": "Lernen Sie mich kennen", "gal.c1": "Persönliche Beratung", "gal.c2": "Nahe Betreuung", "gal.c3": "Executive-Image", "vid.kicker": "VIDEOS", "vid.title": "Versicherung im Video lernen", "vid.tiktok": "Folgen Sie mir auf TikTok", "vid.more": "Mehr Videos", "vid.soon": "Demnächst", "bot.open": "Kann ich helfen?", "bot.title": "Jaquis Assistent", "bot.online": "Online · Sofortige Antwort", "foot.line": "Persönliche Beratung zu Auto, Ruhestand, Krankheit, Leben und Ausbildung.",
    "foot.credit": "Website erstellt von"
  },
  "pt": {
    "pageTitle": "Jaqui Salinas Seguros — Consultoria em seguros",
    "nav.products": "Seguros",
    "nav.process": "Processo",
    "nav.about": "Sobre mim",
    "nav.faq": "Perguntas",
    "nav.contact": "Contato",
    "hero.kicker": "CONSULTORIA EM SEGUROS",
    "hero.title": "Proteja o que você mais ama, com um plano sob medida",
    "hero.sub": "Seguros de auto, aposentadoria, despesas médicas, vida e educação, com consultoria pessoal antes, durante e depois de contratar.",
    "hero.ctaWa": "Cotar pelo WhatsApp",
    "hero.ctaForm": "Preencher o formulário",
    "hero.trust": "Atendimento pessoal · Sem compromisso · Resposta no mesmo dia",
    "pr.kicker": "COBERTURAS",
    "pr.title": "Seguros para cada fase da sua vida",
    "pr.auto.t": "Seguro de Auto",
    "pr.auto.d": "Proteja seu carro e seu bolso contra acidentes, roubo e danos a terceiros, com assistência veicular incluída.",
    "pr.auto.f": "Cobertura ampla ou limitada · Assistência 24/7 · Pagamento mensal",
    "pr.ppr.t": "Plano Pessoal de Aposentadoria",
    "pr.ppr.d": "Construa desde hoje a renda que você quer aproveitar na aposentadoria, com contribuições no seu ritmo.",
    "pr.ppr.f": "Contribuições flexíveis · Benefícios fiscais* · Começar jovem rende mais",
    "pr.gmm.t": "Despesas Médicas",
    "pr.gmm.d": "Acesse hospitais privados e especialistas sem que uma emergência de saúde vire uma dívida.",
    "pr.gmm.f": "Ampla rede hospitalar · Internação e cirurgia · Para você e sua família",
    "pr.vida.t": "Seguro de Vida",
    "pr.vida.d": "A tranquilidade de saber que, aconteça o que acontecer, sua família fica protegida financeiramente.",
    "pr.vida.f": "Proteção para sua família · Prêmios acessíveis · Opções com poupança",
    "pr.beca.t": "Segubecas",
    "pr.beca.d": "Um plano de poupança com seguro para garantir a educação dos seus filhos, aconteça o que acontecer.",
    "pr.beca.f": "Poupança para a universidade · Proteção incluída · Comece desde o nascimento",
    "pr.help.t": "Não sabe o que precisa?",
    "pr.help.d": "Conte-me seu momento de vida e eu recomendo só o que realmente serve para você. Sem pressão e sem compromisso.",
    "pr.quote": "Cotar",
    "pr.fine": "*Os benefícios fiscais se aplicam conforme a legislação vigente e sua situação pessoal. Toda cotação é informativa e sem compromisso.",
    "proc.kicker": "ASSIM, FÁCIL",
    "proc.title": "Cotar leva alguns minutos",
    "proc.s1t": "Fale comigo",
    "proc.s1d": "Mande um WhatsApp ou preencha o formulário me contando o que quer proteger.",
    "proc.s2t": "Comparamos opções",
    "proc.s2d": "Apresento as alternativas que combinam com seu momento e seu orçamento, em linguagem clara.",
    "proc.s3t": "Você fica protegido",
    "proc.s3d": "Você contrata com acompanhamento passo a passo e conta comigo durante toda a vida da sua apólice.",
    "about.kicker": "SOBRE MIM",
    "about.title": "Olá, sou Jaqueline Salinas",
    "about.d1": "Sou consultora de seguros e meu trabalho é que você entenda exatamente o que está contratando: sem letras miúdas nem pressões.",
    "about.d2": "Ajudo você a escolher a proteção ideal para você e sua família — auto, saúde, vida, aposentadoria e a educação dos seus filhos — e continuo ao seu lado quando precisar usar.",
    "faq.kicker": "PERGUNTAS FREQUENTES",
    "faq.title": "Perguntas frequentes",
    "faq.q1": "Quanto custa um seguro?",
    "faq.a1": "Depende do tipo de seguro, da cobertura e do seu perfil. Por isso a cotação é personalizada e sem custo: em minutos você sabe seu preço real.",
    "faq.q2": "O que é um Plano Pessoal de Aposentadoria (PPR)?",
    "faq.a2": "É um plano de poupança de longo prazo pensado para sua aposentadoria, com possíveis benefícios fiscais conforme a lei vigente. Quanto mais jovem você começa, menos contribui por mês.",
    "faq.q3": "O que cobre um seguro de despesas médicas?",
    "faq.a3": "Conforme a apólice: internação, cirurgias, honorários médicos e emergências em hospitais privados. Revisamos juntos franquia, coparticipação e a rede hospitalar da sua cidade.",
    "faq.q4": "O que é uma segubeca?",
    "faq.a4": "É um seguro com poupança programada para a educação dos seus filhos: se você faltar, o plano continua e a universidade deles fica garantida.",
    "faq.q5": "Como começo?",
    "faq.a5": "Fale comigo pelo WhatsApp ou preencha o formulário abaixo. Respondo no mesmo dia e cotamos sem compromisso.",
    "ct.kicker": "CONTATO",
    "ct.title": "Vamos falar da sua proteção",
    "ct.sub": "Escolha como prefere começar: mensagem direta ou formulário. Eu respondo pessoalmente.",
    "ct.wa.t": "WhatsApp",
    "ct.wa.d": "A forma mais rápida: conte-me o que quer cotar e eu respondo no mesmo dia.",
    "ct.wa.btn": "Enviar mensagem",
    "ct.form.t": "Formulário de cotação",
    "ct.form.d": "Preencha o formulário do Google com seus dados e o que quer proteger; com isso preparo sua cotação.",
    "ct.form.btn": "Abrir o formulário",
    "ct.office": "Escritório", "ct.follow": "Siga-me", "nav.gallery": "Galeria", "nav.videos": "Vídeos", "gal.kicker": "GALERIA", "gal.title": "Conheça-me", "gal.c1": "Consultoria pessoal", "gal.c2": "Atendimento próximo", "gal.c3": "Imagem executiva", "vid.kicker": "VÍDEOS", "vid.title": "Aprenda sobre seguros em vídeo", "vid.tiktok": "Siga-me no TikTok", "vid.more": "Mais vídeos", "vid.soon": "Em breve", "bot.open": "Posso ajudar?", "bot.title": "Assistente da Jaqui", "bot.online": "Online · Resposta imediata", "foot.line": "Consultoria pessoal em seguros de auto, aposentadoria, despesas médicas, vida e segubecas.",
    "foot.credit": "Site criado por"
  },
  "zh": {
    "pageTitle": "Jaqui Salinas 保险 — 保险咨询",
    "nav.products": "保险",
    "nav.process": "流程",
    "nav.about": "关于我",
    "nav.faq": "常见问题",
    "nav.contact": "联系",
    "hero.kicker": "保险咨询",
    "hero.title": "为您量身定制的计划，守护您最珍视的一切",
    "hero.sub": "汽车、退休、医疗、寿险与教育保险，在签约前、签约中与签约后都有专人咨询陪伴。",
    "hero.ctaWa": "通过 WhatsApp 报价",
    "hero.ctaForm": "填写表单",
    "hero.trust": "专人服务 · 无需承诺 · 当日回复",
    "pr.kicker": "保障范围",
    "pr.title": "适合人生每个阶段的保险",
    "pr.auto.t": "汽车保险",
    "pr.auto.d": "为您的汽车和钱包提供保障：事故、盗窃和第三方损失，并包含道路救援。",
    "pr.auto.f": "全险或第三方责任 · 24/7 救援 · 可按月付款",
    "pr.ppr.t": "个人退休计划",
    "pr.ppr.d": "从今天开始积累您退休后想享受的收入，缴款节奏由您决定。",
    "pr.ppr.f": "缴款灵活 · 税收优惠* · 越年轻开始收益越大",
    "pr.gmm.t": "医疗费用保险",
    "pr.gmm.d": "让您能使用私立医院和专科医生，不让健康紧急情况变成债务。",
    "pr.gmm.f": "广泛的医院网络 · 住院与手术 · 适合您和家人",
    "pr.vida.t": "人寿保险",
    "pr.vida.d": "安心知道：无论发生什么，您的家人在经济上都有保障。",
    "pr.vida.f": "为家人提供保障 · 保费亲民 · 带储蓄的选项",
    "pr.beca.t": "教育保险（Segubecas）",
    "pr.beca.d": "带保险的储蓄计划，无论发生什么，都能保障孩子的教育。",
    "pr.beca.f": "为大学储蓄 · 包含保障 · 从出生即可开始",
    "pr.help.t": "不知道自己需要什么？",
    "pr.help.d": "告诉我您的人生阶段，我只推荐真正适合您的。没有压力，没有承诺。",
    "pr.quote": "报价",
    "pr.fine": "*税收优惠依现行法律和您的个人情况而定。所有报价仅供参考，无需承诺。",
    "proc.kicker": "就是这么简单",
    "proc.title": "报价只需几分钟",
    "proc.s1t": "联系我",
    "proc.s1d": "通过 WhatsApp 或填写表单，告诉我想保护什么。",
    "proc.s2t": "我们比较选项",
    "proc.s2d": "我会用清楚的语言，向您介绍适合您阶段和预算的选项。",
    "proc.s3t": "您获得保障",
    "proc.s3d": "在一步步陪伴下签约，保单整个有效期内我都在您身边。",
    "about.kicker": "关于我",
    "about.title": "您好，我是 Jaqueline Salinas",
    "about.d1": "我是一名保险顾问，我的工作是让您确切了解自己购买的是什么：没有小字条款，没有压力。",
    "about.d2": "我陪您为您和家人选择理想的保障——汽车、健康、寿险、退休和孩子的教育——并在您需要使用时继续陪伴。",
    "faq.kicker": "常见问题",
    "faq.title": "常见问题",
    "faq.q1": "保险多少钱？",
    "faq.a1": "取决于保险类型、保障范围和您的个人情况。因此报价是个人化的且免费：几分钟即可知道您的真实价格。",
    "faq.q2": "什么是个人退休计划（PPR）？",
    "faq.a2": "这是为退休设计的长期储蓄计划，依现行法律可能享有税收优惠。开始得越年轻，每月缴款越少。",
    "faq.q3": "医疗费用保险涵盖什么？",
    "faq.a3": "依保单而定：私立医院的住院、手术、医生费用和急诊。我们一起查看免赔额、共保比例和您所在城市的医院网络。",
    "faq.q4": "什么是 segubeca？",
    "faq.a4": "这是为孩子教育设计的带储蓄保险：如果您不在了，计划仍会继续，他们的大学教育得到保障。",
    "faq.q5": "如何开始？",
    "faq.a5": "通过 WhatsApp 联系我或填写下方表单。我会在当日回复，并为您无承诺报价。",
    "ct.kicker": "联系",
    "ct.title": "聊聊您的保障",
    "ct.sub": "选择您喜欢的开始方式：直接留言或填写表单。我会亲自回复。",
    "ct.wa.t": "WhatsApp",
    "ct.wa.d": "最快的方式：告诉我想报价什么，我会在当日回复。",
    "ct.wa.btn": "发送消息",
    "ct.form.t": "报价表单",
    "ct.form.d": "填写 Google 表单，留下您的资料和想保护的内容；我会据此准备报价。",
    "ct.form.btn": "打开表单",
    "ct.office": "办公室", "ct.follow": "关注我", "nav.gallery": "画廊", "nav.videos": "视频", "gal.kicker": "画廊", "gal.title": "认识我", "gal.c1": "专人咨询", "gal.c2": "贴心服务", "gal.c3": "专业形象", "vid.kicker": "视频", "vid.title": "通过视频了解保险", "vid.tiktok": "在 TikTok 关注我", "vid.more": "更多视频", "vid.soon": "即将推出", "bot.open": "需要帮助吗？", "bot.title": "Jaqui 的助理", "bot.online": "在线 · 即时回复", "foot.line": "汽车、退休、医疗、寿险与教育保险的专人咨询。",
    "foot.credit": "网站由"
  }
};

  var originals = {};
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    originals[el.getAttribute('data-i18n')] = el.innerHTML;
  });
  var curLang = 'es';

  function applyLang(lang) {
    var dict = I18N[lang];
    if (lang !== 'es' && !dict) return;
    curLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (lang === 'es') { if (originals[k] != null) el.innerHTML = originals[k]; }
      else if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    try { localStorage.setItem('jaqui-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = null;
  try { saved = localStorage.getItem('jaqui-lang'); } catch (e) {}
  if (saved && saved !== 'es') applyLang(saved);

  /* ========= FAQ ========= */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.faq-a').style.maxHeight = '0px';
      });
      if (!open) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ========= REVEAL ========= */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('.reveal').forEach(function (el) {
    if (io) io.observe(el); else el.classList.add('in');
  });

  var fe = document.getElementById('formEmbed');
  if (fe && CONFIG.formEmbed) {
    var ifr = document.createElement('iframe');
    ifr.src = CONFIG.formEmbed;
    ifr.title = 'Formulario de cotización';
    ifr.setAttribute('loading', 'lazy');
    fe.appendChild(ifr);
  }

  wireLinks();
})();

/* ===== CURSOR DE CARRITO (fuera del IIFE principal: se agrega al final) ===== */

/* ===== CURSOR DE CARRITO ANIMADO ===== */
(function () {
  var car = document.getElementById('carCursor');
  if (!car) return;
  if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var mx = -100, my = -100, x = -100, y = -100, shown = false;
  document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    if (!shown) { x = mx; y = my; shown = true; car.style.opacity = '1'; }
  });
  document.addEventListener('mouseleave', function () { car.style.opacity = '0'; shown = false; });
  (function loop() {
    var dx = mx - x;
    x += dx * 0.2;
    y += (my - y) * 0.2;
    var tilt = Math.max(-14, Math.min(14, dx * 0.35));
    var flip = dx < -2 ? -1 : 1;
    car.style.transform = 'translate(' + (x - 27) + 'px,' + (y - 30) + 'px) scaleX(' + flip + ') rotate(' + (flip === 1 ? tilt : -tilt) + 'deg)';
    requestAnimationFrame(loop);
  })();
})();

/* ===== BOT INTEGRADO DE JAQUI ===== */
(function () {
  var BT = {
    es: { hi: '¡Hola! 👋 Soy el asistente virtual de Jaqui Salinas Seguros. ¿Qué te gustaría cotizar?', auto: '🚗 Seguro de Auto', retiro: '🌅 Plan de Retiro', medicos: '🏥 Gastos Médicos', vida: '💙 Seguro de Vida', becas: '🎓 Segubecas', talk: '💬 Hablar con Jaqui',
      r_auto: '¡Excelente elección! Un seguro de auto te protege ante accidentes, robo y daños a terceros. Jaqui te cotiza en minutos, sin compromiso.',
      r_retiro: '¡Gran decisión! Un Plan Personal de Retiro se construye con aportaciones a tu ritmo — y empezar joven hace una diferencia enorme.',
      r_medicos: 'Muy bien pensado. Con gastos médicos mayores accedes a hospitales privados sin que una emergencia se vuelva una deuda.',
      r_vida: 'Proteger a tu familia es el mejor regalo. Un seguro de vida les da respaldo económico pase lo que pase, con primas accesibles.',
      r_becas: '¡Qué bonito plan! Una segubeca ahorra para la universidad de tus hijos y, si llegaras a faltar, el plan continúa.',
      r_talk: 'Claro, te comunico directo con Jaqui por WhatsApp. Te responde personalmente el mismo día.',
      wa: 'Cotizar por WhatsApp →', more: 'Ver otros seguros', form: 'Prefiero el formulario', formMsg: 'Perfecto: el formulario está en la sección de Contacto de esta página. Toca «Abrir el formulario» y con tus datos Jaqui prepara tu cotización.' },
    en: { hi: 'Hi! 👋 I am the virtual assistant of Jaqui Salinas Insurance. What would you like a quote for?', auto: '🚗 Auto Insurance', retiro: '🌅 Retirement Plan', medicos: '🏥 Medical Expenses', vida: '💙 Life Insurance', becas: '🎓 Education Plans', talk: '💬 Talk to Jaqui',
      r_auto: 'Excellent choice! Auto insurance protects you against accidents, theft and third-party damage. Jaqui quotes you in minutes, no obligation.',
      r_retiro: 'Great decision! A Personal Retirement Plan is built with contributions at your pace — and starting young makes a huge difference.',
      r_medicos: 'Well thought out. Major medical insurance gives you access to private hospitals without an emergency becoming a debt.',
      r_vida: 'Protecting your family is the best gift. Life insurance gives them financial backing whatever happens, with affordable premiums.',
      r_becas: 'What a lovely plan! An education plan saves for your children\'s university and, if you were gone, the plan continues.',
      r_talk: 'Of course, I will connect you directly with Jaqui on WhatsApp. She replies personally the same day.',
      wa: 'Get a quote on WhatsApp →', more: 'See other insurance', form: 'I prefer the form', formMsg: 'Perfect: the form is in the Contact section of this page. Tap "Open the form" and with your details Jaqui will prepare your quote.' },
    fr: { hi: 'Bonjour ! 👋 Je suis l\'assistant virtuel de Jaqui Salinas Assurances. Que souhaitez-vous assurer ?', auto: '🚗 Assurance Auto', retiro: '🌅 Plan de Retraite', medicos: '🏥 Frais Médicaux', vida: '💙 Assurance Vie', becas: '🎓 Segubecas', talk: '💬 Parler à Jaqui',
      r_auto: 'Excellent choix ! L\'assurance auto vous protège contre les accidents, le vol et les dommages à des tiers. Jaqui vous fait un devis en quelques minutes, sans engagement.',
      r_retiro: 'Grande décision ! Un Plan Personnel de Retraite se construit avec des contributions à votre rythme — et commencer jeune change tout.',
      r_medicos: 'Bien pensé. Avec une assurance frais médicaux, vous accédez aux hôpitaux privés sans qu\'une urgence devienne une dette.',
      r_vida: 'Protéger votre famille est le plus beau cadeau. L\'assurance vie leur donne un soutien financier quoi qu\'il arrive, avec des primes accessibles.',
      r_becas: 'Quel beau projet ! Une segubeca épargne pour l\'université de vos enfants et, si vous veniez à manquer, le plan continue.',
      r_talk: 'Bien sûr, je vous mets en contact direct avec Jaqui sur WhatsApp. Elle répond personnellement le jour même.',
      wa: 'Devis par WhatsApp →', more: 'Voir d\'autres assurances', form: 'Je préfère le formulaire', formMsg: 'Parfait : le formulaire se trouve dans la section Contact de cette page. Touchez « Ouvrir le formulaire » et Jaqui préparera votre devis.' },
    de: { hi: 'Hallo! 👋 Ich bin der virtuelle Assistent von Jaqui Salinas Versicherungen. Was möchten Sie versichern?', auto: '🚗 Kfz-Versicherung', retiro: '🌅 Ruhestandsplan', medicos: '🏥 Krankenzusatz', vida: '💙 Lebensversicherung', becas: '🎓 Ausbildung', talk: '💬 Mit Jaqui sprechen',
      r_auto: 'Ausgezeichnete Wahl! Eine Kfz-Versicherung schützt Sie bei Unfällen, Diebstahl und Schäden an Dritten. Jaqui erstellt Ihr Angebot in wenigen Minuten, unverbindlich.',
      r_retiro: 'Großartige Entscheidung! Ein Persönlicher Ruhestandsplan wächst mit Beiträgen in Ihrem Tempo — und früh zu starten macht einen riesigen Unterschied.',
      r_medicos: 'Gut überlegt. Mit einer Krankenzusatzversicherung erhalten Sie Zugang zu Privatkliniken, ohne dass ein Notfall zur Schuld wird.',
      r_vida: 'Ihre Familie zu schützen ist das beste Geschenk. Eine Lebensversicherung gibt ihr finanziellen Rückhalt — was auch geschieht, mit bezahlbaren Beiträgen.',
      r_becas: 'Was für ein schöner Plan! Eine Segubeca spart für das Studium Ihrer Kinder und läuft weiter, sollten Sie fehlen.',
      r_talk: 'Natürlich, ich verbinde Sie direkt per WhatsApp mit Jaqui. Sie antwortet noch am selben Tag persönlich.',
      wa: 'Angebot per WhatsApp →', more: 'Andere Versicherungen', form: 'Ich bevorzuge das Formular', formMsg: 'Perfekt: Das Formular finden Sie im Kontaktbereich dieser Seite. Tippen Sie auf „Formular öffnen“ und Jaqui bereitet Ihr Angebot vor.' },
    pt: { hi: 'Olá! 👋 Sou o assistente virtual da Jaqui Salinas Seguros. O que você gostaria de cotar?', auto: '🚗 Seguro de Auto', retiro: '🌅 Plano de Aposentadoria', medicos: '🏥 Despesas Médicas', vida: '💙 Seguro de Vida', becas: '🎓 Segubecas', talk: '💬 Falar com a Jaqui',
      r_auto: 'Excelente escolha! Um seguro de auto protege você contra acidentes, roubo e danos a terceiros. A Jaqui cota em minutos, sem compromisso.',
      r_retiro: 'Ótima decisão! Um Plano Pessoal de Aposentadoria se constrói com contribuições no seu ritmo — e começar jovem faz uma diferença enorme.',
      r_medicos: 'Muito bem pensado. Com despesas médicas maiores você acessa hospitais privados sem que uma emergência vire dívida.',
      r_vida: 'Proteger sua família é o melhor presente. Um seguro de vida dá respaldo financeiro aconteça o que acontecer, com prêmios acessíveis.',
      r_becas: 'Que plano bonito! Uma segubeca poupa para a universidade dos seus filhos e, se você faltar, o plano continua.',
      r_talk: 'Claro, conecto você direto com a Jaqui pelo WhatsApp. Ela responde pessoalmente no mesmo dia.',
      wa: 'Cotar pelo WhatsApp →', more: 'Ver outros seguros', form: 'Prefiro o formulário', formMsg: 'Perfeito: o formulário está na seção de Contato desta página. Toque em «Abrir o formulário» e com seus dados a Jaqui prepara sua cotação.' },
    zh: { hi: '您好！👋 我是 Jaqui Salinas 保险的虚拟助理。您想咨询哪种保险？', auto: '🚗 汽车保险', retiro: '🌅 退休计划', medicos: '🏥 医疗费用', vida: '💙 人寿保险', becas: '🎓 教育保险', talk: '💬 直接联系 Jaqui',
      r_auto: '非常好的选择！汽车保险为您提供事故、盗窃和第三方损失保障。Jaqui 可在几分钟内为您报价，无需承诺。',
      r_retiro: '明智的决定！个人退休计划按您的节奏缴款——越早开始，差别越大。',
      r_medicos: '考虑得很周到。大额医疗费用保险让您能使用私立医院，不让紧急情况变成债务。',
      r_vida: '守护家人是最好的礼物。人寿保险无论发生什么都为他们提供经济支持，保费亲民。',
      r_becas: '多么美好的计划！教育保险为孩子的大学储蓄，即使您不在了，计划也会继续。',
      r_talk: '好的，我直接通过 WhatsApp 为您联系 Jaqui。她会在当日亲自回复。',
      wa: '通过 WhatsApp 报价 →', more: '查看其他保险', form: '我更喜欢填表单', formMsg: '好的：表单在本页的联系部分。点击“打开表单”，Jaqui 会根据您的资料准备报价。' }
  };

  var btn = document.getElementById('botBtn');
  var panel = document.getElementById('botPanel');
  var body = document.getElementById('botBody');
  var chipsBox = document.getElementById('botChips');
  var closeBtn = document.getElementById('botClose');
  if (!btn || !panel) return;

  var lang = 'es';
  try { lang = localStorage.getItem('jaqui-lang') || 'es'; } catch (e) {}
  if (!BT[lang]) lang = 'es';
  var started = false;

  function T() { return BT[lang] || BT.es; }
  function waHref(key) {
    var a = document.querySelector('[data-wa="' + key + '"]');
    return a ? a.href : '#contacto';
  }
  function addMsg(text, who) {
    var d = document.createElement('div');
    d.className = 'bot-msg ' + who;
    d.textContent = text;
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
    return d;
  }
  function setChips(list) {
    chipsBox.innerHTML = '';
    list.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'bot-chip';
      b.textContent = c.label;
      b.addEventListener('click', function () { c.fn(); });
      chipsBox.appendChild(b);
    });
  }
  function mainChips() {
    var t = T();
    setChips([
      { label: t.auto, fn: function () { product('auto'); } },
      { label: t.retiro, fn: function () { product('retiro'); } },
      { label: t.medicos, fn: function () { product('medicos'); } },
      { label: t.vida, fn: function () { product('vida'); } },
      { label: t.becas, fn: function () { product('becas'); } },
      { label: t.talk, fn: function () { product('general'); } }
    ]);
  }
  function product(key) {
    var t = T();
    var names = { auto: t.auto, retiro: t.retiro, medicos: t.medicos, vida: t.vida, becas: t.becas, general: t.talk };
    addMsg(names[key], 'user');
    chipsBox.innerHTML = '';
    setTimeout(function () {
      var reply = key === 'general' ? t.r_talk : t['r_' + key];
      var d = addMsg(reply, 'bot');
      var a = document.createElement('a');
      a.className = 'bot-wa';
      a.href = waHref(key);
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = t.wa;
      d.appendChild(document.createElement('br'));
      d.appendChild(a);
      body.scrollTop = body.scrollHeight;
      setChips([
        { label: t.more, fn: function () { addMsg(t.hi, 'bot'); mainChips(); } },
        { label: t.form, fn: function () { addMsg(t.formMsg, 'bot'); document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' }); } }
      ]);
    }, 450);
  }
  function start() {
    if (started) return;
    started = true;
    addMsg(T().hi, 'bot');
    mainChips();
  }

  btn.addEventListener('click', function () {
    var open = !panel.hidden;
    panel.hidden = open;
    if (!open) start();
  });
  closeBtn.addEventListener('click', function () { panel.hidden = true; });

  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-lang');
      if (BT[l]) {
        lang = l;
        if (started) { body.innerHTML = ''; started = false; start(); }
      }
    });
  });
})();
