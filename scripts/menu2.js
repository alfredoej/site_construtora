let show = true;

const navBar = document.querySelector(".navbar"); 
const menuToggle = document.querySelector(".menu-toggle");


menuToggle.addEventListener ("click", () =>{
  // tira o scrool da tela
  document.body.style.overflow = show ? "hidden" : "initial";
  // acrescenta a classe on com true
  navBar.classList.toggle("on",show);
  show = !show;
});