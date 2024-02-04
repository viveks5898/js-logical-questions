const arrayStor = ["as", "ca", "bp", "as", "as", "nn", "as"];

const RemoveDuplicateByFilter = (arrayStor) => {
  let data = arrayStor.filter((ele, i) => {
    console.log(arrayStor.indexOf(ele) === i);
    return arrayStor.indexOf(ele) == i;
  });
  return data;
};
const arrayStor = ["as", "ca", "bp", "as", "as", "nn", "as"];

const getDuplicatelength = (array) => {
  let obj = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!obj[element]) {
      obj[element] = 0;
    }
    console.log("ele :",obj[element])

    obj[element]++;
  }
  return obj;
};
// const arrayStor = ["as", "ca", "bp", "as", "as", "nn", "as"];

