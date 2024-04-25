/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initial = init;
    return {
        increment: function(){
          return init  = init + 1;
        },

        reset: function(){
            return init = initial;   
         },

        decrement: function(){
            return init  = init - 1;
        },
       
    }

};

  const counter = createCounter(5)
  counter.increment(); 
  counter.reset(); 
  counter.decrement(); 
 