import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (property) =>{
    const result = await prisma.property.create({
        data: property,
    })
   return result;
}


