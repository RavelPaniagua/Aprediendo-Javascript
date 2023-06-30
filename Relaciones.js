let variable=Number.isInteger(5.1);
5 === 4 // 5 es igual a 4 (false)
5 === 5 // true
5 == "5" //true
5 === "5" //false
5 !== "5" // true
5 != "5" // false
5 > 0 //true
5 > 10 // false
5 >= 5 //true
0 < 5 //true
10 < 5 //false

//Logicas
0 < 2 && 5 > 6 // false ambas tienen que cumplirse a true
0 < 2 || 0 > 2 // true porque al menos una de las condiciones se cumplen
!( 5 < 10 ) // false esta condicion niega la respuesta real cambiando de true a false y viceversa
