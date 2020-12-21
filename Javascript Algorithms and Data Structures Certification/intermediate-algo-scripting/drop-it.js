function dropElements(arr, func) {
  var loop = arr.length
  for (let i = 0; i < loop; i++) {
    if (func(arr[0])) {
      break
    } else {
      arr.shift()
    }
  }
  return arr
}

console.log(dropElements([5, 2, 3], function(n) {return n < 3; }));
