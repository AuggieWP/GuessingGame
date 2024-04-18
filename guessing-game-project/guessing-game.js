const readline = require("readline")
let rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})


let secretNumber = 0
let numAttempts = 0
function checkGuess(num){
    if (numAttempts === 0) {
        console.log("Out of attempts!")
        return null
    } else if (num > secretNumber) {
        console.log("Too High")
        numAttempts--
        return false
    } else if (num < secretNumber) {
        console.log("Too low")
        numAttempts--
        return false 
    } else {
        console.log("Correct")
        return true
    }
}

function askGuess(){
    rl.question("Enter a guess: ", (num) => {
      let boolean =  checkGuess(Number(num))
        if (boolean === null) {
            console.log("You lose!")
            rl.close()
        } else if (boolean) {
            console.log("You Win!")
            rl.close()
        }  else return askGuess()
    });
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function askRange() {
    
    rl.question("Enter a max number: ", (max) => {
        rl.question("Enter a min number: ", (min) => {
            console.log("I'm thinking of a number between " + min + " and " + max + "...")
            secretNumber = randomInRange(Number(min), Number(max))
            askLimit()
        })
    })
}

function askLimit() {
    rl.question("Enter number of attempts: ", (num) => {
        numAttempts = num -1
        askGuess()
    })
}

askRange()