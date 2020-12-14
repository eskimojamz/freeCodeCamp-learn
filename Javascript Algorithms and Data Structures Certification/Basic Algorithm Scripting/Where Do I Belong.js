//index of num, so that it fits in to the array in numerical order 

//filter(), for length of (x of arr) in which x is less than num 
function getIndexToIns(arr, num) {
  return arr.filter(x => x < num).length
}

getIndexToIns([40, 60], 50);
