/**Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

 */

// soln 01
function boolToWord(bool) {
  //...
  //   let yes,no;
  console.log("bool---------->", bool);
  if (bool === true) {
    console.log("YEssssssss------------>");
    return "Yes";
  } else return "No";
}

// soln 02
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// soln 03
function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else return "No";
}
