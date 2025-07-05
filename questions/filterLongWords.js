function filterLongWords(arr, minLength) {
  const n = arr.length;

  let filterArr = [];
  for (let i = 0; i < n; i++) {
    if (arr[i].length >= minLength) {
      filterArr.push(arr[i]);
    }
  }

  return filterArr;
}

console.log(filterLongWords(["hi", "hello", "sunshine", "cat"], 5));
