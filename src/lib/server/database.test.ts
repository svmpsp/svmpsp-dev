import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { PrismaClient } from '@prisma/client';
import { getBlogPosts, createBlogPost, getBlogPostBySlug, generateSlug } from './database';

const prisma = new PrismaClient();

describe('Database functions', () => {
  beforeEach(async () => {
    // Clean up database before each test
    await prisma.blogPost.deleteMany();
  });

  afterEach(async () => {
    // Clean up database after each test
    await prisma.blogPost.deleteMany();
  });

  describe('createBlogPost', () => {
    it('creates a new blog post', async () => {
      const postData = {
        title: 'Test Post',
        slug: 'test-post',
        content: 'This is test content',
        excerpt: 'Test excerpt',
        published: true,
      };

      const post = await createBlogPost(postData);

      expect(post.title).toBe('Test Post');
      expect(post.slug).toBe('test-post');
      expect(post.published).toBe(true);
      expect(post.id).toBeDefined();
    });
  });

  describe('getBlogPostBySlug', () => {
    it('retrieves a blog post by slug', async () => {
      const postData = {
        title: 'Test Post',
        slug: 'test-post',
        content: 'This is test content',
      };

      await createBlogPost(postData);
      const post = await getBlogPostBySlug('test-post');

      expect(post).toBeDefined();
      expect(post?.title).toBe('Test Post');
      expect(post?.slug).toBe('test-post');
    });

    it('returns null for non-existent slug', async () => {
      const post = await getBlogPostBySlug('non-existent');
      expect(post).toBeNull();
    });
  });

  describe('getBlogPosts', () => {
    beforeEach(async () => {
      // Create test posts
      const posts = [
        {
          title: 'Published Post 1',
          slug: 'published-1',
          content: 'Content 1',
          published: true,
        },
        {
          title: 'Published Post 2',
          slug: 'published-2',
          content: 'Content 2',
          published: true,
        },
        {
          title: 'Draft Post',
          slug: 'draft-1',
          content: 'Draft content',
          published: false,
        },
      ];

      for (const post of posts) {
        await createBlogPost(post);
      }
    });

    it('returns only published posts by default', async () => {
      const result = await getBlogPosts(1, 10, true);

      expect(result.posts.length).toBe(2);
      expect(result.posts.every((post) => post.published)).toBe(true);
    });

    it('returns all posts when published=false', async () => {
      const result = await getBlogPosts(1, 10, false);

      expect(result.posts.length).toBe(3);
    });

    it('handles pagination correctly', async () => {
      const result = await getBlogPosts(1, 1, true);

      expect(result.posts.length).toBe(1);
      expect(result.pagination.total).toBe(2);
      expect(result.pagination.totalPages).toBe(2);
      expect(result.pagination.hasNext).toBe(true);
      expect(result.pagination.hasPrev).toBe(false);
    });
  });

  describe('generateSlug', () => {
    it('generates a slug from title', async () => {
      const slug = await generateSlug('This is a Test Title');
      expect(slug).toBe('this-is-a-test-title');
    });

    it('handles special characters', async () => {
      const slug = await generateSlug('Test & Development: A Guide!');
      expect(slug).toBe('test-development-a-guide');
    });

    it('generates unique slugs for duplicate titles', async () => {
      await createBlogPost({
        title: 'Test Title',
        slug: 'test-title',
        content: 'Content',
      });

      const slug = await generateSlug('Test Title');
      expect(slug).toBe('test-title-1');
    });
  });
});
