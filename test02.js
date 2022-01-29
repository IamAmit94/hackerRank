/**Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
   */

// soln 01
function countSheeps(arrayOfSheep) {
  //   console.log('arrayOfSheep------>',arrayOfSheep.length
  //              )

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      //         console.log('Sheep Present----->')
      let total = arrayOfSheep.filter(Boolean).length;
      console.log("total------->", total);
      return total;
    }
  }
}
// || filter(Boolean) => will calculte the total number of boolean in the array

// soln 02

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
