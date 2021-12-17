var inputText = document.querySelector('input[type="text"]');
var fromCurrency = document.querySelector('select[name="from_currency"]');
//var toCurrency = document.querySelector('select[name="to_currency"]');
var btn = document.querySelector('#btn-convert');
var result = document.querySelector('#show-result');

btn.onclick = function(){
    var input = Number(inputText.value);
    var output =  fromCurrency.value==='vietnam'?convertVietnamToUsd(input):convertUSDToVietnam(input);
    result.innerHTML = output;
}
function convertVietnamToUsd(value){
    return value*0.000043;
}
function convertUSDToVietnam(value){
    return value*23000;
}
