/**
 * CBT Assessment Platform - Engine v5
 * - Multi-Page Complete PDF Report Printing (Scorecard + Table + Questions + Rough Work)
 * - Single Universal Question Format (No separate tabs or cluttered buttons)
 * - Natural support for code blocks, tables, images, SVG circuits, and optional explanations
 * - Direct Clipboard Image Paste (Ctrl+V) into question bank textarea
 * - Persistent Side Panel Toggle (< / > always visible on screen edge)
 * - Single authentic Submit Exam button in palette
 * - All sections visible in Question Palette with independent question states
 */

const DEFAULT_TEST_CONFIG = {
  examTitle: "PSU / Technical CBT Mock Examination 2026",
  durationMinutes: 120,
  posMarks: 1.0,
  negMarks: 0.333333,
  candidateName: "Rohit Singh",
  rollNumber: "2026-EE-499",
  systemName: "C001",
  questions: [
    {
      id: "q1",
      section: "General Aptitude",
      number: 1,
      text: "If a train running at 72 km/h crosses an electric pole in 15 seconds, what is the length of the train?",
      options: {
        A: "250 meters",
        B: "300 meters",
        C: "360 meters",
        D: "400 meters"
      },
      answer: "B",
      explanation: "",
      marks: 1.0,
      negativeMarks: 0.333333
    },
    {
      id: "q2",
      section: "General Aptitude",
      number: 2,
      text: "In a certain code language, 'ROHIT' is written as 'SPIJU'. How will 'POWER' be written in that code?",
      options: {
        A: "QPXFS",
        B: "QPXES",
        C: "QOXFS",
        D: "ROXFT"
      },
      answer: "A",
      explanation: "",
      marks: 1.0,
      negativeMarks: 0.333333
    },
    {
      id: "q3",
      section: "General Aptitude",
      number: 3,
      text: "The ratio of the present ages of A and B is 4 : 5. After 6 years, the ratio becomes 5 : 6. What is the present age of B?",
      options: {
        A: "24 years",
        B: "30 years",
        C: "35 years",
        D: "40 years"
      },
      answer: "B",
      explanation: "",
      marks: 1.0,
      negativeMarks: 0.333333
    },
    {
      id: "q4",
      section: "General Aptitude",
      number: 4,
      text: "Find the next missing number in the prime square sequence: 4, 9, 25, 49, 121, ?",
      options: {
        A: "144",
        B: "169",
        C: "196",
        D: "225"
      },
      answer: "B",
      explanation: "",
      marks: 1.0,
      negativeMarks: 0.333333
    },
    {
      id: "q5",
      section: "General Aptitude",
      number: 5,
      text: "A pipe can fill a reservoir in 12 hours while another pipe empties it in 18 hours. If both pipes are opened simultaneously, how long will it take to fill the reservoir?",
      options: {
        A: "30 hours",
        B: "36 hours",
        C: "24 hours",
        D: "48 hours"
      },
      answer: "B",
      explanation: "",
      marks: 1.0,
      negativeMarks: 0.333333
    },
    {
      id: "q6",
      section: "Electrical Engineering",
      number: 6,
      text: "For the circuit shown below, determine the Thevenin equivalent voltage (Vth) and resistance (Rth) across terminals A-B:\n\n<svg viewBox=\"0 0 460 170\" width=\"420\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background:#fff;\">\n  <line x1=\"40\" y1=\"50\" x2=\"160\" y2=\"50\" stroke=\"#02385e\" stroke-width=\"2.5\"/>\n  <line x1=\"220\" y1=\"50\" x2=\"340\" y2=\"50\" stroke=\"#02385e\" stroke-width=\"2.5\"/>\n  <line x1=\"400\" y1=\"50\" x2=\"440\" y2=\"50\" stroke=\"#02385e\" stroke-width=\"2.5\"/>\n  <line x1=\"40\" y1=\"140\" x2=\"440\" y2=\"140\" stroke=\"#02385e\" stroke-width=\"2.5\"/>\n  <line x1=\"40\" y1=\"50\" x2=\"40\" y2=\"75\" stroke=\"#02385e\" stroke-width=\"2.5\"/>\n  <line x1=\"40\" y1=\"115\" x2=\"40\" y2=\"140\" stroke=\"#02385e\" stroke-width=\"2.5\"/>\n  <line x1=\"250\" y1=\"50\" x2=\"250\" y2=\"75\" stroke=\"#02385e\" stroke-width=\"2.5\"/>\n  <line x1=\"250\" y1=\"115\" x2=\"250\" y2=\"140\" stroke=\"#02385e\" stroke-width=\"2.5\"/>\n  <circle cx=\"40\" cy=\"95\" r=\"20\" stroke=\"#02385e\" stroke-width=\"2\" fill=\"#f0f5fa\"/>\n  <text x=\"35\" y=\"91\" font-family=\"Arial\" font-size=\"13\" font-weight=\"bold\" fill=\"#c62828\">+</text>\n  <text x=\"36\" y=\"106\" font-family=\"Arial\" font-size=\"13\" font-weight=\"bold\" fill=\"#02385e\">-</text>\n  <text x=\"8\" y=\"100\" font-family=\"Arial\" font-size=\"12\" font-weight=\"bold\" fill=\"#02385e\">24V</text>\n  <path d=\"M 160 50 L 165 42 L 175 58 L 185 42 L 195 58 L 205 42 L 215 58 L 220 50\" stroke=\"#c62828\" stroke-width=\"2.5\" fill=\"none\"/>\n  <text x=\"175\" y=\"34\" font-family=\"Arial\" font-size=\"12\" font-weight=\"bold\" fill=\"#c62828\">R1 = 6 Ω</text>\n  <path d=\"M 250 75 L 242 81 L 258 91 L 242 101 L 258 111 L 250 115\" stroke=\"#2e7d32\" stroke-width=\"2.5\" fill=\"none\"/>\n  <text x=\"268\" y=\"100\" font-family=\"Arial\" font-size=\"12\" font-weight=\"bold\" fill=\"#2e7d32\">R2 = 12 Ω</text>\n  <path d=\"M 340 50 L 345 42 L 355 58 L 365 42 L 375 58 L 385 42 L 395 58 L 400 50\" stroke=\"#6a1b9a\" stroke-width=\"2.5\" fill=\"none\"/>\n  <text x=\"355\" y=\"34\" font-family=\"Arial\" font-size=\"12\" font-weight=\"bold\" fill=\"#6a1b9a\">R3 = 4 Ω</text>\n  <circle cx=\"440\" cy=\"50\" r=\"5\" fill=\"#ff9800\" stroke=\"#e65100\" stroke-width=\"1.5\"/>\n  <circle cx=\"440\" cy=\"140\" r=\"5\" fill=\"#ff9800\" stroke=\"#e65100\" stroke-width=\"1.5\"/>\n  <text x=\"450\" y=\"55\" font-family=\"Arial\" font-size=\"13\" font-weight=\"bold\" fill=\"#000\">A</text>\n  <text x=\"450\" y=\"145\" font-family=\"Arial\" font-size=\"13\" font-weight=\"bold\" fill=\"#000\">B</text>\n</svg>",
      "options": {
        "A": "Vth = 16 V, Rth = 8 Ω",
        "B": "Vth = 12 V, Rth = 6 Ω",
        "C": "Vth = 16 V, Rth = 4 Ω",
        "D": "Vth = 8 V, Rth = 8 Ω"
      },
      "answer": "A",
      "explanation": "Vth = 24 * (12/18) = 16V. Rth = (6||12) + 4 = 4 + 4 = 8 Ω.",
      "marks": 1.0,
      "negativeMarks": 0.333333
    },
    {
      "id": "q7",
      "section": "Electrical Engineering",
      "number": 7,
      "text": "The following C firmware routine is executed on an STM32 ARM Cortex-M microcontroller to initialize Timer 1 (TIM1):\n\n```c\nvoid Motor_PWM_Init(void) {\n    TIM_TimeBaseInitTypeDef TIM_InitStruct;\n    TIM_InitStruct.TIM_Prescaler = 71;      // Timer Clock = 72 MHz\n    TIM_InitStruct.TIM_Period = 49;         \n    TIM_InitStruct.TIM_CounterMode = TIM_CounterMode_Up;\n    TIM_TimeBaseInit(TIM1, &TIM_InitStruct);\n}\n```\n\nWhat is the resulting PWM / Timer update frequency?",
      "options": {
        "A": "10 kHz",
        "B": "20 kHz",
        "C": "25 kHz",
        "D": "50 kHz"
      },
      "answer": "B",
      "explanation": "f = 72MHz / [(71 + 1) * (49 + 1)] = 72MHz / 3600 = 20 kHz.",
      "marks": 1.0,
      "negativeMarks": 0.333333
    },
    {
      "id": "q8",
      "section": "Electrical Engineering",
      "number": 8,
      "text": "For sensorless electronic commutation of a 3-Phase Brushless DC (BLDC) motor, what physical phenomenon is measured on the unenergized phase terminal?",
      "options": {
        "A": "Stator tooth core hysteresis",
        "B": "Zero-Crossing Detection (ZCD) of the terminal Back-EMF",
        "C": "Rotor eddy current dissipation profile",
        "D": "Phase insulation resistance"
      },
      "answer": "B",
      "explanation": "",
      "marks": 1.0,
      "negativeMarks": 0.333333
    },
    {
      "id": "q9",
      "section": "Electrical Engineering",
      "number": 9,
      "text": "In a single-phase transformer, the condition for maximum voltage regulation occurs at which operating power factor?",
      "options": {
        "A": "Unity power factor",
        "B": "Lagging power factor equal to R / Z",
        "C": "Lagging power factor equal to X / Z (tan θ = X / R)",
        "D": "Leading power factor equal to X / Z"
      },
      "answer": "C",
      "explanation": "",
      "marks": 1.0,
      "negativeMarks": 0.333333
    },
    {
      "id": "q10",
      "section": "Electrical Engineering",
      "number": 10,
      "text": "In a cylindrical rotor synchronous generator connected to a power grid, steady-state power transfer capability is expressed by P = (E * V / Xd) * sin(δ). The steady-state stability limit is reached when the power angle δ reaches:",
      "options": {
        "A": "0°",
        "B": "45°",
        "C": "90°",
        "D": "180°"
      },
      "answer": "C",
      "explanation": "",
      "marks": 1.0,
      "negativeMarks": 0.333333
    }
  ]
};

