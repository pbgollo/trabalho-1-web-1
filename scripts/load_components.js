function loadHeader() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
}

function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
}

window.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
