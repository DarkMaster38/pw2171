//Variable global
var operador ="";

function borrar(){
	operador = "";
	document.calculadora.operando1.value = 0;
	document.calculadora.operando2.value = 0;
	document.calculadora.resultado.value = 0;
}

function igual(){
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	document.calculadora.resultado.value=eval(valor1+operador+valor2);
}

function operadores(ope){
	operador = ope;
}
function numeros(num){
	if(operador == ""){ //Escribir en el oprando1
		var ValorInicial = document.calculadora.operando1.value;
		if(ValorInicial == "0"){ //Elimino el cero
			document.calculadora.operando1.value = "";
		}
		//Concatena los valores de num con los de operando1
		// document.calculadora.operando1.value = document.calculadora.operando1.value + num;  (otro forma de hacerlo)
		document.calculadora.operando1.value = 
		document.calculadora.operando1.value + num;
	}else{ //Escribo en el operando2
		var ValorInicial = document.calculadora.operando2.value;
		if(ValorInicial == "0"){ //Elimino el cero
			document.calculadora.operando2.value = "";
		}
		//Concatena los valores de num con los de operando2
		// document.calculadora.operando2.value = document.calculadora.operando2.value + num;  (otro forma de hacerlo)
		document.calculadora.operando2.value = 
		document.calculadora.operando2.value + num;
	}

}