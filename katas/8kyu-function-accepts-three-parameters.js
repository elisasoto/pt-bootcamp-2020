//cap is the amount of people the bus can hold excluding the driver.
//on is the number of people on the bus excluding the driver.
//wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// first solution
/* function b(cap, on, wait) {
 const availSeats = cap - on
 if (wait > availSeats){
   return wait -availSeats
 } else {
   return 0
 }
} */

// a fancier solution
function enough(cap, on, wait) {
return (cap-on) >= wait ? 0 : wait-(cap-on)
}

console.log(enough(10,5,5))
console.log(enough(100,60,50))
console.log(enough(20,5,5))