const contrasena = "nuncameolvides";
let intento;
let contador = 0;

/*
if(intento===contrasena){
    window.alert("Usted es Bienvenido a nuestra web")
}else{
    window.alert("Usted no es bienvenido");
}
*/

while( contrasena !== intento && contador < 3){
    intento = window.prompt("Ingrese la contraseña");
    contador++;
}

/*
if( contrasena !== intento ){
    window.alert("Se te acabaron los intentos");
}else{
    window.alert("Bienvenido a la Web");
}
*/

if( contrasena === intento ){
    window.alert("Bienvenido a la Web");
}else{
    window.location.href = "https://google.com";
}