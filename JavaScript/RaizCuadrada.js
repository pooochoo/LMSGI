document.getElementById('btn').addEventListener('click', raizCuadrada);
document.getElementById('btn2').addEventListener('click', listaCompra);
document.getElementById('btn3').addEventListener('click', ocultarMostrar);

function raizCuadrada(){
    const numeroInput = document.getElementById('caja1').value;

    const numero = parseFloat(numeroInput);

    if (numero < 0) {
        alert('El número ha de ser mayor que 0');
        return;
    }

    const resultado = Math.sqrt(numero);

    document.getElementById('caja2').value = resultado;
    
}

function listaCompra(){
    const lista = document.getElementById('lista');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = document.getElementById('caja3').value;
    lista.appendChild(nuevoElemento);
    document.getElementById('caja3').value = '';
}


function ocultarMostrar(){
    const titulo = document.getElementById('text1');

    if(titulo.style.display == 'none'){
        titulo.style.display = 'block';
    }
    else{
        titulo.style.display = 'none';
    }

}