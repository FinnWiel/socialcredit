let allQuestions = [];
let score = 1000;

function initQuestions() {
  allQuestions.splice(0, allQuestions.length);
  score = 1000;
  allQuestions.push({
    index: 0,
    question: "Een dakloos persoon vraagt je om geld. Wat doe je?",
    correctAwnser: "Je geeft hem geld.",
    wrongAwnser: "Je loopt door zonder iets te zeggen.",
    neutralAwnser: "Je geeft hem een broodje wat je eerder gekocht hebt.",
  });
  allQuestions.push({
    index: 1,
    question: "Je wil bij je oma op bezoek gaan want je bent daar al lang niet geweest, maar de bus rijdt niet. Ga je 7 kilometer fietsen om haar te kunnen zien?",
    correctAwnser: "Je stuurt je oma een berichtje dat je later bent en stapt op je fiets.",
    wrongAwnser: "Je stuurt een berichtje naar je oma dat de bus niet rijdt en dat je dus niet komt.",
    neutralAwnser: "Je belt je oma zodat je toch met haar kan praten, maar niet hoeft te fietsen.",
  });
  allQuestions.push({
    index: 2,
    question: "Een oude vriend van je vraagt of je hem wil helpen, maar je weet dat hij vaak kritiek uit tegen de staat op social media. Ga je hem helpen? ",
    correctAwnser: "Je vertelt hem dat je hem zal helpen wanneer hij de posts over de staat van social media afhaalt.",
    wrongAwnser: "Je helpt hem.",
    neutralAwnser: "Je negeert hem.",
  });
  allQuestions.push({
    index: 3,
    question: "Je opa heeft mantel zorg nodig en jij woont dicht in de buurt. Ga je hem mantelzorg geven ontdanks dat het misschien een slechte invloed zal hebben op je drukke baan?",
    correctAwnser: "Je regelt dat je tante bij jouw in huis kan wonen zodat zij hem mantelzorg kan geven.",
    wrongAwnser: "Je geeft hem mantelzorg, maar dit heeft een negatief effect op je werkprestaties.",
    neutralAwnser: "Je geeft hem geen mantelzorg, je baan is te belangrijk.",
  });
  allQuestions.push({
    index: 4,
    question: "Je hebt betaald gekregen, wat doe je met het geld wat je niet direct nodig hebt.",
    correctAwnser: "Je lost een deel van je openstaande lening af.",
    wrongAwnser: "Je gaat uiteten met je vrienden.",
    neutralAwnser: "Je zet het op een spaarrekening.",
  });
  allQuestions.push({
    index: 5,
    question: "Een vriend van je post een artiekel wat de staat bekritiseert, wat doe je?",
    correctAwnser: "Je ontvolgt hem.",
    wrongAwnser: "Je liked de post.",
    neutralAwnser: "Je scrolt verder",
  });
  allQuestions.push({
    index: 6,
    question: "Je trein heeft een half uur vertraging, wat doe je tijdens het wachten?",
    correctAwnser: "Je hebt geen zin om lui te wachten, dus je gaat fietsen.",
    wrongAwnser: "Je scrolt op social media.",
    neutralAwnser: "Je leest een boek.",
  });
  allQuestions.push({
    index: 7,
    question: "Je wordt uitgenodigt om met collega's te lunchen, maar je hebt al lunchplannen met een goede vriend, wat doe je?",
    correctAwnser: "Je gaat met je collega's lunchen, maar spreekt een nieuwe datum af met je vriend.",
    wrongAwnser: "Je liegt tegen je collega's dat je je niet lekker voelt en gaat lunchen met je vriend.",
    neutralAwnser: "Je verteld je collega's dat je al plannen had en dus niet mee kan gaan lunchen.",
  });
  allQuestions.push({
    index: 8,
    question: "Tijdens een belangrijke vergaderingmerk je dat je collega een fout maakt, wat doe je?",
    correctAwnser: "Je vertelt je collega achteraf wat hij fout deed zodat hij het niet opnieuw doet.",
    wrongAwnser: "Je verbeterd zijn fout tijdens de vergadering zodat iedereen weet dat het niet klopt.",
    neutralAwnser: "Je zegt niks.",
  });
  allQuestions.push({
    index: 9,
    question: "Je baas vraagt je om overuren te maken om een dringend project af te ronden, maar je had belooft je zus te helpen verhuizen, wat doe je?",
    correctAwnser: "Je regelt dat een vriend van je kan helpen met de verhuizeing zodat jij het project af kan ronden.",
    wrongAwnser: "Je blijft op werk om het project af te maken.",
    neutralAwnser: "Je gaat je zus helpen. Je zou de rest van de week eerder kunnen komen voor het project.",
  });
  allQuestions.push({
    index: 10,
    question: "Je oudere buurman heeft hulp nodig met het verplaatsen van zware meubels in het weekend.",
    correctAwnser: "Je gaat helpen en neemt ook een vriend mee zodat je buurman helemaal niks hoeft te tillen.",
    wrongAwnser: "Je verteld hem beleeft dat je nu geen tijd hebt.",
    neutralAwnser: "Je gaat hem helpen en leert hem beter kennen terwijl jullie samen de meubels verplaatsen.",
  });
  allQuestions.push({
    index: 11,
    question: "Het is donderdag avond en je baas vraagt of je een paar drankjes wil gaan doen na werk, wat doe je?",
    correctAwnser: "Je gaat mee drankjes doen.",
    wrongAwnser: "Je wijst hem af omdat je morgen goed wil kunnen werken.",
    neutralAwnser: "Je vraagt of hij ook morgen kan zodat het je werk prestaties niet beïnvloed.",
  });
}

const possibleAwnsers = ["correctAwnser", "neutralAwnser", "wrongAwnser"];


let scoreText = document.getElementById("score");
scoreText.innerHTML = score;

setQuestion();

function setQuestion() {
  let showingQuestion = document.getElementById("question");
  let firstAwnser = document.getElementById("1");
  let secondAwnser = document.getElementById("2");
  let thirdAwnser = document.getElementById("3");

  shuffle(possibleAwnsers);

  if(score <= 0){
    alert("lmao, you die xdd");
    score = 1000;
    initQuestions();
  }

  if (allQuestions.length == 0) {
    let scoreText = document.getElementById("score");

    alert('You scored: ' + score);

    score = 1000;
    scoreText.innerHTML = score;
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
