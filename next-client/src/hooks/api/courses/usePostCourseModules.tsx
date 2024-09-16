import { useMutation } from "react-query";
import { useRouter } from "next/router";
import instance from "@/utils/axios";

export const createModule = async (courseId: string, name: string, description: string) => {
    const response = await instance.post(`http://localhost:3001/courses/${courseId}/modules`, {
        title: name,
        description: description,
    });
    
    return response.data;
    };


interface CreateModuleResponse {
    id: string;
}


export const usePostCourseModules = () => {
    const router = useRouter();
    
    return useMutation({
        mutationKey: ["courses"],
        mutationFn: async (variables: { courseId: string; name: string; description: string }) => {
            const data = await createModule(variables.courseId, variables.name, variables.description);
            return data as CreateModuleResponse;
        },
        onSuccess: (data) => {
            router.push(`/courses/${data.id}`);
        },
        onError: (error) => {
            console.error(error);
        },
    });
};