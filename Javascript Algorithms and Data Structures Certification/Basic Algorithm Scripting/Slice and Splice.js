//Insert all elements of arr1 in arr2 starting at index n

//create new arr x from all elements of arr2 with slice()
//use splice() to place all elements of arr1 in array x starting at index n
//return this new sliced and spliced array x
function frankenSplice(arr1, arr2, n) {
  let x = arr2.slice()
  x.splice(n, 0, ...arr1)
  return x
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
