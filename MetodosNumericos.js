let a = 5.62154;
a = a.toString(); // convierte una variable numerica a tipo string
console.log(a);
console.log(typeof(a));

b = 10.36596;
b = b.toExponential();// nos devuelve el string pero en notación cientifica
console.log(b);
console.log(typeof(b));

c=15.36363;
c = c.toFixed(3);// nos devuelve el numero como string pero con la cantidad de decimales quje queramos
console.log(c);
console.log(typeof(c));

d=18.63596;
d = d.toPrecision(2);// este os va apermitir decir la cantidad de números que queramos que tenga
console.log(d);
console.log(typeof(d));

let e =Number("15.2"); // nos devuelve un numero y ya luego se puede hacer operaciones aritmeticas con el
let f = e + 10;
console.log(f);
console.log(typeof(f));

let string_to_decimal = parseFloat("12.265363");//convierte un string a un numero decimal
let string_to_integer = parseInt("12.2635636"); // convierte un string a numero enteno
console.log(string_to_decimal);
console.log(string_to_integer);
//Tener en cuenta que si introducimos letras dentro de estos metodos nos devolvera un error de conversion de tipo NaN

//Objeto tipo Number y Math
Number.isInteger(5); // devuelve true si es un numero y false si no lo es
Number.isSafeInteger(25) // devuelve true si el numero es un entero seguro y false sino no es 
Number.parseFloat(); // funciona igual que los anteriores
Number.parseInt(); // funciona igual que los anteriores

Math.PI; // devuelve el numero pi 3.1415926
Math.E; // devuelve el numero de Euler
Math.SQRT2; // develve la raiz cuadrada de dos
Math.SQRT1_2; // devuelve la raiz cuadrada de una mitad

Math.round(5.8);// redondea el numero que le pasemos
Math.ceil(63.5); // redondea al entero mas cercano
Math.floor(6.3); // redondea hacia a bajo
Math.trunc(6.7); // devuelve solo la primera parte 6
Math.abs(-16); // devuelve el numero absoluto 16
Math.pow(2,5); // este devuelve la potencia de 2 a la 5
Math.sqrt(5); // devuelve la raiz cuadrada
Math.log(5); /// devuelve el logaritmo de un número
Math.log2(16)// devuelve el logaritmo en base a 2;

Math.min(1,5,16,-5,3);// devuelve el número minimo del conjunto
Math.random(); // devuelve un numero aleatorio
Math.max(1,5,16,12,3) // devuelve el número mayor del conjunto
