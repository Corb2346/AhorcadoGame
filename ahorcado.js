/*seleccionar elementos del html*/
let palabrasAhorcado = ["java","html","css","alura","odin","oracle","react","visual"];

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

let nuevoJuegoDiv = document.getElementById("nuevoJuego");
let nuevoJuegoBtn = document.getElementById("nuevoJuegoBtn");
let desistirBtn = document.getElementById("desistirBtn");


iniciarJuegoBtn.addEventListener("click",displayIniciarJuego);
agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);
desistirBtn.addEventListener("click",returnMenu);
guardarRemplazarbtn.addEventListener("click",reciveFrase);
inputFrases.addEventListener("click",inputWord);
/*body.addEventListener("click",bodyclick);*/

function numeroAleatorio(){

    let numberRandom = Math.floor(Math.random()*palabrasAhorcado.length);
    return numberRandom;
}

function displayIniciarJuego(){
    console.log("ya sirvo tambien");
    agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";
    btnNuevoJuego();
    btnDesistir();
    console.log(numeroAleatorio());
    console.log(muestrPalabra(numeroAleatorio()));
    muestrPalabraPantalla.style.visibility="visible";
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

    let muestrPalabraPantalla = document.getElementById("muestrPalabraPantalla");
    muestrPalabraPantalla.style.visibility = "collapse";
    

    agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);

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
    nuevoJuego.style.visibility="visible";

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

    } 


}

//funcion que muestra en pantalla letra obtenida del arreglo

function muestrPalabra(numberRandom){
    let numeroAleatorio = numberRandom;
    let palabra = palabrasAhorcado[numeroAleatorio];
    console.log(palabra);
    return palabra;
}

