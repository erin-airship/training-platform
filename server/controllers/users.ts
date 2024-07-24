import { Request, Response } from 'express';
import { usersModel } from '../models';


const getUsers = async (req: Request, res: Response) => {
    const users = await usersModel.getAllUsers();
    res.json(users);
   };

const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await usersModel.getUserById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
   }

   const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await usersModel.createUser(user);
    res.json(newUser);
   }

   const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await usersModel.updateUser(Number(id), userData);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
   }

    const deleteUser = async (req: Request, res: Response) => {
     const { id } = req.params;
     const deletedUser = await usersModel.deleteUser(Number(id));
     if (deletedUser) {
        res.json(deletedUser);
     } else {
        res.status(404).json({ error: 'User not found' });
     }
    }

export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};