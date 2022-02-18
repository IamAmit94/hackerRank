/**
 *
 * Unique elements in array
 * [2,5,7,8,2,5,4,2]
 * [2,5,7,8,4]
 */

function uniqueArray(array) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    console.log("array[i]==========>", array[i]);
    if (temp.length) {
      let eleExist = false;
      for (let j = 0; j < temp.length; j++) {
        console.log("j------->");
        if (array[i] == temp[j]) eleExist = true;
      }
      if (!eleExist) {
        temp.push(array[i]);
      }
    } else {
      temp.push(array[i]);
    }
  }
  return temp.length;
}

const data = uniqueArray([2, 5, 7, 8, 2, 5, 4, 2]);
console.log(data);
