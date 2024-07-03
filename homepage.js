document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    const messageDiv = document.getElementById('message');

    button.addEventListener('click', () => {
        messageDiv.textContent = 'This works';
    });
});