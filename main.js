let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById('userScore');
const compScoreSpan = document.getElementById('compScore');
const scoreboardDiv = document.querySelector('.scoreboard');
const resultDiv = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}


function convertToWord(letter){
    switch(letter){
        case "r": return "Rock"; 
        case "p": return "Paper";
        case "s": return "Scissors";       
    }
}

function win(userChoice, compChoice){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}, You won!`;
}

function lose(userChoice, compChoice){
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = `${convertToWord(compChoice)} beats ${convertToWord(userChoice)}, Computer won!`;
}

function draw(userChoice, compChoice){
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(compChoice)}, It' s draw!`;
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;    

    }
    
}


function main() {
    rockDiv.addEventListener('click', function() {
        game("r");
    })
    
    paperDiv.addEventListener('click', function() {
        game("p");
    })
    
    scissorsDiv.addEventListener('click', function() {
        game("s"); 
    })
}

main();




