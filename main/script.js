document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, загрузилась ли библиотека Swiper
    if (typeof Swiper === 'undefined') {
        console.error('Ошибка: Библиотека Swiper не загружена.');
        return;
    }

    // Инициализируем первый слайдер
    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 'auto', // Автоматически рассчитывать количество видимых слайдов
        spaceBetween: 20, // Расстояние между слайдами
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
        initialSlide: 1, // Начальный слайд
    });

    // Инициализируем второй слайдер
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination2",
        },
        mousewheel: true,
        keyboard: true,
        initialSlide: 2,
        slideClass: "swiper-slide2", // Добавляем класс слайдам второго слайдера
    });

    // Получаем заголовок "Каталог" и меню
    var catalogTitle = document.querySelector('.catalog-h1');
    var catalogMenu = document.querySelector('.catalog-menu');

    // Флаг для отслеживания состояния меню
    var menuVisible = false;

    // Назначаем обработчик события на заголовок "Каталог"
    catalogTitle.addEventListener('click', function() {
        // Показываем или скрываем меню при клике на заголовок "Каталог"
        if (!menuVisible) {
            catalogMenu.style.display = 'block';
            menuVisible = true;
        } else {
            catalogMenu.style.display = 'none';
            menuVisible = false;
        }
        
        // Изменяем цвет текста и фона заголовка "Каталог"
        catalogTitle.classList.toggle('clicked');
    });

// Функция для проверки, виден ли элемент на экране
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для запуска анимации чисел, когда секция становится видимой
function animateNumbersIfVisible() {
    var dopInfSection = document.querySelector('.dop-inf');
    if (isElementInViewport(dopInfSection)) {
        animateValue("yearsOnMarket", 0, 12, 2000); // От 0 до 12 за 2 секунды
        animateValue("equipmentsSold", 0, 70, 2000); // От 0 до 70 за 2 секунды
        animateValue("projectsCompleted", 0, 40, 2000); // От 0 до 40 за 2 секунды
        // Удаляем обработчик события, чтобы анимация не запускалась повторно
        window.removeEventListener('scroll', animateNumbersIfVisible);
    }
}

// Назначаем обработчик события на скролл страницы
window.addEventListener('scroll', animateNumbersIfVisible);

// Функция для анимации чисел
function animateValue(id, start, end, duration) {
    var obj = document.getElementById(id);
    var range = end - start;
    var minTimer = 50; // минимальное время в мс
    var stepTime = Math.abs(Math.floor(duration / range));

    // убедимся, что stepTime не меньше minTimer
    stepTime = Math.max(stepTime, minTimer);

    // получаем текущее время
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}

    // Получаем шарики
    var ball1 = document.querySelector('.ball1');
    var ball2 = document.querySelector('.ball2');
    var ball3 = document.querySelector('.ball3');
    var imgVr = document.querySelector('.imgVr');

    // Функция для движения шарика вверх
    function moveUp(ball) {
        ball.style.transition = 'transform 5s ease';
        ball.style.transform = 'translateY(-30px)';
    }

    // Функция для движения шарика вниз
    function moveDown(ball) {
        ball.style.transition = 'transform 5s ease';
        ball.style.transform = 'translateY(0)';
    }

    // Запускаем движение каждого кружка вверх и вниз с разными интервалами
    var interval1 = setInterval(function() {
        moveUp(ball1);
        setTimeout(function() {
            moveDown(ball1);
        }, 1000); // Запускаем движение вниз через 1 секунду после подъема
    }, 2000); // Повторяем анимацию каждые 2 секунды

    var interval2 = setInterval(function() {
        moveUp(ball2);
        setTimeout(function() {
            moveDown(ball2);
        }, 1500); // Запускаем движение вниз через 1.5 секунды после подъема
    }, 3000); // Повторяем анимацию каждые 3 секунды

    var interval3 = setInterval(function() {
        moveUp(ball3);
        setTimeout(function() {
            moveDown(ball3);
        }, 1200); // Запускаем движение вниз через 1.2 секунды после подъема
    }, 2500); // Повторяем анимацию каждые 2.5 секунды

    var interval4 = setInterval(function() {
        moveUp(imgVr);
        setTimeout(function() {
            moveDown(imgVr);
        }, 1500); // Запускаем движение вниз через 1.2 секунды после подъема
    }, 3000); // Повторяем анимацию каждые 2 секунды

    // Получаем кнопку
    var submitBtn = document.querySelector('.codepen-button');

    // Назначаем обработчик события на кнопку
    submitBtn.addEventListener('click', function() {
        // Получаем форму по id
        var feedbackForm = document.getElementById('feedbackForm');
        // Прокручиваем страницу к форме feedback
        feedbackForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});