/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  return  function toBe(){
        if(val === val){
            console.log({"value": true});
        } 
    }
     
    function notToBe(){
        if(val === val){
            console.log({"value": true});
        } 
    }
};

  expect(5).toBe(5); // true
  expect(5).notToBe(5); // throws "Equal"