"use strict";
let numero = 20; //? number ou pode fazer let numero: number
const pi = 3.1415; //? pi não muda, porque é constante
let nome = "William"; //? string ou let nome: string
let correta = true; //? boolean ou let correta: boolean
let resultado = numero * pi; //? resultado tem o tipo number
// const nomeUsuario = prompt("Qual é o seu nome? "); //? nomeUsuario tem tipo string || (ou) nulo
// console.log(nomeUsuario?.toUpperCase()); //* operador ? = significa que se não existir valor (for nulo), ele não fará o .toUpperCase(), mas se existir ele fará o.toUpperCase()
//! Pode fazer de duas formas a tipagem : number[] ou Array<number>, porem o mais comum é o primeiro tipo (number[])
const numeros = [1, 2, 3, 4, 5]; //* Tipagem de array (definir o tipo)
//! Não é recomendado fazer esse tipo de array abaixo!
// const misto = ["William", 19, 1.95]; //* array com tipos misturados, pode-se fazer const misto (number | String) = ["William", 19, 1.95];
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresIdade = idades.filter((idade) => idade < 18);
console.log(menoresIdade);
const pessoaTupla = ["William", 19];
const pessoa = {
    nome: "William",
    idade: 19,
    profissao: "Auxiliar",
    altura: 1.95,
};
console.log(pessoa);
function chooseNumber(num1, num2, criterio) {
    switch (criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num2 : num1;
        default:
            const numAleatorio = Math.random();
            if (numAleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const numEscolhido = chooseNumber(10, 20);
console.log("Numero Escolhido: ", numEscolhido);
