function FormularioDatos(){
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var dni = document.getElementById('dni');
var direccion = document.getElementById('direccion');
document.getElementById('datos').innerHTML = "<ul><li>Nombre:" + nombre.value + "<br>"+"<li>Apellidos:" + apellido.value + "<br>"+"<li>DNI:"
+ dni.value + "<br>"+"<li>Dirección:" + direccion.value + "</ul><br>";}
