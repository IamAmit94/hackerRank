/**Simple, remove the spaces from the string, then return the resultant string.

 */

// soln 01
function noSpace(x) {
  console.log("x------->", x);
  const a = x.split(" ").join("");
  console.log("a------>", a);
  return a;
  //   return x.split(" ").join('')
}