let testConfig = JSON.parse(localStorage.getItem("cbt_test_config")) || DEFAULT_TEST_CONFIG;
let currentQuestionIndex = 0;
let currentSection = "";
let timerInterval = null;
let timeRemaining = 0;
let activeQuestionStartTime = Date.now();
let questionResponses = {};

// Canvas & Vector Stroke Engine
let canvas, ctx;
let isDrawing = false;
let isEraser = false;
let currentStrokes = [];
let activeStroke = [];
let undoHistory = [];
const ERASE_RADIUS = 24;

document.addEventListener("DOMContentLoaded", () => {
  initDOM();
  initCanvas();
  loadConfigToUI();
  setupEventListeners();
});

function initDOM() {
  document.getElementById("headerExamTitle").textContent = testConfig.examTitle;
  document.getElementById("previewCandidateName").textContent = testConfig.candidateName;
  document.getElementById("loginInputName").value = testConfig.candidateName;
  document.getElementById("previewRollNumber").textContent = testConfig.rollNumber;
  document.getElementById("loginInputRoll").value = testConfig.rollNumber;
  document.getElementById("previewSubjectName").textContent = testConfig.examTitle;
}

function loadConfigToUI() {
  const durEl = document.getElementById("instDurationText");
  if (durEl) {
    durEl.textContent = `${testConfig.durationMinutes} minutes`;
  }
  document.getElementById("subbarPosMarks").textContent = `+${Number(testConfig.posMarks).toFixed(2)}`;
  document.getElementById("subbarNegMarks").textContent = `-${Number(testConfig.negMarks).toFixed(2)}`;
  document.getElementById("paletteCandidateName").textContent = testConfig.candidateName;
}

function showScreen(screenId) {
  const screens = ["screenLogin", "screenInstructions", "screenDeclaration", "screenExam", "screenResults"];
  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
  const target = document.getElementById(screenId);
  if (target) target.classList.remove("hidden");
  window.scrollTo(0, 0);
}

// ========================================================
// SMART RICH CONTENT RENDERER (TABLES, LATEX MATH, SVG, CODE, IMAGES)
// ========================================================
function parseMarkdownTablesToHtml(text) {
  if (!text) return "";
  const lines = text.split(/\r?\n/);
  const newLines = [];
  let tableBuffer = [];

  function isTableRow(line) {
    const stripped = line.trim();
    if (stripped.includes("|") && (stripped.startsWith("|") || stripped.split("|").length >= 3)) {
      return true;
    }
    if (stripped.includes("\t") && stripped.split("\t").length >= 2) {
      return true;
    }
    return false;
  }

  function isSeparatorRow(cells) {
    if (!cells || cells.length === 0) return false;
    return cells.every(c => /^[:\-\s]*$/.test(c));
  }

  function flushTable(buf) {
    if (!buf || buf.length === 0) return "";
    const parsedRows = [];
    for (let i = 0; i < buf.length; i++) {
      let stripped = buf[i].trim();
      let cells = [];
      if (stripped.includes("\t") && !stripped.includes("|")) {
        cells = stripped.split("\t").map(c => c.trim()).filter(c => c.length > 0);
      } else {
        if (stripped.startsWith("|")) stripped = stripped.substring(1);
        if (stripped.endsWith("|")) stripped = stripped.substring(0, stripped.length - 1);
        cells = stripped.split("|").map(c => c.trim());
      }
      if (isSeparatorRow(cells)) continue;
      if (cells.some(c => c.length > 0)) {
        parsedRows.push(cells);
      }
    }

    if (parsedRows.length === 0) return buf.join("\n");

    let maxCols = 0;
    parsedRows.forEach(r => { if (r.length > maxCols) maxCols = r.length; });
    parsedRows.forEach(r => {
      while (r.length < maxCols) r.push("");
    });

    let html = '<div class="table-responsive"><table class="q-rich-table"><thead><tr>';
    parsedRows[0].forEach(c => {
      html += `<th>${c}</th>`;
    });
    html += '</tr></thead><tbody>';

    for (let r = 1; r < parsedRows.length; r++) {
      html += '<tr>';
      parsedRows[r].forEach(c => {
        html += `<td>${c}</td>`;
      });
      html += '</tr>';
    }
    html += '</tbody></table></div>';
    return html;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (isTableRow(line)) {
      tableBuffer.push(line);
    } else {
      if (tableBuffer.length > 0) {
        newLines.push(flushTable(tableBuffer));
        tableBuffer = [];
      }
      newLines.push(line);
    }
  }

  if (tableBuffer.length > 0) {
    newLines.push(flushTable(tableBuffer));
  }

  return newLines.join("\n");
}

function renderMathLatex(text) {
  if (!text) return "";

  const symbols = {
    "approx": "≈", "times": "×", "cdot": "·", "div": "÷", "pm": "±", "mp": "∓",
    "infty": "∞", "gg": "≫", "ll": "≪", "leq": "≤", "le": "≤", "geq": "≥", "ge": "≥",
    "neq": "≠", "to": "→", "rightarrow": "→", "partial": "∂", "sum": "∑", "prod": "∏", "int": "∫",
    "degree": "°", "circ": "°", "Omega": "Ω", "omega": "ω", "mu": "μ", "pi": "π",
    "theta": "θ", "Delta": "Δ", "delta": "δ", "alpha": "α", "beta": "β", "gamma": "γ",
    "lambda": "λ", "sigma": "σ", "tau": "τ", "phi": "φ", "psi": "ψ", "eta": "η"
  };

  function replaceSymbols(s) {
    let res = s;
    for (const [name, char] of Object.entries(symbols)) {
      const reg = new RegExp("\\" + name + "(?![a-zA-Z])", "g");
      res = res.replace(reg, char);
    }
    res = res.replace(/\\text\{([^{}]+)\}/g, "$1");
    res = res.replace(/\\%/g, "%");
    res = res.replace(/~/g, " ");
    res = res.replace(/\\[,;\s]/g, " ");
    res = res.replace(/\\quad/g, "  ");
    return res;
  }

  function parseRoots(s) {
    s = s.replace(/\\sqrt\[([^{}]+)\]\{([^{}]+)\}/g, '<sup style="font-size:0.7em;">$1</sup>√<span class="math-radicand">$2</span>');
    s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√<span class="math-radicand">$1</span>');
    s = s.replace(/\\sqrt\s*([0-9a-zA-Z])/g, '√<span class="math-radicand">$1</span>');
    return s;
  }

  function parseFractions(s) {
    const pattern = /\\frac\{([^{}]+)\}\{([^{}]+)\}/;
    while (pattern.test(s)) {
      s = s.replace(pattern, '<span class="math-frac"><span class="math-num">$1</span><span class="math-den">$2</span></span>');
    }
    return s;
  }

  function parseSubSup(s) {
    s = s.replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>');
    s = s.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>');
    s = s.replace(/_([a-zA-Z0-9])/g, '<sub>$1</sub>');
    s = s.replace(/\^([a-zA-Z0-9])/g, '<sup>$1</sup>');
    return s;
  }

  function formatMathExpr(expr) {
    let res = replaceSymbols(expr);
    res = parseRoots(res);
    res = parseFractions(res);
    res = parseSubSup(res);
    return `<span class="math-inline">${res}</span>`;
  }

  // Display math $$...$$
  text = text.replace(/\$\$([^\$]+)\$\$/g, (match, expr) => `<div class="math-display">${formatMathExpr(expr)}</div>`);

  // Inline math $...$
  text = text.replace(/\$([^\$]+)\$/g, (match, expr) => formatMathExpr(expr));

  // Standalone fractions, roots, and symbols outside $
  text = replaceSymbols(text);
  text = parseRoots(text);
  text = parseFractions(text);

  return text;
}

