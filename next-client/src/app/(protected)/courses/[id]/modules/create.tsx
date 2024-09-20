// /app/courses/[id]/modules/create.tsx
'use client';

import { useRouter, useParams } from 'next/navigation';
import { useMutation } from 'react-query';
import { useState } from 'react';
import instance from '@/utils/axios';

const createModule = async (courseId: string, title: string, description: string) => {
  const response = await instance.post(`/courses/${courseId}/modules`, {
    title,
    description,
  });
  return response.data;
};

const CreateModulePage = () => {
  const { id } = useParams(); // Get the course ID from the route params
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { mutate: createModuleMutation, isLoading, isError, error } = useMutation({
    mutationFn: async () => {
      return await createModule(id, title, description);
    },
    onSuccess: () => {
      router.push(`/courses/${id}`); // Navigate back to the course page
    },
    onError: (err) => {
      console.error('Error creating module:', err);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createModuleMutation();
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Create Module</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Module Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
            rows={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Module'}
        </button>
        {isError && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default CreateModulePage;
