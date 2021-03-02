/**
 * Usamos call(), appply() ou bind para definirmos o elemento `this`
 * dentro de uma função JS.
*/

/** call() */
function somar(n1, n2) {
    console.log(`this: ${this}`);
    console.log(`n1: ${n1}`);
    console.log(`n2: ${n2}`);
    console.log(`Soma: ${this + n1 + n2}`);
}
somar.call(1, 2, 3);

/**apply() */
function subtrair(n1, n2) {
    console.log(`this: ${this}`);
    console.log(`n1: ${n1}`);
    console.log(`n2: ${n2}`);
    console.log(`Subtração: ${n1 - n2 - this}`);
}
subtrair.apply(1, [2, 3]);

/** bind() */
function multiplicar(n1, n2) {
    console.log(`this: ${this}`);
    console.log(`n1: ${n1}`);
    console.log(`n2: ${n2}`);
    console.log(`Multiplicação: ${n1 * n2 * this}`);
}
const bindMultiplicar = multiplicar.bind(10);
bindMultiplicar(2, 3);

/** arrow functions e o `this` 
 * Por definição, arrow functions NÃO possuem sua própria instância `this`.
 * Assim, call() e apply() somente podem passar argumentos para um arrow function.
*/
const article = {
    title: 'One punnnnnnnnnch',
    regularFunction:
    function() {
        console.log(this.title); 
    },
    arrowFunction: 
    () => {
        console.log(this.article); 
    }
}

article.regularFunction(); // Imprime corretamente
article.arrowFunction(); // Imprime undefined

// arrow function funcionando em uma classe
class  Article {
	constructor() {
		this.title  =  'Descomplicando call, apply e bind em JavaScript'
		
		this.arrowFunction();
	}

	arrowFunction  = () => {
		console.log(this.title); // Considera `this` no contexto global do seu uso (na classe)
	}
}

new  Article() // Descomplicando call, apply e bind em JavaScript
