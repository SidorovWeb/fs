const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, clickCloseOverlay = true, scrollContent = false) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            popup1 = document.querySelector('#subscribe-popup'),
            popup2 = document.querySelector('#search-popup'),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach((i) => {
            i.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                popup1.style.display = 'none';
                popup2.style.display = 'none';
                modal.classList.remove('subscribe-popup');
                modal.classList.remove('search-popup');

                if (e.target.classList.contains('subscribe-btn')) {
                    popup1.style.display = 'flex';
                    modal.classList.add('subscribe-popup');
                } else {
                    popup2.style.display = 'flex';
                    modal.classList.add('search-popup');
                }

                windows.forEach((item) => {
                    item.classList.remove('modal-open');
                });

                document.body.classList.add('modal-open');
                modal.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            windows.forEach((item) => {
                item.classList.remove('modal-open');
            });

            document.body.classList.remove('modal-open');
            popup1.style.display = 'none';
            popup2.style.display = 'none';
            modal.classList.remove('modal-open');
            modal.classList.remove('subscribe-popup');
            modal.classList.remove('search-popup');
        });

        modal.addEventListener('click', (e) => {
            if (e.target == modal && clickCloseOverlay) {
                windows.forEach((item) => {
                    item.classList.remove('modal-open');
                });

                document.body.classList.remove('modal-open');
                modal.classList.remove('modal-open');
            }
        });
    }

    bindModal('.subscribe-btn', '.popup', '.popup .popup__close', false, true);
    bindModal('.popup-search__button', '.popup', '.popup .popup__close', false, true);
};

export default modals;
