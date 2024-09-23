'use client'
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useGetCourses } from "@/hooks/api/courses/useGetCourses";

const DashboardPage = () => {
  const { data: courses} = useGetCourses();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <h2 className="text-2xl font-bold">COE Training</h2>
        <section>
          {
            courses?.map((course: { id: number; title: string; progress: string }) => (
              <Link href={`/courses/${course.id}`} key={course.id} className="text-sm text-blue-500">
                <Card className="bg-card p-6 rounded-lg shadow my-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle>{course.title}</CardTitle>
                    <div className="text-muted-foreground text-sm">
                      {course.progress ?? '0'}% Complete
                    </div>
                  </div>
                  <Progress value={Number(course.progress)} className="mb-4" />
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle>Current Module</CardTitle>
                      <div className="text-muted-foreground">
                        Introduction to HTML
                      </div>
                    </div>
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      In Progress
                    </div>
                  </div>
                  <div>
                    <CardTitle className="mb-2">Completed Modules</CardTitle>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between">
                        <div>HTML Basics</div>
                        <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">
                          Completed
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div>CSS Fundamentals</div>
                        <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">
                          Completed
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div>JavaScript Basics</div>
                        <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">
                          Completed
                        </div>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Link>
            ))
          }
          {/* <Link href="/courses/2" className="text-sm text-blue-500">
            <Card className="bg-card p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <CardTitle>COE Training</CardTitle>
                <div className="text-muted-foreground text-sm">
                  75% Complete
                </div>
              </div>
              <Progress value={75} className="mb-4" />
              <div className="flex items-center justify-between mb-4">
                <div>
                  <CardTitle>Current Module</CardTitle>
                  <div className="text-muted-foreground">
                    Introduction to HTML
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  In Progress
                </div>
              </div>
              <div>
                <CardTitle className="mb-2">Completed Modules</CardTitle>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <div>HTML Basics</div>
                    <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">
                      Completed
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>CSS Fundamentals</div>
                    <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">
                      Completed
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>JavaScript Basics</div>
                    <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">
                      Completed
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </Link> */}
        </section>
        <section>
          <Card className="bg-card p-6 rounded-lg shadow my-4">
            <CardTitle className="mb-4">Upcoming Assignments</CardTitle>
            <ul className="space-y-4">
              <li className="flex items-start justify-between">
                <div>
                  <CardTitle>Build a Personal Website</CardTitle>
                  <div className="text-muted-foreground">
                    Due: April 15, 2023
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  Upcoming
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <CardTitle>Responsive Design Project</CardTitle>
                  <div className="text-muted-foreground">Due: May 1, 2023</div>
                </div>
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  Upcoming
                </div>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <CardTitle>JavaScript Interactivity</CardTitle>
                  <div className="text-muted-foreground">Due: May 15, 2023</div>
                </div>
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  Upcoming
                </div>
              </li>
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
