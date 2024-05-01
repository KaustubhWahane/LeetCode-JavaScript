/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // If the array length be zero
    if(functions.length === 0){
        return function(x){
            return x;
        } 
    }
    return functions.reduceRight((composed, func) => {
        return (x) => func(composed(x));
    });
};

 const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(4));