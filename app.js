Input: "A man, a plan, a canal: Panama";
Output: true;
Explanation: "amanaplanacanalpanama";
Input: "race a car";
Output: false;
Explanation: "raceacar";

function isPalindrome(string) {
  let newString = string.replace(/[^a-zA-Z]/g, "").toLowerCase().trim();
  let left = 0;
  let right = newString.length - 1;
  while (right > left) {
    if (newString[left] !== newString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log("res", isPalindrome("A man, a plan, a canal: Panama"));
console.log("res", isPalindrome("race a car"));

