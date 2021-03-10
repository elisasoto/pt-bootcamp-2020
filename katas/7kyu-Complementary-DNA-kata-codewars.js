// complimentary DNA

function DNAStrand(dna){
    const cToReplace = {
        A: 'T',
        T: 'A',
        C: 'G', 
        G: 'C'
    }
   const splitDNA = dna.split('')
   const replacedDNA = splitDNA.map(c => cToReplace[c])
   const joinedDNA = replacedDNA.join('')

    return joinedDNA
  }

console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))