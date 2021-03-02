/**
 * Buscando tags dentro do document atual.
 * Retorna um vetor com todos as tags.
 * É possível modificar todas as propriedades das tags por meio de JS !!
*/

let paragrafos = document.getElementsByTagName('p');
paragrafos[1].classList.toggle('aDireita');
console.log(paragrafos);

let seletor = document.querySelectorAll('p.aDireita');
console.log(seletor);

/* EVENTOS DO DOM */
let elemento = document.getElementById('teste');

elemento.addEventListener('click', clicar);
elemento.addEventListener('mouseenter', entrar);
elemento.addEventListener('mouseout', sair);

function entrar() {
    elemento.innerText = 'Entrou!';
}

function sair() {
    elemento.innerText = 'Saiu!';
    elemento.style.background = 'rgb(183, 0, 207)';
}

function clicar() {
    elemento.innerText = 'Clicou!';
    elemento.style.background = 'rgb(0, 207, 45)';
}

