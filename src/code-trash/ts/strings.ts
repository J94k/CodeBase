function isSubsequence(s: string, t: string): boolean {
  let buildedStr = "";
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
  let result = "";
  let counter = 0;

  for (const c of s.split('')) {
    if (result.includes(c)) {
      const existingCounter = result[result.indexOf(c) + 1];

      result += `${c}${existingCounter}`;
    } else {
      result += `${c}${counter}`;
      counter++;
    }
  }

  return result.replace(/[a-z]/g, "");
}

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return replaceCharsWithNums(s) === replaceCharsWithNums(t);
}