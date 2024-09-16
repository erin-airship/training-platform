"use client";
import { useQuery } from "react-query";
import instance from "@/utils/axios";

export const getCourses = async () => {
  const response = await instance.get("/courses");
  return response.data;
};

export const useGetCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const data = await getCourses();
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
