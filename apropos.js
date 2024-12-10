document.querySelectorAll('.dropdown').forEach(dropdown => {
    const arrow = dropdown.querySelector('.dropdown-arrow');
    const content = dropdown.querySelector('.dropdown-content');

    arrow.addEventListener('click', () => {
        // Fermer les autres dropdowns
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('open');
            }
        });

        // Basculer l'état du dropdown actuel
        dropdown.classList.toggle('open');
    });
});