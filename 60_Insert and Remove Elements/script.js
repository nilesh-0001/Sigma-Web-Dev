// document.querySelector(".box").innerHTML
// // document.querySelector(".box").innerHTML
// 'Hey i am a box'
// document.querySelector(".container").innerHTML

// '\n      <div class="box">Hey i am a box</div>\n    '

// document.querySelector(".container").innerText

// 'Hey i am a box'
// document.querySelector(".box").innerHTML
// 'Hey i am a box'

// document.querySelector(".box").innerHTML = "hey i am nilesh"
// 'hey i am nilesh'

// document.querySelector(".container").hidden = false
// false

// document.querySelector(".container").hidden = true
// true

// document.querySelector(".container").textContent
// '\n      hey i am nilesh\n      Hey i am a box\n
//   '
// document.querySelector(".container").nodeName
// 'DIV'

// document.querySelector(".container").tagName
// 'DIV'

// document.querySelector(".container").outerHTML
// '<div class="container" hidden="">\n      <div class="box" style="color: green;">hey i am nilesh</div>\n      <div class="box">Hey i am a box</div>\n    </div>'

// document.querySelector(".box").dataset
// DOMStringMap {createdby: 'Nishu'}

// document.querySelector(".box").hasAttribute("style")
// true

// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: data-createdby, 2: style, class: class, data-createdby: data-createdby, style: style, length: 3}

// document.querySelector(".box").removeAttribute("style")
// undefined

// document.querySelector(".box").setAttribute("style", "color:blue")
// undefined

// Important !
// let div = document.createElement("div");
// div.innerHTML = "My name is Nishu <b> and it is inserted by Nilesh</b>";
// div.setAttribute("class", "Student");
// document.querySelector(".box").replaceWith(div);


// Important !
// let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterend", "<b>Hi !</b>")


// document.querySelector(".box").remove()
// undefined

// document.querySelector(".container").classList
// DOMTokenList(4) ['container', 'red', 'bg-green', 'yellow', value: 'container red bg-green yellow']0: "container"1: "red"2: "bg-green"3: "yellow"length: 4value: "container red bg-green yellow"[[Prototype]]: DOMTokenList


// document.querySelector(".container").className
// 'container red bg-green yellow'

// document.querySelector(".container").classList.add("Nishu")
// undefined

// document.querySelector(".container").classList.remove("yellow")
// undefined

// document.querySelector(".container").classList.toggle("yellow")
// false

// document.querySelector(".container").classList.toggle("yellow")
// true