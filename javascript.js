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
    }

    if (altura < 0 || altura > 3) {
        alturaEhValida = false
        imcinfo.textContent = 'Altura inválida'
    }

    if (pesoEhValido == false && alturaEhValida == false) {
        imcinfo.textContent = 'Peso e Altura inválidos'
    }

    if (pesoEhValido && alturaEhValida) {
        imcinfo.textContent = Number(imc.toFixed(2))
    }

}


