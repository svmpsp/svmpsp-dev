import pg from "pg";

async function getCourses(dbClient: pg.Client, locale: string) {
  const results = await dbClient.query(
    `
    SELECT id, title, description, url_slug, likes
    FROM courses
    WHERE language = '${locale}'
    ORDER BY likes DESC
    `,
  );
  return results.rows;
}

export default defineEventHandler((event) => {
  const { locale } = getQuery(event);
  const dbClient = event.context.dbClient;
  return getCourses(dbClient, locale as string);
});
