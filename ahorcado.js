/*seleccionar elementos del html*/
let palabrasAhorcado = ["java","script","html","xbox","css","alura","odin","oracle","react","visual","mexico","python","frontend","backend"];//arreglo con palabras iniciales
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

let nuevoJuegoDiv = document.getElementById("nuevoJuegoDiv");
let nuevoJuegoBtn = document.getElementById("nuevoJuegoBtn");
let desistirBtn = document.getElementById("desistirBtn");
let ahorcadoDiv = document.getElementById("ahorcadoDiv");
let canvasDiv = document.querySelector("canvas");

//action buttons
iniciarJuegoBtn.addEventListener("click",displayIniciarJuego);
agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);
desistirBtn.addEventListener("click",returnMenu);
guardarRemplazarbtn.addEventListener("click",reciveFrase);
inputFrases.addEventListener("click",inputWord);
nuevoJuegoBtn.addEventListener("click",nuevoJuego);

window.addEventListener('keydown', function (e) {//detecta tecla presionada
    console.log(e);
  }, false);

function numeroAleatorio(){//funcion que devuelve un numero aleatorio tamaño maximo del arreglo

    let numberRandom = Math.floor(Math.random()*palabrasAhorcado.length);
    return numberRandom;
}

function displayIniciarJuego(){ 
    console.log("ya sirvo tambien");
    agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";

    ahorcadoDiv.style.visibility = "visible";
    canvasDiv.style.visibility = "visible";


    btnNuevoJuego();
    btnDesistir();

    let recibePalabra = muestrPalabra(numeroAleatorio());
    console.log(recibePalabra);
    muestrPalabraPantalla.style.visibility="visible";
    
    let muestraCaracteres = palabraCaracteres(recibePalabra);
    muestrPalabraPantalla.value =  muestraCaracteres;
    muestrPalabraPantalla.style.textDecoration ="underline";
    muestrPalabraPantalla.style.textDecorationThickness= "4px";
    muestrPalabraPantalla.style.text= "4px";
    
    muestraLineas(recibePalabra.toUpperCase())
    let numeroLineas =  muestraLineas(recibePalabra.toUpperCase());
    console.log(numeroLineas);
    dibujarLineas(numeroLineas);
    
}

function nuevoJuego(){
    let canvasDiv = document.querySelector("canvas");
    let pincel = canvasDiv.getContext("2d"); 
    pincel.clearRect(0,0,750,10);

    ahorcadoDiv.style.visibility = "visible";
    canvasDiv.style.visibility = "visible";


    btnNuevoJuego();
    btnDesistir();

    let recibePalabra = muestrPalabra(numeroAleatorio());
    console.log(recibePalabra);
    muestrPalabraPantalla.style.visibility="visible";
    
    let muestraCaracteres = palabraCaracteres(recibePalabra);
    muestrPalabraPantalla.value =  muestraCaracteres;
    muestrPalabraPantalla.style.textDecoration ="underline";
    muestrPalabraPantalla.style.textDecorationThickness= "4px";
    muestrPalabraPantalla.style.text= "4px";
    
    muestraLineas(recibePalabra.toUpperCase())
    let numeroLineas =  muestraLineas(recibePalabra.toUpperCase());
    console.log(numeroLineas);
    dibujarLineas(numeroLineas);
}

function diplayMenuAgregarPalabra(){
    console.log("ya sirvo");
    agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";

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
    nuevoJuegoBtn.style.position ="absolute";
    nuevoJuegoBtn.style.top ="80%";
    nuevoJuegoBtn.style.left="28%";

}

function  btnDesistir(){
    desistirBtn.classList.add("greyButton");
    desistirBtn.classList.add("sizeButton");
    desistirBtn.style.visibility="visible";
    desistirBtn.style.position ="absolute";
    desistirBtn.style.top ="80%";
    
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

    muestrPalabraPantalla.style.visibility="collapse";
    
    let ahorcadoDiv = document.getElementById("ahorcadoDiv");
    ahorcadoDiv.style.visibility="collapse";

    agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);



    let canvasDiv = document.querySelector("canvas");
    canvasDiv.style.visibility ="collapse";

    let pincel = canvasDiv.getContext("2d"); 
    pincel.clearRect(0,0,750,10);

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
    muestrPalabraPantalla.style.visibility="visible";

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
    canvasDiv.style.visibility = "visible";

    let recibePalabra = muestrPalabra(numeroAleatorio());
    console.log(recibePalabra);
    muestrPalabraPantalla.style.visibility="visible";
    let muestraCaracteres = palabraCaracteres(recibePalabra);
    muestrPalabraPantalla.value =  muestraCaracteres;
    muestrPalabraPantalla.style.textDecoration ="underline";
    muestrPalabraPantalla.style.textDecorationThickness= "4px";
    muestrPalabraPantalla.style.text= "4px";
   
    muestraLineas(recibePalabra.toUpperCase())

    let numeroLineas =  muestraLineas(recibePalabra.toUpperCase());
    console.log(numeroLineas);
    dibujarLineas(numeroLineas);
    } 


}

//funcion que muestra en pantalla letra obtenida del arreglo

function muestrPalabra(numberRandom){
    let numeroAleatorio = numberRandom;
    let palabra = palabrasAhorcado[numeroAleatorio];
    console.log(palabra);
    return palabra;
}

function muestraLineas(palabra){
    let lineasPalabra = palabra.length;
    console.log(lineasPalabra);
    let palabraCaracteres = palabra.split('');
    console.log(palabraCaracteres);

    return lineasPalabra;
}

function palabraCaracteres(palabra){
    let caracteres = palabra.split('');
    console.log(caracteres);
    return caracteres;
}

function dibujarLineas(numeroLineas){ //hacer que dibuje lineas automatico 
    let i = 0;
    let widthLine = 80;
    let start = 5;
     
    
    do{
    
    let canvasDiv = document.querySelector("canvas");
    let pincel = canvasDiv.getContext("2d");
    pincel.strokeStyle = '#0A3871';
    pincel.lineWidth = 5;
    pincel.lineCap = "round";

    drawLine(start,widthLine);

       i++;
        widthLine = widthLine +90;
        start = start+90;

    } while(i < numeroLineas);
}

function drawLine(start,width){
    let canvasDiv = document.querySelector("canvas");
    let pincel = canvasDiv.getContext("2d");
    pincel.strokeStyle = '#0A3871';
    pincel.beginPath();
    pincel.moveTo(start,6);
    pincel.lineTo(width,6);
    pincel.stroke();
}