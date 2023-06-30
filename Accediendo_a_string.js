let nombre="Ravel";
console.log(nombre[0]);

//las cadenas de caracteres son inmutables no la puedes modificar individual
// uso de algunos metodos para los string

let texto = "Estamos programando en Javascript";
console.log(texto.length);

//extrae parte del string desde donde, hasta le especifiquemos
console.log(texto.slice(10,20));

//no permite numeros en negativos
console.log(texto.substring(5,10));

//en este caso si la palabra javascript se repite solo se reemplazará la primera que encuentre
//para solucionar eso utilizamos las expresiones regulares /JavaScript/g  para que la busque globalmente en el string
//o usar replaceAll
console.log(texto.replace("Javascript","Python"));
console.log(texto.replace("/Javascript/g","Python"));
console.log(texto.replaceAll("Javascript","Python"));

//convertir el string a minusculas y mayusculas
console.log(texto.toLocaleUpperCase()); // Mayusculas
console.log(texto.toLocaleLowerCase()); //minuscula
console.log("Hola!".concat(" ", "texto"));// concatenacion
console.log("   eliminacion de espacios    ".trim());// elimina 