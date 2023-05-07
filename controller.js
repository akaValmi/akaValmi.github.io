const flecha = document.querySelector('.flecha');
flecha.addEventListener('click', () => {
  flecha.classList.add('oculto');
});


const flechaBajar = document.getElementById("flecha-bajar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    flechaBajar.style.display = "none";
  } else {
    flechaBajar.style.display = "flex";
  }
});



var modal = document.getElementById("modal");
var btn = document.getElementById("mas-info");
var cerrarBtn = document.getElementById("cerrar-modal");
btn.onclick = function() {
  modal.style.display = "block";
};
cerrarBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

