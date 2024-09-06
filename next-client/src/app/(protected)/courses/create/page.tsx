'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateCoursePage = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform the course creation logic here (e.g., API call)
    console.log("New course created:", courseTitle);
    router.push("/courses"); // Redirect back to courses page
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Create New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="courseTitle" className="block text-gray-700">Course Title</label>
          <Input
            id="courseTitle"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Enter course title"
            required
          />
        </div>
        <Button type="submit">Create Course</Button>
      </form>
    </div>
  );
};

export default CreateCoursePage;