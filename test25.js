// multiply the 2 number without using the inbuilt js function

let a = 5;
let b = 7;
sum = 0;
for (let i = 1; i <= b; i++) {
  sum = a + sum;
  console.log(sum);
}
return sum;

// calculate the length of string with out using the str length
var str = "amit";
console.log(str);
var str2 = str.split("");
sum = 0;
for (val in str2) {
  sum = sum + 1;
}

//// calculate the length of array with out using the array length
var str = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(str);
var str2 = str.split("");
total = 0;
for (val in str2) {
  total = total + 1;
}
