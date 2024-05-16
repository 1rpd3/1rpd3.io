document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, загрузилась ли библиотека Swiper
    if (typeof Swiper === 'undefined') {
        console.error('Ошибка: Библиотека Swiper не загружена.');
        return;
    }

    // Инициализируем первый слайдер
    var swiper = new Swiper(".mySwiper1", {
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

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination2",
        },
        mousewheel: true,
        keyboard: true,
        initialSlide: 1.5,
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
     
    // Получаем кнопку
    var submitBtn = document.querySelector('.head-button');

    // Назначаем обработчик события на кнопку
    submitBtn.addEventListener('click', function() {
        // Получаем форму по id
        var feedbackForm = document.getElementById('feedbackForm');
        // Прокручиваем страницу к форме feedback
        feedbackForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});