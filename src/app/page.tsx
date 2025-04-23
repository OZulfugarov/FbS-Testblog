'use client';

import {Button} from '@/components/ui/button';
import {Sidebar} from '@/components/ui/sidebar';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';

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
          <div>
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="mb-4 p-4 rounded-md shadow-md bg-card text-card-foreground"
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <p className="mt-2">{post.content.substring(0, 100)}...</p>
                <Button variant="link" className="mt-2" onClick={() => handleViewPost(post.id)}>
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
