const returnEvenArr = (array) => {
  let store = [];
  for (let ele of array) {
    if (ele % 2 == 0) {
      store.push(ele);
    }
  }
  return store;
};

const arr = [1, 41, 2, 3, 9, 4, 5, 6];
console.log("first", returnEvenArr(arr));
