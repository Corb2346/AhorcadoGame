/*seleccionar elementos del html*/

let agregarPalabraBtn = document.querySelector("#nuevaPalabra");
let iniciarJuegoBtn = document.querySelector("#iniciarJuego");

let mainContainer = document.querySelector("#mainDisplay");

iniciarJuegoBtn.addEventListener("click",displayIniciarJuego);
agregarPalabraBtn.addEventListener("click",diplayMenuAgregarPalabra);

function displayIniciarJuego(){
    console.log("ya sirvo tambien");
    agregarPalabraBtn.style.visibility = "collapse";
    iniciarJuegoBtn.style.visibility = "collapse";
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

    let saveCancelBtn = document.createElement("div");
    saveCancelBtn.setAttribute("id","saveCancel");
    saveCancelBtn.style.flex ="inherit";

    let guardarRemplazarbtn = document.createElement("button");
    guardarRemplazarbtn.innerHTML = "Guardar y reemplazar";
    guardarRemplazarbtn.setAttribute("id","guardarRemplazar");
    guardarRemplazarbtn.style.height ="67px";
    guardarRemplazarbtn.style.width = "332px";
    guardarRemplazarbtn.classList.add("blueButton");
    saveCancelBtn.appendChild(guardarRemplazarbtn);

    
    let cancelarBtn = document.createElement("button");
    cancelarBtn.textContent = "cancelar";
    cancelarBtn.setAttribute("id","cancelarBtn");
    cancelarBtn.classList.add("greyButton");
    cancelarBtn.style.height ="67px";
    cancelarBtn.style.width = "332px";
    saveCancelBtn.appendChild(cancelarBtn);

    mainContainer.appendChild(saveCancelBtn);

    cancelarBtn.addEventListener("click",returnMenu);
}

function inputFrase(){

    let inputFrases = document.createElement("INPUT");
    inputFrases.setAttribute("value", "Ingrese una palabra"); 
    inputFrases.setAttribute("id","inputFrase");
    mainContainer.appendChild(inputFrases);
    inputFrases.style.width ="299px";
    inputFrases.style.height ="48px";
    inputFrases.style.border ="none";
    inputFrases.style.backgroundColor ="#F3F5FC";
    inputFrases.style.color = "#0A3871";
    inputFrases.style.fontSize ="32px";
}

function adviceMessage(){

    let adviceContainer = document.createElement("div");
    adviceContainer.setAttribute("id","adviceDiv");
    adviceContainer.style.flex = "inherit";
    let imageAdvice = document.createElement("img");
    imageAdvice.src  = './Vector_advice.png';
    let textAdvice = document.createElement("div");
    textAdvice.textContent = "Max. 8 caracteres";
    adviceContainer.appendChild(textAdvice);
    adviceContainer.appendChild(imageAdvice);
    mainContainer.appendChild(adviceContainer);

}

function returnMenu(){
    agregarPalabraBtn.style.visibility = "visible";
    iniciarJuegoBtn.style.visibility = "visible";
    mainContainer.style.flex;
    document.getElementById("saveCancel").remove();
    document.getElementById("inputFrase").remove();
    document.getElementById("adviceDiv").remove();
}