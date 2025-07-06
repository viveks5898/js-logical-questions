function sumNestedArray(arr) {
  let sum = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (Array.isArray(arr[i])) {
      const ele = sumNestedArray(arr[i]);
      sum += ele;
    } else {
      sum += arr[i];
    }
  }

  return sum;
}

console.log("res::", sumNestedArray([1, [2, [3, 4], 5], 6]));
