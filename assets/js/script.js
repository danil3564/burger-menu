/* Мобильное меню */
// Добавление класса при нажатии на бар для появления самого меню 
let menuBar = document.querySelector(".header-menu");
let menuBurger = document.querySelector(".header-burger");
menuBurger.onclick = () => {
  menuBar.classList.toggle("mobile-menu-active");
  document.querySelector('.responsive-menu').classList.toggle("mobile-menu-active");
  if (menuBar.classList.contains("mobile-menu-active")) {
    menuBar.classList.remove("animation-reverse");
  } else {
    menuBar.classList.add("animation-reverse");
  }
};
// убрать меню при нажатии на ссылку
let liMobileMenu = document.querySelectorAll('.header-menu li a');
liMobileMenu.forEach(function(item) {
  item.onclick = () => {
  	if (menuBar.classList.contains("mobile-menu-active")) {
      menuBar.classList.remove("mobile-menu-active");
    }
  }
});
// кнопка открытия подменю
if (document.querySelector('.child-active')) {
  openSubMenu();
}

function openSubMenu() {
  document.querySelectorAll('.child-active').forEach(item => {

    item.querySelector('.open-submenu-btn').onclick = () => {
      item.classList.toggle('submenu-opened');
    }
  });
}