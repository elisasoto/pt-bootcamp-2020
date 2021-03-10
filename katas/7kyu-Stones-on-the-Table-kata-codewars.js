// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.
//Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

function solve(stones) {
  let counter = 0;
  const split = stones.split("");
  split.forEach((element, i) =>
    split[i + 1] === split[i] ? (counter += 1) : 0
  );
  return counter;
}

console.log(solve("RRRRGGGGBBBB"));
