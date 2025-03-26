import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (property) =>{
    const result = await prisma.property.create({
        data: property,
    })
   return result;
}


export const deleteProperty = async (id) =>{
    const result = await prisma.property.delete({
        where:{
            id,
        }
    })
   return result;
}

export const getList = async () =>{
    const result = await prisma.property.findMany();
   return result;
}

export const update = async (id, propertyData) =>{
    const result = await prisma.property.update({
        where:{
            id,
        },
        data: propertyData,
    })
   return result;
}

