//return squared numbers of positive real numbers from an array

const squareList = arr => {
  // Only change code below this line
  let posRealNums = arr
    .filter(num => 
      num % 1 == 0 && num > 0)
  
  let sqNums = posRealNums 
    .map(rnum => 
      rnum * rnum)
  
  return sqNums 
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
