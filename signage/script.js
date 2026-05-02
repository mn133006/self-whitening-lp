var SLIDE_DURATION_MS = 5000; // 1スライド表示時間
var STEPS_DURATION_MS = 5000; // STEP切り替え間隔

var slides = Array.prototype.slice.call(document.querySelectorAll("[data-slide]"));
var pagerText = document.getElementById("pagerText");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var stepImage = document.getElementById("stepImage");
var stepCount = document.getElementById("stepCount");
var stepTitle = document.getElementById("stepTitle");
var stepInstructions = document.getElementById("stepInstructions");
var caseImage = document.getElementById("caseImage");
var caseCount = document.getElementById("caseCount");
var caseTitle = document.getElementById("caseTitle");
var caseDesc = document.getElementById("caseDesc");

// STEP編集用: 画像パス・文言はここを編集
var WHITENING_STEPS = [
  { id: "01", image: "../public/whitening-steps/01.png", title: "歯みがき", instructions: ["施術前に歯の表面をきれいに整えます"] },
  { id: "02", image: "../public/whitening-steps/05.png", title: "専用の溶液塗布", instructions: ["専用の溶液を前歯にやさしく塗布します"] },
  { id: "03", image: "../public/whitening-steps/09.png", title: "LED照射", instructions: ["照射中はリラックスしてお過ごしください"] },
  { id: "04", image: "../public/whitening-steps/10.png", title: "ブラッシング", instructions: ["照射後にブラッシングして口をゆすぎます"] },
  { id: "05", image: "../public/whitening-steps/12.png", title: "仕上がり確認", instructions: ["仕上がりを確認して終了です"] },
];

// CASE編集用: 画像・文言はここを編集
var CASE_ITEMS = [
  {
    image: "../public/before-after-case-01.png",
    title: "女性30代｜紅茶習慣",
    desc: "毎日、紅茶を飲むことが多い。気づいたら口元の黄ばみが気になり始めた",
  },
  {
    image: "../public/before-after-case-02.png",
    title: "女性20代｜チョコレート習慣",
    desc: "間食でチョコをよく食べる。気づいたら歯の黄ばみが気になり始めた",
  },
  {
    image: "../public/before-after-case-03.png",
    title: "男性30代｜コーヒー習慣",
    desc: "仕事中にコーヒーを飲む回数が多い。写真で歯の黄ばみが目立つように感じた",
  },
];

var currentIndex = 0;
var timerId = null;
var stepIndex = 0;
var caseIndex = 0;
var flowSlideIndex = -1;
var caseSlideIndex = -1;
var i;

for (i = 0; i < slides.length; i += 1) {
  if (slides[i].hasAttribute("data-flow-slide")) {
    flowSlideIndex = i;
  }
  if (slides[i].hasAttribute("data-case-slide")) {
    caseSlideIndex = i;
  }
}

function renderStep(index) {
  var step = WHITENING_STEPS[index];
  var instructionHtml = "";
  var j;

  if (!step || !stepImage || !stepCount || !stepTitle || !stepInstructions) {
    return;
  }

  stepImage.src = step.image;
  stepImage.alt = "STEP " + step.id + " " + step.title;
  stepCount.textContent = "STEP " + Number(step.id) + " / " + WHITENING_STEPS.length;
  stepTitle.textContent = step.title;

  for (j = 0; j < step.instructions.length; j += 1) {
    instructionHtml += "<li>" + step.instructions[j] + "</li>";
  }
  stepInstructions.innerHTML = instructionHtml;
}

function renderCase(index) {
  var item = CASE_ITEMS[index];
  if (!item || !caseImage || !caseCount || !caseTitle || !caseDesc) {
    return;
  }

  caseImage.src = item.image;
  caseImage.alt = "CASE " + (index + 1) + " " + item.title;
  caseCount.textContent = "CASE " + (index + 1) + " / " + CASE_ITEMS.length;
  caseTitle.textContent = item.title;
  caseDesc.textContent = item.desc;
}

function renderSlide(index) {
  for (i = 0; i < slides.length; i += 1) {
    if (i === index) {
      slides[i].classList.add("is-active");
    } else {
      slides[i].classList.remove("is-active");
    }
  }

  if (pagerText) {
    pagerText.textContent = (index + 1) + " / " + slides.length;
  }
}

function showNext() {
  var nextIndex = (currentIndex + 1) % slides.length;
  if (nextIndex !== flowSlideIndex) {
    stepIndex = 0;
    renderStep(stepIndex);
  }
  if (nextIndex !== caseSlideIndex) {
    caseIndex = 0;
    renderCase(caseIndex);
  }
  currentIndex = nextIndex;
  renderSlide(currentIndex);
}

function showPrev() {
  var nextIndex = (currentIndex - 1 + slides.length) % slides.length;
  if (nextIndex !== flowSlideIndex) {
    stepIndex = 0;
    renderStep(stepIndex);
  }
  if (nextIndex !== caseSlideIndex) {
    caseIndex = 0;
    renderCase(caseIndex);
  }
  currentIndex = nextIndex;
  renderSlide(currentIndex);
}

function restartAutoPlay() {
  if (timerId) {
    window.clearInterval(timerId);
  }

  timerId = window.setInterval(function () {
    if (currentIndex === flowSlideIndex) {
      if (stepIndex < WHITENING_STEPS.length - 1) {
        stepIndex += 1;
        renderStep(stepIndex);
        return;
      }

      stepIndex = 0;
      renderStep(stepIndex);
      showNext();
      return;
    }

    if (currentIndex === caseSlideIndex) {
      if (caseIndex < CASE_ITEMS.length - 1) {
        caseIndex += 1;
        renderCase(caseIndex);
        return;
      }

      caseIndex = 0;
      renderCase(caseIndex);
      showNext();
      return;
    }

    showNext();
  }, Math.min(SLIDE_DURATION_MS, STEPS_DURATION_MS));
}

if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    showPrev();
    restartAutoPlay();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    showNext();
    restartAutoPlay();
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    showPrev();
    restartAutoPlay();
  } else if (event.key === "ArrowRight") {
    showNext();
    restartAutoPlay();
  }
});

// 初期表示
renderStep(stepIndex);
renderCase(caseIndex);
renderSlide(currentIndex);
restartAutoPlay();
