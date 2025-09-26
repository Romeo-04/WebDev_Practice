let result = "";
let playerScore = 0;
let wins = 0;
let losses = 0;
let resultText = "";
let gameStatus = "";

function flipCoin(userGuess){
    const randomNum = Math.random();
    randomNum < 0.5? result = "heads" : result = "tails";

    if (result === userGuess && (wins < 10 && losses < 10)) {
        wins++;
        resultText = "You win! The coin landed on " + result;
    } else if (result !== userGuess && (wins < 10 && losses < 10)) {
        losses++;
        resultText = "You lose! The coin landed on " + result;
    } else if (wins === 10 || losses === 10) {
        gameStatus = "Game over! Please reset the game to play again.";
    }

    if (wins === 10 && losses !== 10) {
        resultText = "Congratulations! You reached 10 wins first, you won!";
    } else if (wins !== 10 && losses === 10) {
        resultText = "Sorry! The computer reached 10 wins first, you lost!";
    }
    

    document.getElementById("result").innerText = resultText;
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("game-status").innerText = gameStatus;
}