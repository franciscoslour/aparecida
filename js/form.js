var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let paciente = obterInformacoesDoPacienteNoFormulario(form);
    let erros = validarDadosDoPaciente(paciente);
    if (erros.length > 0) {
        mostrarErro(erros);
        return;
    }

    let pacienteTr = montarTrNaTabela(paciente);
    adicionarTrNaTabela(pacienteTr);
    mostrarErro(erros);
    form.reset();

});

function obterInformacoesDoPacienteNoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTrNaTabela(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd("info-nome", paciente.nome));
    pacienteTr.appendChild(montarTd("info-peso", paciente.peso));
    pacienteTr.appendChild(montarTd("info-altura", paciente.altura));
    pacienteTr.appendChild(montarTd("info-gordura", paciente.gordura));
    pacienteTr.appendChild(montarTd("info-imc", paciente.imc));

    return pacienteTr;
}

function montarTd(classe, valorDaTd) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valorDaTd;
    return td;
}

function adicionarTrNaTabela(pacienteTr) {
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function validarDadosDoPaciente(paciente) {

    let erros = [];
    if (paciente.nome.length == 0) {
        erros.push("Nome não pode estar em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode estar em branco");
    } else if (!validarPeso(paciente.peso)) {
        erros.push("Peso inválido !");
    }

    if (paciente.altura.length == 0) {
        erros.push("Altura não pode estar em branco");
    } else if (!validarAltura(paciente.altura)) {
        erros.push("Altura inválida !");
    }

    if (paciente.gordura.length == 0) {
        erros.push("Gordura não pode estar em branco");
    }

    return erros;
}

function mostrarErro(erros) {
    let lista = document.querySelector("#dados-paciente-invalido");
    lista.innerHTML = "";
    erros.forEach(erro => {
        let item = document.createElement("li");
        item.textContent = erro;
        lista.appendChild(item);
    });
}


