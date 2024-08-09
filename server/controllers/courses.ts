import { Response, Request } from 'express';
import { coursesModel } from '../models';

const getCourses = async (req: Request, res: Response) => {
    const courses = await coursesModel.getAllCourses();
    res.status(200).json(courses);
};

const getCourseById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const course = await coursesModel.getCourseById(Number(id));
    if (course) {
        res.status(200).json(course);
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
};

const createCourse = async (req: Request, res: Response) => {
    const course = req.body;
    const newCourse = await coursesModel.createCourse(course);
    res.status(201).json(newCourse);
};

const updateCourse = async (req: Request, res: Response) => {
    const { id } = req.params;
    const courseData = req.body;
    const updatedCourse = await coursesModel.updateCourse(Number(id), courseData);
    if (updatedCourse) {
        res.status(200).json(updatedCourse);
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
};

const deleteCourse = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedCourse = await coursesModel.deleteCourse(Number(id));
    if (deletedCourse) {
        res.status(200).json(deletedCourse);
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
};

export {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};