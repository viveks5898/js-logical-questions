const arrayStor = ["as", "ca", "bp", "as", "as", "nn", "as"];

const getDuplicatelength = (array) => {
  let obj = {};
  let maxKey = "";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!obj[element]) {
      obj[element] = 0;
    }
    obj[element]++;
    if (maxKey == "" || obj[element] > obj[maxKey]) {
      maxKey = element;
    }
  }
  return maxKey;
};
console.log("data :", getDuplicatelength(arrayStor));
