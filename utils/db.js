import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default class database {
  async get_info() {
    const portfolio = await prisma.portfolio.findFirstOrThrow();
    const projects = await prisma.projects.findMany();
    const skills = await prisma.skills.findMany();
    const messages = await prisma.messages.findMany();
    return { portfolio, projects, skills, messages };
  }
  async add_message(data) {
    const message = await prisma.messages.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
        portfolioId: 1,
      },
      include: {
        portfolio: true,
      },
    });
    return message;
  }
  async update_base(data) {
    await prisma.portfolio.update({
      where: {
        id: 1,
      },
      data: {
        name: data.name,
        job: data.job,
        username: data.username,
        password: data.password,
      },
    });
  }
  async delete_project(id) {
    await prisma.projects.delete({
      where: {
        id: id,
      },
    });
  }
  async delete_skill(id) {
    await prisma.skills.delete({
      where: {
        id: id,
      },
    });
  }
  async add_project(data) {
    try {
      await prisma.projects.create({
        data: {
          name: data.name,
          image: data.image,
          url: data.preview,
          githubUrl: data.github,
          description: "",
          portfolioId: 1,
        },
        include: {
          portfolio: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }
  async add_skill(data) {
    try {
      await prisma.skills.create({
        data: {
          name: data.name,
          rate: Number(data.rate),
          portfolioId: 1,
        },
        include: {
          portfolio: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  async get_password(token) {
    const user = await prisma.portfolio.findUnique({
      where: {
        id: 1,
      },
      select: {
        username: true,
        password: true,
      },
    });
    await prisma.portfolio.update({
      where: {
        id: 1,
      },
      data: {
        token: token,
      },
    })
    return user;
  }
  async verfy_token(token) {
    const user = await prisma.portfolio.findUnique({
      where: {
        id: 1,
      },
      select: {
        token: true,
      },
    });
    return user;
  }
}
