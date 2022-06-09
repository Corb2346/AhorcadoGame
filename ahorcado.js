/*seleccionar elementos del html*/
let palabrita; 
let cantAciertos = 0;
let cantErrores = 0;
let enable =false; 
let caracteresIngresados = [];
let palabrasAhorcado = ["java","script","html","xbox","windows","alura","odin","oracle","react","visual","mexico","python","frontend","backend","intel","ahorcado","security"];//arreglo con palabras iniciales
//elementos del html
let body = document.querySelector("body");
let iniciarJuegoBtn = document.querySelector("#iniciarJuego");
let agregarPalabraBtn = document.querySelector("#nuevaPalabra");

let mainContainer = document.querySelector("#mainDisplay");
let inputFrases = document.getElementById("inputFrase");
let adviceDiv = document.getElementById("adviceDiv");
let saveCancelBtn = document.getElementById("saveCancelBtn");
let guardarRemplazarbtn = document.getElementById("guardarRemplazarbtn");
let cancelarBtn = document.getElementById("cancelarBtn");
let saveCancelNewWord = document.getElementById("saveCancelNewWord");
let muestrPalabraPantalla = document.getElementById("muestraPalabraPantalla");

let nuevoDesistirDiv = document.getElementById("nuevoDesistirDiv");
let nuevoJuegoDiv = document.getElementById("nuevoJuegoDiv");
let nuevoJuegoBtn = document.getElementById("nuevoJuegoBtn");
let desistirBtn = document.getElementById("desistirBtn");
let ahorcadoDiv = document.getElementById("ahorcadoDiv");

let palabrasCorrectas = document.getElementById("palabrasCorrectas");
let palabrasEquivocadas = document.getElementById("palabrasEquivocadas");

let mensajeDerrota = document.getElementById("mensajeDerrota");

let source = `ahorcadoDraw/Img${cantErrores}.png`;
let imagen = document.getElementById("imagen");

//action buttons
iniciarJuegoBtn.addEventListener("click",displayIniciarJuego);
agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);
desistirBtn.addEventListener("click",returnMenu);
guardarRemplazarbtn.addEventListener("click",reciveFrase);
inputFrases.addEventListener("click",inputWord);
nuevoJuegoBtn.addEventListener("click",nuevoJuego);

window.addEventListener('keydown', keyFunction);


function keyFunction(event) {//detecta tecla presionada
    let spans = document.querySelectorAll("#spanLetras");
    let recibeTecla = event.key;
    let recibeCodigoTecla = event.keyCode;
    let letraMayus = recibeTecla.toUpperCase();
   console.log(letraMayus);
   console.log(palabrita);

    if(recibeCodigoTecla >=65 && recibeCodigoTecla <= 90){//VALIDA QUE TECLA PRESIONADA SEA UNA LETRA Y NO UN NUMERO U OTRO CARACTER. 
        if(caracteresIngresados.includes(letraMayus)){//si detecta una palabra repetida no hace nada
            return null;
        } else { //de lo contrario la agrega en el arreglo 

        caracteresIngresados.push(letraMayus);
        console.log(caracteresIngresados);
        
        }
       
   let acerto = false; 
   for(let i = 0; i<palabrita.length;i++){//con la palabra recorre el arreglo a identificar
        if(letraMayus == palabrita[i]){ //si es igual 
            spans[i].innerHTML = letraMayus;  // imprime la palabra en el lugar
            acerto = true; 
            cantAciertos++;
        }

   }

   console.log("la letra " + letraMayus + " en la palabra " + palabrita + "¿existe? " + acerto);
   if(acerto == false ){
    let palabraEquivocadaDisplay = document.createElement("span");
    palabraEquivocadaDisplay.classList.add("equivocadas");
    palabraEquivocadaDisplay.innerHTML = letraMayus;
    palabrasEquivocadas.appendChild(palabraEquivocadaDisplay);
    cantErrores++;
    let source = `ahorcadoDraw/Img${cantErrores}.png`;
    let imagen = document.getElementById("imagen");
    imagen.src = source;
   }

   if(cantErrores === 9){
    mensajeDerrota.style.visibility = "visible";
    let palabraCorrecta = palabrita.join('');
    mensajeDerrota.textContent = "Fin Del Juego !! la palabra era "+ palabraCorrecta ;
    window.removeEventListener('keydown', keyFunction);

   } else if(cantAciertos == palabrita.length){
    mensajeGanador.style.visibility = "visible";
    window.removeEventListener('keydown', keyFunction);
   }
    } else {
    console.log("no es letra");
    }
  }
 

