	document.getElementById("val").onclick = function () 
	{
	var expresion = document.getElementById("entrada").value;
	var resultado = document.getElementById("Resultado");
	var resultado2 = document.getElementById("ResultadoSintactica");
	var array = expresion.split("");
	for (var i in array) 
	{
		switch (true) 
		{
			case /[a-z]/.test(array[i]):
			resultado.innerHTML = resultado.innerHTML + array[i] + " Es una letra\n";
			break;

			case /[0-9]/.test(array[i]):
			resultado.innerHTML = resultado.innerHTML + array[i] + "  Es un numero\n";
			break;

			case /[+]|[*]|[/]|[()]|[-]|[=]/.test(array[i]): 
			resultado.innerHTML = resultado.innerHTML + array[i] + "Es un Operador\n";

			case /^([(0-9])?[+\-*\/0-9]+([+*\-\/)])?[+*\-\/0-9]+([=])[0-9]+$/.test(array[i])||/^([0-9][*\-\/+])+([0-9])+/.test(array[i])||/^[0-9][+\/\-*]+[0-9]+$/.test(array[i]):
			resultado2.innerHTML=resultado2.innerHTML+array[i]+"La cadena esa escrita corresctamente";
			break;

		}
	}

}