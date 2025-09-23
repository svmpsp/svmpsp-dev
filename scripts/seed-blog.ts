import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const prisma = new PrismaClient();

async function seedBlog() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const dataPath = join(__dirname, 'data', 'blog-posts.json');
  const samplePosts = JSON.parse(readFileSync(dataPath, 'utf-8'));

  for (const post of samplePosts) {
    const existing = await prisma.blogPost.findUnique({
      where: { slug: post.slug },
    });

    if (!existing) {
      await prisma.blogPost.create({
        data: post,
      });
      console.log(`Created post: ${post.title}`);
    } else {
      console.log(`Post already exists: ${post.title}`);
    }
  }
}

seedBlog()
  .then(() => {
    console.log('Blog seeding complete');
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
