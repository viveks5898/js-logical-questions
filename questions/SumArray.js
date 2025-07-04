function sumArray(arr) {
    let sum = 0;
    const n = arr.length;
    for(let i= 0; i < n; i++ ){
        sum += arr[i]
    }
return sum
}

console.log("res:", sumArray([3, 4, 5, 64, 32, 2]));
