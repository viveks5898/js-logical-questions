function capitalizeWords (str){

  let newStr = str.split(' ')
  let newStore =[]
  for(let i  =0 ; i < newStr.length; i++){
    const element = newStr[i].charAt(0).toUpperCase()
 newStore.push(`${element}${newStr[i].slice(1, newStr[i].length)}`)
  }

  return newStore.join(' ')
}


console.log("res::",
capitalizeWords("hello world from javascript")


)