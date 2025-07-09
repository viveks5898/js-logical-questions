Input: [0, 1, 0, 3, 12];
Output: [1, 3, 12, 0, 0];

function removeAllZerosEnd(input) {
  let firstIndex = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 0) {
      input[firstIndex] = input[i];
      firstIndex++;
    }
  }

  for (let i = firstIndex; i < input.length; i++) {
    input[i] = 0;
  }

  return input;
}

console.log("res", removeAllZerosEnd([0, 1, 0, 3, 12]));
