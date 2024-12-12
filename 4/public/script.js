document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modalName');
    const modalAge = document.getElementById('modalAge');
    const closeModal = document.getElementById('closeModal');
    const startButton = document.getElementById('startButton');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    // Відкрити модальне вікно
    startButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();

        if (name && age) {
            modalName.textContent = name;
            modalAge.textContent = age;
            modal.style.display = 'block';
        } else {
            alert('Будь ласка, заповніть усі поля');
        }
    });

    // Закрити модальне вікно
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрити модальне вікно при натисканні за межі контенту
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
