import {Request, Response} from 'express';
import {modulesModel} from '../models';

const getModules = async (req: Request, res: Response) => {
    const modules = await modulesModel.getAllModules();
    res.json(modules);
};

const getModuleById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const module = await modulesModel.getModuleById(Number(id));
    if (module) {
        res.json(module);
    } else {
        res.status(404).json({ error: 'Module not found' });
    }
};

const createModule = async (req: Request, res: Response) => {
    const module = req.body;
    const newModule = await modulesModel.createModule(module);
    res.json(newModule);
};

const updateModule = async (req: Request, res: Response) => {
    const { id } = req.params;
    const moduleData = req.body;
    const updatedModule = await modulesModel.updateModule(Number(id), moduleData);
    if (updatedModule) {
        res.json(updatedModule);
    } else {
        res.status(404).json({ error: 'Module not found' });
    }
};

const deleteModule = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedModule = await modulesModel.deleteModule(Number(id));
    if (deletedModule) {
        res.json(deletedModule);
    } else {
        res.status(404).json({ error: 'Module not found' });
    }
};

export {
    getModules,
    getModuleById,
    createModule,
    updateModule,
    deleteModule
};