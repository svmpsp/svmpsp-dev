import type { PageServerLoad } from './$types';
import { getBlogPostById } from '$lib/server/database.js';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const post = await getBlogPostById(params.id);

    if (!post) {
      throw error(404, 'Blog post not found');
    }

    // Allow preview of both published and unpublished posts in admin
    return {
      post,
    };
  } catch (err) {
    console.error('Error loading blog post for preview:', err);
    if (err && typeof err === 'object' && 'status' in err) {
      throw err;
    }
    throw error(500, 'Failed to load blog post');
  }
};
