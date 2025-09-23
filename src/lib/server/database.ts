import { PrismaClient } from '@prisma/client';
import type {
  BlogPost,
  BlogPostCreateInput,
  BlogPostUpdateInput,
  BlogListResponse,
} from '$lib/types/blog';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Blog Post Database Operations
export async function getBlogPosts(
  page = 1,
  limit = 10,
  published = true
): Promise<BlogListResponse> {
  const skip = (page - 1) * limit;

  const where = published ? { published: true } : {};

  const [posts, total] = await Promise.all([
    prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.blogPost.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    posts,
    pagination: {
      currentPage: page,
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrevious: page > 1,
      hasPrev: page > 1,
    },
  };
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return prisma.blogPost.findUnique({
    where: { slug },
  });
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  return prisma.blogPost.findUnique({
    where: { id },
  });
}

export async function createBlogPost(data: BlogPostCreateInput): Promise<BlogPost> {
  return prisma.blogPost.create({
    data,
  });
}

export async function updateBlogPost(id: string, data: BlogPostUpdateInput): Promise<BlogPost> {
  return prisma.blogPost.update({
    where: { id },
    data,
  });
}

export async function deleteBlogPost(id: string): Promise<BlogPost> {
  return prisma.blogPost.delete({
    where: { id },
  });
}

export async function generateSlug(title: string): Promise<string> {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();

  let slug = baseSlug;
  let counter = 1;

  while (await prisma.blogPost.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}
