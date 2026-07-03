let saludo = "Bienvenido a mi sitio Web";
let contador = 1;
let nombre = window.prompt("Ingresa tu nombre");
const navegadores = [ "Chrome", "Firefox", "Safari", "Edge" ];
const edad = 40;
const usuario = {
    nombre: "Martin Rios",
    edad: 45,
    profesor: true
}

// Esto es un comentario en JS

console.log(saludo);
console.log("Eres el visitante " + contador)
window.alert(saludo+" "+usuario.nombre+ ", eres el visitante "+contador);
window.alert("Estas ingresando desde el navegador " + navegadores[1]);