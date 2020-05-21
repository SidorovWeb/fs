const switchDarkMode = () => {
    const switchDarkMode = document.querySelectorAll('.switch-dark-mode'),
        body = document.body;

    switchDarkMode.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (body.classList.contains('them-light')) {
                body.classList.remove('them-light');
                body.classList.add('them-dark');
            } else {
                body.classList.remove('them-dark');
                body.classList.add('them-light');
            }
        });
    });
};

export default switchDarkMode;
