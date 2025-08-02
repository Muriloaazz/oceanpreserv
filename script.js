const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add("active");
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove("active");
    });
}

// Adicionar event listeners para qualquer elemento que tenha as classes ou IDs corretos
document.addEventListener('DOMContentLoaded', function() {
    const registerButtons = document.querySelectorAll('#register, .register-btn');
    const loginButtons = document.querySelectorAll('#login, .login-btn');
    
    registerButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.add("active");
        });
    });
    
    loginButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            container.classList.remove("active");
        });
    });
});

function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email === '' || password === '') {
        alert('Por favor, preencha email e senha!');
        return;
    }
    
    if (email === 'admin@oceanpreserv.com' && password === '123456') {
        sessionStorage.setItem('oceanpreserv_logged_in', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Email ou senha incorretos!');
    }
}
