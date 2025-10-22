function irACarta(url) {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = url;
  }, 400);
}

window.onload = () => {
  document.body.classList.add('fade-in');
};


function irACarta(url) {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = url;
  }, 400);
}


function ampliar(src) {
  const lightbox = document.getElementById('lightbox');
  const imagen = document.getElementById('imagen-ampliada');
  imagen.src = src;
  lightbox.style.display = 'flex';
}

function cerrarLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}