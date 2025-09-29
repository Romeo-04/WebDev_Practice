function subscribed(){
    if(document.querySelector('.js-button').innerHTML === "Subscribe"){
        document.querySelector('.js-button').innerHTML = "Subscribed";
    }
    else {
        document.querySelector('.js-button').innerHTML = "Subscribe";
    }
}

function calculateShipping(inp = 0){
   const orderAmount = parseFloat(document.querySelector(inp).value) || 0;
   let shippingCost = 0;

   if (orderAmount < 40) {
       shippingCost = 10;
   }

   result = orderAmount + shippingCost;
   
   document.getElementById("result").innerHTML = "Total Amount: $" + result;
}

const scores = {
    wins: 0,
    losses: 0,
    ties: 0
};

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';
    if (userChoice === computerChoice) {
        result = "It's a tie!";
        scores.ties += 1;
        document.querySelector('.ties').innerHTML = `Ties: ${scores.ties}`;
    }
    else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
        result = "You win!";
        scores.wins += 1;
        document.querySelector('.wins').innerHTML = `Wins: ${scores.wins}`;
    } else {
        result = "Computer wins!";
        scores.losses += 1;
        document.querySelector('.losses').innerHTML = `Losses: ${scores.losses}`;
    }


}

function resetGame(){
    scores.wins = 0;
    scores.losses = 0;
    scores.ties = 0;
    document.querySelector('.wins').innerHTML = `Wins: ${scores.wins}`;
    document.querySelector('.losses').innerHTML = `Losses: ${scores.losses}`;
    document.querySelector('.ties').innerHTML = `Ties: ${scores.ties}`;
}

function showText(event){
    document.querySelector('.js-output').innerHTML = document.querySelector('.js-text').value;

}