import { faker } from "@faker-js/faker"

const randomTimeout = faker.number.int({min: 1000, max: 5000}) 
const randomText = faker.lorem.words() 

function printWithTimeout(text, timeout) {
  setTimeout(() => {
    console.log(text)
  }, timeout) 
}

const unusedVariable = "This variable is not used"

printWithTimeout(randomText, randomTimeout)    
console.log(`Total wait time: ${randomTimeout} ms`)
