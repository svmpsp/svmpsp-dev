import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { authenticateUser, createSession } from '$lib/server/auth.js';

export const POST: RequestHandler = async ({ request, cookies }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return json({ error: 'Email and password are required' }, { status: 400 });
    }

    const user = await authenticateUser(email, password);

    if (!user) {
      return json({ error: 'Invalid credentials' }, { status: 401 });
    }

    if (!user.isAdmin) {
      return json({ error: 'Access denied' }, { status: 403 });
    }

    const session = createSession(user);

    // Set session cookie
    cookies.set('session', JSON.stringify(session), {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return json({
      user: {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return json({ error: 'Login failed' }, { status: 500 });
  }
};
