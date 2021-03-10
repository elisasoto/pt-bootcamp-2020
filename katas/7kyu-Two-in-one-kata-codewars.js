// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    const concatStrings = s1.concat('',s2)
    const splitStr = concatStrings.split('')
    const uniqueSorted = Array.from(new Set(splitStr)).sort()
    const joinedStr = uniqueSorted.join('')
    return joinedStr
  }

  console.log(longest("aretheyhere", "yestheyarehere"))
  console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
  console.log(longest("inmanylanguages", "theresapairoffunctions"))