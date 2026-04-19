const stages = [
  {
    title: "ステージ 1",
    tip: "まえへを つかって、まっすぐ ゴールへ すすもう。",
    message: "まずは れんしゅう。ピコを ゴールまで つれていこう。",
    start: { x: 0, y: 2, dir: 1 },
    goal: { x: 3, y: 2 },
    walls: [],
  },
  {
    title: "ステージ 2",
    tip: "みぎむくや ひだりむくを つかうと、みちを まがれるよ。",
    message: "かどを まがって ゴールへ。むきを よくみよう。",
    start: { x: 0, y: 4, dir: 1 },
    goal: { x: 2, y: 2 },
    walls: [{ x: 1, y: 4 }, { x: 1, y: 3 }],
  },
  {
    title: "ステージ 3",
    tip: "いわに ぶつからない じゅんばんを かんがえよう。",
    message: "さいごまで あきらめずに、みちを さがしてみよう。",
    start: { x: 0, y: 0, dir: 1 },
    goal: { x: 4, y: 4 },
    walls: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 1, y: 3 }, { x: 3, y: 3 }],
  },
  {
    title: "ステージ 4",
    tip: "いちど したへ すすんでから、みぎへ まがると うまくいくよ。",
    message: "ジグザグの みちだよ。ぶつからない ルートを みつけよう。",
    start: { x: 0, y: 0, dir: 2 },
    goal: { x: 4, y: 2 },
    walls: [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 3, y: 2 }],
  },
  {
    title: "ステージ 5",
    tip: "したへ すすむか、うえへ すすむか、むきを よくたしかめよう。",
    message: "まんなかの いわを さけて、ゴールまで すすもう。",
    start: { x: 4, y: 0, dir: 2 },
    goal: { x: 0, y: 4 },
    walls: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
  },
  {
    title: "ステージ 6",
    tip: "ながいみちでも、1つずつ おちついて かんがえれば だいじょうぶ。",
    message: "ぐるっと まわる ステージ。どこで まがるかが ポイントだよ。",
    start: { x: 0, y: 4, dir: 0 },
    goal: { x: 4, y: 0 },
    walls: [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
  },
  {
    title: "ステージ 7",
    tip: "いきどまりに みえたら、はやめに むきを かえてみよう。",
    message: "せまい みちを ぬける チャレンジ。じゅんばんが だいじ。",
    start: { x: 2, y: 4, dir: 0 },
    goal: { x: 4, y: 1 },
    walls: [{ x: 0, y: 3 }, { x: 1, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }],
  },
  {
    title: "ステージ 8",
    tip: "さいごは これまでの コツを ぜんぶ つかってみよう。",
    message: "ラストステージ。ピコを ゴールまで みちびいて ぜんぶクリアしよう。",
    start: { x: 0, y: 2, dir: 1 },
    goal: { x: 4, y: 2 },
    walls: [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 3, y: 0 },
      { x: 3, y: 1 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ],
  },
  {
    title: "ステージ 9",
    tip: "ちかみちに みえても いきどまり かもしれないよ。さきまで そうぞうしてみよう。",
    message: "ここから むずかしめ。まわりみちを みつけられるかな。",
    start: { x: 0, y: 4, dir: 1 },
    goal: { x: 4, y: 0 },
    walls: [
      { x: 1, y: 4 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 1 },
      { x: 2, y: 0 },
    ],
  },
  {
    title: "ステージ 10",
    tip: "いちど ゴールと はんたいがわへ すすむのが コツだよ。",
    message: "すぐ ゴールへは いけないよ。どこで まわるかが だいじ。",
    start: { x: 4, y: 4, dir: 3 },
    goal: { x: 0, y: 0 },
    walls: [
      { x: 3, y: 4 },
      { x: 2, y: 4 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 1 },
    ],
  },
  {
    title: "ステージ 11",
    tip: "まがる タイミングが ずれると ぶつかりやすいよ。1こずつ たしかめよう。",
    message: "せまい みちが つづくよ。ていねいに じゅんばんを くもう。",
    start: { x: 2, y: 4, dir: 0 },
    goal: { x: 4, y: 2 },
    walls: [
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 4, y: 4 },
      { x: 3, y: 3 },
      { x: 3, y: 1 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
    ],
  },
  {
    title: "ステージ 12",
    tip: "さいごの ちょうせん。ながい ルートを あたまの なかで たどってみよう。",
    message: "あと ひといき。かなり むずかしい ステージだよ。",
    start: { x: 0, y: 0, dir: 1 },
    goal: { x: 4, y: 4 },
    walls: [
      { x: 1, y: 1 },
      { x: 3, y: 0 },
      { x: 3, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 3, y: 2 },
      { x: 4, y: 2 },
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
    ],
  },
  {
    title: "さいしゅう ステージ",
    tip: "ゴールへ まっすぐ むかうだけでは たどりつけないよ。とおまわりの 価値を かんがえよう。",
    message: "ほんとうの ラストチャレンジ。クリアできたら プログラミングめいじん。",
    start: { x: 0, y: 4, dir: 1 },
    goal: { x: 4, y: 0 },
    walls: [
      { x: 1, y: 4 },
      { x: 3, y: 4 },
      { x: 1, y: 3 },
      { x: 3, y: 3 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 1 },
      { x: 1, y: 1 },
    ],
  },
];

const boardSize = 5;
const directionNames = ["うえ", "みぎ", "した", "ひだり"];
const directionIcons = ["^", ">", "v", "<"];
const commandLabels = {
  forward: "まえへ",
  left: "ひだりむく",
  right: "みぎむく",
};

let stageIndex = 0;
let program = [];
let robot = null;
let isRunning = false;