function renderRichContent(rawText) {
  if (!rawText) return "";
  let text = rawText;
  const placeholders = [];

  function savePlaceholder(content, isSvg = false) {
    const idx = placeholders.length;
    const token = `___PH_TOKEN_${idx}___`;
    if (isSvg) {
      placeholders.push(`<div class="circuit-svg-wrapper">${content}</div>`);
    } else {
      placeholders.push(content);
    }
    return token;
  }

  // 1. SVGs
  text = text.replace(/<svg[\s\S]*?<\/svg>/gi, (match) => savePlaceholder(match, true));

  // 2. Code Blocks
  text = text.replace(/```([a-zA-Z0-9_-]*)\r?\n([\s\S]*?)```/g, (match, lang, code) => {
    const displayLang = (lang || "CODE").toUpperCase();
    const cleanCode = escapeHTML(code.trim());
    const blockHtml = `
      <div class="code-block-container">
        <div class="code-block-header">
          <span>${displayLang}</span>
          <button class="copy-code-btn" onclick="copyCodeSnippet(this)">📋 Copy</button>
        </div>
        <pre class="code-block-content"><code>${cleanCode}</code></pre>
      </div>
    `;
    return savePlaceholder(blockHtml);
  });

  // 3. Raw HTML Tables
  text = text.replace(/<table[\s\S]*?<\/table>/gi, (match) => savePlaceholder(match));

  // 4. Markdown / Pipe Tables
  text = parseMarkdownTablesToHtml(text);
  text = text.replace(/<div class="table-responsive">[\s\S]*?<\/div>/gi, (match) => savePlaceholder(match));

  // 5. Markdown Images
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    const imgHtml = `
      <div class="q-image-container">
        <img class="q-image" src="${src}" alt="${escapeHTML(alt)}" onclick="openImageZoom(this.src, this.alt)" title="Click to zoom">
      </div>
    `;
    return savePlaceholder(imgHtml);
  });

  // 6. Alternate [Image: src]
  text = text.replace(/\[Image:\s*([^\]]+)\]/gi, (match, src) => {
    const imgHtml = `
      <div class="q-image-container">
        <img class="q-image" src="${src.trim()}" alt="Diagram" onclick="openImageZoom(this.src, 'Diagram')" title="Click to zoom">
      </div>
    `;
    return savePlaceholder(imgHtml);
  });

  // 7. Inline Code
  text = text.replace(/`([^`]+)`/g, (match, code) => `<code class="inline-code">${escapeHTML(code)}</code>`);

  // 8. Native LaTeX Math Renderer
  text = renderMathLatex(text);

  // 9. Markdown Bold & Italic
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // 10. Linebreaks
  text = text.replace(/\r?\n/g, '<br>');

  placeholders.forEach((val, idx) => {
    text = text.replace(`___PH_TOKEN_${idx}___`, val);
  });

  return text;
}

function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

window.copyCodeSnippet = function(btn) {
  const codeEl = btn.closest(".code-block-container").querySelector("code");
  if (codeEl) {
    navigator.clipboard.writeText(codeEl.textContent).then(() => {
      const oldText = btn.textContent;
      btn.textContent = "✔ Copied!";
      setTimeout(() => { btn.textContent = oldText; }, 1500);
    });
  }
};

window.openImageZoom = function(src, caption) {
  const modal = document.getElementById("modalImageZoom");
  const img = document.getElementById("zoomModalImg");
  img.src = src;
  modal.classList.remove("hidden");
};

// EXAM INITIALIZATION & STATE
function startExam() {
  questionResponses = {};
  testConfig.questions.forEach((q) => {
    questionResponses[q.id] = {
      selectedOption: null,
      status: "NOT_VISITED",
      timeSpentSeconds: 0,
      strokes: []
    };
  });

  const uniqueSections = [];
  testConfig.questions.forEach(q => {
    if (!uniqueSections.includes(q.section)) {
      uniqueSections.push(q.section);
    }
  });
  testConfig.sections = uniqueSections;

  currentQuestionIndex = 0;
  currentSection = testConfig.questions[0].section;
  timeRemaining = testConfig.durationMinutes * 60;
  activeQuestionStartTime = Date.now();

  // First question marked visited
  questionResponses[testConfig.questions[0].id].status = "NOT_ANSWERED";

  renderSectionTabs();
  renderQuestionPalette();
  loadQuestion(0);
  startExamTimer();
  showScreen("screenExam");
}

function startExamTimer() {
  if (timerInterval) clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    const currentQ = testConfig.questions[currentQuestionIndex];
    if (currentQ && questionResponses[currentQ.id]) {
      const elapsedNow = Math.round((Date.now() - activeQuestionStartTime) / 1000);
      const totalQTime = questionResponses[currentQ.id].timeSpentSeconds + elapsedNow;
      const qTimerEl = document.getElementById("displayQLiveTimer");
      if (qTimerEl) {
        qTimerEl.textContent = `⏱️ Time on Question: ${formatTimeMMSS(totalQTime)}`;
      }
    }

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time is up! Your examination will now be submitted automatically.");
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const display = document.getElementById("examTimerDisplay");
  if (!display) return;
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (timeRemaining <= 300) {
    display.classList.add("timer-warning");
  } else {
    display.classList.remove("timer-warning");
  }
}

function formatTimeMMSS(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function recordTimeOnActiveQuestion() {
  const currentQ = testConfig.questions[currentQuestionIndex];
  if (!currentQ || !questionResponses[currentQ.id]) return;
  const elapsed = Math.max(0, Math.round((Date.now() - activeQuestionStartTime) / 1000));
  questionResponses[currentQ.id].timeSpentSeconds += elapsed;
  activeQuestionStartTime = Date.now();
}

function renderSectionTabs() {
  const container = document.getElementById("sectionsTabBar");
  container.innerHTML = "";
  testConfig.sections.forEach(secName => {
    const count = testConfig.questions.filter(q => q.section === secName).length;
    const tab = document.createElement("div");
    tab.className = `section-tab ${secName === currentSection ? "active" : ""}`;
    tab.innerHTML = `<span>${secName}</span><span class="tab-badge">${count} Qs</span>`;
    tab.addEventListener("click", () => {
      if (secName !== currentSection) {
        saveActiveQuestionStrokes();
        recordTimeOnActiveQuestion();
        const targetIndex = testConfig.questions.findIndex(q => q.section === secName);
        if (targetIndex !== -1) {
          loadQuestion(targetIndex);
        }
      }
    });
    container.appendChild(tab);
  });
}

function renderQuestionPalette() {
  const wrapper = document.querySelector(".palette-grid-wrapper");
  if (!wrapper) return;
  wrapper.innerHTML = "";

  // Render questions for all sections so any question is clickable
  testConfig.sections.forEach(secName => {
    const secGroup = document.createElement("div");
    secGroup.className = "palette-section-group";
    secGroup.innerHTML = `<div class="palette-section-title" style="margin-bottom:6px; background:#02385e; color:#fff; padding:4px 8px; font-size:11.5px; font-weight:bold; border-radius:2px;">Section: ${secName}</div>`;

    const grid = document.createElement("div");
    grid.className = "palette-grid";
    grid.style.cssText = "display:grid; grid-template-columns:repeat(5, 1fr); gap:8px; margin-bottom:12px;";

    testConfig.questions.forEach((q, idx) => {
      if (q.section === secName) {
        const resp = questionResponses[q.id];
        const btn = document.createElement("button");
        btn.className = `palette-q-btn ${getBadgeClassForStatus(resp.status)} ${idx === currentQuestionIndex ? "current" : ""}`;
        btn.textContent = q.number;
        btn.title = `Question ${q.number} (${q.section})`;

        btn.addEventListener("click", () => {
          saveActiveQuestionStrokes();
          recordTimeOnActiveQuestion();
          loadQuestion(idx);
        });

        grid.appendChild(btn);
      }
    });

    secGroup.appendChild(grid);
    wrapper.appendChild(secGroup);
  });

  updatePaletteCounters();
}

function getBadgeClassForStatus(status) {
  switch (status) {
    case "ANSWERED": return "badge-answered";
    case "NOT_ANSWERED": return "badge-not-answered";
    case "REVIEW": return "badge-review";
    case "REVIEW_ANSWERED": return "badge-review-answered";
    default: return "badge-not-visited";
  }
}

function updatePaletteCounters() {
  let answered = 0, notAnswered = 0, notVisited = 0, review = 0, reviewAnswered = 0;
  testConfig.questions.forEach(q => {
    const st = questionResponses[q.id].status;
    if (st === "ANSWERED") answered++;
    else if (st === "NOT_ANSWERED") notAnswered++;
    else if (st === "REVIEW") review++;
    else if (st === "REVIEW_ANSWERED") reviewAnswered++;
    else notVisited++;
  });

  document.getElementById("countBadgeAnswered").textContent = answered;
  document.getElementById("countBadgeNotAnswered").textContent = notAnswered;
  document.getElementById("countBadgeNotVisited").textContent = notVisited;
  document.getElementById("countBadgeReview").textContent = review;
  document.getElementById("countBadgeReviewAnswered").textContent = reviewAnswered;
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const q = testConfig.questions[index];
  const resp = questionResponses[q.id];

  // Mark only this question as NOT_ANSWERED if it was never visited before
  if (resp.status === "NOT_VISITED") {
    resp.status = "NOT_ANSWERED";
  }

  if (q.section !== currentSection) {
    currentSection = q.section;
    renderSectionTabs();
  }

  activeQuestionStartTime = Date.now();
  document.getElementById("displayQuestionTitle").textContent = `Question No. ${q.number} (${q.section})`;
  document.getElementById("displayQuestionText").innerHTML = renderRichContent(q.text);

  const optionsList = document.getElementById("displayOptionsList");
  optionsList.innerHTML = "";

  const optionKeys = ["A", "B", "C", "D"];
  optionKeys.forEach(key => {
    if (q.options && q.options[key] !== undefined) {
      const isSelected = resp.selectedOption === key;
      const item = document.createElement("div");
      item.className = `option-item ${isSelected ? "selected" : ""}`;
      item.innerHTML = `
        <input type="radio" name="optRadio" id="opt_${key}" value="${key}" ${isSelected ? "checked" : ""}>
        <span class="option-label-tag">(${key})</span>
        <div class="option-text">${renderRichContent(q.options[key])}</div>
      `;

      item.addEventListener("click", () => {
        const radio = item.querySelector("input[type='radio']");
        radio.checked = true;
        document.querySelectorAll(".option-item").forEach(el => el.classList.remove("selected"));
        item.classList.add("selected");
      });

      optionsList.appendChild(item);
    }
  });

  loadQuestionStrokes(q.id);
  renderQuestionPalette();
}

function getCurrentlySelectedOption() {
  const selectedRadio = document.querySelector("input[name='optRadio']:checked");
  return selectedRadio ? selectedRadio.value : null;
}

function handleSaveNext() {
  saveActiveQuestionStrokes();
  recordTimeOnActiveQuestion();

  const q = testConfig.questions[currentQuestionIndex];
  const selected = getCurrentlySelectedOption();
  const resp = questionResponses[q.id];

  if (selected) {
    resp.selectedOption = selected;
    resp.status = "ANSWERED";
  } else {
    resp.selectedOption = null;
    resp.status = "NOT_ANSWERED";
  }

  navigateToNextQuestion();
}

function handleMarkReviewNext() {
  saveActiveQuestionStrokes();
  recordTimeOnActiveQuestion();

  const q = testConfig.questions[currentQuestionIndex];
  const selected = getCurrentlySelectedOption();
  const resp = questionResponses[q.id];

  if (selected) {
    resp.selectedOption = selected;
    resp.status = "REVIEW_ANSWERED";
  } else {
    resp.selectedOption = null;
    resp.status = "REVIEW";
  }

  navigateToNextQuestion();
}

function handleClearResponse() {
  const q = testConfig.questions[currentQuestionIndex];
  const resp = questionResponses[q.id];
  resp.selectedOption = null;

  document.querySelectorAll("input[name='optRadio']").forEach(r => r.checked = false);
  document.querySelectorAll(".option-item").forEach(item => item.classList.remove("selected"));

  if (resp.status === "ANSWERED" || resp.status === "REVIEW_ANSWERED") {
    resp.status = "NOT_ANSWERED";
  }

  renderQuestionPalette();
}

function navigateToNextQuestion() {
  renderQuestionPalette();
  if (currentQuestionIndex < testConfig.questions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    openSubmitSummaryModal();
  }
}

// SEAMLESS ROUGH SHEET & STROKE ERASER
function initCanvas() {
  canvas = document.getElementById("roughCanvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  canvas.addEventListener("pointerdown", handlePointerDown);
  canvas.addEventListener("pointermove", handlePointerMove);
  canvas.addEventListener("pointerup", handlePointerUp);
  canvas.addEventListener("pointercancel", handlePointerUp);

  const eraserBtn = document.getElementById("btnToggleEraser");
  eraserBtn.addEventListener("click", () => {
    isEraser = !isEraser;
    if (isEraser) {
      eraserBtn.classList.add("active");
      eraserBtn.textContent = "🧹 Eraser Active (Click for Pen)";
      canvas.style.cursor = "pointer";
    } else {
      eraserBtn.classList.remove("active");
      eraserBtn.textContent = "🧹 Stroke Eraser";
      canvas.style.cursor = "crosshair";
    }
  });

  document.getElementById("btnRoughUndo").addEventListener("click", () => {
    if (undoHistory.length > 0) {
      currentStrokes = undoHistory.pop();
      redrawCanvas();
      saveActiveQuestionStrokes();
    }
  });

  document.getElementById("btnRoughClear").addEventListener("click", () => {
    if (currentStrokes.length === 0) return;
    if (confirm("Clear all rough work for this question?")) {
      pushUndo();
      currentStrokes = [];
      redrawCanvas();
      saveActiveQuestionStrokes();
    }
  });

  document.getElementById("btnScrollDown").addEventListener("click", () => {
    const viewport = document.getElementById("questionViewport");
    viewport.scrollBy({ top: 400, behavior: 'smooth' });
  });
}

function getCoords(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

function handlePointerDown(e) {
  if (e.pointerType === "touch" && !e.isPrimary) return;
  isDrawing = true;
  const pt = getCoords(e);

  if (isEraser) {
    eraseStrokesNear(pt.x, pt.y);
  } else {
    pushUndo();
    activeStroke = [pt];
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = "#222222";
    ctx.fill();
  }
}

function handlePointerMove(e) {
  if (!isDrawing) return;
  const pt = getCoords(e);

  if (isEraser) {
    eraseStrokesNear(pt.x, pt.y);
  } else {
    activeStroke.push(pt);
    const len = activeStroke.length;
    if (len >= 2) {
      ctx.beginPath();
      ctx.strokeStyle = "#222222";
      ctx.lineWidth = 3.0;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.moveTo(activeStroke[len - 2].x, activeStroke[len - 2].y);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }
  }
}

function handlePointerUp() {
  if (isDrawing) {
    isDrawing = false;
    if (!isEraser && activeStroke.length > 0) {
      currentStrokes.push(activeStroke);
      activeStroke = [];
      saveActiveQuestionStrokes();
    }
  }
}

function pushUndo() {
  if (undoHistory.length >= 12) undoHistory.shift();
  const snapshot = currentStrokes.map(st => st.map(p => ({ x: p.x, y: p.y })));
  undoHistory.push(snapshot);
}

function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0 && dy === 0) return Math.hypot(px - x1, py - y1);
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function eraseStrokesNear(px, py) {
  let deletedAny = false;
  const retainedStrokes = [];

  for (let s = 0; s < currentStrokes.length; s++) {
    const stroke = currentStrokes[s];
    let isHit = false;

    if (stroke.length === 1) {
      if (Math.hypot(px - stroke[0].x, py - stroke[0].y) <= ERASE_RADIUS) {
        isHit = true;
      }
    } else {
      for (let i = 0; i < stroke.length - 1; i++) {
        if (distToSegment(px, py, stroke[i].x, stroke[i].y, stroke[i+1].x, stroke[i+1].y) <= ERASE_RADIUS) {
          isHit = true;
          break;
        }
      }
    }

    if (isHit) {
      deletedAny = true;
    } else {
      retainedStrokes.push(stroke);
    }
  }

  if (deletedAny) {
    pushUndo();
    currentStrokes = retainedStrokes;
    redrawCanvas();
    saveActiveQuestionStrokes();
  }
}

function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#222222";
  ctx.lineWidth = 3.0;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  currentStrokes.forEach(stroke => {
    if (!stroke || stroke.length === 0) return;
    if (stroke.length === 1) {
      ctx.beginPath();
      ctx.arc(stroke[0].x, stroke[0].y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "#222222";
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (let i = 1; i < stroke.length; i++) {
        ctx.lineTo(stroke[i].x, stroke[i].y);
      }
      ctx.stroke();
    }
  });
}

function saveActiveQuestionStrokes() {
  const q = testConfig.questions[currentQuestionIndex];
  if (!q || !questionResponses[q.id]) return;
  questionResponses[q.id].strokes = currentStrokes.map(st => st.map(p => ({ x: p.x, y: p.y })));
}

function loadQuestionStrokes(qId) {
  undoHistory = [];
  activeStroke = [];
  const resp = questionResponses[qId];
  if (resp && resp.strokes) {
    currentStrokes = resp.strokes.map(st => st.map(p => ({ x: p.x, y: p.y })));
  } else {
    currentStrokes = [];
  }
  redrawCanvas();
}

// SUBMIT MODAL
function openSubmitSummaryModal() {
  saveActiveQuestionStrokes();
  recordTimeOnActiveQuestion();

  const tbody = document.getElementById("modalSummaryTableBody");
  tbody.innerHTML = "";

  testConfig.sections.forEach(secName => {
    const secQuestions = testConfig.questions.filter(q => q.section === secName);
    let ans = 0, notAns = 0, rev = 0, revAns = 0, notVis = 0;

    secQuestions.forEach(q => {
      const st = questionResponses[q.id].status;
      if (st === "ANSWERED") ans++;
      else if (st === "NOT_ANSWERED") notAns++;
      else if (st === "REVIEW") rev++;
      else if (st === "REVIEW_ANSWERED") revAns++;
      else notVis++;
    });

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="text-align:left; font-weight:bold;">${secName}</td>
      <td>${secQuestions.length}</td>
      <td style="color:#2e7d32; font-weight:bold;">${ans}</td>
      <td style="color:#c62828; font-weight:bold;">${notAns}</td>
      <td style="color:#6a1b9a;">${rev}</td>
      <td style="color:#6a1b9a; font-weight:bold;">${revAns}</td>
      <td style="color:#777;">${notVis}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("modalSummary").classList.remove("hidden");
}

function closeSubmitSummaryModal() {
  document.getElementById("modalSummary").classList.add("hidden");
}

function finishExam() {
  if (timerInterval) clearInterval(timerInterval);
  saveActiveQuestionStrokes();
  recordTimeOnActiveQuestion();
  closeSubmitSummaryModal();

  renderResultsDashboard();
  showScreen("screenResults");
}

// RESULTS DASHBOARD
function renderResultsDashboard() {
  document.getElementById("resultsExamTitleSubtitle").textContent = testConfig.examTitle;
  document.getElementById("resultsCandidateName").textContent = testConfig.candidateName;
  document.getElementById("resultsRollNumber").textContent = testConfig.rollNumber;

  let totalQuestions = testConfig.questions.length;
  let correctCount = 0, incorrectCount = 0, unattemptedCount = 0;
  let totalPositiveMarks = 0, totalNegativeMarks = 0, totalTimeSpent = 0;

  const secStats = {};
  testConfig.sections.forEach(s => {
    secStats[s] = { total: 0, attempted: 0, correct: 0, incorrect: 0, marks: 0, timeSpent: 0 };
  });

  testConfig.questions.forEach(q => {
    const resp = questionResponses[q.id];
    totalTimeSpent += resp.timeSpentSeconds;
    const s = q.section;
    secStats[s].total++;
    secStats[s].timeSpent += resp.timeSpentSeconds;

    const isEvaluated = (resp.status === "ANSWERED" || resp.status === "REVIEW_ANSWERED") && resp.selectedOption !== null;

    if (isEvaluated) {
      secStats[s].attempted++;
      if (resp.selectedOption === q.answer) {
        correctCount++;
        secStats[s].correct++;
        const pos = Number(q.marks || testConfig.posMarks);
        totalPositiveMarks += pos;
        secStats[s].marks += pos;
      } else {
        incorrectCount++;
        secStats[s].incorrect++;
        const neg = Number(q.negativeMarks !== undefined ? q.negativeMarks : testConfig.negMarks);
        totalNegativeMarks += neg;
        secStats[s].marks -= neg;
      }
    } else {
      unattemptedCount++;
    }
  });

  const finalScore = totalPositiveMarks - totalNegativeMarks;
  const maxScore = totalQuestions * testConfig.posMarks;
  const attemptedCount = correctCount + incorrectCount;
  const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : "0.0";
  const avgTime = totalQuestions > 0 ? Math.round(totalTimeSpent / totalQuestions) : 0;

  document.getElementById("resTotalScore").textContent = finalScore.toFixed(2);
  document.getElementById("resMaxScore").textContent = maxScore.toFixed(2);
  document.getElementById("resAccuracy").textContent = `${accuracy}%`;
  document.getElementById("resCorrectCount").textContent = correctCount;
  document.getElementById("resPositiveMarks").textContent = `+${totalPositiveMarks.toFixed(2)} marks`;
  document.getElementById("resIncorrectCount").textContent = incorrectCount;
  document.getElementById("resNegativeMarks").textContent = `-${totalNegativeMarks.toFixed(2)} marks`;
  document.getElementById("resUnattemptedCount").textContent = unattemptedCount;
  document.getElementById("resTotalTime").textContent = `${Math.floor(totalTimeSpent / 60)}m ${totalTimeSpent % 60}s`;
  document.getElementById("resAvgTime").textContent = `${avgTime}s`;

  const secTableBody = document.getElementById("resultsSectionTableBody");
  secTableBody.innerHTML = "";
  testConfig.sections.forEach(s => {
    const st = secStats[s];
    const secAcc = st.attempted > 0 ? ((st.correct / st.attempted) * 100).toFixed(1) : "0.0";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="text-align:left; font-weight:bold;">${s}</td>
      <td>${st.total}</td>
      <td>${st.attempted}</td>
      <td style="color:#2e7d32; font-weight:bold;">${st.correct}</td>
      <td style="color:#c62828; font-weight:bold;">${st.incorrect}</td>
      <td style="font-weight:bold; color:${st.marks >= 0 ? '#02385e' : '#c62828'};">${st.marks.toFixed(2)}</td>
      <td>${secAcc}%</td>
      <td>${Math.floor(st.timeSpent / 60)}m ${st.timeSpent % 60}s</td>
    `;
    secTableBody.appendChild(tr);
  });

  renderQuestionTimeTable("ALL");
  renderQuestionReviewCards("ALL");

  document.getElementById("reviewFilterSelect").onchange = (e) => {
    const filter = e.target.value;
    renderQuestionTimeTable(filter);
    renderQuestionReviewCards(filter);
  };
}

