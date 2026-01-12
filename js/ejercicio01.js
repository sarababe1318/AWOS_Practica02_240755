

//Personalizacion de consola 
const bg= "linear-gradient(45deg,rgba(52,152,219,1) 0%, rgba(26,188,156,1)50%)";
//const style_console `background: ${bg}; color:white; border-radius:6px; padding:4px;  `

// 1. Declaracion de variables utilizando el prefijo VAR
var miNombre = "Blanca Sarahi"
var misApellidos;

console.warn("--Declaracion de variables utilizando el prefijo var--")
//Utilizaremos la funcion console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es =", miNombre);
console.log("El valor de la variable misApellidos es =", misApellidos);
//este arroja un undefined dado que no ha  sido inicializada, osea no se le asigna un valor

misApellidos ="Melendez Torres"
//la variable ya tiene un valor almacenado poir que al imprimir debe mostrar el dato
console.log("El valor de la variable misApellidos es =", misApellidos);

//para actualuizar el valor de una variable previamente definida solo basta con igualar el nuevi valor 
miNombre= "Blanca Sarahi";
console.log ("Hola ,", miNombre, misApellidos)


//2. Declaracion de variables utilizando el prefijo CONST 
console.warn ("--Declaracion de variables utilizando el prefijo CONST--");

/* La palabra revervada CONST nos permite a nivel memoria reservar espacio para almacemar datos de una constante que a diferencia de uina variable s
eat5a no puede cambiar su valor durante la ejecucion del programa, de igual manera no sr pueden declarar constantes sin obligatoriamente inicializarlas 
, es decir asignarles un valor esprecifico , por ejemplo:*/

const miMatricula = "240755";

//Imprimir el valor de una cosntante 
console.log("El valor actucal de la constante miMatricula es: ",miMatricula);

//const miEdad;// --Esto ocasiona un error porque la constante no fue inicializada--

//miMatricula= 240755; // --esto ocasiona un error porque el valor de una CONSTANTE no puede cambiar una vez ha sido asignado --

//3. Declaracion de Variables utilizando el prefijo LET

/* La palabra reservada Let en JavaScript nos permite declarar variables de una manera muy similar a VAR, con la diferencia de alcance (SCOPE)
de la misma, es decir  aquellas variable declaradas  con var tienen un alange global durante la ejecucion y la let se limitan a funciones, ciclos o bloques 
de codigo, eliminando los valores almacenando una vez cumple su funcion */


var miFechaNacimiento =new Date("2006-02-13");
function calcularEdad(fechaNacimiento)
{

    //para calcular la edad requerimientos de la fecha del dia de hoy 
    let fechaHoy =  new Date();

    //Dado que los datos de fecha son almacenados en milisegundos por default en javaScript, necesitmos una variable que nos permite saber el numero de milisegundos por dia
    let milisegundosPorDia = 24*60*60*1000;

    //Ya que tenemos los milisegundos  por dia tenemos que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos que hemos vivido.

    let diasVividos = (fechaHoy - fechaNacimiento)/ milisegundosPorDia;

    //Invocamos el metodo matematico de la funcion piso (FLOOR)
    let edad = diasVividos /365.5

    edad = Math.floor(edad);

    return edad;


}


console.warn ("--Declaracion de variables utilizando let--")
console.log("El valor de la variable miNacimiento es :", miFechaNacimiento);
var miEdad = calcularEdad(miFechaNacimiento);
console.log ("Despues de ejecutar la funcion calularEdad(), puedo saber que tienes:", miEdad, "años.");


if(miEdad >= 18)
{
    var esMayordeEdad = true;
    var esMenordeEdad = false;
}
else
{
 esMayordeEdad= false;
 var esMenordeEdad = true;
}
console.log("En base a tu edad puedo deducir que el valor esMayorEdad es:", esMayordeEdad, "y el valor de esMenordeEdad es:", esMenordeEdad);


//interpolacion de datos 

/*para interpolar datos en JavaScript es decir mexzclar informacion estatica, que no cambia con datos dinamicos que pueden cambiar durante la ejecucion del programa se
se requiere comenzar la cadena con un backit(') y los datos que son dinamicos eataran encerrados en llacer curvas {} antecedidas por un signo de dolar $*/

console.warn("--Inyterpolacion de datos--");
console.log(`Hola, ${miNombre} ${misApellidos} se que tienes: ${miEdad} años; por lo que eres: ${esMayordeEdad?'mayor de edad': 'menor de edad'}.`);