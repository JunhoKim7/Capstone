document.addEventListener('DOMContentLoaded', () => {
    const saveButtons = document.querySelectorAll('.btn-save');

    saveButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const parentCard = event.target.closest('.card-body');
            let heartButton = parentCard.querySelector('.heart-button');

            if (!heartButton) {
                heartButton = document.createElement('button');
                heartButton.classList.add('heart-button');
                heartButton.innerHTML = '&#10084;';
                parentCard.appendChild(heartButton);
            }

            heartButton.classList.add('lit');
            setTimeout(() => {
                heartButton.classList.remove('lit');
            }, 1000);
        });
    });
});

