/////////////////////////////////////////////////////
///////////////////////// Button ripple effect
////////////////////////////////////////////////////

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xInside = x - btnLeft;
    const yInside = y - btnTop;

    const span = document.createElement("span");
    span.classList.add("circle");
    span.style.top = yInside + "px";
    span.style.left = xInside + "px";

    this.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 500);
  });
});

////////////////////////////////////////////////////////////////
//////////////////////////// Navigation
////////////////////////////////////////////////////////////////
const nav = document.querySelector(".nav");
const nav__hamburger = document.querySelector(".nav__hamburger");
const overlay = document.querySelector(".overlay");
nav__hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});
document.addEventListener("click", () => {
  overlay.classList.remove("active");
});
