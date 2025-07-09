function removeDupOfSortedArr(arr){
 let i = 0;
 let j =  i + 1;
 
 while(i  < arr.length -1){
   if(arr[i] !== arr[j]){
    arr[j] = arr[i + 1]
 i++

   }
 }

 return arr
}