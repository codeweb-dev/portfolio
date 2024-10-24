document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate-fade-in");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust based on when you want the animation to trigger
  };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-active");
        entry.target.classList.remove("animate-fade-out");
      } else {
        entry.target.classList.remove("animate-fade-in-active");
        entry.target.classList.add("animate-fade-out");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => {
    section.classList.add("animate-fade-out");
    observer.observe(section);
  });
});