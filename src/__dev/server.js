import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sha512 } from "./helpers/hash.js";

dotenv.config();

const { PORT, ADMIN_NAME, ADMIN_HASH } = process.env;

const app = express();

app.disable("x-powered-by");
app.use(
  cors({
    origin: false,
    methods: ["POST"],
  })
);
app.use(express.json());

app.post("/login", (req, res) => {
  if (!req.body || !req.body.password || !req.body.username) {
    res.status(400).send({ msg: "invalid" });
    return;
  }

  const { username, password } = req.body;

  if (username !== ADMIN_NAME) {
    res.status(400).send({ msg: "not registered" });
    return;
  }

  try {
    const hash = sha512(password);

    if (hash === ADMIN_HASH) {
      res.status(200).send({ msg: "success" });
    } else {
      res.status(403).send({ msg: "forbidden" });
    }
  } catch (error) {
    res.status(500).send({ msg: "fail" });
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
