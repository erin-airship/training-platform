"use client";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import instance from "@/utils/axios";

export const createModule = async (name: string, courseId: string) => {
  const response = await instance.post("http://localhost:3001/modules", {
    title: name,
    course_id: Number(courseId),
  });

  return response.data;
};

interface CreateCourseModuleResponse {
  id: string;
}

export const usePostCourseModule = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["courses"],
    mutationFn: async (variables: { title: string; courseId: string }) => {
      const data = await createModule(variables.title, variables.courseId);
      return data as CreateCourseModuleResponse;
    },
    onSuccess: (data, variables) => {
      router.push(`/courses/${variables.courseId}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
