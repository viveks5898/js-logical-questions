function isPalindrome(string) {
  const newString = string.split("").reverse().join("");
  return newString === string;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
