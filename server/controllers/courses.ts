import { Response, Request } from "express";
import { coursesModel } from "../models";

const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await coursesModel.getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching courses" });
  }
};

const getCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = await coursesModel.getCourseById(Number(id));
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching course" });
  }
};

const createCourse = async (req: Request, res: Response) => {
  try {
    const course = req.body;
    const newCourse = await coursesModel.createCourse(course);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating course" });
  }
};

const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const courseData = req.body;
    const updatedCourse = await coursesModel.updateCourse(
      Number(id),
      courseData
    );
    if (updatedCourse) {
      res.status(200).json(updatedCourse);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating course" });
  }
};

const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCourse = await coursesModel.deleteCourse(Number(id));
    if (deletedCourse) {
      res.status(200).json(deletedCourse);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting course" });
  }
};

export { getCourses, getCourseById, createCourse, updateCourse, deleteCourse };
