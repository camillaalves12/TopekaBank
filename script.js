function ConverterDolar () {
let valorReal = document.getElementById('inputValue').value;
let USD = " USD"

valorDolar = valorReal *  0.1893;

let valorDolarFixado = valorDolar.toFixed(2);

let resultado = document.getElementById("result");

let resultadoFinal = valorDolarFixado

resultado.innerHTML = resultadoFinal + USD;

}


function ConverterEuro () {
let valorReal = document.getElementById('inputValue').value;
let EUR = " EUR"; 

valorEuro = valorReal * 0.1944;

let valorEuroFixado = valorEuro.toFixed(2);

let resultado = document.getElementById("result");

let resultadoFinal = valorEuroFixado 

resultado.innerHTML = resultadoFinal + EUR;

}

