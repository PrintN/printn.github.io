const texts = [
    "Hobby Software Developer",
    "CTF Player",
    "Cyber Security Enthusiast",
    "Open Source Contributor",
    "Privacy Advocate"
];

let currentIndex = 0;
const rotatingText = document.getElementById("rotating-text");

function rotateText() {
    rotatingText.style.opacity = 0;
    rotatingText.style.transform = "translateY(-10px)";

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        rotatingText.textContent = texts[currentIndex];
        
        rotatingText.style.transform = "translateY(10px)";
        rotatingText.style.opacity = 0;
        
        void rotatingText.offsetWidth;
        
        rotatingText.style.opacity = 1;
        rotatingText.style.transform = "translateY(0)";
    }, 500);
}

rotatingText.textContent = texts[currentIndex];
rotatingText.style.opacity = 1;
setInterval(rotateText, 3000);

// Learn more
const aboutSectionId = document.getElementById('about');
function learnMore() {    
  if (aboutSectionId) {
    aboutSectionId.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      },
    history.pushState(null, null, `#about`));
  }
}

// Navigation
const dots = document.querySelectorAll('.nav-dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const target = document.getElementById(dot.dataset.target);
        
        if (dot.dataset.target === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        
        history.pushState(null, null, `#${dot.dataset.target}`);
    });
});

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    
    document.querySelectorAll('section').forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            dots.forEach(d => d.classList.remove('active'));
            dots[i].classList.add('active');
        }
    });
});

// Homepage scrolling
let currentSectionIndex = 0;
const sections = document.querySelectorAll('section');
let isDragging = false;
let mouseButtonPressed = false;
let startY = 0;
let startTime = 0;
let momentum = 0;
let dragDistance = 0;
const DRAG_THRESHOLD = 60;
const magnetThreshold = 0.2;
const animationDuration = 400;

if (window.location.pathname === '/' && window.innerHeight >= 825) {
    document.querySelector('html').style.overflow = "hidden";
    window.addEventListener('resize', () => {
        if (window.innerHeight >= 825) {
            document.querySelector('html').style.overflow = "hidden";
        } else {
            document.querySelector('html').style.overflow = "";
        }
    });

    function getSectionIndexFromScroll() {
        const scrollY = window.scrollY;
        const viewportMiddle = scrollY + (window.innerHeight / 2);
        
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + rect.height;
            
            if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
                return i;
            }
        }
        return 0;
    }

    function scrollToSection(index, behavior = 'smooth') {
        if (index === sections.length - 1) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            history.pushState(null, null, `#${sections[index].id}`);
            currentSectionIndex = index;
        } else if (index >= 1) {
            currentSectionIndex = index;
            sections[index].scrollIntoView({
                behavior: behavior,
                block: 'start'
            });
            history.pushState(null, null, `#${sections[index].id}`);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.pushState(null, null, `#${sections[index].id}`);
            currentSectionIndex = index;
        }
    }

    function snapToNearestSection() {
        const scrollY = window.scrollY;
        const section = sections[currentSectionIndex];
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const relativePosition = (scrollY - sectionTop) / window.innerHeight;

        if (relativePosition < -magnetThreshold && currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        } else if (relativePosition > magnetThreshold && currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        } else {
            scrollToSection(currentSectionIndex);
        }
    }

    window.addEventListener('wheel', function(event) {
        event.preventDefault();
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === "ArrowDown" && currentSectionIndex < sections.length - 1) {
            event.preventDefault();
            scrollToSection(currentSectionIndex + 1);
        } else if (event.key === "ArrowUp" && currentSectionIndex > 0) {
            event.preventDefault();
            scrollToSection(currentSectionIndex - 1);
        }
    });


    const navHome = document.querySelector('.printn-container');
    navHome.addEventListener('click', (event) => {
        isDragging = false;
    });

    window.addEventListener('mousedown', (event) => {
        if (event.button !== 0) return;
        mouseButtonPressed = true;
        isDragging = false;
        startY = event.clientY;
        startTime = Date.now();
        dragDistance = 0;
    });

    window.addEventListener('mousemove', (event) => {
        if (startY === null || !mouseButtonPressed) return;
                
        const currentY = event.clientY;
        const deltaY = Math.abs(currentY - startY);
        dragDistance += deltaY;
        
        if (!isDragging && dragDistance > DRAG_THRESHOLD) {
            isDragging = true;
        }
        
        if (isDragging) {
            window.scrollBy(0, startY - currentY);
            momentum = (currentY - startY) / (Date.now() - startTime);
            startY = currentY;
            startTime = Date.now();
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            if (Math.abs(momentum) > 1) {
                const direction = Math.sign(momentum);
                if (direction < 0 && currentSectionIndex < sections.length - 1) {
                    scrollToSection(currentSectionIndex + 1);
                } else if (direction > 0 && currentSectionIndex > 0) {
                    scrollToSection(currentSectionIndex - 1);
                }
            } else {
                snapToNearestSection();
            }
        }
        isDragging = false;
        mouseButtonPressed = false;
        startY = null;
    });

    window.addEventListener('mouseleave', () => {
        if (isDragging) {
            snapToNearestSection();
        }
        isDragging = false;
        mouseButtonPressed = false;
        startY = null;
    });

    window.addEventListener('touchstart', (event) => {
        isDragging = false;
        startY = event.touches[0].clientY;
        startTime = Date.now();
        dragDistance = 0;
    });

    window.addEventListener('touchmove', (event) => {
        if (startY === null) return;
        const currentY = event.touches[0].clientY;
        const deltaY = Math.abs(currentY - startY);
        dragDistance += deltaY;
        
        if (!isDragging && dragDistance > DRAG_THRESHOLD) {
            isDragging = true;
        }
        
        if (isDragging) {
            event.preventDefault();
            window.scrollBy(0, startY - currentY);
            momentum = (currentY - startY) / (Date.now() - startTime);
            startY = currentY;
            startTime = Date.now();
        }
    });

    window.addEventListener('touchend', () => {
        if (isDragging) {
            if (Math.abs(momentum) > 0.5) {
                const direction = Math.sign(momentum);
                if (direction < 0 && currentSectionIndex < sections.length - 1) {
                    scrollToSection(currentSectionIndex + 1);
                } else if (direction > 0 && currentSectionIndex > 0) {
                    scrollToSection(currentSectionIndex - 1);
                }
            } else {
                snapToNearestSection();
            }
        }
        isDragging = false;
        startY = null;
    });

    window.addEventListener('DOMContentLoaded', () => {
        currentSectionIndex = getSectionIndexFromScroll();
    });

    window.addEventListener('resize', () => {
        scrollToSection(currentSectionIndex, 'auto');
    });
}

