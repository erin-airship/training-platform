import {Request, Response} from 'express';
import {progressModel} from '../models';

const getProgress = async (req: Request, res: Response) => {
    const progress = await progressModel.getAllProgress();
    res.json(progress);
};

const getProgressById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const progress = await progressModel.getProgressById(Number(id));
    if (progress) {
        res.json(progress);
    } else {
        res.status(404).json({ error: 'Progress not found' });
    }
};

const createProgress = async (req: Request, res: Response) => {
    const progress = req.body;
    const newProgress = await progressModel.createProgress(progress);
    res.json(newProgress);
};

const updateProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    const progressData = req.body;
    const updatedProgress = await progressModel.updateProgress(Number(id), progressData);
    if (updatedProgress) {
        res.json(updatedProgress);
    } else {
        res.status(404).json({ error: 'Progress not found' });
    }
};

const deleteProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedProgress = await progressModel.deleteProgress(Number(id));
    if (deletedProgress) {
        res.json(deletedProgress);
    } else {
        res.status(404).json({ error: 'Progress not found' });
    }
};

export {
    getProgress,
    getProgressById,
    createProgress,
    updateProgress,
    deleteProgress
};