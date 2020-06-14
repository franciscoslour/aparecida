var corpoDaTabela  = document.querySelector("#tabela-pacientes");

corpoDaTabela.addEventListener("dblclick", function(event){
    let tr = event.target.parentNode;
    tr.classList.add("fadeOut");
    
    setTimeout(function(){
        tr.remove(); 
    }, 500);
});


