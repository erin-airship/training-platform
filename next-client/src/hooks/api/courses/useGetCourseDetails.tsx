import {useQuery} from "react-query";
import instance from "@/utils/axios";

const getCourseDetails = async (id: string) => {
    const response = await instance.get(`/courses/${id}`);
    return response.data;
};

export const useGetCourseDetails = (id: string) => {
    return useQuery({
        queryKey: ["courses", id],
        queryFn: async () => {
            const data = await getCourseDetails(id);
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
}