
//Clousure o Clausuras

function crearContador() {
    let contador = 0;
    setTimeout(function(){
        contador = 100;
    },5000);
    return function incrementar() {
        contador = contador + 1;
        return contador;
    };
}

const contador1 = crearContador();
console.log(contador1()); // Imprime 1
console.log(contador1()); // Imprime 2
console.log(contador1()); // Imprime 3


// atencion esta super bueno !

// super funcion que i prime mensajes de acuerdo a la necesidad 

function crearImpresoraDeMensajes(tipo, estilos){
    return function mensaje(srt){
        console.log(`%c ${tipo}: ${srt} `, estilos);
    }   
}
const error = crearImpresoraDeMensajes('Error','background: red; color: white;');
const warnig = crearImpresoraDeMensajes('warnig','crearImpresoraDeMensajes');
const exito = crearImpresoraDeMensajes('exito','background: green; color: white')





/*function error(srt) {
    console.log(`%c Error: ${srt} `, 'background: red; color: white;');
}

function warnig(srt) {
    console.log(`%c warnig: ${srt} `, c);
}

function exito(srt) {
    console.log(`%c exito: ${srt} `, 'background: green; color: white;');
}

error("Ocurrió un error"); // Proporciona el argumento al llamar a la función
warnig("Cuidado!");
exito("bienn hechoo!!");*/

//console.log("%cEste es un mensaje con color", "color: blue; font-weight: bold;");
