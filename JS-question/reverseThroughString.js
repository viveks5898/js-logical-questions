// reverse the string using for loop
const reverseThroughString = (str) => {
    let data = "";
    for (let ele of str) {
      data = ele + data;
    }
    return data;
  };
  