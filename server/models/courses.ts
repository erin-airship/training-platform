export const getAllCourses = async () => {
    return [
        {
            id: 1,
            title: 'Course 1',
            description: 'Description 1',
            trainerId: 1,
            traineeIds: [2]
        },
        {
            id: 2,
            title: 'Course 2',
            description: 'Description 2',
            trainerId: 1,
            traineeIds: [2]
        }
    ]
}

export const getCourseById = async (id: number) => {
    const courses = await getAllCourses();
    return courses.find(course => course.id === id);
}

export const createCourse = async (course: any) => {
    const courses = await getAllCourses();
    const newCourse = { id: courses.length + 1, ...course };
    courses.push(newCourse);
    return newCourse;
}

export const updateCourse = async (id: number, courseData: any) => {
    const courses = await getAllCourses();
    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        courses[index] = { ...courses[index], ...courseData };
        return courses[index];
    }
    return null;
}

export const deleteCourse = async (id: number) => {
    const courses = await getAllCourses();
    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        const deletedCourse = courses[index];
        courses.splice(index, 1);
        return deletedCourse;
    }
    return null;
}