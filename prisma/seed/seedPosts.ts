import { fakerRU as faker } from '@faker-js/faker';
import { Post, PostTags, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const posts: Post[] = [];

for (let i = 0; i < 50; i++) {
  const post = {
    date: faker.date.past(),
    content: faker.lorem.paragraph({ min: 1, max: 3 }),
    // authorId: demoUser.id,
  };
  // posts.push(post);
  const postTags = {
    red: faker.helpers.arrayElements([true, false], 1)[0],
    green: faker.helpers.arrayElements([true, false], 1)[0],
    blue: faker.helpers.arrayElements([true, false], 1)[0],
    yellow: faker.helpers.arrayElements([true, false], 1)[0],
    fuchsia: faker.helpers.arrayElements([true, false], 1)[0],
  };

  main(post, postTags)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
console.log('🚀 ~ posts:', posts);

async function main(
  post: Omit<Post, 'id' | 'authorId'>,
  postTags: Omit<PostTags, 'postId'>,
) {
  const demoUser = await prisma.user.findUnique({
    where: {
      email: 'demouser@nomaildomain.com',
    },
  });
  if (!demoUser) throw new Error('no demoUser in db');
  const res = await prisma.post.create({
    data: { ...post, authorId: demoUser?.id, postTags: { create: postTags } },
  });
  console.log('🚀 ~ main ~ res:', res);
}
