export const scrollToSection = (elementRef, margin = 0) => {
  window.scrollTo({
    top: elementRef.current.offsetTop - margin,
    behavior: "smooth",
  });
};