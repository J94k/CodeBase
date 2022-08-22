import fs from "node:fs/promises";

function sleep(ms) {
  return new Promise((resolve) => new setTimeout(resolve, ms));
}

function writeResult(result, file) {
  fs.writeFile(file, result, "a+");
}

function createPassGen(chars) {
  let currentCharIndex = 0,
    currentPass = "";

  return () => {
    currentPass += chars[currentCharIndex];
    currentCharIndex++;

    return currentPass;
  };
}

export default {
  sleep,
  writeResult,
  createPassGen,
};
