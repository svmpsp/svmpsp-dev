import type { PageServerLoad } from './$types';
import { getBlogPosts } from '$lib/server/database.js';

export const load: PageServerLoad = async ({ url }) => {
  try {
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = 10;

    // Get all posts (published and drafts) for admin
    const result = await getBlogPosts(page, limit, false);

    return {
      posts: result.posts,
      pagination: result.pagination,
    };
  } catch (error) {
    console.error('Error loading posts:', error);
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        page: 1,
        limit: 10,
        totalPages: 1,
        total: 0,
        hasNext: false,
        hasPrev: false,
      },
    };
  }
};
