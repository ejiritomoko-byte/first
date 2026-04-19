const totalQuestions = 10;

const tips = {
  add: "たし算は あわせて いくつかを かんがえると わかりやすいよ。",
  sub: "ひき算は どれだけ へるかを えにして そうぞうすると いいよ。",
};

let mode = "add";
let questionIndex = 0;
let score = 0;
let correctCount = 0;
let currentQuestion = null;
let answered = false;
let history = [];

const progressTextEl = document.getElementById("progress-text");
const scoreTextEl = document.getElementById("score-text");
const correctTextEl = document.getElementById("correct-text");
const questionTextEl = document.getElementById("question-text");
const messageTextEl = document.getElementById("message-text");
const tipTextEl = document.getElementById("tip-text");
const answerGridEl = document.getElementById("answer-grid");
const historyListEl = document.getElementById("history-list");
const nextButtonEl = document.getElementById("next-button");
const resultScreenEl = document.getElementById("result-screen");
const resultTitleEl = document.getElementById("result-title");
const resultCopyEl = document.getElementById("result-copy");
const addModeEl = document.getElementById("add-mode");
const subModeEl = document.getElementById("sub-mode");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeQuestion() {
  let left = 0;
  let right = 0;
  let answer = 0;
  let symbol = "+";

  if (mode === "add") {
    left = randomInt(1, 20);
    right = randomInt(1, 20);
    answer = left + right;
    symbol = "+";
  } else {
    left = randomInt(5, 20);
    right = randomInt(1, left);
    answer = left - right;
    symbol = "-";
  }

  const choices = new Set([answer]);
  while (choices.size < 4) {
    const offset = randomInt(-5, 5) || 2;
    const candidate = Math.max(0, answer + offset);
    choices.add(candidate);
  }

  return {
    left,
    right,
    answer,
    symbol,
    choices: shuffle([...choices]),
  };
}

function renderStatus() {
  progressTextEl.textContent = `${questionIndex + 1} / ${totalQuestions}`;
  scoreTextEl.textContent = String(score);
  correctTextEl.textContent = String(correctCount);
  tipTextEl.textContent = tips[mode];
  addModeEl.classList.toggle("active", mode === "add");
  subModeEl.classList.toggle("active", mode === "sub");
}

function renderHistory() {
  historyListEl.innerHTML = "";

  if (history.length === 0) {
    historyListEl.classList.add("empty");
    return;
  }

  historyListEl.classList.remove("empty");

  const items = history.map((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.label} : ${item.result}`;
    return li;
  });

  historyListEl.replaceChildren(...items);
}

function renderAnswers() {
  const buttons = currentQuestion.choices.map((choice) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = String(choice);
    button.addEventListener("click", () => handleAnswer(choice, button));
    return button;
  });

  answerGridEl.replaceChildren(...buttons);
}

function showQuestion() {
  answered = false;
  nextButtonEl.disabled = true;
  currentQuestion = makeQuestion();
  questionTextEl.textContent = `${currentQuestion.left} ${currentQuestion.symbol} ${currentQuestion.right} = ?`;
  messageTextEl.textContent = "したの こたえを えらんでね。";
  renderStatus();
  renderAnswers();
  renderHistory();
}

function handleAnswer(choice, selectedButton) {
  if (answered) return;

  answered = true;
  nextButtonEl.disabled = false;

  const buttons = answerGridEl.querySelectorAll(".answer-button");
  buttons.forEach((button) => {
    button.disabled = true;
    if (Number(button.textContent) === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  const label = `${currentQuestion.left} ${currentQuestion.symbol} ${currentQuestion.right} = ${currentQuestion.answer}`;

  if (choice === currentQuestion.answer) {
    score += 10;
    correctCount += 1;
    selectedButton.classList.add("correct");
    messageTextEl.textContent = "せいかい！ このちょうし。";
    history.unshift({ label, result: "せいかい" });
  } else {
    selectedButton.classList.add("wrong");
    messageTextEl.textContent = `おしい。こたえは ${currentQuestion.answer} だよ。`;
    history.unshift({ label, result: "ざんねん" });
  }

  history = history.slice(0, totalQuestions);
  renderStatus();
  renderHistory();
}

function showResult() {
  resultScreenEl.classList.remove("hidden");
  resultScreenEl.setAttribute("aria-hidden", "false");

  if (score === 100) {
    resultTitleEl.textContent = "すごい！ まんてん！";
    resultCopyEl.textContent = "10もん ぜんぶ せいかい。すばらしい しゅうちゅうりょくだね。";
  } else if (score >= 70) {
    resultTitleEl.textContent = "よくできました！";
    resultCopyEl.textContent = `${correctCount}もん せいかいで ${score}てん。あと すこしで まんてんだよ。`;
  } else {
    resultTitleEl.textContent = "がんばったね！";
    resultCopyEl.textContent = `${correctCount}もん せいかいで ${score}てん。もういちど ちょうせんしてみよう。`;
  }
}

function hideResult() {
  resultScreenEl.classList.add("hidden");
  resultScreenEl.setAttribute("aria-hidden", "true");
}

function restartGame() {
  questionIndex = 0;
  score = 0;
  correctCount = 0;
  history = [];
  hideResult();
  showQuestion();
}

function moveNext() {
  if (!answered) return;

  if (questionIndex >= totalQuestions - 1) {
    showResult();
    return;
  }

  questionIndex += 1;
  showQuestion();
}

function changeMode(nextMode) {
  mode = nextMode;
  restartGame();
}

nextButtonEl.addEventListener("click", moveNext);
document.getElementById("restart-button").addEventListener("click", restartGame);
document.getElementById("result-restart").addEventListener("click", restartGame);
addModeEl.addEventListener("click", () => changeMode("add"));
subModeEl.addEventListener("click", () => changeMode("sub"));

restartGame();
