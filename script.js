var Object = {
  name: "Maui", saldo:458,
  name: "Mondi", saldo: 200,
  name: "Mia", saldo: 70,
};


var fondo = 0.0;

function depositar() {
  var cantidad = document.getElementById("cantidad").value;
  var cantidad_numero = parseFloat(cantidad) //parseInt(cantidad)
  //fondo = fondo + cantidad
  
    fondo += cantidad_numero
    actualizarFondo();
    console.log("Estoy depositando...");
    console.log("Mis fondos actualmente son: " + fondo)
    
    var fondo_actual = document.getElementById("fondo_actual");
    fondo_actual.innerHTML = "Actualmente tienes: " + fondo
  
    formu.reset();
  
}


function retirar() {
  var cantidad = document.getElementById("cantidad").value;
  var cantidad_numero = parseFloat(cantidad) //parseInt(cantidad)
  // fondo = fondo - cantidad
  if (fondo - cantidad < 0 ){
  alert("No hay fondos suficientes...")

  } else {
  fondo -= cantidad_numero
  actualizarFondo();
  console.log("Estoy retirando...");
  console.log("Mis fondos actualmente son: " + fondo)
  
  var fondo_actual = document.getElementById("fondo_actual");
  fondo_actual.innerHTML = "Actualmente tienes: " + fondo
  

}
  formu.reset();
  
}

function actualizarFondo() {
  console.log("Mis fondos actualmente son: " + fondo);
  var fondo_actual = document.getElementById("fondo_actual");
  fondo_actual.innerHTML = "Actualmente tienes: " + fondo;
  // Almacenar el saldo en el almacenamiento local del navegador
  localStorage.setItem("fondo", fondo);
}


function transferirAhorro() {
  var cantidad_transferir = fondo;
  var fondo_disponible = parseFloat(localStorage.getItem("fondo"));
  if (fondo_disponible >= cantidad_transferir) {
      fondo_disponible -= cantidad_transferir;
      localStorage.setItem("fondo", fondo_disponible);
      // Redirigir a la página de ahorro
      window.location.href = "ahorro.html?saldo=" + cantidad_transferir;
  } else {
      alert("No tienes suficiente saldo para transferir al ahorro.");
  }
}


function inicio() {
document.getElementById("inicio")
window.location.href = inicio.html
console.log("si funciona");
}

function regresar() {
  document.getElementById("regresar")
  window.location.href = "inicio.html"
}

function ahorro(){
  document.getElementById("ahorro")
  window.location.href = "ahorro.html"
}




