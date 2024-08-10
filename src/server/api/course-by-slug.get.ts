import pg from "pg";

async function getCourseInfo(dbClient: pg.Client, courseSlug: string) {
  const results = await dbClient.query(
    `
    SELECT
      id, title
    FROM svmpsp_dev.courses
    WHERE url_slug = '${courseSlug}'
    `,
  );
  return results.rows[0];
}

export default defineEventHandler(async (event) => {
  const { courseSlug } = getQuery(event);
  const dbClient = event.context.dbClient;
  try {
    return await getCourseInfo(dbClient, courseSlug as string);
  } catch (err) {
    console.log(err);
  }
});
