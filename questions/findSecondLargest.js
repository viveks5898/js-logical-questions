function findSecondLargest(arr) {
  const n = arr.length;
  let firstLarge = arr[0];
  let secondLarge = 0;
  for(let i =1 ; i < n; i++){

    if(arr[i] > firstLarge && secondLarge < firstLarge){
      secondLarge = firstLarge;
      firstLarge = arr[i]
    }
  }
  return secondLarge
}

console.log(findSecondLargest([3, 5, 1, 7, 9, 2]));
