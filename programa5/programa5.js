/* Escribir un programa para obtener el 
nombre de usuario de un correo electrónico. */

let email = "jonnathan-esta-dificil-la-situacion@sudamericano.edu.ec";

let partesEmail = email.split('@');

let nombreUsuario = partesEmail[0];

alert(nombreUsuario); 