var valorEmDolarTexto = prompt("Qual o valor em dolár você quer converter?")//pergunta para alert

var valorEmDolarNumero = parseFloat(valorEmDolarTexto) // receber o valor


var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealDecimal = valorEmReal.toFixed(2) // duas casas decimais 

alert(valorEmReal) // resultado da conversão