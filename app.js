var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
  return serverURL + "?" + "text=" + text
}

function errorHandler(error){
  console.log("error", error);
  alert("somthing went wrong with server! plz.. try somtime..")
}

function clickEventHandler(){
  var inputText = txtInput.value;

  fetch(getTranslatedURL(inputText))
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated;
    output.innerHTML = translatedText;
  })
  .catch(errorHandler)
  }


btnTranslate.addEventListener("click",  clickEventHandler)
  