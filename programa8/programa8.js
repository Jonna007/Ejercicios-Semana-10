/* Desarrollar un programa que genere la asignación 
de letras para las filas de computadoras en un 
laboratorio. Se debe tener en cuenta que la 
codificación sigue el formato LAB2#A, 
donde indica la fila A del laboratorio 2 */

let codigoLaboratorio = "LAB1#A";

let obtenerCaracterLetraCodigoFila = codigoLaboratorio.charAt(codigoLaboratorio.length - 1);

let convertirLetraCodigoAscii = obtenerCaracterLetraCodigoFila.charCodeAt(0);

let convertirCodigoLetraSiguiente = String.fromCharCode(convertirLetraCodigoAscii + 1);

alert(convertirCodigoLetraSiguiente); 
