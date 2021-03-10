// ESTO ES CON FOR

var name = "Christian"

for (var i=1; i<5; i++){
    if (i===3){
      console.log("Te deseamos feliz cumpleaños", name)
    } else {
      console.log("Cumpleaños feliz")
    }
  }
  
  // ESTO ES CON WHILE

  var i = 1;
  
  while (i<5){
    if (i===3){
      console.log("Te deseamos feliz cumpleaños", name)
    } else {
      console.log("Cumpleaños feliz")
    }
    i +=1;
  }

  // IMPRIMIR POR CONSOLA UNA CUENTA REGRESIVA QUE COMIENCE EN 10, Y EN EL CERO TIENE QUE DEVOLVER LA FRASE "AL INFINITO Y MAS ALLA"

  for (var i=10; i>=0; i--){
    if(i>0){
         console.log(i)
     } else {
       console.log("al infinito y más allá")
     }
 }  

 // otra solucion al problema 
 for (var i=10; i>=0; i--){
    if(i===0){
         console.log("al infinito y más allá")
     } else {
       console.log(i)
     }
 } 

 // esto es con while
 
 var j=10
 
 while (j>=0){
   if(j>0){
         console.log(j)
     } else {
       console.log("al infinito y más allá")
     }
   j -=1
 }
  

