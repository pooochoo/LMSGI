document.getElementById("btn").addEventListener("click", cambiarEstilo ) 

function cambiarEstilo() {
    const cabecera = document.getElementById("cabecera");
    const pie = document.getElementById("pie");

    let coloresAlternados = false;

        if (!coloresAlternados) {
            cabecera.style.backgroundColor = "#4A90E2";
            cabecera.style.color = "#ffffff";
            pie.style.backgroundColor = "#4A90E2";
            pie.style.color = "#ffffff";
        } else {
            cabecera.style.backgroundColor = "";
            cabecera.style.color = "";
            pie.style.backgroundColor = "";
            pie.style.color = "";
        }
        
        coloresAlternados = !coloresAlternados;
};