/**Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
 * 
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */

// sol 01
function descendingOrder(n) {
  const a = n.toString();

  const b = a
    .split("")
    .sort((a, b) => b - a)
    .join("");
  console.log("b------>", typeof b);

  const c = parseInt(b);

  return c;
}

const a = descendingOrder(1235678);
console.log(a);

// Soln 02
function descendingOrder(n) {
  let convertN = n.toString();

  let newArray = convertN.split("");

  let sortArray = newArray.sort();

  let reverseArray = sortArray.reverse();

  let joinArray = reverseArray.join("");

  let backNumber = parseInt(joinArray);

  return backNumber;
}

const a = descendingOrder(1235678);
console.log(a);
