
function duplicateNumber(arr){

  let newStore = new Map()
  const n = arr.length;
   for(let i =0; i < n; i++ ){
    if(!newStore.has(arr[i])){
      newStore.set( arr[i],true )
    }else{

      return true
    }
    
   }
   return false
}

console.log("arr", duplicateNumber([1, 2, 3, 1]))
console.log("arr", duplicateNumber([1, 2, 3, 4]))
console.log("arr", duplicateNumber([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
