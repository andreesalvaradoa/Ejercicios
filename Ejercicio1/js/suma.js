window.onload = function(){
	//Hacer evento clic en boton por medio de funcion onclick
	document.getElementById("btncalcular").onclick = function(){
		//Declaracion de Variables
		var n1, n2, result;

		//Captura de datos de input text dl html
		n1 = document.getElementById("n1").value;
		n2 = document.getElementById("n2").value;

		//Conversion de datos de string a enteros y suma
		result = parseInt(n1) + parseInt(n2);

		//Mostrar resultado en span
		document.getElementById("resultado").innerHTML = "La suma de"+n1+"+"+n2+"="+result;
	}

	//Quitar datos al SPAN al momento de cambiarel input text n1 o n2
	document.getElementById("n1").onchange = function(){
		document.getElementById("resultado").innerHTML = " ";
	}

	document.getElementById("n2").onchange = function(){
		document.getElementById("resultado").innerHTML = " ";
	}
}