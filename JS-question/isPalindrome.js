const isPalindrome = (asd) => {
    let convertArray = asd.split("");
    let convertArrayReverse = asd.split("").reverse();
    console.log();
    for (let i = 0; i < convertArray.length; i++) {
      for (let j = 0; j < convertArrayReverse.length; j++) {
        if (convertArray[i] == convertArrayReverse[j]) {
          return true;
        }
        return false;
      }
    }
  };
  const isPalindromes = (str) => {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  
    return cleanStr === cleanStr.split("").reverse().join("");
  };
  console.log(isPalindromes("racecar"));
  console.log(isPalindromes("A man, a plan, a canal, Panama!"));
  console.log(isPalindromes("hello"));
  