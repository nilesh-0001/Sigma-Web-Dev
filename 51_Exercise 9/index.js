// Create a Faulty Calculator

// It take Two Number as a Input 

// It PerForms the wrong calculations 10% of the Times 
// +  --> -
// *  --> +
// -  --> /
// /  --> **

let random = Math.random()
let a = prompt("Enter the First No.")

let b = prompt("Enter the Second No.")

let c = prompt("Enter Your Operation")

const sign = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random>0.1){
    //  Perform the Correct colection 
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = sign[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}