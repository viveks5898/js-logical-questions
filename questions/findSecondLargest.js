function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null; // or throw error
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(findSecondLargest([3, 5, 1, 7, 9, 2])); // 7
