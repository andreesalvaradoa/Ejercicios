window.onload = function(){
	//Hacer evento clic en boton por medio de funcion onclick
	document.getElementById("btncalcular").onclick = function(){
		//Declaracion de Variables
		var n1, n2, n3, result;
		var mayneg = 0;

		//Captura de datos de input text dl html
		n1 = document.getElementById("n1").value;
		n2 = document.getElementById("n2").value;
		n2 = document.getElementById("n3").value;

		//Conversion de datos de string a enteros y suma
	 	n1 = parseInt(n1);
	 	n2 = parseInt(n2);
	 	n3 = parseInt(n3);		

	 	if(n1 > mayneg){
	 		mayneg = n1;
	 	}else if(n2 > mayneg){
	 		mayneg = n2;
	 	}else if(n3 > mayneg){
	 		mayneg = n3;
	 	}else{
	 		result = "No existe un numero definido"
	 	}

		//Mostrar resultado en span
		document.getElementById("resultado").innerHTML = result;

		//Mostrar el resultado si mayneg toma un valor mayor.
		document.getElementById("resultado").innerHTML = "El numero Major es:"+mayneg;
	}

	//Quitar datos al SPAN al momento de cambiarel input text n1 o n2
	/*document.getElementById("n1").onchange = function(){
		document.getElementById("resultado").innerHTML = " ";
	}

	document.getElementById("n2").onchange = function(){
		document.getElementById("resultado").innerHTML = " ";
	}*/
}