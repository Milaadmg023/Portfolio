import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class Get {
    async getBase() {
        const baseInfo = await prisma.base.findMany();
        return baseInfo
    }
    async getProjects() {
        const projects = await prisma.projecs.findMany();
        return projects
    }
}