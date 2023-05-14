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

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (!functions.length) return x;

    let currentResult;

    for (let i = functions.length - 1; i >= 0; i--) {
      if (!currentResult) {
        currentResult = functions[i](x);
      } else {
        currentResult = functions[i](currentResult);
      }
    }

    return currentResult;
  };
};

/**
 * @param {Function} fn
 */
function memoize(fn) {
  let cache = new Map();

  return function (...args) {
    const vKey = JSON.stringify(args);
    const v = cache.get(vKey);

    if (v !== undefined) return v;

    const r = fn(...args);

    cache.set(vKey, r);
    return r;
  };
}

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let isCalled = false;

  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    }
  };
};

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((res, rej) => setTimeout(rej, t, "Time Limit Exceeded")),
    ]);
  };
};
