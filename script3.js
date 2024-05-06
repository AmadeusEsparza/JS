var params = new URLSearchParams(window.location.search);
var saldo_transferido = parseFloat(params.get('saldo'));

        // Mostrar el saldo transferido en el texto
document.getElementById("ahorro_actual").innerHTML = "Actualmente tienes: " + saldo_transferido.toFixed(2);
  


function  cajero() {
    document.getElementById("cajero")
    window.location.href = "index.html"
  }