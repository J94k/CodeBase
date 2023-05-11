/**
 * @return {Function}
 */
var createHelloWorld = () => () => "Hello World";

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let c = init;

  return {
    increment() {
      return ++c;
    },
    decrement() {
      return --c;
    },
    reset() {
      return (c = init);
    },
  };
};
