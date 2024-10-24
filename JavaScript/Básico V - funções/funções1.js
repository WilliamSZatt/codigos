// TODO: DEFINIÇÃO DA FUNÇÃO

//* Exemplo 1

function saudacao(nomeEstudante, curso) {
  //* Template string || template literals
  return `Olá, ${nomeEstudante}! Seja bem vindo(a) ao curso ${curso}`;
}

const mensagemSaudacao = saudacao("William", "Front-end em React"); //? Chamada da função

console.log(mensagemSaudacao);

console.clear();

//* Exemplo 2

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);

console.clear();

//---------------------------------------

// TODO: FUNÇÕES ANÔNIMAS

const dobroNum = function (numero) {
  return numero * 2;
};

const dobro = dobroNum(2);
console.log(dobro);

//---------------------------------------

// TODO: ARROW FUNCTION (função seta)

// const subtrair = (numero1, numero2) => {
//   return numero1 - numero2;
// };

// OU

// const multiplicar = (numero1, numero2) => numero1 * numero2 //? Se tem apenas uma linha o conteúdo da função pode coloca-la como está no codigo comentado

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploNumero = (numero) => numero * 3;
