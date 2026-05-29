```javascript
(function () {
  const toggle = document.getElementById("theme-toggle");

  function setTheme(theme) {
    if (theme !== "dark" && theme !== "light") {
      theme = "dark";
    }

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme);
  } else {
    setTheme("dark");
  }

  if (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();

      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "dark";

      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      setTheme(nextTheme);
    });
  }
})();
```
