//Agrega al código (un enlace) al main.js
const rq = require('electron–require');
const main = rq.remote('./main.js');
var botonesNumero = ["btn00", "btn01", "btn02", "btn03", "btn04", "btn05", "btn06", "btn07", "btn08", "btn09"];
var botonesOperdor = ["btnSumar", "btnRestar", "btnMultiplicar", "btnDividir"];

function numeros(){
	alert(this.id);
	alert(this.value);
}
function operadores(){

}
function igual(){

}
function borrar(){

}


//Asignación de eventos a los botones de número
for(var i=0;i botonesNumero.length;i++){
	document.getElementByID(botonesNumero[i]).addEventListener('click',numeros)
}
//Asignación de eventos a los botones de número
for(var i=0;i botonesOperador.length;i++){
	document.getElementByID(botonesOperador[i]).addEventListener('click',operadores)
}
//Evento click del boton igual
document.getElementByID("btnIgual").addEventListener('click',igual);
//Evento click del boton igual
document.getElementByID("btnCE").addEventListener('click',borrar);