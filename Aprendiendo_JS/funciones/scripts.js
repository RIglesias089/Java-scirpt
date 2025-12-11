//Las fucniones en JS se determinan de diferentes maneras: 
//Funcion basica
function saludaruno() { //Donde aclaramos que es una funcion y el nombre de esta funcion 
    console.log("Esta es una funcion basica llamada Saludar");
}
//Ejecutamos dicha funcion 
saludaruno();

//Ahora no solo tenemos fuciones para imprimir si no tambien para parametros
function saludar(nombre) {
    console.log("Hola ", nombre);
}

//Imprimimos evaluando nombre con los nombres ya dados
saludar("Ricardo");
saludar("Cade");//Podemos evaluar con diferentes valores 

//Ahora com sabemos las funciones no solo imprimen si no que tambien nos ayudan con procesos los cuales nos pueden 
//devolver datos o valores 

function sumar(a, b) {
    return a + b;
}

//Planteamos una variable con la funcion ý sus valores a evaluar y con eso imprimimos
let resultado = sumar(2, 5); //Damos los valores a evaluar y que nos de el resultado nada mas 
console.log(resultado);

//Arrow function 
const restar = (a,b) => a-b;

console.log (restar(2,5));