function countChar(arr, letter) {
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log("res:", countChar("banana", "a"));
