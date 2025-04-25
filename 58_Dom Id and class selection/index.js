console.log("Hello")


// That is for classname selection
let boxes = document.getElementsByClassName("box")

boxes[1].style.backgroundColor = "red"


// That is for idname selection
document.getElementById("red").style.backgroundColor = "blue"

// for querry selector 
document.querySelector(".box").style.backgroundColor = "green"

// with foreach loop
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"

})