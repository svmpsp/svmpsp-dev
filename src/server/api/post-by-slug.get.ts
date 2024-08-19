import pg from "pg";

async function getPostInfo(dbClient: pg.Client, postSlug: string) {
  const results = await dbClient.query(
    `
    SELECT
      id, title, abstract
    FROM posts
    WHERE url_slug = '${postSlug}'
    `,
  );
  return results.rows[0];
}

export default defineEventHandler(async (event) => {
  const { postSlug } = getQuery(event);
  const dbClient = event.context.dbClient;
  try {
    return await getPostInfo(dbClient, postSlug as string);
  } catch (err) {
    console.log(err);
  }
});
