// TODO: HIGH ORDER FUNCTIONS/FUNÇÕES DE ALTA ORDEM

//* 1° - Função que retorna outra função com parametro

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja bem vindo(a) ao curso ${courseName}`
    );
  };
}

const welcome2 = welcome("Front-end em React");

welcome2("William Serafin Zatt");

console.clear();

//* 2° - Função que recebe outra função com parametro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

//? operacao: função que realiza a operação entre os dois números, ou seja, ela precisa receber dois números
const calcular = (num1, num2, operacao) => operacao(num1, num2);

//? calcular = (10, 5, somar) => somar(10, 5)
const retorno = calcular(10, 5, somar);

console.log(retorno);

// (num1 * num2) + (2 * num1 * num2)
const resultado = calcular(
  10,
  5,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultado);
