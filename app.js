/**
 * FITZONE — Athletic Gym & Fitness Platform
 * High-performance Vanilla JavaScript Engine
 */

// Muscle Data for the Interactive Modal
const MUSCLE_DETAILS = {
  pecho: {
    title: "ENTRENAMIENTO DE PECHO (PECTORAL)",
    category: "EMPUJE / CADENA ANTERIOR",
    description: "El pecho responde óptimamente a una mezcla de tensión mecánica alta en ángulos variados y estiramiento bajo carga con aducción horizontal del húmero.",
    exercises: [
      {
        name: "Press de Banca Plano con Barra",
        setsReps: "4 series × 6 - 8 reps (RPE 8)",
        focus: "Constructor rey de masa general y fuerza máxima.",
        tip: "Retrae y deprime escápulas. Mantén los codos a unos 45° del torso para proteger los manguitos rotadores."
      },
      {
        name: "Press Inclinado con Mancuernas (30°)",
        setsReps: "3 series × 8 - 10 reps",
        focus: "Énfasis prioritario en el haz clavicular (pecho superior).",
        tip: "Baja con control en 3 segundos sintiendo el estiramiento en la porción alta del pectoral."
      },
      {
        name: "Cruces en Polea Baja a Alta",
        setsReps: "3 series × 12 - 15 reps",
        focus: "Pico de contracción continua sin perder tensión en el acortamiento.",
        tip: "Cruza levemente las manos al final del movimiento y aprieta el pecho durante 1 segundo."
      },
      {
        name: "Fondos en Paralelas con Inclinación",
        setsReps: "3 series × 10 - 12 reps (o al fallo)",
        focus: "Fibras costales inferiores y potente estímulo en el tríceps.",
        tip: "Inclina el torso 30° hacia adelante y ensancha los codos moderadamente."
      }
    ]
  },
  espalda: {
    title: "ENTRENAMIENTO DE ESPALDA (DORSAL Y TRAPECIO)",
    category: "TRACCIÓN / CADENA POSTERIOR",
    description: "Una espalda ancha y densa requiere alternar jalones verticales para amplitud y remos horizontales pesados para grosor muscular.",
    exercises: [
      {
        name: "Dominadas Neutras con Lastre",
        setsReps: "4 series × 6 - 8 reps",
        focus: "Amplitud dorsal y fuerza relativa peso corporal.",
        tip: "Inicia el tirón deprimiendo las escápulas y lleva el pecho hacia la barra, no la barbilla."
      },
      {
        name: "Remo con Barra 45° (Agarre Prono)",
        setsReps: "4 series × 8 - 10 reps",
        focus: "Densidad de romboides, trapecio medio y dorsal ancho.",
        tip: "Mantén la columna neutra y tira guiando el movimiento con los codos hacia la cadera."
      },
      {
        name: "Remo Unilateral en Polea o Mancuerna",
        setsReps: "3 series × 10 - 12 reps / lado",
        focus: "Aislamiento biomecánico sin sobrecargar la zona lumbar.",
        tip: "Permite un estiramiento controlado del dorsal al final de la fase excéntrica."
      },
      {
        name: "Pullover en Polea Alta con Cuerda",
        setsReps: "3 series × 15 reps (Bombeo final)",
        focus: "Aislamiento puro del dorsal ancho sin intervención de bíceps.",
        tip: "Brazos semirrígidos con codos ligeramente doblados; concéntrate en bajar con los codos."
      }
    ]
  },
  piernas: {
    title: "ENTRENAMIENTO DE PIERNAS (TREN INFERIOR)",
    category: "FUERZA BASE & POTENCIA TOTAL",
    description: "El entrenamiento de piernas genera la mayor demanda metabólica y hormonal. Combina patrones de rodilla dominante y cadera dominante.",
    exercises: [
      {
        name: "Sentadilla Trasera con Barra Olímpica",
        setsReps: "4 series × 6 - 8 reps",
        focus: "Cuádriceps, glúteo mayor y estabilidad espinal del core.",
        tip: "Rompe el paralelo con el fémur. Empuja el suelo repartiendo el peso en el trípode del pie."
      },
      {
        name: "Peso Muerto Rumano con Barra",
        setsReps: "4 series × 8 - 10 reps",
        focus: "Cadena posterior: isquiotibiales y glúteos en rango estirado.",
        tip: "Bisagra de cadera pura: lleva los glúteos hacia la pared trasera sin doblar la zona lumbar."
      },
      {
        name: "Sentadilla Búlgara con Mancuernas",
        setsReps: "3 series × 10 reps / pierna",
        focus: "Corrección de desbalances unilaterales y congestión de glúteo.",
        tip: "Paso medio para enfoque equilibrado o paso largo con torso inclinado para mayor glúteo."
      },
      {
        name: "Extensiones de Cuádriceps (Drop-Set)",
        setsReps: "3 series × 12 - 15 reps + fallo",
        focus: "Aislamiento del recto femoral en posición acortada.",
        tip: "Pausa de 1 segundo arriba con contracción máxima antes de descender suavemente."
      }
    ]
  },
  hombros: {
    title: "ENTRENAMIENTO DE HOMBROS (DELTOIDES)",
    category: "EMPUJE VERTICAL & AISLAMIENTO 3D",
    description: "Para conseguir el deseado 'efecto 3D', prioriza la cabeza lateral y posterior, ya que el deltoide frontal ya recibe estímulo en los presses de pecho.",
    exercises: [
      {
        name: "Press Militar de Pie con Barra (OHP)",
        setsReps: "4 series × 6 - 8 reps",
        focus: "Fuerza estructural del hombro anterior y estabilidad total.",
        tip: "Aprieta glúteos y abdomen durante todo el empuje vertical sobre la cabeza."
      },
      {
        name: "Elevaciones Laterales en Polea (Altura Cadera)",
        setsReps: "4 series × 12 - 15 reps",
        focus: "Deltoide lateral con curva de resistencia perfecta.",
        tip: "Lleva el cable hacia adelante en el plano escapular (30°), no completamente lateral."
      },
      {
        name: "Face Pulls con Cuerda en Polea Alta",
        setsReps: "4 series × 15 reps",
        focus: "Salud del manguito rotador, deltoide posterior y trapecio.",
        tip: "Separa la cuerda al final y rota externamente llevando los nudillos hacia atrás."
      },
      {
        name: "Pájaros con Mancuerna en Banco Inclinado",
        setsReps: "3 series × 12 - 15 reps",
        focus: "Aislamiento estricto de la cabeza posterior sin inercia.",
        tip: "Meñiques ligeramente por encima de los pulgares al levantar los brazos."
      }
    ]
  },
  brazos: {
    title: "ENTRENAMIENTO DE BRAZOS (BÍCEPS & TRÍCEPS)",
    category: "SUPER-SERIES & BOMBEOS DE ALTA TENSIÓN",
    description: "Los tríceps representan más del 60% del volumen del brazo. Ataca todas sus cabezas alternando flexiones de codo con extensiones en ángulos distintos.",
    exercises: [
      {
        name: "Press Francés con Barra Z en Banco Plano",
        setsReps: "4 series × 8 - 10 reps",
        focus: "Sobrecarga pesada para la cabeza larga y medial del tríceps.",
        tip: "Baja la barra ligeramente por detrás de la coronilla para mantener tensión continua."
      },
      {
        name: "Curl con Barra Recta Olímpica",
        setsReps: "4 series × 8 - 10 reps",
        focus: "Constructor clásico del pico y masa general del bíceps.",
        tip: "Mantén los codos pegados a los costados y evita balancear la espalda baja."
      },
      {
        name: "Extensiones Katana en Polea Unilateral",
        setsReps: "3 series × 12 - 15 reps",
        focus: "Máximo estiramiento de la cabeza larga del tríceps sobre la cabeza.",
        tip: "Movimiento controlado de codo sin desalinear el hombro."
      },
      {
        name: "Curl Martillo con Mancuernas en Banco Scott",
        setsReps: "3 series × 12 reps",
        focus: "Braquial anterior y braquiorradial (grosor visual del brazo).",
        tip: "Agarre neutro firme apretando las mancuernas para reclutar fibras del antebrazo."
      }
    ]
  }
};

