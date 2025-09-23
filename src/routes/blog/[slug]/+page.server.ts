import type { PageServerLoad } from './$types';
import { getBlogPostBySlug } from '$lib/server/database.js';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      throw error(404, 'Blog post not found');
    }

    if (!post.published) {
      throw error(404, 'Blog post not found');
    }

    return {
      post,
    };
  } catch (err) {
    console.error('Error loading blog post:', err);
    if (err && typeof err === 'object' && 'status' in err) {
      throw err;
    }
    throw error(500, 'Failed to load blog post');
  }
};
