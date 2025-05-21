document.getElementById("btn").addEventListener("click", mostrar )

function mostrar() {
  const planes = document.getElementById("planes");

    if (planes.style.display === "none") {
      planes.style.display = "flex";
    } else {
      planes.style.display = "none";
    }
};
