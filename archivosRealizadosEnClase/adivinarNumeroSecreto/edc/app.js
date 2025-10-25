function intento(){
    let numeroDeUsuario = parseInt(document.getElementById("cajaNumero").value);
    if (numeroSecreto === numeroDeUsuario)
    {
        asignarTexto("h4",`Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}.`);
    } else{
        limpiarCaja();
        intentos = intentos+1
        if (numeroDeUsuario < numeroSecreto)
        {
            asignarTexto("h4","No acertaste, el número secreto es mayor.");
        } else{
            asignarTexto("h4","No acertaste, el número secreto es menor.");
        }
        limpiarCaja()
    }
}


function limpiarCaja(){
    (document.querySelector("#cajaNumero")).value = "";
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
}


function asignarTexto(etiqueta,texto){
    let etiquetaHTML = document.querySelector(etiqueta);
    etiquetaHTML.innerHTML = texto;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    return numeroGenerado;
}


function condicionesIniciales(){
    asignarTexto('h4',`Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


let intentos = 0;
let numeroSecreto = 0;
let numeroMaximo = 100;

condicionesIniciales();