document.addEventListener("DOMContentLoaded", mostrar )

function mostrar() {
  const toggleBtn = document.getElementById("btn");
  const planes = document.getElementById("planes");

  toggleBtn.addEventListener("click", function () {
    if (planes.style.display === "none") {
      planes.style.display = "flex";
    } else {
      planes.style.display = "none";
    }
  });
};
