function sumAll(arr) {
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let sum = 0
  for (let i = min; i <= max; i++) {
      sum = sum + i
    }
  return sum
}

console.log(sumAll([1, 4]));
