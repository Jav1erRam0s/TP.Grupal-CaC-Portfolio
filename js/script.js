// FOOTER

var today = new Date();
document.getElementById("anio-footer").innerHTML = today.getFullYear();


// VALIDATION FORM

function validateForm(event) {
    event.preventDefault();
  
    //inputs
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let servicios = document.getElementById("servicios").value;
  
    if (nombre.trim() === "") {
      alert("por favor ingresa un nombre");
      return false; 
    }
  
    if (email.trim() === "") {
      alert("por favor ingresa un email");
      return false;
    }

    if (servicios.trim() === "") {
      alert("por favor selecciona un servicio de interes");
      return false; 
    }

    if (mensaje.trim() === "") {
      alert("por favor ingresa un mensaje");
      return false; 
    }
  
    if (!isValidEmail(email)) {
      alert("Por favor ingresa un MAIL VALIDO");
      return true;
    }
  
    function isValidEmail(email) {
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      return emailRegex.test(email);
    }
  
    alert("Formulario enviado correctamente");
    return true;
  }
  
  document.getElementById("contactForm").addEventListener("submit", validateForm);