var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var output = document.querySelector("#output")

function clickEventHandler(){
  output.innerHTML = "bannananananana " + txtInput.value 
  } 


btnTranslate.addEventListener("click",  clickEventHandler)
  