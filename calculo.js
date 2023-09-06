function insert(num) {

    let numero = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = numero + num;
}

function apagar() {

    document.getElementById('calculo').innerHTML = ""
}

function excluir() {
    let calculo = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = calculo.substring(0, calculo.length - 1);
}

function resultado() {
    let calculo = document.getElementById('calculo').innerHTML;
    if (calculo) {
        document.getElementById('calculo').innerHTML = eval(calculo)
    } else {
        document.getElementById('calculo').innerHTML = "informe um numero";
    }
}