window.onload = function(){
	//Hacer evento clic en boton por medio de funcion onclick
	document.getElementById("btncalcular").onclick = function(){
		//Declaracion de Variables
		var n1, result;

		//Captura de datos de input text dl html
		n1 = document.getElementById("n1").value;

		//Conversion de datos de string a enteros y suma
	 	n1 = parseInt(n1);	

	 	result = (n1)*(1.8) + 32;

		//Mostrar el resultado si mayneg toma un valor mayor.
		document.getElementById("resultado").innerHTML = "El area del Triangulo es:"+result;
	}
}