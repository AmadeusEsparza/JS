function iniciarSesion() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "maui@gmail.com") {
      if (password === "1234") {
          alert("Ingresando datos...");
          // Aquí puedes hacer la redirección usando AJAX o cambiar solo la parte necesaria de la página.
          // Por ejemplo:
          window.location.href = "index.html";
      } else {
          alert("Error de Contraseña");
      }
  } else {
      alert("Error de Usuario");
  }
}



