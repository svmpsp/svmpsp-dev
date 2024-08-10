import pg from "pg";

import fs from "node:fs";
import path from "node:path";
import showdown from "showdown";
import { getAssetsPath } from "../utils";

async function getPostAssetsPath(dbClient: pg.Client, postId: string) {
  const results = await dbClient.query(
    `
    SELECT ('posts/' || language || '/' || content_path) AS assets_path
    FROM svmpsp_dev.posts
    WHERE id = '${postId}'
    `,
  );
  return results.rows[0];
}

function markdown2HTML(markdowStr: string): string {
  const converter = new showdown.Converter();
  return converter.makeHtml(markdowStr);
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { postId } = query;
  const dbClient = event.context.dbClient;

  try {
    const { assets_path } = await getPostAssetsPath(dbClient, postId as string);
    const assetsPath = assets_path;
    const lessonFilename = path.join(getAssetsPath(), assetsPath);
    const markdownStr = fs.readFileSync(lessonFilename).toString();
    return markdown2HTML(markdownStr);
  } catch (err) {
    console.log(err);
  }
});
