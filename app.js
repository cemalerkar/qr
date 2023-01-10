var menu = document.getElementById("opener");
var burger = document.getElementById("menutext");
function OpenMenu() {
  if (menu.style.display == "flex") {
    CloseMenu();
  } else if (menu.style.display == "none") {
    menu.style.display = "flex";
  }
}
function CloseMenu() {
  menu.style.display = "none";
  burger.classList.toggle("opened");
  burger.setAttribute("aria-expanded", burger.classList.contains("opened"));
}
function BurgerOpen() {
  burger.classList.toggle("opened");
  burger.setAttribute("aria-expanded", burger.classList.contains("opened"));
  if (burger.classList.contains("opened")) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
