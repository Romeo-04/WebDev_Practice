let result = "";
let playerScore = 0;
let wins = 0;
let losses = 0;
let resultText = "";

function flipCoin(userGuess){
    const randomNum = Math.random();
    randomNum < 0.5? result = "heads" : result = "tails";

    if (result === userGuess) {
        wins++;
        resultText = "You win! The coin landed on " + result;
    } else {
        losses++;
        resultText = "You lose! The coin landed on " + result;
    }

    document.getElementById("result").innerText = resultText;
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
}