	document.getElementById("val").onclick = function () 
	{
	var expresion = document.getElementById("entrada").value;
	var resultado = document.getElementById("Resultado");
	var array = expresion.split("");
	expresion.replace(" ","");
	expresion.replace("\n","");
	for (var i in array) 
	{

	    if(/[a-zA-Z]/.test(array[i]))
	    {
	        resultado.innerHTML = resultado.innerHTML + array[i] + " :Este elemento es una letra\n";
        }
        /*if(/[0-9]{3,6}/.test(array[x]))
        {
            resultado.innerHTML=resultado.innerHTML+array[x] + " numero\n";
        }*/
	    if(/\d+/g.test(array[i]))
        {
            resultado.innerHTML = resultado.innerHTML + array[i] + " :Este elemento en un numero\n"
        }
	    if (/[+]|[*]|[/]|[()]|[-]|[=]|[<]|[>]|[:]|[;]|[{]|[}]|[[]|[]]/.test(array[i]))
	    {
	        resultado.innerHTML = resultado.innerHTML + array[i] + " :Este elemento es un operador\n"
        }
	}
        document.getElementById("val2").onclick=function()
        {
            var expresion = document.getElementById("entrada").value;
            var resultado2 = document.getElementById("ResultadoSintactica");
            var array2=expresion.split(" ");
            expresion.replace(" ","");
            expresion.replace("\n","");
            for (var j in array2)
            {
                if (/^([(0-9])?[+\-*\/0-9]+([+*\-\/)])?[+*\-\/0-9]+([=])[0-9]+$/.test(array2[j])||/^([0-9][*\-\/+])+([0-9])+/.test(array2[j])||/^[0-9][+\/\-*]+[0-9]+$/.test(array2[j]))
                {
                    resultado2.innerHTML= resultado2.innerHTML+ array2[j]+" :cadena correcta\n";
                }
                else
                    {
                    resultado2.innerHTML= resultado2.innerHTML+ array2[j]+" :cadena Incorrecta\n";
                }
            }
        }
	    document.getElementById("val3").onclick=function ()
        {
            var expresion = document.getElementById("val3").value;
            var resultado3 = document.getElementById("ResultadoSemantica");
            var array3=expresion.split(" ");
            expresion.replace(" ","");
            expresion = expresion.replace("\n","");
            for (var o in array3)
            {
                //esta sentencia es para cuando se pone un ciclo de repeticion FOR
                //for(var i=0; i<=10; i++)
                //{
                //  console.log(i);
                //}
                if(/[a-zA-Z]+[(][a-zA-Z]+[\s][a-zA-Z]+[=][0-9]+[;][\s]?[a-zA-Z]+[\<|\>]?[=]([a-zA-Z]|[0-9]+)[;][\s]?[a-zA-Z]+([+]+|[-]+)[)][\n]?[{][\n]?[a-zA-Z]+[.]?[a-zA-Z]+[(]?[a-zA-Z]+[)][;][\s]?[}]/)
                {
                    resultado3.innerHTML = resultado3.innerHTML + array3[o]+" Esta cadena de repeticion esta escria correctamente"
                }
                else
                    {
                    resultado3.innerHTML = resultado3.innerHTML + array3[o]+" Esta cadena de repeticion esa escrita incorrectamente"
                }
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                //esta sentencia es para cuando se pone un ciclo de repeticion IF
                //if(condicion)
                //{
                //    console.log(condicion)
                //}
                if(/[a-zA-Z]+[(]+[a-zA-Z]+[)]+[\n]+[{]+[\n]+[a-zA-Z]+[.]+[a-zA-Z]+[(]+[a-zA-Z]+[)]+[\n]+[}]/)
                {
                    resultado3.innerHTML = resultado.innerHTML+arrray3[o]+" Esta cadena de condicional esta escrita correctamente\n"
                }
                else{
                    resultado3.innerHTML = resultado3.innerHTML+array3[o]+" Esta cadena de condicional esta incorrectamente escrita\n"
                }
            }
        }
}