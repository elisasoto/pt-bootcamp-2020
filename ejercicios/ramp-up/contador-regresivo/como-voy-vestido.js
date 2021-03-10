//¿Cómo salgo vestido hoy?
// Declara una variable de nombre “temperature” con un valor numérico entre 0 y 50.
//Declara una variable de nombre “sky” con un valor de tipo string que podrá ser “lloviendo” o “soleado”.
//Declara una tercera variable con el nombre “outfit” donde almacenarás el resultado.
//Declara una cuarta variable auxiliar “message” donde guardaremos el mensaje a mostrar.
//A continuación crea un bloque de código que, usando condicionales, concatene en message una prenda según la temperatura (si es mayor de 25 grados añadirá “Ponte una camiseta”, si es menor o igual a 25 añade “Ponte un sweater”)
//Añade otra condición que agregue a message “y un paraguas” si llueve, o “y un sombrero” si hay sol.
//Por ejemplo: “Ponte un sweater y lleva paraguas”

// NO RECUERDO COMO HACER LA CONCATENACION SIN DEJAR  UN ESPACIO EN BLANCO

var temperature = 30
var sky = "soleado"

if (temperature <= 25) {
    outfit = ('Ponte una sweater');
} else {
    outfit = ('Ponte una camiseta');
}

if (sky==="lloviendo"){
  message = console.log('El dia de hoy la temperatura es de ' + temperature + ' grados y estará ' + sky + "." + outfit + " y no olvides llevar un paraguas.")
} else {
  message = console.log('El dia de hoy la temperatura es de ' + temperature + ' grados y estará ' + sky + "." + outfit + " y no olvides llevar un sombrero.")
}

