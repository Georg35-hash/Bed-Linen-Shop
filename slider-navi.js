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

function openBurgerMenu(){
    document.addEventListener("DOMContentLoaded", function () {
        const openButton = document.getElementById("openButton");
        const navMenu = document.getElementById("navMenu");
    
        openButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            openButton.classList.toggle("active");
        });
    
        document.addEventListener("click", function (event) {
            if (!navMenu.contains(event.target) && !openButton.contains(event.target)) {
                navMenu.classList.remove("active");
                openButton.classList.remove("active");
            }
        });
    });
}
openBurgerMenu()



//paralax
function paralax (){
    document.addEventListener("DOMContentLoaded", () => {
        const hero = document.querySelector(".hero__content"); // container
        const img = document.querySelector(".hero__img"); // my pillow
        const bg = document.querySelector(".hero__background"); // bg
    
        hero.addEventListener("mousemove", (e) => {
            const { width, height, left, top } = hero.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) / 20; // transitionX
            const y = (e.clientY - top - height / 2) / 20; // transitionY
    
            img.style.transform = `translate(${-x}px, ${-y}px)`;
            bg.style.transform = `translate(${x}px, ${y}px)`;
        });
    
        hero.addEventListener("mouseleave", () => {
            img.style.transform = "translate(0, 0)";
            bg.style.transform = "translate(0, 0)";
        });
    });
    
}
paralax()

function scrollAnimation(){
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(".animate-on-scroll");
    
        function checkScroll() {
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9) {
                    element.classList.add("visible");
                }
            });
        }
    
        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Чтобы сработало сразу при загрузке, если блок уже в зоне видимости
    });
    
}
scrollAnimation()
