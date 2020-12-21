const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    if (sol % i) { //Is there a remainder?//
      sol += max;
      i = max;
    }
  }
  return sol;
};


console.log(smallestCommons([1,5]));
