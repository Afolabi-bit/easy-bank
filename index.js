var menu = document.querySelector("#menu");
var body = document.querySelector("body");

function navigation() {
  body.classList.toggle("nav");
  console.log("nav");
}

menu.addEventListener("click", navigation);
