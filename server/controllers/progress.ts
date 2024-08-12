import { Request, Response } from "express";
import { progressModel } from "../models";

const getProgress = async (req: Request, res: Response) => {
  try {
    const progress = await progressModel.getAllProgress();
    res.status(200).json(progress);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching progress" });
  }
};

const getProgressById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const progress = await progressModel.getProgressById(Number(id));
    if (progress) {
      res.status(200).json(progress);
    } else {
      res.status(404).json({ error: "Progress not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching progress" });
  }
};

const createProgress = async (req: Request, res: Response) => {
  try {
    const progress = req.body;
    const newProgress = await progressModel.createProgress(progress);
    res.status(201).json(newProgress);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating progress" });
  }
};

const updateProgress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const progressData = req.body;
    const updatedProgress = await progressModel.updateProgress(
      Number(id),
      progressData
    );
    if (updatedProgress) {
      res.status(200).json(updatedProgress);
    } else {
      res.status(404).json({ error: "Progress not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating progress" });
  }
};

const deleteProgress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProgress = await progressModel.deleteProgress(Number(id));
    if (deletedProgress) {
      res.status(200).json(deletedProgress);
    } else {
      res.status(404).json({ error: "Progress not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting progress" });
  }
};

export {
  getProgress,
  getProgressById,
  createProgress,
  updateProgress,
  deleteProgress,
};
