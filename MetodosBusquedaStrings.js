let texto = "Estamos buscando en en el texto con javascript";
console.log(texto.indexOf("javascript"));// devuelve la posicion donde comienza esta palabra le puedes pasar un parametro que es desde donde quieres empezar la busqueda indexOf("javascript",6)

console.log(texto.lastIndexOf("am",6));// devuelve el ultimo indice
console.log(texto.search("am"));// retorna la primera coincidencia
console.log(texto.includes("javascript"))// devuelve true si encuentra la palabra en el string y false sino lo esta

