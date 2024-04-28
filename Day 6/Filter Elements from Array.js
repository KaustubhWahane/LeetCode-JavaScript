/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
*/
var filter = function(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr > 10){
           filteredArr.push(fn[arr[i]]);
        }
        return filteredArr;
    }
};