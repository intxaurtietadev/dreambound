// Selección de elementos del DOM
const btnPopUp = document.querySelector('.btnLogin-popup');
const coverBox = document.querySelector('.cover_box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

// Función para abrir el popup
function openPopup() {
    coverBox.classList.add('active-popup');
}

// Función para cerrar el popup
function closePopup() {
    coverBox.classList.remove('active-popup');
    coverBox.classList.remove('active');
}

// Función para activar el formulario de registro
function showRegister() {
    coverBox.classList.add('active');
}

// Función para activar el formulario de login
function showLogin() {
    coverBox.classList.remove('active');
}

// Eventos
btnPopUp.addEventListener('click', openPopup);
iconClose.addEventListener('click', closePopup);
registerLink.addEventListener('click', showRegister);
loginLink.addEventListener('click', showLogin);
