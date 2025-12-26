document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Functionality ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = themeToggleButton?.querySelector('.theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // 처음 방문 시 기본값을 화이트 테마(light)로 설정
        applyTheme('light');
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    prefersDarkScheme.addEventListener('change', (e) => {
        // 저장된 테마가 없을 때도 기본값은 화이트 테마로 유지
        if (!localStorage.getItem('theme')) {
            applyTheme('light');
        }
    });

    // --- "See More" Button Functionality ---
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const abstract = button.nextElementSibling;
            abstract.classList.toggle('hidden');

            // Update button text
            if (abstract.classList.contains('hidden')) {
                button.textContent = 'See More';
            } else {
                button.textContent = 'See Less';
            }
        });
    });
    const y = document.getElementById("year");
    if (y) {
        y.textContent = new Date().getFullYear();
    }
});