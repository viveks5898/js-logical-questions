function sumOfArrayTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return true;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;  // If no pair found
}
