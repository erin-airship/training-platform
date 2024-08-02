import { courses as Course } from "@prisma/client";
import { prisma } from "../utils/prisma";

type CreateCoursePayload = Pick<Course, "title" | "description" | "trainer_id">;
type UpdateCoursePayload = Partial<Course>;

export const getAllCourses = async () => {
  return await prisma.courses.findMany({
    include: {
      course_trainees: true,
    },
    orderBy: {
      id: "asc",
    },
  });
};

export const getCourseById = async (id: number) => {
  return await prisma.courses.findUnique({
    where: { id },
    include: {
      course_trainees: true,
    },
  });
};

export const createCourse = async (course: CreateCoursePayload) => {
  const newCourse = await prisma.courses.create({
    data: {
      ...course,
    },
  });
  return newCourse;
};

export const updateCourse = async (
  id: number,
  courseData: UpdateCoursePayload
) => {
  const updatedCourse = await prisma.courses.update({
    where: { id },
    data: courseData,
  });
  return updatedCourse;
};

export const deleteCourse = async (id: number) => {
  const deletedCourse = await prisma.courses.delete({
    where: { id },
  });
  return deletedCourse;
};
