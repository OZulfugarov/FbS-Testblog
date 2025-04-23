"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Avatar, AvatarFallback, AvatarImage} from './avatar';
import {cn} from '@/lib/utils';
import { Home, FileText, ListChecks } from "lucide-react";

const navigation = [
  {name: 'Blog', href: '/', icon: Home},
  {name: 'CV', href: '/cv', icon: FileText},
  {name: 'Projects', href: '/projects', icon: ListChecks},
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 border-r flex-shrink-0 bg-secondary p-4">
      <div className="mb-8">
        <Avatar className="h-24 w-24 mx-auto mb-4">
          <AvatarImage src="https://picsum.photos/200/200" alt="Your Avatar"/>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold text-center">Your Name</h2>
        <p className="text-sm text-muted-foreground text-center">
          A brief introduction about you.
        </p>
      </div>
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                href={item.href}
                className={cn(
                  'flex items-center px-4 py-2 rounded-md hover:bg-accent',
                  pathname === item.href
                    ? 'bg-accent text-foreground font-medium'
                    : 'text-muted-foreground'
                )}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}


