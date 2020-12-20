const uniteUnique = (...arr) => [...new Set(arr.flat())]
//es6

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
