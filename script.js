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
    console.log("applyTheme called with mode:", mode);
    const isLight = mode === "light";
    console.log("isLight:", isLight);
    document.body.classList.toggle("theme-light", isLight);
    console.log("After toggle, body classes:", document.body.className);
    if (themeLabel) {
      themeLabel.textContent = isLight ? "Light" : "Dark";
      console.log("Theme label updated to:", themeLabel.textContent);
    }
    if (themeIcon) {
      themeIcon.textContent = isLight ? "○" : "●";
      console.log("Theme icon updated to:", themeIcon.textContent);
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
      console.log("Theme toggle clicked");
      const isCurrentlyLight = document.body.classList.contains("theme-light");
      console.log("Currently light:", isCurrentlyLight);
      const newMode = isCurrentlyLight ? "dark" : "light";
      console.log("New mode:", newMode);
      window.localStorage.setItem("theme", newMode);
      applyTheme(newMode);
      console.log("Theme applied, body classes:", document.body.className);
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
