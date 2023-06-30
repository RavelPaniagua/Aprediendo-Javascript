let numero = 8;
if (numero % 2 === 0){
  console.log("El número es par");
}else{
  console.log("El numero es impar");
}

let num1 = 5;
let num2 = 10;

if(num1 > num2){
  console.log(`El número ${num1} es mayor que el número ${num2}`);
}else{
  console.log(`El número ${num2} es mayor que el número ${num1}`);
}

if(num1 % 2 === 0){
  console.log(`El número ${num1} es par`);
}else if(num1 % 3 === 0){
  console.log(`El número ${num1} es divisible por 3`);
}else{
  console.log(`El número ${num1} es impar!`);
}
