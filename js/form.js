var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;
    
    let nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = nome;

    let pesoTd = document.createElement("td");
    pesoTd.classList.add("info-peso");
    pesoTd.textContent = peso;

    let alturaTd = document.createElement("td");
    alturaTd.classList.add("info-altura");
    alturaTd.textContent = altura;

    let gorduraTd = document.createElement("td");
    gorduraTd.classList.add("info-gordura");
    gorduraTd.textContent = gordura;

    let imcTd = document.createElement("td");
    imcTd.classList.add("info-imc");
    imcTd.textContent = calcularIMC(peso,altura);

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    let tabela = document.querySelector("#tabela-pacienbtes");
    tabela.appendChild(pacienteTr);
});