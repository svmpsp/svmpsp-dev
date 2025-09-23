import type { PageServerLoad } from './$types';
import { getBlogPosts } from '$lib/server/database.js';
import type { BlogListResponse } from '$lib/types/blog';

export const load: PageServerLoad = async ({ url }) => {
  const page = Number(url.searchParams.get('page')) || 1;
  const limit = 6; // Show 6 posts per page

  try {
    const blogData: BlogListResponse = await getBlogPosts(page, limit, true);
    return {
      posts: blogData.posts,
      pagination: blogData.pagination,
    };
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return {
      posts: [],
      pagination: {
        currentPage: 1,
        page: 1,
        limit,
        total: 0,
        totalPages: 0,
        hasNext: false,
        hasPrevious: false,
        hasPrev: false,
      },
    };
  }
};
