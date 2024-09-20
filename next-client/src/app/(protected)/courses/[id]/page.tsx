'use client';
import { useParams } from 'next/navigation';
import { useGetCourseDetails } from "@/hooks/api/courses/useGetCourseDetails";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGetCourseModules } from '@/hooks/api/courses/useGetCourseModules';

const CourseDetailPage = () => {
  const {id} = useParams();
const {data: courseDetails} = useGetCourseDetails(id.toString());
const { data: modules, isLoading } = useGetCourseModules(Number(id));
if (isLoading) {
  return <div>Loading...</div>;
}

  if (!courseDetails) {
    return <div>Loading...</div>; // Or some loading indicator
  }

  return (
    <div className="container mx-auto py-8">
       <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Courses</h2>
        <Link href={`/courses/${id}/modules/create`}>
          <Button>Create Course Module</Button>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">{courseDetails.title}</h1>
      <p className="text-gray-600 mb-4">{courseDetails.description}</p>
      <p className="text-gray-800">Progress: {courseDetails.progress}</p>
      {/* More course details here */}
      {modules && modules.length > 0 ? (
          modules.map((module: { id: number; title: string }) => (
            <li key={module.id}>
              
                {module.title}
               
            </li>
          ))
        ) : (
          <li>No modules available</li>
        )}
    </div>
  );
};

export default CourseDetailPage;
