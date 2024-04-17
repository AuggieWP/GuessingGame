const readline = require("readline")
let rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})


let secretNumber = 7;
function checkGuess(num){
    if (num > secretNumber) {
        console.log("Too High")
        return false
    } else if (num < secretNumber) {
        console.log("Too low")
        return false
    } else {
        console.log("Correct")
        return true
    }
}

function askGuess(){
    rl.question("Enter a guess: ", (num) => {
      let boolean =  checkGuess(Number(num))
            if (boolean) {
                console.log("You Win!")
                rl.close()
        }  else return askGuess()
    });
}

askGuess()