var titulo = document.querySelector('.titulo');
titulo.textContent = 'rsrsrsrsrs';

var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes)

for (var contador = 0; contador < pacientes.length; contador++) {

    var peso = pacientes[contador].querySelector('.info-peso').textContent;
    var altura = pacientes[contador].querySelector('.info-altura').textContent;
    var imc = peso / (altura * altura);
    var pesoEhValido = true;
    var alturaEhValida = true;
    var imcinfo = pacientes[contador].querySelector('.info-imc');


    if (peso < 0 || peso > 600) {
        pesoEhValido = false
        imcinfo.textContent = 'Peso inválido'
        pacientes[contador].classList.add('erro')

    }

    if (altura < 0 || altura > 3) {
        alturaEhValida = false
        imcinfo.textContent = 'Altura inválida'
        pacientes[contador].classList.add('erro')
    }

    if (pesoEhValido == false && alturaEhValida == false) {
        imcinfo.textContent = 'Peso e Altura inválidos'
    }

    if (pesoEhValido && alturaEhValida) {
        imcinfo.textContent = imc.toFixed(2)
    }

}

var botãoAdicionar = document.querySelector('#adicionar-paciente')

botãoAdicionar.addEventListener ('click', function() {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');
    
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
   

    var tabelapacientes = document.querySelector('#tabela-pacientes')
    
    tabelapacientes.appendChild(pacienteTr)
})

