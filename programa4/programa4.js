/* Escribir un programa que obtenga las iniciales 
de un jugador de futbol, sabiendo que se usa 
iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25 */

let jugadorNumero = "ZI-21";

let partesJugadorNumero = jugadorNumero.split('-');

let inicialesJugador = partesJugadorNumero[0];

alert(inicialesJugador);