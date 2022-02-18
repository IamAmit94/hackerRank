/**
 * In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 * 
 * highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
 */

function highAndLow(numbers) {
  var numArray = numbers.split(" ");
  console.log(numArray);
  var max = Number(numArray[0]);
  var min = Number(numArray[0]);
  var num;

  for (var i = 1; i < numArray.length; i++) {
    num = Number(numArray[i]);

    if (num > max) max = num;
    if (num < min) min = num;
  }

  return max + " " + min;
}

const data = highAndLow("12345");
console.log(data);
