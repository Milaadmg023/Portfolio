import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class Get {
    async getBase() {
        const baseInfo = await prisma.base.findMany({
            include: {
                projects:true,
                skills:true,
            }
        })
        return baseInfo
    }
}