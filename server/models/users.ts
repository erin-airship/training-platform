import type { users as User } from "@prisma/client";
import { prisma } from "../utils/prisma";

type CreateUserPayload = Pick<User, "email" | "password" | "role">

export const getAllUsers = async () => {
  return [
    {
      id: 1,
      password: "password123",
      email: "veronica.mars@marsinvestigations.com",
      role: "trainer",
    },
    {
      id: 2,
      password: "password456",
      email: "keith.mars@example.com",
      role: "trainee",
    },
  ];
};

export const getUserById = async (id: number) => {
  const users = await getAllUsers();
  return users.find((user) => user.id === id);
};

export const createUser = async (user: CreateUserPayload) => {
 const newUser = await prisma.users.create({
    data: {
      ...user,
      role: 'trainee',
    },
    select: {
      id: true,
      email: true,
    },
  });
  return newUser;
};

export const updateUser = async (id: number, userData: any) => {
  const users = await getAllUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...userData };
    return users[index];
  }
  return null;
};

export const deleteUser = async (id: number) => {
  const users = await getAllUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    const deletedUser = users[index];
    users.splice(index, 1);
    return deletedUser;
  }
  return null;
};
