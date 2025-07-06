
function getIntersection(arr1, arr2){
  if(arr1.length !== arr2.length){
    return "Arrays should have same length"
  }
  let newArr = []
  for(let i =0; i < arr1.length; i++){
    for(let j= 0; j <arr2.length; j++){

      if(arr1[i]===arr2[j]){
        newArr.push(arr1[i])
      }
    }
  }
return newArr
}
console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6])
)