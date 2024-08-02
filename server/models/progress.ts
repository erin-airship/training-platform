import { progress as Progress } from "@prisma/client";
import { prisma } from "../utils/prisma";

type CreateProgressPayload = Pick<
  Progress,
  "trainee_id" | "course_id" | "module_id" | "status"
>;

export const getAllProgress = async () => {
  return await prisma.progress.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getProgressById = async (id: number) => {
  return await prisma.progress.findUnique({
    where: { id },
  });
};

export const createProgress = async (progress: CreateProgressPayload) => {
  const newProgress = await prisma.progress.create({
    data: progress,
  });
  return newProgress;
};

export const updateProgress = async (
  id: number,
  progressData: Partial<Progress>
) => {
  const updatedProgress = await prisma.progress.update({
    where: { id },
    data: progressData,
  });
  return updatedProgress;
};

export const deleteProgress = async (id: number) => {
  const deletedProgress = await prisma.progress.delete({
    where: { id },
  });
  return deletedProgress;
};
