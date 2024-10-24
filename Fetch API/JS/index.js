// TODO: Fetch API

//* then/catch

// fetch("https://viacep.com.br/ws/95333000/json/")
//   .then((resposta) => {
//? .json() = converter para arquivos json
//     resposta.json().then((dados) => console.log(dados));
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

//* async/await

async function obterDadosCEP() {
  try {
    const resposta = await fetch("https://viacep.com.br/ws/95333000/json/");
    const dados = await resposta.json();

    console.log(dados);
  } catch (erro) {
    console.log("Deu errado!", erro);
  } finally {
    console.log("Terminou a requisição");
  }
}

obterDadosCEP();
