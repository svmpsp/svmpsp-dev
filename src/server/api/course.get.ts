import pg from "pg";

async function getCourseLessons(dbClient: pg.Client, courseId: string) {
  const results = await dbClient.query(
    `
    SELECT
      P.id, P.title, P.url_slug
    FROM svmpsp_dev.posts AS P
    JOIN svmpsp_dev.lessons as L
    ON L.post_id = P.id
    WHERE L.course_id = '${courseId}'
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
