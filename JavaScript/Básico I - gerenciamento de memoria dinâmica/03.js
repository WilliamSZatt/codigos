const prompt = require("readline-sync") // Para importar a biblioteca readline-sync

const idade = prompt.question("Qual eh a sua idade?");

const idadeNumber = Number(idade); // Number() = converte para número (inicial sempre maiuscula)

console.log(idadeNumber, typeof idadeNumber); // Para esse codigo funcionar no node.js precisa de uma biblioteca chamada readline-sync

// Coerção Explicita (Conversão Manual) = Number, String, Boolean

console.log(Number("X")); // NaN = Not a Number

console.log(String(10), typeof String(10)); // String = converte para string/texto

console.log(Boolean(2)); // Boolean = converte para booleano(true/verdadeiro or false/falso), apenas o 0 (Zero) é falso

// Coerção Implicita

console.log(1 + "1"); // numero + string = vira string, tem como resultado 11

console.log(10 - "5"); // numero - string = vira numero, tem como resultado 5

// apenas a soma (o sinal +) é passado como string, a subtração (-), multiplicação (*) e divisão (/) são passados como numero

let n = 1 + "1"; // '11' (string)

n = n - 1; // 11 - 1 = 10

console.log(n);

console.log(2 + 3 + 4 + '5'); // 5 + 4 + '5' = 9 + '5' = '95'

console.log('5' + 2 + 3 + 4); // '52' + 3 + 4 = '523' + 4 = '5234'

console.log('10' - '4' - '3' - 2 + '5'); // 6 - '3' - 2 + '5' = 3 - 2 + '5' = 1 + '5' = '15'