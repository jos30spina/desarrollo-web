export function menu(btonMenu, barraLateral) {
  document.addEventListener("click", (e) => {
    if (e.target.matches("button *")) {
      console.log("selecionaste el boton");
    }
    if (e.target.matches("button"))
      if (e.target.matches("section")) {
        console.log("diste click en una seccion");
      }
  });
  document.querySelector(".menu-lateral").classList.toggle("abierto");
  document.querySelector(".btn-contenedor").classList.toggle;
  ("is-activer");
}
