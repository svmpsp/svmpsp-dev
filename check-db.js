import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.blogPost.findMany({ take: 5 });
  console.log(
    'Posts:',
    posts.map((p) => ({ id: p.id, title: p.title, published: p.published }))
  );
  await prisma.$disconnect();
}

main().catch(console.error);
