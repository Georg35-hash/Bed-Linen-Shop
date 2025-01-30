function sliderKeyNaviCatalogue() {
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
            // Transition to next icon
            const nextSlide = (currentSlide + 1) % slides.length;
            updateSlide(nextSlide);
        } else if (event.key === 'ArrowLeft') {
            // Transition to prev icon
            const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlide(prevSlide);
        }
    });
}
sliderKeyNaviCatalogue();

function sidebarNaviCatalogue() {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const windows = document.querySelectorAll('.catalogue__slider-content');
    sidebarItems.forEach(item => {
        //crutch solution
        // {
        window2.style.display = 'none';
        window3.style.display = 'none';
        window4.style.display = 'none';
        // }
        item.addEventListener('click', () => {
            const targetWindow = document.getElementById(item.getAttribute('data-window'));
            // Hide all windows
            windows.forEach(window => window.style.display = 'none');
            // Show selected window
            targetWindow.style.display = 'block';
        });
    });
    const windowsArrow = document.querySelectorAll('.catalogue__slider-content');
    const navArrow = document.querySelector('.arrow-down'); // Arrow Key
    let currentIndex = 0;
    function switchWindow() {
        // Hide current window
        windowsArrow[currentIndex].style.display = 'none';
        // Calculate current index of 
        currentIndex = (currentIndex + 1) % windowsArrow.length;
        // Show next window
        windowsArrow[currentIndex].style.display = 'block';
    }
    // Add EventListener on arrow
    navArrow.addEventListener('click', switchWindow);
}
sidebarNaviCatalogue();

function sidebarNaviBlog() {

    document.addEventListener('DOMContentLoaded', () => {
        const prevButton = document.getElementById('prev-slide');
        const nextButton = document.getElementById('next-slide');
        const slides = document.querySelectorAll('.blog-slider__content');
        const points = document.querySelectorAll('.blog-slider__points .blog-slider__item'); // Select points inside the container
        let currentSlide = 0;

        function showSlide(index) {

            slides.forEach(slide => {
                slide.style.display = 'none';  // Hide all slides
            });
            slides[index].style.display = 'flex';  // Show the selected slide

            points.forEach((point, i) => {
                if (i === index) {
                    point.setAttribute('src', '../src/assets/blog/point with fill.svg');  // Set filled circle for current slide
                } else {
                    point.setAttribute('src', '../src/assets/blog/without fill.svg');  // Set empty circle for other slides
                }
            });
        }

        showSlide(currentSlide);

        nextButton.addEventListener('click', () => {
            console.log("Next Button Clicked");
            currentSlide = (currentSlide + 1) % slides.length;  // Increment slide index
            showSlide(currentSlide);  // Show updated slide
        });

        prevButton.addEventListener('click', () => {
            console.log("Prev Button Clicked");
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;  // Decrement slide index
            showSlide(currentSlide);  // Show updated slide
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                console.log("ArrowRight Pressed");
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            } else if (e.key === 'ArrowLeft') {
                console.log("ArrowLeft Pressed");
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            }
        });
    });
}
sidebarNaviBlog();

const navMenu = document.querySelector('#navMenu');
const burgerMenu = document.querySelector('#burger-menu');

const toggleMenu = () => {
    navMenu.classList.toggle('nav-menu--open');
};

// Sicherstellen, dass das Skript nach dem Laden des DOMs ausgeführt wird
document.addEventListener("DOMContentLoaded", () => {
    burgerMenu.addEventListener("click", toggleMenu);
});