const boardEl = document.getElementById("board");
const programListEl = document.getElementById("program-list");
const stageTitleEl = document.getElementById("stage-title");
const stageMessageEl = document.getElementById("stage-message");
const tipTextEl = document.getElementById("tip-text");
const robotDirectionEl = document.getElementById("robot-direction");
const nextStageButton = document.getElementById("next-stage");
const celebrationScreenEl = document.getElementById("celebration-screen");
const celebrationRestartEl = document.getElementById("celebration-restart");

function cloneStartPosition(stage) {
  return { ...stage.start };
}

function getStage() {
  return stages[stageIndex];
}

function showCelebration() {
  celebrationScreenEl.classList.remove("hidden");
  celebrationScreenEl.setAttribute("aria-hidden", "false");
}

function hideCelebration() {
  celebrationScreenEl.classList.add("hidden");
  celebrationScreenEl.setAttribute("aria-hidden", "true");
}

function resetStage() {
  hideCelebration();
  robot = cloneStartPosition(getStage());
  isRunning = false;
  render();
}

function setMessage(text) {
  stageMessageEl.textContent = text;
}

function renderBoard() {
  const stage = getStage();
  const cells = [];

  for (let y = 0; y < boardSize; y += 1) {
    for (let x = 0; x < boardSize; x += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";

      if (x === stage.goal.x && y === stage.goal.y) {
        cell.classList.add("goal");
        cell.textContent = "★";
      }

      if (x === stage.start.x && y === stage.start.y) {
        cell.classList.add("start");
      }

      if (stage.walls.some((wall) => wall.x === x && wall.y === y)) {
        cell.classList.add("wall");
        cell.textContent = "■";
      }

      if (robot.x === x && robot.y === y) {
        cell.classList.add("robot");
        cell.textContent = directionIcons[robot.dir];
      }

      cells.push(cell);
    }
  }

  boardEl.replaceChildren(...cells);
}

function renderProgram() {
  programListEl.innerHTML = "";

  if (program.length === 0) {
    programListEl.classList.add("empty");
    return;
  }

  programListEl.classList.remove("empty");

  const items = program.map((command, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${commandLabels[command]}`;
    return item;
  });

  programListEl.replaceChildren(...items);
}

function render() {
  const stage = getStage();
  stageTitleEl.textContent = `${stage.title} / ${stages.length}`;
  tipTextEl.textContent = stage.tip;
  robotDirectionEl.textContent = directionNames[robot.dir];
  nextStageButton.textContent = stageIndex >= stages.length - 1
    ? "さいしょから あそぶ"
    : "つぎの ステージ";
  renderBoard();
  renderProgram();
}

function isWall(x, y) {
  return getStage().walls.some((wall) => wall.x === x && wall.y === y);
}

function isOutOfBounds(x, y) {
  return x < 0 || y < 0 || x >= boardSize || y >= boardSize;
}

function sleep(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function runProgram() {
  if (isRunning || program.length === 0) {
    if (program.length === 0) {
      setMessage("めいれいを 1ついじょう ならべてみよう。");
    }
    return;
  }

  isRunning = true;
  setMessage("ピコが うごいているよ。おうえんしよう。");

  for (const command of program) {
    if (command === "left") {
      robot.dir = (robot.dir + 3) % 4;
    }

    if (command === "right") {
      robot.dir = (robot.dir + 1) % 4;
    }

    if (command === "forward") {
      const next = { ...robot };

      if (robot.dir === 0) next.y -= 1;
      if (robot.dir === 1) next.x += 1;
      if (robot.dir === 2) next.y += 1;
      if (robot.dir === 3) next.x -= 1;

      if (isOutOfBounds(next.x, next.y)) {
        setMessage("そとに でることは できないよ。べつの じゅんばんを ためそう。");
        isRunning = false;
        render();
        return;
      }

      if (isWall(next.x, next.y)) {
        setMessage("いわに ぶつかっちゃった。むきを かえてみよう。");
        isRunning = false;
        render();
        return;
      }

      robot = next;
    }

    render();
    await sleep(650);
  }

  const stage = getStage();
  if (robot.x === stage.goal.x && robot.y === stage.goal.y) {
    if (stageIndex >= stages.length - 1) {
      setMessage("やったね。ぜんぶ クリア。『もういちど あそぶ』で さいしょから ちょうせんできるよ。");
      showCelebration();
    } else {
      setMessage("やったね。ゴールせいこう。つぎの ステージへ すすもう。");
    }
  } else {
    setMessage("もうすこしで ゴール。どこまで いったか みて なおしてみよう。");
  }

  isRunning = false;
}

function addCommand(command) {
  if (isRunning) return;
  program.push(command);
  renderProgram();
}

document.querySelectorAll("[data-command]").forEach((button) => {
  button.addEventListener("click", () => {
    addCommand(button.dataset.command);
  });
});

document.getElementById("clear-program").addEventListener("click", () => {
  if (isRunning) return;
  program = [];
  renderProgram();
  setMessage("めいれいを けしたよ。あたらしく つくってみよう。");
});

document.getElementById("undo-command").addEventListener("click", () => {
  if (isRunning || program.length === 0) return;
  program.pop();
  renderProgram();
  setMessage("さいごの めいれいを 1つ けしたよ。");
});

document.getElementById("reset-stage").addEventListener("click", () => {
  resetStage();
  setMessage(getStage().message);
});

document.getElementById("run-program").addEventListener("click", () => {
  runProgram();
});

nextStageButton.addEventListener("click", () => {
  stageIndex = stageIndex < stages.length - 1 ? stageIndex + 1 : 0;
  program = [];
  resetStage();
  setMessage(getStage().message);
});

celebrationRestartEl.addEventListener("click", () => {
  stageIndex = 0;
  program = [];
  resetStage();
  setMessage(getStage().message);
});

resetStage();
setMessage(getStage().message);
