const pairs = [
  { key: "EI", left: "E", right: "I", leftName: "外向社交", rightName: "内向观察" },
  { key: "TC", left: "T", right: "C", leftName: "高调表达", rightName: "克制表达" },
  { key: "RP", left: "R", right: "P", leftName: "感性表达", rightName: "务实执行" },
  { key: "AF", left: "A", right: "F", leftName: "进取争先", rightName: "随性松弛" },
];

const letterRemarks = {
  E: "你更习惯主动打开社交场面。",
  I: "你更习惯先观察再表达。",
  T: "你更愿意用鲜明方式表达自己。",
  C: "你更偏向稳定、克制和收束。",
  R: "你重视情绪价值和表达感。",
  P: "你重视效率、实用和结果。",
  A: "你有明显的目标感和推进力。",
  F: "你更在意舒适和自然节奏。",
};

const characters = {
  草籽: {
    profile: { EI: "E", TC: "T", RP: "P", AF: "A" },
    tagline: "虹口区人脉王",
    bio: "虹口区人脉王，喜欢刷抖音并在评论区里@100个朋友。现居香港，平时的爱好是帮别人代购 Apple 产品和囤茅台。",
    verdict: "你很会做社交扩散，也很会调动资源。",
  },
  皇家驿: {
    profile: { EI: "I", TC: "C", RP: "R", AF: "F" },
    tagline: "文艺记录派",
    bio: "现居美国，喜欢看甄嬛传，喜欢在朋友圈发自己的照片，穿衣风格像中年大叔。很文艺，经常写诗。",
    verdict: "你偏慢热，但审美和表达稳定在线。",
  },
  药: {
    profile: { EI: "I", TC: "C", RP: "P", AF: "F" },
    tagline: "日常分享派",
    bio: "现居美国，戴眼镜，喜欢打游戏，喜欢在微博上分享在美国的生活日常照片并配上 #身边的风景 #生活手记 #日常分享。",
    verdict: "你低调但持续输出，重视日常节奏。",
  },
  Rich开: {
    profile: { EI: "E", TC: "T", RP: "R", AF: "F" },
    tagline: "说唱表达派",
    bio: "Rapper，喜欢在网易云发说唱，会在女朋友过生日的时候写一首歌发布在网易云，艺名 kreedom。",
    verdict: "你习惯把情感和表达做成作品。",
  },
  班长: {
    profile: { EI: "I", TC: "C", RP: "P", AF: "A" },
    tagline: "逆袭执行派",
    bio: "曾经是班长，高考失利，复读一年，上了上外贸，现在考研上了上财，农奴翻身做主人。",
    verdict: "你抗压强，能把目标拆解成执行。",
  },
  套子: {
    profile: { EI: "E", TC: "T", RP: "P", AF: "A" },
    tagline: "初代锋芒派",
    bio: "第一代鸿儒，在北郊高中时期是草籽的敌人，草籽收集了他的黑料踩着他上位。",
    verdict: "你决策快，擅长在竞争里找机会。",
  },
  疯子: {
    profile: { EI: "E", TC: "T", RP: "R", AF: "A" },
    tagline: "恋爱仪式派",
    bio: "现居澳大利亚，给未婚妻买 DR 钻戒，并且和腩子微信共享定位在澳大利亚约会。",
    verdict: "你感情投入高，做事讲究排面和强度。",
  },
  钩子: {
    profile: { EI: "I", TC: "T", RP: "P", AF: "F" },
    tagline: "风格执念派",
    bio: "喜欢留长头发的男的，头发总是油油的，喜欢装逼，会弹吉他。搞了一个 Blender 设计社群。",
    verdict: "你有很强的个人风格，审美优先。",
  },
  仲: {
    profile: { EI: "I", TC: "C", RP: "R", AF: "F" },
    tagline: "黑色氛围派",
    bio: "女朋友是超级大美女，喜欢穿像山本耀司黑乌鸦一样的黑大衣。喜欢在朋友圈发自己的阴湿美照。",
    verdict: "你不追求高频发声，更在意画面和质感。",
  },
  端主席: {
    profile: { EI: "E", TC: "T", RP: "P", AF: "A" },
    tagline: "组织控场派",
    bio: "设创学生会主席，喜欢发自己的 cos 照，人称端王，江西人。",
    verdict: "你在公共场景里有明显控场能力。",
  },
  豪子: {
    profile: { EI: "E", TC: "T", RP: "R", AF: "F" },
    tagline: "酒局社交派",
    bio: "澳门人，性取向未知，现居英国，喜欢叫别的男的老公，腩子的最爱。喜欢喝酒，是一个酒鬼。",
    verdict: "你社交热度高，擅长把气氛带起来。",
  },
  gig: {
    profile: { EI: "E", TC: "T", RP: "R", AF: "A" },
    tagline: "创业冲锋派",
    bio: "法国人，自己开了个机器人公司，喜欢腩子，多次约腩子看电影，但由于胡子太丑被腩子丑拒。头像说自己是变异向日葵。",
    verdict: "你行动快，认准目标会持续推进。",
  },
};

