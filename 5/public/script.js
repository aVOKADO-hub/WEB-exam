document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modalName');
    const modalAge = document.getElementById('modalAge');
    const closeModal = document.getElementById('closeModal');
    const startButton = document.getElementById('startButton');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    
    startButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();

        if (name && age) {
            modalName.textContent = name;
            modalAge.textContent = age;
            modal.classList.remove('hidden');
            modal.style.display = 'block';
        } else {
            alert('Будь ласка, заповніть усі поля');
        }
    });

   
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.style.display = 'none'; 
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none'; 
        }
    });
});
