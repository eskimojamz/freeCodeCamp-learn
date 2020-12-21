// Create an array of objects which hold the denominations and their values
var denominations = [
  { name: "ONE HUNDRED", val: 100.00 },
  { name: "TWENTY", val: 20.00 },
  { name: "TEN", val: 10.00 },
  { name: "FIVE", val: 5.00 },
  { name: "ONE", val: 1.00 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.10 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  
  var change = cash - price

  var totalCID = cid.reduce(function(acc, next){
    return acc + next[1]
  }, 0.0)

  if (totalCID < change) {
    return "INSUFFICIENT_FUNDS"
  } else if (totalCID === change) {
    return "CLOSED"
  }

  cid = cid.reverse()

  var result = denominations.reduce(function(acc, next, index){
    if (change >= next.val){
      var currentVal = 0.0
      while (change >= next.val && cid[index][1] >= next.val) {
        currentVal += next.val
        change -= next.val
        change = Math.round(change * 100) / 100
        cid[index][1] -= next.val
      }
      acc.push([next.name, currentVal])
      return acc
    } else {
      return acc
    }
  }, [])
  console.log(result)
  return result.length > 0 && change === 0 ? result : "INSUFFICIENT FUNDS"
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
