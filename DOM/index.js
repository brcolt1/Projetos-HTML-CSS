/**
 * Buscando tags dentro do document atual.
 * Retorna um vetor com todos as tags.
 * É possível modificar todas as propriedades das tags por meio de JS !!
*/

let paragrafos = document.getElementsByTagName('p');
paragrafos[1].classList.toggle('aDireita');

let seletor = document.querySelectorAll('p.aDireita');
console.log(seletor);

console.log(paragrafos);