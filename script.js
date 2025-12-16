/*
- Function that returns computer's choice, rock paper or scissors - getComputerChoice
- Function that takes the human's choice, rock paper or scissors - getHumanChoice
- Function that evaluates the winner of the computer vs human choices - getWinner
- Function that tracks the score - humanScore, computerScore
- Function that starts a new game round - playRound
*/

/* VARIABLES */
let humanScore = 0;
let computerScore = 0;
let computerChoice = "";
let humanChoice = "";
let result = ""
let roundCounter = 0;

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const hScore = document.getElementById("#humanScore");
const cScore = document.getElementById("#computerScore");
const hChoice = document.getElementById("#humanChoice");
const cChoice = document.getElementById("#computerChoice");
const displayResult = document.getElementById("#result");
const title = document.getElementById("#title");

// EVENT LISTENERS
    buttonRock.addEventListener("click", (e) => {
        humanChoice = getHumanChoice(buttonRock.value);
        playRound(humanChoice, getComputerChoice())
    })
    buttonPaper.addEventListener("click", (e) => {
        humanChoice = getHumanChoice(buttonPaper.value);
        playRound(humanChoice, getComputerChoice())
    })
    buttonScissors.addEventListener("click", (e) => {
        humanChoice = getHumanChoice(buttonScissors.value);
        playRound(humanChoice, getComputerChoice())
    })    


// FUNCTIONS

const getComputerChoice = () => {
    let cResult = "";
    let r = Math.floor(Math.random() * 3);
    if (r === 0) {
        cResult = 'Rock'
    } else if (r === 1) {
        cResult = 'Paper'        
    } else {
        cResult = 'Scissors'
    }
    console.log(`Computer picks ${cResult}.`);
    return cResult;
} 

function getHumanChoice(c) {
    let hResult = "";
    if (c.toLowerCase() === 'rock') {
        hResult = 'Rock'
    } else if (c.toLowerCase() === 'paper') {
        hResult = 'Paper'
    } else if (c.toLowerCase() === 'scissors') {
        hResult = 'Scissors'
    } else {
        hResult = 'Invalid answer'
    };
    console.log(`You picked ${c}.`);
    return hResult;
}

function playRound(humanChoice, computerChoice) {
    
        if (humanChoice === computerChoice) {
            result = ("It's a tie! No points awarded.")
        } 
        else if (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') || 
            (humanChoice === 'Paper' && computerChoice === 'Rock') || 
            (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            humanScore ++
            result = ("You win! 1 point to humans!")
        } 
        else {
            computerScore ++
            result = ("Computer wins! 1 point to computers!")
        }
    roundCounter ++
    

    if (humanScore >= 5) {
        if (humanScore > computerScore) {
            result = 'Humans win!'
        }
        else {
            result = 'Computers win! Humanity has fallen!'
        }
    }

    console.log(humanChoice);
    console.log(computerChoice);
    console.log(result);
    console.log(humanScore);
    console.log(computerScore);

    
/* DOM MANIPULATION */

    document.getElementById("title").textContent = `ROUND ${roundCounter}`;
    document.getElementById("humanScore").textContent = `User Score: ${humanScore}`;
    document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}`;
    document.getElementById("humanChoice").textContent = `User Choice: ${humanChoice}`;
    document.getElementById("computerChoice").textContent = `Computer Choice: ${computerChoice}`;
    document.getElementById("result").textContent = `Results: ${result}`;
    return result
};