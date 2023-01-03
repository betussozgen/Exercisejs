
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decleraseDOm = document.querySelector("#declerase")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click",clickEvent)
decleraseDOm.addEventListener("click",clickEvent)


function clickEvent(){
  
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter', counter) //localstorage' a counter'ımı set ettim.
    counterDOM.innerHTML = counter
  
   }