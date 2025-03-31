// Write a Program to calculate Factorial of a number using reduce and using for loops.


// 6! = 6*5*4*3*2*1

let a = 5


function Factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}

console.log(Factorial(a))

function facfor (number){
    let fac = 1
    for (let index = 1; index <= number; index++) {
        fac = fac * index
   }

   return fac
}

console.log(facfor(5))