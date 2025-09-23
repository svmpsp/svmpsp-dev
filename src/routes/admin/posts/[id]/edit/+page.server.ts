import type { PageServerLoad } from './$types';
import { getBlogPostById } from '$lib/server/database.js';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const post = await getBlogPostById(params.id);

    if (!post) {
      throw error(404, 'Post not found');
    }

    return {
      post,
    };
  } catch (err) {
    console.error('Error loading post for edit:', err);
    throw error(500, 'Failed to load post');
  }
};
