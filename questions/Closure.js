
function createCounter() {
  let i = 0;
  return {
    increment: () => ++i,
    decrement: () => --i,
    reset: () => 0,
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
