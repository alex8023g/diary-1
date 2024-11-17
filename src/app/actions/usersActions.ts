'use server';

import { prisma } from '../../../prisma/prisma';

export async function readUsers() {
  try {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  }
}

// export async function addUser(userData: { username: string; password: string }) {
//   try {
//     await prisma.user.create({
//       data: userData,
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }
