// -------------GET MIDDLE CHARACTER ------------------
//You are going to be given a word. Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  const divider = Math.ceil(s.length / 2);
  if (s.length % 2 == 0) {
    return s.substr(divider - 1, 2);
  } else {
    return s.substr(divider - 1, 1);
  }
}

getMiddle("a");
