
function addMatrices(A, B) {
  const n = A.length;

  if (!A.every(row => row.length === n) ||
      !B.every(row => row.length === n)) {
    throw new Error("Both A and B must be n×n matrices");
  }



  const C = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }

  return C;
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const B = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

const C = addMatrices(A, B);
console.log(C);
