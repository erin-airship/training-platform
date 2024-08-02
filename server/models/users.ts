import type { users as User } from "@prisma/client";
import { prisma } from "../utils/prisma";

type CreateUserPayload = Pick<User, "email" | "password" | "role">;

export const getAllUsers = async () => {
  return await prisma.users.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const getUserById = async (id: number) => {
  return await prisma.users.findUnique({
    where: { id },
  });
};

export const createUser = async (user: CreateUserPayload) => {
  const newUser = await prisma.users.create({
    data: {
      ...user,
      role: "trainee",
    },
    select: {
      id: true,
      email: true,
    },
  });
  return newUser;
};

export const updateUser = async (id: number, userData: Partial<User>) => {
  const updatedUser = await prisma.users.update({
    where: { id },
    data: userData,
  });
  return updatedUser;
};

export const deleteUser = async (id: number) => {
  const deletedUser = await prisma.users.delete({
    where: { id },
  });
  return deletedUser;
};
