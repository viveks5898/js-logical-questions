Input: (arr = [1, 2, 3, 4, 6]), (target = 6);
Output: true;
Explanation: "2 + 4 = 6";

function sumOfArrayTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    const sum = arr[left] + arr[right] ;
    if (sum== target) {
      return true;
    }else if(sum < target ){
    left++;

    }else{
    right--;
  }
}
  return false;
}
console.log("res", sumOfArrayTarget([1, 2, 3, 4, 6], 4));
