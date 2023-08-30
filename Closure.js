// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown() {
    let startingNum = 11
    return function decrease() {
        startingNum -= 1
        return startingNum
    }
}

const countingDown = countdown()

console.log(countingDown())
console.log(countingDown())
console.log(countingDown())

// Stretch goal
function countdown1(startingNumber, step){
    let startingNum = startingNumber
    return function decrease(){
        startingNum -= step
        return startingNum
    }
}

const countingDown1 = countdown1(11, 1)

console.log(countingDown1())
console.log(countingDown1())
console.log(countingDown1())