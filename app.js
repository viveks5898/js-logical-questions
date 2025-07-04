

const arrOfElement = [2,35,5,2,5,6,7]

 function fetchEvenNUm(arr){

    const n = arr.length;
   let store = []
    for(let i=0; i <n; i++){
   if(arr[i] % 2 === 0){

    store.push(arr[i])
   }

    }

    return store

 }

 console.log("res:", fetchEvenNUm(arrOfElement))