let show = true;

const navMenu = document.querySelector(".nav-menu"); 
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener ("click", () =>{
  // tira o scrool da tela
  document.body.style.overflow = show ? "hidden" : "initial";
  // acrescenta a classe on com true
  navMenu.classList.toggle("on",show);
  show = !show;
});