function numeroAleatorio(){//funcion que devuelve un numero aleatorio tamaño maximo del arreglo

    let numberRandom = Math.floor(Math.random()*palabrasAhorcado.length);
    return numberRandom;
}

function displayIniciarJuego(){ 
    
    console.log("ya sirvo tambien");
    enable = true;
    agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";

    ahorcadoDiv.style.visibility = "visible";

    palabrasCorrectas.style.visibility = "visible";
    palabrasEquivocadas.style.visibility = "visible";

    btnNuevoJuego();
    btnDesistir();

    let recibePalabra = muestrPalabra(numeroAleatorio());
    console.log(recibePalabra);

    drawLines(recibePalabra);

    window.addEventListener('keydown', keyFunction);
}

function nuevoJuego(){

    cantAciertos = 0;
    cantErrores = 0;
    caracteresIngresados = [];
    ahorcadoDiv.style.visibility = "visible";
    mensajeGanador.style.visibility = "collapse";
    mensajeDerrota.style.visibility ="collapse";
    
    palabrasCorrectas.style.visibility = "visible";
    palabrasEquivocadas.style.visibility = "visible";
    palabrasCorrectas.innerHTML = "";
    palabrasEquivocadas.innerHTML = "";
    mensajeDerrota.style.visibility = "collapse";
    btnNuevoJuego();
    btnDesistir();

    let recibePalabra = muestrPalabra(numeroAleatorio());
    console.log(recibePalabra);
   
    drawLines(recibePalabra);

    source = `ahorcadoDraw/Img0.png`;
    imagen = document.getElementById("imagen");
    imagen.src = source;

    window.addEventListener('keydown', keyFunction);
}

function diplayMenuAgregarPalabra(){
    console.log("ya sirvo");
    agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";
    window.removeEventListener("keydown", keyFunction);
    inputFrase();
    adviceMessage()
    btnGuardarReemplazar();
  
}

function btnGuardarReemplazar(){ // se crea u boton al momento de seleccionar la opcion agregar palabra

    guardarRemplazarbtn = document.getElementById("guardarRemplazarbtn");
    guardarRemplazarbtn.classList.add("blueButton");
    guardarRemplazarbtn.classList.add("sizeButton");
    guardarRemplazarbtn.style.visibility ="visible";
    guardarRemplazarbtn.style.position = "absolute"
    guardarRemplazarbtn.style.top ="75%";
    guardarRemplazarbtn.style.left="28%";

    
    cancelarBtn = document.getElementById("cancelarBtn");
    cancelarBtn.classList.add("greyButton");
    cancelarBtn.classList.add("sizeButton");
    cancelarBtn.style.position = "absolute"
    cancelarBtn.style.top ="75%";
    cancelarBtn.style.visibility ="visible";
    

    cancelarBtn.addEventListener("click",returnMenu);
}

function inputFrase(){

    inputFrases = document.getElementById("inputFrase");
    inputFrases.style.visibility ="visible";
    inputFrases.style.width ="350px";
    inputFrases.style.height ="48px";
    inputFrases.style.border ="none";
    inputFrases.value = "Ingresa Palabra aqui"
    inputFrases.style.backgroundColor ="#F3F5FC";
    inputFrases.style.color = "#0A3871";
    inputFrases.style.fontSize ="32px";
    inputFrases.style.position ="absolute";
    inputFrases.style.top = "20%";
    inputFrases.style.left ="28%";
}

function adviceMessage(){

    adviceDiv.style.visibility = "visible";
    adviceDiv.style.position ="absolute";
    adviceDiv.style.top ="70%";
    adviceDiv.style.left ="30%";
    adviceDiv.style.opacity=".8";
    adviceDiv.style.color="#495057";
    adviceDiv.style.fontFamily ="'Inter', sans-serif";

}

function btnNuevoJuego(){
    nuevoJuegoBtn.classList.add("blueButton");
    nuevoJuegoBtn.classList.add("sizeButton");
    nuevoJuegoBtn.style.visibility="visible";

}

function  btnDesistir(){
    desistirBtn.classList.add("greyButton");
    desistirBtn.classList.add("sizeButton");
    desistirBtn.style.visibility="visible";

    
}

