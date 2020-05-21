const progressBar = () => {
    function progressBarScroll() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.getElementById('progressBar').style.width = scrolled + '%';
    }

    var visible = function (target) {
        // Все позиции элемента
        const trg = document.querySelector('.progress-container');

        let targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight,
            };

        if (
            targetPosition.bottom > windowPosition.top &&
            targetPosition.top < windowPosition.bottom &&
            targetPosition.right > windowPosition.left &&
            targetPosition.left < windowPosition.right
        ) {
            // console.log('Вы видите элемент :)');

            trg.classList.add('pos-footer');
        } else {
            trg.classList.remove('pos-footer');
        }
    };

    try {
        const trg = document.querySelector('.footer');
        visible(trg);
        progressBarScroll();

        window.addEventListener('resize', () => {
            const trg = document.querySelector('.footer');
            visible(trg);
            progressBarScroll();
        });
    } catch (error) {}

    window.onscroll = function () {
        try {
            progressBarScroll();
            const trg = document.querySelector('.footer');

            visible(trg);
        } catch (error) {}
    };
};

export default progressBar;
