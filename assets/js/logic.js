// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var reduceTime = time -5;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/04-Web-APIs_02-Homework_Develop_assets_sfx_correct.wav");
var sfxWrong = new Audio("assets/sfx/04-Web-APIs_02-Homework_Develop_assets_sfx_incorrect.wav");

function startQuiz() {
  // hide start screen
  document.getElementById("start-screen").style.display = "none";
  // un-hide questions section
  document.getElementById("questions").style.display = "block";
  // start timer
  setInterval(function() {
    time--
    timerEl.textContent = time;

    if (time <= 0) {
      alert("Game Over ");
      clearInterval(myInterval);
    }

  }, 1000);

  // show starting time

  getQuestion();
}

function getQuestion() {
  console.log('in getquetsions');
  // get current question object from array
  var question = questions[currentQuestionIndex];
  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = question.title;
  // clear out any old question choices
  choicesEl.innerText = ''
  // loop over choices
  for (var i = 0; i < question.choices.length; i++) {
  // create new button for each choice
    var answerButton = document.createElement("button");
    answerButton.innerText = question.choices[i];
    answerButton.setAttribute('value', question.choices[i]);
    answerButton.onclick = questionClick
    choicesEl.appendChild(answerButton); // display on the page
    }
}
  // attach click event listener to each choice

  

function questionClick() {
  console.log(this.value);
  
  var question = questions[currentQuestionIndex];

  console.log(question.answer);
  // check if user guessed right
  if (this.value === question.answer) {
    // add 1 to the number of correct guesses
    feedbackEl.style.display = "block";
    feedbackEl.textContent = "Correct!";
    // play "right" sound effect
    sfxRight.play();
    // add 1 to currentQuestionIndex
    currentQuestionIndex = currentQuestionIndex + 1
    // call the get questions function again
      // move to next question
    getQuestion(); 
 }
    else {
    feedbackEl.style.display = "block";
    feedbackEl.textContent = "Incorrect...";
    // play "wrong" sound effect
    sfxWrong.play();
     // penalize time
    time = time -5;
    // display new time on page
    timerEl.textContent = time;
    // add 1 to currentQuestionIndex 
    currentQuestionIndex = currentQuestionIndex + 1 // // move to next question
          
  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}
 
}

  //quiz End
function quizEnd() {
    // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  
  // hide questions section
  questionsEl.setAttribute("class", "hide");

}

function clockTick() {
 // update time
  time--;
  timerEl.textContent = time;
  
  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
   // get value of input box
  var initials = initialsEl.value.trim();
  
  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };
    
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    
    // redirect to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;


  // flash right/wrong feedback on page for half a second
  
  // check if we've run out of questions
  // quizEnd
    // add 1 to currentQuestionIndex 
    currentQuestionIndex = currentQuestionIndex + 1 // // move to next question
          
  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }

  //quiz End
function quizEnd() {

  document.getElementById('end-screen').style.display = 'block'
  // stop timer

    // stop timer
  clearInterval(timerId);


  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  
  // hide questions section
  questionsEl.setAttribute("class", "hide");

}

function clockTick() {
 // update time
  time--;
  timerEl.textContent = time;
  
  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
   // get value of input box
  var initials = initialsEl.value.trim();
  
  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };
    
    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    
    // redirect to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
