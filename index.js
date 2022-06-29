//imprime por consola los numeros impares de 1 a 100
let entrada = prompt ("quiere ver los numeros impares del 1 al 100, responda si o no").toLowerCase();
if (entrada == "si"){
    for (let i = 0; i <= 100; i++) {
    
      if (i % 2 !== 0) {
        console.log(i);
    }
}
}
 else if (entrada=="no"){
    console.log("gracias");
}
else {
    alert("no entiendo su respuesta");
}
