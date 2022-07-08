//imprime por consola los numeros impares de 1 a 100
// let entrada = prompt ("quiere ver los numeros impares del 1 al 100, responda si o no").toLowerCase();
// if (entrada == "si"){
//     for (let i = 0; i <= 100; i++) {
    
//       if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
// }
//  else if (entrada=="no"){
//     console.log("gracias");
// }
// else {
//     alert("no entiendo su respuesta");
// }


//Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
  //  [1,2,3,4,5,6,7,8,9,10]

const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaDeNumeros = 0;

for (let i = 0; i < NUMEROS.length; i++) {
    sumaDeNumeros += NUMEROS[i];
}

console.log(`La suma de números del array es: ${sumaDeNumeros}.`);