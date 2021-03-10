// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// my first solution
/* const quarterOf = (month) => {
  if (month <= 3){
    return 1
  } else if (month >=3 && month <=6){
    return 2
  } else if (month >=7 && month <=9){
    return 3
  } else {
    return 4
  }
} */

// a fancier solution
const quarterOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  
}

quarterOf(12) 