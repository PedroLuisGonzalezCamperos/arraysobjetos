let arreglo1 = [9,2,3,5,19,1,-3];

//Métodos para recorrer arreglos

//Metodo forEach, con este método se puede aplicar una función a cada elemento del arreglo

/* arreglo1.forEach (function (numero) {

console.log(numero);


})
 */
//Ejemplo con función flecha

/* arreglo1.forEach ((numero)=> {

    console.log(numero);
    
    
    })
 */
//Al colocar el paremetro index se puede conocer la posición de los elementos del arreglo

/* arreglo1.forEach(function(numero, index) {
    console.log('Indice: ' + index + ' Valor: ' + numero*2);
});

//A continuaciòn ejemplo con funciòn flecha
arreglo1.forEach((numero, index) => {
    console.log('Indice: ' + index + ' Valor: ' + numero*2);
});
 */
//Método push, se utiliza para agregar un elemento al final del array

/* arreglo1.push(92);
console.log(arreglo1) */

//Método pop, Se utiliza para eleminar el último elemento del array

/* arreglo1.pop()
console.log(arreglo1)
 */

//Método unshift, se utiliza para agregar un elemento al principio del array

/* arreglo1.unshift(27)
console.log(arreglo1) */

//Método shift, se utiliza para elminar el primer elemento del array

/* arreglo1.shift()
console.log(arreglo1) */

//Método indexOf, se utiliza para conocer el índice del elemento dentro del array

let arreglo2 = ["Manzana", "Banana", "Fresa", "mango", "limón"]

/* 
console.log(arreglo2.indexOf("Fresa")) */

//Método splice, por ejemplo para eliminar del array2  "Banana" se pasarán dos parámetros: la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. De esta forma, .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento.

/* arreglo2.splice(2,2)
console.log(arreglo2) */

//COn splice también se puede crear un arreglo con los elementos eliminados

/* let arreglo3 = arreglo2.splice(1,3);
console.log(arreglo3); */

//Con el método slice se puede copiar un array y guardarlo en una variable

let arregloGuardado = arreglo2.slice()

console.log(arregloGuardado);

//El método Array.map() se utiliza comúnmente para aplicar algunos cambios a los elementos, ya sea multiplicando por un número específico como en el código anterior, o haciendo cualquier otra operación que pueda necesitar para su aplicación. Importante si se coloca un segundo parámetro por defecto regresará el índice.

/* let arreglo4 = arreglo1.map(function (elemento) {

return elemento*2;

})

console.log(arreglo4); */

//Ejemplo con función flecha

let arreglo4 = arreglo1.map( (elemento, index)=> ({numero:elemento*2,indice: index}))//sintaxis para hacer un arreglo de objetos mostrando el índice, si se coloca un solo parámetro no hace falta colocar paréntesis después de la función flecha.
    
    console.log(arreglo4);

    //El método reduce() te permite reducir los elementos de un array y retornar un valor único. A continuación veremos un ejemplo bastante común haciendo uso de este método para conseguir el valor total de la suma de un array de números.

   /*  const sumaTotal = arreglo1.reduce(function (total, numero) {
        return total + numero;
   }, 0);
   
   console.log("Suma total: ", sumaTotal) */

//ejemplo con función flecha

 /*   
const sumaTotal = arreglo1.reduce((total, numero) => {
     return total + numero;
}, 0);

console.log("Suma total: ", sumaTotal); */

//Método sort(), Cuando usamos este método los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto:

const equipos = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus', "Argentina"];

equipos.sort(); 

console.log(equipos.sort())

//para ordenar números de menor a mayor el método sort() varía 

/* let numerosOrdenados = arreglo1.sort(function(a, b){
    return a - b});

    console.log(numerosOrdenados);
 */
    //para ordenar números de mayor a menor se invierten los parámetros

let numerosOrdenados = arreglo1.sort(function(a, b){
        return b - a});
    
console.log(numerosOrdenados);    

//bucle for..in para recorrer objetos, esté bucle es usado para recorrer objetos

const clientes = { nombre: 'Juan', saldo: 100, id: 1 }

for(let propiedad in clientes) {

    console.log(propiedad)//con esto se mostrarán las claves del objeto pero no los valores

}

for(let propiedad in clientes) {

    console.log(clientes[propiedad])//se usan corchetes para acceder a los valores de las propiedades

}

for(let propiedad in clientes) {

    console.log(propiedad+":"+clientes[propiedad])//se mostrarán las claves y sus valores
}


//sumar valores numéricos con una propiedad repetida de un array de objetos
// Lista de objetos
const lista = [
    { nombre: 'Juan', oficio: 'Carpintero', bono: 100 },
    { nombre: 'Pedro', oficio: 'Electricista', bono: 200 },
    { nombre: 'Luis', oficio: 'Carpintero', bono: 150 },
    { nombre: 'Ana', oficio: 'Plomero', bono: 250 },
    { nombre: 'Carlos', oficio: 'Electricista', bono: 300 },
    { nombre: 'Marta', oficio: 'Plomero', bono: 100 },
    { nombre: 'Jorge', oficio: 'Carpintero', bono: 50 },
    { nombre: 'Lucía', oficio: 'Electricista', bono: 400 }
];

