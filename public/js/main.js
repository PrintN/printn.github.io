(function () {
  const defaultTheme = 'system'

  const themeToggleButtons = document.querySelectorAll(".theme-toggle");

  // Change the icons of the buttons based on previous settings or system theme
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      ((window.matchMedia("(prefers-color-scheme: dark)").matches && defaultTheme === "system") || defaultTheme === "dark"))
  ) {
    themeToggleButtons.forEach((el) => el.dataset.theme = "dark");
  } else {
    themeToggleButtons.forEach((el) => el.dataset.theme = "light");
  }

  // Add click event handler to the buttons
  themeToggleButtons.forEach((el) => {
    el.addEventListener("click", function () {
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          setDarkTheme();
          localStorage.setItem("color-theme", "dark");
        } else {
          setLightTheme();
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          setLightTheme();
          localStorage.setItem("color-theme", "light");
        } else {
          setDarkTheme();
          localStorage.setItem("color-theme", "dark");
        }
      }
      el.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    });
  });

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (defaultTheme === "system" && !("color-theme" in localStorage)) {
      e.matches ? setDarkTheme() : setLightTheme();
      themeToggleButtons.forEach((el) =>
        el.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    }
  });
})();

// Footer waves + heart color
function updateColors() {
    const colorTheme = localStorage.getItem('color-theme');
    const isDarkMode = colorTheme === 'dark';
    const waves = document.querySelectorAll('.wave');

    if (waves.length > 0) {
        if (isDarkMode) {
            waves[0].setAttribute('fill', 'rgba(50, 50, 50, 0.7)');
            waves[1].setAttribute('fill', 'rgba(50, 50, 50, 0.5)');
            waves[2].setAttribute('fill', 'rgba(50, 50, 50, 0.3)');
            waves[3].setAttribute('fill', '#171717');
        } else {
            waves[0].setAttribute('fill', 'rgba(243, 244, 246, 0.7)');
            waves[1].setAttribute('fill', 'rgba(243, 244, 246, 0.5)');
            waves[2].setAttribute('fill', 'rgba(243, 244, 246, 0.3)');
            waves[3].setAttribute('fill', '#e8e9eb');
        }
    }

    const heartEmoji = colorTheme === 'dark' ? '💚' : '💙';
    document.querySelector('.copyright-section p').innerHTML = `<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. Made with ${heartEmoji} by PrintN.</strong></p>`;
}

updateColors();
document.querySelector('.theme-toggle').addEventListener('click', () => {
    updateColors();
});

;
// Hamburger menu for mobile navigation

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.hamburger-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const sidebarContainer = document.querySelector('.sidebar-container');

  // Initialize the overlay
  const overlayClasses = ['hx-fixed', 'hx-inset-0', 'hx-z-10', 'hx-bg-black/80', 'dark:hx-bg-black/60'];
  overlay.classList.add('hx-bg-transparent');
  overlay.classList.remove("hx-hidden", ...overlayClasses);

  function toggleMenu() {
    // Toggle the hamburger menu
    menu.querySelector('svg').classList.toggle('open');

    // When the menu is open, we want to show the navigation sidebar
    sidebarContainer.classList.toggle('max-md:[transform:translate3d(0,-100%,0)]');
    sidebarContainer.classList.toggle('max-md:[transform:translate3d(0,0,0)]');

    // When the menu is open, we want to prevent the body from scrolling
    document.body.classList.toggle('hx-overflow-hidden');
    document.body.classList.toggle('md:hx-overflow-auto');
  }

  menu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();

    if (overlay.classList.contains('hx-bg-transparent')) {
      // Show the overlay
      overlay.classList.add(...overlayClasses);
      overlay.classList.remove('hx-bg-transparent');
    } else {
      // Hide the overlay
      overlay.classList.remove(...overlayClasses);
      overlay.classList.add('hx-bg-transparent');
    }
  });

  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();

    // Hide the overlay
    overlay.classList.remove(...overlayClasses);
    overlay.classList.add('hx-bg-transparent');
  });
});

;
// Copy button for code blocks

