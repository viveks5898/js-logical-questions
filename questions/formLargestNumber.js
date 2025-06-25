function formLargestNumber(arr) {
  // 1) build array of strings
  const strArr = arr.map(String);

  // 2) custom sort:
  strArr.sort((a, b) => {
    // try placing a before b and b before a
    const ab = a + b;
    const ba = b + a;
    if (ab > ba) return -1;  // a should come first
    if (ab < ba) return  1;  // b should come first
    return 0;                // they’re equal
  });

  // 3) edge-case: all zeroes => “0” instead of “000…”
  if (strArr[0] === "0") return "0";

  // 4) join into one big string
  return strArr.join("");
}
