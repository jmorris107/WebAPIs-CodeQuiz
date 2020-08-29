function printHighscores() {
  // either get scores from localstorage or set to empty array

  // (optional) sort highscores by score property in descending order

  // for each score
    // create li tag for each high score

    // display on page
}

function clearHighscores() {
  // (and reload)
}

// attache clear event to clear score button
clearScores.addEventListener("click", function () {
    clearAll();
    window.location.href = "highscores.html";
})
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
})

// run printhighscore when page loads

var restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn"),
    // get the highScores list and turn it back into an object
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("score-list");

    // sort scores from high to low
    highScores.sort(function (a,b){
        return b.score - a.score
    })

    // display the scores
    for (var s = 0; s < highScores.length; s++) {
        var newLi = document.createElement("li")
        newLi.textContent = highScores[s].name + " - " + highScores[s].score
        scoreList.appendChild(newLi)
    }


// click handlers for restart and clearing scoreboard
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartBtn.addEventListener("click", function () {
    history.back();
});