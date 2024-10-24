import fs from "fs"
import path from "path"
import {v4 as uuid} from "uuid"

export default async function file_handler(file) {
  try {
    const blob = new Blob([file], { type: "image/png" });
    const buffer = Buffer.from(await blob.arrayBuffer());
    const file_name = uuid() + ".png";
    fs.writeFileSync(path.join(process.cwd(), "public", file_name), buffer);
    return file_name;
  } catch (error) {
    console.error("Error handling file:", error);
    throw error;
  }
}
