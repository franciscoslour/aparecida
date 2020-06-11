
var pacientes = document.querySelectorAll(".paciente");

for(let i =0; i < pacientes.length; i++){
    let paciente = pacientes[i];
    let tdPeso = buscarElementoPorClasse(paciente, ".info-peso");
    let tdAltura = buscarElementoPorClasse(paciente, ".info-altura");

    let tdIMC = document.createElement("td");
    tdIMC.classList.add("info-imc");
    paciente.appendChild(tdIMC);
    
    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;
    
    let pesoEhValido = validarPeso(peso);
    let alturaEhValida = validarAltura(altura);

    if(pesoEhValido && alturaEhValida){
        tdIMC.textContent =  calcularIMC(peso,altura);
        continue;
    }
    
    if(!pesoEhValido){
        tdIMC.textContent = "Peso inválido";
    }
    
    if(!alturaEhValida){
        tdIMC.textContent = "Altura inválida"
    }

    paciente.classList.add("paciente-invalido");
}

function buscarElementoPorClasse(paciente, classe){
    return paciente.querySelector(classe);
}

function calcularIMC(peso, altura){
    var imc = (peso/(altura*altura));
    return imc.toFixed(2);
}

function validarPeso(peso){
    return ((peso >0) && (peso < 1000));
}

function validarAltura(altura){
    return ((altura >0) && (altura<3));
}
