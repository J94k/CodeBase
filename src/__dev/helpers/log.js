import fs from "node:fs/promises";

export async function logError(error) {
  const logs = "__log.txt";

  try {
    const result = await fs.writeFile(
      logs,
      `error msg: ${error?.message || "Unknown error"}; date: ${new Date()};\n`,
      { flag: "a+" }
    );

    console.log(result);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
