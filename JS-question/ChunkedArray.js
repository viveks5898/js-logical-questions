Question: "Classical Chunked Array problem";

const array = [1, 3, 2, 4, 3, 5, 2, 5];
const num = 3;
const chunkArray = (array, size) => {
  if (size <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);
    result.push(chunk);
  }
  return result;
};
// console.log("asd", chunkArray(array, num));

const ChunkFunc = ((arr, n) => {
  const chunked = [];
  for (let elem of arr) {
    let last = chunked[chunked.length - 1];

    console.log("last", last);

    console.log("chunked", chunked);

    if (!last || last.length === n) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  console.log(chunked);
  return chunked;
})([1, 3, 2, 4, 3, 5, 2, 5, 4], 4);
