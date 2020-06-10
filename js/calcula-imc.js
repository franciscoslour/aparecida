
var pacientes = document.querySelectorAll(".paciente");

for(let i =0; i < pacientes.length; i++){
    let paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdIMC = document.createElement("td");
    tdIMC.classList.add("info-imc");
    paciente.appendChild(tdIMC);
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if(peso <= 0 || peso>=1000){
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    
    if(altura <= 0 || altura >=3){
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida !"
        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida){
        tdIMC.textContent =  calcularIMC(peso,altura);
    }
}

function calcularIMC(peso, altura){
    var imc = (peso/(altura*altura));
    return imc.toFixed(2);
}



