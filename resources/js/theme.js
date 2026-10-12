(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const themeColors = document.querySelectorAll('meta[name="theme-color"]');

  try {
    const savedTheme = localStorage.getItem("color-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      root.dataset.theme = savedTheme;
    }
  } catch {
    // The switch still works when browser storage is unavailable.
  }

  const isDark = () => root.dataset.theme
    ? root.dataset.theme === "dark"
    : systemTheme.matches;

  const updateThemeColor = () => {
    themeColors.forEach((meta) => {
      meta.content = isDark() ? "#1f1e1d" : "#f0eee6";
    });
  };

  updateThemeColor();

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".theme-toggle");

    const updateSwitch = () => {
      toggle.setAttribute("aria-checked", String(isDark()));
      updateThemeColor();
    };

    updateSwitch();
    toggle.hidden = false;

    toggle.addEventListener("click", () => {
      root.dataset.theme = isDark() ? "light" : "dark";
      updateSwitch();

      try {
        localStorage.setItem("color-theme", root.dataset.theme);
      } catch {
        // Keep the chosen theme for this visit if it cannot be saved.
      }
    });

    systemTheme.addEventListener("change", updateSwitch);
  });
})();
