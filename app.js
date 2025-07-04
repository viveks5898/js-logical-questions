// function findMax(arr) {

//     let largestNUmber =  arr[0]
// const n = arr.length;
//  for(let i =1; i< n; i++){
// if(largestNUmber < arr[i]){
//     largestNUmber = arr[i]
// }
//  }

//  return largestNUmber;
// }


function findMax(arr){
    const element = Math.max(arr);
    console.log("ele", element)

}
console.log("result",findMax([3, 8, 1, 12, 7]));
