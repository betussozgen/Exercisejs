/*
let greeting = document.querySelector("#greeting")
greeting.addEventListener("event", domClick)

function domClick() {
  console.log("Tıklandı")
  this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}*/


let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decleraseDOm = document.querySelector("#declerase")

counterDOM.innerHTML = counter

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
  
  this.id == "increase" ? counter += 1 : counter -= 1
  localStorage.setItem('counter', counter) //localstorage' a counter'ımı set ettim.
  counterDOM.innerHTML = counter

 }

 























 

 //------------------------------------------------------------------------------
/*
 const form = document.querySelector('form');
 const ul = document.querySelector('ul');
 const button = document.querySelector('button');
 const input = document.getElementById('item');
 let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
 
 localStorage.setItem('items', JSON.stringify(itemsArray));
 const data = JSON.parse(localStorage.getItem('items'));
 
 const liMaker = (text) => {
   const li = document.createElement('li');
   li.textContent = text;
   ul.appendChild(li);
 }
 
 form.addEventListener('submit', function (e) {
   e.preventDefault();
 
   itemsArray.push(input.value);
   localStorage.setItem('items', JSON.stringify(itemsArray));
   liMaker(input.value);
   input.value = "";
 });
 
 data.forEach(item => {
   liMaker(item);
 });
 
 button.addEventListener('click', function () {
   localStorage.clear();
   while (ul.firstChild) {
     ul.removeChild(ul.firstChild);
   }
   itemsArray = [];
 });
   */ 