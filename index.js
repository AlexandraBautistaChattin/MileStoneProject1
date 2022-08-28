//establish var for the cards -- 

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

//once the window loads it'll shuffle the cards and start the game functions below

window.onload = function() {
    shuffleCards();
    startGame();
}

//code that takes card set to shuffle the cardlist 
// add it to the card set defined above and shuffle them twice 
//loads two lists of the cards and shuffles both card lists
//the math.radom is going to get a radom index to 0-20 (for the card set)
//then the temp is going to create an array that's swapped to the first one

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);
    
    for (let i = 0; i < cardSet.length; i++) {
        let a = Math.floor(Math.random() * cardSet.length);
        let swap = cardSet[i];
        cardSet[i] = cardSet[a];
        cardSet[a] = swap;
    }
    console.log(cardSet);
}

//populates the cards in the board and creates the board 
//intro to cardImg - popping from the end end of the cards 
//adding event listener here for the clickedCard funct 

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
   
    setTimeout(flipCards, 9000);

//now we're doing a function to flip the cards
//using pokeballpng as the img to flip back to 
//at the end of the function above we're calling this function to flip
//after they've had 9 sec to look at it 

function flipCards() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "pokeball.png";
        }
    } 
}

//now to account for the imgs when they're selected 
//these cards are being pulled in coordinates and parsed into integers to just
//turn them into numbers so it can later be checked if the array matches

let firstCard;
let secondCard; 

function clickedCard() {

    if (this.src.includes("pokeball.png")) {
        if (!firstCard) {
            firstCard = this;

            let coordinates = firstCard.id.split("-"); 
            let r = parseInt(coordinates[0]);
            let c = parseInt(coordinates[1]);
            console.log(board);

            firstCard.src = board[r][c] + ".png";
        }
        else if (!secondCard && this != firstCard) {
            secondCard = this;

            let coordinates = secondCard.id.split("-");
            let r = parseInt(coordinates[0]);
            let c = parseInt(coordinates[1]);

            secondCard.src = board[r][c] + ".png";

            setTimeout(reset, 1000);
            
        }
    }
}

//now to determine if the cards match 
//set up win / loss variables 
var losses = 0;
var wins = 0;

function reset() {
    if (firstCard.src != secondCard.src) {
        firstCard.src = "pokeball.png";
        secondCard.src = "pokeball.png";
        losses += 1;
        document.getElementById("losses").innerText = losses;
    } else {
        (firstCard.src = secondCard.src); {
            wins += 1;
            document.getElementById("wins").innerText = wins;
        }
    }
    
    //this is just to clear out the selection of the cards so you can keep playing
    firstCard = null;
    secondCard = null;
}
