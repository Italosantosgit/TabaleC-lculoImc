console.log("fui carregado de um arquivo externo");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

var TdPeso = paciente.querySelector(".info-peso");
var peso = TdPeso.textContent;

var TdAltura = paciente.querySelector(".info-altura");
var altura = TdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = validarPeso(peso);
var alturaEhValida = validaAltura(altura);

if(!pesoEhValido){
  console.log("peso inválido!");
  pesoEhValido = false;
  tdImc.textContent = "Peso inválido!";
  paciente.classList.add("paciente-invalido");
}
if(!alturaEhValida){
  console.log("altura inválida!");
  alturaEhValida = false;
  tdImc.textContent = "Altura inválido!";
  paciente.classList.add("paciente-invalido");
}

if(pesoEhValido && alturaEhValida){
var imc = peso / (altura * altura);
tdImc.textContent = imc.toFixed(2);
}

function calculoImc(peso,altura){
  var imc = 0;
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validarPeso(peso){
  if (peso >= 0 && peso < 1000) {
    return true;
  }else {
    return false;
  }
}
function validaAltura(altura){
  if (altura >= 0 && altura <=3.0) {
    return true;
  }else {
    return false;
  }
}
/*
metodo de click
titulo.addEventListener("click",function mostraMensagem(){
  console.log("fui clicado!");
});
*/
}
