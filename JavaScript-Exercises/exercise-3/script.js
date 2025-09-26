let result = "";
let playerScore = 0;

function flipCoin(userGuess){
    const randomNum = Math.random();
    randomNum < 0.5? result = "heads" : result = "tails";
}