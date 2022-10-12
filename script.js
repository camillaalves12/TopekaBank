function ConverterDolar () {
let valorReal = document.getElementById('inputValue').value;

valorDolar = valorReal * 0.2;

let valorDolarFixado = valorDolar.toFixed(2);

let resultado = document.getElementById("result");

let resultadoFinal = valorDolarFixado

resultado.innerHTML = resultadoFinal;

}


function ConverterEuro () {
let valorReal = document.getElementById('inputValue').value;

valorEuro = valorReal * 0.4;

let valorEuroFixado = valorEuro.toFixed(2);

let resultado = document.getElementById("result");

let resultadoFinal = valorEuroFixado

resultado.innerHTML = resultadoFinal;

}



// function ConverterDolar() {
//   var valorDolar = document.getElementById("inputValue").value;
//   /* 1 real brasileiro vale 0.20 em dolar*/

//   var valorReal = valorDolar * 0.2;
//   var valorRealFixado = valorReal.toFixed(2);

//   var elementoConvertido = document.getElementById("result");
//   var valorConvertido = "O resultado em Dólar é R$ " + valorRealFixado;

//   //elementoConvertido.innerHTML = valorConvertido;
// }





// function ConverterEuro() {
//   var valorEuro = document.getElementById("inputValue").value;
//   /*1 real brasileir vale 018 em euro */
//   var valorReal = valorEuro * 0.18;
//   var valorRealFixado = valorReal.toFixed(2);

//   var elementoConvertido = document.getElementById("input");
//   var valorConvertido = "O resultado em Euro é R$ " + valorRealFixado;

//  // elementoConvertido.innerHTML = valorConvertido;
// }
