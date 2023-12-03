let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallsUserWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallsUserWord} . You win ! &#128513;`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},1000)
}

function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallsUserWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallsUserWord} . You Lost ! &#128532;`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},1000)
}

function draw(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallsUserWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  chooses the same as   ${convertToWord(computerChoice)}${smallsUserWord} . Its a draw! &#128517;`
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},1000)
}

function game(userChoice){
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice,computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice,computerChoice);
                break;

    }
}


function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });
}
main();