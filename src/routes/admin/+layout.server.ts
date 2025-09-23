import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { isValidSession } from '$lib/server/auth.js';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
  // Allow access to login page without authentication
  if (url.pathname === '/admin/login') {
    return {};
  }

  const sessionCookie = cookies.get('session');

  if (!sessionCookie) {
    throw redirect(302, '/admin/login');
  }

  try {
    const sessionData = JSON.parse(sessionCookie);

    // Validate session structure and admin status
    if (!sessionData.isAdmin || !sessionData.userId || !sessionData.email) {
      throw redirect(302, '/admin/login');
    }

    // Check if session has expired
    if (sessionData.createdAt && !isValidSession(sessionData)) {
      // Clear expired session cookie
      cookies.delete('session', { path: '/' });
      throw redirect(302, '/admin/login');
    }

    return {
      user: sessionData,
    };
  } catch (error) {
    // Clear invalid session cookie
    cookies.delete('session', { path: '/' });
    throw redirect(302, '/admin/login');
  }
};
