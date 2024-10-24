const prompt = require("readline-sync")

const idade = Number(prompt.question("Qual eh a sua idade? "));

// Estrutura Condicional: if/else

// Se precisar aumenta if e else, dependendo de quantas condições precisaram ser colocadas

if (idade >= 18) {
    console.log("Você eh maior de idade"); // Se a condição for verdadeira
} else {
    console.log("Você eh menor de idade"); // Se a 1 condição for falsa
}