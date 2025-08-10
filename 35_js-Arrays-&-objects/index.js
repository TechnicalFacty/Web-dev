let fruits = ["Apple","Banana","Mango"]
         //     0        1        2       3      4   .....
console.log(fruits[0])

fruits[1]="Orange" // Update (change value)
console.log(fruits[1])

fruits.push("Grapes") // add value at end
console.log(fruits[3])

fruits.pop()//remove last

fruits.unshift("Lemon") // add value at start
console.log(fruits[0])

fruits.shift(); //remove first

console.log(fruits.length);



//object
let person = {
    name:"Sagar",
    age:21
}

//access values
console.log(person.name)
console.log(person["age"])

person.age = 22; //update values
console.log(person.age)

//add
person.city = "Mumbai";
console.log(person.city)

//array of object
let user = [
    {name:"raj",age:21},// 0
    {name:"sagar",age:22}// 1
]
console.log(user[1].name)