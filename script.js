/*
- Function that returns computer's choice, rock paper or scissors - getComputerChoice
- Function that takes the human's choice, rock paper or scissors - getHumanChoice
- Function that evaluates the winner of the computer vs human choices - getWinner
- Function that tracks the score - humanScore, computerScore
- Function that starts a new game round - playRound
*/

let humanScore = 0
let computerScore = 0
let computerChoice = ''
let humanChoice = ''

function getComputerChoice(choice) {
    let result = Math.floor(Math.random() * 3)

    if (result === 0) {
        choice = 'Rock'
    } else if (result === 1) {
        choice = 'Paper'        
    } else {
        choice = 'Scissors'
    }

    console.log(`Computer picks ${choice}.`)
    return choice
} 

function getHumanChoice(choice) {
    let rpsChoice = prompt('Make your choice; rock, paper or scissors?');

    if (rpsChoice.toLowerCase() === 'rock') {
        choice = 'Rock'
    } else if (rpsChoice.toLowerCase() === 'paper') {
        choice = 'Paper'
    } else if (rpsChoice.toLowerCase() === 'scissors') {
        choice = 'Scissors'
    } else {
        choice = 'Invalid answer'
    };

    console.log(`You picked ${choice}.`)
    return choice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! No points awarded.")
    } 
    else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') || 
        (humanChoice === 'Paper' && computerChoice === 'Rock') || 
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        humanScore ++
        console.log("You win! 1 point to humans!")
    } 
    else {
        computerScore ++
        console.log("Computer wins! 1 point to computers!")
    }

    console.log('Human score ' + humanScore)
    console.log('Computer score ' + computerScore)
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log('ROUND ' + [i+1])
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {
        console.log('Humans win!')
    } else {
        console.log('Computers win! Humanity has fallen!')
    }
}

playGame()