document.getElementById("btn").addEventListener("click", cambiarClase);

function cambiarClase() {
    const elemento = document.getElementById("miElemento");

    elemento.classList.toggle("rojo");
    elemento.classList.remove("verde");
    elemento.classList.add("grande");
}