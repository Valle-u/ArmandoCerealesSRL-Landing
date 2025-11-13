document.addEventListener('DOMContentLoaded', function() {

    // --- OBTENER ELEMENTOS DEL DOM ---
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const termsModal = document.getElementById('terms-modal');
    const privacyModal = document.getElementById('privacy-modal');
    const helpModal = document.getElementById('help-modal');
    const helpVideo = document.getElementById('help-video');

    const loginBtn = document.getElementById('login-btn');
    const termsBtn = document.getElementById('terms-btn');
    const privacyBtn = document.getElementById('privacy-btn');
    const footerTermsBtn = document.getElementById('footer-terms-btn');
    const footerPrivacyBtn = document.getElementById('footer-privacy-btn');
    const helpBtn = document.getElementById('help-btn');
    const registerLink = document.getElementById('register-link');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    
    // Obtener todos los botones de cierre a la vez
    const closeButtons = document.querySelectorAll('.close-button');

    // --- FUNCIONES ---

    // Función para cerrar todos los modales y pausar videos
    function closeAllModals() {
        if (loginModal) loginModal.style.display = "none";
        if (registerModal) registerModal.style.display = "none";
        if (termsModal) termsModal.style.display = "none";
        if (privacyModal) privacyModal.style.display = "none";
        if (helpModal) {
            helpModal.style.display = "none";
            if (helpVideo) {
                helpVideo.pause(); // Pausa el video
                helpVideo.currentTime = 0; // Opcional: reinicia el video
            }
        }
    }

    // --- LÓGICA DEL MODO OSCURO ---

    // Función para aplicar el tema guardado al cargar la página
    function applyTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggleBtn) themeToggleBtn.textContent = '☀️'; // Cambia el ícono a un sol
        } else {
            body.classList.remove('dark-mode');
            if (themeToggleBtn) themeToggleBtn.textContent = '🌙'; // Cambia el ícono a una luna
        }
    }

    // Aplicar el tema guardado
    applyTheme();


    // --- EVENT LISTENERS (ESCUCHADORES DE EVENTOS) ---

    // Abrir modal de Login
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals(); // Cierra otros modales por si acaso
            loginModal.style.display = 'flex';
        });
    }

    // Abrir modal de Términos y Condiciones
    if (termsBtn) {
        termsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            termsModal.style.display = 'flex';
        });
    }

    // Abrir modal de Política de Privacidad
    if (privacyBtn) {
        privacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            privacyModal.style.display = 'flex';
        });
    }

    // Abrir modal de Términos y Condiciones desde el footer
    if (footerTermsBtn) {
        footerTermsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            termsModal.style.display = 'flex';
        });
    }

    // Abrir modal de Política de Privacidad desde el footer
    if (footerPrivacyBtn) {
        footerPrivacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            privacyModal.style.display = 'flex';
        });
    }


    // Abrir modal de Ayuda
    if (helpBtn) {
        helpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            helpModal.style.display = 'flex';
        });
    }

    // Abrir modal de Registro desde el de Login
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllModals();
            registerModal.style.display = 'flex';
        });
    }

    // Cerrar modales con el botón 'X'
    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllModals);
    });

    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === loginModal || event.target === registerModal || event.target === helpModal || event.target === termsModal || event.target === privacyModal) {
            closeAllModals();
        }
    });

    // Cambiar entre modo claro y oscuro
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Guardar la preferencia del usuario en localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggleBtn.textContent = '🌙';
            }
        });
    }

    // --- LÓGICA DEL MENÚ HAMBURGUESA ---
    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
            hamburgerBtn.classList.toggle('is-active');
        });
    }
});