// Progress Chart Data Store
const CHART_DATA = {
  labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"],
  metrics: {
    squat: {
      name: "Sentadilla (1RM)",
      unit: "kg",
      color: "#00ff66",
      values: [110, 115, 117.5, 122.5, 127.5, 130, 135, 140]
    },
    bench: {
      name: "Press de Banca (1RM)",
      unit: "kg",
      color: "#38bdf8",
      values: [80, 82.5, 85, 87.5, 90, 92.5, 95, 100]
    },
    deadlift: {
      name: "Peso Muerto (1RM)",
      unit: "kg",
      color: "#f59e0b",
      values: [135, 140, 145, 150, 157.5, 165, 172.5, 180]
    },
    bodyweight: {
      name: "Peso Corporal",
      unit: "kg",
      color: "#ec4899",
      values: [72.0, 72.3, 72.6, 73.0, 73.4, 73.8, 74.0, 74.2]
    }
  }
};

let currentMetricKey = "squat";

// Application Master Controller
const fitzoneApp = {
  init() {
    this.setupNavbar();
    this.setupAnimatedCounters();
    this.setupMuscleModal();
    this.setupRoutineTabs();
    this.setupProgressChart();
    this.calculateBMI();
    this.calculateMacros();
    this.updateCopyrightYear();
  },

  // 1. Navbar Sticky & Mobile Drawer
  setupNavbar() {
    const header = document.getElementById("mainHeader");
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll state
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
      this.highlightActiveNavLink();
    });

    // Mobile toggle
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = mobileBtn.querySelector("i");
        if (navMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });

      // Close mobile on link click
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
          const icon = mobileBtn.querySelector("i");
          if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
          }
        });
      });
    }
  },

  // Highlight current section in navbar
  highlightActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentId = "";

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.classList.add("active");
        }
      });
    }
  },

  // 2. Animated Stats Counters
  setupAnimatedCounters() {
    const counters = document.querySelectorAll(".stat-num");
    let hasAnimated = false;

    const runCount = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 50;

        const updateNumber = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count).toLocaleString();
            requestAnimationFrame(updateNumber);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        updateNumber();
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          runCount();
        }
      });
    }, { threshold: 0.3 });

    const statsStrip = document.querySelector(".hero-stats-strip");
    if (statsStrip) observer.observe(statsStrip);
  },

  // 3. Interactive Muscle Modal
  setupMuscleModal() {
    const modal = document.getElementById("muscleModal");
    const closeBtn = document.getElementById("closeMuscleModal");
    const closeBtn2 = document.getElementById("closeMuscleModalBtn");
    const openBtns = document.querySelectorAll(".open-muscle-modal");

    openBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const muscle = btn.getAttribute("data-muscle");
        this.openMuscleModal(muscle);
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", () => this.closeModal());
    if (closeBtn2) closeBtn2.addEventListener("click", () => this.closeModal());

    // Click outside backdrop
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) this.closeModal();
      });
    }

    // Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && modal.classList.contains("active")) {
        this.closeModal();
      }
    });
  },

  openMuscleModal(muscleKey) {
    const data = MUSCLE_DETAILS[muscleKey];
    if (!data) return;

    const modal = document.getElementById("muscleModal");
    const titleEl = document.getElementById("modalTitle");
    const catEl = document.getElementById("modalCategory");
    const bodyEl = document.getElementById("modalBody");

    catEl.textContent = data.category;
    titleEl.textContent = data.title;

    let html = `<p class="modal-intro-text" style="color: var(--text-light); margin-bottom: 22px; font-size: 0.95rem;">${data.description}</p>`;
    html += `<h4 style="color: var(--neon-green); font-size: 0.85rem; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px;">Ejercicios Clave Recomendados</h4>`;

    data.exercises.forEach(ex => {
      html += `
        <div class="modal-exercise-item">
          <div class="modal-ex-header">
            <span class="modal-ex-name"><i class="fa-solid fa-angle-right" style="color: var(--neon-green); margin-right: 6px;"></i> ${ex.name}</span>
            <span class="modal-ex-pill">${ex.setsReps}</span>
          </div>
          <p class="modal-ex-desc" style="margin-bottom: 6px;"><strong>Objetivo:</strong> ${ex.focus}</p>
          <p class="modal-ex-desc" style="color: var(--text-dim);"><i class="fa-solid fa-lightbulb" style="color: #facc15;"></i> <em>${ex.tip}</em></p>
        </div>
      `;
    });

    bodyEl.innerHTML = html;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  },

  closeModal() {
    const modal = document.getElementById("muscleModal");
    if (modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  },

  // 4. Routine Tabs
  setupRoutineTabs() {
    const tabs = document.querySelectorAll(".routine-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-target");
        this.switchRoutine(target);
      });
    });
  },

  switchRoutine(level) {
    const tabs = document.querySelectorAll(".routine-tab");
    const panels = document.querySelectorAll(".routine-panel");

    tabs.forEach(t => {
      if (t.getAttribute("data-target") === level) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

    panels.forEach(p => {
      if (p.id === `panel-${level}`) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
  },

  startRoutine(routineName) {
    localStorage.setItem("fitzone_active_routine", routineName);
    this.showToast(`¡Rutina ${routineName} activada! Hemos guardado tu selección.`, "fa-solid fa-circle-check");
  },

  // 5. Calculators (IMC & Macros)
  switchCalc(type) {
    const bmiBtn = document.getElementById("tabBmiBtn");
    const macroBtn = document.getElementById("tabMacroBtn");
    const bmiPane = document.getElementById("calcBmiPane");
    const macroPane = document.getElementById("calcMacroPane");

    if (type === "bmi") {
      bmiBtn.classList.add("active");
      macroBtn.classList.remove("active");
      bmiPane.classList.add("active");
      macroPane.classList.remove("active");
    } else {
      macroBtn.classList.add("active");
      bmiBtn.classList.remove("active");
      macroPane.classList.add("active");
      bmiPane.classList.remove("active");
    }
  },

  calculateBMI() {
    const height = parseFloat(document.getElementById("bmiHeight")?.value) || 175;
    const weight = parseFloat(document.getElementById("bmiWeight")?.value) || 75;

    const heightM = height / 100;
    const bmi = +(weight / (heightM * heightM)).toFixed(1);

    const scoreEl = document.getElementById("bmiScore");
    const catEl = document.getElementById("bmiCategory");
    const pointerEl = document.getElementById("bmiPointer");
    const adviceEl = document.getElementById("bmiAdvice");

    if (!scoreEl) return;
    scoreEl.innerText = bmi;

    let category = "";
    let pointerPct = 50;
    let advice = "";

    if (bmi < 18.5) {
      category = "BAJO PESO";
      catEl.style.color = "#38bdf8";
      pointerPct = Math.max(8, (bmi / 18.5) * 22);
      advice = "Prioriza un superávit calórico controlado y levantamientos de fuerza para construir masa muscular y tejido magro saludable.";
    } else if (bmi < 25) {
      category = "PESO SALUDABLE";
      catEl.style.color = "var(--neon-green)";
      pointerPct = 25 + ((bmi - 18.5) / 6.4) * 25;
      advice = "¡Excelente estado! Tu composición es óptima para enfocarte en hipertrofia y progresar en cargas sin acumular exceso de grasa.";
    } else if (bmi < 30) {
      category = "SOBREPESO / DENSIDAD ALTA";
      catEl.style.color = "#facc15";
      pointerPct = 50 + ((bmi - 25) / 4.9) * 25;
      advice = "Si tienes buena base muscular, el IMC puede estar sobrestimado. Si buscas definir, aplica un déficit de 350-500 kcal con alto consumo proteico.";
    } else {
      category = "OBESIDAD";
      catEl.style.color = "#f87171";
      pointerPct = Math.min(94, 75 + ((bmi - 30) / 10) * 20);
      advice = "Recomendamos enfocarte en constancia aeróbica, circuitos de resistencia con pesas y una dieta antiinflamatoria supervisada.";
    }

    catEl.innerText = category;
    pointerEl.style.left = `${pointerPct}%`;
    adviceEl.innerText = advice;
  },

  calculateMacros() {
    const age = parseInt(document.getElementById("macroAge")?.value) || 25;
    const gender = document.getElementById("macroGender")?.value || "male";
    const weight = parseFloat(document.getElementById("macroWeight")?.value) || 75;
    const height = parseFloat(document.getElementById("macroHeight")?.value) || 175;
    const activity = parseFloat(document.getElementById("macroActivity")?.value) || 1.55;
    const goal = document.getElementById("macroGoal")?.value || "bulk";

    // Mifflin-St Jeor BMR formula
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr += (gender === "male") ? 5 : -161;

    // TDEE
    let tdee = bmr * activity;

    let targetCalories = Math.round(tdee);
    let goalLabel = "MANTENIMIENTO ENERGÉTICO";
    let advice = "Tu consumo calórico iguala tu gasto diario; ideal para recomposición corporal si mantienes entrenamiento intenso.";

    if (goal === "cut") {
      targetCalories = Math.round(tdee - 450);
      goalLabel = "DÉFICIT / PÉRDIDA DE GRASA";
      advice = "Déficit óptimo para preservar la masa muscular magra mientras quemas tejido adiposo de forma sostenible.";
    } else if (goal === "bulk") {
      targetCalories = Math.round(tdee + 350);
      goalLabel = "SUPERÁVIT / VOLUMEN MUSCULAR";
      advice = "Superávit anabólico limpio para maximizar síntesis proteica y fuerza sin acumulación innecesaria de grasa.";
    }

    // Macro distributions:
    // Protein: 2.0g per kg of weight
    const proteinGrams = Math.round(weight * 2.0);
    const proteinCals = proteinGrams * 4;

    // Fat: 0.9g per kg of weight
    const fatGrams = Math.round(weight * 0.9);
    const fatCals = fatGrams * 9;

    // Remaining calories to Carbs
    const remainingCals = Math.max(200, targetCalories - (proteinCals + fatCals));
    const carbGrams = Math.round(remainingCals / 4);

    document.getElementById("macroCalories").innerHTML = `${targetCalories.toLocaleString()} <small>kcal/día</small>`;
    document.getElementById("macroGoalLabel").innerText = goalLabel;
    document.getElementById("resProtein").innerText = `${proteinGrams} g`;
    document.getElementById("resCarbs").innerText = `${carbGrams} g`;
    document.getElementById("resFats").innerText = `${fatGrams} g`;
    document.getElementById("macroAdvice").innerText = advice;
  },

  // 6. Interactive Progress Canvas Chart
  setupProgressChart() {
    this.renderChart();

    window.addEventListener("resize", () => {
      this.renderChart();
    });
  },

  setChartMetric(metricKey) {
    if (!CHART_DATA.metrics[metricKey]) return;
    currentMetricKey = metricKey;

    const btns = document.querySelectorAll(".chart-filter-btn");
    btns.forEach(btn => {
      if (btn.getAttribute("data-metric") === metricKey) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    this.renderChart();
    this.showToast(`Mostrando progresión de ${CHART_DATA.metrics[metricKey].name}`, "fa-solid fa-chart-line");
  },

  renderChart() {
    const canvas = document.getElementById("progressCanvas");
    if (!canvas) return;

    // Set high DPI canvas resolution
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Clear
    ctx.clearRect(0, 0, width, height);

    const metric = CHART_DATA.metrics[currentMetricKey];
    const dataValues = metric.values;
    const labels = CHART_DATA.labels;

    // Margins
    const padLeft = 55;
    const padRight = 30;
    const padTop = 30;
    const padBottom = 45;

    const chartW = width - padLeft - padRight;
    const chartH = height - padTop - padBottom;

    // Min & Max calculations
    const minVal = Math.floor(Math.min(...dataValues) * 0.92);
    const maxVal = Math.ceil(Math.max(...dataValues) * 1.08);

    // Draw grid horizontal lines
    const gridLines = 4;
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.fillStyle = "#64748b";
    ctx.font = "11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "right";

    for (let i = 0; i <= gridLines; i++) {
      const yVal = minVal + ((maxVal - minVal) / gridLines) * i;
      const yPos = padTop + chartH - (i / gridLines) * chartH;

      ctx.beginPath();
      ctx.moveTo(padLeft, yPos);
      ctx.lineTo(width - padRight, yPos);
      ctx.stroke();

      ctx.fillText(`${Math.round(yVal)} ${metric.unit}`, padLeft - 10, yPos + 4);
    }

    // Coordinates of data points
    const points = [];
    const stepX = chartW / (dataValues.length - 1);

    dataValues.forEach((val, idx) => {
      const x = padLeft + idx * stepX;
      const yRatio = (val - minVal) / (maxVal - minVal);
      const y = padTop + chartH - yRatio * chartH;
      points.push({ x, y, val, label: labels[idx] });
    });

    // Draw filled neon area
    const gradient = ctx.createLinearGradient(0, padTop, 0, padTop + chartH);
    gradient.addColorStop(0, "rgba(0, 255, 102, 0.28)");
    gradient.addColorStop(1, "rgba(0, 255, 102, 0.0)");

    ctx.beginPath();
    ctx.moveTo(points[0].x, padTop + chartH);
    points.forEach((pt, i) => {
      if (i === 0) {
        ctx.lineTo(pt.x, pt.y);
      } else {
        // Smooth bezier curve
        const prev = points[i - 1];
        const cpX1 = prev.x + (pt.x - prev.x) / 2;
        const cpX2 = prev.x + (pt.x - prev.x) / 2;
        ctx.bezierCurveTo(cpX1, prev.y, cpX2, pt.y, pt.x, pt.y);
      }
    });
    ctx.lineTo(points[points.length - 1].x, padTop + chartH);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw main glowing neon stroke
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = metric.color;
    ctx.shadowColor = metric.color;
    ctx.shadowBlur = 12;

    points.forEach((pt, i) => {
      if (i === 0) {
        ctx.moveTo(pt.x, pt.y);
      } else {
        const prev = points[i - 1];
        const cpX1 = prev.x + (pt.x - prev.x) / 2;
        const cpX2 = prev.x + (pt.x - prev.x) / 2;
        ctx.bezierCurveTo(cpX1, prev.y, cpX2, pt.y, pt.x, pt.y);
      }
    });
    ctx.stroke();
    ctx.shadowBlur = 0; // reset shadow

    // Draw points & labels
    ctx.textAlign = "center";
    points.forEach((pt, idx) => {
      // Circle point
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#08090b";
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = metric.color;
      ctx.stroke();

      // Top value text on last and peak points
      if (idx === points.length - 1 || pt.val === Math.max(...dataValues)) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 11px 'Plus Jakarta Sans'";
        ctx.fillText(`${pt.val} ${metric.unit}`, pt.x, pt.y - 12);
      }

      // Bottom X label
      ctx.fillStyle = "#9ca3af";
      ctx.font = "11px 'Plus Jakarta Sans'";
      ctx.fillText(pt.label, pt.x, height - 15);
    });
  },

  logNewRecord() {
    const input = document.getElementById("newMetricValue");
    const val = parseFloat(input?.value);

    if (!val || val <= 0) {
      this.showToast("Por favor ingresa un valor numérico válido.", "fa-solid fa-triangle-exclamation");
      return;
    }

    const metric = CHART_DATA.metrics[currentMetricKey];
    metric.values.push(val);

    const nextWeekNum = CHART_DATA.labels.length + 1;
    CHART_DATA.labels.push(`Sem ${nextWeekNum}`);

    // If too many points, shift first to keep visual clean
    if (metric.values.length > 10) {
      metric.values.shift();
      CHART_DATA.labels.shift();
    }

    // Update corresponding KPI
    if (currentMetricKey === "squat") {
      document.getElementById("kpiSquat").innerText = `${val.toFixed(1)} kg`;
    } else if (currentMetricKey === "bodyweight") {
      document.getElementById("kpiWeight").innerText = `${val.toFixed(1)} kg`;
    }

    this.renderChart();
    input.value = "";

    const msgEl = document.getElementById("chartLogMsg");
    if (msgEl) {
      msgEl.innerHTML = `<span style="color: var(--neon-green); font-weight: 700;">¡Nuevo registro guardado con éxito (${val} ${metric.unit})!</span>`;
    }

    this.showToast(`¡Récord de ${val} ${metric.unit} registrado en ${metric.name}!`, "fa-solid fa-trophy");
  },

  // 7. Contact Form & Feedback
  handleContactSubmit() {
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const goal = document.getElementById("contactGoal").value;

    const btn = document.getElementById("btnSubmitContact");
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Enviando...`;
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = `<i class="fa-solid fa-check"></i> ¡Mensaje Enviado!`;
      btn.style.background = "#10b981";

      this.showToast(`¡Gracias ${name}! Un coach FITZONE te contactará a ${email} para planificar tu meta de ${goal}.`, "fa-solid fa-paper-plane");

      document.getElementById("contactForm").reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = "";
        btn.disabled = false;
      }, 3500);
    }, 1200);
  },

  subscribeNewsletter() {
    const email = document.getElementById("newsletterEmail").value;
    if (email) {
      this.showToast("¡Te has suscrito exitosamente al boletín anabólico de FITZONE!", "fa-solid fa-envelope-circle-check");
      document.getElementById("newsletterEmail").value = "";
    }
  },

  // Toast Notification System
  showToast(message, iconClass = "fa-solid fa-bell") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <div>${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 4000);
  },

  // Footer current year
  updateCopyrightYear() {
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }
};

// Initialize FITZONE on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  fitzoneApp.init();
});
