import bcrypt from 'bcryptjs';
import { prisma } from './database.js';
import type { User, AuthSession } from '$lib/types/blog';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createUser(email: string, password: string, isAdmin = false): Promise<User> {
  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      isAdmin,
    },
  });

  return {
    id: user.id,
    email: user.email,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) return null;

  const isValid = await verifyPassword(password, user.passwordHash);
  if (!isValid) return null;

  return {
    id: user.id,
    email: user.email,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

export async function getUserById(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    isAdmin: user.isAdmin,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

export function createSession(user: User): AuthSession {
  return {
    userId: user.id,
    email: user.email,
    isAdmin: user.isAdmin,
    createdAt: new Date(),
  };
}

export function isValidSession(session: AuthSession): boolean {
  // Check if session is less than 7 days old
  const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  const sessionAge = Date.now() - new Date(session.createdAt).getTime();
  return sessionAge < maxAge;
}
