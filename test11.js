/** You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

// soln 01
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  console.log("sq----------->", sq);
  if (Number.isInteger(Math.sqrt(sq)))
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
  else return -1;
}

// soln 02
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

// soln 03
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
