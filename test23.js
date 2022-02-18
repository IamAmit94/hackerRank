/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */
// sol 01
// function isIsogram(str) {
//   //...
//   var i, j;
//   str = str.toLowerCase();
//   for (i = 0; i < str.length; i++) {
//     console.log("i---->", i);
//     for (j = i + 1; j < str.length; j++) {
//       console.log("j===========>", j);
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

//sol02
function isIsogram(str) {
  var temp = {};
  console.log("temp=====>", temp);
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    // console.log("i---->", i);
    if (temp[str[i]]) {
      console.log("inside If---------->", temp[str[i]]);

      return false;
    }
    console.log("outside If---------->", temp[str[i]]);

    temp[str[i]] = true;
  }
  return true;
}

const data = isIsogram("Dermatoglyphics"); //Dermatoglyphics
console.log(data);
