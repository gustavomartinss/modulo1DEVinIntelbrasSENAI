let n1 = document.getElementById("valor1").value
let n2 = document.getElementById("valor2").value

let exibeResultado = document.getElementById("exibeResultado")

let resultado

function somar() {
    resultado = parseInt(n1) + parseInt(n2);
    console.log(resultado);
    exibeResultado.innerHTML = resultado;
}

function subtrair() {
    resultado = parseInt(n1) - parseInt(n2);
    console.log(resultado);
    exibeResultado.innerHTML = resultado;
}

function multiplicar() {
    resultado = parseInt(n1) * parseInt(n2);
    console.log(resultado);
    exibeResultado.innerHTML = resultado;
}

function dividir() {
    resultado = parseInt(n1) / parseInt(n2);
    console.log(resultado);
    exibeResultado.innerHTML = resultado;
}