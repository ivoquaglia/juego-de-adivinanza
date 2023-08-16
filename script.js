let numeroAzar = Math.floor(Math.random()*100) + 1;

let numeroEntrada = document.querySelector("#numeroEntrada");
let mensaje = document.querySelector("#mensaje");


function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor, introduce un número valido entre el 1 y 100"
        mensaje.style.color  = "black";
        return
    }
    
    
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = "¡Felicitaciones! ¡Has adivinado el numero";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    }
    else if(numeroIngresado < numeroAzar){
        mensaje.textContent = "¡Más Alto! El numero es mayor al que dijiste";
        mensaje.style.color = "red";
    }
    else{
        mensaje.textContent = "¡Más bajo! El numero es menor al que dijiste"
        mensaje.style.color = "red";
    }

}