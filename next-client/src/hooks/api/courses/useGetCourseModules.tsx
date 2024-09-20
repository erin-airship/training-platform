import { useQuery } from "react-query";
import instance from "@/utils/axios";

export const getCourseModules = async (courseId: number) => {
  const response = await instance.get(`/modules/course/${courseId}/modules`);
  return response.data;
};

export const useGetCourseModules = (courseId: number) => {
  return useQuery({
    queryKey: ["courseModules", courseId],
    queryFn: async () => {
      const data = await getCourseModules(courseId);
      return data;
    },
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error(error);
    },
  });
};