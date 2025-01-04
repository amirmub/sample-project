const check = document.getElementById('check');
        const menu = document.getElementById('menu');

        check.addEventListener('change', () => {
            if (check.checked) {
                menu.style.left = '0';
            } else {
                menu.style.left = '-100%';
            }
        });

        // Close menu when a link is clicked (optional but good UX)
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                check.checked = false; // Uncheck the checkbox
                menu.style.left = '-100%'; // Hide the menu
            });
        });