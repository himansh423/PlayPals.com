let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) =>  {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        msg.style.color = "azure";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "azure";
    }
};
const drawGame = () => {
        msg.innerText = "Draw! Play again";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
};

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = getCompChoice();

    if(userChoice === compChoice){
           //draw game
           drawGame();
        }
        else {
            let userWin = true;
            if(userChoice === "rock"){
                //scissors, pappers
                userWin = compChoice ==="paper" ? false : true;
            }
            else if (userChoice === "paper") {
                //rock ,scissors
                userWin = compChoice ==="scissors" ? false : true;
            }
            else {
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});