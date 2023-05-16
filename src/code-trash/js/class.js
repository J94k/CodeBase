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

// ------------------

/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
  this.rect = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  for (let r = row1; r <= row2; r++) {
    for (let c = col1; c <= col2; c++) {
      this.rect[r][c] = newValue;
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.rect[row][col];
};
