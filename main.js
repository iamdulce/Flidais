const navButton = document.querySelector(".nav__toggle");

navButton.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

const navItems = document.querySelectorAll(".nav__list a");

navItems.forEach((i) =>
  i.addEventListener("click", function () {
    document.body.classList.remove("nav-open");
  })
);

//Scroll reveal
window.sr = ScrollReveal();

sr.reveal(".go-up", {
  origin: "bottom",
  duration: "900",
  distance: "20rem",
  delay: 0,
});

sr.reveal(".go-left", {
  origin: "right",
  duration: "900",
  distance: "20rem",
  delay: 0,
});

sr.reveal(".go-right", {
  origin: "left",
  duration: "900",
  distance: "20rem",
  delay: 0,
});
