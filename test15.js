/**Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

 */

// soln 01
function even_or_odd(number) {
  console.log("number----------->", number);
  //   let a = number%2;
  //   console.log('a---->',a)
  if (parseInt(number) % 2 == 0) {
    return "Even";
  } else return "Odd";
}

// soln 02
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
