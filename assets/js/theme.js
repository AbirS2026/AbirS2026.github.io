document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  function getStoredTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      // Theme switching should still work when storage is unavailable.
    }
  }

  function applyTheme(theme) {
    const validTheme = theme === "light" ? "light" : "dark";

    root.setAttribute("data-theme", validTheme);
    storeTheme(validTheme);

    if (toggle) {
      const switchingTo = validTheme === "light" ? "dark" : "light";

      toggle.setAttribute(
        "aria-label",
        `Switch to ${switchingTo} theme`
      );

      toggle.setAttribute(
        "title",
        `Switch to ${switchingTo} theme`
      );
    }
  }

  const savedTheme = getStoredTheme();

  const initialTheme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";

  applyTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      const currentTheme =
        root.getAttribute("data-theme") === "light"
          ? "light"
          : "dark";

      applyTheme(currentTheme === "light" ? "dark" : "light");
    });
  }
});
