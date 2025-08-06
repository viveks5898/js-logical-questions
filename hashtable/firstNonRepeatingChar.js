function firstNonRepeatingChar(str) {
  let seen = new Map();
  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    if (!seen.has(str[i])) {
      seen.set(str[i], 1);
    } else {
      seen.set(str[i], seen.get(str[i]) + 1);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (seen.get(str[i]) == 1) {
      return i;
    }
  }
  return -1;
}

console.log("res", firstNonRepeatingChar("leetcode"));
console.log("res", firstNonRepeatingChar("loveleetcode"));
console.log("res", firstNonRepeatingChar("aabb"));
