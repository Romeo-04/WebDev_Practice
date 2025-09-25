let wins = 0, losses = 0, ties = 0;

function play(playerChoice){
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultText = '';

    if(playerChoice === computerChoice){
        resultText = "It's a tie! Both chose " + playerChoice;
        ties++;
    }
    else if((playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')){
        resultText = "You win! " + playerChoice + " beats " + computerChoice;
        wins++;
    }
    else{
        resultText = "You lose! " + computerChoice + " beats " + playerChoice;
        losses++;
    }

    const resultEl = document.getElementById("result");
    // First time: add show class so styles appear
    if(!resultEl.classList.contains('show')){
        resultEl.classList.add('show');
    }
    resultEl.textContent = resultText;
    document.getElementById("wins").innerText = "Wins: " + wins;
    document.getElementById("losses").innerText = "Losses: " + losses;
    document.getElementById("ties").innerText = "Ties: " + ties;
}