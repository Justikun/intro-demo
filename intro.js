const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question("Hello, what is your name?", function(answer) {
    console.log("Hi " + answer)
    reader.resume()
    
})


// console.log("Hello World")

const firstName = "Justin"
const lastName = "Lowry"
const age = 21

// console.log(firstName, lastName, age)

let x = 4
let y = 100
let z = 23

let sum = x + y + z;

// console.log(sum)

const greeting = "Hello, my name is"

// console.log (`${greeting}  ${firstName } ${lastName}`)

