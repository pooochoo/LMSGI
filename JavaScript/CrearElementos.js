document.getElementById("btn").addEventListener("click", crearElemento);

function crearElemento() {
    // 1. Crear un nuevo div
    const nuevoDiv = document.createElement('div');

    // 2. Establecer un ID para el div (opcional)
    nuevoDiv.id = 'miNuevoDiv';

    // 3. Añadir texto al div
    const texto = document.createTextNode('¡Este es un nuevo div creado con JavaScript!');
    nuevoDiv.appendChild(texto);

    // 4. Añadir el nuevo div al cuerpo del documento (al final del body)
    document.body.appendChild(nuevoDiv);
}