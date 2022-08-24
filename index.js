var losses = 0;

var cardList = [
    "bulbasaur",
    "charmander",
    "cyndaquil",
    "eevee",
    "jigglypuff",
    "mew",
    "pikachu",
    "ponyta",
    "squirtle",
    "togepi",

]

var cardSet;
var board = [];

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);
    
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

var row = 4;
var column = 5;

function startGame() {
    for (let r = 0; r < row; r++) {
        let row = [];
        for(let c = 0; c < column; c++){
        let cardImg = cardSet.pop();
        row.push(cardImg);

        let card = document.createElement("img");
        card.id = r.toString() + "-" + c.toString();
        card.src = cardImg + ".png";
        card.classList.add("card");
        card.addEventListener("click", clickedCard);
        document.getElementById("board").append(card);
        };
        board.push(row);
        console.log(board);
    }

    }
   
    setTimeout(flipCards, 4000);



function flipCards() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "pokeball.png";
        }
    } 
}

let firstCard;
let secondCard; 

function clickedCard() {

    if (this.src.includes("pokeball.png")) {
        if (!firstCard) {
            firstCard = this;

            let coords = firstCard.id.split("-"); 
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);
            console.log(board);

            firstCard.src = board[r][c] + ".png";
        }
        else if (!secondCard && this != firstCard) {
            secondCard = this;

            let coords = secondCard.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            secondCard.src = board[r][c] + ".png";

            setTimeout(reset, 2000);
            
        }
    }
}


