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

// CONEXION CON PY (Backend Flask)
document.getElementById('generarBtn').addEventListener('click', async () => {
    const prompt = document.getElementById('inputPrompt').value;

    if (!prompt) {
        document.getElementById('outputText').innerText = "Por favor, ingresa un texto.";
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:5000/generar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json();

        if (data.text) {
            document.getElementById('outputText').innerText = data.text;
        } else {
            document.getElementById('outputText').innerText = "Error generando narrativa.";
        }
    } catch (error) {
        document.getElementById('outputText').innerText = "Error al conectar con el servidor.";
        console.error("Error:", error);
    }
});