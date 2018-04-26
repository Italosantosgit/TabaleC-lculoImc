var campofiltro = document.querySelector("#filtrar-tabela");

campofiltro.addEventListener("input",function(){
    console.log("Digitado", this.value);
    
    var pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){
        for(i = 0 ; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = RegExp(this.value,"i");
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
        
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }
                    
});