import pg from "pg";

async function getLatestPosts(dbClient: pg.Client, locale: string) {
  const results = await dbClient.query(
    `
    SELECT id, modified_at, title, abstract, modified_at, url_slug
    FROM posts
    WHERE language = '${locale}'
    ORDER BY modified_at desc
    LIMIT 5
    `,
  );
  return results.rows;
}

export default defineEventHandler(async (event) => {
  const { locale } = getQuery(event);
  const dbClient = event.context.dbClient;
  try {
    return await getLatestPosts(dbClient, locale as string);
  } catch (err) {
    console.log(err);
  }
});
