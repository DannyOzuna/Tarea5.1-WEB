'use strict'

let num = parseInt(prompt("Ingrese el numero que va a multiplicar"));

while(num < 0 || isNaN(num)){
    num = parseInt(prompt("Ingrese el numero que va a multiplicar"));
}

document.write("<h1>Tabla del "+num+"</h1>");
for(let i = 0; i <= 12; i++){
    document.write(num+"X"+i+"="+(num*i)+"</br>");
}

document.write("<h1>Tabla del Multiplicar</h1>");
for(let i = 0; i <= 12; i++){
    document.write("<h3>Tabla del "+i+"</h3>");
    for(let j = 0; j <= 12; j++){
        document.write(i+"X"+j+"="+(i*j)+"</br>")
    }
}