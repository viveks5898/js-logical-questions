function findLongestWord(str) {
  str = str.split(' ')
  const n = str.length
  let count = 0;
  for (let i = 0; i < n; i++) {
    if(count < str[i].length){
      count = str[i].length
    }
  }

  return count
}

console.log(findLongestWord("I love programming in JavaScript")
)