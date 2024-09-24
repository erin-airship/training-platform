import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

export const useUpdateCourseDetails = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ id, updatedDetails }: { id: string; updatedDetails: { title: string; description: string } }) => {
      const response = await axios.put(`/api/courses/${id}`, updatedDetails);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('courseDetails'); // Invalidate the cached course details to refresh the data
      },
    }
  );
};
