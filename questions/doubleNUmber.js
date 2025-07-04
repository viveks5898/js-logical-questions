

function doubleNUmber(arr){

    const n = arr.length;
    let newArr = []
    for(let i =0; i < n; i++){
    const element = arr[i] * 2;
    newArr.push(element)

    }
    return newArr

}

console.log("res", doubleNUmber([1,2,4,5,5]))