// Utilize o nome da variavel sem _ ou -
// nomeDoProfessor (Certo)
// nome_do_professor (Errado)

// JavaScript possui uma tipagem dinâmica e uma tipagem fraca

var nome = "Willam S Zatt"; // tipo: string(texto) apenas utilize aspas
var idade = 19; // tipo: number (número)
var altura = 1.95; // tipo: number (número)
// Quando tem casas decimais, por exemplo, (1.95) sempre é usado . (Ponto)
var estudando = true; // tipo: boolean(booleano) (true/verdadeiro or false/falso) - Não pode ter letra maiuscula (FALSE OR TRUE)

console.log(nome, typeof nome);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

var nenhumConteudo; // declarando uma variável undefined (indefinida)

console.log(nenhumConteudo); // undefined (indefinida)

var curso = "front-end em React", topico = "JavaScript Básico 1"; // Pode-se criar multiplas variáveis em uma mesma linha separado por , (virgula)

console.log(curso, topico);

// Não utilize a variável var, e sim utilize let ou const que é melhor para o escopo

let notaDoAluno = 10; // let = Permite alterar uma variável
const mediaDoAluno = 8; // const = Constante (não permite alterar valor, ou seja, tem apenas 1 valor fixo)

notaDoAluno = 9; // Como é let, pode ser alterada
// mediaDoAluno = 5; // Como é const, não é possível alterar

console.log(notaDoAluno);
console.log(mediaDoAluno);

// var = variável global, não é muito utilizada
// let = variável local
// const = variável constante