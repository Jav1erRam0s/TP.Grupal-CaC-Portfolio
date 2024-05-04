// Resta el header al momento de posicionarse sobre la seccion.
function scrollToSection(sectionId) {
  const navbarHeight = document.querySelector(".navbar").offsetHeight; // Altura del navbar
  const section = document.getElementById(sectionId);
  const sectionPosition = section.offsetTop - navbarHeight; // Posición de la sección menos la altura del navbar
  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth",
  });
}

// Agregar un event listener para cada enlace del navbar
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const sectionId = this.getAttribute("href").substring(1); // Obtener el ID de la sección
    scrollToSection(sectionId); // Llamar a la función para desplazar a la sección
  });
});

/* ************************************************** */

// Cierra el navbar en aplicaciones mobiles
$(function () {
  var navMain = $(".navbar-collapse"); // avoid dependency on #id
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse("hide");
  });
});

/* ************************************************** */

// Permite redireccionar a la seccion "proyecto" al hacer click en los indicadores
// document.addEventListener("DOMContentLoaded", function () {
//   const indicators = document.querySelectorAll(
//     "#carouselExampleIndicators .carousel-indicators button"
//   );
//   indicators.forEach((indicator, index) => {
//     indicator.addEventListener("click", () => {
//       // Redirige a la sección correspondiente
//       scrollToSection("proyectos");
//       // window.location.href = `#proyectos`;
//     });
//   });
// });