function returnMenu(){
    console.log("ya sirvo cancelar");
    let iniciarJuegoBtn = document.getElementById("iniciarJuego");
    iniciarJuegoBtn.style.visibility ="visible";

    let agregarPalabraBtn = document.getElementById("nuevaPalabra");
    agregarPalabraBtn.style.visibility ="visible";

    
    let inputFrase = document.getElementById("inputFrase");
    inputFrase.style.visibility = "collapse";

    let adviceDiv = document.getElementById("adviceDiv");
    adviceDiv.style.visibility = "collapse";

    let guardarRemplazarbtn= document.getElementById("guardarRemplazarbtn");
    guardarRemplazarbtn.style.visibility = "collapse";

    let cancelarBtn= document.getElementById("cancelarBtn");
    cancelarBtn.style.visibility = "collapse";

    let saveCancelNewWord= document.getElementById("saveCancelNewWord");
    saveCancelNewWord.style.visibility = "collapse";

    let saveCancelBtn= document.getElementById("saveCancelBtn");
    saveCancelBtn.style.visibility = "collapse";

    let desistirBtn = document.getElementById("desistirBtn");
    desistirBtn.style.visibility = "collapse";

    let nuevoJuegoBtn = document.getElementById("nuevoJuegoBtn");
    nuevoJuegoBtn.style.visibility = "collapse";

    let ahorcadoDiv = document.getElementById("ahorcadoDiv");
    ahorcadoDiv.style.visibility="collapse";

    let palabrasCorrectas = document.getElementById("palabrasCorrectas");
    palabrasCorrectas.style.visibility = "collapse";

    let nuevoDesistirDiv = document.getElementById("nuevoDesistirDiv");
    nuevoDesistirDiv.style.visibility = "collapse";
   
    let  palabrasEquivocadas = document.getElementById("palabrasEquivocadas");
    palabrasEquivocadas.style.visibility = "collapse";

    let mensajeDerrota = document.getElementById("mensajeDerrota");
    mensajeDerrota.style.visibility = "collapse";

    let mensajeGanador = document.getElementById("mensajeGanador");
    mensajeGanador.style.visibility = "collapse";

    let nuevoJuegoDiv = document.getElementById("nuevoJuegoDiv");
    nuevoJuegoDiv.style.visibility = "collapse";
    
    palabrasCorrectas.innerHTML = "";
    palabrasEquivocadas.innerHTML = "";

    iniciarJuegoBtn.addEventListener("click",displayIniciarJuego);
    agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);

    source = `ahorcadoDraw/Img0.png`;
    cantAciertos = 0;
    cantErrores = 0;
    imagen = document.getElementById("imagen");
    imagen.src = source;
    caracteresIngresados = [];

}

//operative functions

function inputWord(event){ //al dar clic en el rectangulo para meter datos elimina la frase 
console.log(event);
console.log(event.pointerId);
if(event.pointerId === 1){
    console.log("detecto click");
    document.getElementById("inputFrase").value="";
} 

}

function reciveFrase(){
    let palabra = inputFrases.value;
    console.log(palabra);
    if(palabra === "Ingresa Palabra aqui" || palabra === ""){
        inputFrases.value = "Ingresa Palabra aqui";
        console.log("no entro en el array");
    } else 
    if(palabra !="Ingresa Palabra aqui"){
        console.log(palabra);
    palabrasAhorcado.push(palabra);
    console.log(palabrasAhorcado);
    inputFrases.value = "Ingresa Palabra aqui";
    btnNuevoJuego();
    btnDesistir();
    nuevoJuegoDiv.style.visibility="visible";

    console.log(numeroAleatorio());
    console.log(muestrPalabra(numeroAleatorio()));

    let inputFrase = document.getElementById("inputFrase");
    inputFrase.style.visibility = "collapse";

    let adviceDiv = document.getElementById("adviceDiv");
    adviceDiv.style.visibility = "collapse";

    let guardarRemplazarbtn= document.getElementById("guardarRemplazarbtn");
    guardarRemplazarbtn.style.visibility = "collapse";

    let cancelarBtn= document.getElementById("cancelarBtn");
    cancelarBtn.style.visibility = "collapse";

    ahorcadoDiv.style.visibility = "visible";

    palabrasCorrectas.style.visibility = "visible";
    palabrasEquivocadas.style.visibility = "visible";

    let recibePalabra = muestrPalabra(numeroAleatorio());
    console.log(recibePalabra);
   
    drawLines(recibePalabra);

    window.addEventListener('keydown', keyFunction);
  
    }
}

//funcion que muestra en pantalla letra obtenida del arreglo

function muestrPalabra(numberRandom){
    let numeroAleatorio = numberRandom;
    let palabra = palabrasAhorcado[numeroAleatorio];
    let palabraMayus = palabra.toUpperCase();
    return palabraMayus;
}

function drawLines(palabra){
    palabrita = palabra.split('');
    console.log(palabrita);

    palabrita.forEach(element => {
        let palabraDisplay = document.createElement("span");
    palabraDisplay.classList.add("Correctas");
    palabraDisplay.setAttribute("id","spanLetras");
    palabrasCorrectas.appendChild(palabraDisplay);
    });

}
