function maxSumSubarray(arr, k) {
  let maxNum = 0;
  const n = arr.length;
  for (let i = 0; i < k; i++) {
    maxNum += arr[i];
  }
  let newMax = maxNum;

  for (let i = 1; i <= n - k; i++) {
    maxNum = maxNum - arr[i - 1] + arr[i + k - 1];
    if (maxNum > newMax) {
      newMax = maxNum;
    }
  }
  return newMax;
}

console.log(
  "res",

  maxSumSubarray([2, 1, 5, 1, 3, 2], 3)
);
