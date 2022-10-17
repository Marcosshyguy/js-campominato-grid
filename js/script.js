// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// generate the boxes to put insede the grid
// chose the html element that i need
// grid
const grid = document.querySelector(".row");

// btn
const btnPlay = document.getElementById("play")


// create the grid boxes  FUNCTION <-----
let gridBox = document.createElement("div") 
gridBox.classList.add("box");
gridBox.innerHTML = "bye bye";

// create a random number generator with function that produce number between two ranges min max and that not prodeuce duplicated numbers
// let randomNumber = 0
// function getRandomNumber(min, max) {
//      randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
//     return randomNumber;
//   }


const generatedNumber = consecutiveNumberGen (100);
console.log(generatedNumber)


/**
 * function that gives you an arry with consecutive number   
 * @param {number}} arrayLenght
 * @returns {object} boxNumber
 */
function consecutiveNumberGen (arrayLenght){
    let boxNumber = []
    for(let arrayIndex = 1; arrayIndex <= arrayLenght; arrayIndex++) {
        boxNumber.push(arrayIndex)
        
    }
    return boxNumber
}
