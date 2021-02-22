const hamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const mobile = document.querySelectorAll(".has-fade");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  console.log("click");

  if (header.classList.contains("open")) {
    header.classList.remove("open");
    mobile.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    header.classList.add("open");
    mobile.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
