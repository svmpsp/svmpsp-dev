import fs from "node:fs";
import path from "node:path";
import { getAssetsPath, pathMappings } from "../utils";

function getTitle(lessonFilename: string): string {
  const output = lessonFilename.replaceAll("-", " ").replace(".md", "");
  return output.charAt(0).toUpperCase() + output.slice(1);
}

function getLessonObject(lessonFilename: string): {
  id: string;
  title: string;
} {
  return {
    id: lessonFilename.slice(0, -3),
    title: getTitle(lessonFilename),
  };
}

export default defineEventHandler((event) => {
  const { locale, courseId } = getQuery(event);

  const pathPrefix = pathMappings.get(locale as string);
  if (!pathPrefix) {
    throw new Error(`invalid locale ${locale}`);
  }

  const courseDir = path.join(getAssetsPath(), pathPrefix, courseId as string);
  try {
    return fs
      .readdirSync(courseDir)
      .map((filename) => getLessonObject(filename));
  } catch (err) {
    console.log(err);
  }
});
