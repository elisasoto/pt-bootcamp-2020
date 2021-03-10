//¡Tengo mucha hambre!
//Declara una variable “level” cuyo valor sea un número.
//Declara la variable “howMuch” cuyo valor sea string vacío “” Esta será la variable donde guardaremos la palabra “mucha” repetida (mediante concatenación) una cierta cantidad de veces.
//Declara una tercera variable auxiliar “message” donde guardaremos el mensaje a mostrar.
//Crea un bloque de código que itere la cantidad de veces indicada en level y en cada vuelta sume la palabra “mucha” a la variable “howMuch”. 
//Finalmente, imprime por consola  el mensaje final que debe verse como este: “Tengo mucha hambre”, donde la palabra “mucha” se repetirá la cantidad de veces que indique “level”.
//Por ejemplo: Si var level = 4, la consola muestra “Tengo mucha mucha mucha mucha hambre”

// como hacer para poner una iteracion que cada vez imprima level con más mucha?

var level = 2
var howMuch = "mucha"
var message = "tengo " + howMuch.repeat(level) + " hambre"

if (level){
    console.log (message)
  } else {
    console.log ("NA")
}