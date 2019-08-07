var intentos = 2;
const opcionCorrecta = 1;

cargarIntentos();

function cargarIntentos(){
    document.querySelector('#intentos').innerHTML = intentos;
}

function quitarIntento(){
    if(intentos > 0) { 
        intentos = intentos -1;
        cargarIntentos();
    }
}

function elegirOpcion(nroOpcion){
    if(nroOpcion === opcionCorrecta){console.log('ok');}
}