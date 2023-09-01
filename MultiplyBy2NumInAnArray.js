const numbers = [1,2,3,4,5,6]

const doubledNumbers = numbers.reduce((acc, num) => {
    acc.push(num * 2)
    return acc;
}, [])

// map functions
const mapFunc = numbers.map(num => num * 2);

console.log('doubled numbers: ', doubledNumbers)
console.log('doubled numbers: ', mapFunc)
console.log('numbers: ', numbers)



const greaterThanThree = numbers.reduce((acc,num) => {
    if(num > 3){
        acc.push(num)
    }

    return acc;
}, [])

console.log("greater than three", greaterThanThree)