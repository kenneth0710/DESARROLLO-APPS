const boton = document.getElementById('miBoton');
const lista = document.getElementById('miLista');
let contador = 1;

boton.addEventListener('click', () => {

    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = `Elemento ${contador}`;

    lista.appendChild(nuevoElemento);
    contador++;
});