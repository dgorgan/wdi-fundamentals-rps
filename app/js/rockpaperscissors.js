////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
   return move || getInput() || randomPlay();

}

function getComputerMove(move) {
    
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove == 'rock' && computerMove == 'scissors' 
        || playerMove == 'scissors' && computerMove == 'paper' 
        || playerMove == 'paper' && computerMove == 'rock') {
        winner = 'player'; 
    } else if (computerMove == 'rock' && playerMove == 'scissors' 
        || computerMove == 'scissors' && playerMove == 'paper' 
        || computerMove == 'paper' && playerMove == 'rock') {
        winner = 'computer';
    } else {
        winner = 'tie';
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
     while ((playerWins < 5) && (computerWins < 5)) {

        var player = getPlayerMove;
        var computer = getComputerMove;
        var winner = getWinner(player(), computer());

         if(winner == 'player') {
            console.log('Player Won current match!');
            playerWins += 1;      

         } else if (winner = 'computer') {
            console.log('Computer won current match!');
            computerWins += 1;        
         }      
         
      console.log('Current player tally: ' + playerWins);
       
      console.log('Current computer tally: ' + computerWins);
    
     }

    document.write("<p>" + 'Winner is: ' + ((playerWins > computerWins) ? 'Player!' : 'Computer!' + "</p>" + "<p>" + [playerWins, computerWins] + "</p>"));
    
    
}



var play = document.getElementById('btn');
play.addEventListener('click', playToFive, false);


    