// Portfolio carousel scrolling
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.portfolio-carousel .slide');
    const indicators = document.querySelectorAll('.portfolio-carousel .indicator');
    const prevButton = document.querySelector('.portfolio-carousel .prev');
    const nextButton = document.querySelector('.portfolio-carousel .next');
    const slidesContainer = document.querySelector('.portfolio-carousel .slides');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let startX = 0;
    let isDragging = false;

    function updateCarousel() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextButton.click();
        if (e.key === 'ArrowLeft') prevButton.click();
    });

    let interval = setInterval(() => nextButton.click(), 8000);
    
    slidesContainer.addEventListener('mouseenter', () => clearInterval(interval));
    slidesContainer.addEventListener('mouseleave', () => {
        interval = setInterval(() => nextButton.click(), 8000);
    });

    slidesContainer.addEventListener('mousedown', (e) => {
        startX = e.pageX - slidesContainer.offsetLeft;
        isDragging = true;
    });

    slidesContainer.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    slidesContainer.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        const endX = e.pageX - slidesContainer.offsetLeft;
        handleDrag(endX);
        isDragging = false;
    });

    slidesContainer.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const endX = e.pageX - slidesContainer.offsetLeft;
        const diffX = startX - endX;
        slidesContainer.style.transform = `translateX(${-currentIndex * 100 - (diffX / slidesContainer.clientWidth) * 100}%)`;
    });

    function handleDrag(endX) {
        const diffX = startX - endX;
        if (diffX > 50) {
            nextButton.click();
        } else if (diffX < -50) {
            prevButton.click();
        }
        updateCarousel();
    }

    slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    slidesContainer.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const endX = e.changedTouches[0].clientX;
        handleDrag(endX);
        isDragging = false;
    });

    slidesContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const endX = e.touches[0].clientX;
        const diffX = startX - endX;
        slidesContainer.style.transform = `translateX(${-currentIndex * 100 - (diffX / slidesContainer.clientWidth) * 100}%)`;
    });
});
