//* EXEMPLO 1

const prompt = require("readline-sync"); //! BIBLIOTECA NODE.JS

// let saldo = Number(prompt.question("Qual eh o seu saldo?"));

//! CUIDADO COM O LOOP INFINITO

// while (saldo <= 0) {
//   saldo = Number(
//     prompt.question("Saldo invalido! Por favor, informe novamente:")
//   );
// }

// console.log(saldo);

//* EXEMPLO 2

// let notaAluno = Number(prompt.question("Informe a nota do aluno: "));

// let somaNotas = 0; //? Chama-se ACUMULADOR DE SOMA DAS NOTAS

// let qtdNotasValidas = 0; //? ACUMULADOR DE QUANTAS NOTAS FORAM COLOCADAS

// while (notaAluno >= 0) {
//! Pode ser = somaNotas += notaAluno
// somaNotas = somaNotas + notaAluno; //? INCREMENTANDO O ACUMULADOR DE SOMA DAS NOTAS (somaNotas)

//! Pode ser = qtdNotasValidas++
// qtdNotasValidas = qtdNotasValidas + 1; //? INPLEMENTANDO O ACUMULADOR DE QUANTIDADE DAS NOTAS (qtdNotasValidas)

//   notaAluno = Number(prompt.question("Informe a proxima nota: "));
// }

// console.log(somaNotas);
// console.log(qtdNotasValidas);

// console.log("Média das notas dos alunos =", somaNotas / qtdNotasValidas);

//* EXEMPLO 3

//! parseInt = Pega apenas o número inteiro do valor

//! Math.round = Arredonda o valor

// const numAleatorio = parseInt(Math.random() * 10);

// let numUsuario = Number(prompt.question("Informe um numero entre 0 e 10: "));

// let qtdTentativas = 0;

// while (numAleatorio !== numUsuario) {
//   console.log("Você errou o número! Tente novamente...");
//   numUsuario = Number(prompt.question("Informe um numero entre 0 e 10: "));
//   qtdTentativas++;
// }

// console.log("Parabéns! Você acertou! O número era", numAleatorio);
// console.log("Foram ", qtdTentativas, " Tentativas");

//* Loop com Contador

// let contador = 0;

// while (contador < 5) {
//   console.log(contador);

//   if (contador === 2) {
//     break; //! break e continue é bom evitar usar
//   }
//   contador++;
// }

//* DO WHILE
//? Não é muito utilizado

let saldo;

//? EXECUTA AO MENOS 1 VEZ
do {
  saldo = Number(prompt.question("Informe um saldo valido: "));
} while (saldo <= 0);

console.log(saldo);
