// A JavaScript function is a block of code designed to perform specific tasks

function greet() {
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!


// basic function
function morning() {
    console.log("Good Morning!");
}

morning();



// function with parameter
function hlo(a){
    console.log("Hello, "+ a +"!")
}

hlo("Arjun");

function kilo(aj){
    console.log("Namaste, "+ aj)
}
kilo("Karan")

// function with return value
function add(a,b){

    return a+b
}

let c = add(2,3);

console.log(c);


// Anonymous Function (assigned to variable)
let multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 2)); // Output: 8


// Arrow Function
const square = (num) => {
  return num * num;
};

console.log(square(5)); // Output: 25


let j = (f) =>{
    return f+f
};
console.log(j(4))


// self invoking
(function() {
  console.log("This runs automatically!");
})();

(function() {
        console.log("hello world of java script");
})();
