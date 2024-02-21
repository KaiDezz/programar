// generarNumeroAleatorio
function generarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// fubcion eleccion
function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "🪨";
    } else if (jugada == 2) {
        resultado = "📄";
    } else if (jugada == 3) {
        resultado = "✂️";
    } else {
        resultado = "💀";
    }
    return resultado;
}
// funcion combate
function combate(jugador, pc) {
    let resultado = "";
    if (jugador == pc) {
        resultado = "Empate";
    } else if (jugador - pc == 1 || jugador - pc == -2) {
        resultado = "Ganaste";
        triunfos++;
    } else {
        resultado = "Perdiste";
        perdidas++;
    }
    return resultado;
}
// 1 es Piedra, 2 es Papel y 3 es Tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
while (triunfos < 3 && perdidas < 3) {
    // elección del jugador
    jugador = prompt("Elige: 1 para Piedra, 2 para Papel o 3 para Tijerra");
    pc = generarNumeroAleatorio(3, 1);
    alert("Tu eliges: " + eleccion(jugador));
    alert("PC elige: " + eleccion(pc));
    alert(combate(jugador, pc));
}
alert("Ganaste " + triunfos + " veces, perdiste " + perdidas + " veces");