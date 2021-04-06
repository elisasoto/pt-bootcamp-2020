function iqTest(stringOfNumbers:string) {
    let arr = stringOfNumbers.split(' ');
    let desiredRemainder = arr
      .slice(0,3)
      .reduce((evenCount, item) => item % 2 === 0 ? evenCount+1 : evenCount, 0) 
        > 1
          ? 1
          : 0;
    return arr.findIndex(i => i % 2 === desiredRemainder) + 1;
}

console.log(iqTest("2 4 7 8 10"))