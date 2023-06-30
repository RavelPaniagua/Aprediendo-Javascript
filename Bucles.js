//FOR: se usa generalmente cuando conocemos cuantas veces queremos mostrar una iteración
for(let i=0;i <= 10;i++){
  console.log(i);
}

//While: para cuando no sabemos cuantas veces se quiere iterar
let num=100;
while ( num > 1 ){
  num /= 2 // num = num /2 
  console.log(num);

}

// para interrumpir bucles 
//break y continue

for(let i=0; i<=10;i++){
  console.log(i);
  if(i==5){
    break;
  }
}

for(let i=0; i<=10;i++){
  console.log(i);
  if(i==5){
    continue;// evade el 5 y continua
  }
}


