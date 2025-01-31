
console.log("hello world");

//Avoid using var - let and const has become the standard.
// var name = 'Anders'


// const is NOT a constant
// that means that const CAN have its value changed
// const is a constant in the DECLARATION
// const MUST be declared as it is initialized


const hobbies = ["coding"]

hobbies.pop();

hobbies.push("drawing", "painting")

console.log(hobbies);

// " vs. ' - the form you use depends on the content of the log you want to print? 
console.log("I can't dance!");
console.log('I can "dance"');

//Backticks muliggør string interpolation -> ${} string interpolation syntax
console.log(`${2 + 2}I can dance ""''''*"*"**"""´
    bangalang
    ´´´´´`)

// What is key-value path? 
// What is JSON? How does it differ from Javascript and Objects? 
// ---------

const assigmentDescription = "...and the value is...";
const value = 4;

// don't use plus in console.log to avoid type coercion
console.log(assigmentDescription, value)
console.log(assigmentDescription + value)