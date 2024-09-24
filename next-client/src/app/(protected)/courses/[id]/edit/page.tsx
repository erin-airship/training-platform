"use client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useGetCourseDetails } from "@/hooks/api/courses/useGetCourseDetails";
import { useUpdateCourseDetails } from "@/hooks/api/courses/useUpdateCourseDetails";

const EditCoursePage = () => {
  const router = useRouter();
  const { id } = useParams();
  const {
    data: courseDetails,
    isLoading,
  } = useGetCourseDetails(id as string);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { mutate: updateCourseDetails } = useUpdateCourseDetails();

  useEffect(() => {
    if (courseDetails) {
      setTitle(courseDetails.title);
      setDescription(courseDetails.description);
    }
  }, [courseDetails]);

  const handleSave = async () => {
      await updateCourseDetails({ id: id as string, updatedDetails: { title, description } });
      router.push(`/courses/${id}`);
    };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Edit Course</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default EditCoursePage;