document.addEventListener('DOMContentLoaded', function () {
  const getCopyIcon = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    `;
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    return svg;
  }

  const getSuccessIcon = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    `;
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    return svg;
  }

  document.querySelectorAll('.hextra-code-copy-btn').forEach(function (button) {
    // Add copy and success icons
    button.querySelector('.copy-icon')?.appendChild(getCopyIcon());
    button.querySelector('.success-icon')?.appendChild(getSuccessIcon());

    // Add click event listener for copy button
    button.addEventListener('click', function (e) {
      e.preventDefault();
      // Get the code target
      const target = button.parentElement.previousElementSibling;
      let codeElement;
      if (target.tagName === 'CODE') {
        codeElement = target;
      } else {
        // Select the last code element in case line numbers are present
        const codeElements = target.querySelectorAll('code');
        codeElement = codeElements[codeElements.length - 1];
      }
      if (codeElement) {
        let code = codeElement.innerText;
        // Replace double newlines with single newlines in the innerText
        // as each line inside <span> has trailing newline '\n'
        if ("lang" in codeElement.dataset) {
          code = code.replace(/\n\n/g, '\n');
        }
        navigator.clipboard.writeText(code).then(function () {
          button.classList.add('copied');
          setTimeout(function () {
            button.classList.remove('copied');
          }, 1000);
        }).catch(function (err) {
          console.error('Failed to copy text: ', err);
        });
      } else {
        console.error('Target element not found');
      }
    });
  });
});

;
document.querySelectorAll('.hextra-tabs-toggle').forEach(function (button) {
  button.addEventListener('click', function (e) {
    // set parent tabs to unselected
    const tabs = Array.from(e.target.parentElement.querySelectorAll('.hextra-tabs-toggle'));
    tabs.map(tab => tab.dataset.state = '');

    // set current tab to selected
    e.target.dataset.state = 'selected';

    // set all panels to unselected
    const panelsContainer = e.target.parentElement.parentElement.nextElementSibling;
    Array.from(panelsContainer.children).forEach(function (panel) {
      panel.dataset.state = '';
    });

    const panelId = e.target.getAttribute('aria-controls');
    const panel = panelsContainer.querySelector(`#${panelId}`);
    panel.dataset.state = 'selected';
  });
});
;
(function () {
  const languageSwitchers = document.querySelectorAll('.language-switcher');
  languageSwitchers.forEach((switcher) => {
    switcher.addEventListener('click', (e) => {
      e.preventDefault();
      switcher.dataset.state = switcher.dataset.state === 'open' ? 'closed' : 'open';
      const optionsElement = switcher.nextElementSibling;
      optionsElement.classList.toggle('hx-hidden');

      // Calculate position of language options element
      const switcherRect = switcher.getBoundingClientRect();
      const translateY = switcherRect.top - window.innerHeight - 15;
      optionsElement.style.transform = `translate3d(${switcherRect.left}px, ${translateY}px, 0)`;
      optionsElement.style.minWidth = `${Math.max(switcherRect.width, 50)}px`;
    });
  });

  // Dismiss language switcher when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.closest('.language-switcher') === null) {
      languageSwitchers.forEach((switcher) => {
        switcher.dataset.state = 'closed';
        const optionsElement = switcher.nextElementSibling;
        optionsElement.classList.add('hx-hidden');
      });
    }
  });
})();

;
// Script for filetree shortcode collapsing/expanding folders used in the theme
// ======================================================================
document.addEventListener("DOMContentLoaded", function () {
  const folders = document.querySelectorAll(".hextra-filetree-folder");
  folders.forEach(function (folder) {
    folder.addEventListener("click", function () {
      Array.from(folder.children).forEach(function (el) {
        el.dataset.state = el.dataset.state === "open" ? "closed" : "open";
      });
      folder.nextElementSibling.dataset.state = folder.nextElementSibling.dataset.state === "open" ? "closed" : "open";
    });
  });
});

;
document.addEventListener("DOMContentLoaded", function () {
  scrollToActiveItem();
  enableCollapsibles();
});

function enableCollapsibles() {
  const buttons = document.querySelectorAll(".hextra-sidebar-collapsible-button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const list = button.parentElement.parentElement;
      if (list) {
        list.classList.toggle("open")
      }
    });
  });
}

function scrollToActiveItem() {
  const sidebarScrollbar = document.querySelector("aside.sidebar-container > .hextra-scrollbar");
  const activeItems = document.querySelectorAll(".sidebar-active-item");
  const visibleActiveItem = Array.from(activeItems).find(function (activeItem) {
    return activeItem.getBoundingClientRect().height > 0;
  });

  if (!visibleActiveItem) {
    return;
  }

  const yOffset = visibleActiveItem.clientHeight;
  const yDistance = visibleActiveItem.getBoundingClientRect().top - sidebarScrollbar.getBoundingClientRect().top;
  sidebarScrollbar.scrollTo({
    behavior: "instant",
    top: yDistance - yOffset
  });
}

;
// Back to top button

document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.querySelector("#backToTop");
  if (backToTop) {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > 300) {
        backToTop.classList.remove("hx-opacity-0");
      } else {
        backToTop.classList.add("hx-opacity-0");
      }
    });
  }
});

function scrollUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

;
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
