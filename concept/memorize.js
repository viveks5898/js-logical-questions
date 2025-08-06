function memorize(fn) {
  let context = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (context[key]) {
        console.log("cache")
      return context[key];
    } else {
        console.log("not  cache")

      let result = fn(...args);
      context[key] = result
      return result;
    }
  };
}
function sum(a, b) {
  return a + b;
}

let result = memorize(sum);
console.log("res", result(3, 4));
console.log("res", result(3, 4));
