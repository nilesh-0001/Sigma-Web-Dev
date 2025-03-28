// Create a business name generator by combining list of adjectives and shop name and another world .
  
/* 
Adjectives :
Crazy
Amazing 
fire

Shop nmae :
Engine 
Foods 
Garments

Another World :
Bros 
Limited 
Hub

*/

let random = Math.random()
let First, Second, Third;
// lets  Generate the buisnes name First, Second, Third

// Generate the First
if(random<0.33){
    First = "Crazy"
}
else if(random<0.66 && random>=0.33){
    First = "Amazing"
}
else{
    First = "Fire"
}

// Generate the second
random = Math.random()
if(random<0.33){
    Second = "Engine"
}
else if(random<0.66 && random>=0.33){
    Second = "Foods"
}
else{
    Second = "Garment"
}

// Generate the Third
random = Math.random()
if(random<0.33){
    Third = "Bro"
}
else if(random<0.66 && random>=0.33){
    Third = "Limited"
}
else{
    Third = "Hub"
}
console.log(First.concat( Second, Third))