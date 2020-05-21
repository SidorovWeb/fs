import './import/svg4everybody';
import './import/lazyLoad';
import './import/objectFitImages';
import './import/dragstart';
import progressBar from './modules/scrollingProgressBar';
import switchDarkMode from './modules/switchDarkMode';
import modals from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    ('use strict');

    progressBar();
    switchDarkMode();
    modals();

    const searchInput = document.querySelector('.popup-search__input'),
        popup = document.querySelector('.popup'),
        searchPopup = document.querySelector('#search-popup'),
        subscribePopup = document.querySelector('#subscribe-popup'),
        mForm = document.querySelector('.m-menu__form__form'),
        form = document.querySelector('.popup-search__form'),
        mInput = document.querySelector('.m-menu__input'),
        mmenu = document.querySelector('.m-menu'),
        popupClose = document.querySelector('.popup .popup__close'),
        hamburger = document.querySelectorAll('.hamburger');

    function checkSearch(form, input, wrapp, hamb) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (input.value == '1') {
                wrapp.classList.remove('error');
                wrapp.classList.add('passed');
                // mMenuPassed.classList.remove('one-element');
                // mMenuPassed.classList.remove('two-element');

                // if (mMenuPassed.querySelector('.row').children.length === 1) {
                //     mMenuPassed.classList.add('one-element');
                // }

                // if (mMenuPassed.querySelector('.row').children.length === 2) {
                //     mMenuPassed.classList.add('two-element');
                // }
            } else {
                wrapp.classList.remove('passed');
                wrapp.classList.add('error');
            }
        });

        input.addEventListener('input', (c) => {
            if (input.value == '') {
                wrapp.classList.remove('error');
                wrapp.classList.remove('passed');
            }
        });

        popupClose.addEventListener('click', () => {
            input.value = '';
            wrapp.classList.remove('error');
            wrapp.classList.remove('passed');

            hamburger.forEach((el) => {
                el.classList.remove('hamburger--open');
            });
        });
    }

    checkSearch(mForm, mInput, mmenu);
    checkSearch(form, searchInput, popup);

    hamburger.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            hamburger.forEach((el) => {
                el.classList.toggle('hamburger--open');
            });
            mmenu.classList.toggle('menu-open');
            document.body.classList.toggle('menu-open');
            searchPopup.style.display = 'none';
            subscribePopup.style.display = 'none';
            mInput.value = '';
            mmenu.classList.remove('error');
            mmenu.classList.remove('passed');
        });
    });

    const resizepopup = () => {
        if (mmenu.classList.contains('menu-open') && window.matchMedia('(min-width: 1200px)').matches) {
            document.body.classList.toggle('menu-open');
            document.body.classList.toggle('modal-open');
            mmenu.classList.remove('menu-open');
            popup.classList.add('modal-open');
            popup.classList.add('search-popup');
            searchPopup.style.display = 'flex';
            subscribePopup.style.display = 'none';

            hamburger.forEach((el) => {
                el.classList.add('hamburger--open');
            });

            if (mmenu.classList.contains('passed')) {
                mmenu.classList.remove('passed');
                popup.classList.add('passed');
            } else if (mmenu.classList.contains('error')) {
                mmenu.classList.remove('error');
                popup.classList.add('error');
            } else {
                popup.classList.remove('passed');
                popup.classList.remove('error');
                mmenu.classList.remove('passed');
                mmenu.classList.remove('error');
            }
        }
        if (popup.classList.contains('search-popup') && window.matchMedia('(max-width: 1200px)').matches) {
            document.body.classList.toggle('menu-open');
            document.body.classList.toggle('modal-open');
            popup.classList.remove('modal-open');
            popup.classList.remove('search-popup');
            mmenu.classList.add('menu-open');
            hamburger.forEach((el) => {
                el.classList.add('hamburger--open');
            });

            if (popup.classList.contains('passed')) {
                popup.classList.remove('passed');
                mmenu.classList.add('passed');
            } else if (popup.classList.contains('error')) {
                popup.classList.remove('error');
                mmenu.classList.add('error');
            } else {
                popup.classList.remove('passed');
                popup.classList.remove('error');
                mmenu.classList.remove('passed');
                mmenu.classList.remove('error');
            }
        }
    };

    window.addEventListener('resize', resizepopup);
});

import './import/polyfill';
