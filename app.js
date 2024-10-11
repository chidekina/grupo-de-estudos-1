// const numero = prompt('Digite um numero:');

//RESPOSTA COMPLETA

// if (numero > 0) {
//     document.write(`O ${numero} eh maior que 0`);
// } else if (numero < 0) {
//     document.write(`O ${numero} eh menor que 0`);
// } else {
//     document.write('O numero eh igual a 0');
// }

//CLEAN CODE

// if (numero > 0) document.write(`O ${numero} eh maior que 0`);
// else if (numero < 0) document.write(`O ${numero} eh menor que 0`);
// document.write('O numero eh igual a 0');

// const ladoA = prompt('Digite o primeiro lado:') 
// const ladoB = prompt('Digite o segundo lado:') 
// const ladoC = prompt('Digite o terceiro lado:') 

// if(ladoA == ladoB && ladoB == ladoC){
//     document.write(`O triangulo é equilatero`);
// } 
// else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
//     document.write(`O triangulo é isosceles`);
// } 
// else {
//     document.write(`O triangulo é escaleno`);
// }

// const ano = prompt ('Digite o ano:');

// if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
//     document.write(`${ano} é bissexto`);
// }

// else {
//     document.write(`${ano} não é bissexto`);
// }

const primeiroNumero = prompt ('Digite o primeiro número:'); 
const segundoNumero = prompt ('Digite o segundo número:'); 
const terceiroiroNumero = prompt ('Digite o terceiro número:'); 
if(primeiroNumero > segundoNumero && primeiroNumero > terceiroiroNumero){
    document.write(`${primeiroNumero} é o maior número`);
}
else if(segundoNumero > primeiroNumero && segundoNumero > terceiroiroNumero){
    document.write(`${segundoNumero} é o maior número`);
}
else {
    document.write(`${terceiroiroNumero} é o maior número`);
}    