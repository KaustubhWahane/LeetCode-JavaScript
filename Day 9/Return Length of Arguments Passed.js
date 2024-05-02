/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count = 0;
    for (let i = 0; i < args.length; i++) {
// Remember about the post increment
        args[i] = count++;
    }
    return count;
};

console.log(
  argumentsLength(1, 2, 3)
)