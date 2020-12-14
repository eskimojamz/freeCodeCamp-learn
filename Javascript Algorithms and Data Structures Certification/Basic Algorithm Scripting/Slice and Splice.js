function frankenSplice(arr1, arr2, n) {
  let x = arr2.slice()
  x.splice(n, 0, ...arr1)
  return x
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
