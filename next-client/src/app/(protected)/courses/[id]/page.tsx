"use client";
import { useParams } from "next/navigation";
import { useGetCourseDetails } from "@/hooks/api/courses/useGetCourseDetails";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGetCourseModules } from "@/hooks/api/courses/useGetCourseModules";

const CourseDetailPage = () => {
  const { id } = useParams();
  const { data: courseDetails } = useGetCourseDetails(id.toString());
  const { data: modules, isLoading } = useGetCourseModules(Number(id));
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!courseDetails) {
    return <div>Loading...</div>; // Or some loading indicator
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{courseDetails.title} Course</h2>
        <Link href={`/courses/${id}/modules/create`}>
          <Button>Create Course Module</Button>
        </Link>
        <Link href={`/courses/${id}/edit`}>
          <Button>Edit Course</Button>
        </Link>
      </div>
      <p className="text-gray-600 mb-8">{courseDetails.description}</p>
      <h2 className="text-xl text-gray-800 mb-2">
       Modules in the course: {courseDetails.progress}
      </h2>
      {modules && modules.length > 0 ? (
        modules.map((module: { id: number; title: string }) => (
          <li key={module.id}>{module.title}</li>
        ))
      ) : (
        <li>No modules available</li>
      )}
    </div>
  );
};

export default CourseDetailPage;
