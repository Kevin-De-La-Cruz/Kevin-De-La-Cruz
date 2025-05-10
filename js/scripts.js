
document.addEventListener("DOMContentLoaded", function () {
  const navContacto = document.querySelector(".nav-contacto");
  const contactoBtn = document.querySelector(".cta-button");

  navContacto.addEventListener("click", function (e) {
    e.preventDefault();

    // Desplaza suavemente al botón
    contactoBtn.scrollIntoView({ behavior: "smooth", block: "center" });

    // Retrasa la animación para que inicie después del scroll
    setTimeout(() => {
      contactoBtn.classList.remove("animate-button");
      void contactoBtn.offsetWidth;
      contactoBtn.classList.add("animate-button");
    }, 700); // 600ms es aproximadamente el tiempo que tarda el scroll
  });
});

// para misión y visión abrir el despegable
function openModal(type) {
  document.getElementById(`modal-${type}`).style.display = "block";
}

function closeModal(type) {
  document.getElementById(`modal-${type}`).style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}






function abrirGaleria() {
  document.getElementById("modalGaleria").style.display = "block";
}

document.querySelector(".close-modal").addEventListener("click", function () {
  document.getElementById("modalGaleria").style.display = "none";
});

window.onclick = function (event) {
  const modal = document.getElementById("modalGaleria");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};



