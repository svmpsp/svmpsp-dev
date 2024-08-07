import fs from "node:fs";
import path from "node:path";

export function getAssetsPath(): string {
  return path.join("src", "assets");
}
