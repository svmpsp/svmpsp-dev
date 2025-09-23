import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getBlogPostBySlug, updateBlogPost, deleteBlogPost } from '$lib/server/database.js';

export const GET: RequestHandler = async ({ params }) => {
  try {
    const post = await getBlogPostBySlug(params.id);

    if (!post) {
      return json({ error: 'Blog post not found' }, { status: 404 });
    }

    return json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
};

export const PUT: RequestHandler = async ({ request, params, cookies }) => {
  try {
    const session = cookies.get('session');
    if (!session) {
      return json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.json();
    const { title, content, excerpt, published } = data;

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (content !== undefined) updateData.content = content;
    if (excerpt !== undefined) updateData.excerpt = excerpt;
    if (published !== undefined) updateData.published = published;

    const post = await updateBlogPost(params.id, updateData);
    return json(post);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return json({ error: 'Failed to update blog post' }, { status: 500 });
  }
};

export const DELETE: RequestHandler = async ({ params, cookies }) => {
  try {
    const session = cookies.get('session');
    if (!session) {
      return json({ error: 'Unauthorized' }, { status: 401 });
    }

    await deleteBlogPost(params.id);
    return json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
};
