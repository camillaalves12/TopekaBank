function ConverterDolar() {
   var valorDolar = document.getElementById("valor").value;
   /* 1 real brasileiro vale 0.20 em dolar*/
   var valorReal = valorDolar * 0.2;
   var valorRealFixado = valorReal.toFixed(2);
 
   var elementoConvertido = document.getElementById("valorConvertido");
   var valorConvertido = "O resultado em Dolar é R$ " + valorRealFixado;
 
   elementoConvertido.innerHTML = valorConvertido;
 }
 
 function ConverterEuro() {
   var valorEuro = document.getElementById("valor").value;
   /*1 real brasileir vale 018 em euro */
   var valorReal = valorEuro * 0.18;
   var valorRealFixado = valorReal.toFixed(2);
 
   var elementoConvertido = document.getElementById("valorConvertido");
   var valorConvertido = "O resultado em Euro é R$ " + valorRealFixado;
 
   elementoConvertido.innerHTML = valorConvertido;
 }
 