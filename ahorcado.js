/*seleccionar elementos del html*/
let iniciarJuegoBtn = document.querySelector("#iniciarJuego");
let agregarPalabraBtn = document.querySelector("#nuevaPalabra");

let mainContainer = document.querySelector("#mainDisplay");
let inputFrases = document.getElementById("inputFrase");
let adviceDiv = document.getElementById("adviceDiv");
let saveCancelBtn = document.getElementById("saveCancelBtn");
let guardarRemplazarbtn = document.getElementById("guardarRemplazarbtn");
let cancelarBtn = document.getElementById("cancelarBtn");
let saveCancelNewWord = document.getElementById("saveCancelNewWord");

iniciarJuegoBtn.addEventListener("click",displayIniciarJuego);
agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);

function displayIniciarJuego(){
    console.log("ya sirvo tambien");
    /*agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";*/
}

function diplayMenuAgregarPalabra(){
    console.log("ya sirvo");
    agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";
   /* agregarPalabraBtn.remove();
    iniciarJuegoBtn.remove();*/
    
    inputFrase();
    adviceMessage()
    btnGuardarReemplazar();
  
}

function btnGuardarReemplazar(){ // se crea u boton al momento de seleccionar la opcion agregar palabra

    guardarRemplazarbtn = document.getElementById("guardarRemplazarbtn");
    guardarRemplazarbtn.style.height ="67px";
    guardarRemplazarbtn.style.width = "332px";
    guardarRemplazarbtn.classList.add("blueButton");
    guardarRemplazarbtn.style.visibility ="visible";
    guardarRemplazarbtn.style.position = "absolute"
    guardarRemplazarbtn.style.top ="75%";
    guardarRemplazarbtn.style.left="28%";

    
    cancelarBtn = document.getElementById("cancelarBtn");
    cancelarBtn.classList.add("greyButton");
    cancelarBtn.style.height ="67px";
    cancelarBtn.style.width = "332px";
    cancelarBtn.style.position = "absolute"
    cancelarBtn.style.top ="75%";
    cancelarBtn.style.visibility ="visible";

    cancelarBtn.addEventListener("click",returnMenu);
}

function inputFrase(){

    inputFrases = document.getElementById("inputFrase");
    inputFrases.style.visibility ="visible";
    inputFrases.style.width ="299px";
    inputFrases.style.height ="48px";
    inputFrases.style.border ="none";
    inputFrases.style.backgroundColor ="#F3F5FC";
    inputFrases.style.color = "#0A3871";
    inputFrases.style.fontSize ="32px";
    inputFrases.style.position ="absolute";
    inputFrases.style.top = "20%";
    inputFrases.style.left ="20%";
}

function adviceMessage(){

    adviceDiv.style.visibility = "visible";
    adviceDiv.style.position ="absolute";
    adviceDiv.style.top ="70%";
  

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

    agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);

}