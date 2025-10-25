function asignarTexto(elemento,texto){
    let etiquetaHTML = document.querySelector(elemento);
    etiquetaHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroSecreto === numeroDeUsuario)
    {
        asignarTexto("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}.`);
        (document.getElementById("reiniciar")).removeAttribute("disabled")
    } else{
        limpiarCaja();
        intentos = intentos+1
        if (numeroDeUsuario < numeroSecreto)
        {
            asignarTexto("p","No acertaste, el número secreto es mayor.");
        } else{
            asignarTexto("p","No acertaste, el número secreto es menor.");
        }
    }
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (numerosYaJugados.length == numeroMaximo){
        asignarTexto("p","Ya se sortearon todos los números posibles.");
    } else{
        if (numerosYaJugados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            numerosYaJugados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    (document.querySelector("#valorUsuario")).value = "";
}

function condicionesIniciales(){
    asignarTexto('h1',"Juego del número secreto");
    asignarTexto('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    (document.getElementById("reiniciar")).setAttribute("disabled","true")
}

let intentos = 0;
let numeroSecreto = 0;
let numerosYaJugados = [];
let numeroMaximo = 10
condicionesIniciales();