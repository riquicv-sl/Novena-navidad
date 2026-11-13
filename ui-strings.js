// ui-strings.js
// Textos de la interfaz (botones, etiquetas, avisos) en cada idioma.
// Los textos de la novena (oraciones, lecturas, reflexiones) están en
// novena-data.js (español) y novena-data-pt.js (portugués).
//
// Para corregir un texto de la interfaz, búscalo aquí por su clave.
// Las funciones (las que tienen "=>") arman frases con números o títulos.

const UI_STRINGS = {
  es: {
    htmlLang: "es",
    pageTitle: "Novena de Navidad - Tradicional y Bíblica",
    appTitle: "Novena de Navidad",
    subtitle: "Palabra de Dios y Oración",

    controlsRegion: "Controles de accesibilidad",
    lblLetra: "Letra",
    lblTema: "Tema",
    lblIlustracion: "Ilustración",
    lblIdioma: "Idioma",
    ariaFontDec: "Disminuir tamaño de letra",
    ariaFontNorm: "Tamaño de letra normal",
    ariaFontInc: "Aumentar tamaño de letra",
    ariaTheme: "Cambiar entre tema claro y oscuro",
    btnVitral: "Vitral",
    btnIcono: "Icono",
    ariaVitral: "Ilustraciones en estilo vitral",
    ariaIcono: "Ilustraciones en estilo icono ortodoxo",
    ariaLangEs: "Español",
    ariaLangPt: "Portugués (Brasil)",

    daysNav: "Selector de días",
    dayAria: (n) => `Día ${n}`,
    dayBadge: (n) => `Día ${n} de 9`,
    loadingImage: "Cargando ilustración...",
    imagePlaceholder: "Ilustración sacra",
    imageAlt: (titulo) => `Ilustración del día: ${titulo}`,

    stepTitles: ["Oración inicial", "Lectura bíblica", "Reflexión", "Gozos", "Peticiones", "Oración final"],

    tagInicio: "Para comenzar",
    reminderLabel: "Recordatorio:",
    reminderStart: "Los invitamos a entonar un villancico tradicional en familia para preparar el corazón antes de orar.",

    tagLectura: "Palabra de Dios",
    lecturaLabel: (ref) => `Lectura bíblica: ${ref}`,

    tagReflexion: "Meditación",
    titleReflexion: "Reflexión diaria",

    tagGozos: "Anhelo de salvación",
    instruccionGozos: "Toca cada estrofa y todos responden con el estribillo.",
    chorusLabel: "Estribillo (todos responden):",
    ariaGozo: (texto) => `Recitar estrofa: ${texto}`,

    tagPeticiones: "Plegaria común",
    titlePeticiones: "Oración de intercesión",
    silenceLabel: "Momento de silencio:",
    silenceText: "Hagamos en silencio nuestras intenciones particulares por la familia, los enfermos, las necesidades del hogar y del mundo.",

    tagFinal: "Para terminar",
    reminderEnd: "Para cerrar el día con alegría, cantemos juntos un villancico (por ejemplo, «Los peces en el río» o «Mi burrito sabanero»).",

    btnPrev: "Atrás",
    btnNext: "Siguiente",
    btnFinish: "Finalizar día",
    ariaPrev: "Ir al paso anterior",
    ariaNext: "Ir al paso siguiente",
    markComplete: "Marcar completado",
    dayCompleted: "Día completado",
    ariaMarkComplete: "Marcar este día como completado",

    progressLabel: "Progreso general de la novena:",
    progressText: (pct, n) => `${pct}% (${n} de 9 días completados)`,
    btnReset: "Reiniciar novena",
    ariaReset: "Reiniciar el progreso de la novena",
    confirmReset: "¿Seguro que quieres reiniciar la novena? Se desmarcarán todos los días completados.",
    alertNextDay: (d) => `¡Felicidades! Terminaste el Día ${d}. Pasamos al Día ${d + 1}.`,
    alertEnd: "¡Completaste el último día de la Novena de Navidad! Que el Niño Jesús llene de paz y bendiciones tu vida y tu hogar.",

    footerMain: "Novena de Navidad © 2026. Diseñada para unir familias en Cristo.",
    footerCreds: "Lecturas bíblicas en paráfrasis de lenguaje sencillo. Para el texto exacto, consulta la Biblia Latinoamericana o la Biblia de Jerusalén."
  },

  pt: {
    htmlLang: "pt-BR",
    pageTitle: "Novena de Natal - Tradicional e Bíblica",
    appTitle: "Novena de Natal",
    subtitle: "Palavra de Deus e Oração",

    controlsRegion: "Controles de acessibilidade",
    lblLetra: "Letra",
    lblTema: "Tema",
    lblIlustracion: "Ilustração",
    lblIdioma: "Idioma",
    ariaFontDec: "Diminuir o tamanho da letra",
    ariaFontNorm: "Tamanho de letra normal",
    ariaFontInc: "Aumentar o tamanho da letra",
    ariaTheme: "Alternar entre tema claro e escuro",
    btnVitral: "Vitral",
    btnIcono: "Ícone",
    ariaVitral: "Ilustrações em estilo vitral",
    ariaIcono: "Ilustrações em estilo ícone ortodoxo",
    ariaLangEs: "Espanhol",
    ariaLangPt: "Português (Brasil)",

    daysNav: "Seletor de dias",
    dayAria: (n) => `Dia ${n}`,
    dayBadge: (n) => `Dia ${n} de 9`,
    loadingImage: "Carregando ilustração...",
    imagePlaceholder: "Ilustração sacra",
    imageAlt: (titulo) => `Ilustração do dia: ${titulo}`,

    stepTitles: ["Oração inicial", "Leitura bíblica", "Reflexão", "Aclamações", "Preces", "Oração final"],

    tagInicio: "Para começar",
    reminderLabel: "Lembrete:",
    reminderStart: "Convidamos vocês a cantar uma canção de Natal tradicional em família para preparar o coração antes de rezar.",

    tagLectura: "Palavra de Deus",
    lecturaLabel: (ref) => `Leitura bíblica: ${ref}`,

    tagReflexion: "Meditação",
    titleReflexion: "Reflexão do dia",

    tagGozos: "Desejo de salvação",
    instruccionGozos: "Toque em cada estrofe e todos respondem com o refrão.",
    chorusLabel: "Refrão (todos respondem):",
    ariaGozo: (texto) => `Recitar estrofe: ${texto}`,

    tagPeticiones: "Oração comum",
    titlePeticiones: "Oração de intercessão",
    silenceLabel: "Momento de silêncio:",
    silenceText: "Façamos em silêncio as nossas intenções pessoais pela família, pelos doentes, pelas necessidades do lar e do mundo.",

    tagFinal: "Para terminar",
    reminderEnd: "Para encerrar o dia com alegria, cantemos juntos uma canção de Natal (por exemplo, «Noite Feliz» ou «Bate o Sino»).",

    btnPrev: "Voltar",
    btnNext: "Próximo",
    btnFinish: "Concluir dia",
    ariaPrev: "Ir para o passo anterior",
    ariaNext: "Ir para o próximo passo",
    markComplete: "Marcar como concluído",
    dayCompleted: "Dia concluído",
    ariaMarkComplete: "Marcar este dia como concluído",

    progressLabel: "Progresso geral da novena:",
    progressText: (pct, n) => `${pct}% (${n} de 9 dias concluídos)`,
    btnReset: "Reiniciar novena",
    ariaReset: "Reiniciar o progresso da novena",
    confirmReset: "Tem certeza de que deseja reiniciar a novena? Todos os dias concluídos serão desmarcados.",
    alertNextDay: (d) => `Parabéns! Você concluiu o Dia ${d}. Vamos para o Dia ${d + 1}.`,
    alertEnd: "Você concluiu o último dia da Novena de Natal! Que o Menino Jesus encha de paz e de bênçãos a sua vida e o seu lar.",

    footerMain: "Novena de Natal © 2026. Feita para unir famílias em Cristo.",
    footerCreds: "Leituras bíblicas em paráfrase de linguagem simples. Para o texto exato, consulte a Bíblia da CNBB, a Bíblia de Jerusalém ou a Bíblia Ave-Maria."
  }
};
