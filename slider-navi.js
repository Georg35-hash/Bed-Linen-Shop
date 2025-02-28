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

    const win2 = document.getElementById("window2");
    const win3 = document.getElementById("window3");
    const win4 = document.getElementById("window4");

    if (win2) win2.style.display = 'none';
    if (win3) win3.style.display = 'none';
    if (win4) win4.style.display = 'none';

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetWindow = document.getElementById(item.getAttribute('data-window'));
            // Hide all windows
            windows.forEach(window => window.style.display = 'none');
            // Show selected window
            if (targetWindow) {
                targetWindow.style.display = 'block';
            }
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
    if (navArrow) {
        navArrow.addEventListener('click', switchWindow);
    }
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
            currentSlide = (currentSlide + 1) % slides.length;  // Increment slide index
            showSlide(currentSlide);  // Show updated slide
        });

        prevButton.addEventListener('click', () => {

            currentSlide = (currentSlide - 1 + slides.length) % slides.length;  // Decrement slide index
            showSlide(currentSlide);  // Show updated slide
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {

                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            } else if (e.key === 'ArrowLeft') {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            }
        });
    });
}
sidebarNaviBlog();

function openBurgerMenu() {
    document.addEventListener("DOMContentLoaded", function () {
        const openButton = document.getElementById("openButton");
        const navMenu = document.getElementById("navMenu");

        openButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            openButton.classList.toggle("active");

            if (!navMenu.classList.contains("active")) {
                navMenu.scrollTop = 0; // Прокручиваем наверх при закрытии
            }
        });

        document.addEventListener("click", function (event) {
            if (!navMenu.contains(event.target) && !openButton.contains(event.target)) {
                navMenu.classList.remove("active");
                openButton.classList.remove("active");
                navMenu.scrollTop = 0; // Прокручиваем наверх при закрытии
            }
        });
    });
}
openBurgerMenu();




//paralax
function paralax() {
    document.addEventListener("DOMContentLoaded", () => {
        const hero = document.querySelector(".hero__content"); // container
        const img = document.querySelector(".hero__img"); // my pillow
        const bg = document.querySelector(".hero__background"); // bg

        hero.addEventListener("mousemove", (e) => {
            const { width, height, left, top } = hero.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) / 40; // transitionX
            const y = (e.clientY - top - height / 2) / 40; // transitionY

            img.style.transform = `translate(${-x}px, ${-y}px)`;
            bg.style.transform = `translate(${x}px, ${y}px)`;
        });

        hero.addEventListener("mouseleave", () => {
            img.style.transform = "translate(0, 0)";
            bg.style.transform = "translate(0, 0)";
        });
    });

}
paralax();



document.addEventListener("DOMContentLoaded", function () {
    // Get all element include arrow
    const sidebarItems = document.querySelectorAll(
        ".catalogue__slider-sidebar-item .sidebar-item:not(.arrow-down)"
    );
    const arrow = document.getElementById("arrow");

    // DEFAULT .active
    if (sidebarItems.length > 0) {
        sidebarItems[0].classList.add("active");
    }

    // For click on side-bars
    sidebarItems.forEach(function (item) {
        item.addEventListener("click", function () {
            sidebarItems.forEach(el => el.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // For arrow
    if (arrow) {
        arrow.addEventListener("click", function () {
            let currentActiveIndex = -1;
            // Init index current slide
            sidebarItems.forEach((item, index) => {
                if (item.classList.contains("active")) {
                    currentActiveIndex = index;
                }
            });
            sidebarItems[currentActiveIndex].classList.remove("active");
            // Index next elem (loop)
            let nextIndex = currentActiveIndex + 1;
            if (nextIndex >= sidebarItems.length) {
                nextIndex = 0;
            }
            sidebarItems[nextIndex].classList.add("active");
        });
    }
})

function initModal() {
    const modal = document.querySelector(".modal");
    const modalText = document.querySelector(".modal-text");
    const closeBtn = document.querySelector(".close-btn");

    document.querySelectorAll(".sleepy-shop__link, .blog-slider__link").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const content = btn.getAttribute("data-content");
            if (modal && modalText) {
                modalText.innerHTML = content;
                modal.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            closeModal();
        });
    }

    window.addEventListener("click", (e) => {
        if (modal && e.target === modal) {
            closeModal();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (modal.classList.contains("active")) {
            if (e.key === "Escape") {
                closeModal();
            } else {
                e.preventDefault();
            }
        }
    });

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

initModal();


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
           
            if (entry.isIntersecting) {
                entry.target.classList.add("start-animation");
            } else {
                entry.target.classList.remove("start-animation");
            }
        });
    }, {
        threshold: 0.5 
    });

    
    elements.forEach(el => observer.observe(el));
});





