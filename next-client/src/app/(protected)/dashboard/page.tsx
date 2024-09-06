import Link from "next/link"
import { Card, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <section>
        <Card className="bg-card p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <CardTitle>COE Training</CardTitle>
            <div className="text-muted-foreground text-sm">75% Complete</div>
          </div>
          <Progress value={75} className="mb-4" />
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle>Current Module</CardTitle>
              <div className="text-muted-foreground">Introduction to HTML</div>
            </div>
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">In Progress</div>
          </div>
          <div>
            <CardTitle className="mb-2">Completed Modules</CardTitle>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <div>HTML Basics</div>
                <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">Completed</div>
              </li>
              <li className="flex items-center justify-between">
                <div>CSS Fundamentals</div>
                <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">Completed</div>
              </li>
              <li className="flex items-center justify-between">
                <div>JavaScript Basics</div>
                <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm">Completed</div>
              </li>
            </ul>
          </div>
        </Card>
      </section>
      <section>
        <Card className="bg-card p-6 rounded-lg shadow">
          <CardTitle className="mb-4">Upcoming Assignments</CardTitle>
          <ul className="space-y-4">
            <li className="flex items-start justify-between">
              <div>
                <CardTitle>Build a Personal Website</CardTitle>
                <div className="text-muted-foreground">Due: April 15, 2023</div>
              </div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">Upcoming</div>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <CardTitle>Responsive Design Project</CardTitle>
                <div className="text-muted-foreground">Due: May 1, 2023</div>
              </div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">Upcoming</div>
            </li>
            <li className="flex items-start justify-between">
              <div>
                <CardTitle>JavaScript Interactivity</CardTitle>
                <div className="text-muted-foreground">Due: May 15, 2023</div>
              </div>
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">Upcoming</div>
            </li>
          </ul>
        </Card>
      </section>
    </main>
  </div>
  );
};

export default DashboardPage;
