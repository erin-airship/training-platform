"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CourseCard from './_components/CourseCard';
import { useGetCourses } from "@/hooks/api/courses/useGetCourses";

interface Course {
  id: number;
  title: string;
  progress: string;
};

const CoursesPage = () => {
  const { data: courses, isLoading, isError } = useGetCourses();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: { "Something went wrong"}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Courses</h2>
        <Link href="/courses/create">
          <Button>Create New Course</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;