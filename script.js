const header = document.querySelector("header");
const hamburgerbtn = document.querySelector("#hamburger-btn");
const closebtn = document.querySelector("#close-btn");

hamburgerbtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");

});
closebtn.addEventListener("click" , () => {
    hamburgerbtn.click();
})

