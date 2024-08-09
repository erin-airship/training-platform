import { when } from "jest-when";
import { mockRequest, mockResponse } from "../../testUtils/mockRequest";
import * as coursesModel from "../../models/courses";
import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../courses";

jest.mock("../../models/courses");

describe("Courses Controller", () => {
  describe("getCourses", () => {
    it("should return a 200 status and list of courses", async () => {
      // Arrange
      const req = mockRequest();
      const res = mockResponse();

      const mockedCourses = [
        {
          id: 1,
          title: "course1",
          description: "description1",
          trainer_id: 1,
          created_at: null,
          updated_at: new Date(),
          course_trainees: [],
          modules: [],
          progress: [],
        },
        {
          id: 2,
          title: "course2",
          description: "description2",
          trainer_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
          course_trainees: [{ course_id: 2, trainee_id: 2 }],
          modules: [],
          progress: [],
        },
      ];
      when(coursesModel.getAllCourses)
        .calledWith()
        .mockReturnValueOnce(Promise.resolve(mockedCourses));

      // Act
      await getCourses(req, res);

      // Assert
      expect(coursesModel.getAllCourses).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockedCourses);
    });
  });

  describe("getCourseById", () => {
    it("should return a 200 status and the course if found", async () => {
      // Arrange
      const req = mockRequest({ params: { id: 1 } });
      const res = mockResponse();

      const mockedCourse = {
        id: 1,
        title: "course1",
        description: "description1",
        trainer_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        course_trainees: [],
        modules: [],
        progress: [],
      };

      when(coursesModel.getCourseById)
        .calledWith(1)
        .mockReturnValueOnce(Promise.resolve(mockedCourse));

      // Act
      await getCourseById(req, res);

      // Assert
      expect(coursesModel.getCourseById).toHaveBeenCalledTimes(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockedCourse);
    });
  });

    describe("createCourse", () => {
        it("should return a 201 status and the created course", async () => {
        // Arrange
        const req = mockRequest({
            body: {
            title: "course1",
            description: "description1",
            trainer_id: 1,
            },
        });
        const res = mockResponse();
    
        const mockedCourse = {
            id: 1,
            title: "course1",
            description: "description1",
            trainer_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
            course_trainees: [],
            modules: [],
            progress: [],
        };
    
        when(coursesModel.createCourse)
            .calledWith(req.body)
            .mockReturnValueOnce(Promise.resolve(mockedCourse));
    
        // Act
        await createCourse(req, res);
    
        // Assert
        expect(coursesModel.createCourse).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockedCourse);
        });
    });
});
