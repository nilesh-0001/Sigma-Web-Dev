let arr = [1, 2, 3, 4, 5, 6, false, "Not nishu"];
// Index = 0   1  2  3  4   5   6     7
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log(arr.length);

console.log(typeof arr);
// Type of aan array is object

arr[0] = true;
console.log(arr);

// // tostringmethod
console.log(a.toString());

// // join method
console.log(a.join(" --- "));

// // pop method
// remove the last element
console.log(a.pop());

// // push method
console.log(a.push(12));
console.log(a);

// // shift method
// removes the first element
console.log(a.shift());
console.log(a);

// // unshift method
// // add element in the first
console.log(a.unshift(45));
console.log(a);

// delete method
console.log(delete a[0]);
console.log(a);

// // concat method use for adding two or more than two arrays
let a1 = [1, 2, 3];
let a2 = [11, 12, 13];
let a3 = [21, 22, 33];

console.log(a1.concat(a2, a3));

console.log(a1, a2, a3);

// // splice method
let x = [1, 2, 3, 4, 5, 6, 7];
console.log(x.splice(1,2))
console.log(x)

let y = [11, 12, 13, 14, 15, 16]
y.splice(3,3,40,50,60)
console.log(y)

// // slice method
let z = [1, 2, 3, 4, 5]
console.log(z.slice(2))
console.log(z.slice(1,3))

// reverse
console.log(z.reverse())



// Looping through arrays

// For Loop with Array
let num = [11, 21, 31, 41, 51];
for (i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// foreach method 
num.forEach((element)=>{
   console.log( element+1)
})

num.forEach((value,element,arr)=>{
    console.log(value,element,arr)
})

let obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}


let a = [1,2,3,4]
for (const value of num) {
    console.log(value)
}


let arr = [1,11,45,14,5,8]
// let narr = []

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    narr.push(element**2)
}

// Alternative method 
let narr = arr.map((e,inex,arr)=>{
    return e**2
})
console.log(narr)

const greatethanseven = (e)=>{
    if(e>7){
        return true
    }
    return false
}


console.log(narr.filter(greatethanseven))


let arr2 = [1,2,3,4,5]

const red = (a,b)=>{
    return a*b
}

console.log(arr2.reduce(red))
let n = "Nilesh"
console.log(Array.from(n))