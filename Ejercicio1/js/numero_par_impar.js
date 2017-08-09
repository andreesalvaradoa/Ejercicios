window.onload = function(){
	//Hacer evento clic en boton por medio de funcion onclick
	document.getElementById("btncalcular").onclick = function(){
		//Declaracion de Variables
		var numero, result;

		//Captura de datos de input text dl html
		numero = document.getElementById("numero").value;

		//Conversion de datos de string a enteros y suma
		result = parseInt(numero);

		if (numero % 2) {result = "El numero digitado es Impar"
		}else{
			result = "El numero digitado es Par"
		}

		//Mostrar resultado en span
		document.getElementById("resultado").innerHTML = "" + result ;


	}

	//Quitar datos al SPAN al momento de cambiarel input text n1 o n2
	/*document.getElementById("n1").onchange = function(){
		document.getElementById("resultado").innerHTML = " ";
	}

	document.getElementById("n2").onchange = function(){
		document.getElementById("resultado").innerHTML = " ";
	}*/
}