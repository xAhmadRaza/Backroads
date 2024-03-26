// ********** set date ************
// select span
const date = (document.getElementById("copyright__date").innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const navbarEl = document.querySelector(".navbar");
// add event listener
navBtn.addEventListener("click", () => {
  navbarEl.classList.toggle("nav__open");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll__link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    navbarEl.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});
