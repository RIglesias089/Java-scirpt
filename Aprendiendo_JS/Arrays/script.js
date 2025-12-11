//Ahora generaremos arreglos y los imprimiremos e la consola 

let numeros = [10,15,20,25,30];
let nombres = ["Ricardo", "Cade", "Paola", "Jose"];
let mezclado = [1,"Hola", 3, "Cade", 5, "Paola" ];

//determinados los arreglos ahora queremos acceder a ellos para poder imprimierlos esto sabienqo eu los arreglos empiezan siempre 
//co el indice en 0 para las posiciones

let frutas = ["Manzana", "Banana", "Uva", "Piña"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//En base progresa podemos tambien corregir o modificar algunos elementos por ejemplo
let colores = ["rojo", "amarillo", "Azul"];
colores[1]= "Verde";
console.log(colores);

//Operaciones importantes con arrays
frutas.push("Mango"); //Al final
frutas.unshift("Fresas");//Al inicio
console.log(frutas);

//Tambien podemos eliminar elementos 
frutas.pop();//Al inicio
frutas.shift();//Al final
console.log(frutas);

//Podemows ver el tamaño de el arreglo
console.log(frutas.length);

//Podemos recoger un arreglo con un bucle o for (Veremos mas adelante)
let numerosprueba = [1, 2, 3, 4];

for (let i = 0; i < numerosprueba.length; i++) {
    console.log(numerosprueba[i]);
}

//Con un for...of
for (let numero of numeros) {
    console.log(numero);
}

