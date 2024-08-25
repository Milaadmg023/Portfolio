import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function getBase() {
    const baseInfo = await prisma.base.findMany();
    return baseInfo
} 