var tabela = document.querySelector("table")

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
    //var evento = event.target;         evento que foi clicado
    //var paiAlvo = evento.parentNode;   pai do evento a TR = paciente
    //paiAlvo.remove();
});