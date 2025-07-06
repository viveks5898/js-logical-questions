function isPalindrome(string) {
  const newString = string.split("").reverse().join("");
  return newString === string;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));


function isPalindrome(str) {
  let newStr = str.toLowerCase().replace(/\s+/g, "");
  let reverseString = newStr.split("").reverse().join("");
  return (newStr === reverseString);
}
console.log('res 1::', isPalindrome("Race car")); // true
console.log('res 2::', isPalindrome("A man a plan a canal Panama")); // true
console.log('res 3::', isPalindrome("No lemon no melon")); // true
console.log('res 4::', isPalindrome("Was it a car or a cat I saw")); // true

console.log('res 5::', isPalindrome("Hello")); // false
console.log('res 6::', isPalindrome("JavaScript")); // false
console.log('res 7::', isPalindrome("Not a palindrome")); // false
