import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getBlogPosts, createBlogPost, generateSlug } from '$lib/server/database.js';

export const GET: RequestHandler = async ({ url }) => {
  try {
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = Number(url.searchParams.get('limit')) || 10;
    const published = url.searchParams.get('published') !== 'false';

    const result = await getBlogPosts(page, limit, published);
    return json(result);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
};

export const POST: RequestHandler = async ({ request, cookies }) => {
  try {
    const session = cookies.get('session');
    if (!session) {
      return json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { title, content, excerpt, published } = data;

    if (!title || !content) {
      return json({ error: 'Title and content are required' }, { status: 400 });
    }

    const slug = await generateSlug(title);

    const post = await createBlogPost({
      title,
      slug,
      content,
      excerpt: excerpt || null,
      published: published || false,
    });

    return json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return json({ error: 'Failed to create blog post' }, { status: 500 });
  }
};
