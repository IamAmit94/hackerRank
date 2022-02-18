/**
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

 */

// function solution(str, ending){
//     return str.endsWith(ending);
//   }

// function solution(str, ending){
//   return str.indexOf(ending, str.length - ending.length) !== -1;
// }

function solution(str, ending) {
  // TODO: complete
  //   return str.indexOf(ending, str.length - ending.length) !== -1;
  let a = str.split("");
  let b = ending.split("");
  //   console.log("a=======>", a, "b========>", b);
  let result = str.length - ending.length;
  //   console.log(result);

  let matchStr = "";
  for (let i = result; i < str.length; i++) {
    // console.log("ending--->", ending[k]);
    //

    matchStr = matchStr + a[i];
  }
  if (matchStr === ending) {
    return "true";
  } else {
    return "false";
  }
}

const data = solution("abcde", "cde");
console.log("data-------->", data);
// solution('abcde', 'abc');
