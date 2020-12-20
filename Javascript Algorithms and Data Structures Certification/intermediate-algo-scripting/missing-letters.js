function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    var iCode = str.charCodeAt(i)
    if (iCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(iCode - 1)
    }
  }
  return undefined
}

console.log(fearNotLetter("abce"));
