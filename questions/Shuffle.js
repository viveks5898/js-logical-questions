function shuffle(array) {
  // 1. Make a shallow copy so we don’t mutate the original input:
  const data = array.slice();

  // 2. Starting from the end of the array, move backwards:
  for (let i = data.length - 1; i > 0; i--) {
    // 3. Pick a random index j between 0 and i (inclusive):
    const j = Math.floor(Math.random() * (i + 1));
    // 4. Swap the elements at positions i and j:
    [data[i], data[j]] = [data[j], data[i]];
  }

  // 5. Return the shuffled copy:
  return data;
}


//For the purpose of user debugging.
console.log("shuffle", shuffle([1, 2, 3, 4, 5]));