const questions = [
  {
    text: "群里冷场时，你通常怎么做？",
    options: [
      {
        label: "A. 直接@一圈人，把话题重新拉起来。",
        letter: "E",
        bonus: { 草籽: 2, 端主席: 1, 豪子: 1 },
      },
      {
        label: "B. 先看局势，等有信息再说话。",
        letter: "I",
        bonus: { 皇家驿: 2, 药: 1, 仲: 1 },
      },
    ],
  },
  {
    text: "你的社交平台习惯更像哪一种？",
    options: [
      {
        label: "A. 常发动态、照片，保持在线感。",
        letter: "E",
        bonus: { 端主席: 2, 皇家驿: 1, 豪子: 1 },
      },
      {
        label: "B. 低调更新，偶尔发有内容的日常。",
        letter: "I",
        bonus: { 药: 2, 仲: 1, 钩子: 1 },
      },
    ],
  },
  {
    text: "给重要的人过生日，你更可能？",
    options: [
      {
        label: "A. 写歌、写诗或者公开表达。",
        letter: "R",
        bonus: { Rich开: 3, 皇家驿: 1, 疯子: 1 },
      },
      {
        label: "B. 送实用礼物，把安排做细。",
        letter: "P",
        bonus: { 班长: 2, 草籽: 1, 套子: 1 },
      },
    ],
  },
  {
    text: "项目不顺时，你对外更可能怎么说？",
    options: [
      {
        label: "A. 我有自己的选择，转去下一站。",
        letter: "T",
        bonus: { 钩子: 2, 套子: 1, Rich开: 1 },
      },
      {
        label: "B. 承认失误，复盘后继续推进。",
        letter: "C",
        bonus: { 班长: 2, 药: 1, 皇家驿: 1 },
      },
    ],
  },
  {
    text: "你更偏好的内容发布方式是？",
    options: [
      {
        label: "A. 风景+文字+标签，重视表达完整。",
        letter: "R",
        bonus: { 药: 2, 皇家驿: 1, 仲: 1 },
      },
      {
        label: "B. 结论先行，信息密度更高。",
        letter: "P",
        bonus: { 套子: 2, 草籽: 1, 班长: 1 },
      },
    ],
  },
  {
    text: "活动里你通常怎么发力？",
    options: [
      {
        label: "A. 先出镜、先控场，场子不能冷。",
        letter: "T",
        bonus: { 端主席: 2, 豪子: 1, Rich开: 1 },
      },
      {
        label: "B. 先把流程、节点、执行排清楚。",
        letter: "C",
        bonus: { 班长: 2, 药: 1, 皇家驿: 1 },
      },
    ],
  },
  {
    text: "在关系推进上你更像？",
    options: [
      {
        label: "A. 仪式感明确，行动直接。",
        letter: "A",
        bonus: { 疯子: 3, gig: 1, 套子: 1 },
      },
      {
        label: "B. 顺其自然，保持舒服节奏。",
        letter: "F",
        bonus: { 豪子: 2, 皇家驿: 1, 钩子: 1 },
      },
    ],
  },
  {
    text: "遇到竞争机会时，你更可能？",
    options: [
      {
        label: "A. 快速建立优势，抓窗口期。",
        letter: "A",
        bonus: { 套子: 2, 草籽: 1, 端主席: 1 },
      },
      {
        label: "B. 先保留余地，慢一点也可以。",
        letter: "F",
        bonus: { 豪子: 2, 钩子: 1, 药: 1 },
      },
    ],
  },
  {
    text: "你更容易被哪种风格吸引？",
    options: [
      {
        label: "A. 长发、吉他、明显个人风格。",
        letter: "T",
        bonus: { 钩子: 2, Rich开: 1, 套子: 1 },
      },
      {
        label: "B. 黑大衣、成熟感、稳一点的表达。",
        letter: "C",
        bonus: { 仲: 2, 皇家驿: 1, 班长: 1 },
      },
    ],
  },
  {
    text: "看到新机会（项目/社群）时，你会？",
    options: [
      {
        label: "A. 立刻拉人开干，能落地就先落地。",
        letter: "A",
        bonus: { gig: 2, 端主席: 1, 草籽: 1 },
      },
      {
        label: "B. 先看看资源和条件，不急着拍板。",
        letter: "F",
        bonus: { 药: 1, 钩子: 1, 豪子: 2 },
      },
    ],
  },
  {
    text: "聚会开场你更常见的状态是？",
    options: [
      {
        label: "A. 很快进入社交状态，和多人建立连接。",
        letter: "E",
        bonus: { 豪子: 2, 草籽: 1, gig: 1 },
      },
      {
        label: "B. 先找感觉，不急着成为中心。",
        letter: "I",
        bonus: { 班长: 1, 仲: 2, 皇家驿: 1 },
      },
    ],
  },
  {
    text: "晚上的自由时间，你更倾向？",
    options: [
      {
        label: "A. 看剧、写点东西，慢慢消化情绪。",
        letter: "R",
        bonus: { 皇家驿: 2, 仲: 1, Rich开: 1 },
      },
      {
        label: "B. 打游戏或处理待办，保持节奏。",
        letter: "P",
        bonus: { 药: 2, 班长: 1, 草籽: 1 },
      },
    ],
  },
];

