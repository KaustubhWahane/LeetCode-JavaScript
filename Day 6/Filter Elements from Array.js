/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/

// Case 1 solved
var filter = function(arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(fn(arr[i]) == true){
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
