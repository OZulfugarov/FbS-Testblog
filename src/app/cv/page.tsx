import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Sidebar} from '@/components/ui/sidebar';

export default function CVPage() {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <main className="container mx-auto py-10 flex-1">
        <Card className="bg-card text-card-foreground shadow-md">
          <CardHeader>
            <CardTitle>CV</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is where your CV information will go. You can include your
              work experience, education, skills, and other relevant information.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
