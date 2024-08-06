import type { users as User } from "@prisma/client";
import { prisma } from "../utils/prisma";

type CreateUserPayload = Pick<User, "email" | "password" | "role">;

export const getAllUsers = async (skip: number = 0, take: number = 10) => {
  return await prisma.users.findMany({
    skip,
    take,
    orderBy: {
      id: "asc",
    },
  });
};

export const getUserById = async (id: number) => {
  try {
    const user = await prisma.users.findUnique({
      where: { id },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error: Error | any) {
    throw new Error(error.message);
  }
};

export const createUser = async (user: CreateUserPayload) => {
  const { email, password, role } = user;
  const newUser = await prisma.users.create({
    data: {
      email,
      password,
      role: role || "trainee",
    },
    select: {
      id: true,
      email: true,
    },
  });
  return newUser;
};

export const updateUser = async (id: number, userData: Partial<User>) => {
  try {
    const updatedUser = await prisma.users.update({
      where: { id },
      data: userData,
    });
    return updatedUser;
  } catch (error: Error | any) {
    throw new Error("User update failed");
  }
};

export const deleteUser = async (id: number) => {
  try {
    const deletedUser = await prisma.users.delete({
      where: { id },
    });
    return deletedUser;
  } catch (error: Error | any) {
    throw new Error("User delete failed");
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    return await prisma.users.findFirst({
      where: { email },
    });
  } catch (error: Error | any) {
    throw new Error("User not found");
  }
};
