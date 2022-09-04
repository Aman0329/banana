var button=document.querySelector("#btn");
var input_trans=document.querySelector("#inputtrans");
var output_trans=document.querySelector("#outputtrans");


 
var serverurl="https://api.funtranslations.com/translate/minion.json"

function getTranslated(text){
    return serverurl + "?" +"text=" +text
}

function errorHandler(error){
    alert("maximum limit reached");
}

button.addEventListener("click",function(){
    var input=input_trans.value;
    fetch(getTranslated(input))
    .then(response=>response.json())
    .then(json=>{
        var translatedtext=json.contents.translated;
        console.log(translatedtext);
        output_trans.innerHTML=translatedtext;
      })
    .catch(errorHandler)
    
});

