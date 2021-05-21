let form = document.getElementById('formSorteio');
let numeroSorteado = document.getElementById('numero')
let min = document.getElementById('minimo');
let max = document.getElementById('maximo');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let numero = sortear(min.value, max.value);

    numeroSorteado.innerHTML = numero

})

function sortear(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

































