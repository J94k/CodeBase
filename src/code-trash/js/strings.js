/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false

  const arr = magazine.split('')

  for (let i = 0; i < ransomNote.length; i++) {
    const l = ransomNote[i]
    const foundI = arr.indexOf(l)

    if (foundI === -1) return false

    arr[foundI] = undefined
  }

  return true
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const cleanS = s
    .split('')
    .filter((v) => v.match(/[a-zA-Z0-9]/))
    .join('').toLowerCase()

  let lI = cleanS.length - 1

  for (let i = 0; i <= lI; i++) {
    if (cleanS[i] !== cleanS[lI]) return false

    lI--
  }

  return true
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const m = new Map()
  const arrS = s.split(' ')

  if (pattern.length !== arrS.length) return false

  for (let i = 0; i < pattern.length; i++) {
    const l = pattern[i]
    const v = m.get(l)
    const w = arrS[i]

    if (v) {
      if (v !== w) return false
    } else {
      for (const [_, v] of [...m]) {
        if (v === w) return false
      }

      m.set(l, w)
    }
  }

  return true
};
