// Global Scope
let n = "Karan";
function greet(){
    console.log("Hello :"+n);
}
greet();

console.log(n);


//Function Scope
function testscope(){
    let secret ="Hidden";
    console.log(secret);
}
testscope();

// console.log(secret);


//Block Scope
if(true){
    let age = 20;
    console.log(age);
}
// console.log(age);


//Hoisting

//Function Hoisting
sayHi();


function sayHi(){
    console.log("Hi there!!")
}

//var Hoisting

console.log(x);

var x = 20;


// let & const Hoisting

console.log(a)

const a = 40;



//challenge make driving license check for legal age of 30 or more usinfg conditional statements