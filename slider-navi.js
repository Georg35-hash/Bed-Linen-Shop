const sideBarItems = document.querySelectorAll('.sidebar-item');


let currentButtonIndex = 0;

// Функция для обновления активной боковой кнопки
function updateSideBar(index) {
    if (index >= 0 && index < sideBarItems.length) {
        // Удаляем класс "active" у всех кнопок
        sideBarItems.forEach(item => item.classList.remove('active'));

        // Добавляем класс "active" для текущей кнопки
        sideBarItems[index].classList.add('active');

        // Обновляем текущий индекс
        currentButtonIndex = index;
    }
}

// Навешиваем обработчики кликов на каждую кнопку
sideBarItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateSideBar(index);
    });
});

// Обработчик нажатия клавиш
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        // Переход к следующей кнопке
        const nextIndex = (currentButtonIndex + 1) % sideBarItems.length;
        updateSideBar(nextIndex);
    } else if (event.key === 'ArrowUp') {
        // Переход к предыдущей кнопке
        const prevIndex = (currentButtonIndex - 1 + sideBarItems.length) % sideBarItems.length;
        updateSideBar(prevIndex);
    }
});

// Устанавливаем начальный активный элемент
updateSideBar(currentButtonIndex);





const inputs = document.getElementsByTagName('input'); 
const slides = Array.from(inputs).filter(input => input.type === 'radio' && input.name === 'slider');

let currentSlide = Array.from(slides).findIndex(slide => slide.checked);

// Function for update current slide
function updateSlide(index) {
    if (index >= 0 && index < slides.length) {
        slides[index].checked = true;
        currentSlide = index;
    }
}

// EventListener keydown
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        const nextSlide = (currentSlide + 1) % slides.length;
        updateSlide(nextSlide);
    } else if (event.key === 'ArrowLeft') {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(prevSlide);
    }
}); 












const sidebarItems = document.querySelectorAll('.sidebar-item');
const windows = document.querySelectorAll('.catalogue__slider-content');

sidebarItems.forEach(item => {
    
        window2.style.display = 'none';
        window3.style.display = 'none';
        window4.style.display = 'none';
        
    item.addEventListener('click', () => {
        const targetWindow = document.getElementById(item.getAttribute('data-window'));

        // Hide all windows
        windows.forEach(window => window.style.display = 'none');

        // Show selected window
        targetWindow.style.display = 'block';
    });
});




const windowsArrow = document.querySelectorAll('.catalogue__slider-content'); // Все окна
const navArrow = document.querySelector('.arrow-down'); // Кнопка стрелки

let currentIndex = 0; // Индекс текущего активного окна

// Функция для переключения окон
function switchWindow() {
    // Скрываем текущее окно
    windowsArrow[currentIndex].style.display = 'none';

    // Вычисляем следующий индекс
    currentIndex = (currentIndex + 1) % windowsArrow.length;

    // Показываем следующее окно
    windowsArrow[currentIndex].style.display = 'block';
}

// Добавляем обработчик клика на стрелку
navArrow.addEventListener('click', switchWindow);
