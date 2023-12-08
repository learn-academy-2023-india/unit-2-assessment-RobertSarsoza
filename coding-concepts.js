// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "India 2023"
//  console.log(cohort.split(" "))

// a) Your answer: 

// .split would break apart the string into "India" , "2023" 

// b) Verify and explain: 

// The output was as I stated but in brackets, because it takes the string and turns it into an array of substrings.

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer:
// it will log " Hello, LEARN Student " 
// b) Verify and explain: It was supposed to log Hello, LEARN Student! , but the return is missing so the console.log would return undefined. I didnt see the exclamation point and by putting quotations around my original answer it looks like I was saying the output would be a string.

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//  console.log(onlyOdds)

// a) Your answer:

//  it will log 3

// b) Verify and explain:

// It did not log 3, it instead logged the odd numbers 11, 13 and 15 in the form of an array. I keep  anticipating trick questions in these assesments and I tend to overthink the code. I thought the answer of 11,13, and 15 was too straight forward so instead I stated how many odd numbers the code would determine as true.

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer:

// I believe JavaScript would be the output

// b) Verify and explain:

// JavaScript waas correct. the object is myCodingSkills using dot notation you can access upon the languages property and using the index of 0 you can access the element in the array with that index. 

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "India"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:

// George India 2023

// b) Verify and explain:

// The output would be 
// Learn {student: "George", cohort: "India", year: 2023 }
// the log gives the constructor function Learn in the format set by the class.
