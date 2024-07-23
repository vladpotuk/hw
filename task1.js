function checkAndConvertToPositive(arr) {
  let hasNegative = arr.some((num) => num < 0);
  if (hasNegative) {
    return arr.map((num) => Math.abs(num));
  } else {
    return "No negative numbers found";
  }
}

let arr1 = [3, -2, 5, 6, -8, 2];
let result1 = checkAndConvertToPositive(arr1);
console.log(result1);
