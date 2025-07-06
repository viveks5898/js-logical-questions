function flattenArray(arr) {
  const n = arr.length;
  let store = [];
  for (let i = 0; i < n; i++) {
    const elements = arr[i];
    if (Array.isArray(elements)) {
    const flatten =  flattenArray(elements);
   store.push(...flatten)  
  } else {
      store.push(elements);
    }
  }
  return store;
}
console.log(
  "res",

  flattenArray([1, [2, 3], 4, [5, 6]])
);
