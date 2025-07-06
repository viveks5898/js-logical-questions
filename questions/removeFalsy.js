
// function removeFalsy (arr){
// const falseValue =[0,  false,  '', null, undefined, NaN]
// const n = arr.length;
// let newArr = []
// for(let i =0; i < n; i++){
// const ele = arr[i]
// if(!falseValue.includes(ele))newArr.push(ele)
// }
// return newArr
// }

// console.log('res',

//   removeFalsy([0, 1, false, 2, '', 3, null, undefined, NaN])
// )


function removeFalsy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeFalsy([0, 1, false, 2, '', 3, null, undefined, NaN]));
// Output: [1, 2, 3]
