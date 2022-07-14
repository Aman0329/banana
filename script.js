var button=document.querySelector("#btn");
var input_trans=document.querySelector("#inputtrans");
var output_trans=document.querySelector("#outputtrans");

//taking input
var input=input_trans.value;
 
var serverurl="https://api.funtranslations.com/translate/minion.json"

function getTranslated(text){
    return serverurl + "?" +"text=" +text
}

function errorHandler(error){
    console.log(error);
}
//button events
button.addEventListener("click",function(){
    fetch(getTranslated(input))
    .then(response=>response.json())
    .then(json=>{
        var translatedtext=json.contents.translated;
        console.log(translatedtext);
        output_trans.innerHTML=translatedtext;
      })
    .catch(errorHandler)
    
});

