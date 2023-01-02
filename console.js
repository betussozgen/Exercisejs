/*
let greeting = document.querySelector("#greeting")


greeting.addEventListener("event", domClick)


function domClick() {
  console.log("Tıklandı")
  this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}*/


let counter = 0

let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decleraseDOm = document.querySelector("#declerase")

counterDOM.innerHTML = 0

increaseDOM.addEventListener("click",clickEvent)
decleraseDOm.addEventListener("click",clickEvent)

/*
function clickEvent(){
  console.log(this.id)
  if(this.id == "increase"){
    counterDOM.innerHTML = counter += 1
  }
  else{
    counterDOM.innerHTML = counter -= 1
  }
}



function clickEvent(){
  console.log(this.id)
  this.id == "increase" ? counterDOM.innerHTML = counter += 1 : counterDOM.innerHTML = counter -= 1
}*/

function clickEvent(){


  console.log(this.id)
  this.id == "increase" ? counter += 1 : counter -= 1
  counterDOM.innerHTML = counter


 }

    