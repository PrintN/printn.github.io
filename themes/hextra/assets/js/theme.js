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
    document.querySelector('.copyright-section p').innerHTML = `<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. Made with ${heartEmoji} by PrintN.</strong></p>`;
}

updateColors();
document.querySelector('.theme-toggle').addEventListener('click', () => {
    updateColors();
});
