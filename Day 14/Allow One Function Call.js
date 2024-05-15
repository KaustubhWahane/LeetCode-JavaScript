var once = function(fn) {
    let alreadyCalled = false;
    
    return function(...args) {
      if (!alreadyCalled) {
        alreadyCalled = true;
        return fn(...args);
      }
    };
  };
  
  let fn = (a, b, c) => (a + b + c);
  let onceFn = once(fn);
  
  console.log(onceFn(1, 2, 3)); // Output: 6
  console.log(onceFn(2, 3, 6)); // Output: undefined
  