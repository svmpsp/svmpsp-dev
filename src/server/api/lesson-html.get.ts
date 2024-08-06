import fs from "node:fs";
import path from "node:path";
import showdown from "showdown";

function markdown2HTML(markdowStr: string): string {
  const converter = new showdown.Converter();
  return converter.makeHtml(markdowStr);
}

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const courseId = query.c as string;
  const lessonId = query.l as string;
  const lessonFilename = path.join(
    "src",
    "assets",
    "courses",
    courseId,
    `${lessonId}.md`,
  );
  try {
    const markdownStr = fs.readFileSync(lessonFilename).toString();
    return markdown2HTML(markdownStr);
  } catch (err) {
    console.log(err);
  }
});
