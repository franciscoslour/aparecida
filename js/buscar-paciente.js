var buscar = document.querySelector("#buscar-paciente");

buscar.addEventListener("click", function(){

    let xhr = new XMLHttpRequest();    
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){

        let erroAjax = document.querySelector("#erro-requisicao");
        if(xhr.status == 200){
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente){
                adicionarTrNaTabela(paciente);
            });
            erroAjax.classList.add("invisivel");
        }else{
            erroAjax.textContent = "Erro ao buscar paciente";
            erroAjax.classList.remove("invisivel");
        }
        
    });
    
    xhr.send();

});

