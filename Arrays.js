let nombre = ["Ravel","Juan","Javier"];
let notas=[8.2,7.6,4.8]

nombre[2] = "Angel";

console.log(nombre);
console.log(notas);

let alumnos = [["Pablo","Ana","JAvier"],[7.2,3.0,6.5,4.5]];

//metodos
nombre.pop(); // elimina el ultimo elemento y lo devuelve
console.log(nombre);

nombre.shift();
console.log(nombre);// elimina el primer elemento de un array

nombre.push("Laura") // agrega un elemento al array
console.log(nombre);

nombre.unshift("Marcos"); // agrega un elemento en la primera posicion empujando a los demas hacia delante
console.log(nombre);

//Ordenar los elementos en orden alfabetico
nombre.sort();
console.log(nombre);

nombre.reverse(); //coloca los elementos al reverso de como estan actualmente
console.log(nombre);