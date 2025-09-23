import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import BlogCard from './BlogCard.svelte';
import type { BlogPost } from '$lib/types/blog';

const mockPost: BlogPost = {
  id: '1',
  title: 'Test Blog Post',
  slug: 'test-blog-post',
  content: 'This is the content of the test blog post.',
  excerpt: 'This is a test excerpt for the blog post.',
  published: true,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

describe('BlogCard', () => {
  it('renders blog post title', () => {
    render(BlogCard, { props: { post: mockPost } });
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
  });

  it('renders blog post excerpt', () => {
    render(BlogCard, { props: { post: mockPost } });
    expect(screen.getByText('This is a test excerpt for the blog post.')).toBeInTheDocument();
  });

  it('renders formatted date', () => {
    render(BlogCard, { props: { post: mockPost } });
    expect(screen.getByText('January 1, 2024')).toBeInTheDocument();
  });

  it('creates correct link to blog post', () => {
    render(BlogCard, { props: { post: mockPost } });
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/test-blog-post');
  });

  it('renders read more text', () => {
    render(BlogCard, { props: { post: mockPost } });
    expect(screen.getByText('Read more →')).toBeInTheDocument();
  });

  it('handles post without excerpt', () => {
    const postWithoutExcerpt = { ...mockPost, excerpt: null };
    render(BlogCard, { props: { post: postWithoutExcerpt } });
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
    expect(screen.queryByText('This is a test excerpt')).not.toBeInTheDocument();
  });
});
