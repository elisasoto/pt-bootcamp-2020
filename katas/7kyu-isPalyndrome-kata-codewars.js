function isPalidrome (str){
    const regex = /[^A-Za-z0-9]/g;
    const tolower = str.toLowerCase().replace(regex,'')
    const reversedstr = tolower.split('').reverse().join('')
    return tolower === reversedstr
  }
  console.log(isPalidrome('anita lava la tina'))
  
  /* // funcional
  
  
  // 1. minusculas, quitar espacios y diferentes caracteres
  const strToLower = string => string.toLowerCase()
  const replaceSpaces = string => string.replace(/[^A-Za-z0-9]/g, '') 
  
  // 2. minusculas, quitar espacios y reversar la frase
  const stringSplit = string => string.split('')
  const reverseArr = arr => arr.reverse()
  const arrToString = arr => arr.join('')
  
  // 3. ternario para saber si 1 y 2 son iguales
  const isItPalyndrome = (string1, string2) => string1 === string2
  
  // COMO HAGO UN PIPE ?
  /* pipe(
    isItPalyndrome, 
    replaceSpaces,
    strToLower,
  )();
   */
  
  // console.log(isItPalyndrome(replaceSpaces(strToLower("anita lava latina")), 
  //            replaceSpaces(arrToString(reverseArr(stringSplit("roberto lava latina"))))))
  
  
  // Replace Spaces con filter
  
  // funcional
  const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);
  const strToLower = string => string.toLowerCase()
  const stringSplit = string => string.split('')
  const reverseArr = arr => arr.reverse()
  //const replaceSpaces = string => string.replace(/[^A-Za-z0-9]/g, '') 
  const filterSpaces = arr => arr.filter((el)=>{
    return el !== ' '
  })
  const arrToString = arr => arr.join('')
  
  // const isItPalyndrome = (string1, string2) => string1 === string2
  
  // piped
  const toPalyndrome = string => pipe(
    strToLower, 
    stringSplit, 
    reverseArr, 
    filterSpaces, 
    arrToString
  )(string)
  
  const isItPalyndrome = string => toPalyndrome(string) === pipe(
     strToLower, 
    stringSplit,  
    filterSpaces, 
    arrToString
  )(string)
  console.log(isItPalyndrome('beto lava la tina'))