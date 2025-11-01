document.addEventListener('DOMContentLoaded', () => {
    const revealBtns = document.querySelectorAll('.reveal-btn');

    revealBtns.forEach(btn => {
        const meaning = btn.nextElementSibling; // .true-meaning

        btn.addEventListener('click', () => {
            if (meaning.style.display === 'block') {
                meaning.style.display = 'none';
                meaning.classList.remove('revealed');
                btn.textContent = 'Revelar';
                btn.style.background = '#6a3493';
            } else {
                meaning.style.display = 'block';
                setTimeout(() => meaning.classList.add('revealed'), 10);
                btn.textContent = 'Esconder';
                btn.style.background = '#5a189a';
            }
        });
    });
});