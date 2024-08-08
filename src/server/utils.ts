import path from "node:path";

export function getAssetsPath(): string {
  return path.join("src", "assets");
}

export const pathMappings = new Map([
  ["en", "en/courses"],
  ["it", "it/corsi"],
]);
