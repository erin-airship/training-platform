import { Button } from "@/components/ui/button";
import Link from "next/link";
import CourseCard from "./_components/CourseCsrd";

const CoursesPage = () => {
  const courses = [
    { id: 1, title: "React for Beginners", progress: "80%" },
    { id: 2, title: "Advanced TypeScript", progress: "45%" },
    // Add more courses as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Courses</h2>
        <Link href="/courses/create">
          <Button>Create New Course</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;