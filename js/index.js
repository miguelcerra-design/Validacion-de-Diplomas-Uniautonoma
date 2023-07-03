const modalMenu = document.getElementById("modalMenu");
const modalMenu2 = document.getElementById("modalMenu2");
const modal = document.getElementById("modal");
const iconList = document.getElementById("iconList");

modalMenu.addEventListener("click", () => {
    modal.classList.toggle("modal--open");
    iconList.classList.toggle("nav__img--open");
    
});


modalMenu2.addEventListener("click", () => {
    modal.classList.toggle("modal--open");
    
});