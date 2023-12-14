/* Escribir un programa que obtenga el 
nombre de usuario de facebook desde la url. */

let urlFacebook = "facebook.com/Jonnathan~Cadme";

let partesUrlFacebook = urlFacebook.split('/');

let nombreUsuario = partesUrlFacebook[partesUrlFacebook.length - 1];

nombreUsuario = nombreUsuario.replace('~', ' ');

alert(nombreUsuario); 
