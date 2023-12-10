// ASSESSMENT 2: Coding Practical Questions with Jest

// const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe("multiplyByThree", () => {
//     it("is a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
// expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//   })
// })

// b) Create the function that makes the test pass.

// const multiplyByThree = (array) => {
//     return array.map((value) => {
//       return value * 3
//     })
//   }

// Pseudo code:

// input: single array of numbers
// output: array with the numbers mult by 3
// do something to every item in the array - map
// value * 3

// ----1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.

// const divisibleByThree = (object) => {

//     if (object.number % 3 === 0) {
//         return `${object.number} is divisible by three`
//     } else {
//         return `${object.number} is not divisible by three`
//       }
//     }

// describe("divisibleByThree", () => {
//     it("tells if a number from an object is divisible by three or not", () => {

//         const object1 = { number: 15 }
//         // Expected output: "15 is divisible by three"
//         const object2 = { number: 0 }
//         // Expected output: "0 is divisible by three"

//         expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
//         expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
//     })

//       it("tells if a number from an object is divisible by three or not even for non-divisible numbers", () => {
//         const object3 = { number: -7 }
//         // Expected output: "-7 is not divisible by three"

//         expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
//     })
// })

// Pseudo code:
// First utilize each object and its properties to make a test using the jest test structure **describe, it, expect**.
// The function devisibleByThree uses the object as a parameter and then uses an if statement to tell the number in the object that if it is divisible by 3 with no remainder then to return the object and its property is divisible by three.
// If it is not the else statement is used to return that the object and its property is not divisible by three.
// Then input the function(s) correctly within the structure **before expect(s)**. 
// Now run the test and correct any errors so the test will pass.
// The Describe statement will encompass the entire 3 objects.
// The first It statement will contain objects 1 and 2 and their Expect statements, because they both are dividible by 3 and their expect statements must reflect that.
// After both Expect statements the final It statement and Expect statement will contain object3 because -7 is not divisible by 3 and the expect statement must reflect that. 


// ----2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

const capitalizeFirstLetter = (array) => {
        return array.map((nouns) => {
            return nouns.charAt(0).toUpperCase() + nouns.slice(1)
        })
      }

describe("capitalizeFirstLetter", () => {
    it("returns each array's element with the first letter of the string capitalized ", () => {

  const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
  const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

      expect(capitalizeFirstLetter(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizeFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })

// Pseudo code: 
// First utilize each array and its elements to make a test using the jest test structure **describe, it, expect**.
// Next create the function CapitalizeFirstLetter to use an array and return the entire array with the character at the 0 index as capitalized using the toUpperCase method, then using the slice method to exempt the rest of the elements from toUpperCase method starting at the 1 index.
// Then input the function(s) correctly within the structure **before expect(s)**. 
// Now run the test and correct any errors so the test will pass.
// The Describe statement will encompass the entire 2 noun arrays.
// The It statement will contain both arrays and 2 Expect statements, because they both will have theit 0 index character capitalized and returned. 



  
