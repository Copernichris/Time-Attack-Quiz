const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; //gets high scores saved to local storage after game is comlete, or statement incase there is no information

highScoresList.innerHTML = highScores
.map(score => {
   return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join("");
//writes each part of the object to a list element, and gives them class high score so they have propper css formating