document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    const messageDiv = document.getElementById('message');

    button.addEventListener('click', () => {
        messageDiv.textContent = 'Click any 1 of the things above to explore this website';
    });
});