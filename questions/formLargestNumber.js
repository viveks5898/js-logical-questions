function formLargestNumber(arr) {
  const strArr = arr.map(String);

  strArr.sort((a, b) => {
    const ab = a + b;
    const ba = b + a;
    if (ab > ba) return -1;  // a should come first
    if (ab < ba) return  1;  // b should come first
    return 0;                // they’re equal
  });

  if (strArr[0] === "0") return "0";

  return strArr.join("");
}
console.log(formLargestNumber([3, 30, 34, 5, 9]));  // "9534330"
