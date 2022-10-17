// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// generate the boxes to put insede the grid
// chose the html element that i need
// grid
const grid = document.querySelector(".row");

// btn
const btnPlay = document.getElementById("play"); 

// select options
const difficulty = document.getElementById("difficulty");
const difficultyEz = difficulty.options[3];
const difficultyMid = difficulty.options[2];
const difficultyHard = difficulty.options[1];
console.log(parseInt(difficultyEz.value), difficultyMid,difficultyHard)

const generatedNumber = consecutiveNumberGen (100);
console.log(generatedNumber)

// BONUS Listener 
btnPlay.addEventListener("click",function(){

    if(difficultyEz.selected == true){
        // generate number
        const generatedNumber = consecutiveNumberGen (parseInt(difficultyEz.value));
        console.log(generatedNumber)
        
        // generate boxes in the html
        const box = boxGenerator(generatedNumber);

    }else if (difficultyMid.selected == true){
        // generate number
        const generatedNumber = consecutiveNumberGen (parseInt(difficultyMid.value));
        console.log(generatedNumber)

        
        // generate boxes in the html
        const box = boxGenerator(generatedNumber);
    
    }else if(difficultyHard.selected == true){
        // generate number
        const generatedNumber = consecutiveNumberGen (parseInt(difficultyHard.value));
        
        console.log(generatedNumber)
        // generate boxes in the html
        const box = boxGenerator(generatedNumber);

    }else{
        alert ("Scegli una difficoltà")
    }
})



// FUNCTION
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

// Ui Function

/**
 * create the grid boxes generator 
 * @param {Array} numberOfBoxes
 * @returns {object} 
 */
function boxGenerator(numberOfBoxes) {
    for(let i = 1; i <= numberOfBoxes.length; i++){
        let number = i
        let gridBox = document.createElement("div") 
        gridBox.classList.add("box");
        gridBox.innerHTML = number;
        gridBox.addEventListener("click", function(){
            this.classList.toggle("bg-blue");
            console.log(i)
        })
        grid.append(gridBox)
    }
}

// create a random number generator with function that produce number between two ranges min max and that not prodeuce duplicated numbers
// let randomNumber = 0
// function getRandomNumber(min, max) {
    //      randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    //     return randomNumber;
    //   }