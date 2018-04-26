var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  // extraindo informações do paciente do form
  var paciente = obtermPacienteDoFormulario(form);
  // cria a tr e td do paciente
  var pacienteTr = montaTr(paciente);

  var erros = validarPaciente(paciente);

  if (erros.length > 0){
    exibeMendagensDeErro(erros);
    return;
  }

  //adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
  //apagando mensagens de erro
  var mensagenDeErro = document.querySelector("#mensagens-erro");
  mensagenDeErro.innerHTML="";
});

function obtermPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculoImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
// cria a tr
  var pacienteTr = document.createElement("tr");
// coloca a classe
  pacienteTr.classList.add("paciente");
  
  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validarPaciente(paciente){

  var erros = [];

  if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco");

  if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco");

  if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco");

  if(paciente.gordura.length == 0) erros.push("Gordura não pode ser em branco");

  if (!validarPeso(paciente.peso)) erros.push("Peso é invalido pelo metodo")

  if (!validaAltura(paciente.altura)) erros.push("Altura é invalida pelo metodo");

  return erros;
}
function exibeMendagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
//apaga todas as mensagens de erros
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}