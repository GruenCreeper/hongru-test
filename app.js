const pairs = [
  { key: "EI", left: "E", right: "I", leftName: "外放社交", rightName: "内敛观察" },
  { key: "TC", left: "T", right: "C", leftName: "高调表达", rightName: "克制表达" },
  { key: "RP", left: "R", right: "P", leftName: "情绪表达", rightName: "执行导向" },
  { key: "AF", left: "A", right: "F", leftName: "主动进攻", rightName: "随性松弛" },
];

const letterRemarks = {
  E: "你倾向先把场子热起来。",
  I: "你倾向先观察再进入。",
  T: "你表达方式更直接、更显眼。",
  C: "你更偏向收敛和稳定输出。",
  R: "你愿意为情绪价值投入。",
  P: "你会优先考虑现实结果。",
  A: "你遇事更喜欢主动推进。",
  F: "你更重视舒适和自然节奏。",
};

const characters = {
  草籽: {
    profile: { EI: "E", TC: "T", RP: "P", AF: "A" },
    tagline: "虹口区人脉王",
    bio: "虹口区人脉王，喜欢刷抖音并在评论区里@100个朋友。现居香港，平时爱帮别人代购 apple 产品和囤茅台，也喜欢在和自己无关的社交媒体 post 下评论。",
    verdict: "你是典型外放社交型，哪里有话题哪里就有你。",
    highlights: ["评论区高频出没", "资源调度感强", "偏主动进攻"],
  },
  皇家驿: {
    profile: { EI: "E", TC: "C", RP: "R", AF: "F" },
    tagline: "文艺花心派",
    bio: "现居美国，喜欢看甄嬛传，常在朋友圈发自己的照片，穿衣风格像中年大叔。很文艺，经常写诗，也谈过很多女朋友。",
    verdict: "你有稳定审美和情绪表达，感情里也更容易凭感觉走。",
    highlights: ["甄嬛传+写诗", "朋友圈本人照片", "感情上容易心动"],
  },
  药: {
    profile: { EI: "I", TC: "C", RP: "P", AF: "F" },
    tagline: "日常记录派",
    bio: "现居美国，社交媒体平台是一只猫，有一个妹妹，戴眼镜，喜欢打游戏。常在微博分享美国日常并配上 #身边的风景 #生活手记 #日常分享。",
    verdict: "你是稳定更新型人格，重日常节奏，不抢存在感。",
    highlights: ["猫账号设定", "生活手记标签", "低调持续输出"],
  },
  "Rich开": {
    profile: { EI: "E", TC: "T", RP: "R", AF: "F" },
    tagline: "说唱仪式派",
    bio: "Rapper，喜欢在网易云发说唱，艺名 kreedom。会在女朋友生日写歌发布，也给腩子写过小作文，送过一条小狮子手链。",
    verdict: "你把感情表达做成作品，表达欲和仪式感都很高。",
    highlights: ["网易云说唱", "生日写歌", "礼物和文字表达都在线"],
  },
  班长: {
    profile: { EI: "I", TC: "C", RP: "P", AF: "A" },
    tagline: "逆袭执行派",
    bio: "曾经是班长，高考失利后复读一年，上了上外贸，现在考研上了上财，属于农奴翻身做主人。",
    verdict: "你抗压和执行力都很强，能靠长期推进翻盘。",
    highlights: ["失利后复读", "学习路径清晰", "结果导向强"],
  },
  套子: {
    profile: { EI: "E", TC: "T", RP: "P", AF: "A" },
    tagline: "初代博弈派",
    bio: "第一代鸿儒。北郊高中时期是草籽的敌人，草籽收集了他的黑料踩着他上位。和 ltr 也有一段非常的关系。",
    verdict: "你在复杂关系和竞争局里有强烈的博弈感。",
    highlights: ["第一代鸿儒", "竞争关系复杂", "主动抢位倾向"],
  },
  疯子: {
    profile: { EI: "E", TC: "T", RP: "R", AF: "A" },
    tagline: "高能恋爱派",
    bio: "现居澳大利亚，给未婚妻买过 DR 钻戒，并和腩子微信共享定位在澳大利亚约会。很自恋，说同款眼镜是暗恋他，也送过腩子香水。",
    verdict: "你的感情表达强度高，行动和戏剧感都拉得很满。",
    highlights: ["DR 钻戒", "共享定位", "高调自恋表达"],
  },
  钩子: {
    profile: { EI: "I", TC: "T", RP: "P", AF: "F" },
    tagline: "风格矛盾派",
    bio: "喜欢留长头发的男的，头发总是油油的，喜欢装逼，会弹吉他。搞了 Blender 设计社群，看起来像事业批，但其实天天打游戏。曾在腾讯实习转正失败，对外说是自己辞职。",
    verdict: "你有明显个人风格，也经常在“要不要认真干”之间横跳。",
    highlights: ["长发吉他", "外表事业批", "游戏和创作并存"],
  },
  仲: {
    profile: { EI: "I", TC: "C", RP: "R", AF: "F" },
    tagline: "阴湿美学派",
    bio: "女朋友是超级大美女，曾留短发像帅 T。喜欢穿像山本耀司黑乌鸦一样的黑大衣，也喜欢在朋友圈发自己的阴湿美照。",
    verdict: "你更看重画面氛围和审美一致性，不追求高频喧哗。",
    highlights: ["黑乌鸦风格", "阴湿美照", "慢热审美表达"],
  },
  端主席: {
    profile: { EI: "E", TC: "T", RP: "P", AF: "A" },
    tagline: "组织控场派",
    bio: "设创的学生会主席，喜欢发自己的 cos 照，人称端王，江西人。",
    verdict: "你在公共场景里会自然走到前排，控场能力强。",
    highlights: ["学生会主席", "高频出镜", "组织场景主导"],
  },
  豪子: {
    profile: { EI: "E", TC: "T", RP: "R", AF: "F" },
    tagline: "酒局社交派",
    bio: "澳门人，性取向未知，现居英国，喜欢叫别的男的老公，是腩子的最爱。喜欢喝酒，是一个酒鬼。",
    verdict: "你社交升温很快，关系距离拉近能力强。",
    highlights: ["英国生活", "称呼亲密", "酒局存在感强"],
  },
  gig: {
    profile: { EI: "E", TC: "T", RP: "P", AF: "A" },
    tagline: "创业事业派",
    bio: "法国人，自己开了个机器人公司，喜欢腩子，多次约看电影但因为胡子太丑被丑拒。头像写自己是变异向日葵，ig 上发的基本都是自己的设计作品。",
    verdict: "你偏事业驱动型，认准方向后会持续投入。",
    highlights: ["机器人公司", "设计作品持续输出", "主动推进感强"],
  },
};

