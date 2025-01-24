
function sliderKeyNavi() {
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

sliderKeyNavi();








function sidebarNavi() {
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
sidebarNavi();
