function findMax(arr) {

    let largestNUmber =  arr[0]
const n = arr.length;
 for(let i =1; i< n; i++){
if(largestNUmber < arr[i]){
    largestNUmber = arr[i]
}
 }

 return largestNUmber;
}


console.log("result",findMax([3, 8, 1, 12, 7]));
