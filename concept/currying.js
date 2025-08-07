function calculateVolume(length, width, height) {
  return length * width * height;
}

function calculateVolumeCurrying(length) {
  return function (width) {
    return function (height) {
      return length * width * height;
    };
  };
}

console.log(calculateVolume(2, 3, 4)); // 24
console.log(calculateVolumeCurrying(2)(3)(7)); // 24
