//es un elemento que contiene claves y valores
const alumnos = new Map(["Juan",7.2],["Pablo",9.7],["Laura",9.0]);

alumnos.set("javier",2.0);//nos permite agregarle un nuevo elemento al map
console.log(alumnos);

alumnos.get("Juan");
alumnos.delete("Juan");// elimina un elemento de Map

alumnos.has("Juan")//devuelve true si lo encuentra sino devuelve false
alumnos.size;

console.log(alumnos);