//for (let i = 2; i <= 6; i++) {
// console.log(i);
//}

//var numero = parseInt(prompt("digite um numero que vc gostaria de saber a tabuada"));

//for (var i = 1; i <=20; i++){
//    var resultdado = numero * i;
//    console.log(numero + " x " + i + " = " + resultdado)
//}

let totalSalarios = 0;

for (let i = 1; i <= 5; i++) {
    let salario = parseFloat(prompt(`Informe o salário ${i}:`));

    totalSalarios += salario
   console.log(totalSalarios)
}
//console.log(totalSalarios)