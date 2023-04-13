// required because parcel cannot build inline js tags
import flamethrower from "flamethrower-router";

const router = flamethrower({
  prefetch: "visible",
  log: false,
  pageTransitions: false,
});

// loading bar
window.addEventListener("flamethrower:router:fetch-progress", ({ detail }) => {
  const progressBar = document.getElementById("load");
  progressBar.style.width = detail.progress + "%";
});

const burgers = function () {
  var burger = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");
  console.log(burger);
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
};

burgers();
window.addEventListener("flamethrower:router:end", () => {
  burgers();
});
