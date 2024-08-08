import fs from "node:fs";
import path from "node:path";
import showdown from "showdown";
import { getAssetsPath, pathMappings } from "../utils";

function markdown2HTML(markdowStr: string): string {
  const converter = new showdown.Converter();
  return converter.makeHtml(markdowStr);
}

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const { courseId, lessonId, locale } = query;

  const pathPrefix = pathMappings.get(locale as string);
  if (!pathPrefix) {
    throw new Error(`invalid locale ${locale}`);
  }

  const lessonFilename = path.join(
    getAssetsPath(),
    pathPrefix,
    courseId as string,
    `${lessonId}.md`,
  );
  try {
    const markdownStr = fs.readFileSync(lessonFilename).toString();
    return markdown2HTML(markdownStr);
  } catch (err) {
    console.log(err);
  }
});
