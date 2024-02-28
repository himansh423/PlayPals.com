let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");

let turnO=true;
let color=true;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    count = 0;
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // playerO
        if(turnO) {
            box.innerText = "O";
            box.classList.add("colorblue");
            turnO = false; 
            box.classList.remove("colorred"); 
        }
        else {
            box.innerText = "X";
            box.classList.add("colorred");
            turnO = true;
            box.classList.remove("colorblue");
        }
        box.disabled = true;
        count++;
        draw();
        checkWinner();     
    });
});

let draw = () => {
    if(count==9) {
        msg.innerText = `Oops the game Was Draw`;
        msgContainer.classList.remove("hide");
    }
}


const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;   
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

        


const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
       
        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
