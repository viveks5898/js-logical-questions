
function findMin(arr){
  const n =arr.length;
  let minValue = arr[0]
  for(let i= 1; i < n; i++){
    if(minValue > arr[i]){
      minValue = arr[i]
    }
  }

  return minValue
}
console.log("res", findMin([3,4,2,15,6,7]))