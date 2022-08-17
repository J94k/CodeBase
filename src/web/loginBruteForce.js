import fs from "node:fs/promises";
import config from "./config.json" assert { type: "json" };

function sleep(ms) {
  return new Promise((resolve) => new setTimeout(resolve, ms));
}

function writeResult(result) {
  fs.writeFile("result.txt", result, "a+");
}

// @todo implement
function generatePassword() {
  return "";
}

async function main({
  serverURI,
  attempts,
  chars,
  attemptTimeout = 0,
  maxPassLength,
}) {
  if (!attempts) return;

  let username = "admin";
  let password = "";

  if (attempts === true) {
    attempts = Infinity; // until we get the result or ban
  }

  try {
    for (let i = 0; i < attempts; i += 1) {
      await sleep(attemptTimeout);

      const response = await fetch(serverURI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).catch((err) => console.error(err));

      if (response.statusCode === 200) {
        console.log("> Success <");
        writeResult(`username: ${username}; password: ${password}`);
        break;
      } else {
        password = generatePassword();

        if (password.length >= maxPassLength) {
          console.log("Max pass length exceeded");
          break;
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}

main(config);
