import { modules as Module } from "@prisma/client";
import { prisma } from "../utils/prisma";

type CreateModulePayload = Pick<Module, "course_id" | "title">;

export const getAllModules = async () => {
  return await prisma.modules.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getModuleById = async (id: number) => {
  return await prisma.modules.findUnique({
    where: { id },
  });
};

export const getModulesByCourseId = async (courseId: number) => {
  return await prisma.modules.findMany({
    where: { course_id: courseId },
    orderBy: {
      id: "asc",
    },
  });
};

export const createModule = async (module: CreateModulePayload) => {
  const newModule = await prisma.modules.create({
    data: module,
  });
  return newModule;
};

export const updateModule = async (id: number, moduleData: Partial<Module>) => {
  const updatedModule = await prisma.modules.update({
    where: { id },
    data: moduleData,
  });
  return updatedModule;
};

export const deleteModule = async (id: number) => {
  const deletedModule = await prisma.modules.delete({
    where: { id },
  });
  return deletedModule;
};
