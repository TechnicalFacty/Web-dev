// variable named user and age and day(global scope).

// Greet them using a function.

// Use if/else to check voting eligibility.

// Print types of some variables.

// Use a loop to print numbers (fun add-on).

// Use switch to show message based on day.


// Things to be used
// Variables ✅

// Data Types ✅

// Operators ✅

// If/Else ✅

// Functions ✅

// Loops ✅

// Switch ✅

let name = "facty"
let age = 22
let day = 4

function greet(user){
    return `Hello ${user}`
}
console.log(greet(name))



if (age>=18){
    console.log("You are eligible for voting")
}
else
{
    console.log("You are not eligible for voting")
}



console.log(typeof name)
console.log(typeof age)
console.log(typeof day)



for (let i = 1; i <= 15; i++){
    console.log(i);
}


switch(day){
    case 1: console.log("Today is Monday");
    case 2: console.log("Today is Tuesday");
    case 3: console.log("Today is Wednesday");
    break;
    case 4: console.log("Today is Thrusday");
    case 5: console.log("Today is Friday");
    case 6: console.log("Today is Saturday");
    case 7: console.log("Today is Sonday");
}
