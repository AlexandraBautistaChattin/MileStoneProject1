let losses = 0;
let wins = 0;

let cardList = ["darkness", "double", "fairy", "fighting", "fire", "grass", "lightening", "metal", "psychic", "water"]

let cardSet;
let board = [];
let rows = 4;
let colum = 5;

window.onload = function() {
    shuffleCards();
    startGame();
}

//actually getting the board set up

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);
}
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);

        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet [j] = temp;
    }
        console.log(cardSet);


