function addTogether(...args) {
  var args = [...args]
  return args.some(n => typeof n !== "number")
    ? undefined
    : args.length > 1
      ? args.reduce((sum, n) => sum += n, 0)
      : n => typeof n == "number" ? args[0] += n : undefined
}

addTogether(2,3);
