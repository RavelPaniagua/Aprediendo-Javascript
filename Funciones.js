function Saludar(){
  console.log("Hola");
}
Saludar();

//usando argumentos
function Saludo(nombre){
  console.log(`Hola, ${nombre}`)
}
Saludo("Ravel");

//pasando valores por defecto
function SaludoDefault(nombre = "Pedro"){
  console.log(`Hola, ${nombre}`)
}
SaludoDefault();

function Media(num1,num2){
  let media = (num1 + num2) /2;
  return media;
}
let valor = Media(4,2);
console.log(valor);

//si queremos utilizarlo con multiples argumentos
function MediaMultArgs(){
  let suma=0;
  for(let i=0;i < arguments.length;i++){
    suma += arguments[i];
  }
  return suma / arguments.length;
}
let newValor = MediaMultArgs(4,2,5,6,3,6,3,6,3,6);
console.log(newValor);
