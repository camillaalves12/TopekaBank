//Definindo as variáveis que serão utilizadas na API
display.alert("ok");

const select = document.querySelectorAll(".curracy");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

//API responsável pelos dados monetarios e pela conversão de valores
fetch("https://api.frankfurter.app/currencies")
.then((data) => data.json())
.then((data) => {
  display(data);
});

//função que desmontra no seletor os tipos de moedas para a conversão
function display(data){
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++){
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

//criando o evento que converte as moedas com click no botão
btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = input.value;

  if(currency1 != currency2){
    convert(currency1, currency2, value);
  }else{
    //caso as moedas selecionadas sejam iguais, apresentar o seguinte alert
    alert("SELECIONE DIFERENTES MOEDAS!");
  }
});

//função convert() responsável por realizar a conversão das moedas
function convert(currency1, currency2, value){
  const host = "api.frankfurter.app";
  fetch{
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  }

  .then((val) => val.json())
  .then((val) => {
    console.log(Object.values(val.rates)[0]);
    result.value = Object.values(val.rates)[0]
  });

  }
