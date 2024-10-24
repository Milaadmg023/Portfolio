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
     async update_base(data){
          const newBase = await prisma.portfolio.update({
               where: {
                    id: 1
               },
               data: {
                    name: data.name,
                    job: data.job,
               }
          })
          console.log(newBase);
          
          return newBase
     }
     async delete_project(id){
          await prisma.projects.delete({
               where:{
                    id : id
               }
          })
     }
     async delete_skill(id){
          await prisma.skills.delete({
               where:{
                    id : id
               }
          })
     }
     async add_project(data){
          const project = await prisma.projects.create({
               data: {
                    name: data.name,
                    preview: data.preview,
                    github: data.github,
                    image: data.image,
                    portfolioId: 1
               },
               include: {
                    portfolio: true
               }
          })
          return project
     }
     async add_skill(data){
          const skill = await prisma.skills.create({
               data: {
                    name: data.name,
                    rate: data.rate,
                    portfolioId: 1
               },
               include: {
                    portfolio: true
               }

          })
          return skill
     }
}