// Objeto para almacenar la suma de los bonos por oficio
const sumaBonos = {};

/* //estas siguientes dos líneas son solo un ejemplo para entender
let {oficio, bono} =lista[0]
console.log({oficio, bono});//regresa un objeto con las propiedades y los valores del elemento lista[0]
sumaBonos[oficio]=bono;

console.log(sumaBonos[oficio])//regresará el valor que asignaste anteriormente en sumaBonos[oficio]=bono
 */
// Iteramos sobre la lista
lista.forEach(persona => {

    const { oficio, bono } = persona;
    // Si el oficio ya existe en el objeto, sumamos el bono, si no, lo inicializamos
    if (sumaBonos[oficio]) {
        sumaBonos[oficio] += bono;//por propiedad, osea oficio en este caso se irá acuulando su valor.
    } else {
        sumaBonos[oficio] = bono;
    }

});

console.log(sumaBonos)//se observará que el objeto sumaBonos tendrá los nombres de los oficios con sus valores acumulados

console.log(Object.keys(sumaBonos))//solo regresará los nombres de las propiedades del objeto sumaBonos pero sin sus valores, los regresará como strings en un arreglo

// Convertimos el objeto resultado en un arreglo de objetos con oficio y suma de bonos
const resultado = Object.keys(sumaBonos).map(oficio => ({oficio, bonoTotal: sumaBonos[oficio]}));//al colocar 

console.log(resultado);




/* const arreglo = [
  { nombre: 'Juan', gasto: 100 },
  { nombre: 'María', gasto: 200 },
  { nombre: 'Pedro', gasto: 150 },
  { nombre: 'Ana', gasto: 300 },
  { nombre: 'Luis', gasto: 250 },
  { nombre: 'Carmen', gasto: 180 }
];

const gastosObj = {};

arreglo.forEach((item, index) => {
  gastosObj[`gasto${index + 1}`] = item.gasto;
});

console.log(gastosObj); */

const accounts = [

    { clientId: 6, bankId: 1, balance: 15000 },
  
    { clientId: 1, bankId: 3, balance: 18000 },
  
    { clientId: 5, bankId: 3, balance: 135000 },
  
    { clientId: 2, bankId: 2, balance: 5600 },
  
    { clientId: 3, bankId: 1, balance: 23000 },
  
    { clientId: 5, bankId: 2, balance: 15000 },
  
    { clientId: 3, bankId: 3, balance: 45900 },
  
    { clientId: 2, bankId: 3, balance: 19000 },
  
    { clientId: 4, bankId: 3, balance: 51000 },
  
    { clientId: 5, bankId: 1, balance: 89000 },
  
    { clientId: 1, bankId: 2, balance: 1600 },
  
    { clientId: 5, bankId: 3, balance: 37500 },
  
    { clientId: 6, bankId: 1, balance: 19200 },
  
    { clientId: 2, bankId: 3, balance: 10000 },
  
    { clientId: 3, bankId: 2, balance: 5400 },
  
    { clientId: 3, bankId: 1, balance: 9000 },
  
    { clientId: 4, bankId: 3, balance: 13500 },
  
    { clientId: 2, bankId: 1, balance: 38200 },
  
    { clientId: 5, bankId: 2, balance: 17000 },
  
    { clientId: 1, bankId: 3, balance: 1000 },
  
    { clientId: 5, bankId: 2, balance: 600 },
  
    { clientId: 6, bankId: 1, balance: 16200 },
  
    { clientId: 2, bankId: 2, balance: 10000 }
  
  ]

let arreglo5={ cl: "hola", bankId: 2, balance: 10000 }



  let sumaBalance = {};

  accounts.forEach(cliente => {

      let {clientId, balance}= cliente;

      if(sumaBalance[clientId]) {

        sumaBalance[clientId]+=balance;

      } else {

        sumaBalance[clientId]=balance;

      }


  })

  console.log(sumaBalance);


  let arregloSumaBalance = Object.keys(sumaBalance).map(clientId => ({clientId, balanceTotal: sumaBalance[clientId]}));

  console.log(arregloSumaBalance);

  let balancesOrdenados = arregloSumaBalance.sort((a, b) => b. balanceTotal - a. balanceTotal);

  console.log(balancesOrdenados)

  /* Otro ejemplo

let objetoPrueba ={chevete: 3000, corola:1980, aveo:3000}

let objetoPruebaArreglo = Object.keys(objetoPrueba)

let prueba=objetoPruebaArreglo.map(vehiculo => ({vehiculo, precio:objetoPrueba[vehiculo]}))

console.log(objetoPruebaArreglo)
console.log(prueba) */