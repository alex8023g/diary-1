import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const demoUser = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'demouser@nomaildomain.com',
      name: 'demoUser',
    },
  });
  console.log('🚀 ~ main ~ demoUser:', demoUser);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
