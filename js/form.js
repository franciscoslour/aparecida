var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let paciente = obterInformacoesDoPacienteNoFormulario(form);
    let pacienteTr = montarTrNaTabela(paciente);
    adicionarTrNaTabela(pacienteTr);
   
    form.reset();
});

function obterInformacoesDoPacienteNoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTrNaTabela(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd("info-nome", paciente.nome));
    pacienteTr.appendChild(montarTd("info-peso", paciente.peso));
    pacienteTr.appendChild(montarTd("info-altura", paciente.altura));
    pacienteTr.appendChild(montarTd("info-gordura", paciente.gordura));
    pacienteTr.appendChild(montarTd("info-imc", paciente.imc));

    return pacienteTr;
}

function montarTd(classe, valorDaTd){
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valorDaTd;
    return td;
}

function adicionarTrNaTabela(pacienteTr){
    let tabela = document.querySelector("#tabela-pacienbtes");
    tabela.appendChild(pacienteTr);
}
