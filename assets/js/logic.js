// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

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
    // add 1 to currentQuestionIndex
    // call the get questions function again
 }
  // penalize time
  // display new time on page
  // play "wrong" sound effect
  // else
  // play "right" sound effect
  // flash right/wrong feedback on page for half a second
  // move to next question
  // check if we've run out of questions
  // quizEnd
  // else
  // getQuestion
}

function quizEnd() {
  // stop timer
  // show end screen
  // show final score
  // hide questions section
}

function clockTick() {
  // update time
  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box
  // make sure value wasn't empty
  // get saved scores from localstorage, or if not any, set to empty array
  // format new score object for current user
  // save to localstorage
  // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
  // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
