Question: "Implement a Function to Find the Maximum Occurring Character in a String";

const maxOccurringChar = (str) => {
  let obj = {};
  let count = "";
  for (let index = 0; index < str.length; index++) {
    let key = str[index];
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key]++;
    if (count == "" || obj[key] > obj[count]) {
      count = key;
    }
  }
  return count;
};
console.log(maxOccurringChar("hello"));
