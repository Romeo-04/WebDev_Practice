let result = "";
let playerScore = 0;
const scores = {'wins':0,'losses':0}
let resultText = "";
let gameStatus = "";

function flipCoin(userGuess){
    const randomNum = Math.random();
    randomNum < 0.5? result = "heads" : result = "tails";

    if (result === userGuess && (scores.wins < 10 && scores.losses < 10)) {
        scores.wins++;
        resultText = "You win! The coin landed on " + result;
    } else if (result !== userGuess && (scores.wins < 10 && scores.losses < 10)) {
        scores.losses++;
        resultText = "You lose! The coin landed on " + result;
    } else if (scores.wins === 10 || scores.losses === 10) {
        gameStatus = "Game over! Please reset the game to play again.";
    }

    if (scores.wins === 10 && scores.losses !== 10) {
        resultText = "Congratulations! You reached 10 wins first, you won!";
    } else if (scores.wins !== 10 && scores.losses === 10) {
        resultText = "Sorry! The computer reached 10 wins first, you lost!";
    }
    

    document.getElementById("result").innerText = resultText;
    document.getElementById("wins").innerText = scores.wins;
    document.getElementById("losses").innerText = scores.losses;
    document.getElementById("game-status").innerText = gameStatus;
}

function resetGame(){
    document.getElementById('reset-button').addEventListener('click', () => {
    window.location.reload(); // reloads the current URL)
});
}