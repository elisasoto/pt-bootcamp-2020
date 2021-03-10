//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.

// solution 1: USING FOR

function disemvowel(string) {

    var withoutVowels = "";
    for (var i = 0; i < string.length; i++) {
        if (!isVowel(string[i])) {
          withoutVowels += string[i];
        }
      }
      console.log(withoutVowels);
  }
  
  function isVowel(char) {
    return 'aeiou'.includes(char);
  }
  
  disemvowel('This website is for losers LOL!');

  // solution 2: USING REGEX && REPLACE
function disemvowel2(str) {
    const vowels = /[aeiouAEIOU]/gi;
    const replaceVowels = str.replace(vowels, '')
    return replaceVowels
} 
disemvowel2('This website is for losers LOL!')

