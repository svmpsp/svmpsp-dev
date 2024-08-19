import { useError } from "nuxt/app";
import pg from "pg";

async function getCourseByPost(dbClient: pg.Client, postId: string) {
  const results = await dbClient.query(
    `
    SELECT
      id, title, description, url_slug
    FROM courses as C join lessons as L on L.course_id = C.id
    WHERE L.post_id = '${postId}'
    `,
  );
  return results.rows[0];
}

export default defineEventHandler(async (event) => {
  const { postId } = getQuery(event);
  const dbClient = event.context.dbClient;
  const course = await getCourseByPost(dbClient, postId as string);
  if (course) {
    return course;
  }
  throw createError({
    statusCode: 400,
    statusMessage: "course not found",
  });
});
