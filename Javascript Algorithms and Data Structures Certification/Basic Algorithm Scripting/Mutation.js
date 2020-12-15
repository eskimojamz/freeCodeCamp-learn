function mutation(arr) {
  let x = arr[0].toLowerCase();
  let y = arr[1].toLowerCase();
  for (let i = 0; i < y.length; i++) {
    if (x.indexOf(y[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
