import { Request, Response } from 'express';
import { exampleModel } from '../models';

const getExamples = async (req: Request, res: Response) => {
    const examples = await exampleModel.getAllExamples();
    res.json(examples);
   };

const getAllUsers = async (req: Request, res: Response) => {
    const users = await exampleModel.getAllForUser(1);
    return res.json(users);
  };

export {
    getExamples,
    getAllUsers
};