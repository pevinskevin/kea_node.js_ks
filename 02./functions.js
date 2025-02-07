// hoisting - functions "bubble to the surface" and thus don't need to be declared before calling it. 
console.log(getRandomInt(0, 10))

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) - min);
}

// This is an anonymous function **NOTE** the function doesn't have a name hence it's anonymous.
const whatIsThis = function getRandomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) - min)
}

// An arrow function
//const getRandomIntArrowFunction = function (min, max) => {
//    return Math.floor(Math.random() * (max + 1 - min) - min)
// }


// Action is a "callback" - callback is a function that's given as a parameter to another function.
// possibly with the aim of calling it later (but not necessarily)
function genericPerformer(name, action){
    return action(name);
}

const codingAction = (name) => `${name} likes coding.`;

// assignment: using the generic performer, I would like it to say: "Lasse likes coding.."
console.log(genericPerformer("Lasse", codingAction))

//Andreas sleeping
function sleepingAction(name){
    return `${name} loves sleeping`
}

console.log(genericPerformer("Lasse", sleepingAction))

// tara boxing
// assigment: the desired result is : Tara owns at boxing
// assigment: write it all as a one-liner
console.log(genericPerformer("Tara", (name => `${name} owns at boxing`)));
