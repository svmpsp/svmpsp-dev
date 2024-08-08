import fs from "node:fs";
import path from "node:path";
import { getAssetsPath, pathMappings } from "../utils";

function getCourseObject(courseDir: string): {
  description: string;
  id: string;
  title: string;
} {
  return {
    id: courseDir,
    title: getCourseTitle(courseDir),
    description: "hello world",
  };
}

function getCourseTitle(courseDir: string): string {
  const replaced = courseDir.replaceAll("-", " ");
  return replaced.charAt(0).toUpperCase() + replaced.slice(1);
}

export default defineEventHandler((event) => {
  const locale = getQuery(event).locale as string;

  const pathPrefix = pathMappings.get(locale);
  if (!pathPrefix) {
    throw new Error(`invalid locale ${locale}`);
  }

  const coursesDir = path.join(getAssetsPath(), pathPrefix);
  try {
    return fs
      .readdirSync(coursesDir)
      .map((filename) => getCourseObject(filename));
  } catch (err) {
    console.log(err);
  }
});
