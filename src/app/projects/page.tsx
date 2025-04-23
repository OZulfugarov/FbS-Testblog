import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Sidebar} from '@/components/ui/sidebar';

export default function ProjectsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <main className="container mx-auto py-10 flex-1">
        <Card className="bg-card text-card-foreground shadow-md">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is where you can showcase your personal projects. Include
              details about the projects, technologies used, and links to the
              projects.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