const questions = [
  {
    text: "群聊冷场时你更常见的反应是？",
    options: [
      {
        label: "A. 直接@一圈人，把场子重新拉热。",
        letter: "E",
        bonus: { 草籽: 2, 端主席: 1, 豪子: 1 },
      },
      {
        label: "B. 先看一会儿，不急着发言。",
        letter: "I",
        bonus: { 药: 1, 班长: 1, 仲: 1 },
      },
    ],
  },
  {
    text: "你的社交媒体更像哪种风格？",
    options: [
      {
        label: "A. 本人照片和动态持续更新。",
        letter: "E",
        bonus: { 皇家驿: 2, 端主席: 2, 草籽: 1 },
      },
      {
        label: "B. 分身账号或低曝光运营（比如猫账号）。",
        letter: "I",
        bonus: { 药: 3, 钩子: 1, 仲: 1 },
      },
    ],
  },
  {
    text: "社交称呼上你更接近？",
    options: [
      {
        label: "A. 熟不熟都能先叫“老公/兄弟”拉近关系。",
        letter: "E",
        bonus: { 豪子: 3, 草籽: 1 },
      },
      {
        label: "B. 先正常称呼，熟了再说。",
        letter: "I",
        bonus: { 班长: 1, 药: 1, 皇家驿: 1 },
      },
    ],
  },
  {
    text: "刷到和自己没关系的陌生 post，你会？",
    options: [
      {
        label: "A. 也会忍不住评论两句。",
        letter: "E",
        bonus: { 草籽: 3, 豪子: 1 },
      },
      {
        label: "B. 划走，不参与。",
        letter: "I",
        bonus: { 钩子: 1, 班长: 1, 仲: 1 },
      },
    ],
  },
  {
    text: "你更偏好的外在风格是？",
    options: [
      {
        label: "A. 渔夫帽/AAPE/长发吉他/cos 这种高辨识度表达。",
        letter: "T",
        bonus: { "Rich开": 2, 钩子: 2, 端主席: 1 },
      },
      {
        label: "B. 黑大衣、阴湿氛围或中年大叔式稳态穿搭。",
        letter: "C",
        bonus: { 仲: 2, 皇家驿: 2 },
      },
    ],
  },
  {
    text: "项目翻车后，你更可能怎么对外说？",
    options: [
      {
        label: "A. 强调是自己主动离开。",
        letter: "T",
        bonus: { 钩子: 3, 套子: 1 },
      },
      {
        label: "B. 承认失利，继续复盘推进。",
        letter: "C",
        bonus: { 班长: 3, 药: 1 },
      },
    ],
  },
  {
    text: "关于“自我存在感”，你更接近？",
    options: [
      {
        label: "A. 该高调就高调，自恋也没问题。",
        letter: "T",
        bonus: { 疯子: 2, 草籽: 1, 豪子: 1 },
      },
      {
        label: "B. 平时偏克制，偶尔才表达一下。",
        letter: "C",
        bonus: { 皇家驿: 2, 仲: 1, 药: 1 },
      },
    ],
  },
  {
    text: "在组织里你通常是？",
    options: [
      {
        label: "A. 站到台前控场的人。",
        letter: "T",
        bonus: { 端主席: 3, 草籽: 1 },
      },
      {
        label: "B. 把流程和执行 quietly 拉齐的人。",
        letter: "C",
        bonus: { 班长: 2, 药: 2 },
      },
    ],
  },
  {
    text: "给对象过生日你更可能？",
    options: [
      {
        label: "A. 写歌/写诗/送纪念物，情绪价值先到位。",
        letter: "R",
        bonus: { "Rich开": 3, 疯子: 1, 皇家驿: 1 },
      },
      {
        label: "B. 预算和安排先清楚，务实一点。",
        letter: "P",
        bonus: { 班长: 2, 草籽: 1, 套子: 1 },
      },
    ],
  },
  {
    text: "你更常发哪类内容？",
    options: [
      {
        label: "A. #身边的风景 #生活手记 这类日常表达。",
        letter: "R",
        bonus: { 药: 2, 皇家驿: 1, 仲: 1 },
      },
      {
        label: "B. 作品集、进度、结果和路径。",
        letter: "P",
        bonus: { gig: 2, 班长: 2, 钩子: 1 },
      },
    ],
  },
  {
    text: "空闲时间你更常见的状态是？",
    options: [
      {
        label: "A. 看甄嬛、写诗、看电影，先照顾情绪。",
        letter: "R",
        bonus: { 皇家驿: 2, gig: 1, 仲: 1 },
      },
      {
        label: "B. 打游戏或推进任务，先把事做完。",
        letter: "P",
        bonus: { 钩子: 2, 药: 2, 班长: 1 },
      },
    ],
  },
  {
    text: "处理亲密关系时，你更像？",
    options: [
      {
        label: "A. 礼物和仪式先给到（香水、手链这类）。",
        letter: "R",
        bonus: { 疯子: 2, "Rich开": 2, 豪子: 1 },
      },
      {
        label: "B. 先把现实安排和长期计划讲清楚。",
        letter: "P",
        bonus: { 班长: 2, 套子: 1, 草籽: 1 },
      },
    ],
  },
  {
    text: "竞争机会来了，你会？",
    options: [
      {
        label: "A. 主动做局抢位，关系线复杂也推进。",
        letter: "A",
        bonus: { 套子: 3, 草籽: 1, 端主席: 1 },
      },
      {
        label: "B. 随缘一点，先喝一杯再看。",
        letter: "F",
        bonus: { 豪子: 3, 皇家驿: 1 },
      },
    ],
  },
  {
    text: "遇到一个新方向，你更可能？",
    options: [
      {
        label: "A. 直接开社群甚至开公司。",
        letter: "A",
        bonus: { gig: 3, 钩子: 1, 端主席: 1 },
      },
      {
        label: "B. 先观察和试探，不急着定。",
        letter: "F",
        bonus: { 药: 2, 仲: 1, 班长: 1 },
      },
    ],
  },
  {
    text: "感情推进节奏你更偏向？",
    options: [
      {
        label: "A. 该上强度就上（钻戒/定位共享/立刻安排）。",
        letter: "A",
        bonus: { 疯子: 3, gig: 1 },
      },
      {
        label: "B. 保持舒服节奏，不设太强框架。",
        letter: "F",
        bonus: { 豪子: 2, 皇家驿: 1, 钩子: 1 },
      },
    ],
  },
  {
    text: "你更像哪种“事业批”？",
    options: [
      {
        label: "A. 真事业批，持续发布设计作品和项目。",
        letter: "A",
        bonus: { gig: 2, 端主席: 1, 班长: 1 },
      },
      {
        label: "B. 看着像事业批，其实常常先打游戏。",
        letter: "F",
        bonus: { 钩子: 3, 药: 1 },
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
const reasonBox = document.getElementById("reasonBox");
const dimensionBox = document.getElementById("dimensionBox");
const runnerUp = document.getElementById("runnerUp");

const startBtn = document.getElementById("startBtn");
const retryBtn = document.getElementById("retryBtn");
const copyBtn = document.getElementById("copyBtn");

let currentIndex = 0;
let letterScores = {};
let bonusScores = {};
let answerHistory = [];
let latestResult = null;

function initScores() {
  letterScores = { E: 0, I: 0, T: 0, C: 0, R: 0, P: 0, A: 0, F: 0 };
  bonusScores = {};
  answerHistory = [];
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
    btn.addEventListener("click", () => handleAnswer(q, option));
    optionsWrap.appendChild(btn);
  });
}

function handleAnswer(question, option) {
  letterScores[option.letter] += 1;

  Object.entries(option.bonus).forEach(([name, val]) => {
    bonusScores[name] = (bonusScores[name] || 0) + val;
  });

  answerHistory.push({
    question: question.text,
    optionLabel: option.label,
    bonus: option.bonus,
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

        const leftDiff = Math.abs(letterScores[pair.left] - letterScores[pair.right]);
        if (leftDiff >= 2 && expected === selected) {
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
    const ratio = total === 0 ? 50 : Math.round((selectedScore / total) * 100);
    const remark = letterRemarks[selected];

    return `【${pair.key}】${selectedName}（${ratio}%）｜${remark}`;
  });
}

function buildReasonLines(targetName, fallbackHighlights) {
  const hitLines = answerHistory
    .map((item) => {
      const value = item.bonus[targetName] || 0;
      return {
        value,
        text: `${item.question} → ${item.optionLabel}`,
      };
    })
    .filter((item) => item.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map((item) => `匹配点：${item.text}`);

  if (hitLines.length > 0) {
    return hitLines;
  }

  return fallbackHighlights.slice(0, 3).map((line) => `人设要点：${line}`);
}

function showResult() {
  const { type, typeMap } = buildType();
  const ranking = rankCharacters(typeMap);
  const top = ranking[0];
  const second = ranking[1];

  resultName.textContent = `你最接近：${top.name}`;
  resultType.textContent = `人格码：${type}`;
  resultTagline.textContent = top.info.tagline;
  resultBio.textContent = top.info.bio;
  resultVerdict.textContent = top.info.verdict;

  const reasonLines = buildReasonLines(top.name, top.info.highlights);
  reasonBox.innerHTML = reasonLines
    .map((line) => `<div class="reason-item">${line}</div>`)
    .join("");

  const dimensionLines = buildDimensionLines(typeMap);
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
