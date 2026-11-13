// app.js
// Lógica de control e interactividad para la Novena de Navidad (español / portugués)

document.addEventListener('DOMContentLoaded', () => {
  // --- DATOS POR IDIOMA ---
  // Los textos de la novena vienen de novena-data.js (es) y novena-data-pt.js (pt).
  // Las imágenes se toman siempre de novena-data.js, para no duplicar rutas.
  const DATA = { es: NOVENA_DATA, pt: NOVENA_DATA_PT };
  const FONT_SCALES = [0.9, 1.2, 1.4];
  const DEFAULT_FONT_SCALE = 1.2;

  function detectLanguage() {
    const nav = (navigator.language || 'es').toLowerCase();
    return nav.startsWith('pt') ? 'pt' : 'es';
  }

  // --- VARIABLES DE ESTADO ---
  let state = {
    currentDay: 1,                 // 1 a 9
    currentStep: 0,                // 0 a 5 (pasos dentro del día)
    completedDays: [],             // días completados, ej. [1, 2]
    theme: 'dark',                 // 'dark' o 'light'
    fontScale: DEFAULT_FONT_SCALE, // 0.9, 1.2 (normal) o 1.4
    imageStyle: 'vitral',          // 'vitral' o 'icono'
    language: detectLanguage()     // 'es' o 'pt'
  };

  // Atajos para el idioma activo
  const t = (key) => UI_STRINGS[state.language][key];
  const data = () => DATA[state.language];

  // --- ELEMENTOS DEL DOM ---
  const body = document.body;
  const daySelectorList = document.getElementById('day-selector-list');
  const heroDayBadge = document.getElementById('hero-day-badge');
  const heroDayTitle = document.getElementById('hero-day-title');
  const heroIllustration = document.getElementById('hero-illustration');
  const imageLoader = document.getElementById('image-loader');
  const cardContentArea = document.getElementById('card-content-area');
  const progressStepsIndicator = document.getElementById('progress-steps-indicator');
  const stepDots = progressStepsIndicator.querySelectorAll('.step-dot');

  // Botones de pasos (dentro de la tarjeta)
  const btnPrevStep = document.getElementById('btn-prev-step');
  const btnNextStep = document.getElementById('btn-next-step');
  const nextStepLabel = document.getElementById('next-step-label');
  const nextStepIcon = document.getElementById('next-step-icon');
  const btnMarkComplete = document.getElementById('btn-mark-complete');
  const markCompleteLabel = document.getElementById('mark-complete-label');

  // Controles globales
  const btnLangEs = document.getElementById('btn-lang-es');
  const btnLangPt = document.getElementById('btn-lang-pt');
  const btnFontDec = document.getElementById('btn-font-dec');
  const btnFontNorm = document.getElementById('btn-font-norm');
  const btnFontInc = document.getElementById('btn-font-inc');
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const btnStyleVitral = document.getElementById('btn-style-vitral');
  const btnStyleIcono = document.getElementById('btn-style-icono');
  const btnResetProgress = document.getElementById('btn-reset-progress');

  // Barra de progreso global
  const globalProgressFill = document.getElementById('global-progress-fill');
  const globalProgressPercentage = document.getElementById('global-progress-percentage');

  // Textos y contenedores específicos
  const titleOracionInicial = document.getElementById('title-oracion-inicial');
  const titleOracionFinal = document.getElementById('title-oracion-final');
  const titleGozos = document.getElementById('title-gozos');
  const textOracionInicial = document.getElementById('text-oracion-inicial');
  const textOracionFinal = document.getElementById('text-oracion-final');
  const textGozosEstribillo = document.getElementById('text-gozos-estribillo');
  const gozosVersesList = document.getElementById('gozos-verses-list');

  const textLecturaBiblica = document.getElementById('text-lectura-biblica');
  const textLecturaNota = document.getElementById('text-lectura-nota');
  const labelLecturaRef = document.getElementById('label-lectura-ref');
  const textReflexion = document.getElementById('text-reflexion');
  const textPeticion = document.getElementById('text-peticion');

  // --- CARGA Y PERSISTENCIA DE ESTADO (LOCALSTORAGE) ---
  function loadState() {
    try {
      const savedState = localStorage.getItem('novena_navidad_state');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        state = { ...state, ...parsed };
      }
    } catch (e) {
      console.warn('LocalStorage no disponible o bloqueado. Se usará estado temporal en memoria.', e);
    }
    // Corregir valores guardados por versiones anteriores
    if (!FONT_SCALES.includes(state.fontScale)) state.fontScale = DEFAULT_FONT_SCALE;
    if (!DATA[state.language]) state.language = 'es';

    applyTheme();
    applyFontScale();
    applyImageStyleButtonActive();
  }

  function saveState() {
    try {
      localStorage.setItem('novena_navidad_state', JSON.stringify({
        currentDay: state.currentDay,
        completedDays: state.completedDays,
        theme: state.theme,
        fontScale: state.fontScale,
        imageStyle: state.imageStyle,
        language: state.language
      }));
    } catch (e) {
      console.warn('No se pudo guardar el estado en LocalStorage:', e);
    }
  }

  // --- IDIOMA ---
  function applyLanguage() {
    document.documentElement.lang = t('htmlLang');
    document.title = t('pageTitle');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    // Títulos de los puntos de progreso (1 a 6)
    const stepTitles = t('stepTitles');
    stepDots.forEach((dot, i) => {
      dot.title = stepTitles[i];
      dot.setAttribute('aria-label', `${i + 1}. ${stepTitles[i]}`);
    });

    btnLangEs.classList.toggle('active', state.language === 'es');
    btnLangPt.classList.toggle('active', state.language === 'pt');
    btnLangEs.setAttribute('aria-pressed', state.language === 'es');
    btnLangPt.setAttribute('aria-pressed', state.language === 'pt');
  }

  function setLanguage(lang) {
    if (!DATA[lang] || lang === state.language) return;
    state.language = lang;
    saveState();
    renderAll({ scroll: false });
  }

  // --- CONTROLES DE ACCESIBILIDAD Y ASPECTO ---
  function applyTheme() {
    body.classList.toggle('theme-light', state.theme === 'light');
    body.classList.toggle('theme-dark', state.theme !== 'light');
  }

  function applyFontScale() {
    document.documentElement.style.setProperty('--font-scale', state.fontScale);
    btnFontDec.classList.toggle('active', state.fontScale === 0.9);
    btnFontNorm.classList.toggle('active', state.fontScale === 1.2);
    btnFontInc.classList.toggle('active', state.fontScale === 1.4);
  }

  function applyImageStyleButtonActive() {
    btnStyleVitral.classList.toggle('active', state.imageStyle === 'vitral');
    btnStyleIcono.classList.toggle('active', state.imageStyle !== 'vitral');
  }

  // --- RENDERS DINÁMICOS ---

  // Barra superior de días
  function renderDaySelector() {
    daySelectorList.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'day-item-btn';
      if (i === state.currentDay) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'step');
      }
      btn.textContent = i;
      btn.setAttribute('aria-label', t('dayAria')(i));

      if (state.completedDays.includes(i)) {
        const completedBadge = document.createElement('span');
        completedBadge.className = 'completed-badge';
        completedBadge.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.appendChild(completedBadge);
      }

      btn.addEventListener('click', () => selectDay(i));

      li.appendChild(btn);
      daySelectorList.appendChild(li);
    }
  }

  // Textos que no cambian entre días (oraciones y gozos)
  function renderStaticTexts() {
    const d = data();
    titleOracionInicial.textContent = d.oracionInicial.titulo;
    titleOracionFinal.textContent = d.oracionFinal.titulo;
    titleGozos.textContent = d.gozos.titulo;
    textOracionInicial.textContent = d.oracionInicial.texto;
    textOracionFinal.textContent = d.oracionFinal.texto;
    textGozosEstribillo.textContent = d.gozos.estribillo;

    gozosVersesList.innerHTML = '';
    d.gozos.estrofas.forEach((estrofa) => {
      const verseBtn = document.createElement('button');
      verseBtn.className = 'gozo-verse-btn';
      verseBtn.setAttribute('aria-label', t('ariaGozo')(estrofa.texto.replace(/\n/g, ' ')));

      const pText = document.createElement('p');
      pText.className = 'gozo-verse-text';
      pText.textContent = estrofa.texto;

      const spanRef = document.createElement('span');
      spanRef.className = 'gozo-verse-ref';
      spanRef.textContent = estrofa.referencia;

      verseBtn.appendChild(pText);
      verseBtn.appendChild(spanRef);
      verseBtn.addEventListener('click', highlightChorusCard);

      gozosVersesList.appendChild(verseBtn);
    });
  }

  // Resalta el estribillo para guiar la respuesta
  function highlightChorusCard() {
    const chorusCard = document.getElementById('gozos-chorus-card');
    chorusCard.classList.add('highlight-glow');
    setTimeout(() => chorusCard.classList.remove('highlight-glow'), 1500);
  }

  // Información del día activo
  function renderActiveDay() {
    const dayInfo = data().dias.find(d => d.dia === state.currentDay);
    const dayImages = NOVENA_DATA.dias.find(d => d.dia === state.currentDay);
    if (!dayInfo || !dayImages) return;

    heroDayBadge.textContent = t('dayBadge')(dayInfo.dia);
    heroDayTitle.textContent = dayInfo.titulo;

    // Lectura, aviso de paráfrasis, reflexión y petición
    labelLecturaRef.innerHTML = '';
    const refIcon = document.createElement('i');
    refIcon.className = 'fa-solid fa-book-bible';
    labelLecturaRef.append(refIcon, ' ', t('lecturaLabel')(dayInfo.lectura.referencia));

    textLecturaBiblica.textContent = dayInfo.lectura.texto;

    const nota = [];
    if (dayInfo.lectura.esParafrasis) nota.push(dayInfo.lectura.fuente);
    if (dayInfo.lectura.notaReferencia) nota.push(dayInfo.lectura.notaReferencia);
    textLecturaNota.textContent = nota.join('. ');
    textLecturaNota.hidden = nota.length === 0;

    textReflexion.textContent = dayInfo.reflexion;
    textPeticion.textContent = dayInfo.peticion;

    // Ilustración del día (solo se recarga si cambia la imagen)
    const imageSrc = state.imageStyle === 'vitral' ? dayImages.imagenVitral : dayImages.imagenOrtodoxo;
    heroIllustration.alt = t('imageAlt')(dayInfo.titulo);

    if (heroIllustration.getAttribute('src') !== imageSrc) {
      heroIllustration.classList.add('hidden');
      imageLoader.classList.remove('hidden');

      // Manejadores ANTES de cambiar src para evitar condiciones de carrera (caché)
      heroIllustration.onerror = () => {
        heroIllustration.onerror = null;
        imageLoader.classList.add('hidden');
        const label = encodeURIComponent(t('imagePlaceholder'));
        heroIllustration.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='180' viewBox='0 0 280 180'><rect width='100%' height='100%' fill='%23121526'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23d4af37' font-family='Cinzel' font-size='16'>${label}</text></svg>`;
        heroIllustration.classList.remove('hidden');
      };
      heroIllustration.onload = () => {
        imageLoader.classList.add('hidden');
        heroIllustration.classList.remove('hidden');
      };
      heroIllustration.src = imageSrc;
    }

    updateMarkCompleteBtn();
  }

  // Aspecto del botón "Marcar completado"
  function updateMarkCompleteBtn() {
    const isCompleted = state.completedDays.includes(state.currentDay);
    btnMarkComplete.classList.toggle('completed-state', isCompleted);
    markCompleteLabel.textContent = isCompleted ? t('dayCompleted') : t('markComplete');
    btnMarkComplete.querySelector('i').className = isCompleted ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle';
    btnMarkComplete.setAttribute('aria-pressed', isCompleted);
  }

  // Pasos dentro del día (oración inicial -> lectura -> reflexión...)
  function renderActiveStep({ scroll = true } = {}) {
    const panes = cardContentArea.querySelectorAll('.step-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    const activePane = document.getElementById(`pane-step-${state.currentStep}`);
    if (activePane) activePane.classList.add('active');

    stepDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === state.currentStep);
      dot.classList.toggle('completed', index < state.currentStep);
      if (index === state.currentStep) dot.setAttribute('aria-current', 'step');
      else dot.removeAttribute('aria-current');
    });

    btnPrevStep.style.visibility = state.currentStep === 0 ? 'hidden' : 'visible';

    const isLastStep = state.currentStep === 5;
    nextStepLabel.textContent = isLastStep ? t('btnFinish') : t('btnNext');
    nextStepIcon.className = isLastStep ? 'fa-solid fa-circle-check' : 'fa-solid fa-arrow-right';

    // Desplazamiento suave hasta el panel (no al cargar la página)
    if (scroll && activePane) {
      activePane.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Progreso general
  function renderGlobalProgress() {
    const totalDays = 9;
    const completedCount = state.completedDays.length;
    const percentage = Math.round((completedCount / totalDays) * 100);

    globalProgressFill.style.width = `${percentage}%`;
    globalProgressPercentage.textContent = t('progressText')(percentage, completedCount);
  }

  function renderAll({ scroll = true } = {}) {
    applyLanguage();
    renderStaticTexts();
    renderDaySelector();
    renderActiveDay();
    renderActiveStep({ scroll });
    renderGlobalProgress();
  }

  // --- NAVEGACIÓN Y EVENTOS ---

  function selectDay(dayNumber) {
    if (dayNumber < 1 || dayNumber > 9) return;
    state.currentDay = dayNumber;
    state.currentStep = 0;

    saveState();
    renderDaySelector();
    renderActiveDay();
    renderActiveStep();
  }

  function navigateStep(direction) {
    const nextStep = state.currentStep + direction;

    if (nextStep >= 0 && nextStep <= 5) {
      state.currentStep = nextStep;
      renderActiveStep();
    } else if (nextStep > 5) {
      // En el último paso: marcar el día como completado y pasar al siguiente
      markDayAsCompleted(state.currentDay);
      if (state.currentDay < 9) {
        alert(t('alertNextDay')(state.currentDay));
        selectDay(state.currentDay + 1);
      } else {
        alert(t('alertEnd'));
      }
    }
  }

  function toggleCurrentDayCompletion() {
    const index = state.completedDays.indexOf(state.currentDay);
    if (index > -1) state.completedDays.splice(index, 1);
    else state.completedDays.push(state.currentDay);

    saveState();
    renderDaySelector();
    renderGlobalProgress();
    updateMarkCompleteBtn();
  }

  function markDayAsCompleted(dayNumber) {
    if (!state.completedDays.includes(dayNumber)) {
      state.completedDays.push(dayNumber);
      saveState();
      renderDaySelector();
      renderGlobalProgress();
      updateMarkCompleteBtn();
    }
  }

  // --- ASIGNACIÓN DE EVENTOS A BOTONES ---

  btnPrevStep.addEventListener('click', () => navigateStep(-1));
  btnNextStep.addEventListener('click', () => navigateStep(1));
  btnMarkComplete.addEventListener('click', toggleCurrentDayCompletion);

  stepDots.forEach(dot => {
    dot.addEventListener('click', () => {
      state.currentStep = parseInt(dot.dataset.step, 10);
      renderActiveStep();
    });
  });

  // Idioma
  btnLangEs.addEventListener('click', () => setLanguage('es'));
  btnLangPt.addEventListener('click', () => setLanguage('pt'));

  // Tamaño de letra
  const setFontScale = (scale) => { state.fontScale = scale; saveState(); applyFontScale(); };
  btnFontDec.addEventListener('click', () => setFontScale(0.9));
  btnFontNorm.addEventListener('click', () => setFontScale(1.2));
  btnFontInc.addEventListener('click', () => setFontScale(1.4));

  // Tema
  btnThemeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    saveState();
    applyTheme();
  });

  // Estilo de ilustraciones
  btnStyleVitral.addEventListener('click', () => {
    state.imageStyle = 'vitral';
    saveState();
    applyImageStyleButtonActive();
    renderActiveDay();
  });

  btnStyleIcono.addEventListener('click', () => {
    state.imageStyle = 'icono';
    saveState();
    applyImageStyleButtonActive();
    renderActiveDay();
  });

  // Reiniciar progreso
  btnResetProgress.addEventListener('click', () => {
    if (confirm(t('confirmReset'))) {
      state.completedDays = [];
      state.currentDay = 1;
      state.currentStep = 0;
      saveState();
      renderAll();
    }
  });

  // --- INICIALIZACIÓN ---
  loadState();
  renderAll({ scroll: false });
});
