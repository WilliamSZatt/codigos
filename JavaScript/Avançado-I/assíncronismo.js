const { error } = require("console");
const fs = require("fs");

// TODO: 1. Callback

// console.log("ANTES de ler o arquivo...");

// //? Função assíncrona (ler um arquivo leva um tempo)
// fs.readFile("Avançado-I/arquivo.txt", (erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log("Ocorreu um erro ao tentar ler o arquivo", erro);
//   } else {
//     console.log(String(conteudoDoArquivo));
//   }
// });

// console.log("DEPOIS de ler o arquivo...");

//* Exemplo 2 = setTimeout() (função que cria um timer)

// console.log("Antes do setTimeout...");

// setTimeout(() => {
//   console.log("Isso aqui vai ser executado após 2 segundos");
// }, 2 * 1000 /* Timer de 2s */);

// console.log("Depois do setTimeout...");

//---------------------------------------

// TODO: 2. Promises (promessas)

//? resolve = resolvida, parametro promise

//? reject = rejeitada, parametro promise

// console.log("Antes da criação da promise...");

//* criando uma promessa
// const promessas = new Promise((resolve, reject) => {
//   fs.readFile("Avançado-I/arquivo.txt", (erro, conteudoDoArquivo) => {
//     if (erro) {
//       reject("Ocorreu um erro ao tentar ler o arquivo", erro);
//     } else {
//       resolve(String(conteudoDoArquivo));
//     }
//   });
// });

//! Retornar uma promessa
function lerArquivoPromisse() {
  return new Promise((resolve, reject) => {
    fs.readFile("Avançado-I/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo", erro);
      } else {
        resolve(String(conteudoDoArquivo));
      }
    });
  });
}

//! Focar aqui, para retorno de promessas
// lerArquivoPromisse()
//! .then() = Quando a promessa é VERDADEIRA
//   .then((retornoResolveDaPromessa) => {
//     console.log("Deu certo:", retornoResolveDaPromessa);
//   })
//! .catch() = Quando a promessa é FALSA
//   .catch((erro) => {
//     console.log("Deu ruim: ", erro);
//   })
//! .finally() = Executa a promessa mesmo se ela é VERDADEIRA ou FALSA
//   .finally(() => {
//     console.log(
//       "Isso aqui vai ser executado, independente de sucesso ou fracasso da promessa, no final dela"
//     );
//   });

// TODO: async/await

async function leituraDeDados() {
  console.log("Isso é excutado antes da promise ser resolvida");

  const retornoDaPromessa = await lerArquivoPromise(); //? Espera a promessa ser resolvida para avançar

  console.log(retornoDaPromessa);
  console.log("Isso é excutado DEPOIS da promise ser resolvida");
}

leituraDeDados();
