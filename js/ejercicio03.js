
// Personalizamos el separador del ejercicio 03
console.log("%cEjercicio 03: Funciones ");

//1. Funciones Procedurares, funciones vacia (VOID) o funciones que no retornan un valor

function saludar ()
{
    console.log("Bienvenido al Sistema de Bienes Raices");
}

console.warn("1. Funciones Procedurales");
saludar();

// 2. Funciones Procedurales con parametros de entrada, es decir; que reciben datos para funcionar

function saludarUsuario (nombreUsuario, generoUsuario)
{
    if(generoUsuario =="H")
        console.log(`Bienvenido ${nombreUsuario} al sistema de Bienes Raíces`);
    else if (generoUsuario == "M")
        console.log(`Bienvenida ${nombreUsuario} al sistema de Bienes Raíces`);
    else
        console.log(`Bienvenid@ ${nombreUsuario} al sistema de Bienes Raíces`);
}

console.warn("2. Funciones Procedurales con parametros de entrada")
//Test 1;
console.warn("nombreUsuario = Marco, generoUsuario = H")
saludarUsuario("Marco", "H");
//Test 2;
console.warn("nombreUsuario = Vanessa, generoUsuario = M")
saludarUsuario("Vanessa", "M");
//Test 3;
console.warn("nombreUsuario = Jan, generoUsuario = NULL")
saludarUsuario("Jan", null);

//3. Funciones que retornan un valor pero que no reciben parametros (Datos de entrada)

function fechaActual()
{
    const fecha = new Date() //milisegundos
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

    return fecha_formatoMX
}

console.warn("3. Funciones que retornan un valor, pero no tienen parametros de entrada")
let hoy = fechaActual();
console.log(fechaActual);
console.log(typeof(fechaActual));
console.log(hoy);

//4. Funciones que retornan un valor y reciben parametros (datos de entyrada)

function login(username, password )
{
    let userValidation = false;

if(username==="admin" && password=="12345")

{

userValidation = true;

console.log("Bienvenido usuario admin");
}


else if (username==="admin" && password!="12345")
{
userValitation = false;

console.log("Error con la constraseña del admin");

}
else if(username!="admin" && password=="12345")
{
    userValidation=false;
    console.log("Por favor verifica el usuario y contraswñ esten correctos")
}
return userValidation;
}

console.warn("4. Funciones que retornan un dato y reciben parámetros de entrada")
var loginStatus;



//Test 1 - Usuario y Contraseña correctos

console.log("Test 1 - usuario: admin, password: 12345")
loginStatus = login("admin", "12345");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente": "hubo un error en el login del usuario admin." }`);


//Test 2 - Usuario correcto y Contraseña incorrecto
 console.log("Test 2 - usuario: admin, password: 1234567890")
loginStatus = login("admin", "1234567890");
console.log(`${loginStatus? "El usuario admin se ha logeado correctamente.": "Hubo un error en el login del usuario admin." }`);
console.log("Test 3 - usuario: administrador, password: 12345")

 //Test 3 Usuario incorrecto y Contraseña correcto
 console.log("Test 3 - usuario: admin, password: 1234")
loginStatus = login("administrador","12345");
console.log(`${loginStatus? "El usuario del usuario adminb admin se ha logeado correctamente.": "Hubo un error en el login  ." }`);


//Test 4 - Usuario y Contraseña incorrectos

console.log("Test 4 usuario: marcor, password: abcde")

loginStatus = login("marcor", "abcde");

console.log(`$(loginStatus? "El usuario admin logeado correctamente.": "Hubo un error en el login del usuario admin." }`);