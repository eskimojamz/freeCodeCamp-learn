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
  var output = { status: null, change: [] }
  var change = cash - price

  var totalCID = cid.reduce(function(acc, next){
    return acc + next[1]
  }, 0.0)

  if (totalCID < change) {
    output.status = "INSUFFICIENT_FUNDS"
    return output
  } else if (totalCID === change) {
    output.status = "CLOSED"
    output.change = cid
    return output
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
  
  if (result.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output
  }
  
  output.status = "OPEN";
  output.change = result;
  
  return output
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
