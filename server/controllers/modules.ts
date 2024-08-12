import { Request, Response } from "express";
import { modulesModel } from "../models";

const getModules = async (req: Request, res: Response) => {
  try {
    const modules = await modulesModel.getAllModules();
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching modules" });
  }
};

const getModuleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const module = await modulesModel.getModuleById(Number(id));
    if (module) {
      res.status(200).json(module);
    } else {
      res.status(404).json({ error: "Module not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching module" });
  }
};

const createModule = async (req: Request, res: Response) => {
  try {
    const module = req.body;
    const newModule = await modulesModel.createModule(module);
    res.status(201).json(newModule);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating module" });
  }
};

const updateModule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const moduleData = req.body;
    const updatedModule = await modulesModel.updateModule(
      Number(id),
      moduleData
    );
    if (updatedModule) {
      res.status(200).json(updatedModule);
    } else {
      res.status(404).json({ error: "Module not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating module" });
  }
};

const deleteModule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedModule = await modulesModel.deleteModule(Number(id));
    if (deletedModule) {
      res.status(200).json(deletedModule);
    } else {
      res.status(404).json({ error: "Module not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting module" });
  }
};

export { getModules, getModuleById, createModule, updateModule, deleteModule };
