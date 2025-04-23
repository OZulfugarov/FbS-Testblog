import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Sidebar} from '@/components/ui/sidebar';

interface Props {
  params: {
    id: string;
  };
}

export default function BlogPostView({params}: Props) {
  const postId = params.id;

  return (
    <div className="flex h-screen">
      <Sidebar/>
      <main className="container mx-auto py-10 flex-1">
        <Card className="bg-card text-card-foreground shadow-md">
          <CardHeader>
            <CardTitle>Blog Post {postId}</CardTitle>
            <CardDescription>Date: 2024-01-01 Author: Your Name</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This is the content of the blog post with ID {postId}. You can
              fetch the blog post content from a database or CMS based on the ID.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
