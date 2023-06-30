class Alumno{
  constructor(nombre,edad,nota){
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  } 
  //area para los metodos
  Aprobado(){
    if(this.nota >= 5 ){
      return true;
    }else{
      return false;
    }
  }
}

let alumno1 = new Alumno("Pablo",26,7.2);
let alumno2 = new Alumno("Masiel",28,8.2);
let alumno3 = new Alumno("Paoly",26,3.2);

console.log(alumno2.nota);

//Metodos 
console.log(alumno1.Aprobado());
console.log(alumno2.Aprobado());
console.log(alumno3.Aprobado());

//Herencia
class Animal{
  Comer(){
    console.log("El animal come");
  }
  Dormir(){
    console.log("El animal duerme");
  }
}

class Perro extends Animal{  // estamos extendiendo o arrastrando los metodos que tiene Animal hacia nuestra clase Perro para que puedan ser usadas por la clase Perro
Ladrar(){
  console.log("El perro ladra");
}
//aplicando polimorfismo
Comer(){
  console.log("El Perro Come Pienso");
}
}

let animal1 = new Animal();
let perro1 = new Perro();

console.log(perro1.Comer());
console.log(perro1.Dormir());
console.log(perro1.Ladrar());




//Polimorfismo es agregar el la clase Perro el mismo metodo que existe en la clase Animal pero con diferentes condiciones

