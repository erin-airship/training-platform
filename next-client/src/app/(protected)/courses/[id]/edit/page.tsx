"use client";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePutCourse } from "@/hooks/api/courses/useUpdateCourseDetails";
import { useGetCourseDetails } from "@/hooks/api/courses/useGetCourseDetails";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Course name is required"),
  description: z.string().min(1, "Description is required"),
});

const EditCoursePage = () => {
  const { id } = useParams();
  const { mutateAsync: updateCourseDetails } = usePutCourse();
  const { data: courseDetails, isLoading } = useGetCourseDetails(id as string);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (courseDetails && !isLoading) {
      form.reset({
        name: courseDetails.title,
        description: courseDetails.description,
      });
    }
  }, [courseDetails, isLoading, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await updateCourseDetails({ id: id as string, name: values.name, description: values.description });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Edit Course</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Course Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Course Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Update Course</Button>
        </form>
      </Form>
    </div>
  );
};

export default EditCoursePage;
