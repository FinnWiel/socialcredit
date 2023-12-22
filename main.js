let allQuestions = [];

function initQuestions() {
  allQuestions.splice(0, allQuestions.length);

  allQuestions.push({
    index: 0,
    question: "Test question 0",
    correctAwnser: "correct",
    wrongAwnser: "wrong",
    neutralAwnser: "neutral",
  });
  allQuestions.push({
    index: 1,
    question: "Test question 1",
    correctAwnser: "correct",
    wrongAwnser: "wrong",
    neutralAwnser: "neutral",
  });
  allQuestions.push({
    index: 2,
    question: "Test question 2",
    correctAwnser: "correct",
    wrongAwnser: "wrong",
    neutralAwnser: "neutral",
  });
  allQuestions.push({
    index: 3,
    question: "Test question 3",
    correctAwnser: "correct",
    wrongAwnser: "wrong",
    neutralAwnser: "neutral",
  });
  allQuestions.push({
    index: 4,
    question: "Test question 4",
    correctAwnser: "correct",
    wrongAwnser: "wrong",
    neutralAwnser: "neutral",
  });
  allQuestions.push({
    index: 5,
    question: "Test question 5",
    correctAwnser: "correct",
    wrongAwnser: "wrong",
    neutralAwnser: "neutral",
  });
  allQuestions.push({
    index: 6,
    question: "Test question 6",
    correctAwnser: "correct",
    wrongAwnser: "wrong",
    neutralAwnser: "neutral",
  });
}

const possibleAwnsers = ["correctAwnser", "neutralAwnser", "wrongAwnser"];

let score = 1000;
let scoreText = document.getElementById("score");
scoreText.innerHTML = score;

setQuestion();

function setQuestion() {
  let showingQuestion = document.getElementById("question");
  let firstAwnser = document.getElementById("1");
  let secondAwnser = document.getElementById("2");
  let thirdAwnser = document.getElementById("3");

  shuffle(possibleAwnsers);

  if (allQuestions.length == 0) {
    initQuestions();
  }

  let question;
  let selectedIndex = randomizeQuestion(allQuestions.length);
  question = allQuestions[selectedIndex];
  allQuestions.splice(selectedIndex, 1);

  showingQuestion.innerHTML = question.question;
  firstAwnser.innerHTML = question[possibleAwnsers[0]];
  secondAwnser.innerHTML = question[possibleAwnsers[1]];
  thirdAwnser.innerHTML = question[possibleAwnsers[2]];
}

function randomizeQuestion(maxIndex) {
  let randomIndex = Math.floor(Math.random() * maxIndex);
  return randomIndex;
}

function awnserQuestion(chosenAwnser) {
  let pickedAwnser = parseInt(chosenAwnser);

  //Check wich awnser was given and if it is correct
  for (let i = 0; i < possibleAwnsers.length; i++) {
    if (possibleAwnsers[i] === "correctAwnser") {
      correctAwnser = i + 1;
    } else if (possibleAwnsers[i] === "wrongAwnser") {
      wrongAwnser = i + 1;
    } else if (possibleAwnsers[i] === "neutralAwnser") {
      neutralAwnser = i + 1;
    }
  }

  //Set score based on awnser
  if (pickedAwnser === correctAwnser) {
    setScore("correct");
  } else if (pickedAwnser === wrongAwnser) {
    setScore("wrong");
  } else if (pickedAwnser === neutralAwnser) {
    setScore("neutral");
  }

  // Go to the next question
  setQuestion();
}

function setScore(outcome) {
  let pos50 = document.getElementById("pos50");
  let pos100 = document.getElementById("pos100");
  let neg100 = document.getElementById("neg100");

  if (score < 800) {
    if (outcome === "correct") {
      score += 50;
      unfade(pos50);
      fade(pos50);
      scoreText.innerHTML = score;
    }
    if (outcome === "wrong") {
      score -= 100;
      unfade(neg100);
      fade(neg100);
      scoreText.innerHTML = score;
    }
  } else if (score >= 800) {
    if (outcome === "correct") {
      score += 100;
      unfade(pos100);
      fade(pos100);
      scoreText.innerHTML = score;
    }
    if (outcome === "wrong") {
      score -= 100;
      unfade(neg100);
      fade(neg100);
      scoreText.innerHTML = score;
    }
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function fade(element) {
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

function unfade(element) {
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op <= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 40);
}
