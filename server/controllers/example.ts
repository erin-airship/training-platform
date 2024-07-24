import { Request, Response } from 'express';
import { exampleModel } from '../models';

const getExamples = async (req: Request, res: Response) => {
    const examples = await exampleModel.getAllExamples();
    res.json(examples);
   };
export {
    getExamples
};