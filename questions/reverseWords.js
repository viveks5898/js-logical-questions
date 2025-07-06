function reverseWords(str){
let newStr = str.split(' ')
let store = []
for(let i =0 ; i < newStr.length; i++){
  store.unshift(newStr[i])
}
return store.join(' ')
}

console.log(reverseWords("JavaScript is fun"))