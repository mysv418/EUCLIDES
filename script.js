
  
    
    
    
    const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    let currentIndex = 0;

    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        openModal(img.src);
      });
    });

    function openModal(src) {
      modal.style.display = 'flex';
      modalImg.src = src;
    }

    function closeModal() {
      modal.style.display = 'none';
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex].src;
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex].src;
    }

    document.addEventListener('keydown', (e) => {
      if (modal.style.display !== 'flex') return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });

    function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }

    function closeMenu() {
      const menu = document.getElementById('menu');
      menu.style.display = 'none';
    }
    
    
    
    
    
    
    
// Función para deshabilitar la tecla de impresión de pantalla
document.addEventListener('keydown', function (e) {
    if (e.key === 'PrintScreen') {
        e.preventDefault(); // Previene la acción de captura
        alert('La captura de pantalla está deshabilitada en esta página.');
    }
});

// Función para deshabilitar el clic derecho
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Previene el menú contextual
    alert('El clic derecho está deshabilitado en esta página.');
});

// Mostrar la capa de protección cuando se detecte una acción sospechosa
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // Cuando el usuario minimiza la página o la oculta, mostramos la capa
        document.querySelector('.overlay').style.display = 'block';
    } else {
        // Cuando la página vuelve a estar visible, ocultamos la capa
        document.querySelector('.overlay').style.display = 'none';
    }
});

// Detectar la activación de la pantalla completa
document.addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement) {
        // Si se activa la pantalla completa, mostramos la capa de protección
        document.querySelector('.overlay').style.display = 'block';
    } else {
        // Si se desactiva la pantalla completa, ocultamos la capa
        document.querySelector('.overlay').style.display = 'none';
    }
});
  






 <!-- Script para cargar el menú -->
  
    fetch('MENU.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('menu-container').innerHTML = html;
      });
