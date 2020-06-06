
var pacientes = document.querySelectorAll(".paciente");

for(let i =0; i < pacientes.length; i++){
    let paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdIMC = paciente.querySelector(".info-imc");
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if(peso <= 0 || peso>=1000){
        pesoEhValido = false;
        tdPeso.style.background = 'red';
    }
    
    if(altura <= 0 || altura >=3){
        alturaEhValida = false;
        tdAltura.style.background = 'red';
    }
    
    if(pesoEhValido && alturaEhValida){
        tdPeso.style.background = 'white';
        tdAltura.style.background = 'white';
        var imc = (peso/(altura*altura));
        tdIMC.textContent =  imc.toFixed(2);
    }else{
        tdIMC.textContent = 'Peso ou/e altura inválida !';
    }

}



