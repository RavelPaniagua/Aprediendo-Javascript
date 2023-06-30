let persona = {
  nombre:"Ravel",
  apellido:"Paniagua",
  edad:28,
  nombreCompleto:function(){
    return `${this.nombre} ${this.apellido}`;
  },
  lenguajes:{
    1:"HTML",
    2:"CSS3",
    3:"JavaScript",
    4:"PHP",
    5:"Python"
  }
}
//modificando valores del objeto
persona.edad = 30;
console.log(persona);
let nombreCompleto = persona.nombreCompleto();
console.log(nombreCompleto);

console.log(persona.lenguajes);