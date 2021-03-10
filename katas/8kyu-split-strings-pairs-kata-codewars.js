// ----------Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').-------------
// ('abc') // should return ['ab', 'c_']

// first solution
function solution(str) {
  if (str.lenght % 2 !== 0) {
    str = str.concat("_");
  }
  const arrayOfChars = str.split("");

  const reducer = arrayOfChars.reduce((acc, curr, i, arr) => {
    if (i % 2 !== 0) {
      acc[acc.length - 1] = acc[acc.length - 1] + curr;
      return acc;
    }

    return [...acc, curr];
  }, []);

  return reducer;
}

// fancier solution with match ()

function solution2(str) {
  if (str === "") {
    return [];
  } else {
    let splitTwos = str
      .match(/\w{1,2}/g)
      .map((element) => (element.length == 2 ? element : element + "_"));
    return splitTwos;
  }
}
solution2("hola guapo");
