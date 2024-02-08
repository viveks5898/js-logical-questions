const maxNumNumFunc = (array) => {
    let len = array.length;
    for (let index = 0; index < len; index++) {
      for (let j = 1; j < array.length; j++) {
        let tem = "";
        if (array[j] > array[j + 1]) {
          tem = array[j];
          array[j + 1] = array[j];
          array[j + 1] = array[j];
        }
      }
    }
    return array[len-1]
  };
  console.log("fir", maxNumNumFunc([2, 4, 1088, 33, 42, 42, 442, 121]));
  