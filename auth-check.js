// Verificar se o usuário está logado ao acessar páginas protegidas
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('oceanpreserv_logged_in');
    
    if (!isLoggedIn) {
        alert('Você precisa fazer login para acessar esta página!');
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Função para fazer logout
function logout() {
    sessionStorage.removeItem('oceanpreserv_logged_in');
    window.location.href = 'index.html';
}

// Verificar autenticação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Só verificar se não estiver na página de login
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        checkAuth();
    }
});