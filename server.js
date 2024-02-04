Question: "write a function to check two numbers and return true if one of the number is 100 and is the sum of two number is 100"

function checkNumberSum(a,b){
if(a ==100 || b==100){
  return true
}if(a + b ==100){
return true
}
return false
}
console.log(checkNumberSum(40,60))