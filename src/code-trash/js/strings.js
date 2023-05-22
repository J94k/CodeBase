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