function renderQuestionTimeTable(filter) {
  const tbody = document.getElementById("questionTimeAnalysisTableBody");
  tbody.innerHTML = "";

  testConfig.questions.forEach(q => {
    const resp = questionResponses[q.id];
    const isEvaluated = (resp.status === "ANSWERED" || resp.status === "REVIEW_ANSWERED") && resp.selectedOption !== null;
    const isCorrect = isEvaluated && (resp.selectedOption === q.answer);
    const isIncorrect = isEvaluated && (resp.selectedOption !== q.answer);
    const isUnattempted = !isEvaluated;

    if (filter === "CORRECT" && !isCorrect) return;
    if (filter === "INCORRECT" && !isIncorrect) return;
    if (filter === "UNATTEMPTED" && !isUnattempted) return;

    let statusText = "Unattempted";
    let statusClass = "status-unattempted";
    let marksEarned = "0.00";

    if (isCorrect) {
      statusText = "Correct";
      statusClass = "status-correct";
      marksEarned = `+${Number(q.marks || testConfig.posMarks).toFixed(2)}`;
    } else if (isIncorrect) {
      statusText = "Incorrect";
      statusClass = "status-incorrect";
      marksEarned = `-${Number(q.negativeMarks !== undefined ? q.negativeMarks : testConfig.negMarks).toFixed(2)}`;
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${q.number}</strong></td>
      <td style="text-align:left;">${q.section}</td>
      <td><span class="review-status-badge ${statusClass}">${statusText}</span></td>
      <td><strong>${resp.selectedOption ? `(${resp.selectedOption})` : "-"}</strong></td>
      <td style="color:#2e7d32;"><strong>(${q.answer})</strong></td>
      <td style="font-weight:bold;">${marksEarned}</td>
      <td style="font-family:monospace; font-weight:bold; color:#02385e;">
        ⏱️ ${Math.floor(resp.timeSpentSeconds / 60)}m ${resp.timeSpentSeconds % 60}s (${resp.timeSpentSeconds}s)
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderQuestionReviewCards(filter) {
  const container = document.getElementById("reviewQuestionsContainer");
  container.innerHTML = "";

  testConfig.questions.forEach(q => {
    const resp = questionResponses[q.id];
    const isEvaluated = (resp.status === "ANSWERED" || resp.status === "REVIEW_ANSWERED") && resp.selectedOption !== null;
    const isCorrect = isEvaluated && (resp.selectedOption === q.answer);
    const isIncorrect = isEvaluated && (resp.selectedOption !== q.answer);
    const isUnattempted = !isEvaluated;

    if (filter === "CORRECT" && !isCorrect) return;
    if (filter === "INCORRECT" && !isIncorrect) return;
    if (filter === "UNATTEMPTED" && !isUnattempted) return;

    let statusBadge = `<span class="review-status-badge status-unattempted">Unattempted (0.00 marks)</span>`;
    if (isCorrect) {
      statusBadge = `<span class="review-status-badge status-correct">✔ Correct (+${Number(q.marks || testConfig.posMarks).toFixed(2)} marks)</span>`;
    } else if (isIncorrect) {
      statusBadge = `<span class="review-status-badge status-incorrect">✖ Incorrect (-${Number(q.negativeMarks !== undefined ? q.negativeMarks : testConfig.negMarks).toFixed(2)} marks)</span>`;
    }

    const card = document.createElement("div");
    card.className = "review-q-card";

    let optionsHtml = "";
    ["A", "B", "C", "D"].forEach(key => {
      if (q.options && q.options[key] !== undefined) {
        let optStyle = "padding:6px 10px; margin:4px 0; border-radius:3px; border:1px solid #ddd; font-size:12.5px;";
        let marker = `(${key})`;

        if (key === q.answer) {
          optStyle += " background:#e8f5e9; border-color:#81c784; font-weight:bold; color:#1b5e20;";
          marker += " ✔ (Correct Answer)";
        }
        if (resp.selectedOption === key && key !== q.answer) {
          optStyle += " background:#ffebee; border-color:#e57373; font-weight:bold; color:#b71c1c;";
          marker += " ✖ (Your Answer)";
        }

        optionsHtml += `<div style="${optStyle}"><strong>${marker}</strong> ${renderRichContent(q.options[key])}</div>`;
      }
    });

    let roughWorkHtml = "";
    if (resp.strokes && resp.strokes.length > 0) {
      let pathsSvg = "";
      resp.strokes.forEach(st => {
        if (st.length > 1) {
          let d = `M ${st[0].x} ${st[0].y}`;
          for (let i = 1; i < st.length; i++) d += ` L ${st[i].x} ${st[i].y}`;
          pathsSvg += `<path d="${d}" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
        }
      });
      roughWorkHtml = `
        <div class="rough-sheet-preview">
          <div style="font-size:11.5px; font-weight:bold; color:#02385e; margin-bottom:6px;">
            📝 Your Rough Work for this question:
          </div>
          <svg viewBox="0 0 1000 700" style="width:100%; max-height:260px; background:#fff; border:1px solid #ddd;">
            ${pathsSvg}
          </svg>
        </div>
      `;
    }

    let expBox = "";
    if (q.explanation && q.explanation.trim()) {
      expBox = `
        <div style="background:#e8f4fd; border-left:4px solid #0288d1; padding:8px 12px; margin-top:10px; border-radius:0 4px 4px 0; font-size:12px;">
          <strong>Explanation:</strong> ${renderRichContent(q.explanation)}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="review-q-header">
        <div>
          <strong style="color:#02385e; font-size:14px;">Question ${q.number}</strong> 
          <span style="font-size:12px; color:#555;">[Section: ${q.section}]</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:12px; color:#555; background:#f0f4f8; padding:2px 6px; border-radius:3px;">⏱️ Time: ${Math.floor(resp.timeSpentSeconds / 60)}m ${resp.timeSpentSeconds % 60}s</span>
          ${statusBadge}
        </div>
      </div>
      <div style="font-size:13.5px; line-height:1.5; margin-bottom:10px;">${renderRichContent(q.text)}</div>
      <div style="margin-bottom:10px;">${optionsHtml}</div>
      ${expBox}
      ${roughWorkHtml}
    `;

    container.appendChild(card);
  });
}

function exportResultsCSV() {
  let csv = "Question Number,Section,Question Text,Your Selected Option,Correct Answer,Status,Marks Earned,Time Spent (Seconds),Time Spent (Formatted)\n";
  testConfig.questions.forEach(q => {
    const resp = questionResponses[q.id];
    const isEvaluated = (resp.status === "ANSWERED" || resp.status === "REVIEW_ANSWERED") && resp.selectedOption !== null;
    const isCorrect = isEvaluated && (resp.selectedOption === q.answer);
    const isIncorrect = isEvaluated && (resp.selectedOption !== q.answer);

    let status = "Unattempted";
    let marks = 0.0;
    if (isCorrect) {
      status = "Correct";
      marks = Number(q.marks || testConfig.posMarks);
    } else if (isIncorrect) {
      status = "Incorrect";
      marks = -Number(q.negativeMarks !== undefined ? q.negativeMarks : testConfig.negMarks);
    }

    const timeFmt = `${Math.floor(resp.timeSpentSeconds / 60)}m ${resp.timeSpentSeconds % 60}s`;
    const cleanText = (q.text || "").replace(/"/g, '""').replace(/\n/g, ' ');
    csv += `"${q.number}","${q.section}","${cleanText}","${resp.selectedOption || ""}","${q.answer}","${status}",${marks.toFixed(2)},${resp.timeSpentSeconds},"${timeFmt}"\n`;
  });
  downloadBlob(csv, `CBT_Result_${testConfig.candidateName.replace(/\s+/g, '_')}_${Date.now()}.csv`, "text/csv;charset=utf-8;");
}

function exportResultsJSON() {
  const exportPayload = {
    testConfig: {
      examTitle: testConfig.examTitle,
      durationMinutes: testConfig.durationMinutes,
      posMarks: testConfig.posMarks,
      negMarks: testConfig.negMarks,
      candidateName: testConfig.candidateName,
      rollNumber: testConfig.rollNumber,
      totalQuestions: testConfig.questions.length
    },
    results: testConfig.questions.map(q => {
      const resp = questionResponses[q.id];
      return {
        number: q.number,
        section: q.section,
        text: q.text,
        options: q.options,
        userOption: resp.selectedOption,
        correctAnswer: q.answer,
        status: resp.status,
        timeSpentSeconds: resp.timeSpentSeconds
      };
    })
  };
  downloadBlob(JSON.stringify(exportPayload, null, 2), `CBT_Detailed_Report_${Date.now()}.json`, "application/json");
}

function downloadBlob(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// CREATOR & IMPORTER (SINGLE CLEAN UNIVERSAL FORMAT)
function openCreatorModal() {
  document.getElementById("cfgExamTitle").value = testConfig.examTitle;
  document.getElementById("cfgDuration").value = testConfig.durationMinutes;
  document.getElementById("cfgPosMarks").value = testConfig.posMarks;
  
  let textRep = "";
  testConfig.questions.forEach(q => {
    textRep += `[Section: ${q.section}]\n`;
    textRep += `Q${q.number}. ${q.text}\n`;
    textRep += `A) ${q.options.A || ""}\n`;
    textRep += `B) ${q.options.B || ""}\n`;
    textRep += `C) ${q.options.C || ""}\n`;
    textRep += `D) ${q.options.D || ""}\n`;
    textRep += `Ans: ${q.answer}\n`;
    if (q.explanation && q.explanation.trim()) {
      textRep += `Exp: ${q.explanation}\n`;
    }
    textRep += `\n`;
  });
  document.getElementById("inputUniversalText").value = textRep;
  document.getElementById("modalCreator").classList.remove("hidden");
}

function closeCreatorModal() {
  document.getElementById("modalCreator").classList.add("hidden");
  document.getElementById("creatorStatusMsg").textContent = "";
}

function parseUniversalQuestions(rawText, defaultPosMarks, defaultNegMarks) {
  if (!rawText || !rawText.trim()) return [];

  // 1. Split into sections
  const sectionChunks = rawText.split(/(?:\r?\n|^)\[?Section[:\-]?\s*([^\]\r\n]+)\]?/i);
  const sections = [];

  if (sectionChunks.length === 1) {
    sections.push(["General", sectionChunks[0]]);
  } else {
    if (sectionChunks[0].trim()) {
      sections.push(["General", sectionChunks[0]]);
    }
    for (let i = 1; i < sectionChunks.length; i += 2) {
      const secName = sectionChunks[i].trim();
      const secBody = (i + 1 < sectionChunks.length) ? sectionChunks[i + 1] : "";
      sections.push([secName, secBody]);
    }
  }

  const questions = [];
  let globalQNum = 1;

  for (let s = 0; s < sections.length; s++) {
    const secName = sections[s][0];
    const secBody = sections[s][1];

    // 2. Strict Question Chunking: Strictly matches Q<digits> or Question <digits> at line start.
    // Prevents lists like '1. High efficiency' from ever creating ghost questions!
    const qBlocks = secBody.split(/(?:\r?\n|^)(?=Q(?:uestion)?\.?\s*\d+[:.)\s])/i);

    for (let b = 0; b < qBlocks.length; b++) {
      const block = qBlocks[b].trim();
      if (!block) continue;

      const headerMatch = block.match(/^Q(?:uestion)?\.?\s*(\d+)[:.)\s]*([\s\S]*)/i);
      if (!headerMatch) continue;

      const blockContent = headerMatch[2].trim();

      // 3. Extract Explanation (Exp: or Solution:)
      let explanation = "";
      let contentWithoutExp = blockContent;
      const expMatch = blockContent.match(/(?:\r?\n|^)\s*(?:Exp(?:lanation)?|Solution)[-:]?\s*([\s\S]*)/i);
      if (expMatch) {
        explanation = expMatch[1].trim();
        contentWithoutExp = blockContent.substring(0, expMatch.index).trim();
      }

      // 4. Extract Answer Key (Ans: <Letter>)
      let ans = "A";
      let contentBeforeAns = contentWithoutExp;
      const ansMatch = contentWithoutExp.match(/(?:\r?\n|^)\s*(?:Ans(?:wer)?|Correct)[-:=\s]*([A-Da-d])(?:\s*[\r\n]|\s*$)/i);
      if (ansMatch) {
        ans = ansMatch[1].toUpperCase();
        contentBeforeAns = contentWithoutExp.substring(0, ansMatch.index).trim();
      } else {
        const ansFallback = blockContent.match(/(?:\r?\n|^)\s*(?:Ans(?:wer)?|Correct)[-:=\s]*([A-Da-d])/i);
        if (ansFallback) {
          ans = ansFallback[1].toUpperCase();
        }
      }

      // 5. Reverse Anchor Options Search: Find the LAST A -> B -> C -> D before Ans:
      // Guarantees statements like 'A) Statement 1' in the question text are NEVER mistaken for options!
      const optRegex = /(?:\r?\n|^)\s*[\(\[]?([A-Da-d])[\)\]\.:]\s*(.*)/g;
      const optMatches = [];
      let m;
      while ((m = optRegex.exec(contentBeforeAns)) !== null) {
        optMatches.push({
          letter: m[1].toUpperCase(),
          index: m.index,
          fullMatch: m[0]
        });
      }

      const options = {};
      let qText = contentBeforeAns;

      const candA = optMatches.filter(item => item.letter === 'A');
      const candB = optMatches.filter(item => item.letter === 'B');
      const candC = optMatches.filter(item => item.letter === 'C');
      const candD = optMatches.filter(item => item.letter === 'D');

      if (candA.length > 0 && candB.length > 0 && candC.length > 0 && candD.length > 0) {
        const ma = candA[candA.length - 1];
        const bAfterA = candB.filter(item => item.index > ma.index);
        if (bAfterA.length > 0) {
          const mb = bAfterA[bAfterA.length - 1];
          const cAfterB = candC.filter(item => item.index > mb.index);
          if (cAfterB.length > 0) {
            const mc = cAfterB[cAfterB.length - 1];
            const dAfterC = candD.filter(item => item.index > mc.index);
            if (dAfterC.length > 0) {
              const md = dAfterC[dAfterC.length - 1];

              // Question body is strictly everything before Option A
              qText = contentBeforeAns.substring(0, ma.index).trim();

              // Extract clean options
              const optARaw = contentBeforeAns.substring(ma.index, mb.index).trim();
              options['A'] = optARaw.replace(/^\s*[\(\[]?A[\)\]\.:]\s*/, '').trim();

              const optBRaw = contentBeforeAns.substring(mb.index, mc.index).trim();
              options['B'] = optBRaw.replace(/^\s*[\(\[]?B[\)\]\.:]\s*/, '').trim();

              const optCRaw = contentBeforeAns.substring(mc.index, md.index).trim();
              options['C'] = optCRaw.replace(/^\s*[\(\[]?C[\)\]\.:]\s*/, '').trim();

              const optDRaw = contentBeforeAns.substring(md.index).trim();
              options['D'] = optDRaw.replace(/^\s*[\(\[]?D[\)\]\.:]\s*/, '').trim();
            }
          }
        }
      }

      questions.push({
        id: `q_${globalQNum}`,
        section: secName,
        number: globalQNum,
        text: qText,
        options: options,
        answer: ans,
        explanation: explanation,
        marks: defaultPosMarks,
        negativeMarks: defaultNegMarks
      });
      globalQNum++;
    }
  }

  return questions;
}

function handleSaveAndStartCreator() {
  const title = document.getElementById("cfgExamTitle").value.trim() || "CBT Practice Examination";
  const duration = parseInt(document.getElementById("cfgDuration").value, 10) || 120;
  const posMarks = parseFloat(document.getElementById("cfgPosMarks").value) || 1.0;
  
  let negMarks = 0.333333;
  const negSelect = document.getElementById("cfgNegMarkingSelect").value;
  if (negSelect === "custom") {
    negMarks = parseFloat(document.getElementById("cfgCustomNeg").value) || 0.0;
  } else {
    negMarks = parseFloat(negSelect);
  }

  const rawText = document.getElementById("inputUniversalText").value.trim();
  if (!rawText) {
    document.getElementById("creatorStatusMsg").textContent = "❌ Please enter questions in the box.";
    document.getElementById("creatorStatusMsg").style.color = "#c62828";
    return;
  }

  try {
    const parsedQuestions = parseUniversalQuestions(rawText, posMarks, negMarks);
    if (!parsedQuestions || parsedQuestions.length === 0) {
      throw new Error("No valid questions found. Ensure questions start with Q1., Q2. and have options A), B), C), D).");
    }

    testConfig = {
      examTitle: title,
      durationMinutes: duration,
      posMarks: posMarks,
      negMarks: negMarks,
      candidateName: document.getElementById("loginInputName").value.trim() || "Rohit Singh",
      rollNumber: document.getElementById("loginInputRoll").value.trim() || "2026-EE-499",
      systemName: "C001",
      questions: parsedQuestions
    };

    localStorage.setItem("cbt_test_config", JSON.stringify(testConfig));

    closeCreatorModal();
    initDOM();
    loadConfigToUI();

    alert(`Successfully loaded ${parsedQuestions.length} questions across ${new Set(parsedQuestions.map(q => q.section)).size} sections! Starting test now.`);
    startExam();

  } catch (err) {
    document.getElementById("creatorStatusMsg").textContent = "❌ Error: " + err.message;
    document.getElementById("creatorStatusMsg").style.color = "#c62828";
  }
}

function openQuestionPaperModal() {
  const container = document.getElementById("questionPaperModalBody");
  container.innerHTML = "";

  testConfig.sections.forEach(secName => {
    const secHeader = document.createElement("div");
    secHeader.style.cssText = "background:#004080; color:#fff; padding:6px 12px; font-weight:bold; margin-top:12px; border-radius:3px;";
    secHeader.textContent = `Section: ${secName}`;
    container.appendChild(secHeader);

    const secQuestions = testConfig.questions.filter(q => q.section === secName);
    secQuestions.forEach(q => {
      const qDiv = document.createElement("div");
      qDiv.style.cssText = "padding:10px 14px; border-bottom:1px solid #e0e0e0; font-size:12.5px;";
      
      let opts = "";
      ["A", "B", "C", "D"].forEach(k => {
        if (q.options && q.options[k] !== undefined) {
          opts += `<div style="margin:2px 0 2px 14px;"><strong>(${k})</strong> ${renderRichContent(q.options[k])}</div>`;
        }
      });

      qDiv.innerHTML = `
        <div style="font-weight:bold; color:#02385e; margin-bottom:4px;">Q.${q.number}</div>
        <div style="margin-bottom:6px;">${renderRichContent(q.text)}</div>
        ${opts}
      `;
      container.appendChild(qDiv);
    });
  });

  document.getElementById("modalQuestionPaper").classList.remove("hidden");
}

function initCalculator() {
  const keys = [
    "C", "(", ")", "/",
    "sin", "cos", "tan", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "^",
    "0", ".", "sqrt", "="
  ];

  const grid = document.getElementById("calcKeysGrid");
  grid.innerHTML = "";
  const display = document.getElementById("calcDisplay");

  keys.forEach(k => {
    const btn = document.createElement("button");
    btn.textContent = k;
    btn.style.cssText = "padding:10px 4px; font-size:14px; font-weight:bold; border-radius:3px; border:1px solid #aaa; background:#fff; cursor:pointer;";
    if (k === "=") {
      btn.style.background = "#0275d8";
      btn.style.color = "#fff";
    } else if (k === "C") {
      btn.style.background = "#d9534f";
      btn.style.color = "#fff";
    }

    btn.addEventListener("click", () => {
      if (k === "C") {
        display.value = "";
      } else if (k === "=") {
        try {
          let expr = display.value
            .replace(/sin\(/g, "Math.sin(")
            .replace(/cos\(/g, "Math.cos(")
            .replace(/tan\(/g, "Math.tan(")
            .replace(/sqrt\(/g, "Math.sqrt(")
            .replace(/\^/g, "**");
          display.value = eval(expr);
        } catch (e) {
          display.value = "Error";
        }
      } else if (["sin", "cos", "tan", "sqrt"].includes(k)) {
        display.value += `${k}(`;
      } else {
        display.value += k;
      }
    });

    grid.appendChild(btn);
  });
}

function insertIntoActiveTextarea(content) {
  const targetArea = document.getElementById("inputUniversalText");
  if (!targetArea) return;
  const start = targetArea.selectionStart;
  const end = targetArea.selectionEnd;
  const oldVal = targetArea.value;
  targetArea.value = oldVal.substring(0, start) + "\n" + content + "\n" + oldVal.substring(end);
  targetArea.focus();
  targetArea.selectionStart = targetArea.selectionEnd = start + content.length + 2;
}

function setupEventListeners() {
  document.getElementById("loginSubmitBtn").addEventListener("click", () => {
    const name = document.getElementById("loginInputName").value.trim();
    const roll = document.getElementById("loginInputRoll").value.trim();
    if (name) testConfig.candidateName = name;
    if (roll) testConfig.rollNumber = roll;
    loadConfigToUI();
    showScreen("screenInstructions");
  });

  document.getElementById("loginConfigBtn").addEventListener("click", openCreatorModal);
  document.getElementById("openCreatorBtn").addEventListener("click", openCreatorModal);

  document.getElementById("instBackBtn").addEventListener("click", () => showScreen("screenLogin"));
  document.getElementById("instNextBtn").addEventListener("click", () => showScreen("screenDeclaration"));

  document.getElementById("declPrevBtn").addEventListener("click", () => showScreen("screenInstructions"));
  const declCheckbox = document.getElementById("declarationCheckbox");
  const readyBtn = document.getElementById("readyToBeginBtn");

  declCheckbox.addEventListener("change", (e) => {
    readyBtn.disabled = !e.target.checked;
    readyBtn.style.opacity = e.target.checked ? "1" : "0.5";
    readyBtn.style.cursor = e.target.checked ? "pointer" : "not-allowed";
  });

  readyBtn.addEventListener("click", () => {
    if (!declCheckbox.checked) return;
    startExam();
  });

  document.getElementById("btnSaveNext").addEventListener("click", handleSaveNext);
  document.getElementById("btnMarkReviewNext").addEventListener("click", handleMarkReviewNext);
  document.getElementById("btnClearResponse").addEventListener("click", handleClearResponse);
  document.getElementById("btnPaletteSubmit").addEventListener("click", openSubmitSummaryModal);

  const toggleBtn = document.getElementById("btnTogglePalette");
  toggleBtn.addEventListener("click", () => {
    const palette = document.getElementById("examPalettePanel");
    palette.classList.toggle("collapsed");
    const isCollapsed = palette.classList.contains("collapsed");
    toggleBtn.innerHTML = isCollapsed ? "&lt;" : "&gt;";
    toggleBtn.title = isCollapsed ? "Expand Question Palette" : "Collapse Question Palette";
  });

  document.getElementById("btnOpenPaper").addEventListener("click", openQuestionPaperModal);
  document.getElementById("closePaperModalX").addEventListener("click", () => document.getElementById("modalQuestionPaper").classList.add("hidden"));
  document.getElementById("closePaperModalBtn").addEventListener("click", () => document.getElementById("modalQuestionPaper").classList.add("hidden"));

  document.getElementById("btnOpenInstructions").addEventListener("click", () => {
    document.getElementById("modalInstructionsPopup").classList.remove("hidden");
  });
  document.getElementById("closeInstPopupX").addEventListener("click", () => {
    document.getElementById("modalInstructionsPopup").classList.add("hidden");
  });
  document.getElementById("closeInstPopupBtn").addEventListener("click", () => {
    document.getElementById("modalInstructionsPopup").classList.add("hidden");
  });

  initCalculator();
  document.getElementById("btnOpenCalc").addEventListener("click", () => {
    document.getElementById("modalCalc").classList.remove("hidden");
  });
  document.getElementById("closeCalcModalX").addEventListener("click", () => {
    document.getElementById("modalCalc").classList.add("hidden");
  });
  document.getElementById("closeCalcModalBtn").addEventListener("click", () => {
    document.getElementById("modalCalc").classList.add("hidden");
  });

  document.getElementById("closeSummaryModalX").addEventListener("click", closeSubmitSummaryModal);
  document.getElementById("modalSummaryCancelBtn").addEventListener("click", closeSubmitSummaryModal);
  document.getElementById("modalSummaryConfirmBtn").addEventListener("click", finishExam);

  document.getElementById("closeCreatorModalX").addEventListener("click", closeCreatorModal);
  document.getElementById("btnCreatorCancel").addEventListener("click", closeCreatorModal);
  document.getElementById("btnCreatorSaveStart").addEventListener("click", handleSaveAndStartCreator);

  document.getElementById("cfgNegMarkingSelect").addEventListener("change", (e) => {
    const isCustom = e.target.value === "custom";
    document.getElementById("customNegGroup").style.display = isCustom ? "flex" : "none";
  });

  // Creator Universal Handlers
  document.getElementById("btnLoadSampleExam").addEventListener("click", () => {
    document.getElementById("cfgExamTitle").value = DEFAULT_TEST_CONFIG.examTitle;
    document.getElementById("cfgDuration").value = DEFAULT_TEST_CONFIG.durationMinutes;
    document.getElementById("cfgPosMarks").value = DEFAULT_TEST_CONFIG.posMarks;
    document.getElementById("cfgNegMarkingSelect").value = "0.333333";

    let textRep = "";
    DEFAULT_TEST_CONFIG.questions.forEach(q => {
      textRep += `[Section: ${q.section}]\n`;
      textRep += `Q${q.number}. ${q.text}\n`;
      textRep += `A) ${q.options.A || ""}\n`;
      textRep += `B) ${q.options.B || ""}\n`;
      textRep += `C) ${q.options.C || ""}\n`;
      textRep += `D) ${q.options.D || ""}\n`;
      textRep += `Ans: ${q.answer}\n`;
      if (q.explanation && q.explanation.trim()) {
        textRep += `Exp: ${q.explanation}\n`;
      }
      textRep += `\n`;
    });
    document.getElementById("inputUniversalText").value = textRep;
    document.getElementById("creatorStatusMsg").textContent = "Loaded Sample Questions!";
    document.getElementById("creatorStatusMsg").style.color = "#2e7d32";
  });

  document.getElementById("btnCopyTemplate").addEventListener("click", () => {
    const template = `[Section: General Aptitude]
Q1. Sample aptitude question text here?
A) Option A
B) Option B
C) Option C
D) Option D
Ans: A

