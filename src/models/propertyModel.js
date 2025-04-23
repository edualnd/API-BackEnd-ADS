import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();
const propertySchema = z.object({
  id: z.number().int().gt(0).positive,
  property: z.string(),
  type: z.string().min(5).max(7),
  address: z.string().min(6).max(250),
  rooms: z.number().positive,
});

export const propertyValidator = (property, partial = null) =>{
    if(partial){
     return propertySchema.partial(partial).safeParse(property)   
    }
    return propertySchema.parse(property) 
}

export const create = async (property) => {
  const result = await prisma.property.create({
    data: property,
  });
  return result;
};

export const deleteProperty = async (id) => {
  const result = await prisma.property.delete({
    where: {
      id,
    },
  });
  return result;
};

export const getList = async () => {
  const result = await prisma.property.findMany();
  return result;
};

export const update = async (id, propertyData) => {
  const result = await prisma.property.update({
    where: {
      id,
    },
    data: propertyData,
  });
  return result;
};
