/*seleccionar elementos del html*/
let palabrita; 
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

let palabrasCorrectas = document.getElementById("palabrasCorrectas");
let palabrasEquivocadas = document.getElementById("palabrasEquivocadas");

//action buttons
iniciarJuegoBtn.addEventListener("click",displayIniciarJuego);
agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);
desistirBtn.addEventListener("click",returnMenu);
guardarRemplazarbtn.addEventListener("click",reciveFrase);
inputFrases.addEventListener("click",inputWord);
nuevoJuegoBtn.addEventListener("click",nuevoJuego);
window.addEventListener('keydown', keyFunction)

function keyFunction(event) {//detecta tecla presionada
    let spans = document.querySelectorAll("#spanLetras");
    let recibeTecla = event.key;
    let letraMayus = recibeTecla.toUpperCase();
   console.log(letraMayus);
   console.log(palabrita);

   let acerto = false;
   for(let i = 0; i<palabrita.length;i++){
        if(letraMayus == palabrita[i]){
            spans[i].innerHTML = letraMayus; 
            acerto = true;
        }
   }

   console.log("la letra " + letraMayus + " en la palabra " + palabrita + "¿existe? " + acerto);

   return recibeTecla;
  }
  
 

function numeroAleatorio(){//funcion que devuelve un numero aleatorio tamaño maximo del arreglo

    let numberRandom = Math.floor(Math.random()*palabrasAhorcado.length);
    return numberRandom;
}

function displayIniciarJuego(){ 
    console.log("ya sirvo tambien");
    agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";

    ahorcadoDiv.style.visibility = "visible";

    palabrasCorrectas.style.visibility = "visible";
    palabrasEquivocadas.style.visibility = "visible";

    btnNuevoJuego();
    btnDesistir();

    let recibePalabra = muestrPalabra(numeroAleatorio());
    console.log(recibePalabra);

    ahorcadoGame(recibePalabra);


    ahorcadoDibujo();
    
}

function nuevoJuego(){

    ahorcadoDiv.style.visibility = "visible";
    
    palabrasCorrectas.style.visibility = "visible";
    palabrasEquivocadas.style.visibility = "visible";
    palabrasCorrectas.innerHTML = "";
    btnNuevoJuego();
    btnDesistir();

    let recibePalabra = muestrPalabra(numeroAleatorio());
    console.log(recibePalabra);
   
    ahorcadoGame(recibePalabra);
  
    ahorcadoDibujo();

   
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
    /*palabrasCorrectas.style.visibility = "collapse";*/
    palabrasCorrectas.remove();

    let  palabrasEquivocadas = document.getElementById("palabrasEquivocadas");
    /*palabrasEquivocadas.style.visibility = "collapse";*/
    palabrasEquivocadas.remove();



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

    palabrita = ahorcadoGame(recibePalabra);
    console.log(palabrita);

    ahorcadoDibujo();

    } 


}

//funcion que muestra en pantalla letra obtenida del arreglo

function muestrPalabra(numberRandom){
    let numeroAleatorio = numberRandom;
    let palabra = palabrasAhorcado[numeroAleatorio];
    let palabraMayus = palabra.toUpperCase();
    return palabraMayus;
}

function ahorcadoGame(palabra){
    palabrita = palabra.split('');
    console.log(palabrita);

    palabrita.forEach(element => {
        let palabraDisplay = document.createElement("span");
    palabraDisplay.classList.add("Correctas");
    palabraDisplay.setAttribute("id","spanLetras");
    palabrasCorrectas.appendChild(palabraDisplay);
    });
    
    let palabraEquivocadaDisplay = document.createElement("span");
    palabraEquivocadaDisplay.classList.add("equivocadas");
    palabrasEquivocadas.appendChild(palabraEquivocadaDisplay);
  
}

function ahorcadoDibujo(){

    let ahoracadoCanvas  = document.getElementById("ahorcadoDiv");
    let pincel2 = ahoracadoCanvas.getContext("2d");
    pincel2.strokeStyle = '#0A3871'; // dibuja base del ahorcado
    pincel2.lineWidth = 2;
    pincel2.lineCap = "round";
    pincel2.beginPath();
    pincel2.moveTo(50,130);
    pincel2.lineTo(250,130);
    pincel2.stroke();

    pincel2.beginPath();
    pincel2.lineWidth = 5;//dibuja torredel ahorcado
    pincel2.lineCap = "round";
    pincel2.beginPath();
    pincel2.moveTo(98,128);
    pincel2.lineTo(100,35);
    pincel2.stroke();

    pincel2.beginPath();//dibuja brazo de torre
    pincel2.lineWidth = 2;
    pincel2.lineCap = "round";
    pincel2.beginPath();
    pincel2.moveTo(100,34);
    pincel2.lineTo(200,34);
    pincel2.stroke();

    pincel2.beginPath();//dibuja lazo
    pincel2.lineWidth = 4;
    pincel2.lineCap = "round";
    pincel2.moveTo(200,35);
    pincel2.lineTo(200,50);
    pincel2.stroke();

    pincel2.lineWidth = 3;
    pincel2.beginPath();//dibuja cabeza
    pincel2.arc(200, 60,10, 0, 2 * Math.PI);
    pincel2.stroke();

    pincel2.beginPath();//dibuja cuerpo
    pincel2.lineWidth = 4;
    pincel2.lineCap = "round";
    pincel2.moveTo(200,70);
    pincel2.lineTo(200,100);
    pincel2.stroke();

    pincel2.beginPath();//dibuja brazo izquierdo
    pincel2.lineWidth = 4;
    pincel2.lineCap = "round";
    pincel2.moveTo(200,75);
    pincel2.lineTo(185,85);
    pincel2.stroke();

    pincel2.beginPath();//dibuja brazo derecho
    pincel2.lineWidth = 4;
    pincel2.lineCap = "round";
    pincel2.moveTo(200,75);
    pincel2.lineTo(215,85);
    pincel2.stroke();

    pincel2.beginPath();//dibuja pata derecha
    pincel2.lineWidth = 4;
    pincel2.lineCap = "round";
    pincel2.moveTo(200,100);
    pincel2.lineTo(215,110);
    pincel2.stroke();

    pincel2.beginPath();//dibuja pata izquierda
    pincel2.lineWidth = 4;
    pincel2.lineCap = "round";
    pincel2.moveTo(200,100);
    pincel2.lineTo(185,110);
    pincel2.stroke();
}

