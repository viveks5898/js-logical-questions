const arrayStor = ['as',"ca", "bp", "as", "as", "nn","as"];

const RemoveDuplicateByFilter = (arrayStor) => {
  let data = arrayStor.filter((ele, i) => {
   console.log(arrayStor.indexOf(ele) === i)
    return arrayStor.indexOf(ele) == i;
  });
  return data;
};
console.log("data :", RemoveDuplicateByFilter(arrayStor));
