if (!("color-theme" in localStorage)) {
  setDarkTheme();
  localStorage.setItem("color-theme", "dark");
}

(function () {
  const defaultTheme = 'dark'

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
    document.querySelector('.copyright-section p').innerHTML = `Made with ${heartEmoji} by PrintN.</strong> <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0<svg class="hx-w-5 hx-h-5" style="display: inline; margin: 0 0 0.35rem 0.4rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg></a>`;
}

updateColors();
document.querySelector('.theme-toggle').addEventListener('click', () => {
    updateColors();
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

if (rotatingText) {
    rotatingText.textContent = texts[currentIndex];
    rotatingText.style.opacity = 1;
    setInterval(rotateText, 3000);
}

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

// Homepage scrolling
let currentSectionIndex = 0;
const sections = document.querySelectorAll('section');
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

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
    }

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

    function handleDrag(endX) {
        const diffX = startX - endX;
        if (diffX > 50) {
            nextButton.click();
        } else if (diffX < -50) {
            prevButton.click();
        }
        updateCarousel();
    }

    if (slidesContainer) {
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
    }
});
;
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