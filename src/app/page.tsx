'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Sidebar} from '@/components/ui/sidebar';
import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'First Post',
    date: '2024-01-01',
    content: 'This is the content of the first post.',
  },
  {
    id: '2',
    title: 'Second Post',
    date: '2024-01-05',
    content: 'This is the content of the second post.',
  },
  {
    id: '3',
    title: 'Third Post',
    date: '2024-01-10',
    content: 'This is the content of the third post.',
  },
];

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(mockBlogPosts);
  const router = useRouter();

  const handleViewPost = (id: string) => {
    router.push(`/post/${id}`);
  };

  useEffect(() => {
    setBlogPosts(
      blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar/>
      <main className="container mx-auto py-10 flex-1">
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-card text-card-foreground shadow-md">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  {post.content.substring(0, 100)}...
                  <Button
                    variant="link"
                    className="mt-2"
                    onClick={() => handleViewPost(post.id)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

