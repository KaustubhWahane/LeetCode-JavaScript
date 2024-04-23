function createHelloWorld () {
  return function helloWorld() {
      return "Hello World" ;
  };
}

const t1 = createHelloWorld();
console.log(t1())