const introScreen = document.getElementById("introScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const questionTitle = document.getElementById("questionTitle");
const optionsWrap = document.getElementById("optionsWrap");

const resultName = document.getElementById("resultName");
const resultType = document.getElementById("resultType");
const resultTagline = document.getElementById("resultTagline");
const resultBio = document.getElementById("resultBio");
const resultVerdict = document.getElementById("resultVerdict");
const dimensionBox = document.getElementById("dimensionBox");
const runnerUp = document.getElementById("runnerUp");

const startBtn = document.getElementById("startBtn");
const retryBtn = document.getElementById("retryBtn");
const copyBtn = document.getElementById("copyBtn");

let currentIndex = 0;
let letterScores = {};
let bonusScores = {};
let latestResult = null;

function initScores() {
  letterScores = { E: 0, I: 0, T: 0, C: 0, R: 0, P: 0, A: 0, F: 0 };
  bonusScores = {};
}

function showScreen(screen) {
  introScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

function startQuiz() {
  currentIndex = 0;
  latestResult = null;
  initScores();
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];
  progressText.textContent = `第 ${currentIndex + 1} / ${questions.length} 题`;
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  questionTitle.textContent = q.text;
  optionsWrap.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn option-btn";
    btn.textContent = option.label;
    btn.addEventListener("click", () => handleAnswer(option));
    optionsWrap.appendChild(btn);
  });
}

function handleAnswer(option) {
  letterScores[option.letter] += 1;
  Object.entries(option.bonus).forEach(([name, val]) => {
    bonusScores[name] = (bonusScores[name] || 0) + val;
  });

  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }
  showResult();
}

function buildType() {
  const typeMap = {};
  const letters = pairs.map((pair) => {
    const leftScore = letterScores[pair.left];
    const rightScore = letterScores[pair.right];
    const chosen = leftScore >= rightScore ? pair.left : pair.right;
    typeMap[pair.key] = chosen;
    return chosen;
  });
  return {
    type: letters.join(""),
    typeMap,
  };
}

function rankCharacters(typeMap) {
  return Object.entries(characters)
    .map(([name, info]) => {
      let score = bonusScores[name] || 0;
      pairs.forEach((pair) => {
        const expected = info.profile[pair.key];
        const selected = typeMap[pair.key];

        if (expected === selected) {
          score += 2;
        }

        const dominance = Math.abs(letterScores[pair.left] - letterScores[pair.right]) === 3;
        if (dominance && expected === selected) {
          score += 1;
        }
      });

      return { name, score, info };
    })
    .sort((a, b) => b.score - a.score);
}

function buildDimensionLines(typeMap) {
  return pairs.map((pair) => {
    const selected = typeMap[pair.key];
    const selectedName = selected === pair.left ? pair.leftName : pair.rightName;
    const selectedScore = letterScores[selected];
    const total = letterScores[pair.left] + letterScores[pair.right];
    const ratio = Math.round((selectedScore / total) * 100);
    const remark = letterRemarks[selected];
    return `【${pair.key}】${selectedName}（${ratio}%）｜${remark}`;
  });
}

function showResult() {
  const { type, typeMap } = buildType();
  const ranking = rankCharacters(typeMap);
  const top = ranking[0];
  const second = ranking[1];
  const dimensionLines = buildDimensionLines(typeMap);

  resultName.textContent = `你最接近：${top.name}`;
  resultType.textContent = `人格码：${type}`;
  resultTagline.textContent = top.info.tagline;
  resultBio.textContent = top.info.bio;
  resultVerdict.textContent = top.info.verdict;

  dimensionBox.innerHTML = dimensionLines
    .map((line) => `<div class="dimension-item">${line}</div>`)
    .join("");

  runnerUp.textContent = `第二接近：${second.name}（分差 ${Math.max(top.score - second.score, 0)}）`;

  latestResult = {
    name: top.name,
    type,
    tagline: top.info.tagline,
    verdict: top.info.verdict,
    runnerUp: second.name,
  };

  showScreen(resultScreen);
}

startBtn.addEventListener("click", startQuiz);
retryBtn.addEventListener("click", startQuiz);

copyBtn.addEventListener("click", async () => {
  if (!latestResult) return;

  const text = [
    "【鸿儒测试结果】",
    `我是：${latestResult.name}`,
    `人格码：${latestResult.type}`,
    `标签：${latestResult.tagline}`,
    `结论：${latestResult.verdict}`,
    `第二接近：${latestResult.runnerUp}`,
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "已复制";
    setTimeout(() => {
      copyBtn.textContent = "复制结果";
    }, 1200);
  } catch (err) {
    copyBtn.textContent = "复制失败";
    setTimeout(() => {
      copyBtn.textContent = "复制结果";
    }, 1200);
  }
});
