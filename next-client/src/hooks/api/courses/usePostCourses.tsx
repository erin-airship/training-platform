"use client";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import instance from "@/utils/axios";

export const createCourse = async (name: string, description: string) => {
  const response = await instance.post(`/courses`, {
    title: name,
    description: description,
    trainer_id: 1,
  });

  return response.data;
};

interface CreateCourseResponse {
  id: string;
}

export const usePostCourses = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["courses"],
    mutationFn: async (variables: { name: string; description: string }) => {
      const data = await createCourse(variables.name, variables.description);
      return data as CreateCourseResponse;
    },
    onSuccess: (data) => {
      router.push(`/courses/${data.id}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
