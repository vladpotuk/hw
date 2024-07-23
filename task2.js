function sumOfPositivesDivisibleByThree(arr) {
  return arr
    .filter((num) => num > 0 && num % 3 === 0)
    .reduce((sum, num) => sum + num, 0);
}

let arr2 = [3, 5, -9, 7, 2, 8, 10, -6];
let result2 = sumOfPositivesDivisibleByThree(arr2);
console.log(result2); // 3
