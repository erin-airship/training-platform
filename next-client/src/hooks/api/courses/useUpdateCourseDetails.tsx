"use client";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/navigation";
import instance from "@/utils/axios";

export const updateCourseDetails = async (id: string, name: string, description: string) => {
  const response = await instance.put(`/courses/${id}`, {
    title: name,
    description: description,
    trainer_id: 1,
  });

  return response.data;
};

interface UpdateCourseResponse {
  id: string;
}

export const usePutCourse = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<UpdateCourseResponse, Error, { id: string; name: string; description: string }>({
    mutationFn: async ({ id, name, description }) => {
      const data = await updateCourseDetails(id, name, description);
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["courseDetails", data.id]);
      router.push(`/courses/${data.id}`);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};