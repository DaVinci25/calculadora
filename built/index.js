"use strict";
let resultado = document.getElementById("valores");
// Método para recoger el input (valores)
function añadirNumero(teclado) {
    if (teclado == "=") {
        calcular();
    }
    else {
        resultado.value += teclado;
    }
}
// Método para calcular usando eval()
function calcular() {
    try {
        resultado.value = eval(resultado.value);
    }
    catch (e) {
        resultado.value = "Error";
    }
}
// Método para limpiar todo
function limpiar() {
    resultado.value = "";
}
