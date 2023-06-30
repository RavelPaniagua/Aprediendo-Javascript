 //los set son como los array lo unico que no nos permite contener un mismo valor en varias ocaciones como el array. en cierto modo son valores unicos

let nombres = ["Juan","Pablo","Laura","Juan"];
console.log(nombres);

const nombresSet = new Set(["Juan","Pablo","Laura","Juan"]);
console.log(nombresSet);
//con el set no se puede acceder a un elemento individual como con el array.

nombresSet.add("Ravel");//agrega un nuevo elemento al set
nombresSet.delete("Juan");//Elimina un elemento del set
console.log(nombresSet);

nombresSet.has("Ravel")//nos devuelve true si contiene el elemento que se especifica sino devuelve false

nombresSet.size; // devuelve la cantidad de elementos que tiene el set
