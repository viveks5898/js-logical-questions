

function sumOfUnique(arr){
  const n = arr.length;
  let obj={}
  for(let i =0; i < n;i++){

    if(!obj[arr[i]]){
      obj[arr[i]] = true
    }else{
      obj[arr[i]] = false

    }
  }
let sum = 0;
  for(let num of arr ){
   if(obj[num] == true){
    sum += num
   } 

  }
  return sum
}


console.log("res",

sumOfUnique([1, 2, 2, 3, 4, 4, 5])

)