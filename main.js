
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
//console.log(num);

//! ejercicio 3

function animal(){
   while(num !=0 ){
      let num = prompt("Selecciona el animal que quieras: 1.Perro 2.Pato 3.camello 4.gato 0.salir"); //* prompt() es un método del objeto Window de JavaScript que se usa para mostrar un cuadro de diálogo 
      switch (num) {
         case "1":
            console.log(`
            __      _
            o'')}____//
             _/      )
             (_(_/-(_/
             
              `);
            
            break;

         case "2":
            console.log(`
            __
            ___(o)>
            \ <_. )
             ---'  
            `);
            break;
         case "3":
            console.log(`
            //
            _oo\
           (__/ \  _  _
              \  \/ \/ \
              (         )\
               \_______/  \
                [[] [[]
                [[] [[]

            `);

            break;

         case "4":
            console.log(`
            /\_/\           ___
            = o_o =_______    \ \  
             __^      __(  \.__) )
         (@)<_____>__(_____)____/
            
            `);

            break;

         case "0":
            break;
      }
   }
}
animal();

