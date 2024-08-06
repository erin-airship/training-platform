import { Request, Response } from "express";
import { usersModel } from "../models";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
};

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await usersModel.getUserById(Number(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching user" });
  }
};

const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  try {
    const newUser = await usersModel.createUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating user" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const updatedUser = await usersModel.updateUser(Number(id), userData);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating user" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedUser = await usersModel.deleteUser(Number(id));
    if (deletedUser) {
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user" });
  }
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
