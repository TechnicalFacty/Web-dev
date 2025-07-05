var ab = 1; //statemnt 1
var ba =2; //statement 2


//Var Let const

{
    let a = 10; //block scope
}
//cant not use here

{
    var b = 20; //global scope
}
//can be use

{
    let c =20;
//    let c =30; // can not redeclare
}


var d =50;
//value of var d = 50
console.log(d)
{
    var d = 300; //can be redeclared
    // var d value is 300
    console.log(d)
}
//var d value is 300
console.log(d)


let r =2;
//let r value 2
console.log(r)
{
    let r = 100; //block scope
    //let r value 100
    console.log(r)
}
//let r value 2
console.log(r)
