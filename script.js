document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav a");
  const yearSpan = document.getElementById("year");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeLabel = document.querySelector(".theme-label");
  const themeIcon = document.querySelector(".theme-icon");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const applyTheme = (mode) => {
    const isLight = mode === "light";
    document.body.classList.toggle("theme-light", isLight);
    if (themeLabel) {
      themeLabel.textContent = isLight ? "Light" : "Dark";
    }
    if (themeIcon) {
      themeIcon.textContent = isLight ? "○" : "●";
    }
  };

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);
  } else {
    applyTheme("dark");
  }

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isCurrentlyLight = document.body.classList.contains("theme-light");
      const newMode = isCurrentlyLight ? "dark" : "light";
      window.localStorage.setItem("theme", newMode);
      applyTheme(newMode);
    });
  }
  

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.body.classList.remove("nav-open");
    });
  });