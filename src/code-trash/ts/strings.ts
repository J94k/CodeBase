function isSubsequence(s: string, t: string): boolean {
  let buildedStr = '';
  let target = s;

  for (const char of t.split('')) {
    const targetChar = target[0];

    if (char === targetChar) {
      buildedStr += char;
      target = target.slice(1);
    }
  }

  return buildedStr === s;
}

function replaceCharsWithNums(s: string): string {
  let result = '';
  let counter = 0;

  for (const c of s.split('')) {
    // @ts-ignore
    if (result.includes(c)) {
      const existingCounter = result[result.indexOf(c) + 1];

      result += `${c}${existingCounter}`;
    } else {
      result += `${c}${counter}`;
      counter++;
    }
  }

  return result.replace(/[a-z]/g, '');
}

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return replaceCharsWithNums(s) === replaceCharsWithNums(t);
}

function lengthOfLastWord(s: string): number {
  const noSpacePaddingStr = s.trim();
  const match: RegExpMatchArray | null = noSpacePaddingStr.match(/ ([^ ]*?)$/);

  if (match) {
    return match[0].slice(1).length;
  }

  return noSpacePaddingStr.length;
}

function strStr(haystack: string, needle: string): number {
  const index = haystack.match(new RegExp(needle))?.index;

  return !needle ? 0 : index !== undefined ? index : -1;
}

function isPalindrome(s: string): boolean {
  if (s.trim().length < 2) return true;

  const cleanS = s.toLowerCase().match(/[a-z0-9]/g);

  if (!cleanS) return true;

  const middle = Math.floor(cleanS.length / 2);
  const left = cleanS.slice(0, middle).join('');
  const right = cleanS
    .slice(middle + (cleanS.length % 2 !== 0 ? 1 : 0))
    .reverse()
    .join('');

  return left === right;
}
