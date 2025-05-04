// Input: "JavaScript is fun"
// Output: 5

function CountVowels(str) {
  let count = 0;
  let vowels = ["a", "i", "o", "e", "u"];
  str = str.split('')
 let strLength = str.length;
  for(let i=0; i< strLength ; i++){
    if(vowels.includes(str[i]))
        count = count + 1
  }

  return count
  
}

module.exports = CountVowels;
