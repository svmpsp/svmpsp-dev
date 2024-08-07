import fs from "node:fs";
import path from "node:path";
import { getAssetsPath } from "../utils";

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
  const query = getQuery(event);
  const courseId = query.c as string;
  const courseDir = path.join(getAssetsPath(), "courses", courseId);
  try {
    return fs
      .readdirSync(courseDir)
      .map((filename) => getLessonObject(filename));
  } catch (err) {
    console.log(err);
  }
});