[Section: Electrical Engineering]
Q2. For the circuit shown below, determine the output voltage:
![Circuit Diagram](circuit.png)
\`\`\`c
// Optional code block if needed
\`\`\`
| Parameter | Value |
| Voltage | 24 V |
A) 12 V
B) 16 V
C) 20 V
D) 24 V
Ans: B
Exp: Step-by-step calculation here...`;

    navigator.clipboard.writeText(template).then(() => alert("Universal Format template copied to clipboard!"));
  });

  // Direct Clipboard Image Paste (Ctrl+V) into textarea
  const universalTextarea = document.getElementById("inputUniversalText");
  if (universalTextarea) {
    universalTextarea.addEventListener("paste", (e) => {
      const items = (e.clipboardData || window.clipboardData).items;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === "file" && item.type.startsWith("image/")) {
          const file = item.getAsFile();
          const reader = new FileReader();
          reader.onload = (ev) => {
            const base64Url = ev.target.result;
            const imgTag = `![Pasted Image](${base64Url})\n`;
            insertIntoActiveTextarea(imgTag);
            document.getElementById("creatorStatusMsg").textContent = "✔ Image pasted from clipboard!";
            document.getElementById("creatorStatusMsg").style.color = "#2e7d32";
          };
          reader.readAsDataURL(file);
        }
      }
    });
  }

  document.getElementById("modalImageZoom").addEventListener("click", () => {
    document.getElementById("modalImageZoom").classList.add("hidden");
  });

  document.getElementById("btnExportCSV").addEventListener("click", exportResultsCSV);
  document.getElementById("btnExportJSON").addEventListener("click", exportResultsJSON);
  document.getElementById("btnPrintReport").addEventListener("click", () => window.print());
  document.getElementById("btnRetakeTest").addEventListener("click", () => {
    if (confirm("Retake test from the beginning?")) startExam();
  });
  document.getElementById("btnCreateAnotherTest").addEventListener("click", () => {
    showScreen("screenLogin");
    openCreatorModal();
  });
}
