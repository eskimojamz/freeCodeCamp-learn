function translatePigLatin(str) {
  let consonants = str.match(/^[^aeiou]+/)
  return consonants == null 
    ? str.concat('way')
    : str
      .replace(/^[^aeiou]+/, "")
      .concat(consonants)
      .concat('ay')

}

console.log(translatePigLatin("consonant"));
