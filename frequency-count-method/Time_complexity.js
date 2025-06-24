// ?? First Case
// lets discuss about the time complexity -

for (let i = 0; i < 4; i++) {
  // n + 1
  // this  loop is working inside n time
  // so f(N) = n the time  complexity of this loop On
}


for (let i = 4; i < 0; i--) {
  // n + 1
  // this  loop is working inside n time
  // so f(N) = n the time  complexity of this loop On
  // this condition also have the On time complexity
}

for (let i = 0; i < 4; i + 2) {
  // n + 1  if its increase by 2 or 20 no matter f(N) =n/2 or n/20  the TC will be ON
  // this  loop is working inside n time
  // so f(N) = n the time  complexity of this loop On
  // this condition also have the On time complexity
}
// ?? Second Case

//  i    j                              no. of times
//  0    0X break loop start again      0
//  1    0 Y
//       1 X                             1
// 2     0Y
//       1 Y                             2

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}

// we have one more example of O(root n)

p = 0;
for (i = 1; p <= 100 ; i++) {
  p = p + i;
}

console.log(p);

let p = 0;
for (let i = 1; i <= 100; i++) {
  p = p + 1;
}
