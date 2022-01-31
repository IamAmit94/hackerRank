/**Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

// soln 01

function repeatStr(n, s) {
  let newString = [];
  for (let i = 0; i < n; i++) {
    newString.push(s);
  }
  return newString.join("");
}

// soln 02

function repeatStr(n, s) {
  return s.repeat(n);
}
