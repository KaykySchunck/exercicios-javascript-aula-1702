// Exercício 1: Arrow Function com um parâmetro
const dobro = numero => numero * 2;
console.log(dobro(2));

/*Exercício 2: Arrow Function com múltiplos parâmetros
Crie uma arrow function chamada dividir que recebe dois números e 
retorna o resultado da divisão do primeiro pelo segundo.*/

const divisao = (num1, num2) => num1 / num2;
console.log(divisao(10, 5));


/*Exercício 3: Arrow Function com múltiplas linhas
Crie uma arrow function chamada mensagemBoasVindas 
que recebe um nome e retorna uma mensagem de boas-vindas no formato "Seja bem-vindo, [nome]!"*/

const saudacao = (nome) => {
    return `Fala meu chapa ${nome}`;
}
console.log(saudacao("Julius cigarrinho"));

//Higher-Order Functions (Funções de Alta Ordem)
const aplicarOperation = (a, b, operacao) => operacao(a, b);
console.log(aplicarOperation(10, 10, (x, y) => x + y));
console.log(aplicarOperation(100, 10, (x, y) => x / y));

//Exemplos comuns de Higher-Order Functions no JavaScript:
//--MAP--
const numero = [1, 2, 3, 4, 5];
const dobrado = numero.map(num => num * 2);
console.log(dobrado);

//filter
const idades = [10, 35, 50, 65];
const filtro = idades.filter(idade => idade <= 35);
console.log(filtro);

// reduce
const valores =  [10,20,30,40];
const soma = valores.reduce((total , num) => total + num , 0);
console.log(soma);
