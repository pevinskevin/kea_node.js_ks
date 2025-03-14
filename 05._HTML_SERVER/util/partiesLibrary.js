// Won't work because then JS will believe it's a library.
// const parties = require("parties.json");

// Now JS can find it
const parties = require('./parties.json');

// If a variable is declared, and you want to include it in an Object, you don't need to declare the value.
// Only the property.
module.exports = {
    parties
}
// instead of 
module.exports = {
    parties: parties
}
