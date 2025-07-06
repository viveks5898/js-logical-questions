 function chunkArray(arr, size){
  let store = []
  const n =  arr.length;
  for(let i =0;  i < n ; i += size){
    const  value = arr.slice(i,i+size)
  store.push(value)  
  }
  return store
 }


console.log("res::", chunkArray([1, 2, 3, 4, 5], 2));
// Output: [[1, 2], [3, 4], [5]]
