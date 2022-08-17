import crypto from "node:crypto";
import { logError } from "./log.js";

export function sha512(input) {
  try {
    return crypto.createHash("sha512").update(input).digest("hex");
  } catch (error) {
    logError(error);
    return "";
  }
}
