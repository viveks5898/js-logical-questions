
function removeDuplicates(arr) {
  const n = arr.length;

  let store = [];
  let obj = {};
  for (let i = 0; i < n; i++) {
    const element = arr[i];
    if (!obj[element]) {
      obj[element] = element;
      store.push(element);
    }
  }
  return store;
}
console.log("res", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
