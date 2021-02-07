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
