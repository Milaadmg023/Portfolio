import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class Get {
  async getBase() {
    const baseInfo = await prisma.base.findMany({
      include: {
        projects: true,
        skills: true,
      },
    });
    return baseInfo;
  }
}

export class Post {
  async post_Message(msg) {
    const msg_id = await prisma.message.count();
    const new_message = await prisma.message.create({
      data: {
        id: String(msg_id + 1),
        name: msg.name,
        email: msg.email,
        message: msg.message,
        baseId: "1",
      },
    });
    return new_message;
  }
}
