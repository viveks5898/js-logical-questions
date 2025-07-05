function sumEvenNumbers(arr) {
  let sum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum
}


console.log("res", 
sumEvenNumbers([1, 2, 3, 4, 5, 6])

)