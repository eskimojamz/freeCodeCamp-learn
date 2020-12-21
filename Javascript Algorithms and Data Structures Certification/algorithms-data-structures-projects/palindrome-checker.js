function palindrome(str) {
  var testStr = str
    .replace(/[\W_]/g, "")
    .split(" ")
    .join("")
    .toLowerCase()
  var reverseStr = testStr
    .split("")
    .reverse()
    .join("")
  return testStr === reverseStr
}

console.log(palindrome("A man, a plan, a canal. Panama"));
//returns true
