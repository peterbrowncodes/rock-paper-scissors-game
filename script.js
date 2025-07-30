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

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3)
    if (result == '0') {
        computerChoice = 'Rock'
    } else if (result == 1) {
        computerChoice = 'Paper'        
    } else {
        computerChoice = 'Scissors'
    }
    const computerAnswer = `Computer picks ${computerChoice}.`
    return computerAnswer
} 
console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = prompt('Make your choice; rock, paper or scissors?');
    /*
        if (humanChoice != 'Rock' || humanChoice != 'Paper' || humanChoice != 'Scissors') {
        let humanChoice = prompt('Please choose rock, paper or scissors')
    }
    */
    return `You picked ${humanChoice}.`
}

console.log(getHumanChoice())

function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        let result = "It's a tie! No points awarded"
    } else if (computerChoice == 'Rock' && humanChoice == 'Scissors') {
        
        return "Computer wins! 1 point to computer"
    }
}