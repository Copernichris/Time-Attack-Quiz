
const username = document.getElementById('name');
const saveScoreBtn = document.getElementById('submitBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []; 


finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => { //prevents the save button from being pressed when there is no value for name
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score); //compares scores saved to local storage 
    highScores.splice(3); //max high scores set to 3 so only top 3 shown

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html'); //return home once saved
};