var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const isExist = this.cache.get(key);

  this.cache.set(key, {
    value,
    duration,
    start: Date.now(),
  });

  return !!isExist;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  let item = this.cache.get(key);

  if (item?.value && item.start + item.duration >= Date.now()) {
    return item.value;
  }

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let counter = 0;

  this.cache.forEach((v) => {
    if (v.start + v.duration >= Date.now()) {
      counter++;
    }
  });

  return counter;
};
