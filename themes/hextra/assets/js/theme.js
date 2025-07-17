if (!("color-theme" in localStorage)) {
  setDarkTheme();
  localStorage.setItem("color-theme", "dark");
}

(function () {
  const defaultTheme = '{{ site.Params.theme.default | default `system`}}'

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
