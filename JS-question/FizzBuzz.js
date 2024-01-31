((num) => {
    console.log("num", num);
    for (let index = 1; index <= num; index++) {
      let output = '';
  
      if (index % 3 === 0 && index % 5 === 0) {
        output += "fizzBuzz";
      }
      else if (index % 3 === 0) {
        output += "fizz";
      }
      else if (index % 5 === 0) {
        output += "buzz";
      }
      else {
        output += index;
      }
  
      console.log(output);
    }
  })(15);
  function fizzBuzz(num) {
    let count = "";
    for (let index = 1; index <= num; index++) {
      let output = "";
      if (index % 3 == 0) {
        output += "Fizz";
      }
      if (index % 5 == 0) {
        output += "Buzz";
      }
      if (output === "") {
        output += index;
      }
      count += output + " ";
    }
    return count.trim();
  }
  
  console.log(fizzBuzz(6));
    