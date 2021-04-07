	document.getElementById("val").onclick = function () 
	{
	var expresion = document.getElementById("entrada").value;
	var resultado = document.getElementById("Resultado");
	var resultado2 = document.getElementById("ResultadoSintactica");
	var array = expresion.split("");
	for (var i in array) 
	{

	    if(/[a-z]/.test(array[i]))
	    {
	        resultado.innerHTML = resultado.innerHTML + array[i] + " :Este elemento es una letra\n";
        }
	    if(/[0-9]/.test(array[i]))
        {
            resultado.innerHTML = resultado.innerHTML + array[i] + " :Este elemento en un numero\n"
        }
	    if (/[+]|[*]|[/]|[()]|[-]|[=]/.test(array[i]))
	    {
	        resultado.innerHTML = resultado.innerHTML + array[i] + " :Este elemento es un operador\n"
        }
	}
        document.getElementById("val2").onclick=function()
        {
            var expresion = document.getElementById("val2").value;
            var resultado = document.getElementById("ResultadoSintactica");
            var array2=expresion.split(" ");
            for (var j in array2)
            {

                if (/^([(0-9])?[+\-*\/0-9]+([+*\-\/)])?[+*\-\/0-9]+([=])[0-9]+$/.test(array2[j])||/^([0-9][*\-\/+])+([0-9])+/.test(array2[j])||/^[0-9][+\/\-*]+[0-9]+$/.test(array2[j]))
                {
                    resultado2.innerHTML= resultado2.innerHTML+ array2[j]+" :La cadena esta correctamente escrita\n";
                }
                else {
                    resultado2.innerHTML= resultado2.innerHTML+ array2[j]+" :La cadena esta escrita Incorrectamente escrita\n";
                }
            }
        }
}