// Operadores e operações booleanas são baseados em comparações

const numero1 = 10;
const numero2 = 12;

// Prefira optar pelo igual 3x (===)

console.log(numero1 == numero2); // Estes iguais 2x comparam os valores, mas não os tipos

console.log(numero1 === numero2); // Estes iguais 3x comparam os valores e os tipos

// Prefira optar pelo diferente e 2x iguais (!==)

console.log(numero1 != numero2); // Esta diferença e 1x igual compara o valor, mas não o tipo

console.log(numero1 !== numero2); // Estas diferenças e 2x igual comparam o valores e os tipos

console.log(numero1 > numero2); // > = Significa numero1 maior que numero2

console.log(numero1 >= numero2); // >= = Significa numero1 maior ou igual à numero2

console.log(numero1 < numero2); // < = Significa numero1 menor que numero2

console.log(numero1 <= numero2); // <= = Significa numero1 maior ou igual à numero2

// Lembrando que isso são apenas operadores para comparações

const idadePessoa1 = 16;
const idadePessoa2 = 39;

// && = Os dois valores precisam ser verdadeiros (&& = AND/E)
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);

// || = Se algum dos dois valores são verdadeiros, (|| = OR/OU)
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

console.log(!true); // Pois ! = not/não, então !verdadeiro é igual a falso