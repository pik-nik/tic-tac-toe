let boxes = document.querySelectorAll(".box")
let turnMessage = document.querySelector(".turn-message")
let playerNumber = document.querySelector(".player-number") 
let box1 = document.querySelector(".box-1")
let box2 = document.querySelector(".box-2") 
let box3 = document.querySelector(".box-3") 
let box4 = document.querySelector(".box-4") 
let box5 = document.querySelector(".box-5") 
let box6 = document.querySelector(".box-6") 
let box7 = document.querySelector(".box-7")  
let box8 = document.querySelector(".box-8") 
let box9 = document.querySelector(".box-9") 
let gameCompletePopup = document.querySelector(".game-complete-popup")
let resultsMessage = document.querySelector(".results-message")
let playAgainBtn = document.querySelector(".play-again-button")

let numberOfTurns = 0
function handleClick(event) {
    console.log("clicking");
    let boxClicked = event.target
    console.log(event.target);
    numberOfTurns++
    console.log(numberOfTurns);
    //swap between players and swap between X and O
    if (numberOfTurns % 2 !== 0) {
        boxClicked.textContent = "X"
        playerNumber.textContent = 2
    } else {
        boxClicked.textContent = "O"
        playerNumber.textContent = 1 
    }
    boxClicked.removeEventListener("click", handleClick)     //so that you can only click box once 
    //?  now to hard code the wins... first with X's
    if ((box1.textContent === "X" && box2.textContent === "X" && box3.textContent === "X") || (box4.textContent === "X" && box5.textContent === "X" && box6.textContent === "X") || (box7.textContent === "X" && box8.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box4.textContent === "X" && box7.textContent === "X") || (box2.textContent === "X" && box5.textContent === "X" && box8.textContent === "X") || (box3.textContent === "X" && box6.textContent === "X" && box9.textContent === "X") || (box1.textContent === "X" && box5.textContent === "X" && box9.textContent === "X") || (box3.textContent === "X" && box5.textContent === "X" && box7.textContent === "X")) {
        // make it such you can't click anymore boxes
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        //show game complete message
        resultsMessage.textContent = "Congratulations, Player 1 is the winner!"
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
        //? Now with O's
    } else if ((box1.textContent === "O" && box2.textContent === "O" && box3.textContent === "O") || (box4.textContent === "O" && box5.textContent === "O" && box6.textContent === "O") || (box7.textContent === "O" && box8.textContent === "O" && box9.textContent === "O") || (box1.textContent === "O" && box4.textContent === "O" && box7.textContent === "O") || (box2.textContent === "O" && box5.textContent === "O" && box8.textContent === "O") || (box3.textContent === "O" && box6.textContent === "O" && box9.textContent === "O") || (box1.textContent === "O" && box5.textContent === "O" && box9.textContent === "O") || (box3.textContent === "O" && box5.textContent === "O" && box7.textContent === "O")) {
        boxes.forEach(box => {
            box.removeEventListener("click", handleClick)
        });
        resultsMessage.textContent = "Congratulations, Player 2 is the winner!"
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
    } else if (numberOfTurns === 9) { //FINALLY number of turns 
        resultsMessage.textContent = "Awww, it's a tie"
        gameCompletePopup.style.visibility = "visible"
        turnMessage.style.visibility = "hidden"
    }
}

boxes.forEach(box => {
    box.addEventListener("click", handleClick)
});

function resetGame() {
    boxes.forEach(box => {
        box.textContent = ""
        box.addEventListener("click", handleClick)
        gameCompletePopup.style.visibility = "hidden"
        turnMessage.style.visibility = "visible"
        numberOfTurns = 0
        playerNumber.textContent = 1 
        resultsMessage.textContent = "Congratulations! The winner is Player"
    });
}

playAgainBtn.addEventListener("click", resetGame)