import Link from "next/link";

const CourseCard = ({
  course,
}: {
  course: { id: number; title: string; progress: string };
}) => {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="border rounded-lg p-4 shadow-sm bg-white">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="text-gray-600 mt-2">Progress: {course.progress ?? 'Not Started'}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
