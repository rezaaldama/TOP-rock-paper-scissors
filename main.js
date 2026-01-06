// Create a function to get the computer choice  
let getComputerChoice = function () {
    // Generate a random number: 1, 2, or 3
    let computerChoice = Math.floor((Math.random() * 3) + 1);

    // Convert the random number into a game choice
    if (computerChoice == 1) return 'ROCK';
    if (computerChoice == 2) return 'PAPER';
    if (computerChoice == 3) return 'SCISSORS';
}

// Create a function to get the human choice 
let getHumanChoice = function () {
    // Prompt the user for input
    let humanChoice = prompt('Make a choice: ', null);   
    
    // Normalize the user input
    if (humanChoice != null) return humanChoice.toUpperCase();
}

// Create a function to play a single round
let playRound = function () {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(); 

    // Print the randomized computer input
    console.log(`Computer chooses ${computerChoice}`);

    // Decide the winner
    if (humanChoice == computerChoice) {
        console.log('Draw!');
        return null;
    }

    if ((humanChoice == 'ROCK' && computerChoice == 'SCISSORS') ||
        (humanChoice == 'PAPER' && computerChoice == 'ROCK') ||
        (humanChoice == 'SCISSORS' && computerChoice == 'PAPER')) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return "Human";
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "Computer";
        }
}

// Create a function to play multiple rounds
let playGame = function(rounds = 0) {
    let humanScore = 0;
    let computerScore = 0; 

    while (rounds > 0) {
        const winner = playRound();

        if (winner == 'Human') humanScore++;
        if (winner == 'Computer') computerScore++;

        rounds--; 
    }

    console.log(`Final score for human: ${humanScore}, computer: ${computerScore}`);
}