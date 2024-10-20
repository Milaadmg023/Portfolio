import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class database {
     async get_info() {
          
          const portfolio = await prisma.portfolio.findFirstOrThrow();
          const projects = await prisma.projects.findMany();          
          const skills = await prisma.skills.findMany();
          const messages = await prisma.messages.findMany();
          return { portfolio,projects, skills, messages}
     }
     async add_message(data) {
          const message = await prisma.messages.create({
               data: {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    portfolioId: 1
               },
               include: {
                    portfolio: true
               }
          });
          return message;
     }
}