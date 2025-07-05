containsValue// Output: true
 function containsValue (arr, num){
const n = arr.length;
  for(let i =0; i < n; i++){
    if(arr[i] === num)
      return true;
  }

  return false;

 }

console.log("res", 
containsValue([1, 2, 3, 4, 5], 3)

)

console.log("res 1",

containsValue([1, 2, 3, 4, 5], 7)

)