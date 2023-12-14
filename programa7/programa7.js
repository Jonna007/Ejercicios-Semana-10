/* Escribir un programa que obtenga el 
ID de un recurso compartido de Gdrive. */

let urlGoogleDrive = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";

let partesUrlGoogleDrive = urlGoogleDrive.split('/');

let identificarD = partesUrlGoogleDrive.indexOf( "d" ) +1 ;

let otenerParteDespuesDeIdentificarD = partesUrlGoogleDrive[identificarD];

alert(otenerParteDespuesDeIdentificarD); 