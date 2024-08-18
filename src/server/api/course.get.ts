import pg from "pg";

async function getCourseLessons(dbClient: pg.Client, courseId: string) {
  const results = await dbClient.query(
    `
    SELECT
      P.id, P.title, P.abstract, P.url_slug, L.course_order
    FROM posts AS P
    JOIN lessons as L
    ON L.post_id = P.id
    WHERE L.course_id = '${courseId}'
    ORDER BY L.course_order ASC
    `,
  );
  return results.rows;
}

export default defineEventHandler((event) => {
  const { courseId } = getQuery(event);
  const dbClient = event.context.dbClient;
  try {
    return getCourseLessons(dbClient, courseId as string);
  } catch (err) {
    console.log(err);
  }
});
