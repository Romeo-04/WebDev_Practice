let wins = 0, losses = 0, ties = 0;

function play(playerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if(playerChoice === computerChoice){
        result = "It's a tie! Both chose " + playerChoice;
        ties++;
    }
    else if((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')){
        result = "You win! " + playerChoice + " beats " + computerChoice;
        wins++;
    }
    else{
        result = "You lose! " + computerChoice + " beats " + playerChoice;
        losses++;
    }
    document.getElementById("result").innerText = result;
    document.getElementById("wins").innerText = "Wins: " + wins;
    document.getElementById("losses").innerText = "Losses: " + losses;
    document.getElementById("ties").innerText = "Ties: " + ties;
}