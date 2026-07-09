// app.js
// Lógica de control e interactividad para la Novena de Navidad Ecuménica

document.addEventListener('DOMContentLoaded', () => {
  // --- VARIABLES DE ESTADO ---
  let state = {
    currentDay: 1,          // 1 a 9
    currentStep: 0,         // 0 a 5 (Pasos dentro del día)
    completedDays: [],      // Array de días completados, ej. [1, 2]
    theme: 'dark',          // 'dark' o 'light'
    fontScale: 1.0,         // 1.0, 1.25, 1.5
    imageStyle: 'vitral'    // 'vitral' o 'icono'
  };

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
  const btnMarkComplete = document.getElementById('btn-mark-complete');
  const markCompleteLabel = document.getElementById('mark-complete-label');
  
  // Controles globales
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
  const textOracionInicial = document.getElementById('text-oracion-inicial');
  const textOracionFinal = document.getElementById('text-oracion-final');
  const textGozosEstribillo = document.getElementById('text-gozos-estribillo');
  const gozosVersesList = document.getElementById('gozos-verses-list');
  
  const textLecturaBiblica = document.getElementById('text-lectura-biblica');
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
        imageStyle: state.imageStyle
      }));
    } catch (e) {
      console.warn('No se pudo guardar el estado en LocalStorage:', e);
    }
  }


  // --- CONTROLES DE ACCESIBILIDAD Y ASPECTO ---
  function applyTheme() {
    if (state.theme === 'light') {
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
    } else {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
    }
  }

  function applyFontScale() {
    document.documentElement.style.setProperty('--font-scale', state.fontScale);
    
    // Actualizar botones de fuente activos
    btnFontDec.classList.remove('active');
    btnFontNorm.classList.remove('active');
    btnFontInc.classList.remove('active');
    
    if (state.fontScale === 0.9) btnFontDec.classList.add('active');
    else if (state.fontScale === 1.2) btnFontNorm.classList.add('active');
    else if (state.fontScale === 1.4) btnFontInc.classList.add('active');
  }

  function applyImageStyleButtonActive() {
    btnStyleVitral.classList.remove('active');
    btnStyleIcono.classList.remove('active');
    
    if (state.imageStyle === 'vitral') {
      btnStyleVitral.classList.add('active');
    } else {
      btnStyleIcono.classList.add('active');
    }
  }

  // --- RENDERS DINÁMICOS ---
  
  // Renderizar la barra superior de días
  function renderDaySelector() {
    daySelectorList.innerHTML = '';
    
    for (let i = 1; i <= 9; i++) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'day-item-btn';
      if (i === state.currentDay) btn.classList.add('active');
      btn.textContent = i;
      btn.setAttribute('aria-label', `Día ${i}`);
      
      // Si el día está completado, añadir distintivo
      if (state.completedDays.includes(i)) {
        const completedBadge = document.createElement('span');
        completedBadge.className = 'completed-badge';
        completedBadge.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.appendChild(completedBadge);
      }
      
      btn.addEventListener('click', () => {
        selectDay(i);
      });
      
      li.appendChild(btn);
      daySelectorList.appendChild(li);
    }
  }

  // Cargar textos estáticos base (que no cambian entre días)
  function renderStaticTexts() {
    textOracionInicial.textContent = NOVENA_DATA.oracionInicial.texto;
    textOracionFinal.textContent = NOVENA_DATA.oracionFinal.texto;
    textGozosEstribillo.textContent = NOVENA_DATA.gozos.estribillo;

    // Cargar los gozos
    gozosVersesList.innerHTML = '';
    NOVENA_DATA.gozos.estrofas.forEach((estrofa) => {
      const verseBtn = document.createElement('button');
      verseBtn.className = 'gozo-verse-btn';
      verseBtn.setAttribute('aria-label', `Recitar estrofa: ${estrofa.texto.replace(/\n/g, ' ')}`);
      
      const pText = document.createElement('p');
      pText.className = 'gozo-verse-text';
      pText.textContent = estrofa.texto;
      
      const spanRef = document.createElement('span');
      spanRef.className = 'gozo-verse-ref';
      spanRef.textContent = estrofa.referencia;
      
      verseBtn.appendChild(pText);
      verseBtn.appendChild(spanRef);
      
      // Interactividad al pulsar el gozo: resalta el estribillo
      verseBtn.addEventListener('click', () => {
        highlightChorusCard();
      });
      
      gozosVersesList.appendChild(verseBtn);
    });
  }

  // Resalta el estribillo para guiar la lectura
  function highlightChorusCard() {
    const chorusCard = document.getElementById('gozos-chorus-card');
    chorusCard.classList.add('highlight-glow');
    
    // Voz sintética para ayudar en la lectura si se desea, o simple animación
    setTimeout(() => {
      chorusCard.classList.remove('highlight-glow');
    }, 1500);
  }

  // Cargar la información correspondiente al día activo
  function renderActiveDay() {
    const dayInfo = NOVENA_DATA.dias.find(d => d.dia === state.currentDay);
    if (!dayInfo) return;

    // Título y distintivos
    heroDayBadge.textContent = `Día ${dayInfo.dia} de 9`;
    heroDayTitle.textContent = dayInfo.titulo;

    // Textos bíblicos y de meditación
    labelLecturaRef.innerHTML = `<i class="fa-solid fa-book-bible"></i> Lectura Bíblica: ${dayInfo.lectura.referencia}`;
    textLecturaBiblica.textContent = dayInfo.lectura.texto;
    textReflexion.textContent = dayInfo.reflexion;
    textPeticion.textContent = dayInfo.peticion;

    // Manejo de la ilustración del día (con transiciones de carga)
    heroIllustration.classList.add('hidden');
    imageLoader.classList.remove('hidden');

    // Registrar manejadores de eventos ANTES de establecer el atributo src para evitar condiciones de carrera (cache)
    heroIllustration.onerror = () => {
      heroIllustration.onerror = null; // Evitar llamadas infinitas
      imageLoader.classList.add('hidden');
      heroIllustration.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='180' viewBox='0 0 280 180'><rect width='100%' height='100%' fill='%23121526'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23d4af37' font-family='Cinzel' font-size='16'>Ilustración Sacra</text></svg>";
      heroIllustration.classList.remove('hidden');
    };

    heroIllustration.onload = () => {
      imageLoader.classList.add('hidden');
      heroIllustration.classList.remove('hidden');
    };

    const imageSrc = state.imageStyle === 'vitral' ? dayInfo.imagenVitral : dayInfo.imagenOrtodoxo;
    
    // Cambiar la imagen y esperar que cargue
    heroIllustration.src = imageSrc;

    // Actualizar el estado del botón de completado
    updateMarkCompleteBtn();
  }

  // Actualiza el aspecto del botón "Completar Día"
  function updateMarkCompleteBtn() {
    const isCompleted = state.completedDays.includes(state.currentDay);
    if (isCompleted) {
      btnMarkComplete.classList.add('completed-state');
      markCompleteLabel.textContent = "Día Completado";
      btnMarkComplete.querySelector('i').className = "fa-solid fa-circle-check";
    } else {
      btnMarkComplete.classList.remove('completed-state');
      markCompleteLabel.textContent = "Marcar Completado";
      btnMarkComplete.querySelector('i').className = "fa-solid fa-circle";
    }
  }

  // Renderizar los pasos dentro de la novena (oración inicial -> lectura -> reflexión...)
  function renderActiveStep() {
    // 1. Ocultar todos los paneles
    const panes = cardContentArea.querySelectorAll('.step-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    // 2. Mostrar panel actual
    const activePane = document.getElementById(`pane-step-${state.currentStep}`);
    if (activePane) activePane.classList.add('active');

    // 3. Actualizar los puntos del indicador superior
    stepDots.forEach((dot, index) => {
      dot.classList.remove('active', 'completed');
      if (index === state.currentStep) {
        dot.classList.add('active');
      } else if (index < state.currentStep) {
        dot.classList.add('completed');
      }
    });

    // 4. Configurar visibilidad de botones de navegación de pasos
    if (state.currentStep === 0) {
      btnPrevStep.style.visibility = 'hidden';
    } else {
      btnPrevStep.style.visibility = 'visible';
    }

    if (state.currentStep === 5) {
      btnNextStep.innerHTML = 'Finalizar Día <i class="fa-solid fa-circle-check"></i>';
      btnNextStep.classList.add('primary-btn');
    } else {
      btnNextStep.innerHTML = 'Siguiente <i class="fa-solid fa-arrow-right"></i>';
      btnNextStep.classList.remove('primary-btn');
    }

    // Scroll suave hasta el encabezado de la sección del panel para ayudar a personas mayores
    activePane.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Actualizar el progreso general
  function renderGlobalProgress() {
    const totalDays = 9;
    const completedCount = state.completedDays.length;
    const percentage = Math.round((completedCount / totalDays) * 100);

    globalProgressFill.style.width = `${percentage}%`;
    globalProgressPercentage.textContent = `${percentage}% (${completedCount} de ${totalDays} días completados)`;
  }

  // --- NAVEGACIÓN Y EVENTOS ---

  // Seleccionar un día específico de la novena
  function selectDay(dayNumber) {
    if (dayNumber < 1 || dayNumber > 9) return;
    state.currentDay = dayNumber;
    state.currentStep = 0; // Regresa al paso 1 (Oración inicial)
    
    saveState();
    renderDaySelector();
    renderActiveDay();
    renderActiveStep();
  }

  // Cambiar el paso activo de la lectura
  function navigateStep(direction) {
    const nextStep = state.currentStep + direction;
    
    if (nextStep >= 0 && nextStep <= 5) {
      state.currentStep = nextStep;
      renderActiveStep();
    } else if (nextStep > 5) {
      // Si pulsa siguiente en el paso final, marcamos el día como completado y pasamos al siguiente día
      markDayAsCompleted(state.currentDay);
      if (state.currentDay < 9) {
        alert(`¡Felicidades! Has terminado las lecturas del Día ${state.currentDay}. Avanzamos al Día ${state.currentDay + 1}.`);
        selectDay(state.currentDay + 1);
      } else {
        alert('¡Has completado el último día de la Novena de Navidad! Que el Niño Jesús llene de paz y bendiciones tu vida y tu hogar.');
      }
    }
  }

  // Marcar/desmarcar un día como completado
  function toggleCurrentDayCompletion() {
    const index = state.completedDays.indexOf(state.currentDay);
    if (index > -1) {
      state.completedDays.splice(index, 1);
    } else {
      state.completedDays.push(state.currentDay);
    }
    
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

  // Navegación de pasos
  btnPrevStep.addEventListener('click', () => navigateStep(-1));
  btnNextStep.addEventListener('click', () => navigateStep(1));
  btnMarkComplete.addEventListener('click', toggleCurrentDayCompletion);

  // Selector de pasos superior (clic directo en los números)
  stepDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const step = parseInt(dot.getAttribute('data-step'), 10);
      state.currentStep = step;
      renderActiveStep();
    });
  });

  // Tamaño de fuente
  btnFontDec.addEventListener('click', () => {
    state.fontScale = 0.9;
    saveState();
    applyFontScale();
  });
  
  btnFontNorm.addEventListener('click', () => {
    state.fontScale = 1.2; // 1.2 es el valor normal de lectura cómoda
    saveState();
    applyFontScale();
  });
  
  btnFontInc.addEventListener('click', () => {
    state.fontScale = 1.4; // Aumento adaptativo
    saveState();
    applyFontScale();
  });

  // Alternador de tema
  btnThemeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    saveState();
    applyTheme();
  });

  // Alternador de estilo de ilustraciones
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
    if (confirm('¿Estás seguro de que deseas restablecer todo tu progreso de la novena? Esto desmarcará los días que has completado.')) {
      state.completedDays = [];
      state.currentDay = 1;
      state.currentStep = 0;
      saveState();
      renderDaySelector();
      renderActiveDay();
      renderActiveStep();
      renderGlobalProgress();
    }
  });

  // --- INICIALIZACIÓN ---
  loadState();
  renderStaticTexts();
  renderDaySelector();
  renderActiveDay();
  renderActiveStep();
  renderGlobalProgress();
});
