const destroyer = (arr, ...check) => 
  arr.filter(item => !check.includes(item))

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
