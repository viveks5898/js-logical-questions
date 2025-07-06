function countFrequency(arr) {
  const n = arr.length;
  let obj = {};
  for (let i = 0; i < n; i++) {
    const ele = arr[i];

    if (!obj[ele]) obj[ele] = 1;
    else{
      obj[ele]++
    }
  }
return obj
}

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
