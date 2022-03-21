
//! Ejercicio 1
// declaración de dos variables, donde se le asigana el número que se quiera sumar
const x = 2;
const y = 3;
// función que recibe dos parametros e imprime en consola la suma
function suma(x,y){
   console.log(x+y);
}

//suma(x,y);


//! ejercicio 2
// declaración del arreglo de números
const arrayNum = [1,2,3];
// variable auxiliar donde guardaremos la suma, se inicializa en 0
let num = 0;
// un for el cual va a recorrer el arreglo
for (let i = 0; i < arrayNum.length; i++) {
   // a num se le asigna el número inicial y suma el número siguiente del arreglo
 num += arrayNum[i];
}
// imprimimos en consola el resultado 
console.log(num);



