const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

  menu.classList.toggle("hidden");

  if(menu.classList.contains("hidden")) {

    menuBtn.innerText = "Ver Cardápio";

  } else {

    menuBtn.innerText = "Fechar Cardápio";

    menu.scrollIntoView({
      behavior: "smooth"
    });

  }

});
